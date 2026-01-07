import { Award, GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimation, ScrollAnimationStagger, staggerItem } from "./ScrollAnimation";
import { motion } from "framer-motion";

const awards = [
  {
    title: "President's List",
    institution: "Georgia State University",
    period: "Spring 2025",
    type: "president",
  },
  {
    title: "Dean's List",
    institution: "Georgia State University",
    period: "Fall 2024",
    type: "dean",
  },
  {
    title: "President's List",
    institution: "Georgia State University",
    period: "Summer 2024",
    type: "president",
  },
  {
    title: "Dean's List",
    institution: "Georgia State University",
    period: "Spring 2023",
    type: "dean",
  },
];

export function Awards() {
  return (
    <section id="awards" className="section-padding">
      <div className="container-custom">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="section-title">Awards & Recognition</h2>
          <p className="section-subtitle mx-auto">
            Academic achievements and honors earned throughout my educational journey
          </p>
        </ScrollAnimation>

        <ScrollAnimationStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {awards.map((award, index) => (
            <motion.div key={`${award.title}-${award.period}`} variants={staggerItem}>
              <Card className={`card-hover border-border/50 h-full text-center ${
                award.type === "president" ? "border-accent/30" : ""
              }`}>
                <CardContent className="p-6 flex flex-col items-center gap-4">
                  <div className={`p-3 rounded-full ${
                    award.type === "president" 
                      ? "bg-accent/10 text-accent" 
                      : "bg-primary/10 text-primary"
                  }`}>
                    {award.type === "president" ? (
                      <Award className="h-8 w-8" />
                    ) : (
                      <GraduationCap className="h-8 w-8" />
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Badge 
                      className={`${
                        award.type === "president" 
                          ? "bg-accent/10 text-accent border-accent/30" 
                          : "bg-primary/10 text-primary border-primary/30"
                      }`}
                    >
                      {award.type === "president" ? "President's List" : "Dean's List"}
                    </Badge>
                    <h3 className="font-display font-semibold text-foreground">
                      {award.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{award.institution}</p>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-auto">
                    <Calendar className="h-4 w-4" />
                    <span>{award.period}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </ScrollAnimationStagger>
      </div>
    </section>
  );
}
