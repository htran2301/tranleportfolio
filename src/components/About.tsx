import { GraduationCap, Award, Target, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const education = [{
  degree: "M.S. in Data Science and Analytics",
  school: "Georgia State University",
  period: "Expected Dec 2026",
  current: true
}, {
  degree: "B.B.A. in Computer Information Systems",
  school: "Georgia State University",
  specialization: "Data Analytics Concentration",
  period: "May 2025",
  current: false
}];
const values = [{
  icon: Target,
  title: "Analytical Rigor",
  description: "Committed to methodical, evidence-based approaches in every analysis."
}, {
  icon: Award,
  title: "Reproducibility",
  description: "Creating transparent, well-documented work that can be validated and built upon."
}, {
  icon: Users,
  title: "Collaboration",
  description: "Working effectively with cross-functional teams to achieve shared goals."
}];
export function About() {
  return <section id="about" className="section-padding bg-card">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mx-auto">
            Passionate about translating complex data into actionable insights
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm a Graduate Research Assistant and Master's student in Data Science and Analytics 
              at Georgia State University, with a strong foundation in data analytics, machine learning, 
              and healthcare data. My research focuses on leveraging advanced analytics to support 
              clinical decision-making and patient outcomes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently, I collaborate with the Shepherd Center on healthcare analytics projects, 
              applying machine learning techniques to stroke patient rehabilitation data. My goal 
              is to bridge the gap between complex data and meaningful insights that drive real-world impact.
            </p>
            <p className="text-muted-foreground leading-relaxed">I'm currently seeking a Summer 2026 internships and full-time role post-graduation in December 2026 in Data Analytics, Data Science, and Data Engineering.<span className="text-primary font-medium">Summer 2026 internships</span> and 
              <span className="text-primary font-medium"> full-time roles post-graduation</span> in 
              Data Analytics, Data Science, and Data Engineering.
            </p>

            {/* Values */}
            <div className="grid gap-4 mt-8">
              {values.map(value => <div key={value.title} className="flex items-start gap-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <value.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>)}
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <h3 className="font-display font-semibold text-xl text-primary mb-6 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-accent" />
              Education
            </h3>
            <div className="relative space-y-6">
              {/* Timeline line */}
              <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-border" />
              
              {education.map((edu, index) => <Card key={index} className={`relative ml-8 ${edu.current ? 'border-accent/50 shadow-soft' : ''}`}>
                  {/* Timeline dot */}
                  <div className={`absolute -left-8 top-6 w-6 h-6 rounded-full border-4 border-card ${edu.current ? 'bg-accent' : 'bg-muted'}`} />
                  
                  <CardContent className="p-6">
                    {edu.current && <span className="inline-block px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded mb-2">
                        Current
                      </span>}
                    <h4 className="font-display font-semibold text-primary">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.school}</p>
                    {edu.specialization && <p className="text-sm text-muted-foreground">{edu.specialization}</p>}
                    <p className="text-sm text-accent mt-2">{edu.period}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
}