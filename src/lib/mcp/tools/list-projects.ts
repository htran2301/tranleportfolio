import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const PROJECTS = [
  {
    title: "Snowflake Sales & Forecasting Analytics Platform",
    period: "June 2026 – July 2026",
    description:
      "End-to-end analytics platform in Snowflake using advanced SQL and Snowpark Python to ingest, transform, validate, and forecast multi-year economic datasets from the Snowflake Marketplace. Evaluated ARIMA, SARIMAX, and ETS models using RMSE and built an interactive Streamlit dashboard.",
    tools: ["Snowflake", "SQL", "Snowpark Python", "Python", "Streamlit", "ARIMA", "SARIMAX", "ETS", "Time-Series Forecasting"],
    impact: "Automated end-to-end forecasting workflow and transformed raw economic data into actionable business insights.",
  },
  {
    title: "Environmental Intelligence System",
    period: "January 2026 – May 2026",
    description:
      "Processed 500+ ESG and sustainability reports using Python-based document extraction and data pipelines. Built a Neo4j knowledge graph and ontology to connect environmental metrics, operational claims, and supporting evidence, then developed a Streamlit application for search and comparison.",
    tools: ["Python", "ESG", "Sustainability Analytics", "Document Extraction", "Data Pipelines", "Neo4j", "Knowledge Graph", "Ontology", "Streamlit"],
    impact: "Enabled users to search reports, compare companies, and investigate sustainability performance through a knowledge graph app.",
  },
  {
    title: "Heart Attack Risk Prediction",
    period: "February 2026",
    description:
      "End-to-end ML model to predict heart attack risk, including data cleaning, preprocessing, EDA, class imbalance handling, and logistic regression classification. Presented at the AI & Analytics Conference poster competition.",
    tools: ["Python", "pandas", "numpy", "matplotlib", "scikit-learn", "Machine Learning", "Logistic Regression", "EDA"],
    impact: "Advanced to final presentation round at AI & Analytics Conference poster competition.",
    github: "https://github.com/htran2301/heart-disease",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7433741349268402176/",
  },
  {
    title: "Healthcare Analytics – Shepherd Center",
    period: "August 2025 – December 2025",
    description:
      "Analyzed stroke patient data to support precision rehabilitation and treatment planning. Applied ML methods including linear regression, logistic regression, KNN, and Random Forest.",
    tools: ["Python", "SQL", "RStudio", "Machine Learning", "Linear Regression", "Logistic Regression", "KNN", "Random Forest", "Generative AI"],
    impact: "Delivered technical documentation, reproducible code, and stakeholder presentations for clinical decision-making.",
  },
  {
    title: "Employee Attrition Prediction",
    period: "August 2025 – December 2025",
    description:
      "Supervised ML models to predict employee attrition using IBM HR Analytics data (1,470 employees), addressing class imbalance with SMOTE. Compared Logistic Regression, Decision Tree, Random Forest, SVM, and XGBoost.",
    tools: ["Python", "Machine Learning", "Logistic Regression", "Decision Tree", "Random Forest", "SVM", "XGBoost", "SMOTE", "Feature Engineering"],
    impact: "Identified key attrition drivers and translated model outputs into actionable retention insights.",
    github: "https://github.com/htran2301/employeeprediction_project",
  },
  {
    title: "Impact of Remote Work on Mental Health",
    period: "August 2025 – December 2025",
    description:
      "Analyzed a 5,000-record global workforce dataset to examine how remote work influences mental health, stress, work–life balance, and productivity. Performed cleaning, EDA, and visualization.",
    tools: ["Python", "Data Visualization", "EDA", "pandas", "matplotlib", "seaborn"],
    impact: "Uncovered global and role-specific mental health trends and demonstrated visual analytics for evidence-based policy.",
    github: "https://github.com/htran2301/remotework_project",
  },
  {
    title: "Healthcare Monitoring Systems",
    period: "August 2025 – December 2025",
    description:
      "Built a healthcare monitoring system in Databricks using SQL over 1,000+ synthetic patient records with a focus on Type 2 Diabetes. Delivered a dashboard for high-risk identification and overdue follow-ups.",
    tools: ["Databricks", "SQL", "Data Analytics", "Dashboard", "Healthcare Data"],
    impact: "Enabled data-driven identification of high-risk patients and overdue follow-ups.",
    github: "https://github.com/htran2301/healthcaresystems_project",
  },
  {
    title: "Capstone Site 2.0 Website – Team Lead",
    period: "January 2025 – May 2025",
    description:
      "Led a team of 3, collaborating with faculty, alumni, and companies to build 80% of a website for CIS undergraduates. Managed scope, timelines, tasks, and documentation.",
    tools: ["Figma", "Webflow", "Google Sites", "UI/UX", "Smartsheet", "Project Management"],
    impact: "Delivered a user-friendly platform for CIS students.",
  },
  {
    title: "Fraudulent Job Post Detection",
    period: "August 2024 – December 2024",
    description:
      "Team ML pipeline in R analyzing 17,000+ job postings with 17 features to detect fraud. Compared multiple models after data cleaning and feature engineering.",
    tools: ["R", "Logistic Regression", "KNN", "Random Forest", "Feature Engineering"],
    impact: "98% accuracy and 97% balanced accuracy with Random Forest.",
  },
  {
    title: "Youth Entertainment Hack-A-Ton Project",
    period: "2024",
    description:
      "Independently built a youth entertainment website prototype during a Hack-A-Ton after team challenges.",
    tools: ["Google Sites", "Web Development", "UI/UX"],
    impact: "Built a complete prototype independently under pressure.",
    website: "https://sites.google.com/view/youthentertainment/home",
  },
];

const RESEARCH = {
  title: "Talk to Me: A Preliminary Review on the Evolution and Impact of Emotional AI",
  venue: "AMCIS 2025 • TREO Talk",
  url: "https://aisel.aisnet.org/treos_amcis2025/194/",
};

export default defineTool({
  name: "list_projects",
  title: "List projects",
  description:
    "List Tran Le's data science, analytics, and ML projects. Optionally filter with a case-insensitive substring against title, description, or tools.",
  inputSchema: {
    query: z
      .string()
      .trim()
      .min(1)
      .optional()
      .describe("Optional case-insensitive substring filter (title, description, tools)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const q = query?.toLowerCase();
    const filtered = q
      ? PROJECTS.filter((p) => {
          const haystack = [p.title, p.description, ...p.tools].join(" ").toLowerCase();
          return haystack.includes(q);
        })
      : PROJECTS;

    const payload = { count: filtered.length, projects: filtered, research: RESEARCH };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});