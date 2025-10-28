import { useState } from "react";
import { Heart, Award, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CartSidebar, { CartItem } from "@/components/CartSidebar";

const AboutPage = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const values = [
    {
      icon: Heart,
      title: "Paixão",
      description: "Cada joia é criada com amor e dedicação aos detalhes",
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Materiais nobres e acabamento impecável em todas as peças",
    },
    {
      icon: Sparkles,
      title: "Exclusividade",
      description: "Designs únicos que destacam a personalidade de quem usa",
    },
  ];

  const testimonials = [
    {
      name: "Cliente Satisfeita",
      text: "Adorei minha compra! A joia é ainda mais bonita pessoalmente. Qualidade impecável!",
    },
    {
      name: "Compradora Feliz",
      text: "Atendimento excelente e produto maravilhoso. Sempre recebo elogios!",
    },
    {
      name: "Cliente Fiel",
      text: "Entrega rápida e embalagem linda. Já é minha terceira compra aqui!",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation
        onCartOpen={() => setCartOpen(true)}
        cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
      />

      {/* Hero */}
      <section className="gradient-hero text-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 sm:mb-6 animate-fade-in">
            Nossa História
          </h1>
          <p className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto animate-fade-in">
            Transformando momentos especiais em memórias eternas através de joias únicas
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8 text-center">
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
            A <span className="font-semibold text-primary">Joias Elegance</span> é uma joalheria 
            dedicada a oferecer peças exclusivas e sofisticadas que celebram os momentos mais 
            especiais da vida. Combinamos design moderno com a tradição da joalheria fina.
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
            Trabalhamos com materiais nobres e pedras preciosas selecionadas, garantindo 
            qualidade e autenticidade em cada peça. Nossa coleção é pensada para mulheres 
            que valorizam elegância, estilo e exclusividade.
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
            Seja para presentear alguém especial ou para se presentear, nossas joias são 
            criadas para serem eternas e inesquecíveis. Cada detalhe é pensado com carinho 
            para que você tenha uma experiência única de compra.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary/20 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-center mb-8 sm:mb-12">Nossos Valores</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="text-center p-4 sm:p-6 hover-lift animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 mb-3 sm:mb-4">
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{value.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-center mb-8 sm:mb-12">
          O Que Nossas Clientes Dizem
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="p-4 sm:p-6 bg-secondary/30 rounded-lg hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 italic">"{testimonial.text}"</p>
              <p className="text-sm sm:text-base font-semibold text-primary">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <CartSidebar
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={() => setCartOpen(false)}
      />
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;
