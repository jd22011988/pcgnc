import { ClipboardCheck, Truck, Receipt, ShoppingCart, Route, Clock, AlertTriangle } from "lucide-react";

export const AssumptionsSlide = () => {
  const operationalAssumptions = [
    { label: "Entregas totales/mes", value: "50,000", icon: ShoppingCart },
    { label: "Split actual", value: "35% flota / 65% Rappi", icon: Route },
    { label: "Repartidores internos", value: "~50", icon: Truck },
    { label: "Costo por repartidor/mes", value: "2,820,000 COP", icon: Receipt },
    { label: "Entregas hoy/dia/repartidor", value: "~12", icon: Clock },
  ];

  const financialAssumptions = [
    { label: "Costo total flota (fijo)", value: "141M COP/mes" },
    { label: "Fee delivery al cliente", value: "4,000 COP/orden" },
    { label: "Tarifa Rappi (<3km)", value: "7,000 COP" },
    { label: "Tarifa Rappi (3-5km)", value: "10,600 COP" },
    { label: "Tarifa Rappi (>5km)", value: "14,200 COP" },
  ];

  const incidentAssumptions = [
    { label: "Ticket promedio orden", value: "~55,000 COP" },
    { label: "Tasa de incidencias Rappi", value: "1.5%" },
    { label: "Recovery rate actual (manual)", value: "~50%" },
  ];

  return (
    <div className="slide-container bg-background py-6 md:py-10">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-8">
          <span className="benefit-pill mb-4 opacity-0 animate-fade-up">
            <ClipboardCheck className="w-4 h-4" />
            Base del Analisis
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 opacity-0 animate-fade-up animation-delay-100">
            Supuestos a <span className="picker-highlight">validar</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-up animation-delay-200">
            Los numeros de esta propuesta se basan en la siguiente informacion
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          {/* Operational */}
          <div className="stat-card p-5 opacity-0 animate-fade-up animation-delay-300">
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Operacion
            </h3>
            <div className="space-y-3">
              {operationalAssumptions.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm font-semibold text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Financial */}
          <div className="stat-card p-5 opacity-0 animate-fade-up animation-delay-400">
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Costos
            </h3>
            <div className="space-y-2">
              {financialAssumptions.map((item) => (
                <div key={item.label} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                  <span className="text-xs text-muted-foreground">{item.label}</span>
                  <span className="text-sm font-semibold text-foreground">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Incidents */}
          <div className="stat-card p-5 opacity-0 animate-fade-up animation-delay-500">
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Incidencias
            </h3>
            <div className="space-y-2">
              {incidentAssumptions.map((item) => (
                <div key={item.label} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                  <span className="text-xs text-muted-foreground">{item.label}</span>
                  <span className="text-sm font-semibold text-foreground">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 bg-accent/10 rounded-xl">
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold text-accent">Distribucion de distancias estimada:</span>
                <br />
                60% {"<"}3km · 25% 3-5km · 15% {">"}5km
              </p>
            </div>
          </div>
        </div>

        {/* Fleet capacity callout */}
        <div className="mt-4 stat-card p-4 border-2 border-warning/30 opacity-0 animate-fade-up" style={{ animationDelay: '650ms' }}>
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-warning/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <AlertTriangle className="w-5 h-5 text-warning" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Capacidad de flota: tope conservador de 18 entregas/dia</p>
              <p className="text-xs text-muted-foreground mt-1">
                Hoy cada repartidor hace <span className="font-semibold text-foreground">~12 entregas/dia</span>.
                Estimamos un tope realista de <span className="font-semibold text-foreground">18/dia</span> (1 cada 27 min).
                Eso da una capacidad maxima de flota de <span className="font-semibold text-foreground">27,000 entregas/mes</span> (54% del volumen).
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 text-center opacity-0 animate-fade-up" style={{ animationDelay: '750ms' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-xl">
            <p className="text-sm text-muted-foreground">
              Todos los supuestos son ajustables — los numeros finales se recalculan con datos reales de Pasteur
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
