import { TrendingUp, ArrowRight, Calculator, Calendar } from "lucide-react";

export const ROISlide = () => {
  const benefits = [
    { label: "Reduccion factura Rappi", value: "60.4M COP" },
    { label: "Recuperacion incidencias", value: "12.5M COP" },
  ];

  return (
    <div className="slide-container bg-background py-6 md:py-10">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-6">
          <span className="benefit-pill mb-3 opacity-0 animate-fade-up">
            Resumen Financiero
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 opacity-0 animate-fade-up animation-delay-100">
            ROI: <span className="picker-highlight">+47.9M COP</span> neto/mes
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-up animation-delay-200">
            El fee de Picker se paga solo... y sobra mucho
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 mb-6">
          {/* Benefits Column */}
          <div className="lg:col-span-2 stat-card p-5 opacity-0 animate-fade-up animation-delay-300">
            <h3 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-accent" />
              Beneficios mensuales
            </h3>

            <div className="space-y-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit.label}
                  className="flex items-center justify-between p-3 bg-accent/5 rounded-xl"
                >
                  <span className="text-foreground font-medium text-sm">{benefit.label}</span>
                  <span className="text-lg font-bold text-accent">{benefit.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t-2 border-accent/20">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Total beneficios brutos</span>
                <span className="text-2xl font-bold text-accent">72.9M COP</span>
              </div>
            </div>
          </div>

          {/* Cost Column */}
          <div className="stat-card p-5 opacity-0 animate-fade-up animation-delay-400">
            <h3 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-muted-foreground" />
              Costo Picker
            </h3>

            <div className="text-center py-4">
              <p className="text-sm text-muted-foreground mb-1">50,000 envios x 500 COP</p>
              <p className="text-3xl font-bold text-foreground">25.0M</p>
              <p className="text-sm text-muted-foreground mt-1">COP/mes</p>
            </div>

            <div className="mt-3 p-3 bg-secondary rounded-xl">
              <p className="text-xs text-muted-foreground text-center">
                Sin setup · Sin lock-in · Sin minimo
              </p>
            </div>
          </div>
        </div>

        {/* Net Result */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-5 text-primary-foreground opacity-0 animate-scale-in animation-delay-500">
            <div className="flex items-center gap-2 mb-2">
              <ArrowRight className="w-5 h-5" />
              <span className="text-sm font-medium opacity-90">Ganancia neta mensual</span>
            </div>
            <p className="text-4xl font-bold">+47.9M COP</p>
            <p className="text-sm opacity-75 mt-1">cada mes en el bolsillo de Pasteur</p>
          </div>

          <div className="bg-gradient-to-br from-accent to-accent/80 rounded-2xl p-5 text-white opacity-0 animate-scale-in" style={{ animationDelay: '600ms' }}>
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5" />
              <span className="text-sm font-medium opacity-90">Impacto anual</span>
            </div>
            <p className="text-4xl font-bold">+575M COP</p>
            <p className="text-sm opacity-75 mt-1">~$134K USD de beneficio adicional por ano</p>
          </div>
        </div>

        <div className="text-center mt-4 opacity-0 animate-fade-up" style={{ animationDelay: '800ms' }}>
          <p className="text-base text-muted-foreground">
            Por cada <span className="font-semibold text-foreground">$1 COP</span> que pagas a Picker,
            recuperas <span className="font-semibold text-accent">$2.90 COP</span>
          </p>
        </div>
      </div>
    </div>
  );
};
