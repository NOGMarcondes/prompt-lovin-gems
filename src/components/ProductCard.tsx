import { Link } from "react-router-dom";
import { ShoppingCart, Eye, Package, Ruler, Gem, Shield } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Separator } from "./ui/separator";
import { useState } from "react";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
  details?: {
    material?: string;
    weight?: string;
    dimensions?: string;
    stone?: string;
    finish?: string;
    warranty?: string;
  };
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const [open, setOpen] = useState(false);

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
        
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-background/90 backdrop-blur-sm p-1.5 sm:p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-primary-foreground">
              <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-[95vw] sm:max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-serif text-lg sm:text-2xl pr-6">{product.name}</DialogTitle>
            </DialogHeader>
            
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mt-2 sm:mt-4">
              <div className="space-y-3 sm:space-y-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full rounded-lg object-cover aspect-square"
                />
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-bold text-primary">
                    R$ {product.price.toFixed(2)}
                  </span>
                  <span className="text-xs sm:text-sm text-muted-foreground">
                    ou 6x de R$ {(product.price / 6).toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="font-semibold mb-2 text-sm sm:text-base">Descrição</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {product.description || "Peça exclusiva de alta qualidade, confeccionada com os melhores materiais. Design elegante e atemporal que combina com qualquer ocasião."}
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2 text-sm sm:text-base">
                    <Package className="h-4 w-4" />
                    Especificações
                  </h3>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between gap-2">
                      <span className="text-muted-foreground">Material:</span>
                      <span className="font-medium text-right">{product.details?.material || "Ouro 18k"}</span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span className="text-muted-foreground">Peso:</span>
                      <span className="font-medium text-right">{product.details?.weight || "5.2g"}</span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span className="text-muted-foreground">Dimensões:</span>
                      <span className="font-medium text-right">{product.details?.dimensions || "18mm"}</span>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2 text-sm sm:text-base">
                    <Gem className="h-4 w-4" />
                    Detalhes
                  </h3>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between gap-2">
                      <span className="text-muted-foreground">Pedra:</span>
                      <span className="font-medium text-right">{product.details?.stone || "Diamante natural"}</span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span className="text-muted-foreground">Acabamento:</span>
                      <span className="font-medium text-right">{product.details?.finish || "Polido"}</span>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2 text-sm sm:text-base">
                    <Shield className="h-4 w-4" />
                    Garantia
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {product.details?.warranty || "Garantia de 1 ano contra defeitos de fabricação"}
                  </p>
                </div>

                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => {
                    onAddToCart?.(product);
                    setOpen(false);
                  }}
                >
                  <ShoppingCart className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Adicionar ao Carrinho
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <CardContent className="p-3 sm:p-4">
        <Link to={`/produto/${product.id}`}>
          <h3 className="font-serif text-base sm:text-lg font-semibold mb-1 sm:mb-2 group-hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs sm:text-sm text-muted-foreground mb-2">{product.category}</p>
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
          <p className="text-xl sm:text-2xl font-bold text-primary">
            R$ {product.price.toFixed(2)}
          </p>
          <p className="text-xs text-muted-foreground">
            ou 6x de R$ {(product.price / 6).toFixed(2)}
          </p>
        </div>
      </CardContent>
      <CardFooter className="p-3 sm:p-4 pt-0">
        <Button
          className="w-full h-9 sm:h-10 text-xs sm:text-sm"
          onClick={() => onAddToCart?.(product)}
        >
          <ShoppingCart className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
          Adicionar ao Carrinho
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
