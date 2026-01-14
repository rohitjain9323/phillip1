import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { User, Settings, Bell, Shield, LogOut, ChevronRight, HelpCircle } from "lucide-react";
import { MOCK_USER } from "@/lib/data";
import { useLocation } from "wouter";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function Account() {
  const [_, setLocation] = useLocation();
  const menuItems = [
    { label: "Account Details", icon: User },
    { label: "Settings", icon: Settings },
    { label: "Notifications", icon: Bell },
    { label: "Security & Privacy", icon: Shield },
    { label: "Help & Support", icon: HelpCircle },
  ];

  const handleLogout = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title="Account" showBack={true} showProfile={false} />

      <main className="px-4 relative z-20 -mt-12 space-y-6">
        
        {/* Profile Card */}
        <div className="bg-card rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-border text-center space-y-4">
           <div className="w-24 h-24 mx-auto rounded-full bg-accent text-white flex items-center justify-center text-3xl font-heading font-bold shadow-xl border-4 border-white">
              AS
           </div>
           <div>
              <h2 className="text-xl font-heading font-bold text-foreground">{MOCK_USER.name}</h2>
              <p className="text-sm text-muted-foreground">Client ID: {MOCK_USER.id}</p>
           </div>
        </div>

        {/* Menu */}
        <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden divide-y divide-border/50">
           {menuItems.map((item) => (
             <button key={item.label} className="w-full p-4 flex items-center justify-between hover:bg-secondary transition-colors group cursor-pointer text-left">
                <div className="flex items-center gap-4">
                   <div className="p-2 bg-secondary rounded-lg group-hover:bg-white transition-colors">
                     <item.icon className="w-5 h-5 text-primary" />
                   </div>
                   <span className="font-medium text-foreground">{item.label}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
             </button>
           ))}
        </div>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button className="w-full p-4 rounded-2xl bg-red-50 text-red-600 font-bold flex items-center justify-center gap-2 hover:bg-red-100 transition-colors cursor-pointer">
               <LogOut className="w-5 h-5" />
               Logout
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent className="rounded-3xl max-w-[90%] sm:max-w-lg">
            <AlertDialogHeader>
              <AlertDialogTitle className="font-heading text-xl">Confirm Logout</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to log out of your Phillip1 account?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="gap-2">
              <AlertDialogCancel className="rounded-xl border-border">Cancel</AlertDialogCancel>
              <AlertDialogAction 
                onClick={handleLogout}
                className="rounded-xl bg-red-600 hover:bg-red-700 text-white"
              >
                Logout
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

      </main>

      <BottomNav />
    </div>
  );
}
