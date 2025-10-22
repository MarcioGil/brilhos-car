# 📚 Documentação Técnica - Brilhos Car

## 🎯 Visão Geral

O **Brilhos Car** é um website moderno e responsivo desenvolvido para uma oficina automotiva especializada em serviços de polimento, higienização, proteção cerâmica e restauração de veículos. O projeto foi construído com tecnologias de ponta para garantir excelente performance, acessibilidade e experiência do usuário.

### Objetivo Principal

Apresentar os serviços da oficina de forma elegante e profissional, destacando o trabalho realizado através de uma galeria de antes e depois, além de facilitar o contato direto com os clientes através de múltiplos canais (email, WhatsApp e localização).

---

## 🛠️ Stack Tecnológico

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| **React** | 19+ | Framework para interface do usuário |
| **Tailwind CSS** | 4+ | Framework CSS utilitário para estilização |
| **Vite** | Última | Build tool e dev server |
| **Wouter** | Última | Roteamento leve no lado do cliente |
| **shadcn/ui** | Última | Componentes UI pré-construídos |
| **Lucide React** | Última | Biblioteca de ícones |
| **TypeScript** | Última | Tipagem estática para JavaScript |

---

## 📂 Estrutura do Projeto

```
brilhos-car/
├── client/
│   ├── public/
│   │   ├── img1.jpg até img9.jpg    # Imagens de antes e depois
│   │   └── favicon.ico               # Ícone do site
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/                   # Componentes shadcn/ui
│   │   │   └── ErrorBoundary.tsx     # Tratamento de erros
│   │   ├── pages/
│   │   │   ├── Home.tsx              # Página inicial
│   │   │   └── NotFound.tsx          # Página 404
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx      # Contexto de tema
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── App.tsx                   # Componente raiz
│   │   ├── main.tsx                  # Ponto de entrada
│   │   └── index.css                 # Estilos globais
│   ├── index.html                    # Template HTML
│   └── package.json                  # Dependências
├── vite.config.ts                    # Configuração do Vite
├── tailwind.config.ts                # Configuração do Tailwind
├── tsconfig.json                     # Configuração do TypeScript
└── README.md                         # Este arquivo
```

---

## 🎨 Design e Estilo

### Paleta de Cores

O design utiliza uma paleta moderna e elegante com gradientes sofisticados:

- **Primária**: Azul (`#2563eb` a `#3b82f6`)
- **Secundária**: Roxo (`#9333ea` a `#a855f7`)
- **Destaque**: Rosa (`#ec4899`)
- **Neutro**: Cinza (`#1f2937` a `#f3f4f6`)

### Tipografia

- **Títulos**: Fonte sans-serif bold (Tailwind padrão)
- **Corpo**: Fonte sans-serif regular (Tailwind padrão)
- **Tamanhos**: Escalas responsivas com breakpoints em `sm`, `md`, `lg`

### Componentes Principais

#### 1. **Header Sticky**
- Logo com gradiente azul-roxo
- Navegação responsiva (desktop)
- Permanece no topo durante scroll

#### 2. **Hero Section**
- Fundo com gradiente suave
- Efeitos de blur (glassmorphism)
- CTA (Call-to-Action) com botões destacados
- Responsivo para mobile

#### 3. **Seção de Serviços**
- Grid de 4 cards (responsivo: 1 col mobile, 2 md, 4 lg)
- Ícones emoji para fácil identificação
- Hover effects com aumento de sombra

#### 4. **Galeria Antes e Depois**
- Carrossel interativo
- Thumbnails clicáveis para navegação
- Overlay com texto "ANTES"
- Imagens otimizadas

#### 5. **Missão, Visão e Valores**
- Layout em 3 colunas (desktop)
- Cards com gradientes
- Seção adicional com lista de valores

#### 6. **Seção de Contato**
- 3 cards: Email, WhatsApp, Localização
- Ícones coloridos (roxo, verde, laranja)
- Botões de ação diretos
- Integração com links externos

#### 7. **Footer**
- Fundo escuro
- Informações da empresa
- Copyright

---

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- pnpm (ou npm)

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/MarcioGil/brilhos-car.git
cd brilhos-car

# Instalar dependências
pnpm install
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
pnpm run dev

