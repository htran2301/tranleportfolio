import { useState } from "react";
import { Award, GraduationCap, Calendar, Trophy, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimation, ScrollAnimationStagger, staggerItem } from "./ScrollAnimation";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import shepherdCertificate from "@/assets/shepherd-certificate.jpeg";
import shepherdOutstandingCertificate from "@/assets/shepherd-outstanding-certificate.jpeg";
import shepherdSprintCertificate from "@/assets/shepherd-sprint-certificate.jpeg";

const awards = [
  {
    title: "Delta Analytics Scholars",
    institution: "Georgia State University Foundation",
    period: "Spring 2026",
    type: "scholarship",
  },
  {
    title: "Outstanding Work Recognition",
    institution: "Shepherd Center",
    period: "December 2025",
    type: "certificate",
    image: shepherdOutstandingCertificate,
  },
  {
    title: "Fall 2025 Analytics Sprint",
    institution: "Georgia State University & Shepherd Center",
    period: "December 2025",
    type: "certificate",
    image: shepherdSprintCertificate,
  },
  {
    title: "Dean's List",
    institution: "Georgia State University",
    period: "Fall 2025",
    type: "dean",
  },
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="awards" className="section-padding">
      <div className="container-custom">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="section-title">Awards & Recognition</h2>
          <p className="section-subtitle mx-auto">
            Academic achievements and honors earned throughout my educational journey
          </p>
        </ScrollAnimation>

        <ScrollAnimationStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {awards.map((award) => (
            <motion.div key={`${award.title}-${award.period}`} variants={staggerItem}>
              <Card className={`card-hover border-border/50 h-full text-center ${
                award.type === "scholarship" ? "border-teal/30 bg-teal/5" :
                award.type === "certificate" ? "border-navy-light/30 bg-navy-light/5" :
                award.type === "president" ? "border-accent/30" : ""
              }`}>
                <CardContent className="p-6 flex flex-col items-center gap-4">
                  {award.image ? (
                    <img 
                      src={award.image} 
                      alt={award.title}
                      className="w-full h-32 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => setSelectedImage(award.image!)}
                    />
                  ) : (
                    <div className={`p-3 rounded-full ${
                      award.type === "scholarship"
                        ? "bg-teal/10 text-teal"
                        : award.type === "certificate"
                          ? "bg-navy-light/10 text-navy-light"
                          : award.type === "president" 
                            ? "bg-accent/10 text-accent" 
                            : "bg-primary/10 text-primary"
                    }`}>
                      {award.type === "scholarship" ? (
                        <Trophy className="h-8 w-8" />
                      ) : award.type === "certificate" ? (
                        <FileCheck className="h-8 w-8" />
                      ) : award.type === "president" ? (
                        <Award className="h-8 w-8" />
                      ) : (
                        <GraduationCap className="h-8 w-8" />
                      )}
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <Badge 
                      className={`${
                        award.type === "scholarship"
                          ? "bg-teal/10 text-teal border-teal/30"
                          : award.type === "certificate"
                            ? "bg-navy-light/10 text-navy-light border-navy-light/30"
                            : award.type === "president" 
                              ? "bg-accent/10 text-accent border-accent/30" 
                              : "bg-primary/10 text-primary border-primary/30"
                      }`}
                    >
                      {award.type === "scholarship" ? "Scholarship Award" : 
                       award.type === "certificate" ? "Certificate" :
                       award.type === "president" ? "President's List" : "Dean's List"}
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

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-3xl">
            {selectedImage && (
              <img 
                src={selectedImage} 
                alt="Certificate"
                className="w-full h-auto rounded-lg"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
