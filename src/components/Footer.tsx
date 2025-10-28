import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-background via-secondary/20 to-secondary/40 border-t border-border/50 mt-20">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <Link to="/" className="inline-block">
                <h3 className="font-serif text-2xl font-bold text-gradient">Joias Elegance</h3>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                Transformando momentos especiais em memórias eternas através de joias exclusivas e sofisticadas.
              </p>
              <div className="flex gap-3 pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="mailto:contato@joiaselegance.com.br"
                  className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif font-semibold text-lg mb-4">Navegação</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group">
                    <span className="group-hover:translate-x-1 transition-transform">Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/produtos" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group">
                    <span className="group-hover:translate-x-1 transition-transform">Produtos</span>
                  </Link>
                </li>
                <li>
                  <Link to="/sobre" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group">
                    <span className="group-hover:translate-x-1 transition-transform">Sobre Nós</span>
                  </Link>
                </li>
                <li>
                  <Link to="/auth" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group">
                    <span className="group-hover:translate-x-1 transition-transform">Minha Conta</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="font-serif font-semibold text-lg mb-4">Atendimento</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group">
                    <span className="group-hover:translate-x-1 transition-transform">Central de Ajuda</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group">
                    <span className="group-hover:translate-x-1 transition-transform">Trocas e Devoluções</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group">
                    <span className="group-hover:translate-x-1 transition-transform">Política de Privacidade</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group">
                    <span className="group-hover:translate-x-1 transition-transform">Termos de Uso</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-serif font-semibold text-lg mb-4">Contato</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <Phone className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">WhatsApp</p>
                    <p>(11) 99999-9999</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <Mail className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p>contato@joiaselegance.com.br</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Endereço</p>
                    <p>São Paulo, SP - Brasil</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Joias Elegance. Todos os direitos reservados.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-primary transition-colors">Política de Cookies</a>
              <span className="text-border">|</span>
              <a href="#" className="hover:text-primary transition-colors">Acessibilidade</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
