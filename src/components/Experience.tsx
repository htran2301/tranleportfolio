import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const experiences = [{
  role: "Graduate Research Assistant",
  organization: "Shepherd Center / Institute for Insight",
  period: "2025 – Present",
  description: "Leading healthcare analytics research on stroke patient rehabilitation using machine learning techniques.",
  current: true
}, {
  role: "Research Assistant",
  organization: "CIS Department, Georgia State University",
  period: "2024 – 2025",
  description: "Conducted research on Emotional AI, resulting in AMCIS 2025 publication.",
  current: false
}, {
  role: "Learning Assistant",
  organization: "Mathematics & Statistics Department, GSU",
  period: "2023 – 2024",
  description: "Supported students in introductory statistics courses, developing communication and mentorship skills.",
  current: false
}, {
  role: "Undergraduate Research Fellow",
  organization: "Georgia State University",
  period: "2023 – 2024",
  description: "Participated in research initiatives developing skills in academic research methodology.",
  current: false
}];
export function Experience() {
  return <section id="experience" className="section-padding bg-card">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle mx-auto">A track record of working experiences, research and academic excellence </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />

            {experiences.map((exp, index) => <div key={exp.role} className={`relative mb-8 md:mb-12 ${index % 2 === 0 ? 'md:pr-8 md:text-right md:ml-0 md:mr-auto md:w-1/2' : 'md:pl-8 md:ml-auto md:w-1/2'} pl-8 md:pl-0`}>
                {/* Timeline dot */}
                <div className={`absolute w-4 h-4 rounded-full border-4 border-card top-6 ${exp.current ? 'bg-accent' : 'bg-muted'} ${index % 2 === 0 ? 'left-0 md:left-auto md:-right-2 transform md:translate-x-1/2' : 'left-0 md:-left-2 transform md:-translate-x-1/2'}`} />

                <Card className={`card-hover ${exp.current ? 'border-accent/50 shadow-soft' : 'border-border/50'}`}>
                  <CardContent className="p-6">
                    <div className={`flex flex-col gap-2 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                      {exp.current && <Badge className="bg-accent/10 text-accent border-0 w-fit">Current</Badge>}
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <h3 className="font-display font-semibold text-primary">{exp.role}</h3>
                      <p className="text-accent font-medium text-sm">{exp.organization}</p>
                      <p className={`text-muted-foreground text-sm mt-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        {exp.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}