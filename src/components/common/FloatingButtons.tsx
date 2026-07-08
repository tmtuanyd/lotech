"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { COMPANY } from "@/data";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col gap-3">
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
          className="w-13 h-13 rounded-full flex items-center justify-center text-white shadow-lg relative"
          style={{
            background: "linear-gradient(160deg, #0278ff, #0057d9)",
            width: 54,
            height: 54,
            boxShadow: "0 10px 20px rgba(0,104,255,0.35)",
          }}
          aria-label="Chat Zalo"
        >
          <MessageCircle size={20} />
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
            width: 54,
            height: 54,
            boxShadow: "0 10px 20px rgba(242,141,53,0.35)",
          }}
          aria-label="Gọi hotline"
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 15, 0] }}
            transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.5 }}
          >
            <Phone size={20} />
          </motion.div>
        </Link>
      </motion.div>

      {/* Scroll to top */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center justify-center text-white shadow-md rounded-full"
        style={{ background: "#0F2A56", width: 42, height: 42 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.4 }}
        whileHover={{ scale: 1.1 }}
        aria-label="Lên đầu trang"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 12V4M4 8l4-4 4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.button>
    </div>
  );
}
