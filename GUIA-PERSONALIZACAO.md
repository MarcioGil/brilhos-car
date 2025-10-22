# 🎨 Guia de Personalização - Brilhos Car

Este guia fornece instruções passo a passo para personalizar o site da Brilhos Car de acordo com suas necessidades.

---

## 1️⃣ Alterar Cores e Tema

### Modificar Paleta de Cores Principal

Abra o arquivo `client/src/index.css` e procure pela seção de variáveis CSS:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.55 0.2 260);
  --secondary: oklch(0.6 0.15 280);
  --accent: oklch(0.7 0.2 30);
}
```

**Exemplos de cores para diferentes estilos:**

| Estilo | Primária | Secundária | Accent |
|--------|----------|-----------|--------|
| Profissional | `#2563eb` (Azul) | `#1e40af` (Azul Escuro) | `#0ea5e9` (Azul Claro) |
| Moderno | `#9333ea` (Roxo) | `#6b21a8` (Roxo Escuro) | `#d946ef` (Magenta) |
| Elegante | `#dc2626` (Vermelho) | `#991b1b` (Vermelho Escuro) | `#f87171` (Vermelho Claro) |
| Vibrante | `#f97316` (Laranja) | `#ea580c` (Laranja Escuro) | `#fb923c` (Laranja Claro) |

### Aplicar Tema Escuro

No arquivo `client/src/App.tsx`, altere:

```typescript
// De:
<ThemeProvider defaultTheme="light">

// Para:
<ThemeProvider defaultTheme="dark">
```

---

## 2️⃣ Alterar Textos e Conteúdo

### Modificar Título e Descrição

Abra `client/src/pages/Home.tsx` e procure pela seção Hero:

```typescript
<h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
  Seu Carro Merece <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Brilhar</span>
</h2>
<p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
  Transformamos o visual do seu veículo com técnicas profissionais e produtos premium
</p>
```

Altere o texto conforme desejado.

### Modificar Serviços

Localize o array `services` no início do arquivo:

```typescript
const services = [
  { id: 1, name: "Polimento", icon: "✨" },
  { id: 2, name: "Higienização", icon: "🧼" },
  { id: 3, name: "Proteção Cerâmica", icon: "🛡️" },
  { id: 4, name: "Restauração", icon: "🔧" },
];
```

**Para adicionar um novo serviço:**

```typescript
const services = [
  // ... serviços existentes
  { id: 5, name: "Seu Novo Serviço", icon: "🎨" },
];
```

### Modificar Missão, Visão e Valores

Procure pelas seções de MVV no arquivo:

```typescript
// Missão
<p className="text-gray-600 leading-relaxed">
  Proporcionar excelência em serviços automotivos, transformando veículos com dedicação, profissionalismo e inovação
</p>

// Visão
<p className="text-gray-600 leading-relaxed">
  Ser referência em beleza automotiva, reconhecida pela qualidade, confiança e satisfação dos clientes
</p>

// Valores
const values = [
  {
    title: "Excelência",
    description: "Compromisso com a qualidade em cada detalhe do nosso trabalho",
  },
  // ... mais valores
];
```

---

## 3️⃣ Gerenciar Imagens

### Adicionar Novas Imagens

1. **Coloque a imagem em** `client/public/`
   - Exemplo: `client/public/minha-imagem.jpg`

2. **Referencie no código** com caminho absoluto:
   ```typescript
   <img src="/minha-imagem.jpg" alt="Descrição" />
   ```

### Atualizar Galeria Antes e Depois

Localize o array `beforeAfter`:

```typescript
const beforeAfter = [
  { id: 1, before: "/img1.jpg", after: "/img2.jpg" },
  { id: 2, before: "/img3.jpg", after: "/img4.jpg" },
  // ... adicione mais pares
];
```

**Para adicionar um novo par:**

```typescript
const beforeAfter = [
  // ... pares existentes
  { id: 5, before: "/nova-antes.jpg", after: "/nova-depois.jpg" },
];
```

### Otimizar Imagens

