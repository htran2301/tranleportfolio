import { defineTool } from "@lovable.dev/mcp-js";

const SKILLS = {
  categories: [
    {
      title: "Technical Skills",
      skills: [
        "SQL (Advanced)", "Python (pandas, NumPy, matplotlib)", "R", "NoSQL",
        "Machine Learning", "Deep Learning", "Gen AI", "Large Language Models (LLMs)",
        "Natural Language Processing (NLP)", "Clustering", "Data Pipelines", "Databricks",
        "Jupyter Notebook", "PyCharm", "MongoDB", "Power BI", "Tableau",
        "Excel (Pivot Tables, VLOOKUP)", "Data Visualization", "Data Architecture",
        "Statistics", "Transformation",
      ],
    },
    {
      title: "Data Wrangling & Preparation",
      skills: [
        "Data Cleaning & Preprocessing", "Missing Value Handling", "Outlier Detection",
        "Feature Engineering", "Data Normalization & Transformation",
        "Data Validation & Quality Checks", "ETL / ELT Pipelines",
      ],
    },
    {
      title: "Analytics & Tools",
      skills: [
        "Tableau", "Power BI", "Excel", "Databricks", "Jupyter Notebook", "PyCharm",
        "Statistical Analysis", "Quantitative Research",
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        "Critical Thinking", "Decision-Making", "Communication Skills", "Problem-Solving",
        "Agility", "Learning Agility", "Analytical Thinking", "Data Storytelling",
        "Cross-Functional Collaboration", "Adaptability", "Attention to Detail",
        "Time Management", "Project Management", "Public Speaking", "Business Analyst",
      ],
    },
  ],
};

export default defineTool({
  name: "list_skills",
  title: "List skills",
  description: "List Tran Le's skills grouped by category (technical, data wrangling, analytics tools, soft skills).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(SKILLS, null, 2) }],
    structuredContent: SKILLS,
  }),
});