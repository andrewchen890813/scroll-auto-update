import { useEffect, useRef } from "react";

export function useObserver(
  callback: () => void,
  hasMore: boolean,
  rootMargin: string,
  threshold: number | number[]
) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    //沒有更多資料
    if (!hasMore) return;

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    //儲存 IntersectionObserver
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasMore) {
          callback();
        }
      },
      {
        root: null,
        rootMargin: rootMargin,
        threshold: threshold,
      }
    );

    //ref 綁定的 DOM 目標
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
  }, [callback, hasMore, rootMargin, threshold]);

  return targetRef;
}
