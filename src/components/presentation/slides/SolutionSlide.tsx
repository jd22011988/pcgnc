import { Route, RefreshCcw, LayoutDashboard, ArrowRight, ShoppingCart, Headphones } from "lucide-react";

export const SolutionSlide = () => {
  return (
    <div className="slide-container bg-background py-6 md:py-10">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-8">
          <span className="benefit-pill mb-6 opacity-0 animate-fade-up">
            La Solucion
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 opacity-0 animate-fade-up animation-delay-100">
            <span className="picker-highlight">Picker</span> orquesta tu delivery
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-up animation-delay-200">
            Multiples proveedores, una sola plataforma, decision automatica
          </p>
        </div>

        {/* Flow diagram */}
        <div className="stat-card p-4 mb-6 opacity-0 animate-fade-up animation-delay-300">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 text-center">
            <div className="bg-secondary rounded-xl px-4 py-3">
              <p className="text-xs text-muted-foreground">Pedido entra</p>
              <p className="text-sm font-semibold text-foreground">gnc.com.mx</p>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground hidden md:block" />
            <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90 md:hidden" />
            <div className="rounded-xl px-4 py-3" style={{ background: 'hsl(193 100% 45% / 0.1)' }}>
              <p className="text-xs" style={{ color: 'hsl(193 100% 45%)' }}>Picker evalua</p>
              <p className="text-sm font-semibold text-foreground">Distancia + horario</p>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground hidden md:block" />
            <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90 md:hidden" />
            <div className="bg-accent/10 rounded-xl px-4 py-3">
              <p className="text-xs text-accent">Asigna al mejor</p>
              <p className="text-sm font-semibold text-foreground">Lalamove · Uber · Rappi</p>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground hidden md:block" />
            <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90 md:hidden" />
            <div className="bg-secondary rounded-xl px-4 py-3">
              <p className="text-xs text-muted-foreground">Si falla</p>
              <p className="text-sm font-semibold text-foreground">Cascada {"<"}2 min</p>
            </div>
          </div>
        </div>

        {/* 3 core modules */}
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          {/* Flows */}
          <div className="stat-card p-5 opacity-0 animate-fade-up" style={{ animationDelay: '400ms' }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: 'hsl(193 100% 45% / 0.1)' }}>
              <Route className="w-5 h-5" style={{ color: 'hsl(193 100% 45%)' }} />
            </div>
            <h3 className="text-base font-semibold text-foreground mb-1">Flows</h3>
            <p className="text-xs text-muted-foreground mb-3">
              Motor de reglas que decide automaticamente quien entrega cada pedido.
            </p>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                <span className="text-muted-foreground">{"<"}3km → Lalamove <span className="font-semibold text-foreground">$49</span></span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                <span className="text-muted-foreground">3-5km → Uber <span className="font-semibold text-foreground">$52</span></span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                <span className="text-muted-foreground">{">"}5km → Rappi <span className="font-semibold text-foreground">$52</span></span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                <span className="text-muted-foreground">Reglas ajustables sin desarrollo</span>
              </div>
            </div>
          </div>

          {/* Orchestrator */}
          <div className="stat-card p-5 opacity-0 animate-fade-up" style={{ animationDelay: '500ms' }}>
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-3">
              <RefreshCcw className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-base font-semibold text-foreground mb-1">Orquestador</h3>
            <p className="text-xs text-muted-foreground mb-3">
              Cascada automatica si el proveedor primario no acepta. El siguiente toma el pedido en menos de 2 minutos.
            </p>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                <span className="text-muted-foreground">Lalamove falla → Uber toma</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                <span className="text-muted-foreground">Uber falla → Rappi toma</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                <span className="text-muted-foreground">Automatico, sin intervencion</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                <span className="text-muted-foreground">El cliente nunca se entera</span>
              </div>
            </div>
          </div>

          {/* Dashboard */}
          <div className="stat-card p-5 opacity-0 animate-fade-up" style={{ animationDelay: '600ms' }}>
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
              <LayoutDashboard className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-base font-semibold text-foreground mb-1">Dashboard</h3>
            <p className="text-xs text-muted-foreground mb-3">
              Todos los proveedores en una sola vista. Tracking, metricas, costos e incidencias unificados.
            </p>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                <span className="text-muted-foreground">Lalamove + Uber + Rappi en 1 panel</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                <span className="text-muted-foreground">Costo por entrega en tiempo real</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                <span className="text-muted-foreground">Tasa de fallos por proveedor</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                <span className="text-muted-foreground">KAM dedicado + onboarding</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2 additional modules */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Delivery Checkout */}
          <div className="stat-card p-5 opacity-0 animate-fade-up" style={{ animationDelay: '700ms' }}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <ShoppingCart className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-base font-semibold text-foreground">Delivery Checkout</h3>
                  <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: 'hsl(193 100% 45% / 0.1)', color: 'hsl(193 100% 45%)' }}>Beta</span>
                </div>
                <p className="text-xs text-muted-foreground mb-2">
                  Widget embebido en gnc.com.mx que muestra opciones de delivery al cliente en el checkout: tiempos, costos y proveedor optimo — en tiempo real.
                </p>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    <span className="text-muted-foreground">El cliente elige velocidad y precio</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    <span className="text-muted-foreground">Integracion directa al e-commerce</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Support AI */}
          <div className="stat-card p-5 opacity-0 animate-fade-up" style={{ animationDelay: '800ms' }}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Headphones className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-base font-semibold text-foreground">Support AI — WIMO</h3>
                </div>
                <p className="text-xs text-muted-foreground mb-2">
                  Modulo de soporte automatizado que resuelve tickets de delivery en minutos, no dias. Hoy GNC tarda 1.5 dias con el cliente y 7 dias con el proveedor.
                </p>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    <span className="text-muted-foreground">Resolucion automatica de incidencias</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    <span className="text-muted-foreground">De 1.5 dias → minutos en respuesta</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
