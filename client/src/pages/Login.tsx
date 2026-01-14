import { User, Lock, Eye, EyeOff, Menu, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("vaishal");
  const [password, setPassword] = useState("");
  const [_, setLocation] = useLocation();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    setLocation("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-6 relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-64 bg-linear-to-b from-primary/10 to-transparent -z-10 rounded-b-[3rem]" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm space-y-8"
      >
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-primary font-heading tracking-tight">PhillipCapital</h1>
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Your Partner In Finance</p>
          
          <div className="mt-12 mb-8 relative">
            <h2 className="text-5xl font-heading font-light text-foreground">
              Phillip<span className="text-accent font-bold">1</span>
            </h2>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-4">
            <div className="relative group">
              <div className="absolute left-3 top-3 text-muted-foreground group-focus-within:text-primary transition-colors">
                <User className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-900 border border-border rounded-xl focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-xs text-foreground placeholder:text-muted-foreground/50"
              />
            </div>

            <div className="relative group">
              <div className="absolute left-3 top-3 text-muted-foreground group-focus-within:text-primary transition-colors">
                <Lock className="w-5 h-5" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full pl-10 pr-12 py-3 bg-white dark:bg-slate-900 border border-border rounded-xl focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-xs text-foreground placeholder:text-muted-foreground/50"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm font-medium">
            <button type="button" className="text-primary/80 hover:text-primary transition-colors">
              Forgot Email Id?
            </button>
            <button type="button" className="text-primary/80 hover:text-primary transition-colors">
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-accent/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
          >
            Login <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-center pt-8">
          <button type="button" className="text-primary font-semibold hover:underline decoration-2 underline-offset-4 cursor-pointer">
            Open a New Account
          </button>
          <p className="mt-8 text-xs text-muted-foreground font-mono">app version : 1.1.7</p>
        </div>
      </motion.div>
    </div>
  );
}
