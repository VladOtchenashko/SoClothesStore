import { Card, Button, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Product } from "../../app/models/product";

interface Props {
    product: Product
}

export default function ProductCard({product}: Props) {
    return (
        <Card>
      <CardMedia
        sx={{ height: 400, backgroundSize: "contain" }}
        image="./public/images/products/IMG_9204.jpg"
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6">
          Пухова Жилетка
        </Typography>
        <Typography variant="body1" color="text.secondary">
          1999 UAH 
        </Typography>
      </CardContent>
      <CardActions sx={{ height: 50}}>
        <Button size="large" sx={{mr: 18, ml: 0.5}} color="inherit">Докладніше</Button>
        <Button size="large" color="inherit">
            <ShoppingCartIcon fontSize="large"></ShoppingCartIcon>
        </Button>
      </CardActions>
    </Card>
    )
}