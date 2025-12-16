import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Healthcare Analytics – Shepherd Center",
    description: "Stroke patient data analysis using machine learning to support precision rehabilitation. Collaborated with clinicians to develop predictive models for patient outcomes.",
    tools: ["Python", "Machine Learning", "Healthcare Data", "Statistical Analysis"],
    impact: "Supporting clinical decision-making for rehabilitation planning",
    featured: true,
  },
  {
    title: "Fraudulent Job Post Detection",
    description: "Built an ML pipeline analyzing 17,000+ job posting records to identify fraudulent listings with high accuracy.",
    tools: ["Python", "Random Forest", "NLP", "Classification"],
    impact: "98% accuracy in detecting fraudulent job posts",
    featured: true,
  },
  {
    title: "Mental Health in Remote Work Settings",
    description: "Predictive modeling and feature importance analysis on employee well-being data to understand factors affecting mental health.",
    tools: ["Python", "Regression", "Feature Engineering", "Data Visualization"],
    impact: "Identified key predictors of employee mental health",
    featured: true,
  },
  {
    title: "Capstone Site 2.0 Website",
    description: "Led UI/UX and development efforts as Team Lead for an academic website redesign project.",
    tools: ["Web Development", "UI/UX", "Team Leadership", "Project Management"],
    impact: "Successfully delivered redesigned platform",
    featured: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            Real-world applications of data science and analytics
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`card-hover border-border/50 overflow-hidden ${
                project.featured ? 'lg:row-span-1' : ''
              }`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <CardTitle className="font-display text-lg pr-4">{project.title}</CardTitle>
                  {project.featured && (
                    <Badge className="bg-accent/10 text-accent border-0 shrink-0">Featured</Badge>
                  )}
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

                <div className="pt-2 border-t border-border">
                  <p className="text-sm">
                    <span className="text-muted-foreground">Impact: </span>
                    <span className="text-primary font-medium">{project.impact}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Research Section */}
        <div className="mt-16">
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
                <Button variant="outline" className="shrink-0 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Paper
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
