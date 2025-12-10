import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Link } from "wouter";
import { Trash2, Plus, Minus, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function Cart() {
  const { items, removeItem, updateQuantity, getTotal } = useCart();
  const total = getTotal();

  const handleCheckout = () => {
    const whatsappLink = getWhatsAppLink(items, total);
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="container mx-auto px-4 py-12">
        <h1 className="mb-8 font-serif text-4xl font-bold text-purple-900">
          Seu Carrinho
        </h1>

        {items.length === 0 ? (
          <div className="py-12 text-center">
            <p className="mb-6 text-lg text-gray-600">
              Seu carrinho está vazio. Volte à loja para adicionar produtos!
            </p>
            <Link href="/">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Continuar Comprando
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-4 rounded-lg border border-purple-200 bg-purple-50 p-4"
                  >
                    {/* Product Image */}
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="h-24 w-24 rounded-lg object-cover"
                    />

                    {/* Product Info */}
                    <div className="flex-1">
                      <h3 className="font-serif text-lg font-bold text-purple-900">
                        {item.product.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        R$ {item.product.price.toFixed(2)} cada
                      </p>

                      {/* Quantity Controls */}
                      <div className="mt-3 flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity - 1
                            )
                          }
                          className="rounded-lg bg-white p-1 text-purple-600 hover:bg-purple-100 transition-colors"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(
                              item.product.id,
                              parseInt(e.target.value) || 1
                            )
                          }
                          className="w-12 rounded-lg border border-purple-300 bg-white px-2 py-1 text-center text-purple-900"
                        />
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity + 1
                            )
                          }
                          className="rounded-lg bg-white p-1 text-purple-600 hover:bg-purple-100 transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    {/* Price & Remove */}
                    <div className="flex flex-col items-end justify-between">
                      <p className="font-serif text-xl font-bold text-purple-700">
                        R$ {(item.product.price * item.quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="rounded-lg bg-red-100 p-2 text-red-600 hover:bg-red-200 transition-colors"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 rounded-lg bg-purple-50 p-6">
                <h2 className="mb-6 font-serif text-2xl font-bold text-purple-900">
                  Resumo do Pedido
                </h2>

                <div className="space-y-4 border-b border-purple-200 pb-6">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal:</span>
                    <span className="font-semibold">R$ {total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Frete:</span>
                    <span className="text-sm text-purple-600">
                      Calculado no WhatsApp
                    </span>
                  </div>
                </div>

                <div className="mt-6 mb-6 flex justify-between">
                  <span className="font-serif text-lg font-bold text-purple-900">
                    Total:
                  </span>
                  <span className="font-serif text-2xl font-bold text-purple-700">
                    R$ {total.toFixed(2)}
                  </span>
                </div>

                <Button
                  onClick={handleCheckout}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg mb-4 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Finalizar no WhatsApp
                </Button>

                {/* Security Badges */}
                <div className="mt-6 space-y-2 border-t border-purple-200 pt-6 text-center">
                  <p className="text-xs text-gray-600">✓ 100% Artesanal</p>
                  <p className="text-xs text-gray-600">✓ Compra Segura</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 py-8 text-white mt-12">
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
