import { motion } from "framer-motion";
import { BeadString } from "./BeadDecoration";
import heroImage from "@/assets/hero-bracelets.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-hero">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-coral-light/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -left-20 top-1/3 h-60 w-60 rounded-full bg-mint-light/30 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 h-48 w-48 rounded-full bg-sunshine-light/25 blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="container relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <BeadString className="mb-6" />

          <motion.h1
            className="font-script text-6xl font-bold text-foreground sm:text-7xl lg:text-8xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Pulseiras da{" "}
            <span className="text-gradient-coral">Dany</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-lg mx-auto text-lg text-muted-foreground sm:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Pulseiras artesanais feitas com carinho, miçangas coloridas e muito amor 💝
          </motion.p>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <a
              href="#produtos"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-card transition-all hover:shadow-glow hover:-translate-y-1"
            >
              Ver Pulseiras
              <span className="animate-bounce-soft">↓</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="mt-16 w-full max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute inset-0 -rotate-2 rounded-3xl bg-coral/10" />
            <img
              src={heroImage}
              alt="Pulseiras de miçangas coloridas artesanais"
              className="relative rounded-3xl shadow-elevated w-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm">Role para ver mais</span>
          <div className="h-10 w-6 rounded-full border-2 border-muted-foreground/30 p-1">
            <motion.div
              className="h-2 w-full rounded-full bg-coral"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
