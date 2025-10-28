import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Crown, Gem, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import ProductCard, { Product } from "@/components/ProductCard";
import CartSidebar, { CartItem } from "@/components/CartSidebar";
import WhatsAppButton from "@/components/WhatsAppButton";
import NewsletterModal from "@/components/NewsletterModal";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import heroImage from "@/assets/hero-jewelry.jpg";
import { products } from "@/data/products";
import ring1 from "@/assets/ring-1.jpg";
import necklace1 from "@/assets/necklace-1.jpg";
import bracelet1 from "@/assets/bracelet-1.jpg";
import earrings1 from "@/assets/earrings-1.jpg";

const Index = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [newsletterOpen, setNewsletterOpen] = useState(false);

  // Show newsletter after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setNewsletterOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const featuredProducts = products.slice(0, 4);

  const categories = [
    { name: "Anéis", icon: Sparkles, image: ring1 },
    { name: "Colares", icon: Crown, image: necklace1 },
    { name: "Pulseiras", icon: Gem, image: bracelet1 },
    { name: "Brincos", icon: Heart, image: earrings1 },
  ];

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    toast.success("Produto adicionado ao carrinho!");
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
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

      {/* Hero Section - Compacto */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Joias elegantes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero opacity-60" />
        </div>
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
            Elegância que Brilha
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Descubra joias exclusivas que contam sua história
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-serif font-bold mb-4">Nossas Categorias</h2>
          <p className="text-muted-foreground text-lg">
            Encontre a peça perfeita para cada momento
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const categoryPath = `/categoria/${category.name.toLowerCase()}`;
            return (
              <Link
                key={category.name}
                to={categoryPath}
                className="group relative overflow-hidden rounded-lg aspect-square hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col items-center justify-end p-6">
                  <Icon className="h-8 w-8 text-white mb-2" />
                  <h3 className="text-white font-serif text-xl font-bold">
                    {category.name}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-20 bg-secondary/20">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-serif font-bold mb-4">Mais Vendidos</h2>
          <p className="text-muted-foreground text-lg">
            As joias preferidas das nossas clientes
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6 animate-fade-in">
            Coleção Premium
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in">
            Peças exclusivas em ouro e pedras preciosas para ocasiões especiais
          </p>
          <Button size="lg" variant="secondary" className="animate-scale-in" asChild>
            <Link to="/produtos">Explorar Premium</Link>
          </Button>
        </div>
      </section>

      <Footer />
      <CartSidebar
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />
      <WhatsAppButton />
      <NewsletterModal
        open={newsletterOpen}
        onClose={() => setNewsletterOpen(false)}
      />
    </div>
  );
};

export default Index;
