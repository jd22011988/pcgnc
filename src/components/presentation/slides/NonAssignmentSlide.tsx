import { TrendingUp, Truck, Receipt } from "lucide-react";

export const NonAssignmentSlide = () => {
  return (
    <div className="slide-container bg-background">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <span className="benefit-pill mb-6 opacity-0 animate-fade-up">
            Beneficio #1
          </span>
          <h1 className="slide-title opacity-0 animate-fade-up animation-delay-100">
            Ahorra <span className="picker-highlight">35.4M COP</span>/mes
          </h1>
          <p className="slide-subtitle opacity-0 animate-fade-up animation-delay-200">
            Ruteo inteligente: mas volumen a tu flota, menos a Rappi
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Utilization Chart */}
          <div className="stat-card opacity-0 animate-fade-up animation-delay-300">
            <h3 className="text-lg font-semibold text-foreground mb-8">
              Utilizacion de Flota
            </h3>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Hoy (sin Picker)</span>
                  <span className="font-semibold text-destructive">35%</span>
                </div>
                <div className="h-12 bg-secondary rounded-xl overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-destructive/80 to-destructive rounded-xl flex items-center justify-end pr-4 animate-slide-right"
                    style={{ width: '35%', animationDelay: '500ms' }}
                  >
                    <span className="text-sm font-medium text-white">17,500</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Con Picker</span>
                  <span className="font-semibold text-accent">54%</span>
                </div>
                <div className="h-12 bg-secondary rounded-xl overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-accent/80 to-accent rounded-xl flex items-center justify-end pr-4 animate-slide-right"
                    style={{ width: '54%', animationDelay: '700ms' }}
                  >
                    <span className="text-sm font-medium text-white">27,000</span>
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
                  <p className="text-sm text-muted-foreground">Entregas movidas a flota</p>
                  <p className="text-xl font-bold text-accent">+9,500/mes</p>
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
                    <span className="text-lg text-muted-foreground line-through">8,057</span>
                    <span className="text-3xl font-bold text-foreground">5,222</span>
                    <span className="text-sm text-muted-foreground">COP</span>
                  </div>
                  <p className="text-sm text-accent font-medium mt-1">-35% por entrega</p>
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
                    <span className="text-lg text-muted-foreground line-through">292M</span>
                    <span className="text-3xl font-bold text-foreground">231M</span>
                    <span className="text-sm text-muted-foreground">COP/mes</span>
                  </div>
                  <p className="text-sm text-accent font-medium mt-1">-21% en facturacion</p>
                </div>
              </div>
            </div>

            <div
              className="bg-gradient-to-r from-accent to-accent/80 rounded-2xl p-6 text-white opacity-0 animate-scale-in"
              style={{ animationDelay: '800ms' }}
            >
              <p className="text-sm font-medium opacity-90">Ahorro neto mensual (incluye fee Picker)</p>
              <p className="text-4xl font-bold mt-2">+35.4M COP</p>
            </div>
          </div>
        </div>

        <div className="text-center opacity-0 animate-fade-up" style={{ animationDelay: '900ms' }}>
          <p className="text-lg text-muted-foreground">
            <span className="font-semibold text-foreground">¿Como?</span> Picker
            Flows evalua distancia y asigna automaticamente: {"<"}5km → flota, {">"}5km → Rappi.
            Tope conservador: 18 entregas/dia por repartidor.
          </p>
        </div>
      </div>
    </div>
  );
};
