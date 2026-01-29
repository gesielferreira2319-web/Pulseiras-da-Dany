import { motion } from "framer-motion";

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  highlight?: boolean;
  delay?: number;
}

export function ProductCard({
  title,
  description,
  price,
  image,
  highlight = false,
  delay = 0,
}: ProductCardProps) {
  const WHATSAPP_NUMBER = "5567981159963";
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Olá! Tenho interesse na ${title} 💝`
  )}`;

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-3xl bg-card shadow-card transition-all duration-500 hover:shadow-elevated ${
        highlight ? "ring-2 ring-coral ring-offset-4 ring-offset-background" : ""
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      {highlight && (
        <div className="absolute -right-8 top-6 z-10 rotate-45 bg-coral px-10 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
          Popular
        </div>
      )}

      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>

      <div className="p-6">
        <h3 className="font-script text-2xl font-semibold text-foreground">
          {title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <span className="text-xs text-muted-foreground">A partir de</span>
            <p className="text-3xl font-bold text-coral">{price}</p>
          </div>

          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:shadow-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Encomendar
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
