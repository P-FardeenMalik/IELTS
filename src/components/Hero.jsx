import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    section: {
      paddingTop: isMobile ? '70px' : '80px',
      background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
      minHeight: isMobile ? 'auto' : '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingBottom: isMobile ? '2rem' : '0'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: isMobile ? '2rem 0.75rem' : isTablet ? '2.5rem 1rem' : '3rem 1rem',
      display: 'grid',
      gridTemplateColumns: !isMobile && !isTablet ? '1fr 1fr' : '1fr',
      gap: isMobile ? '2rem' : isTablet ? '2.5rem' : '3rem',
      alignItems: 'center'
    },
    content: {
      textAlign: isMobile || isTablet ? 'center' : 'left'
    },
    title: {
      fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : '3rem',
      fontWeight: 'bold',
      color: '#1f2937',
      lineHeight: '1.2',
      marginBottom: isMobile ? '1rem' : '1.5rem'
    },
    highlight: {
      color: '#2563eb',
      display: 'block'
    },
    description: {
      fontSize: isMobile ? '1rem' : isTablet ? '1.125rem' : '1.25rem',
      color: '#6b7280',
      lineHeight: '1.6',
      marginBottom: isMobile ? '1.5rem' : '2rem',
      maxWidth: isMobile ? '100%' : '600px',
      margin: isMobile || isTablet ? '0 auto 1.5rem' : '0 0 2rem'
    },
    buttonContainer: {
      display: 'flex',
      gap: isMobile ? '0.75rem' : '1rem',
      justifyContent: isMobile || isTablet ? 'center' : 'flex-start',
      flexDirection: isMobile ? 'column' : 'row',
      marginBottom: isMobile ? '2rem' : '3rem'
    },
    primaryButton: {
      backgroundColor: '#2563eb',
      color: 'white',
      padding: isMobile ? '0.75rem 1.5rem' : '1rem 2rem',
      borderRadius: '0.5rem',
      border: 'none',
      fontSize: isMobile ? '1rem' : '1.125rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      width: isMobile ? '100%' : 'auto'
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      color: '#2563eb',
      padding: isMobile ? '0.75rem 1.5rem' : '1rem 2rem',
      borderRadius: '0.5rem',
      border: '2px solid #2563eb',
      fontSize: isMobile ? '1rem' : '1.125rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      width: isMobile ? '100%' : 'auto'
    },
    stats: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: isMobile ? '1rem' : '2rem',
      marginTop: isMobile ? '1.5rem' : '2rem'
    },
    stat: {
      textAlign: 'center'
    },
    statNumber: {
      fontSize: isMobile ? '1.5rem' : isTablet ? '1.75rem' : '2rem',
      fontWeight: 'bold',
      color: '#2563eb',
      marginBottom: '0.25rem'
    },
    statLabel: {
      fontSize: isMobile ? '0.75rem' : '0.875rem',
      color: '#6b7280'
    },
    heroImage: {
      background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
      borderRadius: '1rem',
      padding: isMobile ? '1.5rem' : '2rem',
      boxShadow: '0 20px 25px rgba(0, 0, 0, 0.1)',
      position: 'relative',
      marginTop: isMobile ? '1rem' : '0'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '0.75rem',
      padding: isMobile ? '1rem' : '1.5rem',
      marginBottom: isMobile ? '1rem' : '1.5rem'
    },
    cardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1rem',
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '0.5rem' : '0'
    },
    cardTitle: {
      fontSize: isMobile ? '1rem' : '1.125rem',
      fontWeight: '600',
      color: '#1f2937'
    },
    badge: {
      backgroundColor: '#dcfce7',
      color: '#166534',
      padding: '0.25rem 0.75rem',
      borderRadius: '9999px',
      fontSize: '0.875rem',
      fontWeight: '500'
    },
    progressBar: {
      backgroundColor: '#f3f4f6',
      height: isMobile ? '0.75rem' : '1rem',
      borderRadius: '9999px',
      marginBottom: '1rem'
    },
    progress: {
      backgroundColor: '#3b82f6',
      height: '100%',
      borderRadius: '9999px',
      width: '80%'
    },
    scoreGrid: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: isMobile ? '0.75rem' : '0.875rem',
      color: '#6b7280',
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '0.25rem' : '0'
    },
    aiCard: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '0.75rem',
      padding: isMobile ? '1rem' : '1.5rem'
    },
    aiContent: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      flexDirection: isMobile ? 'column' : 'row',
      textAlign: isMobile ? 'center' : 'left'
    },
    aiIcon: {
      width: isMobile ? '32px' : '40px',
      height: isMobile ? '32px' : '40px',
      backgroundColor: '#3b82f6',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    },
    aiText: {
      fontWeight: '600',
      color: '#1f2937',
      fontSize: isMobile ? '0.875rem' : '1rem'
    },
    aiSubtext: {
      fontSize: isMobile ? '0.75rem' : '0.875rem',
      color: '#6b7280'
    }
  };

  return (
    <section id="home" style={styles.section}>
      <div style={styles.container}>
        {/* Left Content */}
        <div style={styles.content}>
          <h1 style={styles.title}>
            Master IELTS with
            <span style={styles.highlight}>Confidence</span>
          </h1>
          <p style={styles.description}>
            Achieve your target band score with our comprehensive IELTS preparation program. 
            Expert-designed courses, AI-powered practice tests, and personalized feedback to 
            help you succeed.
          </p>
          
          {/* CTA Buttons */}
          <div style={styles.buttonContainer}>
            <button style={styles.primaryButton}>
              Start Free Trial
            </button>
            <button style={styles.secondaryButton}>
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div style={styles.stats}>
            <div style={styles.stat}>
              <div style={styles.statNumber}>10K+</div>
              <div style={styles.statLabel}>Students Trained</div>
            </div>
            <div style={styles.stat}>
              <div style={styles.statNumber}>8.5</div>
              <div style={styles.statLabel}>Average Band Score</div>
            </div>
            <div style={styles.stat}>
              <div style={styles.statNumber}>95%</div>
              <div style={styles.statLabel}>Success Rate</div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div style={styles.heroImage}>
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h3 style={styles.cardTitle}>Practice Test</h3>
              <span style={styles.badge}>Band 8.0</span>
            </div>
            <div style={styles.progressBar}>
              <div style={styles.progress}></div>
            </div>
            <div style={styles.scoreGrid}>
              <span>Reading: 8.5</span>
              <span>Writing: 7.5</span>
            </div>
            <div style={{...styles.scoreGrid, marginTop: '0.5rem'}}>
              <span>Listening: 8.0</span>
              <span>Speaking: 8.0</span>
            </div>
          </div>
          
          <div style={styles.aiCard}>
            <div style={styles.aiContent}>
              <div style={styles.aiIcon}>
                <svg width={isMobile ? "16" : "20"} height={isMobile ? "16" : "20"} fill="white" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <div style={styles.aiText}>AI Feedback Ready</div>
                <div style={styles.aiSubtext}>Detailed analysis available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;