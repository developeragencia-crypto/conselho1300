"use client";

import { Check, CreditCard, Gift, Crown, Star, Zap } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface CreditPackage {
  id: number;
  name: string;
  amount: number;
  price: number;
  originalPrice?: number;
  bonus: number;
  validDays: number;
  features: string[];
  isPopular: boolean;
  isVip: boolean;
  description: string;
  icon: string;
  color: string;
}

const creditPackages: CreditPackage[] = [
  {
    id: 1,
    name: "Pacote Iniciante",
    amount: 50,
    price: 25.00,
    bonus: 0,
    validDays: 30,
    features: [
      "50 créditos para consultas",
      "Válido por 30 dias",
      "Acesso a todos os consultores",
      "Suporte por WhatsApp"
    ],
    isPopular: false,
    isVip: false,
    description: "Ideal para quem está começando sua jornada espiritual",
    icon: "🌱",
    color: "border-gray-300"
  },
  {
    id: 2,
    name: "Pacote Popular",
    amount: 120,
    price: 50.00,
    originalPrice: 60.00,
    bonus: 20,
    validDays: 60,
    features: [
      "100 créditos + 20 bônus",
      "Válido por 60 dias",
      "Acesso prioritário aos consultores",
      "Suporte por WhatsApp",
      "Desconto em consultas especiais"
    ],
    isPopular: true,
    isVip: false,
    description: "O mais escolhido! Ótimo custo-benefício",
    icon: "⭐",
    color: "border-gold ring-2 ring-gold"
  },
  {
    id: 3,
    name: "Pacote Premium",
    amount: 250,
    price: 90.00,
    originalPrice: 120.00,
    bonus: 50,
    validDays: 90,
    features: [
      "200 créditos + 50 bônus",
      "Válido por 90 dias",
      "Acesso VIP aos consultores",
      "Suporte prioritário 24/7",
      "Consultas especiais gratuitas",
      "Relatório de evolução espiritual"
    ],
    isPopular: false,
    isVip: false,
    description: "Para quem busca orientação contínua",
    icon: "💎",
    color: "border-mystic-purple"
  },
  {
    id: 4,
    name: "Pacote VIP Master",
    amount: 500,
    price: 150.00,
    originalPrice: 200.00,
    bonus: 100,
    validDays: 120,
    features: [
      "400 créditos + 100 bônus",
      "Válido por 120 dias",
      "Acesso exclusivo a consultores VIP",
      "Suporte prioritário 24/7",
      "Consultas especiais ilimitadas",
      "Relatório personalizado mensal",
      "Sessões de coaching espiritual",
      "Acesso ao grupo VIP do Telegram"
    ],
    isPopular: false,
    isVip: true,
    description: "Experiência completa de transformação espiritual",
    icon: "👑",
    color: "border-deep-purple ring-2 ring-deep-purple"
  }
];

const paymentMethods = [
  { name: "PIX", icon: "💰", description: "Aprovação instantânea" },
  { name: "Cartão de Crédito", icon: "💳", description: "Parcelamento disponível" },
  { name: "Boleto", icon: "🏦", description: "Aprovação em 1-2 dias úteis" },
  { name: "PayPal", icon: "🌐", description: "Pagamento internacional" }
];

