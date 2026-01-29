
import { motion } from "framer-motion";
import { ProductCard } from "./ProductCard";
import { BeadDecoration } from "./BeadDecoration";
import braceletSimple from "@/assets/bracelet-simple.jpg";
import braceletPersonalized from "@/assets/bracelet-personalized.jpg";
import braceletBears from "@/assets/bracelet-bears.jpg";
import braceletSmiles from "@/assets/bracelet-smiles.jpg";
import braceletSophia from "@/assets/bracelet-sophia.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const products = [
  {
    title: "Pulseira Simples",
    description: "Pulseira de miçangas coloridas, design exclusivo feito à mão com muito carinho.",
    price: "R$ 6,00",
    image: braceletSimple,
    highlight: false,
  },
  {
    title: "Pulseira Ursinhos",
    description: "Pulseira divertida com pingentes de ursinhos coloridos. Super fofa!",
    price: "R$ 6,00",
    image: braceletBears,
    highlight: false,
  },
  {
    title: "Pulseira Smiles",
    description: "Pulseira alegre com carinhas felizes para iluminar o seu dia.",
    price: "R$ 6,00",
    image: braceletSmiles,
    highlight: false,
  },
  {
    title: "Pulseira com Nome",
    description: "Pulseira personalizada com o nome que você escolher! Perfeita para presente.",
    price: "R$ 8,00",
    image: braceletPersonalized,
    highlight: true,
  },
  {
    title: "Pulseira com Nome",
    description: "Modelo exclusivo em roxo e azul. Escolha suas cores e monte a sua!",
    price: "R$ 8,00",
    image: braceletSophia,
    highlight: true,
  },
];

export function ProductsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section id="produtos" className="bg-gradient-warm py-24">
      <div className="container px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <BeadDecoration className="justify-center mb-4" />
          <h2 className="font-script text-5xl font-bold text-foreground">
            Nossas Pulseiras
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            Cada pulseira é única e feita especialmente para você!
          </p>
        </motion.div>

        <div className="mt-16 w-full max-w-5xl mx-auto px-4 md:px-12">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {products.map((product, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%] md:basis-1/2 lg:basis-1/3">
                  <div className="h-full">
                    <ProductCard
                      {...product}
                      delay={index * 0.1}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-2 w-2 rounded-full transition-all duration-300",
                  index === current - 1 ? "bg-primary w-6" : "bg-primary/20 hover:bg-primary/40"
                )}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Info adicional */}
        <motion.div
          className="mt-16 rounded-2xl bg-card p-8 shadow-soft max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-script text-2xl font-semibold text-center text-foreground mb-6">
            ✨ Personalização
          </h3>
          <div className="grid gap-4 text-center sm:grid-cols-2">
            <div className="rounded-xl bg-secondary/50 p-4">
              <p className="text-sm text-muted-foreground">Pulseira Simples</p>
              <p className="text-2xl font-bold text-foreground">R$ 6,00</p>
              <p className="text-xs text-muted-foreground mt-1">cada unidade</p>
            </div>
            <div className="rounded-xl bg-coral/10 p-4 ring-1 ring-coral/20">
              <p className="text-sm text-muted-foreground">Com Nome Personalizado</p>
              <p className="text-2xl font-bold text-coral">R$ 8,00</p>
              <p className="text-xs text-muted-foreground mt-1">cada unidade</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
