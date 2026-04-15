"use client";

import { motion } from "framer-motion";

export function FloatingLinkedIn() {
  return (
    <a
      href="https://www.linkedin.com/in/ronakpanchmatia"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="fixed bottom-24 right-4 z-50 md:bottom-6 md:right-6"
    >
      <motion.span
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gold shadow-lg transition hover:scale-110 hover:bg-gold-light"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-charcoal"
          aria-hidden
        >
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
        </svg>
      </motion.span>
    </a>
  );
}
