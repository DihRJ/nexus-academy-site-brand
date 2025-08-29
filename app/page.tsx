import Link from 'next/link';

export const metadata = {
  title: 'Nexus Academy - Início',
  description: 'Site institucional da Nexus Academy, consultoria, treinamento e SaaS.'
};

export default function Home() {
  return (
    <main style={{ padding: '2rem', color: '#e2e8f0', background: '#0b1220' }}>
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#f8fafc' }}>
          Bem-vindo à Nexus Academy
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#94a3b8' }}>
          Impulsionamos sua empresa com tecnologia, consultoria e treinamento.
        </p>
      </section>
      <section
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem',
          justifyContent: 'center'
        }}
      >
        <div
          style={{
            flex: '1',
            minWidth: '250px',
            background: '#1e293b',
            padding: '1.5rem',
            borderRadius: '0.5rem'
          }}
        >
          <h2 style={{ color: '#f8fafc', marginBottom: '0.5rem' }}>Consultoria</h2>
          <p style={{ color: '#cbd5e1', marginBottom: '1rem' }}>
            Soluções estratégicas para transformar seu negócio com tecnologia de
            ponta.
          </p>
          <Link href="/services" style={{ color: '#3b82f6', textDecoration: 'underline' }}>
            Saiba mais
          </Link>
        </div>
        <div
          style={{
            flex: '1',
            minWidth: '250px',
            background: '#1e293b',
            padding: '1.5rem',
            borderRadius: '0.5rem'
          }}
        >
          <h2 style={{ color: '#f8fafc', marginBottom: '0.5rem' }}>Treinamentos</h2>
          <p style={{ color: '#cbd5e1', marginBottom: '1rem' }}>
            Capacitação profissional para turbinar sua carreira e equipe.
          </p>
          <Link href="/training" style={{ color: '#3b82f6', textDecoration: 'underline' }}>
            Saiba mais
          </Link>
        </div>
        <div
          style={{
            flex: '1',
            minWidth: '250px',
            background: '#1e293b',
            padding: '1.5rem',
            borderRadius: '0.5rem'
          }}
        >
          <h2 style={{ color: '#f8fafc', marginBottom: '0.5rem' }}>SaaS</h2>
          <p style={{ color: '#cbd5e1', marginBottom: '1rem' }}>
            Produtos e plataformas digitais que aceleram seu crescimento.
          </p>
          <Link href="/saas" style={{ color: '#3b82f6', textDecoration: 'underline' }}>
            Saiba mais
          </Link>
        </div>
      </section>
    </main>
  );
}
