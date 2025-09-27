import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    nav: {
      backgroundColor: 'white',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 1000,
      padding: isMobile ? '0.75rem 0' : '1rem 0'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: isMobile ? '0 0.75rem' : '0 1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      fontSize: isMobile ? '1.25rem' : '1.5rem',
      fontWeight: 'bold',
      color: '#1f2937'
    },
    logoIcon: {
      backgroundColor: '#2563eb',
      color: 'white',
      padding: '0.5rem',
      borderRadius: '0.5rem',
      marginRight: isMobile ? '0.5rem' : '0.75rem',
      width: isMobile ? '32px' : '40px',
      height: isMobile ? '32px' : '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    desktopMenu: {
      display: isMobile ? 'none' : 'flex',
      alignItems: 'center',
      gap: '2rem'
    },
    link: {
      color: '#374151',
      textDecoration: 'none',
      fontWeight: '500',
      padding: '0.5rem 1rem',
      borderRadius: '0.25rem',
      transition: 'color 0.3s'
    },
    button: {
      backgroundColor: '#2563eb',
      color: 'white',
      padding: '0.5rem 1rem',
      borderRadius: '0.25rem',
      border: 'none',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.3s'
    },
    mobileButton: {
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '0.5rem',
      display: isMobile ? 'block' : 'none'
    },
    mobileMenu: {
      display: isMenuOpen && isMobile ? 'block' : 'none',
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      backgroundColor: 'white',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      padding: '1rem',
      maxHeight: isMenuOpen ? '400px' : '0',
      overflow: 'hidden',
      transition: 'max-height 0.3s ease-in-out'
    }
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        {/* Logo */}
        <div style={styles.logo}>
          <div style={styles.logoIcon}>
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
            </svg>
          </div>
          IELTS Academy
        </div>

        {/* Desktop Menu */}
        <div style={styles.desktopMenu}>
          <a href="#home" style={styles.link}>Home</a>
          <a href="#courses" style={styles.link}>Courses</a>
          <a href="#practice" style={styles.link}>Practice Tests</a>
          <a href="#about" style={styles.link}>About</a>
          <a href="#contact" style={styles.link}>Contact</a>
          <button style={styles.button}>Get Started</button>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={styles.mobileButton}
          aria-label="Toggle menu"
        >
          {!isMenuOpen ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div style={styles.mobileMenu}>
        <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
          <a href="#home" style={styles.link}>Home</a>
          <a href="#courses" style={styles.link}>Courses</a>
          <a href="#practice" style={styles.link}>Practice Tests</a>
          <a href="#about" style={styles.link}>About</a>
          <a href="#contact" style={styles.link}>Contact</a>
          <button style={{...styles.button, marginTop: '0.5rem', width: '100%'}}>Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;