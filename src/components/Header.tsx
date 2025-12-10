import { Link } from "wouter";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";

export function Header() {
  const { getItemCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const itemCount = getItemCount();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 text-2xl font-bold text-purple-700 hover:text-purple-800 transition-colors cursor-pointer">
              <span className="text-3xl">🦋</span>
              <span className="hidden sm:inline font-serif">Aromas de Borboleta</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/">
              <div className="text-gray-700 hover:text-purple-700 transition-colors font-medium cursor-pointer">
                Início
              </div>
            </Link>
            <a href="#oils" className="text-gray-700 hover:text-purple-700 transition-colors font-medium">
              Óleos
            </a>
            <a href="#soaps" className="text-gray-700 hover:text-purple-700 transition-colors font-medium">
              Sabonetes
            </a>
            <a href="#about" className="text-gray-700 hover:text-purple-700 transition-colors font-medium">
              Sobre Fabiana
            </a>
          </nav>

          {/* Cart Icon */}
          <div className="flex items-center gap-4">
            <Link href="/cart">
              <div className="relative p-2 text-gray-700 hover:text-purple-700 transition-colors cursor-pointer">
                <ShoppingCart className="h-6 w-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white">
                    {itemCount}
                  </span>
                )}
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-purple-700 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4 border-t border-gray-200 pt-4">
            <Link href="/">
              <div className="text-gray-700 hover:text-purple-700 transition-colors font-medium cursor-pointer">
                Início
              </div>
            </Link>
            <a href="#oils" className="text-gray-700 hover:text-purple-700 transition-colors font-medium">
              Óleos
            </a>
            <a href="#soaps" className="text-gray-700 hover:text-purple-700 transition-colors font-medium">
              Sabonetes
            </a>
            <a href="#about" className="text-gray-700 hover:text-purple-700 transition-colors font-medium">
              Sobre Fabiana
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
