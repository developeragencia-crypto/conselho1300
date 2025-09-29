var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  let markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "@remix-run/react";
import { json } from "@remix-run/node";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-LNMCZOTI.css";

// app/root.tsx
var links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
  }
], loader = async ({ request }) => json({
  ENV: {
    NODE_ENV: "production"
  }
});
function App() {
  let data = useLoaderData();
  return <html lang="pt-BR">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta />
      <Links />
    </head>
    <body className="font-inter antialiased">
      <Outlet />
      <ScrollRestoration />
      <Scripts />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.ENV = ${JSON.stringify(data.ENV)}`
        }}
      />
      <LiveReload />
    </body>
  </html>;
}

// app/routes/tarot-gratis.tsx
var tarot_gratis_exports = {};
__export(tarot_gratis_exports, {
  default: () => TarotGratis,
  meta: () => meta
});
import { useState } from "react";
import { Link } from "@remix-run/react";

// app/components/ui/button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

// app/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// app/components/ui/button.tsx
var buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Button = React.forwardRef(
  ({ className, variant, size, asChild = !1, ...props }, ref) => {
    let Comp = asChild ? Slot : "button";
    return <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />;
  }
);
Button.displayName = "Button";

// app/components/ui/card.tsx
import * as React2 from "react";
var Card = React2.forwardRef(({ className, ...props }, ref) => <div
  ref={ref}
  className={cn(
    "rounded-lg border bg-card text-card-foreground shadow-sm",
    className
  )}
  {...props}
/>);
Card.displayName = "Card";
var CardHeader = React2.forwardRef(({ className, ...props }, ref) => <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />);
CardHeader.displayName = "CardHeader";
var CardTitle = React2.forwardRef(({ className, ...props }, ref) => <h3
  ref={ref}
  className={cn(
    "text-2xl font-semibold leading-none tracking-tight",
    className
  )}
  {...props}
/>);
CardTitle.displayName = "CardTitle";
var CardDescription = React2.forwardRef(({ className, ...props }, ref) => <p
  ref={ref}
  className={cn("text-sm text-muted-foreground", className)}
  {...props}
/>);
CardDescription.displayName = "CardDescription";
var CardContent = React2.forwardRef(({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />);
CardContent.displayName = "CardContent";
var CardFooter = React2.forwardRef(({ className, ...props }, ref) => <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />);
CardFooter.displayName = "CardFooter";

// app/routes/tarot-gratis.tsx
var meta = () => [
  { title: "Tarot Gratuito - Sensitivos na Web" },
  { name: "description", content: "Fa\xE7a sua consulta de tarot gratuita online. Cartas interativas com interpreta\xE7\xE3o completa." }
];
function TarotGratis() {
  let [selectedCards, setSelectedCards] = useState([]), [showReading, setShowReading] = useState(!1), handleCardSelect = (cardIndex) => {
    if (selectedCards.length < 3 && !selectedCards.includes(cardIndex)) {
      let newCards = [...selectedCards, cardIndex];
      setSelectedCards(newCards), newCards.length === 3 && setTimeout(() => setShowReading(!0), 500);
    }
  }, resetReading = () => {
    setSelectedCards([]), setShowReading(!1);
  };
  return <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
    <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm"><div className="container mx-auto px-4 py-4"><div className="flex items-center justify-between">
      <Link to="/" className="flex items-center space-x-2">
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
        <h1 className="text-2xl font-bold text-white">Sensitivos na Web</h1>
      </Link>
      <nav className="hidden md:flex items-center space-x-6">
        <Link to="/consultores" className="text-white/80 hover:text-white">Consultores</Link>
        <Link to="/servicos" className="text-white/80 hover:text-white">{"Servi\xE7os"}</Link>
        <Button variant="outline" size="sm" asChild><Link to="/login">Entrar</Link></Button>
      </nav>
    </div></div></header>
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white mb-4">{"\u{1F52E} Tarot Gratuito"}</h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">Escolha 3 cartas e descubra o que o universo tem a revelar sobre seu futuro</p>
      </div>
      {showReading ? <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-white text-center mb-8">Sua Leitura de Tarot</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-8">{tarotReadings.slice(0, 3).map((reading, index) => <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="w-20 h-32 bg-gradient-to-br from-purple-700 to-blue-800 rounded-lg mx-auto mb-4 flex items-center justify-center text-4xl">{reading.symbol}</div>
            <CardTitle className="text-white">{reading.card}</CardTitle>
            <CardDescription className="text-purple-300">{reading.position}</CardDescription>
          </CardHeader>
          <CardContent><p className="text-white/80 text-sm leading-relaxed">{reading.meaning}</p></CardContent>
        </Card>)}</div>
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm mb-8">
          <CardHeader><CardTitle className="text-white text-center">{"Interpreta\xE7\xE3o Geral"}</CardTitle></CardHeader>
          <CardContent><p className="text-white/80 leading-relaxed text-center">{"As cartas revelam um momento de transforma\xE7\xE3o em sua vida. O passado trouxe li\xE7\xF5es importantes, o presente oferece oportunidades \xFAnicas, e o futuro promete realiza\xE7\xF5es atrav\xE9s de sua determina\xE7\xE3o. Confie em sua intui\xE7\xE3o e mantenha-se aberto aos sinais do universo."}</p></CardContent>
        </Card>
        <div className="text-center space-y-4">
          <Button onClick={resetReading} size="lg">Nova Consulta</Button>
          <div>
            <p className="text-white/60 mb-2">Gostou da consulta?</p>
            <Button variant="outline" asChild><Link to="/consultores">Consulta com Especialista</Link></Button>
          </div>
        </div>
      </div> : <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-white/80 mb-4">
            {"Cartas selecionadas: "}
            {selectedCards.length}
            {"/3"}
          </p>
          <div className="flex justify-center space-x-2">{[1, 2, 3].map((num) => <div
            key={num}
            className={`w-4 h-4 rounded-full ${selectedCards.length >= num ? "bg-purple-500" : "bg-white/20"}`}
          />)}</div>
        </div>
        <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 mb-8">{Array.from({ length: 22 }, (_, i) => <div
          key={i}
          onClick={() => handleCardSelect(i)}
          className={`
                    aspect-[2/3] bg-gradient-to-br from-purple-800 to-blue-900 
                    rounded-lg border-2 border-white/20 cursor-pointer
                    flex items-center justify-center text-white font-bold
                    hover:border-purple-400 transition-all hover:scale-105
                    ${selectedCards.includes(i) ? "border-purple-400 scale-105 bg-purple-700" : ""}
                  `}
        >{selectedCards.includes(i) ? "\u2728" : "\u{1F52E}"}</div>)}</div>
        {selectedCards.length > 0 && <div className="text-center"><Button variant="outline" onClick={resetReading}>{"Recome\xE7ar"}</Button></div>}
      </div>}
    </main>
  </div>;
}
var tarotReadings = [
  {
    card: "O Mago",
    position: "Passado",
    symbol: "\u{1F3A9}",
    meaning: "Representa suas habilidades latentes e o poder de manifesta\xE7\xE3o que voc\xEA desenvolveu ao longo do tempo. Indica que voc\xEA possui as ferramentas necess\xE1rias para criar sua realidade."
  },
  {
    card: "A For\xE7a",
    position: "Presente",
    symbol: "\u{1F981}",
    meaning: "Simboliza coragem interior e autocontrole. Este \xE9 um momento para usar sua for\xE7a interior para superar desafios com paci\xEAncia e determina\xE7\xE3o."
  },
  {
    card: "O Sol",
    position: "Futuro",
    symbol: "\u2600\uFE0F",
    meaning: "Representa sucesso, alegria e realiza\xE7\xF5es. Indica que tempos pr\xF3speros e felizes est\xE3o chegando, trazendo clareza e energia positiva para sua vida."
  }
];

// app/routes/consultores.tsx
var consultores_exports = {};
__export(consultores_exports, {
  default: () => Consultores,
  loader: () => loader2,
  meta: () => meta2
});
import { json as json2 } from "@remix-run/node";
import { useLoaderData as useLoaderData2, Link as Link2 } from "@remix-run/react";
var meta2 = () => [
  { title: "Consultores - Sensitivos na Web" },
  { name: "description", content: "Encontre os melhores consultores especializados em tarot, astrologia, mediunidade e terapias alternativas." }
], loader2 = async ({ request }) => json2({ consultores: [
  {
    id: 1,
    name: "Ana Paula Silva",
    specialty: "Tarot",
    rating: 4.9,
    reviews: 234,
    price: "R$ 89,90",
    image: "/images/consultor1.jpg",
    online: !0,
    whatsapp: "5511999999999"
  },
  {
    id: 2,
    name: "Carlos Mendes",
    specialty: "Astrologia",
    rating: 4.8,
    reviews: 187,
    price: "R$ 120,00",
    image: "/images/consultor2.jpg",
    online: !1,
    whatsapp: "5511888888888"
  },
  {
    id: 3,
    name: "Mariana Costa",
    specialty: "Mediunidade",
    rating: 5,
    reviews: 156,
    price: "R$ 95,00",
    image: "/images/consultor3.jpg",
    online: !0,
    whatsapp: "5511777777777"
  }
] });
function Consultores() {
  let { consultores } = useLoaderData2();
  return <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
    <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm"><div className="container mx-auto px-4 py-4"><div className="flex items-center justify-between">
      <Link2 to="/" className="flex items-center space-x-2">
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
        <h1 className="text-2xl font-bold text-white">Sensitivos na Web</h1>
      </Link2>
      <nav className="hidden md:flex items-center space-x-6">
        <Link2 to="/consultores" className="text-white">Consultores</Link2>
        <Link2 to="/servicos" className="text-white/80 hover:text-white">{"Servi\xE7os"}</Link2>
        <Link2 to="/loja" className="text-white/80 hover:text-white">Loja</Link2>
        <Link2 to="/blog" className="text-white/80 hover:text-white">Blog</Link2>
        <Button variant="outline" size="sm" asChild><Link2 to="/login">Entrar</Link2></Button>
      </nav>
    </div></div></header>
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Nossos Consultores</h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">{"Conecte-se com consultores especializados e experientes para orienta\xE7\xE3o espiritual personalizada"}</p>
      </div>
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <Button variant="outline" className="bg-white/10 border-white/20 text-white">Todos</Button>
        <Button variant="ghost" className="text-white/80">Tarot</Button>
        <Button variant="ghost" className="text-white/80">Astrologia</Button>
        <Button variant="ghost" className="text-white/80">Mediunidade</Button>
        <Button variant="ghost" className="text-white/80">Terapias</Button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{consultores.map((consultor) => <Card key={consultor.id} className="bg-white/10 border-white/20 backdrop-blur-sm overflow-hidden">
        <div className="relative">
          <div className="h-48 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center"><div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-4xl">{"\u{1F464}"}</div></div>
          {consultor.online && <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs">Online</div>}
        </div>
        <CardHeader>
          <CardTitle className="text-white">{consultor.name}</CardTitle>
          <CardDescription className="text-white/70">
            {"Especialista em "}
            {consultor.specialty}
          </CardDescription>
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">{"\u2B50".repeat(Math.floor(consultor.rating))}</div>
            <span className="text-white/80 text-sm">
              {consultor.rating}
              {" ("}
              {consultor.reviews}
              {" avalia\xE7\xF5es)"}
            </span>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-2xl font-bold text-white">{consultor.price}</div>
          <div className="space-y-2">
            <Button className="w-full" asChild><Link2 to={`/consultor/${consultor.id}`}>Ver Perfil</Link2></Button>
            <Button
              variant="outline"
              className="w-full bg-green-600 hover:bg-green-700 border-green-600 text-white"
              asChild
            ><a
              href={`https://wa.me/${consultor.whatsapp}?text=Ol\xE1! Gostaria de agendar uma consulta de ${consultor.specialty}.`}
              target="_blank"
              rel="noopener noreferrer"
            >{"\u{1F4AC} WhatsApp"}</a></Button>
          </div>
        </CardContent>
      </Card>)}</div>
    </main>
  </div>;
}

