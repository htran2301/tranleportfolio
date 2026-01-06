import { BarChart, Brain, HeartPulse, PieChart, FlaskConical } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollAnimation, ScrollAnimationStagger, staggerItem } from "./ScrollAnimation";
import { motion } from "framer-motion";

const services = [
  {
    icon: BarChart,
    title: "Data Analytics & Visualization",
    description: "Transform complex datasets into clear, actionable insights using dashboards and visual storytelling.",
  },
  {
    icon: Brain,
    title: "Machine Learning & Predictive Modeling",
    description: "Build and evaluate interpretable models for classification and prediction problems.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Data Analysis",
    description: "Analyze clinical and patient-level data to support treatment planning and outcome evaluation.",
  },
  {
    icon: PieChart,
    title: "Business Intelligence & Reporting",
    description: "Develop analytics solutions that support data-driven decision making across organizations.",
  },
  {
    icon: FlaskConical,
    title: "Research & Statistical Analysis",
    description: "Conduct literature reviews, quantitative analysis, and reproducible research workflows.",
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-card">
      <div className="container-custom">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="section-title">What I Do</h2>
          <p className="section-subtitle mx-auto">
            Leveraging data science to solve real-world problems
          </p>
        </ScrollAnimation>

        <ScrollAnimationStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div key={service.title} variants={staggerItem}>
              <Card className="card-hover border-border/50 group h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="font-display text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </ScrollAnimationStagger>
      </div>
    </section>
  );
}
