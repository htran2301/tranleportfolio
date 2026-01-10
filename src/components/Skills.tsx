import { Code, BarChart3, Stethoscope, MessageSquare, Workflow, Database } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimation, ScrollAnimationStagger, staggerItem } from "./ScrollAnimation";
import { motion } from "framer-motion";

const skillCategories = [
  {
    icon: Code,
    title: "Technical Skills",
    skills: ["SQL (Advanced)", "Python (pandas, NumPy, matplotlib)", "R", "Tableau", "Power BI", "Excel (Pivot Tables, Power Query)", "Databricks", "Delta Lake", "Machine Learning", "MongoDB"],
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Database,
    title: "Data Wrangling & Preparation",
    skills: ["Data Cleaning & Preprocessing", "Missing Value Handling", "Outlier Detection", "Feature Engineering", "Data Normalization & Transformation", "Data Validation & Quality Checks", "ETL / ELT Pipelines"],
    color: "bg-teal-light/10 text-teal",
  },
  {
    icon: BarChart3,
    title: "Analytics & Tools",
    skills: ["Tableau", "Power BI", "Excel", "Databricks", "Jupyter Notebook", "PyCharm", "Statistical Analysis", "Quantitative Research"],
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Stethoscope,
    title: "Domain Expertise",
    skills: ["Healthcare Analytics", "Business Intelligence", "Academic Research", "Applied Research", "Clinical Data Analysis"],
    color: "bg-teal/10 text-teal",
  },
  {
    icon: MessageSquare,
    title: "Soft Skills",
    skills: ["Critical Thinking", "Decision-Making", "Communication Skills", "Problem-Solving", "Agility", "Learning Agility", "Analytical Thinking", "Data Storytelling", "Cross-Functional Collaboration", "Adaptability", "Attention to Detail", "Time Management"],
    color: "bg-navy-light/10 text-navy-light",
  },
];

const workflowSteps = [
  "Data Wrangling",
  "EDA",
  "Feature Engineering",
  "Modeling",
  "Evaluation",
  "Visualization",
];

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle mx-auto">
            A comprehensive toolkit for data-driven problem solving
          </p>
        </ScrollAnimation>

        <ScrollAnimationStagger className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={staggerItem}>
              <Card className="card-hover border-border/50 h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${category.color}`}>
                      <category.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="font-display text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary"
                        className="bg-secondary hover:bg-muted transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Data Science Workflow */}
          <motion.div variants={staggerItem} className="md:col-span-2">
            <Card className="card-hover border-border/50">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Workflow className="h-5 w-5" />
                  </div>
                  <CardTitle className="font-display text-lg">Data Science Workflow</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
                  {workflowSteps.map((step, index) => (
                    <div key={step} className="flex items-center gap-2 md:gap-4">
                      <Badge 
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors px-3 py-1"
                      >
                        {step}
                      </Badge>
                      {index < workflowSteps.length - 1 && (
                        <span className="text-muted-foreground font-medium">→</span>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </ScrollAnimationStagger>
      </div>
    </section>
  );
}
