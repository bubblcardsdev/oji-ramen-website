"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ojiRamenTextLogo from "../../public/images/oji-ramen-text.png"

const steamPuffs = [
  { left: "18%", size: 180, delay: 0 },
  { left: "42%", size: 240, delay: 1.2 },
  { left: "64%", size: 160, delay: 0.6 },
  { left: "80%", size: 200, delay: 2 },
];

export default function ComingSoonHero() {
  return (
    <section className="relative flex flex-1 items-center justify-center overflow-hidden bg-ink px-6 py-24 text-center">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {steamPuffs.map((puff, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 rounded-full bg-ramen-red/10 blur-3xl"
            style={{ left: puff.left, width: puff.size, height: puff.size }}
            initial={{ y: 0, opacity: 0.1 }}
            animate={{ y: [-20, -220], opacity: [0.15, 0] }}
            transition={{
              duration: 7,
              delay: puff.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex max-w-2xl flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 rounded-full border border-ramen-red/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-ramen-red"
        >
          Coming Soon
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-6xl leading-none tracking-wide text-cream sm:text-8xl"
        >
          <Image
            src={ojiRamenTextLogo}
            alt="Oji Ramen"
            className="mx-auto"
            width={800}
            height={800}
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-md text-lg text-cream/70"
        >
          Something warm is simmering. A new ramen house is on its way &mdash;
          stay tuned.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 h-px w-16 bg-gold/60"
        />
      </div>
    </section>
  );
}
