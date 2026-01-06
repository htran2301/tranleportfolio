import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-soft-blue/50 to-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="animate-fade-up">
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
                Graduate Research Assistant
              </span>
            </div>
            
            <h1 className="animate-fade-up animation-delay-100 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
              Tran (Theresa) Le
            </h1>
            
            <h2 className="animate-fade-up animation-delay-200 text-xl md:text-2xl text-navy-light font-medium mb-4">
              Data Science & Analytics
            </h2>
            
            <p className="animate-fade-up animation-delay-300 text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl">
              Master's student specializing in <span className="text-primary font-medium">data analytics</span>, 
              <span className="text-primary font-medium"> machine learning</span>, and 
              <span className="text-primary font-medium"> healthcare data</span>, with hands-on research 
              experience and real-world projects at Georgia State University.
            </p>

            <div className="animate-fade-up animation-delay-400 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-navy-light group">
                <a href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <a href={`${import.meta.env.BASE_URL}Resume_Le_Master_25.pdf`} download>
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-muted-foreground hover:text-primary">
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="animate-fade-up animation-delay-400 mt-12 flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm text-muted-foreground">Healthcare Analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm text-muted-foreground">Machine Learning</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm text-muted-foreground">Business Intelligence</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative animate-fade-up">
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-card shadow-card">
                  <img 
                    src={profilePhoto} 
                    alt="Tran (Theresa) Le - Data Science Professional" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
