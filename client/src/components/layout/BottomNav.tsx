import { Link, useLocation } from "wouter";
import { Home, Briefcase, Wallet, FileBarChart, User } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BottomNav() {
  const [location] = useLocation();

  const navItems = [
    { href: "/dashboard", icon: Home, label: "Home" },
    { href: "/portfolio", icon: Briefcase, label: "Portfolio" },
    { href: "/funds", icon: Wallet, label: "Funds" },
    { href: "/reports", icon: FileBarChart, label: "Report" },
    { href: "/account", icon: User, label: "Account" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border z-50 pb-safe">
      <div className="flex items-center justify-around h-16 max-w-md mx-auto px-2">
        {navItems.map((item) => {
          const isActive = location === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <div
                className={cn(
                  "flex flex-col items-center justify-center space-y-1 w-16 cursor-pointer transition-colors duration-200",
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <div className={cn(
                  "p-1.5 rounded-full transition-all duration-300",
                   isActive ? "bg-primary/10 scale-110" : "bg-transparent"
                )}>
                  <item.icon className={cn("w-5 h-5", isActive && "fill-current")} strokeWidth={isActive ? 2.5 : 2} />
                </div>
                <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