// app/routes/servicos.tsx
var servicos_exports = {};
__export(servicos_exports, {
  default: () => Servicos,
  meta: () => meta3
});
import { Link as Link3 } from "@remix-run/react";
var meta3 = () => [
  { title: "Servi\xE7os - Sensitivos na Web" },
  { name: "description", content: "Conhe\xE7a todos os nossos servi\xE7os esot\xE9ricos: tarot, astrologia, mediunidade, numerologia, runas e terapias alternativas." }
];
function Servicos() {
  return <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
    <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm"><div className="container mx-auto px-4 py-4"><div className="flex items-center justify-between">
      <Link3 to="/" className="flex items-center space-x-2">
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
        <h1 className="text-2xl font-bold text-white">Sensitivos na Web</h1>
      </Link3>
      <nav className="hidden md:flex items-center space-x-6">
        <Link3 to="/consultores" className="text-white/80 hover:text-white">Consultores</Link3>
        <Link3 to="/servicos" className="text-white">{"Servi\xE7os"}</Link3>
        <Link3 to="/loja" className="text-white/80 hover:text-white">Loja</Link3>
        <Link3 to="/blog" className="text-white/80 hover:text-white">Blog</Link3>
        <Button variant="outline" size="sm" asChild><Link3 to="/login">Entrar</Link3></Button>
      </nav>
    </div></div></header>
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">{"Nossos Servi\xE7os"}</h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">{"Descubra todos os servi\xE7os esot\xE9ricos dispon\xEDveis em nossa plataforma"}</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">{services.map((service, index) => <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-3xl mb-4 mx-auto">{service.icon}</div>
          <CardTitle className="text-white">{service.title}</CardTitle>
          <CardDescription className="text-white/70">{service.description}</CardDescription>
        </CardHeader>
        <CardContent><div className="space-y-3">
          <div className="text-2xl font-bold text-white text-center">{service.price}</div>
          <Button className="w-full" asChild><Link3 to={service.link}>Agendar Consulta</Link3></Button>
        </div></CardContent>
      </Card>)}</div>
      <div className="bg-white/5 rounded-lg p-8 mb-12">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">Como Funciona</h3>
        <div className="grid md:grid-cols-3 gap-8">{features.map((feature, index) => <div key={index} className="text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xl mb-4 mx-auto">{index + 1}</div>
          <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
          <p className="text-white/70">{feature.description}</p>
        </div>)}</div>
      </div>
      <div className="text-center">
        <h3 className="text-3xl font-bold text-white mb-4">{"Pronto para Come\xE7ar?"}</h3>
        <p className="text-white/80 mb-6 max-w-xl mx-auto">Conecte-se agora com nossos consultores especializados e comece sua jornada espiritual</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild><Link3 to="/consultores">Encontrar Consultor</Link3></Button>
          <Button variant="outline" size="lg" asChild><Link3 to="/tarot-gratis">Tarot Gratuito</Link3></Button>
        </div>
      </div>
    </main>
  </div>;
}
var services = [
  {
    icon: "\u{1F52E}",
    title: "Tarot",
    description: "Consultas de tarot com interpreta\xE7\xE3o profissional",
    price: "R$ 89,90",
    link: "/servicos/tarot"
  },
  {
    icon: "\u2B50",
    title: "Astrologia",
    description: "Mapas astrais e previs\xF5es personalizadas",
    price: "R$ 120,00",
    link: "/servicos/astrologia"
  },
  {
    icon: "\u{1F441}\uFE0F",
    title: "Mediunidade",
    description: "Conex\xE3o espiritual e mensagens",
    price: "R$ 95,00",
    link: "/servicos/mediunidade"
  },
  {
    icon: "\u{1F522}",
    title: "Numerologia",
    description: "An\xE1lise numerol\xF3gica completa",
    price: "R$ 75,00",
    link: "/servicos/numerologia"
  },
  {
    icon: "\u{1F5FF}",
    title: "Runas",
    description: "Leitura de runas n\xF3rdicas",
    price: "R$ 85,00",
    link: "/servicos/runas"
  },
  {
    icon: "\u{1F31F}",
    title: "Or\xE1culos",
    description: "Consultas com diversos or\xE1culos",
    price: "R$ 80,00",
    link: "/servicos/oraculos"
  },
  {
    icon: "\u{1F486}",
    title: "Reiki",
    description: "Terapia energ\xE9tica \xE0 dist\xE2ncia",
    price: "R$ 100,00",
    link: "/servicos/reiki"
  },
  {
    icon: "\u{1F48E}",
    title: "Cristaloterapia",
    description: "Terapia com cristais e pedras",
    price: "R$ 110,00",
    link: "/servicos/cristaloterapia"
  }
], features = [
  {
    title: "Escolha o Servi\xE7o",
    description: "Selecione o tipo de consulta que mais combina com suas necessidades"
  },
  {
    title: "Conecte-se",
    description: "Escolha seu consultor favorito e agende sua sess\xE3o online"
  },
  {
    title: "Receba Orienta\xE7\xE3o",
    description: "Tenha sua consulta personalizada com interpreta\xE7\xE3o profissional"
  }
];

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta4
});
import { Link as Link4 } from "@remix-run/react";
var meta4 = () => [
  { title: "Sensitivos na Web - Consultas Esot\xE9ricas Online" },
  { name: "description", content: "Plataforma completa para consultas esot\xE9ricas com os melhores consultores especializados em tarot, astrologia, mediunidade e terapias alternativas." }
];
function Index() {
  return <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
    <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm"><div className="container mx-auto px-4 py-4"><div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
        <h1 className="text-2xl font-bold text-white">Sensitivos na Web</h1>
      </div>
      <nav className="hidden md:flex items-center space-x-6">
        <Link4 to="/consultores" className="text-white/80 hover:text-white">Consultores</Link4>
        <Link4 to="/servicos" className="text-white/80 hover:text-white">{"Servi\xE7os"}</Link4>
        <Link4 to="/loja" className="text-white/80 hover:text-white">Loja</Link4>
        <Link4 to="/blog" className="text-white/80 hover:text-white">Blog</Link4>
        <Button variant="outline" size="sm" asChild><Link4 to="/login">Entrar</Link4></Button>
        <Button size="sm" asChild><Link4 to="/registro">Cadastrar</Link4></Button>
      </nav>
    </div></div></header>
    <section className="py-20 px-4"><div className="container mx-auto text-center">
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
        {"Descubra Seu"}
        <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Futuro</span>
      </h2>
      <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">{"Conecte-se com consultores especializados em tarot, astrologia, mediunidade e terapias alternativas. Orienta\xE7\xE3o espiritual profissional quando voc\xEA precisar."}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" asChild><Link4 to="/consultores">Encontrar Consultor</Link4></Button>
        <Button variant="outline" size="lg" asChild><Link4 to="/tarot-gratis">Tarot Gratuito</Link4></Button>
      </div>
    </div></section>
    <section className="py-16 px-4"><div className="container mx-auto">
      <h3 className="text-3xl font-bold text-white text-center mb-12">{"Nossos Servi\xE7os"}</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{services2.map((service, index) => <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all">
        <CardHeader>
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-2xl mb-4">{service.icon}</div>
          <CardTitle className="text-white">{service.title}</CardTitle>
          <CardDescription className="text-white/70">{service.description}</CardDescription>
        </CardHeader>
        <CardContent><Button variant="ghost" className="w-full text-white" asChild><Link4 to={service.link}>Saiba Mais</Link4></Button></CardContent>
      </Card>)}</div>
    </div></section>
    <section className="py-16 px-4 bg-black/20"><div className="container mx-auto"><div className="grid md:grid-cols-4 gap-8 text-center">{stats.map((stat, index) => <div key={index}>
      <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
      <div className="text-white/70">{stat.label}</div>
    </div>)}</div></div></section>
    <footer className="py-12 px-4 bg-black/40"><div className="container mx-auto text-center"><p className="text-white/60">{"\xA9 2025 Sensitivos na Web. Todos os direitos reservados."}</p></div></footer>
  </div>;
}
var services2 = [
  {
    icon: "\u{1F52E}",
    title: "Tarot",
    description: "Consultas de tarot com os melhores especialistas",
    link: "/servicos/tarot"
  },
  {
    icon: "\u2B50",
    title: "Astrologia",
    description: "Mapas astrais e previs\xF5es personalizadas",
    link: "/servicos/astrologia"
  },
  {
    icon: "\u{1F441}\uFE0F",
    title: "Mediunidade",
    description: "Conex\xE3o espiritual e mensagens do al\xE9m",
    link: "/servicos/mediunidade"
  },
  {
    icon: "\u{1F48E}",
    title: "Cristaloterapia",
    description: "Terapia com cristais e pedras energ\xE9ticas",
    link: "/servicos/cristaloterapia"
  }
], stats = [
  { number: "500+", label: "Consultores Ativos" },
  { number: "10k+", label: "Consultas Realizadas" },
  { number: "4.9\u2B50", label: "Avalia\xE7\xE3o M\xE9dia" },
  { number: "24/7", label: "Suporte Online" }
];

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-I7JGU5AV.js", imports: ["/build/_shared/chunk-GUUIGM6P.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-IWEDYVG7.js", imports: ["/build/_shared/chunk-WDMG5KGI.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-HEO5QY5U.js", imports: ["/build/_shared/chunk-64HWPAYA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/consultores": { id: "routes/consultores", parentId: "root", path: "consultores", index: void 0, caseSensitive: void 0, module: "/build/routes/consultores-GZRLKBG3.js", imports: ["/build/_shared/chunk-64HWPAYA.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/servicos": { id: "routes/servicos", parentId: "root", path: "servicos", index: void 0, caseSensitive: void 0, module: "/build/routes/servicos-6DYK4GPD.js", imports: ["/build/_shared/chunk-64HWPAYA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/tarot-gratis": { id: "routes/tarot-gratis", parentId: "root", path: "tarot-gratis", index: void 0, caseSensitive: void 0, module: "/build/routes/tarot-gratis-6GYYK47V.js", imports: ["/build/_shared/chunk-64HWPAYA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "03dad857", hmr: void 0, url: "/build/manifest-03DAD857.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/tarot-gratis": {
    id: "routes/tarot-gratis",
    parentId: "root",
    path: "tarot-gratis",
    index: void 0,
    caseSensitive: void 0,
    module: tarot_gratis_exports
  },
  "routes/consultores": {
    id: "routes/consultores",
    parentId: "root",
    path: "consultores",
    index: void 0,
    caseSensitive: void 0,
    module: consultores_exports
  },
  "routes/servicos": {
    id: "routes/servicos",
    parentId: "root",
    path: "servicos",
    index: void 0,
    caseSensitive: void 0,
    module: servicos_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
