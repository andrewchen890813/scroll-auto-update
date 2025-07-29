import { useCallback, useEffect, useState } from "react";

export function useInfiniteScroll<T>(data: T[], batchSize = 4) {
  const [displayedData, setDisplayedData] = useState<T[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  // 初始載入
  useEffect(() => {
    const initial = data.slice(0, batchSize);
    setDisplayedData(initial);
    setHasMore(data.length > batchSize);
  }, [data, batchSize]);

  //讀取更多資料
  const loadMore = useCallback(() => {
    if (loading || !hasMore) return;
    //console.log("開始載入更多資料");

    setLoading(true);
    setTimeout(() => {
      const start = displayedData.length;
      const nextData = data.slice(start, start + batchSize);
      const updated = [...displayedData, ...nextData];

      setDisplayedData(updated);
      setHasMore(updated.length < data.length);
      setLoading(false);
    }, 800);
  }, [loading, hasMore, data, batchSize, displayedData]);

  return { displayedData, hasMore, loading, loadMore };
}
