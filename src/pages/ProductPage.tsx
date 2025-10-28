import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Heart, Package, Ruler, Gem, Shield, Truck } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CartSidebar, { CartItem } from "@/components/CartSidebar";
import ProductCard, { Product } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { products } from "@/data/products";

const ProductPage = () => {
  const { id } = useParams();
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const product = products.find(p => p.id === id) || products[0];
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  const handleAddToCart = (prod: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === prod.id);
      if (existing) {
        return prev.map((item) =>
          item.id === prod.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...prod, quantity: 1 }];
    });
    toast.success("Produto adicionado ao carrinho!");
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
    toast.success("Produto removido do carrinho");
  };

  const handleCheckout = () => {
    toast.success("Redirecionando para o checkout...");
    setCartOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation
        onCartOpen={() => setCartOpen(true)}
        cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
      />

      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="h-4 w-4" />
          Voltar para Home
        </Link>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
              <h1 className="text-4xl font-serif font-bold mb-4">{product.name}</h1>
              <div className="flex items-baseline gap-3 mb-6">
                <p className="text-4xl font-bold text-primary">
                  R$ {product.price.toFixed(2)}
                </p>
                <p className="text-sm text-muted-foreground">
                  ou 6x de R$ {(product.price / 6).toFixed(2)} sem juros
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full"
                onClick={() => handleAddToCart(product)}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Adicionar ao Carrinho
              </Button>
              <Button size="lg" variant="outline" className="w-full">
                <Heart className="mr-2 h-5 w-5" />
                Adicionar aos Favoritos
              </Button>
            </div>

            <div className="border-t pt-6">
              <Tabs defaultValue="description" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description">Descrição</TabsTrigger>
                  <TabsTrigger value="specifications">Especificações</TabsTrigger>
                  <TabsTrigger value="shipping">Entrega</TabsTrigger>
                </TabsList>
                
                <TabsContent value="description" className="space-y-4 mt-4">
                  <h3 className="font-semibold text-lg">Sobre o Produto</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </TabsContent>
                
                <TabsContent value="specifications" className="space-y-6 mt-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <Package className="h-5 w-5" />
                      Detalhes Técnicos
                    </h3>
                    <div className="space-y-3 text-sm">
                      {product.details.material && (
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground font-medium">Material:</span>
                          <span className="font-semibold">{product.details.material}</span>
                        </div>
                      )}
                      {product.details.stone && (
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground font-medium flex items-center gap-2">
                            <Gem className="h-4 w-4" />
                            Pedra/Detalhe:
                          </span>
                          <span className="font-semibold">{product.details.stone}</span>
                        </div>
                      )}
                      {product.details.weight && (
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground font-medium">Peso:</span>
                          <span className="font-semibold">{product.details.weight}</span>
                        </div>
                      )}
                      {product.details.dimensions && (
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground font-medium flex items-center gap-2">
                            <Ruler className="h-4 w-4" />
                            Dimensões:
                          </span>
                          <span className="font-semibold">{product.details.dimensions}</span>
                        </div>
                      )}
                      {product.details.finish && (
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground font-medium">Acabamento:</span>
                          <span className="font-semibold">{product.details.finish}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Garantia e Certificação
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {product.details.warranty || "Garantia de 1 ano contra defeitos de fabricação"}
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="shipping" className="space-y-4 mt-4">
                  <div className="flex items-start gap-3">
                    <Truck className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Frete Grátis</h3>
                      <p className="text-sm text-muted-foreground">
                        Para compras acima de R$ 500,00 em todo o Brasil
                      </p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-semibold mb-2">Prazo de Entrega</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Capitais: 3-5 dias úteis</li>
                      <li>• Interior: 5-10 dias úteis</li>
                      <li>• Regiões remotas: até 15 dias úteis</li>
                    </ul>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-semibold mb-2">Política de Troca</h3>
                    <p className="text-sm text-muted-foreground">
                      Você tem até 7 dias para trocar seu produto, conforme o Código de Defesa do Consumidor.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="py-12 border-t">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">
            Você Também Pode Gostar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </section>
      </div>

      <Footer />
      <CartSidebar
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />
      <WhatsAppButton />
    </div>
  );
};

export default ProductPage;
