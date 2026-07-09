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
      <motion.svg
        viewBox="0 0 400 400"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[140vw] max-h-none w-[140vw] -translate-x-1/2 -translate-y-1/2 opacity-[0.07] sm:h-[900px] sm:w-[900px]"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 0.07, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <g className="text-cream">
          {/* noodles rising out of the bowl */}
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M140 238 q4 -55 34 -80 q26 -20 10 -46" />
            <path d="M168 240 q2 -60 30 -86 q22 -20 6 -48" />
            <path d="M198 241 q-2 -62 24 -90 q18 -22 -4 -50" />
            <path d="M228 240 q-8 -58 16 -84 q16 -20 -2 -46" />
            <path d="M256 238 q-14 -52 8 -76 q16 -18 -4 -42" />
          </g>

          {/* bowl body */}
          <path
            d="M 62 230 C 82 300, 140 328, 200 328 C 260 328, 318 300, 338 230"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
          />
          {/* rim */}
          <ellipse
            cx="200"
            cy="230"
            rx="138"
            ry="24"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
          />
          {/* interior shine */}
          <path
            d="M282 244 Q 302 266 276 296"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
          />
          {/* base foot */}
          <ellipse cx="200" cy="329" rx="46" ry="9" fill="currentColor" />

          {/* chopsticks resting across the noodles */}
          <path
            d="M52 66 L346 178"
            fill="none"
            stroke="currentColor"
            strokeWidth={6}
            strokeLinecap="round"
          />
          <path
            d="M20 84 L360 192"
            fill="none"
            stroke="currentColor"
            strokeWidth={6}
            strokeLinecap="round"
          />
          {/* <path
            d="M70 84 L360 192"
            fill="none"
            stroke="currentColor"
            strokeWidth={6}
            strokeLinecap="round"
          /> */}
        </g>
      </motion.svg>

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
