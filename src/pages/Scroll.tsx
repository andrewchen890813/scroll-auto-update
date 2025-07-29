import { fakeData, Product } from "../data/fakedata";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import MediaCard from "../components/MediaCard";
import Button from "@mui/material/Button";
import { Alert } from "@mui/material";
import { useEffect } from "react";
import throttle from "lodash.throttle";

const Scroll = () => {
  const { displayedData, hasMore, loading, loadMore } =
    useInfiniteScroll<Product>(fakeData, 4);

  //滾動偵測
  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      if (scrolledToBottom && hasMore) {
        loadMore();
      }
    };

    //限流滾動事件
    const throttledScroll = throttle(handleScroll, 300);

    window.addEventListener("scroll", throttledScroll);
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [hasMore, loadMore]);

  //自動偵測
  useEffect(() => {
    const checkNeedMore = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      if (scrollHeight <= clientHeight + 50 && hasMore && !loading) {
        loadMore();
      }
    };

    checkNeedMore();
    window.addEventListener("resize", checkNeedMore);
    return () => window.removeEventListener("resize", checkNeedMore);
  }, [displayedData, hasMore, loading, loadMore]);
  return (
    <div className="grid  grid-cols-2 sm:grid-cols-2 gap-4">
      {displayedData.map((item) => (
        <MediaCard key={item.id} product={item} />
      ))}
      {loading && (
        <div className="text-center col-span-full text-gray-500 animate-pulse">
          <Button loading loadingIndicator="Loading…" variant="outlined">
            讀取資料中...
          </Button>
        </div>
      )}
      {!hasMore && (
        <div className="text-center col-span-full text-gray-500 mt-4">
          <Alert variant="outlined" severity="info">
            無更多資料
          </Alert>
        </div>
      )}
    </div>
  );
};

export default Scroll;
