import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Product } from "../data/fakedata";

export default function MediaCard({ product }: { product: Product }) {
  return (
    <Card
      sx={{
        maxWidth: 500,
        cursor: "pointer",
        willChange: "transform, box-shadow",
        transition: "transform 0.2s ease-out, box-shadow 0.2s ease-out",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        sx={{
          height: {
            xs: 120, // 小螢幕（手機）
            sm: 160, // 小平板
            md: 200, // 中型以上螢幕
          },
        }}
        image={`/images/${product.img}`}
        title={product.text}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">直接購買</Button>
        <Button size="small" sx={{ whiteSpace: "nowrap" }}>
          加入購物車
        </Button>
      </CardActions>
    </Card>
  );
}
