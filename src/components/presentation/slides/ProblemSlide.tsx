import { DollarSign, ShieldOff, StoreIcon, ArrowDown } from "lucide-react";

export const ProblemSlide = () => {
  return (
    <div className="slide-container bg-background">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-10">
          <span className="benefit-pill mb-6 opacity-0 animate-fade-up">
            El Diagnostico
          </span>
          <h1 className="slide-title opacity-0 animate-fade-up animation-delay-100">
            Un solo proveedor,{" "}
            <span className="text-destructive">sin alternativa</span>
          </h1>
          <p className="slide-subtitle opacity-0 animate-fade-up animation-delay-200">
            $426,053 MXN/mes en logistica sin optimizacion por distancia ni cascada
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Problem 1 */}
          <div
            className="stat-card opacity-0 animate-fade-up"
            style={{ animationDelay: '300ms' }}
          >
            <div className="w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center mb-5">
              <DollarSign className="w-7 h-7 text-destructive" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Proveedor unico a $59.99 prom.
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Todo el volumen va a Rappi a un promedio de $59.99. Sin competencia entre proveedores ni optimizacion por distancia. La distancia promedio es <span className="font-semibold text-foreground">3.83km</span> — hay proveedores que entregan corta distancia desde $49.
            </p>
            <div className="pt-3 border-t border-border">
              <p className="text-xs text-muted-foreground">Impacto</p>
              <p className="text-sm font-bold text-destructive">~$44,000 MXN/mes en ahorro potencial</p>
            </div>
          </div>

          {/* Problem 2 */}
          <div
            className="stat-card opacity-0 animate-fade-up"
            style={{ animationDelay: '400ms' }}
          >
            <div className="w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center mb-5">
              <ShieldOff className="w-7 h-7 text-destructive" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Sin cascada, sin plan B
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              <span className="font-semibold text-foreground">0.69%</span> sin repartidor + <span className="font-semibold text-foreground">3.13%</span> sin cobertura = 3.82% de fallos. Si Rappi no puede, el pedido baja a DHL (no express) o se pierde. <span className="font-semibold text-foreground">5% de retornos</span> por cliente ausente.
            </p>
            <div className="pt-3 border-t border-border">
              <p className="text-xs text-muted-foreground">Impacto</p>
              <p className="text-sm font-bold text-destructive">$95,200 MXN/mes en ingresos en riesgo</p>
            </div>
          </div>

          {/* Problem 3 */}
          <div
            className="stat-card opacity-0 animate-fade-up"
            style={{ animationDelay: '500ms' }}
          >
            <div className="w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center mb-5">
              <StoreIcon className="w-7 h-7 text-destructive" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              130 tiendas sin delivery
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              25% de la red de 530 tiendas no tiene cobertura express. Cada tienda es un dark store potencial. Con un solo proveedor, si no hay cobertura Rappi en esa zona, no hay delivery.
            </p>
            <div className="pt-3 border-t border-border">
              <p className="text-xs text-muted-foreground">Impacto</p>
              <p className="text-sm font-bold text-destructive">Ingresos perdidos por red subutilizada</p>
            </div>
          </div>
        </div>

        {/* Cost summary */}
        <div className="stat-card p-4 border-2 border-destructive/20 opacity-0 animate-fade-up" style={{ animationDelay: '650ms' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-xs text-muted-foreground">Overpaying</p>
              <p className="text-lg font-bold text-destructive">$44,000</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Ingresos en riesgo</p>
              <p className="text-lg font-bold text-destructive">$95,200</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Call center</p>
              <p className="text-lg font-bold text-destructive">$48,000</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Costo total/mes</p>
              <p className="text-lg font-bold text-destructive">$426,053</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
