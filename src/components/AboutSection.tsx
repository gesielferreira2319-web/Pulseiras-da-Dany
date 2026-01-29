import { motion } from "framer-motion";
import { BeadDecoration } from "./BeadDecoration";
import danyPhoto from "@/assets/dany-photo.jpeg";

export function AboutSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="grid gap-12 lg:grid-cols-2 items-center max-w-5xl mx-auto">
          {/* Foto da Dany */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-coral/20 via-mint/20 to-sunshine/20 blur-2xl" />
            <div className="relative">
              <div className="absolute -bottom-3 -right-3 h-full w-full rounded-3xl bg-coral/20" />
              <img
                src={danyPhoto}
                alt="Dany - Artesã e proprietária"
                className="relative rounded-3xl shadow-elevated object-cover aspect-[3/4] w-full max-w-sm mx-auto"
              />
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <BeadDecoration className="mb-4" />
            <h2 className="font-script text-5xl font-bold text-foreground">
              Olá, eu sou a <span className="text-gradient-coral">Dany!</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Sou apaixonada por artesanato e criei as <strong>Pulseiras da Dany</strong> para 
              espalhar amor através de cada miçanga cuidadosamente escolhida.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Cada pulseira é feita à mão com muito carinho, usando miçangas de qualidade 
              e cores vibrantes. Você pode personalizar com seu nome ou de quem você ama! 💝
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-full bg-mint-light px-4 py-2 text-sm font-medium text-foreground">
                <span>✨</span> Feito à mão
              </div>
              <div className="flex items-center gap-2 rounded-full bg-coral-light/50 px-4 py-2 text-sm font-medium text-foreground">
                <span>💝</span> Personalizável
              </div>
              <div className="flex items-center gap-2 rounded-full bg-sunshine-light px-4 py-2 text-sm font-medium text-foreground">
                <span>🎁</span> Presente perfeito
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
