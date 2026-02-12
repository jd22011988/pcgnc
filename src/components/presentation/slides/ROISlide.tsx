import { TrendingUp, ArrowRight, Calculator, Calendar, Zap } from "lucide-react";

export const ROISlide = () => {
  return (
    <div className="slide-container bg-background py-6 md:py-10">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-6">
          <span className="benefit-pill mb-3 opacity-0 animate-fade-up">
            Resumen Financiero
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 opacity-0 animate-fade-up animation-delay-100">
            ROI: hasta <span className="picker-highlight">10.4x</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-up animation-delay-200">
            Dos fases, beneficio desde el dia uno
          </p>
        </div>

        {/* 3-scenario comparison */}
        <div className="grid lg:grid-cols-3 gap-4 mb-6">
          {/* Today */}
          <div className="stat-card p-5 opacity-0 animate-fade-up animation-delay-300">
            <h3 className="text-base font-semibold text-foreground mb-1">Hoy</h3>
            <p className="text-xs text-muted-foreground mb-4">210 drivers · 5.2/dia</p>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Flota</span>
                <span className="font-semibold">592.2M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Rappi</span>
                <span className="font-semibold">154.0M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Picker</span>
                <span className="font-semibold">—</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-border">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-destructive">746.2M</span>
              </div>
            </div>
          </div>

          {/* Phase 1 */}
          <div className="stat-card p-5 border-2 border-primary/20 opacity-0 animate-fade-up animation-delay-400">
            <div className="flex items-center gap-2 mb-1">
              <Zap className="w-4 h-4" style={{ color: 'hsl(193 100% 45%)' }} />
              <h3 className="text-base font-semibold text-foreground">Fase 1</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-4">210 drivers · 7.5/dia · inmediato</p>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Flota</span>
                <span className="font-semibold">592.2M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Rappi (-86%)</span>
                <span className="font-semibold text-accent">22.0M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Picker (400 COP)</span>
                <span className="font-semibold">20.0M</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-border">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-foreground">634.2M</span>
              </div>
            </div>

            <div className="mt-3 p-2 bg-accent/10 rounded-lg text-center">
              <p className="text-xs text-muted-foreground">Ahorro neto</p>
              <p className="text-lg font-bold text-accent">+119.1M/mes</p>
              <p className="text-xs text-accent font-medium">ROI 7.0x</p>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="stat-card p-5 border-2 border-accent/30 opacity-0 animate-fade-up animation-delay-500">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="w-4 h-4 text-accent" />
              <h3 className="text-base font-semibold text-foreground">Fase 2</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-4">~80 drivers · 17.7/dia · 6-12 meses</p>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Flota (-62%)</span>
                <span className="font-semibold text-accent">225.6M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Rappi (desborde)</span>
                <span className="font-semibold">66.0M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Picker (800 COP)</span>
                <span className="font-semibold">40.0M</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-border">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-accent">331.6M</span>
              </div>
            </div>

            <div className="mt-3 p-2 bg-accent/10 rounded-lg text-center">
              <p className="text-xs text-muted-foreground">Ahorro neto</p>
              <p className="text-lg font-bold text-accent">+414.6M/mes</p>
              <p className="text-xs text-accent font-medium">ROI 10.4x</p>
            </div>
          </div>
        </div>

        {/* Net Result */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-5 text-primary-foreground opacity-0 animate-scale-in" style={{ animationDelay: '600ms' }}>
            <div className="flex items-center gap-2 mb-2">
              <ArrowRight className="w-5 h-5" />
              <span className="text-sm font-medium opacity-90">Fase 1 — impacto anual</span>
            </div>
            <p className="text-4xl font-bold">+1,429M COP</p>
            <p className="text-sm opacity-75 mt-1">~$334K USD/ano sin tocar headcount</p>
          </div>

          <div className="bg-gradient-to-br from-accent to-accent/80 rounded-2xl p-5 text-white opacity-0 animate-scale-in" style={{ animationDelay: '700ms' }}>
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5" />
              <span className="text-sm font-medium opacity-90">Fase 2 — impacto anual</span>
            </div>
            <p className="text-4xl font-bold">+4,975M COP</p>
            <p className="text-sm opacity-75 mt-1">~$1.16M USD/ano con flota optimizada</p>
          </div>
        </div>

        <div className="text-center mt-4 opacity-0 animate-fade-up" style={{ animationDelay: '800ms' }}>
          <p className="text-base text-muted-foreground">
            Por cada <span className="font-semibold text-foreground">$1 COP</span> que pagas a Picker,
            recuperas entre <span className="font-semibold text-accent">$7.00</span> y <span className="font-semibold text-accent">$10.40 COP</span>
          </p>
        </div>
      </div>
    </div>
  );
};