# Acesse em: http://localhost:5173
```

### Build para Produção

```bash
# Gerar build otimizado
pnpm run build

# Visualizar build localmente
pnpm run preview

# Arquivos finais em: dist/
```

---

## 🎯 Funcionalidades

### ✅ Implementadas

- [x] Layout responsivo (mobile-first)
- [x] Navegação por âncoras (scroll suave)
- [x] Galeria interativa de antes e depois
- [x] Seção de serviços com cards
- [x] Informações de missão, visão e valores
- [x] Seção de contato com múltiplos canais
- [x] Design elegante com gradientes
- [x] Otimização de performance
- [x] Acessibilidade básica

### 🔄 Futuras Melhorias

- [ ] Formulário de contato funcional
- [ ] Integração com WhatsApp API
- [ ] Mapa interativo (Google Maps)
- [ ] Blog de dicas automotivas
- [ ] Sistema de agendamento
- [ ] Galeria com lightbox
- [ ] Análise de visitantes (Google Analytics)
- [ ] SEO avançado (sitemap, robots.txt)

---

## 🔧 Personalização

### Alterar Cores

Edite o arquivo `client/src/index.css` para modificar as variáveis CSS:

```css
:root {
  --primary: #2563eb;
  --secondary: #9333ea;
  --accent: #ec4899;
}
```

### Alterar Textos

Edite o arquivo `client/src/pages/Home.tsx` e procure pelos arrays de dados:

```typescript
const services = [
  { id: 1, name: "Seu Serviço", icon: "🎨" },
  // ...
];
```

### Adicionar Imagens

1. Coloque as imagens em `client/public/`
2. Referencie-as no código com caminho absoluto: `/nome-da-imagem.jpg`

### Adicionar Novas Seções

1. Crie um novo componente em `client/src/components/`
2. Importe e use em `client/src/pages/Home.tsx`
3. Adicione um link de navegação no header

---

## 📱 Responsividade

O site utiliza breakpoints do Tailwind CSS:

| Breakpoint | Largura | Uso |
|-----------|---------|-----|
| `sm` | 640px | Tablets pequenos |
| `md` | 768px | Tablets |
| `lg` | 1024px | Desktops |
| `xl` | 1280px | Desktops grandes |

Todos os componentes foram testados em diferentes tamanhos de tela.

---

## ⚡ Performance

### Otimizações Implementadas

1. **Code Splitting**: Vite automaticamente divide o código
2. **Lazy Loading**: Imagens carregam sob demanda
3. **CSS Purging**: Tailwind remove CSS não utilizado
4. **Minificação**: Build final é minificado
5. **Compressão**: Assets são comprimidos

### Métricas Esperadas

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

---

## 🔒 Segurança

- Sem vulnerabilidades conhecidas nas dependências
- Código livre de XSS e CSRF
- Sem dados sensíveis no frontend
- HTTPS recomendado em produção

---

## 📦 Deploy

### Opções Recomendadas

#### 1. **Vercel** (Recomendado)
```bash
npm i -g vercel
vercel
```

#### 2. **Netlify**
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

#### 3. **GitHub Pages**
```bash
# Edite vite.config.ts
export default {
  base: '/brilhos-car/',
  // ...
}

# Build e deploy
pnpm run build
git add dist/
git commit -m "Deploy"
git push
```

---

## 🐛 Troubleshooting

### Problema: Imagens não carregam

**Solução**: Verifique se os arquivos estão em `client/public/` e use caminho absoluto (`/nome.jpg`).

### Problema: Estilos não aplicam

**Solução**: Limpe cache e reinicie o servidor:
```bash
rm -rf node_modules/.vite
pnpm run dev
```

### Problema: Build falha

**Solução**: Verifique erros de TypeScript:
```bash
pnpm run build --verbose
```

---

## 📞 Contato e Suporte

- **Email**: brilhos2022car@gmail.com
- **WhatsApp**: (21) 2661-6471
- **Localização**: Rua das Oficinas, 123

---

## 📄 Licença

Este projeto é de uso exclusivo da oficina **Brilhos Car**. Não é permitida a redistribuição sem autorização.

---

## 👨‍💻 Desenvolvedor

**Manus AI** - Desenvolvimento Web Moderno

---

**Última atualização**: 22 de outubro de 2024

