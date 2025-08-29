import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Nexus Academy — Consultoria, Capacitação e Software",
  description: "Consultoria estratégica, treinamentos corporativos e soluções SaaS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main style={{ minHeight: 'calc(100vh - 160px)', padding: '2rem' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
