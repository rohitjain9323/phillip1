import { ChevronLeft, LogOut, Search, User } from "lucide-react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { MOCK_USER } from "@/lib/data";

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  showProfile?: boolean;
  className?: string;
  expanded?: boolean;
}

export default function Header({ title, showBack, showProfile = true, className, expanded = false }: HeaderProps) {
  const [_, setLocation] = useLocation();

  return (
    <div className={cn("bg-primary text-primary-foreground pt-safe-top pb-6 px-6 rounded-b-[2rem] shadow-lg relative overflow-hidden transition-all duration-300", expanded ? "h-64" : "h-auto", className)}>
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      
      <div className="relative z-10 flex items-center justify-between mb-4 mt-2">
        <div className="flex items-center gap-3">
          {showBack && (
            <button onClick={() => history.back()} className="p-2 -ml-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer">
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
          <h1 className="text-xl font-heading font-semibold tracking-wide">{title}</h1>
        </div>

        {showProfile && (
          <div className="flex items-center gap-3 bg-white/10 pl-3 pr-4 py-1.5 rounded-full backdrop-blur-md border border-white/10 hover:bg-white/20 transition-colors cursor-pointer" onClick={() => setLocation("/account")}>
             <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-xs shadow-inner">
                AS
             </div>
             <div className="text-xs font-medium opacity-90 tracking-wide uppercase">
               {MOCK_USER.name}
             </div>
          </div>
        )}
      </div>

      {expanded && (
        <div className="relative z-10 flex flex-col items-center justify-center mt-8 space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <span className="text-sm font-medium text-primary-foreground/70 uppercase tracking-widest">Available Funds</span>
          <div className="flex items-baseline gap-1">
             <span className="text-2xl font-light opacity-80">₹</span>
             <span className="text-5xl font-heading font-bold">{MOCK_USER.balance}</span>
          </div>
        </div>
      )}
    </div>
  );
}
