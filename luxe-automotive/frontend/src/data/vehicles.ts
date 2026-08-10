import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";
import car4 from "@/assets/car-4.jpg";
import car5 from "@/assets/car-5.jpg";

export type Vehicle = {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  engine: string;
  power: string;
  price: number;
  fuel: "Gasolina" | "Híbrido" | "Elétrico";
  transmission: "Automático" | "PDK" | "Manual";
  color: string;
  image: string;
  description: string;
};

export const vehicles: Vehicle[] = [
  {
    id: "gt-silver-coupe",
    name: "Continental GT",
    brand: "Bentley",
    model: "GT Coupé",
    year: 2024,
    engine: "V8 4.0L Biturbo",
    power: "550 cv",
    price: 2_190_000,
    fuel: "Gasolina",
    transmission: "Automático",
    color: "Prata",
    image: car1,
    description:
      "Coupé grand-tourer com acabamento artesanal, escapamento esportivo e interior em couro Nappa costurado à mão.",
  },
  {
    id: "s-class-graphite",
    name: "Classe S 580",
    brand: "Mercedes-Benz",
    model: "S 580 4MATIC",
    year: 2024,
    engine: "V8 4.0L Biturbo Híbrido",
    power: "503 cv",
    price: 1_450_000,
    fuel: "Híbrido",
    transmission: "Automático",
    color: "Grafite",
    image: car2,
    description:
      "Sedan de luxo definitivo com suspensão a ar E-Active, cabine silenciosa e sistema MBUX de última geração.",
  },
  {
    id: "gt-petrol",
    name: "911 Turbo S",
    brand: "Porsche",
    model: "992 Turbo S",
    year: 2024,
    engine: "Flat-6 3.8L Biturbo",
    power: "650 cv",
    price: 1_890_000,
    fuel: "Gasolina",
    transmission: "PDK",
    color: "Azul Petróleo",
    image: car3,
    description:
      "Ícone atemporal em sua versão mais afiada — 0 a 100 km/h em 2,7s com tração integral e PDK de 8 marchas.",
  },
  {
    id: "matte-black-hyper",
    name: "Huracán STO",
    brand: "Lamborghini",
    model: "STO Coupé",
    year: 2024,
    engine: "V10 5.2L Aspirado",
    power: "640 cv",
    price: 4_250_000,
    fuel: "Gasolina",
    transmission: "Automático",
    color: "Preto Fosco",
    image: car4,
    description:
      "Herança de pista traduzida em rua. Fibra de carbono, aerodinâmica ativa e som visceral de V10 aspirado.",
  },
  {
    id: "white-gt",
    name: "Flying Spur",
    brand: "Bentley",
    model: "Flying Spur W12",
    year: 2024,
    engine: "W12 6.0L Biturbo",
    power: "635 cv",
    price: 2_780_000,
    fuel: "Gasolina",
    transmission: "Automático",
    color: "Branco Pérola",
    image: car5,
    description:
      "Elegância britânica em quatro portas. Presença absoluta com o desempenho de um grand tourer.",
  },
  {
    id: "gt3-blue",
    name: "GT3 RS",
    brand: "Porsche",
    model: "992 GT3 RS",
    year: 2023,
    engine: "Flat-6 4.0L Aspirado",
    power: "525 cv",
    price: 3_120_000,
    fuel: "Gasolina",
    transmission: "PDK",
    color: "Azul Petróleo",
    image: car3,
    description:
      "Homologado para rua, forjado para o autódromo. Aerodinâmica ativa e resposta cirúrgica.",
  },
];

export const brands = [
  "Bentley",
  "Mercedes-Benz",
  "Porsche",
  "Lamborghini",
  "Ferrari",
  "Rolls-Royce",
];
export const fuels: Vehicle["fuel"][] = ["Gasolina", "Híbrido", "Elétrico"];
export const transmissions: Vehicle["transmission"][] = ["Automático", "PDK", "Manual"];
export const colors = ["Preto Fosco", "Grafite", "Prata", "Branco Pérola", "Azul Petróleo"];

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
