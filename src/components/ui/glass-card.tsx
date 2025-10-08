import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard = ({ children, className, hover = true }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "backdrop-blur-glass bg-card/80 border border-border/30 rounded-[var(--radius)]",
        "shadow-lg shadow-primary/5",
        hover && "transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30",
        className
      )}
    >
      {children}
    </div>
  );
};
