import { User, Lock, Eye, EyeOff, Menu, ArrowRight, Fingerprint, Keypad } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState<"login" | "2fa" | "forgot-password" | "forgot-email">("login");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isBiometricOpen, setIsBiometricOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [_, setLocation] = useLocation();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("2fa");
  };

  const handleVerify2FA = (e: React.FormEvent) => {
    e.preventDefault();
    setLocation("/dashboard");
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("2fa"); // Simulate sending OTP
  };

  const handleForgotEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("2fa"); // Simulate sending OTP
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) value = value[value.length - 1];
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-linear-to-b from-primary/10 to-transparent -z-10 rounded-b-[3rem]" />
      
      <motion.div 
        layout
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

        <AnimatePresence mode="wait">
          {step === "login" ? (
            <motion.div
              key="login-form"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-6"
            >
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
                  <button 
                    type="button" 
                    onClick={() => setStep("forgot-email")}
                    className="text-primary/80 hover:text-primary transition-colors cursor-pointer"
                  >
                    Forgot Email Id?
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setStep("forgot-password")}
                    className="text-primary/80 hover:text-primary transition-colors cursor-pointer"
                  >
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

              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>

              <Drawer open={isBiometricOpen} onOpenChange={setIsBiometricOpen}>
                <DrawerTrigger asChild>
                  <button className="w-full flex items-center justify-center gap-3 py-3 border border-border rounded-xl hover:bg-secondary transition-colors cursor-pointer text-foreground font-semibold">
                    <Fingerprint className="w-6 h-6 text-primary" />
                    Biometric Login
                  </button>
                </DrawerTrigger>
                <DrawerContent className="rounded-t-[2rem]">
                  <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader className="space-y-4 pt-8">
                      <div className="flex justify-center">
                        <div className="p-6 bg-primary/10 rounded-full animate-pulse">
                          <Fingerprint className="w-12 h-12 text-primary" />
                        </div>
                      </div>
                      <DrawerTitle className="text-2xl text-center font-heading">Biometric Authentication</DrawerTitle>
                      <DrawerDescription className="text-center">
                        Touch the fingerprint sensor to log in securely to your account.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 space-y-4">
                      <button 
                        onClick={() => {
                          setIsBiometricOpen(false);
                          setStep("2fa");
                        }}
                        className="w-full py-3.5 bg-primary text-white rounded-xl font-bold shadow-lg"
                      >
                        Authenticate Now
                      </button>
                      <button 
                        onClick={() => setIsBiometricOpen(false)}
                        className="w-full py-3.5 flex items-center justify-center gap-2 font-semibold text-primary"
                      >
                         Use PIN instead
                      </button>
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            </motion.div>
          ) : step === "forgot-password" ? (
            <motion.div
              key="forgot-password"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold font-heading">Reset Password</h3>
                <p className="text-sm text-muted-foreground">
                  Enter your registered email or username to receive a reset code.
                </p>
              </div>

              <form onSubmit={handleForgotPassword} className="space-y-6">
                <div className="relative group">
                  <div className="absolute left-3 top-3 text-muted-foreground group-focus-within:text-primary transition-colors">
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Email or Username"
                    className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-900 border border-border rounded-xl focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-xs text-foreground"
                  />
                </div>

                <div className="space-y-4">
                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-accent/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    Send Reset Code
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep("login")}
                    className="w-full py-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    Back to Login
                  </button>
                </div>
              </form>
            </motion.div>
          ) : step === "forgot-email" ? (
            <motion.div
              key="forgot-email"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold font-heading">Find Email ID</h3>
                <p className="text-sm text-muted-foreground">
                  Enter your mobile number and PAN to recover your account.
                </p>
              </div>

              <form onSubmit={handleForgotEmail} className="space-y-6">
                <div className="space-y-4">
                  <input
                    type="tel"
                    required
                    placeholder="Mobile Number"
                    className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-border rounded-xl focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-xs text-foreground"
                  />
                  <input
                    type="text"
                    required
                    placeholder="PAN Number"
                    className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-border rounded-xl focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-xs text-foreground uppercase"
                  />
                </div>

                <div className="space-y-4">
                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-accent/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    Recover Email ID
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep("login")}
                    className="w-full py-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    Back to Login
                  </button>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="2fa-form"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold font-heading">Two-Step Verification</h3>
                <p className="text-sm text-muted-foreground">
                  Enter the 6-digit code sent to your registered mobile number and email.
                </p>
              </div>

              <form onSubmit={handleVerify2FA} className="space-y-8">
                <div className="flex justify-between gap-2">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="number"
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      className="w-12 h-14 text-center text-xl font-bold bg-white dark:bg-slate-900 border border-border rounded-xl focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-xs"
                      onKeyDown={(e) => {
                        if (e.key === "Backspace" && !digit && index > 0) {
                          const prevInput = document.getElementById(`otp-${index - 1}`);
                          prevInput?.focus();
                        }
                      }}
                    />
                  ))}
                </div>

                <div className="space-y-4">
                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-accent/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    Verify & Proceed
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep("login")}
                    className="w-full py-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    Back to Login
                  </button>
                </div>
              </form>

              <div className="text-center">
                <p className="text-xs text-muted-foreground">
                  Didn't receive the code? <button className="text-primary font-bold hover:underline">Resend Code</button>
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

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
