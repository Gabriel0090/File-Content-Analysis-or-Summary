import { Product } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(product, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-purple-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block rounded-full bg-purple-600 px-3 py-1 text-xs font-semibold text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="mb-2 font-serif text-lg font-bold text-purple-900">
          {product.name}
        </h3>
        <p className="mb-4 text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="mb-4 flex items-baseline gap-2">
          <span className="text-2xl font-bold text-purple-700">
            R$ {product.price.toFixed(2)}
          </span>
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          className={`w-full transition-all duration-300 ${
            isAdded
              ? "bg-green-600 hover:bg-green-700"
              : "bg-purple-600 hover:bg-purple-700"
          }`}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          {isAdded ? "Adicionado!" : "Adicionar"}
        </Button>
      </div>
    </div>
  );
}
