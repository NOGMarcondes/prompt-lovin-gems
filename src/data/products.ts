import ring1 from "@/assets/ring-1.jpg";
import ring2 from "@/assets/ring-2.jpg";
import necklace1 from "@/assets/necklace-1.jpg";
import necklace2 from "@/assets/necklace-2.jpg";
import bracelet1 from "@/assets/bracelet-1.jpg";
import bracelet2 from "@/assets/bracelet-2.jpg";
import earrings1 from "@/assets/earrings-1.jpg";
import earrings2 from "@/assets/earrings-2.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  details: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Anel Ametista Royal",
    price: 899.90,
    image: ring1,
    category: "Anéis",
    description: "Anel elegante em ouro rosé 18k com ametista natural lapidada. Design exclusivo que combina sofisticação e modernidade. Perfeito para ocasiões especiais ou uso diário com elegância.",
    details: [
      "Material: Ouro rosé 18k",
      "Pedra: Ametista natural",
      "Peso aproximado: 3,5g",
      "Garantia: 1 ano",
      "Certificado de autenticidade incluso"
    ]
  },
  {
    id: "2",
    name: "Colar Delicado Gold",
    price: 749.90,
    image: necklace1,
    category: "Colares",
    description: "Colar minimalista em ouro amarelo com pingente circular. Design atemporal que complementa qualquer look. Ideal para uso diário ou presentear.",
    details: [
      "Material: Ouro 18k",
      "Comprimento: 45cm ajustável",
      "Peso aproximado: 2,8g",
      "Garantia: 1 ano",
      "Embalagem premium inclusa"
    ]
  },
  {
    id: "3",
    name: "Pulseira Elegance",
    price: 649.90,
    image: bracelet1,
    category: "Pulseiras",
    description: "Pulseira delicada em ouro com detalhes em micro zircônias. Acabamento impecável que adiciona brilho e sofisticação ao seu pulso.",
    details: [
      "Material: Ouro 18k",
      "Pedras: Zircônias",
      "Comprimento: 18cm ajustável",
      "Garantia: 1 ano",
      "Fecho de segurança"
    ]
  },
  {
    id: "4",
    name: "Brincos Diamante",
    price: 1299.90,
    image: earrings1,
    category: "Brincos",
    description: "Par de brincos clássicos tipo solitário com diamantes naturais. Sofisticação e elegância em uma peça atemporal.",
    details: [
      "Material: Ouro branco 18k",
      "Pedras: Diamantes naturais",
      "Peso aproximado: 1,5g",
      "Garantia: 1 ano",
      "Certificado gemológico incluso"
    ]
  },
  {
    id: "5",
    name: "Anel Solitário Clássico",
    price: 1499.90,
    image: ring2,
    category: "Anéis",
    description: "Anel solitário em ouro rosé com pequenos diamantes laterais. Design romântico e sofisticado, perfeito para pedidos de casamento ou comemorações especiais.",
    details: [
      "Material: Ouro rosé 18k",
      "Pedras: Diamantes naturais",
      "Peso aproximado: 4,2g",
      "Garantia: 2 anos",
      "Certificado de autenticidade incluso"
    ]
  },
  {
    id: "6",
    name: "Colar Coração Delicado",
    price: 849.90,
    image: necklace2,
    category: "Colares",
    description: "Colar em prata 925 com pingente de coração. Design romântico e delicado, ideal para presente ou uso pessoal.",
    details: [
      "Material: Prata 925",
      "Comprimento: 40cm ajustável",
      "Peso aproximado: 3,0g",
      "Garantia: 1 ano",
      "Banho de ródio antimancha"
    ]
  },
  {
    id: "7",
    name: "Pulseira Riviera Premium",
    price: 1899.90,
    image: bracelet2,
    category: "Pulseiras",
    description: "Pulseira riviera luxuosa com zircônias cravadas. Brilho intenso e elegância máxima para ocasiões especiais.",
    details: [
      "Material: Ouro 18k",
      "Pedras: Zircônias AAA",
      "Comprimento: 19cm",
      "Garantia: 2 anos",
      "Fecho com trava de segurança"
    ]
  },
  {
    id: "8",
    name: "Brincos Pérola Clássico",
    price: 899.90,
    image: earrings2,
    category: "Brincos",
    description: "Brincos pendentes com pérolas cultivadas em engaste dourado. Elegância atemporal que nunca sai de moda.",
    details: [
      "Material: Ouro 18k",
      "Pérolas: Cultivadas AAA",
      "Peso aproximado: 2,0g",
      "Garantia: 1 ano",
      "Embalagem premium inclusa"
    ]
  },
];
