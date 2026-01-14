import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { MOCK_HOLDINGS, MOCK_USER } from "@/lib/data";
import { Search, Filter, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("Equities");

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title="Portfolio" showBack={true} />

      {/* Tabs */}
      <div className="sticky top-0 z-30 bg-background/80 backdrop-blur-md pt-2">
         <div className="flex overflow-x-auto px-4 gap-6 border-b border-border no-scrollbar">
           {["Summary", "Equities", "Bonds", "Futures"].map((tab) => (
             <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "pb-3 text-sm font-medium whitespace-nowrap transition-colors relative",
                  activeTab === tab ? "text-primary font-bold" : "text-muted-foreground"
                )}
             >
               {tab}
               {activeTab === tab && (
                 <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full" />
               )}
             </button>
           ))}
         </div>
      </div>

      <main className="px-4 py-6 space-y-6">
        {/* Search & Actions */}
        <div className="flex gap-3">
          <div className="relative grow">
             <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
             <input 
               type="text" 
               placeholder="Search portfolio..."
               className="w-full pl-10 pr-4 py-2.5 bg-white border border-border rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-primary/20"
             />
          </div>
          <button className="p-2.5 bg-white border border-border rounded-xl hover:bg-secondary transition-colors text-muted-foreground">
             <Filter className="w-4 h-4" />
          </button>
          <button className="p-2.5 bg-white border border-border rounded-xl hover:bg-secondary transition-colors text-muted-foreground">
             <Download className="w-4 h-4" />
          </button>
        </div>

        {/* Summary Card (If equities tab active) */}
        <div className="bg-orange-50/50 border border-orange-100 rounded-2xl p-4 space-y-4">
           <div className="flex justify-between items-start">
             <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Current Value</p>
                <h3 className="text-xl font-heading font-bold text-foreground mt-1">₹ {MOCK_USER.current.toLocaleString()}</h3>
             </div>
             <div className="text-right">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Unrealised P&L</p>
                <h3 className="text-lg font-heading font-bold text-green-600 mt-1 flex items-center justify-end gap-1">
                   ₹ {MOCK_USER.totalGain.toLocaleString()}
                   <span className="text-sm bg-green-100 text-green-700 px-1.5 py-0.5 rounded-md">+{MOCK_USER.totalGainPercent}%</span>
                </h3>
             </div>
           </div>
           
           <div className="pt-3 border-t border-orange-200/30 flex justify-between items-center text-sm">
              <div className="flex flex-col">
                 <span className="text-xs text-muted-foreground">Invested</span>
                 <span className="font-semibold text-foreground">₹ {MOCK_USER.invested.toLocaleString()}</span>
              </div>
              <div className="flex flex-col text-right">
                 <span className="text-xs text-muted-foreground">Day's Gain</span>
                 <span className="font-semibold text-red-600">₹ {MOCK_USER.todaysGain} ({MOCK_USER.todaysGainPercent}%)</span>
              </div>
           </div>
        </div>

        {/* Holdings List */}
        <div className="space-y-4">
           {MOCK_HOLDINGS.map((stock, i) => (
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               key={stock.symbol} 
               className="bg-card p-4 rounded-xl border border-border/60 shadow-xs active:scale-[0.99] transition-transform cursor-pointer"
             >
                <div className="flex justify-between items-start mb-3">
                   <div>
                      <h4 className="font-bold text-foreground">{stock.symbol}</h4>
                      <p className="text-[10px] text-muted-foreground font-medium bg-secondary inline-block px-1.5 py-0.5 rounded-sm mt-1">EQ</p>
                   </div>
                   <div className="text-right">
                      <p className="text-lg font-mono font-medium text-foreground">{stock.ltp.toFixed(2)}</p>
                      <p className="text-xs font-medium text-green-600">+{stock.gainPercent}%</p>
                   </div>
                </div>
                
                <div className="grid grid-cols-2 gap-y-2 text-xs">
                   <div className="text-muted-foreground">Qty: <span className="text-foreground font-semibold">{stock.qty}</span> | Avg: <span className="text-foreground font-semibold">{stock.avgPrice}</span></div>
                   <div className="text-right text-muted-foreground">Val: <span className="text-foreground font-semibold">₹ {stock.current.toLocaleString()}</span></div>
                   
                   <div className="text-muted-foreground">Inv: <span className="text-foreground font-semibold">₹ {stock.invested.toLocaleString()}</span></div>
                   <div className="text-right text-green-600 font-semibold">+₹ {stock.gain.toLocaleString()}</div>
                </div>
             </motion.div>
           ))}
        </div>

      </main>

      <BottomNav />
    </div>
  );
}
