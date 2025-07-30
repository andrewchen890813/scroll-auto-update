import { useEffect, useRef } from "react";

export function useObserver(
  callback: () => void,
  rootMargin: string,
  threshold: number | number[]
) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      },
      {
        root: null,
        rootMargin,
        threshold,
      }
    );

    const current = targetRef.current;
    if (current) {
      observerRef.current.observe(current);
    }

    return () => {
      if (current) {
        observerRef.current?.unobserve(current);
      }
      observerRef.current = null;
    };
  }, [callback, rootMargin, threshold]);

  return targetRef;
}
