import Link from 'next/link';

export default function Header() {
  return (
    <header style={{borderBottom:'1px solid #1f2937',background:'#0b1220',padding:'1rem 2rem',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <h1 style={{margin:0,color:'#e2e8f0'}}>Nexus Academy</h1>
      <nav>
        <Link href="/" style={{marginRight:'1rem',color:'#94a3b8',textDecoration:'none'}}>Home</Link>
        <Link href="/services" style={{marginRight:'1rem',color:'#94a3b8',textDecoration:'none'}}>Serviços</Link>
        <Link href="/training" style={{marginRight:'1rem',color:'#94a3b8',textDecoration:'none'}}>Treinamentos</Link>
        <Link href="/saas" style={{marginRight:'1rem',color:'#94a3b8',textDecoration:'none'}}>SaaS</Link>
        <Link href="/contact" style={{color:'#94a3b8',textDecoration:'none'}}>Contato</Link>
      </nav>
    </header>
  );
}
