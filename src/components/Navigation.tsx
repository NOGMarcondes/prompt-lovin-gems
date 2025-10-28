import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, ShoppingBag, User, X } from "lucide-react";
import { Button } from "./ui/button";

interface NavigationProps {
  onCartOpen: () => void;
  cartItemsCount?: number;
}

const Navigation = ({ onCartOpen, cartItemsCount = 0 }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    { name: "Anéis", path: "/categoria/aneis" },
    { name: "Colares", path: "/categoria/colares" },
    { name: "Pulseiras", path: "/categoria/pulseiras" },
    { name: "Brincos", path: "/categoria/brincos" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center md:flex-1">
            <h1 className="text-2xl font-serif font-bold text-gradient">Joias Elegance</h1>
          </Link>

          {/* Desktop Menu - Centralizado */}
          <div className="hidden md:flex items-center justify-center space-x-8 flex-1">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.path}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {category.name}
              </Link>
            ))}
            <Link to="/sobre" className="text-foreground hover:text-primary transition-colors font-medium">
              Sobre
            </Link>
          </div>

          {/* Icons - Login e Cart */}
          <div className="flex items-center gap-2 md:flex-1 md:justify-end">
            <Button
              variant="ghost"
              size="icon"
              asChild
            >
              <Link to="/auth">
                <User className="h-5 w-5" />
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={onCartOpen}
              className="relative"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={category.path}
                  className="text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
              <Link
                to="/sobre"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
