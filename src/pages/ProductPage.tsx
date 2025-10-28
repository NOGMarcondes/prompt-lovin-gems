import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CartSidebar, { CartItem } from "@/components/CartSidebar";
import ProductCard, { Product } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import ring1 from "@/assets/ring-1.jpg";
import necklace1 from "@/assets/necklace-1.jpg";
import bracelet1 from "@/assets/bracelet-1.jpg";

const ProductPage = () => {
  const { id } = useParams();
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Mock product data
  const product: Product = {
    id: id || "1",
    name: "Anel Ametista Royal",
    price: 899.90,
    image: ring1,
    category: "Anéis",
  };

  const relatedProducts: Product[] = [
    {
      id: "2",
      name: "Colar Delicado Gold",
      price: 749.90,
      image: necklace1,
      category: "Colares",
    },
    {
      id: "3",
      name: "Pulseira Elegance",
      price: 649.90,
      image: bracelet1,
      category: "Pulseiras",
    },
  ];

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

            <div className="border-t pt-6 space-y-4">
              <h3 className="font-semibold text-lg">Descrição do Produto</h3>
              <p className="text-muted-foreground">
                Anel elegante em ouro rosé 18k com ametista natural lapidada. 
                Design exclusivo que combina sofisticação e modernidade. 
                Perfeito para ocasiões especiais ou uso diário com elegância.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Material: Ouro rosé 18k</li>
                <li>• Pedra: Ametista natural</li>
                <li>• Garantia: 1 ano</li>
                <li>• Certificado de autenticidade incluso</li>
              </ul>
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
