import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Crown, Gem, Heart, ChevronLeft, ChevronRight } from "lucide-react";
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
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    { image: heroImage, title: "Elegância Atemporal", subtitle: "Joias que contam histórias" },
    { image: ring1, title: "Anéis Exclusivos", subtitle: "Beleza em cada detalhe" },
    { image: necklace1, title: "Colares Sofisticados", subtitle: "Brilho que encanta" },
    { image: bracelet1, title: "Pulseiras Únicas", subtitle: "Estilo incomparável" },
  ];

  // Show newsletter after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setNewsletterOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const featuredProducts = products.slice(0, 8);

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

      {/* Hero Carousel */}
      <section className="relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 gradient-hero opacity-60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 animate-fade-in">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-3 sm:mb-4">
                  {slide.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 max-w-2xl mx-auto">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 p-2 rounded-full hover:bg-background z-20"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 p-2 rounded-full hover:bg-background z-20"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold mb-3 sm:mb-4">Nossas Categorias</h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">
            Encontre a peça perfeita para cada momento
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
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
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col items-center justify-end p-3 sm:p-4 lg:p-6">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white mb-1 sm:mb-2" />
                  <h3 className="text-white font-serif text-base sm:text-lg lg:text-xl font-bold">
                    {category.name}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-12 sm:py-16 lg:py-20 bg-secondary/20">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold mb-3 sm:mb-4">Mais Vendidos</h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">
            As joias preferidas das nossas clientes
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/30" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="order-2 md:order-1 space-y-6">
                <div className="inline-block">
                  <span className="text-xs font-semibold tracking-wider uppercase text-primary">Nossa História</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight">
                  Elegância que <span className="text-gradient">Transcende</span> o Tempo
                </h2>
                <div className="space-y-4">
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Há mais de uma década, dedicamo-nos à arte de criar joias que celebram os momentos 
                    mais especiais da vida. Cada peça é cuidadosamente elaborada com materiais nobres, 
                    unindo tradição e inovação.
                  </p>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Nossa paixão é transformar sonhos em realidade através de joias únicas que contam 
                    histórias e eternizam memórias preciosas.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Button size="lg" asChild>
                    <Link to="/sobre">Conheça Nossa História</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/produtos">Ver Coleção</Link>
                  </Button>
                </div>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-elegant hover-lift">
                  <div className="aspect-[4/5] relative">
                    <img
                      src={heroImage}
                      alt="Joias Elegance"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
                <div className="absolute -top-6 -right-6 w-40 h-40 bg-secondary/30 rounded-full blur-3xl -z-10" />
              </div>
            </div>
          </div>
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
