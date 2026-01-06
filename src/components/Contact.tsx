import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const contactInfo = [{
  icon: Mail,
  label: "Email",
  value: "tranle2301.01@gmail.com",
  href: "mailto:tranle2301.01@gmail.com"
}, {
  icon: Phone,
  label: "Phone",
  value: "(206) 209-8181",
  href: "tel:+12062098181"
}, {
  icon: MapPin,
  label: "Location",
  value: "Atlanta, GA",
  href: null
}, {
  icon: Linkedin,
  label: "LinkedIn",
  value: "linkedin.com/in/tranle2301",
  href: "https://www.linkedin.com/in/tranle2301"
}];

export function Contact() {
  return <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle mx-auto text-secondary-foreground">Let's discuss opportunities in data science and analytics. I'm looking forward to work with you!</p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="font-display font-semibold text-xl text-primary mb-4">
                Contact Information
              </h3>
              <p className="text-muted-foreground mb-8">
                I'm actively seeking Summer 2026 internships and full-time opportunities 
                in Data Analytics, Data Science, and Data Engineering. Let's connect!
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map(info => <div key={info.label} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <info.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? <a href={info.href} target={info.label === "LinkedIn" ? "_blank" : undefined} rel={info.label === "LinkedIn" ? "noopener noreferrer" : undefined} className="text-primary hover:text-accent transition-colors font-medium">
                        {info.value}
                      </a> : <p className="text-primary font-medium">{info.value}</p>}
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
}