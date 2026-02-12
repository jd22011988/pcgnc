import { TrendingUp, Truck, Receipt, Zap } from "lucide-react";

export const NonAssignmentSlide = () => {
  return (
    <div className="slide-container bg-background">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <span className="benefit-pill mb-6 opacity-0 animate-fade-up">
            Fase 1 — Inmediato
          </span>
          <h1 className="slide-title opacity-0 animate-fade-up animation-delay-100">
            Ahorra <span className="picker-highlight">132M COP</span>/mes
          </h1>
          <p className="slide-subtitle opacity-0 animate-fade-up animation-delay-200">
            La flota ya esta pagada — cada entrega que absorbe de Rappi es ahorro puro
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Utilization Chart */}
          <div className="stat-card opacity-0 animate-fade-up animation-delay-300">
            <h3 className="text-lg font-semibold text-foreground mb-8">
              Volumen de Flota
            </h3>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Hoy (sin Picker)</span>
                  <span className="font-semibold text-foreground">65% — 32,500</span>
                </div>
                <div className="h-12 bg-secondary rounded-xl overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary/60 to-primary rounded-xl flex items-center justify-end pr-4 animate-slide-right"
                    style={{ width: '65%', animationDelay: '500ms' }}
                  >
                    <span className="text-sm font-medium text-white">5.2/dia</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Con Picker</span>
                  <span className="font-semibold text-accent">95% — 47,500</span>
                </div>
                <div className="h-12 bg-secondary rounded-xl overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-accent/80 to-accent rounded-xl flex items-center justify-end pr-4 animate-slide-right"
                    style={{ width: '95%', animationDelay: '700ms' }}
                  >
                    <span className="text-sm font-medium text-white">7.5/dia</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Entregas absorbidas de Rappi</p>
                  <p className="text-xl font-bold text-accent">+15,000/mes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Cards */}
          <div className="space-y-4">
            <div className="stat-card opacity-0 animate-fade-up animation-delay-400">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Truck className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">
                    Costo unitario flota
                  </p>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-lg text-muted-foreground line-through">18,222</span>
                    <span className="text-3xl font-bold text-foreground">12,468</span>
                    <span className="text-sm text-muted-foreground">COP</span>
                  </div>
                  <p className="text-sm text-accent font-medium mt-1">-32% por entrega</p>
                </div>
              </div>
            </div>

            <div className="stat-card opacity-0 animate-fade-up animation-delay-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Receipt className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">
                    Factura Rappi
                  </p>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-lg text-muted-foreground line-through">154M</span>
                    <span className="text-3xl font-bold text-foreground">22M</span>
                    <span className="text-sm text-muted-foreground">COP/mes</span>
                  </div>
                  <p className="text-sm text-accent font-medium mt-1">-86% en facturacion</p>
                </div>
              </div>
            </div>

            <div
              className="bg-gradient-to-r from-accent to-accent/80 rounded-2xl p-6 text-white opacity-0 animate-scale-in"
              style={{ animationDelay: '800ms' }}
            >
              <div className="flex items-center gap-2 mb-1">
                <Zap className="w-5 h-5" />
                <p className="text-sm font-medium opacity-90">Ahorro neto en Rappi (inmediato)</p>
              </div>
              <p className="text-4xl font-bold mt-2">+132M COP</p>
              <p className="text-sm opacity-75 mt-1">Sin tocar headcount — la flota ya esta pagada</p>
            </div>
          </div>
        </div>

        <div className="text-center opacity-0 animate-fade-up" style={{ animationDelay: '900ms' }}>
          <p className="text-lg text-muted-foreground">
            <span className="font-semibold text-foreground">¿Como?</span> Picker
            Flows rutea por distancia: {"<"}5km → flota, {">"}5km → Rappi.
            Solo el 5% de overflow queda en Rappi (2,500 entregas).
          </p>
        </div>
      </div>
    </div>
  );
};
