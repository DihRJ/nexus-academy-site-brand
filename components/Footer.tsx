export default function Footer(){
  return (<footer style={{padding:'1rem 2rem',borderTop:'1px solid #1f2937',background:'#0b1220',color:'#94a3b8'}}>
    Razão social: Nexus Inteligência e Capacitação LTDA · Nome fantasia: Nexus Academy<br/>
    © {new Date().getFullYear()} Nexus Academy — Todos os direitos reservados.
  </footer>);
}
