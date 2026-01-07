import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimation, ScrollAnimationStagger, staggerItem } from "./ScrollAnimation";
import { motion } from "framer-motion";

const experiences = [{
  role: "Graduate Research Assistant",
  organization: "Institute for Insight Department",
  period: "August 2025 – Present",
  bullets: [
    "Cooperating with faculty, peers and industry partners on real-world data science and ML projects for external stakeholders (Shepherd Center, Truist Bank, Better Business Bureau)",
    "Performing data cleaning, exploratory analysis, and feature engineering using Python, SQL, RStudio, and AI solutions",
    "Building and evaluating predictive models using linear regression, classification, and ensemble learning",
    "Contributing to project deliverables including technical documentation, code, and stakeholder presentations"
  ],
  current: true
}, {
  role: "Data Analytics",
  organization: "Shepherd Center, Atlanta, Georgia",
  period: "August 2025 – December 2025",
  bullets: [
    "Collaborated on a healthcare analytics project analyzing stroke patient data to support precision rehabilitation and treatment planning",
    "Applied machine learning methods (linear regression, logistic regression, KNN, Random Forest) and data-driven approaches to identify effective treatment strategies",
    "Performed data cleaning, exploratory analysis, feature engineering, and model evaluation using Python, SQL, RStudio, and generative AI solution tools, delivering clinically meaningful insights to advance patient care",
    "Presented project deliverables including technical documentation, reproducible code, and stakeholder presentations, ensuring clarity and usability of results"
  ],
  current: true
}, {
  role: "Research Assistant",
  organization: "Dr. Xinyu Fu, Computer Information System Department",
  period: "August 2024 – Present",
  bullets: [
    "Summarize literature reviews to support research projects, synthesizing findings into comprehensive reports by analyzing multiple research papers mainly operating Google Sheets",
    "Present research findings in written reports and oral presentations",
    "Cooperate with supervisor/PhD candidates through weekly meetings to provide project updates and align research progress with goal"
  ],
  current: true
}, {
  role: "Learning Assistant",
  organization: "Mathematics and Statistics Department",
  period: "August 2023 – May 2025",
  bullets: [
    "Advised over 1000 students in solving problems, completing assignments, and preparing for exams using Excel",
    "Communicated regularly with professors and instructors to support with coursework and identify areas where students need help twice or three times each week",
    "Provided one-on-one or group support to students in understanding statistical concepts and Excel functions in person and online twice a week with 2 hours at once"
  ],
  current: false
}, {
  role: "Undergraduate Research Fellow",
  organization: "J. Mack Robinson College of Business",
  period: "January 2024 – April 2024",
  bullets: [
    "Cooperated with a team of like-minded students to conduct in-depth business research aimed at enhancing decision-making processes",
    "Developed and refined research questions to address specific challenges and opportunities within the business landscape",
    "Represented in team meetings, conferences, workshops, and seminars to exchange ideas, share insights, and foster a collaborative research environment"
  ],
  current: false
}];

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-card">
      <div className="container-custom">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle mx-auto">A track record of working experiences, research and academic excellence </p>
        </ScrollAnimation>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />

            <ScrollAnimationStagger>
              {experiences.map((exp, index) => (
                <motion.div 
                  key={exp.role} 
                  variants={staggerItem}
                  className={`relative mb-8 md:mb-12 ${index % 2 === 0 ? 'md:pr-8 md:text-right md:ml-0 md:mr-auto md:w-1/2' : 'md:pl-8 md:ml-auto md:w-1/2'} pl-8 md:pl-0`}
                >
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
                        <ul className="text-muted-foreground text-sm mt-2 space-y-1 text-left">
                          {exp.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-accent mt-1">•</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </ScrollAnimationStagger>
          </div>
        </div>
      </div>
    </section>
  );
}
