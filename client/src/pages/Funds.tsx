import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { ArrowDown, ArrowUp } from "lucide-react";

export default function Funds() {
  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title="Funds" showBack={true} />

      <main className="px-4 py-8 space-y-8">
        
        {/* Balance Card */}
        <div className="bg-card rounded-3xl p-8 text-center border border-border shadow-sm space-y-2">
           <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Available Balance</h2>
           <h1 className="text-5xl font-heading font-bold text-primary">₹ 0.00</h1>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-4">
           <button className="bg-accent hover:bg-accent/90 text-white font-bold py-4 rounded-2xl shadow-lg shadow-accent/20 transition-all active:scale-[0.98] flex flex-col items-center justify-center gap-2 cursor-pointer group">
              <div className="p-2 bg-white/20 rounded-full group-hover:scale-110 transition-transform">
                <ArrowDown className="w-6 h-6" />
              </div>
              Add Funds
           </button>
           <button className="bg-white hover:bg-secondary text-foreground border border-border font-bold py-4 rounded-2xl shadow-sm transition-all active:scale-[0.98] flex flex-col items-center justify-center gap-2 cursor-pointer group">
              <div className="p-2 bg-secondary rounded-full group-hover:scale-110 transition-transform">
                <ArrowUp className="w-6 h-6 text-foreground" />
              </div>
              Withdraw
           </button>
        </div>

        {/* History Placeholder */}
        <div className="space-y-4 pt-4">
           <h3 className="font-heading font-semibold text-lg px-2">Recent Transactions</h3>
           <div className="bg-card border border-border rounded-xl p-8 text-center text-muted-foreground text-sm">
              No recent transactions found
           </div>
        </div>

      </main>

      <BottomNav />
    </div>
  );
}
