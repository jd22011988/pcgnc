import { ClipboardCheck, ShoppingCart, Route, Receipt, AlertTriangle, Store, Phone, Clock, MapPin } from "lucide-react";

export const AssumptionsSlide = () => {
  const operationalAssumptions = [
    { label: "Entregas express/mes", value: "4,715", icon: ShoppingCart },
    { label: "Express (Rappi Cargo)", value: "$59.99 MXN · 51:46 min E2E", icon: Route },
    { label: "Fallback (DHL + 99min)", value: "3.82% que Rappi no cubre", icon: Route },
    { label: "Distancia promedio", value: "3.83 km", icon: MapPin },
    { label: "Tiendas con delivery", value: "~400 de 530", icon: Store },
  ];

  const financialAssumptions = [
    { label: "Tarifa promedio Rappi", value: "$59.99 MXN/entrega" },
    { label: "Gasto total Rappi", value: "$282,853 MXN/mes" },
    { label: "Call center (4 agentes)", value: "$48,000 MXN/mes" },
    { label: "Resolucion ticket cliente", value: "1.5 dias" },
    { label: "Resolucion ticket proveedor", value: "7 dias" },
  ];

  const incidentAssumptions = [
    { label: "Sin repartidor asignado", value: "0.69%" },
    { label: "Sin cobertura", value: "3.13%" },
    { label: "Total entregas fallidas", value: "3.82% (180/mes)" },
    { label: "Retornos (cliente ausente)", value: "5% (236/mes)" },
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
            Datos <span className="picker-highlight">confirmados</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-up animation-delay-200">
            Numeros validados por el equipo de GNC (Feb 4, 2026)
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

            <div className="mt-4 p-3 bg-destructive/10 rounded-xl">
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold text-destructive">130 tiendas sin delivery</span>
                <br />
                25% de la red no tiene cobertura express
              </p>
            </div>
          </div>
        </div>

        {/* Key insight callout */}
        <div className="mt-4 stat-card p-4 border-2 border-destructive/30 opacity-0 animate-fade-up" style={{ animationDelay: '650ms' }}>
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <AlertTriangle className="w-5 h-5 text-destructive" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Distancia promedio: 3.83 km — tarifa promedio: $59.99</p>
              <p className="text-xs text-muted-foreground mt-1">
                La mayoria de los envios son cortos, pero GNC depende de <span className="font-semibold text-destructive">un solo proveedor</span> sin
                alternativa por distancia. Cuando Rappi no puede, el pedido baja a DHL (no express, sin tracking GPS).
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 text-center opacity-0 animate-fade-up" style={{ animationDelay: '750ms' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-xl">
            <p className="text-sm text-muted-foreground">
              Costo logistico total actual: <span className="font-semibold text-foreground">$426,053 MXN/mes</span> (proveedores + fallos + call center)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
