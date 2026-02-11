import { TrendingDown, Truck, Receipt } from "lucide-react";

export const ProblemSlide = () => {
  const problems = [
    {
      icon: Truck,
      title: "Flota subutilizada",
      description: "50 repartidores moviendo solo el 35% del volumen",
      loss: "8,057 COP/entrega — mas cara que Rappi",
    },
    {
      icon: Receipt,
      title: "Factura Rappi elevada",
      description: "El 65% del volumen va a Rappi innecesariamente",
      loss: "292M COP/mes en logistica externa",
    },
    {
      icon: TrendingDown,
      title: "Costo fijo mal distribuido",
      description: "141M COP/mes de nomina entre muy pocas entregas",
      loss: "Mismo gasto, menos eficiencia",
    },
  ];

  return (
    <div className="slide-container bg-background">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <span className="benefit-pill mb-6 opacity-0 animate-fade-up">
            El Problema Oculto
          </span>
          <h1 className="slide-title opacity-0 animate-fade-up animation-delay-100">
            Tu flota propia te cuesta{" "}
            <span className="text-destructive">mas que Rappi</span>
          </h1>
          <p className="slide-subtitle opacity-0 animate-fade-up animation-delay-200">
            Un activo fijo de 141M COP/mes que no esta rindiendo lo que deberia
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
            Costo neto logistico actual:{" "}
            <span className="font-bold text-destructive">232.8M COP/mes</span>
          </p>
        </div>
      </div>
    </div>
  );
};
