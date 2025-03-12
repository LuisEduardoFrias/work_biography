import { useState, useEffect,ReactNode, useCallback } from 'react'
import LeftArrowSvg from 'svg/left_arrow_svg'
import RightArrowSvg from 'svg/right_arrow_svg'
import './slider.css'

interface SliderProps {
  children: ReactNode[];
}

export default function Slider({ children }: SliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoSlide, setIsAutoSlide] = useState(true);
  const totalSlides = children.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((currentSlide + 1) % totalSlides);
  }, [currentSlide, totalSlides])

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
  };

  const handleMouseEnter = () => {
    setIsAutoSlide(false);
    setInterval(() => {
      setIsAutoSlide(true);
    }, 10000);
  };

  const handleMouseLeave = () => {
    setIsAutoSlide(false);
    setInterval(() => {
      setIsAutoSlide(true);
    }, 10000);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoSlide) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [currentSlide, isAutoSlide, nextSlide]);

  return (
    <div className="slider">
      {children.map((child, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
        >
          {child}
        </div>
      ))}
      <button className="arrow prev" onClick={prevSlide}>
        <LeftArrowSvg />
      </button>
      <button className="arrow next" onClick={nextSlide}>
        <RightArrowSvg />
      </button>
    </div>
  );
};
