import { useState } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimation } from "./ScrollAnimation";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import gsuDiploma from "@/assets/gsu-diploma.jpeg";

export function Education() {
  const [showDiploma, setShowDiploma] = useState(false);

  return (
    <section id="education" className="section-padding bg-muted/30">
      <div className="container-custom">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle mx-auto">
            Academic background and qualifications
          </p>
        </ScrollAnimation>

        <ScrollAnimation className="max-w-3xl mx-auto">
          <Card className="card-hover border-border/50 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Diploma Image */}
                <div 
                  className="relative cursor-pointer group"
                  onClick={() => setShowDiploma(true)}
                >
                  <img 
                    src={gsuDiploma} 
                    alt="Georgia State University Diploma"
                    className="w-full h-full object-cover min-h-[200px] transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors flex items-center justify-center">
                    <span className="text-background opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                      Click to view
                    </span>
                  </div>
                </div>

                {/* Education Details */}
                <div className="p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <Badge className="bg-accent/10 text-accent border-accent/30">
                      Magna Cum Laude
                    </Badge>
                  </div>

                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    Bachelor of Business Administration
                  </h3>
                  
                  <p className="text-primary font-medium mb-1">
                    Computer Information Systems
                  </p>
                  
                  <p className="text-muted-foreground mb-4">
                    Georgia State University
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      <span>May 2025</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      <span>Atlanta, Georgia</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>

        <Dialog open={showDiploma} onOpenChange={setShowDiploma}>
          <DialogContent className="max-w-4xl">
            <img 
              src={gsuDiploma} 
              alt="Georgia State University Diploma"
              className="w-full h-auto rounded-lg"
            />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
