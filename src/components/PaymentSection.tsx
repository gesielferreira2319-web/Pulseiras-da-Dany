import { motion } from "framer-motion";
import { Banknote, QrCode } from "lucide-react";
import { BeadString } from "./BeadDecoration";

const paymentMethods = [
  {
    icon: QrCode,
    title: "Pix",
    description: "Pagamento instantâneo e seguro",
    color: "bg-mint",
  },
  {
    icon: Banknote,
    title: "Dinheiro",
    description: "Pague na entrega",
    color: "bg-sunshine",
  },
];

export function PaymentSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <BeadString className="mb-4" />
          <h2 className="font-script text-4xl font-bold text-foreground">
            Formas de Pagamento
          </h2>
          <p className="mt-3 text-muted-foreground">
            Escolha a forma que for mais conveniente para você
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 max-w-xl mx-auto">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={method.title}
              className="flex items-center gap-4 rounded-2xl bg-card p-6 shadow-soft"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-xl ${method.color} shadow-soft`}
              >
                <method.icon className="h-7 w-7 text-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {method.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {method.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
