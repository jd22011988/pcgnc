import { TrendingDown, Truck, Receipt, Clock } from "lucide-react";

export const ProblemSlide = () => {
  const problems = [
    {
      icon: Clock,
      title: "5.2 entregas por dia",
      description: "210 repartidores produciendo un tercio de lo esperado (estandar: 12-18/dia)",
      loss: "Capacidad ociosa de 113,400 entregas/mes",
    },
    {
      icon: Truck,
      title: "18,222 COP por entrega",
      description: "El costo unitario de la flota es el doble que Rappi (~8,800 COP)",
      loss: "592.2M COP/mes de nomina + motos",
    },
    {
      icon: Receipt,
      title: "154M COP en Rappi",
      description: "17,500 entregas externalizadas a pesar de tener flota con capacidad de sobra",
      loss: "35% del volumen sale a proveedor externo",
    },
  ];

  return (
    <div className="slide-container bg-background">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <span className="benefit-pill mb-6 opacity-0 animate-fade-up">
            El Diagnostico
          </span>
          <h1 className="slide-title opacity-0 animate-fade-up animation-delay-100">
            Una flota de 210 que rinde como{" "}
            <span className="text-destructive">70</span>
          </h1>
          <p className="slide-subtitle opacity-0 animate-fade-up animation-delay-200">
            746.2M COP/mes en logistica con una productividad de 5.2 entregas/dia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="stat-card opacity-0 animate-fade-up"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center mb-6">
                <problem.icon className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {problem.description}
              </p>
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-medium text-destructive">
                  {problem.loss}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center opacity-0 animate-fade-up" style={{ animationDelay: '700ms' }}>
          <p className="text-2xl md:text-3xl font-light text-muted-foreground">
            Cada entrega a Rappi cuesta{" "}
            <span className="font-bold text-foreground">8,800 COP</span>
            {" "}— pero la flota ya pagada cuesta{" "}
            <span className="font-bold text-destructive">18,222 COP</span>
          </p>
        </div>
      </div>
    </div>
  );
};
