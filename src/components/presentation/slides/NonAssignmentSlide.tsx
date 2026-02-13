import { TrendingDown, Route, Receipt, Zap } from "lucide-react";

export const NonAssignmentSlide = () => {
  return (
    <div className="slide-container bg-background">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-10">
          <span className="benefit-pill mb-6 opacity-0 animate-fade-up">
            Beneficio 1 — Ahorro en Proveedores
          </span>
          <h1 className="slide-title opacity-0 animate-fade-up animation-delay-100">
            <span className="picker-highlight">-$44,039</span>/mes en envios
          </h1>
          <p className="slide-subtitle opacity-0 animate-fade-up animation-delay-200">
            Mismo volumen, menor costo — Flows asigna al proveedor mas barato por distancia
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Cost comparison bars */}
          <div className="stat-card opacity-0 animate-fade-up animation-delay-300">
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Hoy vs Con Picker (por rango)
            </h3>

            <div className="space-y-5">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-muted-foreground">{"<"}3km — <span className="font-semibold text-foreground">45% del volumen</span> (2,122 ent.)</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Rappi $59.99</p>
                    <div className="h-8 bg-destructive/20 rounded-lg flex items-center justify-end pr-3 animate-slide-right" style={{ animationDelay: '500ms' }}>
                      <span className="text-xs font-medium text-destructive">$59.99</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-accent mb-1">Lalamove $49</p>
                    <div className="h-8 bg-accent/20 rounded-lg flex items-center justify-end pr-3 animate-slide-right" style={{ width: '82%', animationDelay: '600ms' }}>
                      <span className="text-xs font-medium text-accent">-18%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-muted-foreground">3-5km — <span className="font-semibold text-foreground">30% del volumen</span> (1,415 ent.)</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Rappi $59.99</p>
                    <div className="h-8 bg-destructive/20 rounded-lg flex items-center justify-end pr-3 animate-slide-right" style={{ animationDelay: '650ms' }}>
                      <span className="text-xs font-medium text-destructive">$59.99</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-accent mb-1">Uber $52</p>
                    <div className="h-8 bg-accent/20 rounded-lg flex items-center justify-end pr-3 animate-slide-right" style={{ width: '87%', animationDelay: '700ms' }}>
                      <span className="text-xs font-medium text-accent">-13%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-muted-foreground">{">"}5km — <span className="font-semibold text-foreground">25% del volumen</span> (1,178 ent.)</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Rappi $59.99</p>
                    <div className="h-8 bg-destructive/20 rounded-lg flex items-center justify-end pr-3 animate-slide-right" style={{ animationDelay: '750ms' }}>
                      <span className="text-xs font-medium text-destructive">$59.99</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-accent mb-1">Rappi $52</p>
                    <div className="h-8 bg-accent/20 rounded-lg flex items-center justify-end pr-3 animate-slide-right" style={{ width: '87%', animationDelay: '800ms' }}>
                      <span className="text-xs font-medium text-accent">-13%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact summary */}
          <div className="space-y-4">
            <div className="stat-card opacity-0 animate-fade-up animation-delay-400">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Receipt className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">
                    Gasto en proveedores
                  </p>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-lg text-muted-foreground line-through">$282,853</span>
                    <span className="text-3xl font-bold text-foreground">$238,814</span>
                    <span className="text-sm text-muted-foreground">MXN</span>
                  </div>
                  <p className="text-sm text-accent font-medium mt-1">-16% en gasto de proveedores</p>
                </div>
              </div>
            </div>

            <div className="stat-card opacity-0 animate-fade-up animation-delay-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <TrendingDown className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">
                    Costo promedio por envio
                  </p>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-lg text-muted-foreground line-through">$59.99</span>
                    <span className="text-3xl font-bold text-foreground">$50.65</span>
                    <span className="text-sm text-muted-foreground">MXN</span>
                  </div>
                  <p className="text-sm text-accent font-medium mt-1">100% de entregas ahorran incluso con fee Picker</p>
                </div>
              </div>
            </div>

            <div
              className="bg-gradient-to-r from-accent to-accent/80 rounded-2xl p-6 text-white opacity-0 animate-scale-in"
              style={{ animationDelay: '800ms' }}
            >
              <div className="flex items-center gap-2 mb-1">
                <Zap className="w-5 h-5" />
                <p className="text-sm font-medium opacity-90">Ahorro en proveedores</p>
              </div>
              <p className="text-4xl font-bold mt-2">+$44,039 MXN/mes</p>
              <p className="text-sm opacity-75 mt-1">Automatico — las reglas se ajustan en minutos, sin desarrollo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
