import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
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
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon."
    });
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };
  return <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle mx-auto text-secondary-foreground">Let's discuss opportunities in data science and analytics. I'm looking forward to work with you!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-display font-semibold text-xl text-primary mb-4">
                Contact Information
              </h3>
              <p className="text-muted-foreground mb-8">
                I'm actively seeking Summer 2026 internships and full-time opportunities 
                in Data Analytics, Data Science, and Data Engineering. Let's connect!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map(info => <div key={info.label} className="flex items-center gap-4">
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

          {/* Contact Form */}
          <Card className="border-border/50">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} required className="bg-background" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" value={formData.email} onChange={e => setFormData({
                  ...formData,
                  email: e.target.value
                })} required className="bg-background" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message..." rows={5} value={formData.message} onChange={e => setFormData({
                  ...formData,
                  message: e.target.value
                })} required className="bg-background resize-none" />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-navy-light">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
}