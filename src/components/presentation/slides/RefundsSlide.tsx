import { ShieldCheck, ArrowRight, RefreshCcw, TrendingUp } from "lucide-react";

export const RefundsSlide = () => {
  return (
    <div className="slide-container bg-background py-6 md:py-10">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-8">
          <span className="benefit-pill mb-4 opacity-0 animate-fade-up">
            Beneficio 2 — Ingresos Recuperados
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 opacity-0 animate-fade-up animation-delay-100">
            Recupera <span className="picker-highlight">$74,300 MXN</span>/mes
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-up animation-delay-200">
            Cascada automatica + 95% de recovery en incidencias
          </p>
        </div>

        {/* Before → After */}
        <div className="grid md:grid-cols-[1fr,auto,1fr] gap-4 items-center mb-6">
          {/* Hoy */}
          <div className="stat-card p-5 opacity-0 animate-fade-up animation-delay-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Hoy</p>
                <p className="text-xs text-muted-foreground">Solo Rappi · sin plan B</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-xs text-muted-foreground">Entregas fallidas (3.82%)</span>
                <span className="text-sm font-bold text-destructive">180/mes</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-xs text-muted-foreground">Retornos (5%)</span>
                <span className="text-sm font-bold text-destructive">236/mes</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-xs text-muted-foreground">Recovery rate (directo)</span>
                <span className="text-sm font-bold text-destructive">~50%</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-xs text-muted-foreground">Ingresos en riesgo</span>
                <span className="text-sm font-bold text-destructive">$95,200</span>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center opacity-0 animate-fade-up animation-delay-400">
            <ArrowRight className="w-6 h-6 text-accent hidden md:block" />
            <ArrowRight className="w-6 h-6 text-accent rotate-90 md:hidden" />
          </div>

          {/* Con Picker */}
          <div className="stat-card p-5 border-2 border-accent/30 opacity-0 animate-fade-up animation-delay-400">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <RefreshCcw className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Con Picker</p>
                <p className="text-xs text-accent">Cascada + recovery 95%</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-xs text-muted-foreground">Entregas fallidas (-60%)</span>
                <span className="text-sm font-bold text-accent">~72/mes</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-xs text-muted-foreground">Retornos (-30%)</span>
                <span className="text-sm font-bold text-accent">~165/mes</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-xs text-muted-foreground">Recovery rate Picker</span>
                <span className="text-sm font-bold text-accent">95%</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-xs text-muted-foreground">Ingresos en riesgo</span>
                <span className="text-sm font-bold text-accent">$20,900</span>
              </div>
            </div>
          </div>
        </div>

        {/* Savings highlight */}
        <div className="bg-gradient-to-r from-accent to-accent/80 rounded-2xl p-6 text-white text-center opacity-0 animate-scale-in animation-delay-500 mb-5">
          <p className="text-sm font-medium opacity-80 mb-1">Ingresos recuperados por mes</p>
          <p className="text-4xl md:text-5xl font-bold">+$74,300 MXN</p>
          <p className="text-sm opacity-75 mt-2">
            Cascada: +$57,200 · Recovery rate 95%: +$17,100 adicional
          </p>
        </div>

        {/* How it works */}
        <div className="grid md:grid-cols-2 gap-3 opacity-0 animate-fade-up" style={{ animationDelay: '650ms' }}>
          <div className="stat-card p-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">Cascada automatica</h4>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                <span className="text-muted-foreground">Proveedor primario no acepta</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                <span className="text-muted-foreground">Siguiente proveedor toma en {"<"}2 min</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                <span className="text-muted-foreground">El cliente nunca se entera del cambio</span>
              </div>
            </div>
          </div>
          <div className="stat-card p-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">Recovery rate</h4>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">Cliente directo</span>
                  <span className="font-semibold text-destructive">~50%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-destructive/40 h-2 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">Con Picker</span>
                  <span className="font-semibold text-accent">95%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
