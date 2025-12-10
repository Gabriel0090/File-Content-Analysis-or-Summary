# Aromas de Borboleta E-commerce - Guia de Configuração

## 🦋 Bem-vindo!

Este é o e-commerce completo para a marca **Aromas de Borboleta** de Fabiana Rosa. O projeto está pronto para uso, mas requer algumas configurações iniciais.

## ⚙️ Configurações Necessárias

### 1. Número de WhatsApp de Fabiana

**Localização:** Arquivo `.env.local` (crie se não existir)

```env
VITE_WHATSAPP_NUMBER=5511987654321
```

**Formato:**
- Código do país: `55` (Brasil)
- DDD: `11` (São Paulo, ajuste conforme necessário)
- Número: `987654321` (9 dígitos)

**Exemplo completo:** `5511987654321`

### 2. Título e Logo da Aplicação (Opcional)

No arquivo `.env.local`, você também pode customizar:

```env
VITE_APP_TITLE=Aromas de Borboleta
VITE_APP_LOGO=/logo.png
```

## 📦 Estrutura do Projeto

```
client/
├── src/
│   ├── pages/
│   │   ├── Home.tsx          # Página principal com produtos
│   │   ├── Cart.tsx          # Carrinho de compras
│   │   └── Success.tsx       # Página de sucesso
│   ├── components/
│   │   ├── Header.tsx        # Cabeçalho com navegação
│   │   ├── ProductCard.tsx   # Card de produto
│   │   └── Filters.tsx       # Filtros de categoria e preço
│   ├── contexts/
│   │   └── CartContext.tsx   # Gerenciamento do carrinho
│   ├── lib/
│   │   ├── data.ts           # Dados dos produtos (mock)
│   │   └── whatsapp.ts       # Integração WhatsApp
│   └── index.css             # Estilos e paleta de cores
└── public/
    └── images/               # Imagens do site
```

## 🎨 Customização da Paleta de Cores

A paleta de cores está definida em `client/src/index.css`. Você pode modificar as cores principais:

```css
:root {
  --primary: #6B4FA1;        /* Roxo profundo */
  --secondary: #D8BFD8;      /* Lilás */
  --accent: #C084FC;         /* Lavanda clara */
}
```

## 📝 Adicionando Novos Produtos

1. Abra `client/src/lib/data.ts`
2. Adicione um novo objeto à array `products`:

```typescript
{
  id: "13",
  name: "Nome do Produto",
  category: "essential-oils", // ou "gift-kits", "soaps", "blends"
  price: 45.00,
  image: "/images/product-showcase-aromatherapy.jpg",
  description: "Descrição do produto",
  tags: ["Artesanal", "Mais Vendido"],
}
```

## 🚀 Desenvolvimento Local

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Verificar tipos TypeScript
pnpm check

# Build para produção
pnpm build
```

## 📱 Funcionalidades

### ✅ Implementadas
- [x] Catálogo de 12 produtos com filtros
- [x] Carrinho de compras com Context API
- [x] Adição/remoção de itens
- [x] Cálculo automático de totais
- [x] Integração com WhatsApp para checkout
- [x] Página de sucesso com resumo do pedido
- [x] Design responsivo (mobile-first)
- [x] Identidade visual roxo/lilás/lavanda
- [x] Animações suaves e transições

### 🎯 Próximas Melhorias (Opcional)
- [ ] Integração com Stripe para pagamento online
- [ ] Sistema de avaliações de produtos
- [ ] Histórico de pedidos do cliente
- [ ] Newsletter/Email marketing
- [ ] Integração com banco de dados para produtos dinâmicos

## 🔐 Segurança

- O número de WhatsApp é armazenado como variável de ambiente
- Nenhum dado sensível é exposto no código frontend
- Todos os dados do carrinho são armazenados localmente no navegador

## 📞 Suporte

Para dúvidas sobre customização ou funcionalidades, consulte a documentação do projeto ou entre em contato com o desenvolvedor.

---

**Feito com 💜 para Aromas de Borboleta**
