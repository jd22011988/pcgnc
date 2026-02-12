import { Users, ArrowRight, TrendingDown } from "lucide-react";

export const RefundsSlide = () => {
  return (
    <div className="slide-container bg-background py-8 md:py-12">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-10">
          <span className="benefit-pill mb-4 opacity-0 animate-fade-up">
            Fase 2 — Optimizacion de Flota
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 opacity-0 animate-fade-up animation-delay-100">
            De 210 a <span className="picker-highlight">~80 repartidores</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-up animation-delay-200">
            Misma demanda, flota 3x mas productiva + Rappi solo para desborde
          </p>
        </div>

        {/* Before → After */}
        <div className="grid md:grid-cols-[1fr,auto,1fr] gap-4 items-center mb-8">
          {/* Hoy */}
          <div className="stat-card p-5 opacity-0 animate-fade-up animation-delay-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                <Users className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Hoy</p>
                <p className="text-xs text-muted-foreground">210 drivers · 5.2/dia</p>
              </div>
            </div>
            <div className="text-center py-4">
              <p className="text-3xl font-bold text-destructive">746.2M</p>
              <p className="text-sm text-muted-foreground">COP/mes total</p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center opacity-0 animate-fade-up animation-delay-400">
            <ArrowRight className="w-6 h-6 text-accent hidden md:block" />
            <ArrowRight className="w-6 h-6 text-accent rotate-90 md:hidden" />
          </div>

          {/* Fase 2 */}
          <div className="stat-card p-5 border-2 border-accent/30 opacity-0 animate-fade-up animation-delay-400">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <TrendingDown className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Fase 2</p>
                <p className="text-xs text-accent">~80 drivers · 17.7/dia</p>
              </div>
            </div>
            <div className="text-center py-4">
              <p className="text-3xl font-bold text-accent">331.6M</p>
              <p className="text-sm text-muted-foreground">COP/mes total</p>
            </div>
          </div>
        </div>

        {/* Savings highlight */}
        <div className="bg-gradient-to-r from-accent to-accent/80 rounded-2xl p-6 text-white text-center opacity-0 animate-scale-in animation-delay-500 mb-6">
          <p className="text-sm font-medium opacity-80 mb-1">Ahorro mensual vs hoy</p>
          <p className="text-4xl md:text-5xl font-bold">-414.6M COP</p>
          <p className="text-sm opacity-75 mt-2">
            130 drivers menos · Rappi solo 15% desborde · Picker a 800 COP
          </p>
        </div>

        {/* Footnote */}
        <p className="text-center text-sm text-muted-foreground opacity-0 animate-fade-up animation-delay-500">
          Transicion gradual — attrition natural + redeployment a nuevos PDVs
        </p>
      </div>
    </div>
  );
};
