export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  label: string;
}

export const categories: Category[] = [
  { id: "essential-oils", name: "Óleos Essenciais", label: "Óleos Essenciais" },
  { id: "gift-kits", name: "Kits Presentes", label: "Kits Presentes" },
  { id: "soaps", name: "Sabonetes Artesanais", label: "Sabonetes Artesanais" },
  { id: "blends", name: "Sinergias", label: "Sinergias (Blends)" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Óleo Essencial de Lavanda Pura",
    category: "essential-oils",
    price: 45.00,
    image: "/images/product-showcase-aromatherapy.jpg",
    description: "Óleo essencial 100% puro de lavanda francesa. Ideal para relaxamento, meditação e aromaterapia.",
    tags: ["Artesanal", "Mais Vendido"],
  },
  {
    id: "2",
    name: "Sinergia Calma e Tranquilidade",
    category: "blends",
    price: 55.00,
    image: "/images/product-showcase-aromatherapy.jpg",
    description: "Blend exclusivo com lavanda, camomila e bergamota. Perfeito para momentos de relaxamento profundo.",
    tags: ["Artesanal", "Premium"],
  },
  {
    id: "3",
    name: "Sabonete Artesanal de Argila Roxa",
    category: "soaps",
    price: 28.00,
    image: "/images/product-showcase-aromatherapy.jpg",
    description: "Sabonete feito à mão com argila roxa, lavanda e óleos essenciais. Hidratante e terapêutico.",
    tags: ["Artesanal", "Natural"],
  },
  {
    id: "4",
    name: "Home Spray de Alecrim e Lavanda",
    category: "blends",
    price: 35.00,
    image: "/images/product-showcase-aromatherapy.jpg",
    description: "Spray aromático para ambientes com alecrim, lavanda e eucalipto. Aroma natural e duradouro.",
    tags: ["Artesanal"],
  },
  {
    id: "5",
    name: "Kit Presente Aromas de Borboleta",
    category: "gift-kits",
    price: 120.00,
    image: "/images/product-showcase-aromatherapy.jpg",
    description: "Kit completo com óleo essencial, sabonete artesanal e home spray. Embalagem premium para presentes.",
    tags: ["Mais Vendido", "Premium"],
  },
  {
    id: "6",
    name: "Óleo Essencial de Camomila",
    category: "essential-oils",
    price: 42.00,
    image: "/images/product-showcase-aromatherapy.jpg",
    description: "Óleo essencial puro de camomila. Calmante natural para noites tranquilas e relaxamento.",
    tags: ["Artesanal"],
  },
  {
    id: "7",
    name: "Sinergia Energia e Vitalidade",
    category: "blends",
    price: 58.00,
    image: "/images/product-showcase-aromatherapy.jpg",
    description: "Blend energizante com limão, hortelã e gengibre. Ideal para começar o dia com disposição.",
    tags: ["Artesanal"],
  },
  {
    id: "8",
    name: "Sabonete Artesanal Floral Delicado",
    category: "soaps",
    price: 32.00,
    image: "/images/product-showcase-aromatherapy.jpg",
    description: "Sabonete suave com pétalas de flores secas, lavanda e rosa. Perfeito para peles sensíveis.",
    tags: ["Artesanal", "Natural"],
  },
  {
    id: "9",
    name: "Óleo Essencial de Eucalipto",
    category: "essential-oils",
    price: 38.00,
    image: "/images/product-showcase-aromatherapy.jpg",
    description: "Óleo essencial puro de eucalipto. Descongestionante e refrescante para aromaterapia respiratória.",
    tags: ["Artesanal"],
  },
  {
    id: "10",
    name: "Kit Presente Relaxamento Total",
    category: "gift-kits",
    price: 95.00,
    image: "/images/product-showcase-aromatherapy.jpg",
    description: "Kit especial com óleos essenciais variados e sabonete. Perfeito para presentear quem você ama.",
    tags: ["Premium"],
  },
  {
    id: "11",
    name: "Sinergia Foco e Concentração",
    category: "blends",
    price: 52.00,
    image: "/images/product-showcase-aromatherapy.jpg",
    description: "Blend com alecrim, hortelã e limão. Ideal para potencializar foco e concentração no trabalho.",
    tags: ["Artesanal"],
  },
  {
    id: "12",
    name: "Sabonete Artesanal Detox Carvão",
    category: "soaps",
    price: 35.00,
    image: "/images/product-showcase-aromatherapy.jpg",
    description: "Sabonete com carvão ativado e lavanda. Limpeza profunda e aromaterapia em um único produto.",
    tags: ["Artesanal", "Premium"],
  },
];

export const priceRanges = [
  { label: "Até R$ 30", min: 0, max: 30 },
  { label: "R$ 30 - R$ 60", min: 30, max: 60 },
  { label: "R$ 60 - R$ 100", min: 60, max: 100 },
  { label: "Acima de R$ 100", min: 100, max: Infinity },
];
