import { ScrollAnimation } from "./ScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, User } from "lucide-react";

const references = [
  {
    name: "Dr. Yichen Cheng",
    title: "Associate Professor of Business Analytics",
    organization: "Georgia State University",
    email: "ycheng11@gsu.edu",
  },
  {
    name: "Dr. Houping Xiao",
    title: "Assistant Professor",
    organization: "Georgia State University",
    email: "hxiao@gsu.edu",
    phone: "404-413-7704",
  },
  {
    name: "Dr. Xinyu Fu",
    title: "Assistant Professor",
    organization: "Georgia State University",
    email: "xfu11@gsu.edu",
  },
  {
    name: "Janna Pankey",
    title: "Data Analyst",
    organization: "State Farm",
    linkedin: "https://www.linkedin.com/in/jannapankey/",
  },
];

export const References = () => {
  return (
    <section id="references" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            References
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Professional references available upon request
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {references.map((ref, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{ref.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {ref.title}
                      </p>
                      <p className="text-sm text-muted-foreground mb-3">
                        {ref.organization}
                      </p>
                      <div className="space-y-1">
                        {ref.email && (
                          <a
                            href={`mailto:${ref.email}`}
                            className="flex items-center gap-2 text-sm text-primary hover:underline"
                          >
                            <Mail className="h-4 w-4" />
                            {ref.email}
                          </a>
                        )}
                        {ref.phone && (
                          <a
                            href={`tel:${ref.phone}`}
                            className="flex items-center gap-2 text-sm text-primary hover:underline"
                          >
                            <Phone className="h-4 w-4" />
                            {ref.phone}
                          </a>
                        )}
                        {ref.linkedin && (
                          <a
                            href={ref.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-primary hover:underline"
                          >
                            <Linkedin className="h-4 w-4" />
                            LinkedIn
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};
