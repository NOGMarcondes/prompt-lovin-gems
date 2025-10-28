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
      name: "Maria Silva",
      text: "Comprei meu anel de noivado aqui e foi perfeito! Atendimento impecável e qualidade excepcional.",
    },
    {
      name: "Ana Costa",
      text: "As joias são lindas e delicadas. Sempre recebo elogios quando uso!",
    },
    {
      name: "Juliana Santos",
      text: "Entrega rápida, embalagem linda e produto exatamente como nas fotos. Recomendo!",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation
        onCartOpen={() => setCartOpen(true)}
        cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
      />

      {/* Hero */}
      <section className="gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-bold mb-6 animate-fade-in">
            Nossa História
          </h1>
          <p className="text-xl max-w-2xl mx-auto animate-fade-in">
            Transformando momentos especiais em memórias eternas através de joias únicas
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto space-y-8 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Há mais de 15 anos, a <span className="font-semibold text-primary">Joias Elegance</span> vem 
            encantando clientes com peças exclusivas que unem tradição e modernidade. Nossa missão é 
            criar joias que não apenas adornam, mas contam histórias e celebram momentos únicos.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cada peça é cuidadosamente selecionada e trabalhada por artesãos experientes, 
            utilizando apenas materiais nobres como ouro, prata e pedras preciosas certificadas. 
            Acreditamos que uma joia deve ser tão especial quanto a pessoa que a usa.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary/20 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">Nossos Valores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="text-center p-6 hover-lift animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-serif font-bold text-center mb-12">
          O Que Nossas Clientes Dizem
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="p-6 bg-secondary/30 rounded-lg hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
              <p className="font-semibold text-primary">— {testimonial.name}</p>
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
