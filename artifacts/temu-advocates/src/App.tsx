import { Switch, Route, Router as WouterRouter } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Practice from "@/pages/Practice";
import Team from "@/pages/Team";
import Insights from "@/pages/Insights";
import InsightArticle from "@/pages/InsightArticle";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

function AnimatedRoutes() {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/practice" component={Practice} />
          <Route path="/team" component={Team} />
          <Route path="/insights" component={Insights} />
          <Route path="/insights/:slug" component={InsightArticle} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

function LoadingScreen({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 1400);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ backgroundColor: "var(--obsidian)" }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-center"
      >
        <p
          className="font-serif text-2xl tracking-[0.25em]"
          style={{ color: "var(--gold)", letterSpacing: "0.3em" }}
        >
          TEMU ADVOCATES
        </p>
        <div className="w-8 h-px mx-auto mt-4" style={{ backgroundColor: "var(--gold)", opacity: 0.6 }} />
      </motion.div>
    </motion.div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <AnimatePresence>
        {loading && (
          <LoadingScreen key="loader" onDone={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <AnimatedRoutes />
        </>
      )}
    </WouterRouter>
  );
}

export default App;
