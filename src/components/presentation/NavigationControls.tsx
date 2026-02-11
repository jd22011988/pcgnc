import { ChevronLeft, ChevronRight } from "lucide-react";

interface NavigationControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
}

export const NavigationControls = ({ 
  onPrevious, 
  onNext, 
  canGoPrevious, 
  canGoNext 
}: NavigationControlsProps) => {
  return (
    <>
      <button
        onClick={onPrevious}
        disabled={!canGoPrevious}
        className={`fixed left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center transition-all duration-200 z-50 ${
          canGoPrevious 
            ? 'hover:bg-secondary hover:scale-110 cursor-pointer' 
            : 'opacity-30 cursor-not-allowed'
        }`}
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6 text-foreground" />
      </button>
      
      <button
        onClick={onNext}
        disabled={!canGoNext}
        className={`fixed right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center transition-all duration-200 z-50 ${
          canGoNext 
            ? 'hover:bg-secondary hover:scale-110 cursor-pointer' 
            : 'opacity-30 cursor-not-allowed'
        }`}
        aria-label="Siguiente slide"
      >
        <ChevronRight className="w-6 h-6 text-foreground" />
      </button>
    </>
  );
};
