export default function Home() {
  return (
    <main style={styles.container}>
      <h1 style={styles.heading}>Welcome to Zohaib&rsquo;s Site</h1>
      <p style={styles.paragraph}>
        This is a simple website built using Next.js. It&rsquo;s clean, fast, and cool 😎.
      </p>

      <div style={styles.card}>
        <h2>About Me</h2>
        <p>
          I&rsquo;m learning Next.js and building cool websites. Follow me on my journey!
        </p>
      </div>

      <footer style={styles.footer}>
        Made with ❤️ by Zohaib
      </footer>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: 'auto',
    backgroundColor: '#f5f5f5',
    borderRadius: '12px',
  },
  heading: {
    fontSize: '36px',
    color: '#333',
  },
  paragraph: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '30px',
  },
  card: {
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    marginBottom: '30px',
  },
  footer: {
    marginTop: '40px',
    fontSize: '14px',
    color: '#999',
    textAlign: 'center',
  },
};
