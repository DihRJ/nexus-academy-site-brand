import "./globals.css";
export const metadata = { title: "Nexus Academy — Consultoria, Capacitação e Software" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="pt-BR"><body>{children}</body></html>);
}
