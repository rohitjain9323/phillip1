import { ArrowUpRight, ArrowDownRight, IndianRupee, Eye, Plus, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface FinancialCardProps {
  title: string;
  invested: number;
  current: number;
  gain: number;
  gainPercent: number;
  dayGain: number;
  dayGainPercent: number;
  gainers: number;
  gainersValue: number;
  losers: number;
  losersValue: number;
}

export default function FinancialCard({ 
  title, invested, current, gain, gainPercent, dayGain, dayGainPercent, gainers, gainersValue, losers, losersValue 
}: FinancialCardProps) {
  
  const isPositive = gain >= 0;
  const isDayPositive = dayGain >= 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden border border-border/50"
    >
      {/* Header Section */}
      <div className="p-6 border-b border-border/40">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-heading font-bold text-foreground">{title}</h3>
          <div className={cn("px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1", isPositive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700")}>
            {isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
            {gainPercent}%
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-1">
             <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Invested Value</p>
             <p className="text-xl font-bold font-heading text-foreground">₹ {invested.toLocaleString()}</p>
          </div>
          <div className="space-y-1 text-right">
             <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Current Value</p>
             <p className="text-xl font-bold font-heading text-foreground">₹ {current.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="p-6 bg-secondary/30 space-y-6">
        <div className="grid grid-cols-2 gap-8">
           <div className="space-y-1">
             <p className="text-xs text-muted-foreground font-medium">Portfolio Gain/Loss</p>
             <p className={cn("text-lg font-bold font-heading", isPositive ? "text-green-600" : "text-red-600")}>
                ₹ {gain.toLocaleString()}
             </p>
           </div>
           <div className="space-y-1 text-right">
             <p className="text-xs text-muted-foreground font-medium">Day's Total Gain/Loss</p>
             <p className={cn("text-lg font-bold font-heading flex items-center justify-end gap-1", isDayPositive ? "text-green-600" : "text-red-600")}>
                ₹ {dayGain} <span className="text-sm font-normal">({dayGainPercent}%)</span>
             </p>
           </div>
        </div>

        <div className="grid grid-cols-2 gap-8 pt-2">
           <div className="space-y-1">
             <p className="text-xs text-muted-foreground font-medium">Gainers / Gain</p>
             <p className="text-sm font-semibold text-foreground flex items-center gap-1">
                <span className="font-bold border-b-2 border-green-500/30 px-1">{gainers}</span> 
                <span className="text-muted-foreground">/</span>
                <span className="text-green-600 font-bold">₹ {gainersValue}</span>
             </p>
           </div>
           <div className="space-y-1 text-right">
             <p className="text-xs text-muted-foreground font-medium">Losers / Loss</p>
             <p className="text-sm font-semibold text-foreground flex items-center justify-end gap-1">
                <span className="font-bold border-b-2 border-red-500/30 px-1">{losers}</span>
                <span className="text-muted-foreground">/</span>
                <span className="text-red-600 font-bold">₹ {losersValue}</span>
             </p>
           </div>
        </div>
      </div>

      {/* Actions */}
      <div className="p-4 grid grid-cols-2 gap-4 bg-white dark:bg-slate-900 transition-colors">
        <button className="bg-accent hover:bg-accent/90 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-accent/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer text-sm">
           <Plus className="w-4 h-4" /> Add Funds
        </button>
        <button className="bg-white dark:bg-slate-900 border border-border text-foreground font-bold py-3 px-4 rounded-xl hover:bg-secondary transition-all flex items-center justify-center gap-2 cursor-pointer text-sm shadow-sm">
           View Details
        </button>
      </div>
    </motion.div>
  );
}
