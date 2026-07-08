"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, ChevronUp } from "lucide-react";
import { COMPANY } from "@/data";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-5 z-50 flex flex-col gap-2.5 sm:gap-3">
      {/* Zalo */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          href={`https://zalo.me/${COMPANY.hotline1.replace(/\s/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full flex items-center justify-center text-white shadow-lg relative"
          style={{
            background: "linear-gradient(160deg, #0278ff, #0057d9)",
            width: 48,
            height: 48,
            boxShadow: "0 10px 20px rgba(0,104,255,0.35)",
          }}
          aria-label="Chat Zalo"
        >
          <MessageCircle size={18} />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[9px] flex items-center justify-center font-bold">
            1
          </span>
        </Link>
      </motion.div>

      {/* Hotline */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          href={`tel:${COMPANY.hotline1.replace(/\s/g, "")}`}
          className="flex items-center justify-center text-white shadow-lg rounded-full"
          style={{
            background: "linear-gradient(140deg, #f28d35, #f6b457)",
            width: 48,
            height: 48,
            boxShadow: "0 10px 20px rgba(242,141,53,0.35)",
          }}
          aria-label="Gọi hotline"
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 15, 0] }}
            transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.5 }}
          >
            <Phone size={18} />
          </motion.div>
        </Link>
      </motion.div>

      {/* Scroll to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center justify-center text-white shadow-md rounded-full"
            style={{ background: "#0F2A56", width: 40, height: 40 }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            aria-label="Lên đầu trang"
          >
            <ChevronUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
