import { Header } from "@/components/Header";
import { CheckCircle, MessageCircle, MapPin, User, ArrowLeft } from "lucide-react";

export default function SuccessPreview() {
  const customerName = "Maria Silva";
  const customerEmail = "maria@email.com";
  const customerPhone = "(11) 98765-4321";
  const deliveryAddress = "Rua das Flores, 123 - São Paulo, SP";
  const orderNumber = "ORD-123456";
  const orderDate = "10 de dezembro de 2024";
  
  const items = [
    { name: "Óleo Essencial de Lavanda Pura", quantity: 2, price: 45.0, image: "/images/product-showcase-aromatherapy.jpg" },
    { name: "Sinergia Calma e Tranquilidade", quantity: 1, price: 55.0, image: "/images/product-showcase-aromatherapy.jpg" },
    { name: "Sabonete Artesanal de Argila Roxa", quantity: 1, price: 28.0, image: "/images/product-showcase-aromatherapy.jpg" },
  ];
  
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />

      <section className="container mx-auto px-4 py-12">
        {/* Success Header */}
        <div className="mb-12 text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-purple-100">
              <CheckCircle className="h-12 w-12 text-purple-600" />
            </div>
          </div>
          <h1 className="mb-4 font-serif text-4xl font-bold text-purple-900">
            Pedido Recebido!
          </h1>
          <p className="text-lg text-gray-600">
            Obrigado, <span className="font-semibold text-purple-700">{customerName}</span>. Seu pedido{" "}
            <span className="font-semibold text-purple-700">#{orderNumber}</span> foi gerado.
          </p>
        </div>

        {/* Action Required Box */}
        <div className="mb-12 rounded-lg border-l-4 border-purple-600 bg-purple-50 p-6">
          <div className="flex gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white font-bold text-sm">
              ⚠
            </div>
            <div>
              <h2 className="mb-2 font-semibold text-purple-900">
                Ação Necessária
              </h2>
              <p className="text-purple-800">
                Por favor, envie os detalhes do seu pedido para o WhatsApp de Fabiana para finalizar o pagamento e combinar a entrega.
              </p>
            </div>
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="mb-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-serif text-2xl font-bold text-purple-900">
              RESUMO DO PEDIDO
            </h2>
            <p className="text-sm text-gray-600">{orderDate}</p>
          </div>

          {/* Products Table */}
          <div className="mb-8 overflow-hidden rounded-lg border border-purple-200 bg-white">
            <table className="w-full">
              <thead>
                <tr className="border-b border-purple-200 bg-purple-50">
                  <th className="px-6 py-4 text-left font-semibold text-purple-900">
                    PRODUTO
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-purple-900">
                    QTD
                  </th>
                  <th className="px-6 py-4 text-right font-semibold text-purple-900">
                    PREÇO
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr
                    key={index}
                    className={index !== items.length - 1 ? "border-b border-purple-100" : ""}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-12 w-12 rounded-lg object-cover"
                        />
                        <span className="font-medium text-gray-900">
                          {item.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700">
                      {item.quantity}
                    </td>
                    <td className="px-6 py-4 text-right font-semibold text-purple-700">
                      R$ {(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Totals */}
          <div className="mb-8 flex justify-end">
            <div className="w-full max-w-xs space-y-4">
              <div className="flex justify-between border-b border-purple-200 pb-4">
                <span className="text-gray-700">Subtotal</span>
                <span className="font-semibold text-gray-900">
                  R$ {total.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between border-b border-purple-200 pb-4">
                <span className="text-gray-700">Taxa de Entrega</span>
                <span className="text-sm text-purple-600">
                  Calculado no WhatsApp
                </span>
              </div>
              <div className="flex justify-between pt-4">
                <span className="font-serif text-lg font-bold text-purple-900">
                  Total a Pagar
                </span>
                <span className="font-serif text-2xl font-bold text-purple-700">
                  R$ {total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Customer & Delivery Info */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Customer Info */}
          <div className="rounded-lg border border-purple-200 bg-white p-6">
            <div className="mb-4 flex items-center gap-2">
              <User className="h-5 w-5 text-purple-600" />
              <h3 className="font-semibold text-purple-900">CLIENTE</h3>
            </div>
            <p className="mb-2 font-medium text-gray-900">{customerName}</p>
            <p className="text-sm text-gray-600">{customerPhone}</p>
            <p className="text-sm text-gray-600">{customerEmail}</p>
          </div>

          {/* Delivery Info */}
          <div className="rounded-lg border border-purple-200 bg-white p-6">
            <div className="mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-purple-600" />
              <h3 className="font-semibold text-purple-900">ENTREGA PARA</h3>
            </div>
            <p className="text-sm text-gray-700">{deliveryAddress}</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mb-8 space-y-4">
          <button className="w-full flex items-center justify-center gap-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 transition-colors">
            <MessageCircle className="h-5 w-5" />
            Enviar Pedido para Fabiana no WhatsApp
          </button>
        </div>

        {/* Back to Shop Link */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Voltar à Loja
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 border-t border-purple-200 pt-8 text-center">
          <p className="text-sm text-gray-600">
            ✓ 100% Artesanal | ✓ Compra Segura | ✓ Feito com 💜
          </p>
        </div>
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
