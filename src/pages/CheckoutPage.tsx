import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, CreditCard, Smartphone, Barcode, Lock, CheckCircle2, Package, MapPin, Wallet } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [isProcessing, setIsProcessing] = useState(false);

  // Mock cart items
  const cartItems = [
    { id: "1", name: "Anel Ametista Royal", price: 899.90, quantity: 1 },
    { id: "2", name: "Colar Delicado Gold", price: 749.90, quantity: 1 },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  const steps = [
    { number: 1, title: "Dados", icon: Package },
    { number: 2, title: "Entrega", icon: MapPin },
    { number: 3, title: "Pagamento", icon: Wallet },
  ];

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentStep < 3) {
      handleNext();
    } else {
      setIsProcessing(true);
      setTimeout(() => {
        toast.success("Pedido realizado com sucesso! 🎉");
        setIsProcessing(false);
        navigate("/");
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-secondary/20">
      <Navigation onCartOpen={() => {}} cartItemsCount={cartItems.length} />

      <div className="container mx-auto px-4 py-6 sm:py-8 lg:py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 sm:mb-8">
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Link>

        <div className="max-w-5xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-8 sm:mb-12">
            <div className="flex items-center justify-between relative">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isCompleted = currentStep > step.number;
                const isCurrent = currentStep === step.number;
                
                return (
                  <div key={step.number} className="flex flex-col items-center relative z-10 flex-1">
                    {index < steps.length - 1 && (
                      <div 
                        className={cn(
                          "absolute top-5 left-1/2 w-full h-0.5 -z-10 transition-colors",
                          isCompleted || currentStep > step.number ? "bg-primary" : "bg-border"
                        )}
                      />
                    )}
                    <div 
                      className={cn(
                        "w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all mb-2",
                        isCurrent && "bg-primary text-primary-foreground ring-4 ring-primary/20",
                        isCompleted && "bg-primary text-primary-foreground",
                        !isCurrent && !isCompleted && "bg-background border-2 border-border text-muted-foreground"
                      )}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6" />
                      ) : (
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      )}
                    </div>
                    <span className={cn(
                      "text-xs sm:text-sm font-medium text-center",
                      isCurrent && "text-primary",
                      isCompleted && "text-primary",
                      !isCurrent && !isCompleted && "text-muted-foreground"
                    )}>
                      {step.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Form Content */}
              <div className="lg:col-span-2 bg-background rounded-lg p-4 sm:p-6 lg:p-8 shadow-sm">
                {currentStep === 1 && (
                  <div className="space-y-6 animate-fade-in">
                    <h2 className="text-xl sm:text-2xl font-serif font-bold">Seus Dados</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Nome *</Label>
                        <Input id="firstName" placeholder="João" required className="h-11" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Sobrenome *</Label>
                        <Input id="lastName" placeholder="Silva" required className="h-11" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="joao@email.com" required className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone *</Label>
                      <Input id="phone" type="tel" placeholder="(11) 99999-9999" required className="h-11" />
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-6 animate-fade-in">
                    <h2 className="text-xl sm:text-2xl font-serif font-bold">Endereço de Entrega</h2>
                    <div className="space-y-2">
                      <Label htmlFor="cep">CEP *</Label>
                      <Input id="cep" placeholder="00000-000" required className="h-11 max-w-xs" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="street">Endereço *</Label>
                      <Input id="street" placeholder="Rua das Flores" required className="h-11" />
                    </div>
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="number">Número *</Label>
                        <Input id="number" placeholder="123" required className="h-11" />
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <Label htmlFor="complement">Complemento</Label>
                        <Input id="complement" placeholder="Apto 45" className="h-11" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="neighborhood">Bairro *</Label>
                        <Input id="neighborhood" placeholder="Centro" required className="h-11" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">Cidade *</Label>
                        <Input id="city" placeholder="São Paulo" required className="h-11" />
                      </div>
                    </div>
                    <div className="space-y-2 max-w-xs">
                      <Label htmlFor="state">Estado *</Label>
                      <Input id="state" placeholder="SP" required maxLength={2} className="h-11" />
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-6 animate-fade-in">
                    <h2 className="text-xl sm:text-2xl font-serif font-bold">Forma de Pagamento</h2>
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                      <label
                        className={cn(
                          "flex items-center gap-3 sm:gap-4 border-2 rounded-lg p-3 sm:p-4 cursor-pointer transition-all",
                          paymentMethod === "credit-card" && "border-primary bg-primary/5"
                        )}
                      >
                        <RadioGroupItem value="credit-card" id="credit-card" />
                        <CreditCard className="h-5 w-5 text-primary flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm sm:text-base">Cartão de Crédito</p>
                          <p className="text-xs sm:text-sm text-muted-foreground">Em até 6x sem juros</p>
                        </div>
                      </label>

                      <label
                        className={cn(
                          "flex items-center gap-3 sm:gap-4 border-2 rounded-lg p-3 sm:p-4 cursor-pointer transition-all",
                          paymentMethod === "pix" && "border-primary bg-primary/5"
                        )}
                      >
                        <RadioGroupItem value="pix" id="pix" />
                        <Smartphone className="h-5 w-5 text-primary flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm sm:text-base">PIX</p>
                          <p className="text-xs sm:text-sm text-muted-foreground">Aprovação imediata</p>
                        </div>
                      </label>

                      <label
                        className={cn(
                          "flex items-center gap-3 sm:gap-4 border-2 rounded-lg p-3 sm:p-4 cursor-pointer transition-all",
                          paymentMethod === "boleto" && "border-primary bg-primary/5"
                        )}
                      >
                        <RadioGroupItem value="boleto" id="boleto" />
                        <Barcode className="h-5 w-5 text-primary flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm sm:text-base">Boleto Bancário</p>
                          <p className="text-xs sm:text-sm text-muted-foreground">Vencimento em 3 dias</p>
                        </div>
                      </label>
                    </RadioGroup>

                    {paymentMethod === "credit-card" && (
                      <div className="space-y-4 pt-4 border-t animate-fade-in">
                        <div className="space-y-2">
                          <Label htmlFor="cardNumber">Número do Cartão *</Label>
                          <Input id="cardNumber" placeholder="0000 0000 0000 0000" required className="h-11" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cardName">Nome no Cartão *</Label>
                          <Input id="cardName" placeholder="JOÃO SILVA" required className="h-11" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="cardExpiry">Validade *</Label>
                            <Input id="cardExpiry" placeholder="MM/AA" required className="h-11" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cardCvv">CVV *</Label>
                            <Input id="cardCvv" placeholder="123" required maxLength={3} className="h-11" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4 mt-8 pt-6 border-t">
                  {currentStep > 1 && (
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={handleBack}
                      className="w-full sm:w-auto h-11"
                    >
                      Voltar
                    </Button>
                  )}
                  <Button 
                    type="submit" 
                    className="w-full sm:flex-1 h-11"
                    disabled={isProcessing}
                  >
                    {currentStep === 3 ? (
                      <>
                        <Lock className="mr-2 h-4 w-4" />
                        {isProcessing ? "Processando..." : "Finalizar Compra"}
                      </>
                    ) : (
                      "Continuar"
                    )}
                  </Button>
                </div>
              </div>

              {/* Order Summary - Sticky on larger screens */}
              <div className="lg:col-span-1">
                <div className="bg-background rounded-lg p-4 sm:p-6 shadow-sm lg:sticky lg:top-24">
                  <h3 className="text-lg font-semibold mb-4">Resumo</h3>
                  
                  <div className="space-y-3 mb-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm gap-2">
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">{item.name}</p>
                          <p className="text-muted-foreground text-xs">Qtd: {item.quantity}</p>
                        </div>
                        <p className="font-semibold whitespace-nowrap">R$ {item.price.toFixed(2)}</p>
                      </div>
                    ))}
                  </div>

                  <Separator className="my-4" />

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>R$ {subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Frete</span>
                      <span className="text-primary font-semibold">Grátis</span>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Total</span>
                      <span className="text-2xl font-bold text-primary">
                        R$ {total.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-xs text-right text-muted-foreground">
                      ou 6x de R$ {(total / 6).toFixed(2)}
                    </p>
                  </div>

                  <div className="mt-6 p-3 bg-secondary/50 rounded-lg">
                    <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-2">
                      <Lock className="h-3 w-3" />
                      Compra 100% segura
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CheckoutPage;
