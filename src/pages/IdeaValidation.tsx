import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GlassCard } from "@/components/ui/glass-card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Lightbulb, Sparkles, Target, TrendingUp } from "lucide-react";

const IdeaValidation = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [ideaTitle, setIdeaTitle] = useState("");
  const [ideaDescription, setIdeaDescription] = useState("");
  const [targetMarket, setTargetMarket] = useState("");
  const [validation, setValidation] = useState<string | null>(null);

  const handleValidate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setValidation(null);

    try {
      const { data, error } = await supabase.functions.invoke("validate-idea", {
        body: {
          title: ideaTitle,
          description: ideaDescription,
          targetMarket: targetMarket,
        },
      });

      if (error) throw error;

      setValidation(data.validation);
      toast({
        title: "Validation Complete!",
        description: "Your idea has been analyzed by AI.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to validate idea. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-block p-3 rounded-lg bg-primary/10 mb-4">
              <Lightbulb className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4">AI Idea Validation</h1>
            <p className="text-muted-foreground text-lg">
              Get instant AI-powered feedback on your startup idea
            </p>
          </div>

          <GlassCard className="p-8 mb-8">
            <form onSubmit={handleValidate} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Idea Title</Label>
                <Input
                  id="title"
                  placeholder="e.g., AI-powered fitness coaching app"
                  value={ideaTitle}
                  onChange={(e) => setIdeaTitle(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Idea Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your idea in detail. What problem does it solve? How does it work?"
                  rows={6}
                  value={ideaDescription}
                  onChange={(e) => setIdeaDescription(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="market">Target Market</Label>
                <Input
                  id="market"
                  placeholder="e.g., Health-conscious millennials in urban areas"
                  value={targetMarket}
                  onChange={(e) => setTargetMarket(e.target.value)}
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-primary text-lg py-6"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Sparkles className="mr-2 h-5 w-5 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Validate My Idea
                  </>
                )}
              </Button>
            </form>
          </GlassCard>

          {validation && (
            <GlassCard className="p-8 animate-fade-in">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">AI Validation Report</h2>
                  <p className="text-muted-foreground">
                    Based on market trends and business analysis
                  </p>
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <div className="whitespace-pre-wrap text-foreground leading-relaxed">
                  {validation}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border/30">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Market Analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-secondary" />
                    <span className="text-sm text-muted-foreground">Competitive Edge</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-accent" />
                    <span className="text-sm text-muted-foreground">Growth Potential</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default IdeaValidation;
