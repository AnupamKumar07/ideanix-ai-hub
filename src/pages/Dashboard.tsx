import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import { Lightbulb, Users, Target, TrendingUp, LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate("/auth");
        return;
      }
      
      setUser(user);
      setLoading(false);
    };

    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (!session?.user) {
        navigate("/auth");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Signed out",
      description: "You have been successfully signed out.",
    });
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  const userRole = user?.user_metadata?.role || "innovator";

  const quickActions = [
    {
      title: "Validate Idea",
      description: "Get AI-powered validation for your startup idea",
      icon: Lightbulb,
      link: "/idea-validation",
      color: "primary",
    },
    {
      title: "Collaborate",
      description: "Connect with mentors and team members",
      icon: Users,
      link: "/collaboration",
      color: "secondary",
    },
    {
      title: "View Analytics",
      description: "Track your progress and insights",
      icon: TrendingUp,
      link: "#",
      color: "accent",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          {/* Welcome Section */}
          <div className="mb-12">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-4xl font-bold mb-2">
                  Welcome back, {userRole.charAt(0).toUpperCase() + userRole.slice(1)}!
                </h1>
                <p className="text-muted-foreground text-lg">{user?.email}</p>
              </div>
              <Button variant="outline" onClick={handleSignOut}>
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {quickActions.map((action, index) => (
                <Link key={index} to={action.link}>
                  <GlassCard className="p-6 h-full group cursor-pointer">
                    <action.icon className={`h-10 w-10 text-${action.color} mb-4 group-hover:scale-110 transition-transform`} />
                    <h3 className="text-xl font-semibold mb-2">{action.title}</h3>
                    <p className="text-muted-foreground">{action.description}</p>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </div>

          {/* Stats Overview */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Your Stats</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <GlassCard className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">0</div>
                <div className="text-sm text-muted-foreground">Ideas Validated</div>
              </GlassCard>
              <GlassCard className="p-6">
                <div className="text-3xl font-bold text-secondary mb-2">0</div>
                <div className="text-sm text-muted-foreground">Collaborations</div>
              </GlassCard>
              <GlassCard className="p-6">
                <div className="text-3xl font-bold text-accent mb-2">0</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </GlassCard>
              <GlassCard className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">0</div>
                <div className="text-sm text-muted-foreground">Connections</div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
