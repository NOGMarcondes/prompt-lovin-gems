import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { toast } from "sonner";

interface NewsletterModalProps {
  open: boolean;
  onClose: () => void;
}

const NewsletterModal = ({ open, onClose }: NewsletterModalProps) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Obrigado por se inscrever! Você receberá 10% de desconto no seu email.");
      setEmail("");
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-center">
            Ganhe 10% de Desconto!
          </DialogTitle>
          <DialogDescription className="text-center pt-2">
            Inscreva-se na nossa newsletter e receba ofertas exclusivas e novidades em primeira mão.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <Input
            type="email"
            placeholder="Seu melhor email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-12"
          />
          <Button type="submit" className="w-full" size="lg">
            Quero meu desconto!
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterModal;
