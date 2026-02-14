export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      color: 'white',
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>🚀 Hello World</h1>
      <p style={{ fontSize: '1.5rem', opacity: 0.7 }}>Shipped from ClawSaaS with ❤️</p>
      <p style={{ fontSize: '1rem', opacity: 0.5, marginTop: '2rem' }}>Built & deployed by AI → Vercel</p>
    </div>
  );
}
