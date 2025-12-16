import { Code, BarChart3, Stethoscope, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    icon: Code,
    title: "Technical Skills",
    skills: ["Python", "R", "SQL", "Machine Learning", "Regression", "Classification", "Random Forest", "KNN", "Data Cleaning", "Feature Engineering", "Model Evaluation"],
    color: "bg-primary/10 text-primary",
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
    skills: ["Communication", "Presentation", "Project Leadership", "Team Leadership", "Critical Thinking", "Problem Solving"],
    color: "bg-navy-light/10 text-navy-light",
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle mx-auto">
            A comprehensive toolkit for data-driven problem solving
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="card-hover border-border/50">
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
          ))}
        </div>
      </div>
    </section>
  );
}
