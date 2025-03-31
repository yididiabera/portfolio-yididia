import { useRef, useEffect, useState } from "react";
import { useSprings, animated } from "@react-spring/web";

const BlurText = ({
  text = "",
  delay = 400,
  className = "",
  animateBy = "words",
  direction = "up",
  threshold = 0.1,
  rootMargin = "0px",
  onAnimationComplete,
}) => {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const springs = useSprings(
    elements.length,
    elements.map((_, i) => ({
      from: {
        opacity: 0,
        y: direction === "up" ? 20 : -20,
        filter: "blur(5px)",
      },
      to: inView
        ? {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }
        : {},
      delay: i * delay,
      config: {
        tension: 120,
        friction: 14,
      },
    }))
  );

  return (
    <div ref={ref} className={`inline-block ${className}`}>
      {springs.map((props, index) => (
        <animated.span
          key={index}
          style={{
            ...props,
            display: "inline-block",
            willChange: "transform, opacity, filter",
            marginRight: animateBy === "words" ? "0.25em" : "0.05em",
          }}
        >
          {elements[index]}
        </animated.span>
      ))}
    </div>
  );
};

export default BlurText;
