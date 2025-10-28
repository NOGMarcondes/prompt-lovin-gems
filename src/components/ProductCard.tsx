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
            <button className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-primary-foreground">
              <Eye className="h-4 w-4" />
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl">{product.name}</DialogTitle>
            </DialogHeader>
            
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div className="space-y-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full rounded-lg object-cover aspect-square"
                />
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-primary">
                    R$ {product.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    ou 6x de R$ {(product.price / 6).toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Descrição</h3>
                  <p className="text-sm text-muted-foreground">
                    {product.description || "Peça exclusiva de alta qualidade, confeccionada com os melhores materiais. Design elegante e atemporal que combina com qualquer ocasião."}
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Package className="h-4 w-4" />
                    Especificações
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Material:</span>
                      <span className="font-medium">{product.details?.material || "Ouro 18k"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Peso:</span>
                      <span className="font-medium">{product.details?.weight || "5.2g"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Dimensões:</span>
                      <span className="font-medium">{product.details?.dimensions || "18mm"}</span>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Gem className="h-4 w-4" />
                    Detalhes
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Pedra:</span>
                      <span className="font-medium">{product.details?.stone || "Diamante natural"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Acabamento:</span>
                      <span className="font-medium">{product.details?.finish || "Polido"}</span>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Garantia
                  </h3>
                  <p className="text-sm text-muted-foreground">
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
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Adicionar ao Carrinho
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
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
