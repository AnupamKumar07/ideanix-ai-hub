import { GlassCard } from "@/components/ui/glass-card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Target, Users, Zap, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We believe in the power of ideas to transform the world",
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "Success comes from connecting the right people",
    },
    {
      icon: Zap,
      title: "AI-Powered",
      description: "Leveraging cutting-edge AI to accelerate innovation",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Your ideas and data are protected with enterprise-grade security",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About IDEANIX
            </h1>
            <p className="text-xl text-muted-foreground">
              Empowering the next generation of innovators
            </p>
          </div>

          <GlassCard className="p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              IDEANIX is an AI-driven innovation and startup ecosystem platform designed to empower
              startups, SMEs, and researchers worldwide. We provide the tools, insights, and connections
              needed to transform ideas into successful ventures.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Through advanced AI technology and a collaborative community, we're democratizing access
              to business validation, strategy development, and ecosystem insights that were once
              available only to well-funded enterprises.
            </p>
          </GlassCard>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <GlassCard key={index} className="p-6">
                  <value.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>

          <GlassCard className="p-8 bg-gradient-primary/10">
            <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
            <ul className="space-y-4 text-lg text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>AI-powered idea validation and business strategy generation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Comprehensive startup ecosystem data and market insights</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Collaboration tools connecting innovators, investors, and mentors</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Role-based dashboards for different ecosystem participants</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Real-time analytics and performance tracking</span>
              </li>
            </ul>
          </GlassCard>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
