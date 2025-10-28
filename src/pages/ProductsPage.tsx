import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CartSidebar, { CartItem } from "@/components/CartSidebar";
import ProductCard, { Product } from "@/components/ProductCard";
import { toast } from "sonner";
import ring1 from "@/assets/ring-1.jpg";
import necklace1 from "@/assets/necklace-1.jpg";
import bracelet1 from "@/assets/bracelet-1.jpg";
import earrings1 from "@/assets/earrings-1.jpg";

const ProductsPage = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const allProducts: Product[] = [
    {
      id: "1",
      name: "Anel Ametista Royal",
      price: 899.90,
      image: ring1,
      category: "Anéis",
    },
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
    {
      id: "4",
      name: "Brincos Diamante",
      price: 1299.90,
      image: earrings1,
      category: "Brincos",
    },
    {
      id: "5",
      name: "Anel Solitário Clássico",
      price: 1499.90,
      image: ring1,
      category: "Anéis",
    },
    {
      id: "6",
      name: "Colar Pérola Premium",
      price: 2199.90,
      image: necklace1,
      category: "Colares",
    },
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

      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif font-bold mb-4">Nossa Coleção</h1>
          <p className="text-xl text-muted-foreground">
            Descubra peças únicas criadas especialmente para você
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
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
    </div>
  );
};

export default ProductsPage;
