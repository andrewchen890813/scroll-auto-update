import { fakeData, Product } from "../data/fakedata";
import { useObserver } from "../hooks/useObserver";
import MediaCard from "../components/MediaCard";
import Button from "@mui/material/Button";
import { Alert } from "@mui/material";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

export function Observer() {
  const { displayedData, hasMore, loading, loadMore } =
    useInfiniteScroll<Product>(fakeData, 4);

  const bottomRef = useObserver(loadMore, hasMore, "0px", 1.0);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
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

      {hasMore && <div ref={bottomRef} className="h-1" />}
    </>
  );
}
