import { RefreshCcw, Bot, Users } from "lucide-react";

export const RefundsSlide = () => {
  return (
    <div className="slide-container bg-background py-8 md:py-12">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-8">
          <span className="benefit-pill mb-4 opacity-0 animate-fade-up">
            Beneficio #2
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 opacity-0 animate-fade-up animation-delay-100">
            Recupera <span className="picker-highlight">12.5M COP</span> extra/mes
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-up animation-delay-200">
            Automatizacion de claims + menor exposicion a incidencias Rappi
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Comparison */}
          <div className="space-y-4">
            <div className="stat-card p-5 opacity-0 animate-fade-up animation-delay-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                  <Users className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Proceso manual (Rappi directo)</p>
                  <p className="text-xs text-muted-foreground">32,500 entregas expuestas</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground text-sm">Incidencias (1.5%)</span>
                  <span className="font-semibold text-sm">488/mes</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground text-sm">Valor en riesgo</span>
                  <span className="font-semibold text-sm">26.8M COP</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground text-sm">Recovery rate</span>
                  <span className="font-semibold text-warning text-sm">~50%</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground text-sm">Perdida absorbida</span>
                  <span className="font-semibold text-destructive text-sm">13.4M COP</span>
                </div>
              </div>
            </div>

            <div className="stat-card p-5 border-2 border-accent/30 opacity-0 animate-fade-up animation-delay-400">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Con Picker (automatizado)</p>
                  <p className="text-xs text-accent">23,000 entregas Rappi + recovery automatico</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground text-sm">Incidencias (1.5%)</span>
                  <span className="font-semibold text-sm">345/mes</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground text-sm">Valor en riesgo</span>
                  <span className="font-semibold text-sm">19.0M COP</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground text-sm">Recovery rate</span>
                  <span className="font-semibold text-accent text-sm">~95%</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground text-sm">Perdida absorbida</span>
                  <span className="font-semibold text-accent text-sm">0.9M COP</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Impact */}
          <div className="opacity-0 animate-scale-in animation-delay-500">
            <div className="stat-card p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <RefreshCcw className="w-8 h-8 text-accent" />
              </div>

              <h3 className="text-base font-medium text-muted-foreground mb-2">
                Beneficio por recuperacion de incidencias
              </h3>

              <div className="text-4xl font-bold text-accent mb-2">
                +12.5M
              </div>
              <p className="text-muted-foreground text-sm">COP cada mes</p>

              <div className="mt-6 pt-4 border-t border-border">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-left">
                    <p className="text-muted-foreground text-xs">Perdida hoy</p>
                    <p className="font-semibold text-destructive">13.4M COP</p>
                  </div>
                  <div className="text-left">
                    <p className="text-muted-foreground text-xs">Perdida con Picker</p>
                    <p className="font-semibold text-accent">0.9M COP</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-accent/10 rounded-xl p-3">
                <p className="text-sm text-accent font-medium">
                  Doble efecto
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Menos entregas Rappi = menos incidencias
                  <br />
                  + mejor recovery en las que quedan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
