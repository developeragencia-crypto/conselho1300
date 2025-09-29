"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { User, CreditCard, MessageCircle, Calendar, Star, Settings, LogOut, Bell, Coins } from "lucide-react";

interface UserData {
  id: number;
  name: string;
  email: string;
  phone?: string;
  birthDate?: string;
  credits: number;
  createdAt: string;
}

interface Session {
  id: number;
  consultantName: string;
  date: string;
  duration: number;
  status: string;
  rating?: number;
}

export default function DashboardPage() {
  const [user, setUser] = useState<UserData | null>(null);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      router.push("/login");
      return;
    }

    try {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      loadUserSessions(parsedUser.id);
    } catch (error) {
      console.error("Erro ao carregar dados do usuário:", error);
      router.push("/login");
    }
  }, [router]);

  const loadUserSessions = async (userId: number) => {
    try {
      const response = await fetch(`/api/sessions/user/${userId}`);
      if (response.ok) {
        const data = await response.json();
        setSessions(data);
      }
    } catch (error) {
      console.error("Erro ao carregar sessões:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/");
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "active":
        return "bg-blue-100 text-blue-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Concluída";
      case "active":
        return "Ativa";
      case "cancelled":
        return "Cancelada";
      default:
        return "Pendente";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-800 via-blue-800 to-indigo-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-purple-600">
                Portal Esotérico
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Coins className="w-5 h-5 text-yellow-500" />
                <span className="font-semibold text-gray-700">{user.credits} créditos</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Sair</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-64 bg-white rounded-lg shadow-sm p-6">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
              <p className="text-gray-600 text-sm">{user.email}</p>
            </div>

            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab("overview")}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === "overview"
                    ? "bg-purple-100 text-purple-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <User className="w-5 h-5" />
                <span>Visão Geral</span>
              </button>
              <button
                onClick={() => setActiveTab("sessions")}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === "sessions"
                    ? "bg-purple-100 text-purple-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <MessageCircle className="w-5 h-5" />
                <span>Minhas Consultas</span>
              </button>
              <button
                onClick={() => setActiveTab("credits")}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === "credits"
                    ? "bg-purple-100 text-purple-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <CreditCard className="w-5 h-5" />
                <span>Comprar Créditos</span>
              </button>
              <button
                onClick={() => setActiveTab("profile")}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === "profile"
                    ? "bg-purple-100 text-purple-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Settings className="w-5 h-5" />
                <span>Perfil</span>
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Painel de Controle</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-white">
                      <div className="flex items-center">
                        <Coins className="w-8 h-8 mr-3" />
                        <div>
                          <p className="text-purple-100">Créditos</p>
                          <p className="text-2xl font-bold">{user.credits}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
                      <div className="flex items-center">
                        <MessageCircle className="w-8 h-8 mr-3" />
                        <div>
                          <p className="text-blue-100">Consultas</p>
                          <p className="text-2xl font-bold">{sessions.length}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
                      <div className="flex items-center">
                        <Star className="w-8 h-8 mr-3" />
                        <div>
                          <p className="text-green-100">Avaliações</p>
                          <p className="text-2xl font-bold">{sessions.filter(s => s.rating).length}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 text-white">
                    <h4 className="text-xl font-bold mb-4">Pronto para uma consulta?</h4>
                    <p className="mb-4">Conecte-se com nossos consultores experientes e encontre as respostas que procura.</p>
                    <Link href="/#consultores">
                      <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                        Ver Consultores
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "sessions" && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Minhas Consultas</h3>
                
                {sessions.length === 0 ? (
                  <div className="text-center py-12">
                    <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h4 className="text-lg font-medium text-gray-600 mb-2">Nenhuma consulta ainda</h4>
                    <p className="text-gray-500 mb-6">Comece sua jornada espiritual agora</p>
                    <Link href="/#consultores">
                      <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                        Consultar Agora
                      </button>
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {sessions.map((session) => (
                      <div key={session.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-800">{session.consultantName}</h4>
                            <p className="text-sm text-gray-600">{formatDate(session.date)}</p>
                            <p className="text-sm text-gray-600">{session.duration} minutos</p>
                          </div>
                          <div className="text-right">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(session.status)}`}>
                              {getStatusText(session.status)}
                            </span>
                            {session.rating && (
                              <div className="flex items-center mt-2">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < session.rating! ? "text-yellow-400 fill-current" : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === "credits" && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Comprar Créditos</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="border-2 border-gray-200 rounded-lg p-6 text-center hover:border-purple-500 transition-colors">
                    <div className="text-3xl font-bold text-purple-600 mb-2">100</div>
                    <div className="text-gray-600 mb-4">Créditos</div>
                    <div className="text-2xl font-bold text-gray-800 mb-4">R$ 50,00</div>
                    <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                      Comprar
                    </button>
                  </div>
                  
                  <div className="border-2 border-purple-500 rounded-lg p-6 text-center bg-purple-50">
                    <div className="text-xs bg-purple-600 text-white px-2 py-1 rounded-full inline-block mb-2">
                      MAIS POPULAR
                    </div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">250</div>
                    <div className="text-gray-600 mb-4">Créditos</div>
                    <div className="text-2xl font-bold text-gray-800 mb-4">R$ 120,00</div>
                    <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                      Comprar
                    </button>
                  </div>
                  
                  <div className="border-2 border-gray-200 rounded-lg p-6 text-center hover:border-purple-500 transition-colors">
                    <div className="text-3xl font-bold text-purple-600 mb-2">500</div>
                    <div className="text-gray-600 mb-4">Créditos</div>
                    <div className="text-2xl font-bold text-gray-800 mb-4">R$ 200,00</div>
                    <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "profile" && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Meu Perfil</h3>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                      <input
                        type="text"
                        value={user.name}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        value={user.email}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        readOnly
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                      <input
                        type="tel"
                        value={user.phone || ""}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Data de Nascimento</label>
                      <input
                        type="date"
                        value={user.birthDate || ""}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        readOnly
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Membro desde</label>
                    <input
                      type="text"
                      value={formatDate(user.createdAt)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      readOnly
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}