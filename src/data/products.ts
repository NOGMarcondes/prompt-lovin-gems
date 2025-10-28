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
  details: {
    material?: string;
    weight?: string;
    dimensions?: string;
    stone?: string;
    finish?: string;
    warranty?: string;
  };
}

export const products: Product[] = [
  {
    id: "1",
    name: "Anel Ametista Royal",
    price: 899.90,
    image: ring1,
    category: "Anéis",
    description: "Anel elegante em ouro rosé 18k com ametista natural lapidada. Design exclusivo que combina sofisticação e modernidade. Perfeito para ocasiões especiais ou uso diário com elegância.",
    details: {
      material: "Ouro rosé 18k",
      stone: "Ametista natural lapidada",
      weight: "3.5g",
      dimensions: "Tamanho ajustável",
      finish: "Polido com detalhes acetinados",
      warranty: "1 ano contra defeitos de fabricação + certificado de autenticidade"
    }
  },
  {
    id: "2",
    name: "Colar Delicado Gold",
    price: 749.90,
    image: necklace1,
    category: "Colares",
    description: "Colar minimalista em ouro amarelo com pingente circular. Design atemporal que complementa qualquer look. Ideal para uso diário ou presentear.",
    details: {
      material: "Ouro amarelo 18k",
      weight: "2.8g",
      dimensions: "45cm ajustável até 48cm",
      finish: "Polido brilhante",
      warranty: "1 ano contra defeitos de fabricação + embalagem premium"
    }
  },
  {
    id: "3",
    name: "Pulseira Elegance",
    price: 649.90,
    image: bracelet1,
    category: "Pulseiras",
    description: "Pulseira delicada em ouro com detalhes em micro zircônias. Acabamento impecável que adiciona brilho e sofisticação ao seu pulso.",
    details: {
      material: "Ouro 18k",
      stone: "Micro zircônias cravadas",
      weight: "4.2g",
      dimensions: "18cm ajustável até 20cm",
      finish: "Polido com cravação de zircônias",
      warranty: "1 ano contra defeitos + fecho de segurança reforçado"
    }
  },
  {
    id: "4",
    name: "Brincos Diamante",
    price: 1299.90,
    image: earrings1,
    category: "Brincos",
    description: "Par de brincos clássicos tipo solitário com diamantes naturais. Sofisticação e elegância em uma peça atemporal.",
    details: {
      material: "Ouro branco 18k",
      stone: "Diamantes naturais 0.20ct cada",
      weight: "1.5g (par)",
      dimensions: "6mm de diâmetro",
      finish: "Polido com banho de ródio",
      warranty: "1 ano + certificado gemológico"
    }
  },
  {
    id: "5",
    name: "Anel Solitário Clássico",
    price: 1499.90,
    image: ring2,
    category: "Anéis",
    description: "Anel solitário em ouro rosé com pequenos diamantes laterais. Design romântico e sofisticado, perfeito para pedidos de casamento ou comemorações especiais.",
    details: {
      material: "Ouro rosé 18k",
      stone: "Diamantes naturais (central 0.30ct + laterais)",
      weight: "4.2g",
      dimensions: "Tamanho sob medida",
      finish: "Polido espelhado",
      warranty: "2 anos + certificado de autenticidade + ajuste de aro grátis"
    }
  },
  {
    id: "6",
    name: "Colar Coração Delicado",
    price: 849.90,
    image: necklace2,
    category: "Colares",
    description: "Colar em prata 925 com pingente de coração. Design romântico e delicado, ideal para presente ou uso pessoal.",
    details: {
      material: "Prata 925 com banho de ródio",
      weight: "3.0g",
      dimensions: "40cm ajustável até 45cm",
      finish: "Banho de ródio antimancha",
      warranty: "1 ano contra defeitos de fabricação"
    }
  },
  {
    id: "7",
    name: "Pulseira Riviera Premium",
    price: 1899.90,
    image: bracelet2,
    category: "Pulseiras",
    description: "Pulseira riviera luxuosa com zircônias cravadas. Brilho intenso e elegância máxima para ocasiões especiais.",
    details: {
      material: "Ouro 18k",
      stone: "Zircônias AAA (120 pedras)",
      weight: "8.5g",
      dimensions: "19cm",
      finish: "Polido com cravação manual",
      warranty: "2 anos + fecho com trava de segurança dupla"
    }
  },
  {
    id: "8",
    name: "Brincos Pérola Clássico",
    price: 899.90,
    image: earrings2,
    category: "Brincos",
    description: "Brincos pendentes com pérolas cultivadas em engaste dourado. Elegância atemporal que nunca sai de moda.",
    details: {
      material: "Ouro 18k",
      stone: "Pérolas cultivadas AAA (8mm)",
      weight: "2.0g (par)",
      dimensions: "Comprimento total 25mm",
      finish: "Polido com pérolas de brilho natural",
      warranty: "1 ano + embalagem premium"
    }
  },
];
