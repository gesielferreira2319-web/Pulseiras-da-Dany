import { motion } from "framer-motion";

const beadColors = [
  "bg-coral",
  "bg-mint",
  "bg-sunshine",
  "bg-blush",
  "bg-turquoise",
  "bg-coral-light",
  "bg-mint-light",
];

interface BeadDecorationProps {
  className?: string;
  count?: number;
}

export function BeadDecoration({ className = "", count = 7 }: BeadDecorationProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className={`h-3 w-3 rounded-full ${beadColors[i % beadColors.length]} shadow-sm`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
        />
      ))}
    </div>
  );
}

export function BeadString({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-1.5 ${className}`}>
      {beadColors.map((color, i) => (
        <motion.div
          key={i}
          className={`h-2.5 w-2.5 rounded-full ${color}`}
          animate={{ y: [0, -3, 0] }}
          transition={{
            duration: 2,
            delay: i * 0.15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