export default function CreditosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-dark-blue text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gold mb-4">💎 Pacotes de Créditos</h1>
          <p className="text-xl text-gray-300">Escolha o plano ideal para sua jornada espiritual</p>
        </div>
      </div>

      {/* Navegação */}
      <nav className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-dark-blue hover:text-gold font-medium">
            ← Voltar para Home
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-dark-blue font-medium">HOME</Link>
            <Link href="/blog" className="text-gray-700 hover:text-dark-blue font-medium">BLOG</Link>
            <Link href="/consultores" className="text-gray-700 hover:text-dark-blue font-medium">CONSULTORES</Link>
            <Link href="/creditos" className="text-dark-blue font-medium">CRÉDITOS</Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Como Funcionam os Créditos */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-mystic-purple to-deep-purple text-white">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-4">💫 Como Funcionam os Créditos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">💳</div>
                  <h3 className="font-semibold mb-2">1. Compre Créditos</h3>
                  <p className="text-sm opacity-90">Escolha um pacote de créditos que atenda suas necessidades</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🔮</div>
                  <h3 className="font-semibold mb-2">2. Faça Consultas</h3>
                  <p className="text-sm opacity-90">Use seus créditos para conversar com nossos consultores</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">✨</div>
                  <h3 className="font-semibold mb-2">3. Transforme sua Vida</h3>
                  <p className="text-sm opacity-90">Receba orientações que irão iluminar seu caminho</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Pacotes de Créditos */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-dark-blue text-center mb-8">🎁 Escolha Seu Pacote</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {creditPackages.map((pkg) => (
              <Card key={pkg.id} className={`relative hover:shadow-xl transition-all duration-300 ${pkg.color}`}>
                {pkg.isPopular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gold text-dark-blue font-bold px-4 py-1">
                    MAIS POPULAR
                  </Badge>
                )}
                {pkg.isVip && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-deep-purple text-white font-bold px-4 py-1">
                    <Crown size={14} className="mr-1" />
                    VIP MASTER
                  </Badge>
                )}
                
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{pkg.icon}</div>
                  <CardTitle className="text-dark-blue">{pkg.name}</CardTitle>
                  <CardDescription className="text-sm">{pkg.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Preço */}
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-3xl font-bold text-green">R$ {pkg.price.toFixed(2)}</span>
                      {pkg.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">R$ {pkg.originalPrice.toFixed(2)}</span>
                      )}
                    </div>
                    {pkg.originalPrice && (
                      <div className="text-sm text-green font-medium">
                        Economia de R$ {(pkg.originalPrice - pkg.price).toFixed(2)}
                      </div>
                    )}
                  </div>

                  {/* Créditos */}
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-dark-blue">
                      {pkg.amount} créditos
                    </div>
                    {pkg.bonus > 0 && (
                      <div className="text-sm text-green font-medium">
                        + {pkg.bonus} créditos bônus
                      </div>
                    )}
                    <div className="text-xs text-gray-500 mt-1">
                      Válido por {pkg.validDays} dias
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <Check size={16} className="text-green mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Botão de Compra */}
                  <Button 
                    className={`w-full ${pkg.isPopular ? 'bg-gold hover:bg-gold/90 text-dark-blue' : 
                                pkg.isVip ? 'bg-deep-purple hover:bg-deep-purple/90 text-white' : 
                                'bg-green hover:bg-green/90 text-white'} font-semibold`}
                  >
                    <CreditCard className="mr-2" size={16} />
                    Comprar Agora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Formas de Pagamento */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-dark-blue text-center mb-8">💳 Formas de Pagamento</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {paymentMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-3xl mb-2">{method.icon}</div>
                  <h3 className="font-semibold text-dark-blue mb-1">{method.name}</h3>
                  <p className="text-sm text-gray-600">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefícios Exclusivos */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-gold/20 to-mystic-purple/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-dark-blue mb-4">🎁 Benefícios Exclusivos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Zap className="w-12 h-12 text-gold mx-auto mb-3" />
                  <h3 className="font-semibold text-dark-blue mb-2">Acesso Imediato</h3>
                  <p className="text-sm text-gray-700">Seus créditos ficam disponíveis instantaneamente após o pagamento</p>
                </div>
                <div className="text-center">
                  <Gift className="w-12 h-12 text-mystic-purple mx-auto mb-3" />
                  <h3 className="font-semibold text-dark-blue mb-2">Créditos Bônus</h3>
                  <p className="text-sm text-gray-700">Ganhe créditos extras em pacotes maiores</p>
                </div>
                <div className="text-center">
                  <Star className="w-12 h-12 text-green mx-auto mb-3" />
                  <h3 className="font-semibold text-dark-blue mb-2">Satisfação Garantida</h3>
                  <p className="text-sm text-gray-700">30 dias para reembolso total se não ficar satisfeito</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-dark-blue text-center mb-8">❓ Perguntas Frequentes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-dark-blue text-lg">Como funcionam os créditos?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Cada minuto de consulta consome créditos de acordo com o valor do consultor. A maioria das consultas custa entre R$ 3,50 a R$ 4,25 por minuto.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-dark-blue text-lg">Os créditos vencem?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Sim, cada pacote tem um prazo de validade específico. Você pode verificar o prazo no seu painel de usuário.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-dark-blue text-lg">Posso solicitar reembolso?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Sim, oferecemos 30 dias de garantia. Se não ficar satisfeito, pode solicitar reembolso total dos créditos não utilizados.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-dark-blue text-lg">Como acompanho meus créditos?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Você pode acompanhar seu saldo e histórico de uso no painel do usuário, disponível após fazer login.</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      {/* Botão WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/5511951653210?text=Olá! Gostaria de saber mais sobre os pacotes de créditos."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green hover:bg-green/90 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
          aria-label="Contato WhatsApp"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
          </svg>
        </a>
      </div>
    </div>
  );
}