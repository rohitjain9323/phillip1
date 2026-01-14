import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { ArrowRight, BarChart3, PieChart, FileText, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Reports() {
  const reports = [
    { title: "Trading Report", desc: "View your daily trading activity", icon: BarChart3, color: "bg-blue-100 text-blue-600" },
    { title: "Demat Holdings", desc: "Check your current holdings status", icon: PieChart, color: "bg-purple-100 text-purple-600" },
    { title: "Tax Report", desc: "Download tax summary for FY 2025-26", icon: FileText, color: "bg-green-100 text-green-600" },
    { title: "Contract Notes", desc: "Digital contract notes for all trades", icon: Download, color: "bg-orange-100 text-orange-600" },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title="Reports" showBack={true} />

      <main className="px-4 py-6 space-y-6">
        
        <div className="space-y-4">
          {reports.map((report, i) => (
             <motion.div 
               initial={{ opacity: 0, x: -10 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: i * 0.1 }}
               key={report.title}
               className="bg-card p-4 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex items-center gap-4 group"
             >
                <div className={`p-3 rounded-xl ${report.color} group-hover:scale-110 transition-transform duration-300`}>
                   <report.icon className="w-6 h-6" />
                </div>
                <div className="grow">
                   <h3 className="font-heading font-semibold text-foreground">{report.title}</h3>
                   <p className="text-xs text-muted-foreground mt-0.5">{report.desc}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-1" />
             </motion.div>
          ))}
        </div>

      </main>

      <BottomNav />
    </div>
  );
}