Use ferramentas online para comprimir imagens:
- [TinyPNG](https://tinypng.com/) - Compressão com perda mínima
- [ImageOptim](https://imageoptim.com/) - Otimização local
- [Squoosh](https://squoosh.app/) - Conversão para WebP

---

## 4️⃣ Alterar Informações de Contato

### Email

Procure pela seção de Email:

```typescript
<p className="text-gray-600 mb-4">brilhos2022car@gmail.com</p>
```

Altere para seu email.

### WhatsApp

Localize o número:

```typescript
<p className="text-gray-600 mb-4">(21) 2661-6471</p>
```

Para criar um link funcional, modifique o botão:

```typescript
<a href="https://wa.me/5521266164471" target="_blank" rel="noopener noreferrer">
  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
    Conversar no WhatsApp
  </Button>
</a>
```

### Localização

Altere o endereço:

```typescript
<p className="text-gray-600 mb-4">Rua das Oficinas, 123</p>
```

Para adicionar um mapa, use o Google Maps Embed:

```typescript
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.123456789!2d-43.123456!3d-22.987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x123456789!2zSW5zZXJpciBlbmRlcmXDp28!5e0!3m2!1spt-BR!2sbr!4v123456789"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
```

---

## 5️⃣ Adicionar Novas Seções

### Criar uma Seção de Depoimentos

1. Crie um novo arquivo `client/src/components/Testimonials.tsx`:

```typescript
export default function Testimonials() {
  const testimonials = [
    {
      name: "João Silva",
      text: "Excelente trabalho! Meu carro ficou impecável.",
      rating: 5,
    },
    // ... mais depoimentos
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-4xl font-bold text-center mb-16">O que Dizem Nossos Clientes</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white p-8 rounded-lg shadow">
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <p className="font-bold text-gray-900">{testimonial.name}</p>
              <p className="text-yellow-500">{"⭐".repeat(testimonial.rating)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

2. Importe em `client/src/pages/Home.tsx`:

```typescript
import Testimonials from "@/components/Testimonials";

// Adicione no JSX:
<Testimonials />
```

---

## 6️⃣ Modificar Layout e Estrutura

### Alterar Ordem das Seções

No arquivo `client/src/pages/Home.tsx`, simplesmente reordene os componentes `<section>` no JSX.

### Alterar Número de Colunas

Para mudar o grid de serviços de 4 para 3 colunas:

```typescript
// De:
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

// Para:
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
```

---

## 7️⃣ Adicionar Funcionalidades

### Formulário de Contato

Instale a biblioteca de formulários:

```bash
pnpm add react-hook-form zod @hookform/resolvers
```

Crie um novo componente `client/src/components/ContactForm.tsx`:

```typescript
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Enviar para backend ou serviço de email
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        {...register("name", { required: true })}
        placeholder="Seu Nome"
        className="w-full p-2 border rounded"
      />
      <input
        {...register("email", { required: true })}
        placeholder="Seu Email"
        className="w-full p-2 border rounded"
      />
      <textarea
        {...register("message", { required: true })}
        placeholder="Sua Mensagem"
        className="w-full p-2 border rounded"
      />
      <Button type="submit" className="w-full">Enviar</Button>
    </form>
  );
}
```

---

## 8️⃣ Otimizar para SEO

### Adicionar Meta Tags

Edite `client/index.html`:

```html
<meta name="description" content="Brilhos Car - Excelência em Serviços Automotivos. Polimento, higienização, proteção cerâmica e restauração de veículos.">
<meta name="keywords" content="polimento de carro, higienização automotiva, proteção cerâmica, restauração de veículos">
<meta property="og:title" content="Brilhos Car - Excelência em Serviços Automotivos">
<meta property="og:description" content="Transforme o visual do seu veículo com nossos serviços profissionais.">
<meta property="og:image" content="/og-image.jpg">
```

### Adicionar Sitemap

Crie `client/public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://brilhos-car.com/</loc>
    <lastmod>2024-10-22</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

## 9️⃣ Testar Mudanças

Após fazer alterações, teste localmente:

```bash
# Reinicie o servidor
pnpm run dev

# Acesse em http://localhost:5173
```

Verifique:
- ✅ Layout responsivo (mobile, tablet, desktop)
- ✅ Cores e estilos aplicados
- ✅ Imagens carregam corretamente
- ✅ Links funcionam
- ✅ Sem erros no console

---

## 🔟 Deploy das Alterações

Após finalizar as personalizações:

```bash
# Build para produção
pnpm run build

# Teste o build localmente
pnpm run preview

# Faça commit das mudanças
git add .
git commit -m "Personalização do site Brilhos Car"
git push

# Deploy (conforme sua plataforma)
```

---

## 📞 Suporte

Para dúvidas sobre personalização, consulte:
- [Documentação do React](https://react.dev)
- [Documentação do Tailwind CSS](https://tailwindcss.com)
- [Documentação do shadcn/ui](https://ui.shadcn.com)

---

**Última atualização**: 22 de outubro de 2024

