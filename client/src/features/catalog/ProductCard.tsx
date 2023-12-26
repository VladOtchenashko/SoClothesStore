import { Card, Button, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Product } from "../../app/models/product";
import { Link } from "react-router-dom";

interface Props {
    product: Product
}

export default function ProductCard({product}: Props) {
    return (
        <Card sx={{borderRadius: 0}}>
      <CardMedia
        sx={{ height: 400, backgroundSize: "contain" }}
        image="./public/images/products/IMG_9204.jpg"
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6">  
        </Typography>
        <Typography variant="body1" color="text.secondary">
          1999 UAH ${product.price}
        </Typography>
      </CardContent>
      <CardActions sx={{ height: 50}}>
        <Button component={Link} to={`/catalog/${product.id}`} size="large" color="inherit">Докладніше</Button>
        <Button size="large" color="inherit">
            <ShoppingCartIcon fontSize="large"></ShoppingCartIcon>
        </Button>
      </CardActions>
    </Card>
    )
}