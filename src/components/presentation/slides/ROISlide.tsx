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
            ROI: <span className="picker-highlight">5.1x</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-up animation-delay-200">
            Beneficio desde el dia uno, sin inversion inicial
          </p>
        </div>

        {/* 2-scenario comparison */}
        <div className="grid lg:grid-cols-2 gap-4 mb-6">
          {/* Today */}
          <div className="stat-card p-5 opacity-0 animate-fade-up animation-delay-300">
            <h3 className="text-base font-semibold text-foreground mb-1">Hoy</h3>
            <p className="text-xs text-muted-foreground mb-4">100% Rappi · sin optimizacion</p>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Proveedores (Rappi)</span>
                <span className="font-semibold">$282,853</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Fallos + retornos</span>
                <span className="font-semibold">$95,200</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Call center</span>
                <span className="font-semibold">$48,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Picker</span>
                <span className="font-semibold">—</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-border">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-destructive">$426,053</span>
              </div>
            </div>
          </div>

          {/* Con Picker */}
          <div className="stat-card p-5 border-2 border-accent/30 opacity-0 animate-fade-up animation-delay-400">
            <div className="flex items-center gap-2 mb-1">
              <Zap className="w-4 h-4" style={{ color: 'hsl(193 100% 45%)' }} />
              <h3 className="text-base font-semibold text-foreground">Con Picker</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-4">Multi-proveedor · cascada · Flows</p>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Proveedores (-16%)</span>
                <span className="font-semibold text-accent">$238,814</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Fallos + retornos (-78%)</span>
                <span className="font-semibold text-accent">$20,900</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Call center (-25%)</span>
                <span className="font-semibold text-accent">$36,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Picker ($4.50/envio)</span>
                <span className="font-semibold">$21,218</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-border">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-accent">$316,932</span>
              </div>
            </div>

            <div className="mt-3 p-2 bg-accent/10 rounded-lg text-center">
              <p className="text-xs text-muted-foreground">Ahorro neto</p>
              <p className="text-lg font-bold text-accent">+$109,121/mes</p>
              <p className="text-xs text-accent font-medium">ROI 5.1x</p>
            </div>
          </div>
        </div>

        {/* Net Result */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-5 text-primary-foreground opacity-0 animate-scale-in" style={{ animationDelay: '600ms' }}>
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5" />
              <span className="text-sm font-medium opacity-90">Impacto anual</span>
            </div>
            <p className="text-4xl font-bold">+$1,309,452 MXN</p>
            <p className="text-sm opacity-75 mt-1">~$68,000 USD/ano en ahorro neto</p>
          </div>

          <div className="bg-gradient-to-br from-accent to-accent/80 rounded-2xl p-5 text-white opacity-0 animate-scale-in" style={{ animationDelay: '700ms' }}>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm font-medium opacity-90">Con cobertura expandida (500+ tiendas)</span>
            </div>
            <p className="text-4xl font-bold">+$2.2M MXN</p>
            <p className="text-sm opacity-75 mt-1">~8,000 entregas/mes · ROI 5.1x</p>
          </div>
        </div>

        <div className="text-center mt-4 opacity-0 animate-fade-up" style={{ animationDelay: '800ms' }}>
          <p className="text-base text-muted-foreground">
            Por cada <span className="font-semibold text-foreground">$1 MXN</span> que pagas a Picker,
            recuperas <span className="font-semibold text-accent">$5.10 MXN</span> en ahorro
          </p>
        </div>
      </div>
    </div>
  );
};
