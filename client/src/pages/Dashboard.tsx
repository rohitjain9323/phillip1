import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import FinancialCard from "@/components/FinancialCard";
import { MOCK_USER } from "@/lib/data";
import { ChevronRight, TrendingUp, Gem, Banknote } from "lucide-react";
import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title="Dashboard" expanded={true} />
      
      <main className="px-4 -mt-8 relative z-20 space-y-6">
        <FinancialCard 
          title="Equities"
          invested={MOCK_USER.invested}
          current={MOCK_USER.current}
          gain={MOCK_USER.totalGain}
          gainPercent={MOCK_USER.totalGainPercent}
          dayGain={MOCK_USER.todaysGain}
          dayGainPercent={MOCK_USER.todaysGainPercent}
          gainers={MOCK_USER.gainers}
          gainersValue={MOCK_USER.gainersValue}
          losers={MOCK_USER.losers}
          losersValue={MOCK_USER.losersValue}
        />

        <div className="space-y-3">
          {[
            { title: "Futures & Options", icon: TrendingUp, color: "text-blue-500", bg: "bg-blue-500/10" },
            { title: "Commodities", icon: Gem, color: "text-purple-500", bg: "bg-purple-500/10" },
            { title: "Mutual Funds", icon: Banknote, color: "text-green-500", bg: "bg-green-500/10" },
          ].map((item, index) => (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              key={item.title} 
              className="bg-card p-4 rounded-2xl shadow-xs border border-border/50 flex items-center justify-between group hover:shadow-md transition-all cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl ${item.bg} ${item.color}`}>
                   <item.icon className="w-5 h-5" />
                </div>
                <span className="font-heading font-semibold text-foreground">{item.title}</span>
              </div>
              <div className="flex items-center gap-3">
                 <span className="text-xs font-semibold text-primary underline underline-offset-4 opacity-100 transition-opacity">Activate Now</span>
                 <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
