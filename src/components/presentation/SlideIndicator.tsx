interface SlideIndicatorProps {
  totalSlides: number;
  currentSlide: number;
  onSlideClick: (index: number) => void;
}

export const SlideIndicator = ({ totalSlides, currentSlide, onSlideClick }: SlideIndicatorProps) => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-50">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSlideClick(index)}
          className={`slide-indicator ${
            currentSlide === index 
              ? 'slide-indicator-active' 
              : 'slide-indicator-inactive'
          }`}
          aria-label={`Ir a slide ${index + 1}`}
        />
      ))}
    </div>
  );
};
