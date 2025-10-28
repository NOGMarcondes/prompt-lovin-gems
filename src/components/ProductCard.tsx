import { Link } from "react-router-dom";
import { ShoppingCart, Eye } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover-lift">
      <div className="relative overflow-hidden aspect-square">
        <Link to={`/produto/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </Link>
        
        <HoverCard openDelay={200}>
          <HoverCardTrigger asChild>
            <button className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-primary-foreground">
              <Eye className="h-4 w-4" />
            </button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80" side="left">
            <div className="space-y-3">
              <h4 className="font-serif text-lg font-semibold">{product.name}</h4>
              <p className="text-sm text-muted-foreground">{product.category}</p>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary">
                  R$ {product.price.toFixed(2)}
                </span>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-3">
                {product.description || "Peça exclusiva de alta qualidade, perfeita para todas as ocasiões."}
              </p>
              <Button 
                className="w-full" 
                size="sm"
                onClick={() => onAddToCart?.(product)}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Adicionar ao Carrinho
              </Button>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
      <CardContent className="p-4">
        <Link to={`/produto/${product.id}`}>
          <h3 className="font-serif text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
        <div className="flex items-baseline gap-2">
          <p className="text-2xl font-bold text-primary">
            R$ {product.price.toFixed(2)}
          </p>
          <p className="text-xs text-muted-foreground">
            ou 6x de R$ {(product.price / 6).toFixed(2)}
          </p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full"
          onClick={() => onAddToCart?.(product)}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Adicionar ao Carrinho
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
