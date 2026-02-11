import { Check, ArrowRight, Shield, Zap } from "lucide-react";

export const OfferSlide = () => {
  const features = [
    "500 COP por envio orquestado",
    "$0 de setup — sin costo de implementacion",
    "Sin compromiso minimo (sin lock-in)",
    "Modulo Flows: ruteo automatico por distancia",
    "Orquestador: cascada si proveedor no disponible",
    "Dashboard unificado: flota + Rappi en una vista",
    "Gestion automatica de claims e incidencias",
    "Soporte enterprise dedicado",
  ];

  return (
    <div className="slide-container bg-gradient-to-br from-primary via-primary to-primary/90 py-6 md:py-10">
      <div className="max-w-5xl w-full text-primary-foreground">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white font-medium text-sm mb-4 opacity-0 animate-fade-up">
            <Zap className="w-4 h-4" />
            Propuesta
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 opacity-0 animate-fade-up animation-delay-100">
            Tu ganancia esta garantizada
          </h1>
          <p className="text-lg md:text-xl font-light opacity-80 opacity-0 animate-fade-up animation-delay-200">
            Cero riesgo, maximo retorno
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Features */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 opacity-0 animate-fade-up animation-delay-300">
            <h3 className="text-lg font-semibold mb-4">Que incluye Picker</h3>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-base opacity-90">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Summary Card */}
          <div className="bg-white rounded-2xl p-6 text-foreground opacity-0 animate-scale-in animation-delay-400">
            <div className="text-center mb-5">
              <Shield className="w-10 h-10 text-accent mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-primary">Tu inversion vs retorno</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-secondary rounded-xl">
                <span className="text-muted-foreground text-sm">Pagas</span>
                <span className="text-lg font-bold text-primary">25.0M COP/mes</span>
              </div>

              <div className="flex justify-center">
                <ArrowRight className="w-5 h-5 text-accent" />
              </div>

              <div className="flex items-center justify-between p-3 bg-accent/10 rounded-xl">
                <span className="text-muted-foreground text-sm">Recuperas</span>
                <span className="text-lg font-bold text-accent">72.9M COP/mes</span>
              </div>

              <div className="pt-3 border-t border-border text-center">
                <p className="text-xs text-muted-foreground mb-1">Ganancia neta mensual</p>
                <p className="text-3xl font-bold text-accent">+47.9M COP</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center opacity-0 animate-fade-up" style={{ animationDelay: '700ms' }}>
          <p className="text-lg opacity-80">¿Listos para optimizar su logistica?</p>
        </div>
      </div>
    </div>
  );
};
