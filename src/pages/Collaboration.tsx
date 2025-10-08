import { GlassCard } from "@/components/ui/glass-card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, MessageSquare, Video, FileText, Send } from "lucide-react";
import { useState } from "react";

const Collaboration = () => {
  const [message, setMessage] = useState("");

  const connections = [
    { name: "Sarah Chen", role: "Investor", status: "online" },
    { name: "Mike Ross", role: "Mentor", status: "offline" },
    { name: "Emma Wilson", role: "Co-founder", status: "online" },
  ];

  const messages = [
    { sender: "Sarah Chen", content: "Love your pitch deck!", time: "10:30 AM" },
    { sender: "You", content: "Thanks! Would love to discuss further.", time: "10:32 AM" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block p-3 rounded-lg bg-secondary/10 mb-4">
              <Users className="h-12 w-12 text-secondary" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Collaboration Hub</h1>
            <p className="text-muted-foreground text-lg">
              Connect, chat, and collaborate with your network
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Connections Sidebar */}
            <div className="lg:col-span-1">
              <GlassCard className="p-6">
                <h2 className="text-xl font-semibold mb-4">Your Network</h2>
                <div className="space-y-3">
                  {connections.map((connection, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                    >
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-sm font-semibold">
                          {connection.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-card ${
                          connection.status === "online" ? "bg-accent" : "bg-muted-foreground"
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{connection.name}</div>
                        <div className="text-xs text-muted-foreground">{connection.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4" variant="outline">
                  <Users className="mr-2 h-4 w-4" />
                  Find More Connections
                </Button>
              </GlassCard>
            </div>

            {/* Chat Area */}
            <div className="lg:col-span-2">
              <GlassCard className="p-6 h-[600px] flex flex-col">
                <div className="flex items-center justify-between pb-4 border-b border-border/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-sm font-semibold">
                      SC
                    </div>
                    <div>
                      <div className="font-semibold">Sarah Chen</div>
                      <div className="text-xs text-muted-foreground">Investor</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <Video className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <FileText className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto py-4 space-y-4">
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${msg.sender === "You" ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`max-w-[70%] ${
                        msg.sender === "You"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      } rounded-lg p-3`}>
                        <div className="text-sm mb-1">{msg.content}</div>
                        <div className="text-xs opacity-70">{msg.time}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border/30">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Type your message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          setMessage("");
                        }
                      }}
                    />
                    <Button className="bg-gradient-primary">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Collaboration;
