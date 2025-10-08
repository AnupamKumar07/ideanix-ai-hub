import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Users,
  TrendingUp,
  Shield,
  Rocket,
  Brain,
  Target,
  Zap,
  ArrowRight,
} from "lucide-react";

const Index = () => {
  const roles = [
    {
      title: "Innovator",
      icon: Lightbulb,
      color: "role-innovator",
      description: "Validate ideas and build strategies",
      link: "/auth?role=innovator",
    },
    {
      title: "Investor",
      icon: TrendingUp,
      color: "role-investor",
      description: "Discover promising startups",
      link: "/auth?role=investor",
    },
    {
      title: "Researcher",
      icon: Brain,
      color: "role-researcher",
      description: "Access data and insights",
      link: "/auth?role=researcher",
    },
    {
      title: "Policy Maker",
      icon: Shield,
      color: "role-policy",
      description: "Shape innovation policies",
      link: "/auth?role=policy",
    },
  ];

  const features = [
    {
      icon: Target,
      title: "AI-Powered Validation",
      description: "Get instant feedback on your startup ideas with advanced AI analysis",
    },
    {
      icon: Users,
      title: "Collaboration Hub",
      description: "Connect with mentors, investors, and fellow innovators",
    },
    {
      icon: Zap,
      title: "Business Blueprints",
      description: "Generate comprehensive business strategies in minutes",
    },
    {
      icon: Rocket,
      title: "Ecosystem Access",
      description: "Tap into startup data and market insights",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-glow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-glow delay-1000" />
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Transform Ideas into Innovation
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              AI-driven platform empowering startups, researchers, and innovators to validate ideas,
              collaborate, and build the future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-gradient-primary text-lg px-8">
                <Link to="/auth">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Join as</h2>
            <p className="text-muted-foreground text-lg">
              Choose your role and start your innovation journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={role.link}>
                  <GlassCard className="p-6 h-full group cursor-pointer">
                    <div className={`inline-block p-3 rounded-lg bg-${role.color}/10 mb-4 group-hover:scale-110 transition-transform`}>
                      <role.icon className={`h-8 w-8 text-${role.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
                    <p className="text-muted-foreground">{role.description}</p>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to bring your innovation to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-6 h-full">
                  <feature.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <GlassCard className="p-12 text-center bg-gradient-primary/10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Ready to Innovate?</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of innovators, investors, and researchers shaping the future
              </p>
              <Button size="lg" asChild className="bg-gradient-primary text-lg px-8">
                <Link to="/auth">
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
