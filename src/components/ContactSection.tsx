import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { BeadDecoration } from "./BeadDecoration";

const WHATSAPP_NUMBER = "5567981159963";
const WHATSAPP_MESSAGE = "Olá! Gostaria de encomendar uma pulseira de miçangas 💝";

export function ContactSection() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-coral via-coral-dark to-coral p-8 sm:p-12 text-center shadow-elevated max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {/* Decorative circles */}
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
          <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-white/10" />

          <div className="relative">
            <BeadDecoration className="justify-center mb-6" count={5} />

            <h2 className="font-script text-4xl sm:text-5xl font-bold text-white">
              Faça sua encomenda!
            </h2>
            <p className="mt-4 text-lg text-white/90 max-w-md mx-auto">
              Entre em contato pelo WhatsApp e peça a pulseira perfeita para você ou para presentear
            </p>

            <div className="mt-6 flex items-center justify-center gap-2 text-white/80">
              <Phone className="h-5 w-5" />
              <span className="text-lg font-medium">(67) 98115-9963</span>
            </div>

            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-coral shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="h-6 w-6" />
              Chamar no WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
