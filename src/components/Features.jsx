import React, { useState, useEffect } from 'react';

const Features = () => {
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
      padding: isMobile ? '2rem 0' : isTablet ? '3rem 0' : '4rem 0',
      backgroundColor: '#ffffff'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: isMobile ? '0 0.75rem' : isTablet ? '0 1rem' : '0 1rem'
    },
    header: {
      textAlign: 'center',
      marginBottom: isMobile ? '2.5rem' : isTablet ? '3rem' : '4rem'
    },
    title: {
      fontSize: isMobile ? '1.75rem' : isTablet ? '2.25rem' : '2.5rem',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: isMobile ? '0.75rem' : '1rem'
    },
    subtitle: {
      fontSize: isMobile ? '1rem' : isTablet ? '1.125rem' : '1.25rem',
      color: '#6b7280',
      maxWidth: isMobile ? '100%' : '600px',
      margin: '0 auto',
      lineHeight: '1.6'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
      gap: isMobile ? '1.5rem' : isTablet ? '2rem' : '2rem'
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '1rem',
      padding: isMobile ? '1.5rem' : '2rem',
      textAlign: 'center',
      border: '1px solid #e5e7eb',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    cardHover: {
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      transform: 'translateY(-2px)'
    },
    iconContainer: {
      width: isMobile ? '60px' : '70px',
      height: isMobile ? '60px' : '70px',
      backgroundColor: '#eff6ff',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1.5rem',
      transition: 'all 0.3s ease'
    },
    cardTitle: {
      fontSize: isMobile ? '1.25rem' : '1.5rem',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '1rem'
    },
    cardDescription: {
      fontSize: isMobile ? '0.875rem' : '1rem',
      color: '#6b7280',
      lineHeight: '1.6',
      marginBottom: '1.5rem'
    },
    features: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    feature: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '0.75rem',
      fontSize: isMobile ? '0.875rem' : '0.875rem',
      color: '#374151'
    },
    checkIcon: {
      width: '16px',
      height: '16px',
      marginRight: '0.5rem',
      color: '#10b981'
    },
    ctaSection: {
      backgroundColor: '#f8fafc',
      marginTop: isMobile ? '3rem' : '4rem',
      padding: isMobile ? '2rem 1rem' : '3rem 2rem',
      borderRadius: '1rem',
      textAlign: 'center'
    },
    ctaTitle: {
      fontSize: isMobile ? '1.5rem' : isTablet ? '1.75rem' : '2rem',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: isMobile ? '0.75rem' : '1rem'
    },
    ctaText: {
      fontSize: isMobile ? '1rem' : '1.125rem',
      color: '#6b7280',
      marginBottom: isMobile ? '1.5rem' : '2rem',
      maxWidth: isMobile ? '100%' : '600px',
      margin: isMobile ? '0 auto 1.5rem' : '0 auto 2rem'
    },
    ctaButton: {
      backgroundColor: '#2563eb',
      color: 'white',
      padding: isMobile ? '0.75rem 2rem' : '1rem 2.5rem',
      borderRadius: '0.5rem',
      border: 'none',
      fontSize: isMobile ? '1rem' : '1.125rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      width: isMobile ? '100%' : 'auto'
    }
  };

  const features = [
    {
      icon: (
        <svg width={isMobile ? "28" : "32"} height={isMobile ? "28" : "32"} fill="#2563eb" viewBox="0 0 20 20">
          <path d="M7 4V2a1 1 0 011-1h4a1 1 0 011 1v2h4a1 1 0 110 2h-1v10a2 2 0 01-2 2H6a2 2 0 01-2-2V6H3a1 1 0 010-2h4zM9 3v1h2V3H9zm-2 3v8h6V6H7zm2 2a1 1 0 112 0v4a1 1 0 11-2 0V8z"/>
        </svg>
      ),
      title: "Speaking Practice",
      description: "Interactive speaking sessions with AI feedback and pronunciation analysis.",
      features: [
        "Real-time pronunciation scoring",
        "Speaking test simulations",
        "Vocabulary enhancement",
        "Accent training modules"
      ]
    },
    {
      icon: (
        <svg width={isMobile ? "28" : "32"} height={isMobile ? "28" : "32"} fill="#2563eb" viewBox="0 0 20 20">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 001 1h6a1 1 0 001-1V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 2a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
        </svg>
      ),
      title: "Mock Tests",
      description: "Full-length IELTS practice tests with detailed performance analytics.",
      features: [
        "Official test format",
        "Timed practice sessions",
        "Performance tracking",
        "Instant score reports"
      ]
    },
    {
      icon: (
        <svg width={isMobile ? "28" : "32"} height={isMobile ? "28" : "32"} fill="#2563eb" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
      ),
      title: "AI Band Score",
      description: "Advanced AI technology predicts your IELTS band score with 95% accuracy.",
      features: [
        "Instant band prediction",
        "Skill-wise analysis",
        "Improvement recommendations",
        "Progress tracking"
      ]
    },
    {
      icon: (
        <svg width={isMobile ? "28" : "32"} height={isMobile ? "28" : "32"} fill="#2563eb" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
        </svg>
      ),
      title: "Expert Courses",
      description: "Comprehensive courses designed by IELTS experts and certified trainers.",
      features: [
        "Expert-designed curriculum",
        "Video tutorials",
        "Study materials",
        "24/7 support"
      ]
    }
  ];

  return (
    <section id="features" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Why Choose Our IELTS Academy?</h2>
          <p style={styles.subtitle}>
            Our comprehensive approach combines cutting-edge technology with proven teaching methods 
            to help you achieve your target IELTS band score efficiently.
          </p>
        </div>

        <div style={styles.grid}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              style={styles.card}
              onMouseEnter={(e) => {
                Object.assign(e.currentTarget.style, styles.cardHover);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <div style={styles.iconContainer}>
                {feature.icon}
              </div>
              <h3 style={styles.cardTitle}>{feature.title}</h3>
              <p style={styles.cardDescription}>{feature.description}</p>
              <ul style={styles.features}>
                {feature.features.map((item, idx) => (
                  <li key={idx} style={styles.feature}>
                    <svg style={styles.checkIcon} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={styles.ctaSection}>
          <h3 style={styles.ctaTitle}>Ready to Start Your IELTS Journey?</h3>
          <p style={styles.ctaText}>
            Join thousands of successful students who achieved their target band scores with our proven methodology. 
            Start your free trial today and experience the difference.
          </p>
          <button style={styles.ctaButton}>
            Get Started Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;