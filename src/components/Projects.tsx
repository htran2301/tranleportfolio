import { ExternalLink, Github, ArrowUpRight, X } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollAnimation, ScrollAnimationStagger, staggerItem } from "./ScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import msa8030Poster from "@/assets/msa8030-poster.jpg";
const projects = [
  {
    title: "Healthcare Analytics – Shepherd Center",
    period: "August 2025 – December 2025",
    description: "Collaborated on a healthcare analytics project analyzing stroke patient data to support precision rehabilitation and treatment planning. Applied machine learning methods and data-driven approaches to identify effective treatment strategies. Performed data cleaning, exploratory analysis, feature engineering, and model evaluation, delivering clinically meaningful insights to advance patient care.",
    tools: ["Python", "SQL", "RStudio", "Machine Learning", "Linear Regression", "Logistic Regression", "KNN", "Random Forest", "Generative AI"],
    impact: "Delivered technical documentation, reproducible code, and stakeholder presentations for clinical decision-making",
    featured: true,
  },
  {
    title: "Employee Attrition Prediction – Machine Learning",
    period: "August 2025 – December 2025",
    description: "Built a predictive machine learning pipeline to identify employees at risk of attrition using the IBM HR Analytics dataset (1,470 employees). Performed data cleaning, feature encoding, scaling, and addressed class imbalance using SMOTE. Trained and compared multiple classification models to balance recall and precision for actionable HR decision-making.",
    tools: ["Python", "Machine Learning", "Logistic Regression", "Random Forest", "SVM", "XGBoost", "SMOTE", "Feature Engineering", "Model Evaluation"],
    impact: "Identified key attrition drivers (overtime, job level, total working years) and delivered a balanced prediction model to support proactive retention strategies",
    featured: true,
  },
  {
    title: "Impact of Remote Work on Mental Health – Data Visualization",
    period: "August 2025 – December 2025",
    description: "Analyzed a 5,000-record global workforce dataset to examine how remote work influences employee mental health, stress levels, work–life balance, and productivity across industries and regions. Performed data cleaning and exploratory data analysis (EDA) and designed visualizations to uncover patterns in burnout, anxiety, depression, and productivity outcomes.",
    tools: ["Python", "Data Visualization", "EDA", "Mental Health Analytics", "pandas", "matplotlib", "seaborn"],
    impact: "Identified global and role-specific mental health trends, challenged assumptions about remote vs onsite work hours, and demonstrated how visual analytics can support evidence-based workplace policy decisions",
    posterImage: msa8030Poster,
    githubLink: "https://github.com/htran2301/remotework_project",
    featured: true,
  },
  {
    title: "Healthcare Monitoring Systems – Databricks",
    period: "August 2025 – December 2025",
    description: "Built a healthcare monitoring system on Databricks using SQL to analyze 1,000+ synthetic patient records. Wrote analytical SQL queries to identify high-risk chronic disease patients with focused analysis on Type 2 Diabetes.",
    tools: ["Databricks", "SQL", "Data Analytics", "Dashboard", "Healthcare Data"],
    impact: "Enabled data-driven identification of high-risk patients and overdue follow-ups",
    dashboardLink: "https://dbc-b3cd794b-3f4a.cloud.databricks.com/dashboardsv3/01f0d4c3a11e18358e750b4f8c067796/published?o=4111843936808833",
    featured: true,
  },
  {
    title: "Capstone Site 2.0 Website – Team Lead",
    period: "January 2025 – May 2025",
    description: "Led a team of 3 undergraduate students, collaborating with faculty, alumni, and companies to build 80% of website for CIS undergraduate students. Managed project scope, timelines, and documentation using Smartsheet.",
    tools: ["Figma", "Webflow", "Google Sites", "UI/UX", "Smartsheet", "Project Management"],
    impact: "Successfully delivered user-friendly platform for CIS students",
    featured: false,
  },
  {
    title: "Fraudulent Job Post Detection",
    period: "August 2024 – December 2024",
    description: "Cooperated with a team of 5 to develop a machine learning pipeline in R analyzing 17,000+ job postings with 17 features to detect fraudulent job postings. Processed data cleaning, feature engineering, and compared multiple models.",
    tools: ["R", "Logistic Regression", "KNN", "Random Forest", "Feature Engineering"],
    impact: "98% accuracy and 97% balanced accuracy with Random Forest",
    featured: true,
  },
];

export function Projects() {
  const [selectedPoster, setSelectedPoster] = useState<string | null>(null);

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle mx-auto">
            Real-world applications of data science and analytics
          </p>
          <a 
            href="https://github.com/htran2301" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-accent hover:underline"
          >
            <Github className="h-5 w-5" />
            View details on GitHub
          </a>
        </ScrollAnimation>

        <ScrollAnimationStagger className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div key={project.title} variants={staggerItem}>
              <Card 
                className={`card-hover border-border/50 overflow-hidden h-full ${
                  project.featured ? 'lg:row-span-1' : ''
                }`}
              >
                <CardHeader className="pb-4">
                  <div>
                    {project.githubLink ? (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors"
                      >
                        <CardTitle className="font-display text-lg flex items-center gap-2">
                          {project.title}
                          <Github className="h-4 w-4" />
                        </CardTitle>
                      </a>
                    ) : (
                      <CardTitle className="font-display text-lg">{project.title}</CardTitle>
                    )}
                    <p className="text-sm text-muted-foreground mt-1">{project.period}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <Badge 
                        key={tool} 
                        variant="secondary"
                        className="bg-secondary text-xs"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-border flex items-center justify-between">
                    <p className="text-sm">
                      <span className="text-muted-foreground">Impact: </span>
                      <span className="text-primary font-medium">{project.impact}</span>
                    </p>
                    {project.dashboardLink && (
                      <a 
                        href={project.dashboardLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-accent hover:underline flex items-center gap-1"
                      >
                        <ExternalLink className="h-3 w-3" />
                        View Dashboard
                      </a>
                    )}
                    {project.posterImage && (
                      <button 
                        onClick={() => setSelectedPoster(project.posterImage!)}
                        className="text-sm text-accent hover:underline flex items-center gap-1"
                      >
                        <ExternalLink className="h-3 w-3" />
                        View Poster
                      </button>
                    )}
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-accent hover:underline flex items-center gap-1"
                      >
                        <Github className="h-3 w-3" />
                        View Code
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </ScrollAnimationStagger>

        {/* Research Section */}
        <ScrollAnimation delay={0.3} className="mt-16">
          <h3 className="font-display font-semibold text-2xl text-primary mb-6 text-center">
            Research & Publications
          </h3>
          <Card className="border-accent/30 bg-gradient-to-br from-accent/5 to-transparent">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <Badge className="bg-accent/10 text-accent border-0 mb-3">AMCIS 2025 • TREO Talk</Badge>
                  <h4 className="font-display font-semibold text-lg text-primary mb-2">
                    "Talk to Me: A Preliminary Review on the Evolution and Impact of Emotional AI"
                  </h4>
                  <p className="text-muted-foreground">
                    Research exploring the development and implications of emotionally intelligent AI systems
                  </p>
                </div>
                <a href="https://aisel.aisnet.org/treos_amcis2025/194/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="shrink-0 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Paper
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>

      {/* Poster Modal */}
      <AnimatePresence>
        {selectedPoster && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedPoster(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPoster(null)}
                className="absolute top-2 right-2 z-10 bg-background/80 rounded-full p-2 hover:bg-background transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              <img 
                src={selectedPoster} 
                alt="Project Poster" 
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
