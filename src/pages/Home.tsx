import { useState } from "react";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { Filters } from "@/components/Filters";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<[number, number]>([
    0,
    Infinity,
  ]);

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    setSelectedCategories((prev) =>
      checked ? [...prev, categoryId] : prev.filter((id) => id !== categoryId)
    );
  };

  const handlePriceRangeChange = (minPrice: number, maxPrice: number) => {
    setSelectedPriceRange([minPrice, maxPrice]);
  };

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    const priceMatch =
      product.price >= selectedPriceRange[0] &&
      product.price <= selectedPriceRange[1];
    return categoryMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden bg-gradient-to-br from-purple-900 to-purple-700">
        <img
          src="/images/hero-lavender-field.jpg"
          alt="Lavender Field"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-purple-700/60" />

        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
          <h1 className="mb-4 font-serif text-4xl md:text-5xl font-bold text-white">
            Aromaterapia & Terapias Naturais
          </h1>
          <p className="mb-8 text-lg text-purple-100">
            Produtos artesanais de Fabiana Rosa para seu bem-estar
          </p>
          <Button
            className="bg-white text-purple-700 hover:bg-purple-50 font-semibold px-8 py-3 rounded-lg"
            onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
          >
            Ver Coleção
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section id="products" className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Sidebar Filters */}
          <aside className="md:col-span-1">
            <Filters
              selectedCategories={selectedCategories}
              selectedPriceRange={selectedPriceRange}
              onCategoryChange={handleCategoryChange}
              onPriceRangeChange={handlePriceRangeChange}
            />
          </aside>

          {/* Products Grid */}
          <main className="md:col-span-3">
            <div className="mb-6">
              <h2 className="font-serif text-3xl font-bold text-purple-900">
                Nossa Coleção
              </h2>
              <p className="mt-2 text-gray-600">
                {filteredProducts.length} produto(s) encontrado(s)
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-12 text-center">
                <p className="text-lg text-gray-600">
                  Nenhum produto encontrado com os filtros selecionados.
                </p>
              </div>
            )}
          </main>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-purple-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-purple-900">
            Sobre Fabiana Rosa
          </h2>
          <p className="mx-auto max-w-2xl text-gray-700">
            Fabiana Rosa é uma especialista em aromaterapia com mais de 10 anos de experiência
            na criação de produtos naturais e artesanais. Todos os produtos Aromas de Borboleta
            são feitos com ingredientes de alta qualidade, selecionados com cuidado para garantir
            o melhor para você e sua família.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 py-8 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2024 Aromas de Borboleta. Todos os direitos reservados.</p>
          <p className="text-purple-300">
            Feito com 💜 por Fabiana Rosa
          </p>
        </div>
      </footer>
    </div>
  );
}
