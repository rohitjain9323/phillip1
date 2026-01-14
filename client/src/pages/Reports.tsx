import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { MOCK_HOLDINGS } from "@/lib/data";
import { Search, Filter, Download, ChevronDown, ListFilter } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Reports() {
  const [activeTab, setActiveTab] = useState("Trading");

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title="Reports" showBack={true} />

      {/* Navigation Tabs */}
      <div className="bg-white dark:bg-slate-900 border-b border-border sticky top-0 z-30 transition-colors">
        <div className="flex overflow-x-auto px-4 gap-8 no-scrollbar">
          {["Trading", "Demat", "Mutual Funds", "Advisory"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "py-4 text-sm font-medium whitespace-nowrap transition-all relative",
                activeTab === tab ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {tab}
              {activeTab === tab && (
                <motion.div 
                  layoutId="reportTab" 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full" 
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <main className="space-y-4 pt-4">
        {/* Filter Bar */}
        <div className="px-4 flex gap-2">
          <div className="relative grow">
            <select className="w-full pl-4 pr-10 py-2.5 bg-white dark:bg-slate-900 text-foreground border border-border rounded-xl text-sm appearance-none focus:outline-hidden focus:ring-2 focus:ring-primary/10 transition-colors">
              <option>Holding</option>
              <option>P&L</option>
              <option>Ledger</option>
            </select>
            <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-muted-foreground pointer-events-none" />
          </div>
          <button className="p-2.5 bg-white dark:bg-slate-900 border border-border rounded-xl hover:bg-secondary transition-colors text-muted-foreground shadow-xs">
            <ListFilter className="w-5 h-5" />
          </button>
          <button className="p-2.5 bg-white dark:bg-slate-900 border border-border rounded-xl hover:bg-secondary transition-colors text-muted-foreground shadow-xs">
            <Download className="w-5 h-5" />
          </button>
        </div>

        {/* Total Value Summary */}
        <div className="mx-4 bg-orange-50/60 dark:bg-orange-950/20 border border-orange-100 dark:border-orange-900/30 rounded-xl p-4 flex justify-between items-center shadow-xs transition-colors">
          <span className="text-sm font-medium text-muted-foreground">Total Holding Value</span>
          <span className="text-lg font-heading font-bold text-foreground tracking-tight">₹ 2,18,706</span>
        </div>

        {/* Table Header */}
        <div className="bg-slate-900 dark:bg-slate-950 text-white py-3 px-4 grid grid-cols-2 text-[10px] font-bold uppercase tracking-wider items-center transition-colors">
          <div className="space-y-1">
             <div>ScripCode | Scrip Name</div>
             <div>Quantity</div>
          </div>
          <div className="text-right space-y-1">
             <div>Close Rate</div>
             <div>Valuation</div>
          </div>
        </div>

        {/* List Items */}
        <div className="divide-y divide-border/40">
          {MOCK_HOLDINGS.map((item, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              key={item.symbol} 
              className="px-4 py-4 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <div className="grid grid-cols-2 items-start">
                <div className="space-y-1">
                   <h4 className="font-bold text-sm text-foreground tracking-tight">{item.symbol} <span className="text-muted-foreground font-normal ml-1">| {item.name}</span></h4>
                   <p className="text-sm font-bold font-mono text-foreground">{item.qty}</p>
                </div>
                <div className="text-right space-y-1">
                   <p className="text-sm font-bold font-mono text-foreground">₹ {item.ltp.toLocaleString()}</p>
                   <p className="text-sm font-bold font-mono text-foreground">₹ {item.current.toLocaleString()}</p>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="px-4 py-4 bg-white dark:bg-slate-900 transition-colors">
             <h4 className="font-bold text-sm text-foreground tracking-tight">GAIL <span className="text-muted-foreground font-normal ml-1">| GAIL</span></h4>
          </div>
        </div>

      </main>

      <BottomNav />
    </div>
  );
}
