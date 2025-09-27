import React, { useState, useEffect } from 'react';

const Testimonials = () => {
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
      padding: isMobile ? '3rem 0' : isTablet ? '4rem 0' : '5rem 0',
      backgroundColor: '#f8fafc'
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
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : 'repeat(3, 1fr)',
      gap: isMobile ? '1.5rem' : '2rem',
      marginBottom: isMobile ? '3rem' : '4rem'
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '1rem',
      padding: isMobile ? '1.5rem' : '2rem',
      border: '1px solid #e5e7eb',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    cardHover: {
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      transform: 'translateY(-2px)'
    },
    quote: {
      fontSize: isMobile ? '0.875rem' : '1rem',
      color: '#374151',
      lineHeight: '1.6',
      marginBottom: '1.5rem',
      fontStyle: 'italic'
    },
    author: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      flexDirection: isMobile ? 'column' : 'row',
      textAlign: isMobile ? 'center' : 'left'
    },
    avatar: {
      width: isMobile ? '48px' : '56px',
      height: isMobile ? '48px' : '56px',
      borderRadius: '50%',
      backgroundColor: '#e5e7eb',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: isMobile ? '1.125rem' : '1.25rem',
      fontWeight: 'bold',
      color: '#6b7280'
    },
    authorInfo: {
      flex: 1
    },
    authorName: {
      fontSize: isMobile ? '1rem' : '1.125rem',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '0.25rem'
    },
    authorDetails: {
      fontSize: isMobile ? '0.75rem' : '0.875rem',
      color: '#6b7280',
      marginBottom: '0.5rem'
    },
    rating: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem',
      justifyContent: isMobile ? 'center' : 'flex-start'
    },
    star: {
      width: '16px',
      height: '16px',
      fill: '#fcd34d'
    },
    bandScore: {
      display: 'inline-block',
      backgroundColor: '#dcfce7',
      color: '#166534',
      padding: '0.25rem 0.75rem',
      borderRadius: '9999px',
      fontSize: '0.875rem',
      fontWeight: '600',
      marginLeft: isMobile ? '0' : '0.5rem',
      marginTop: isMobile ? '0.5rem' : '0'
    },
    statsSection: {
      backgroundColor: '#ffffff',
      borderRadius: '1rem',
      padding: isMobile ? '2rem 1rem' : '3rem 2rem',
      border: '1px solid #e5e7eb'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
      gap: isMobile ? '1.5rem' : '2rem'
    },
    stat: {
      textAlign: 'center'
    },
    statNumber: {
      fontSize: isMobile ? '1.75rem' : isTablet ? '2rem' : '2.25rem',
      fontWeight: 'bold',
      color: '#2563eb',
      marginBottom: '0.5rem'
    },
    statLabel: {
      fontSize: isMobile ? '0.875rem' : '1rem',
      color: '#6b7280',
      fontWeight: '500'
    }
  };

  const testimonials = [
    {
      quote: "The AI-powered practice tests were incredibly accurate. I scored exactly what the system predicted - Band 8.5! The speaking practice sessions really helped me improve my pronunciation and fluency.",
      author: "Sarah Chen",
      details: "Software Engineer, Canada",
      rating: 5,
      bandScore: "8.5",
      avatar: "SC"
    },
    {
      quote: "I improved from Band 6.0 to 8.0 in just 3 months! The expert courses are well-structured and the mock tests gave me the confidence I needed for the actual exam.",
      author: "Ahmed Hassan",
      details: "Medical Student, UAE",
      rating: 5,
      bandScore: "8.0",
      avatar: "AH"
    },
    {
      quote: "The personalized feedback after each practice test was invaluable. I could see exactly where I needed to improve. Highly recommend this academy to anyone serious about IELTS.",
      author: "Maria Rodriguez",
      details: "Business Analyst, Spain",
      rating: 5,
      bandScore: "7.5",
      avatar: "MR"
    }
  ];

  const stats = [
    { number: "15,000+", label: "Students Trained" },
    { number: "8.2", label: "Average Band Score" },
    { number: "94%", label: "Success Rate" },
    { number: "50+", label: "Countries Served" }
  ];

  return (
    <section id="testimonials" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>What Our Students Say</h2>
          <p style={styles.subtitle}>
            Don't just take our word for it. Here's what our successful students have to say 
            about their IELTS journey with us.
          </p>
        </div>

        <div style={styles.grid}>
          {testimonials.map((testimonial, index) => (
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
              <p style={styles.quote}>"{testimonial.quote}"</p>
              <div style={styles.author}>
                <div style={styles.avatar}>{testimonial.avatar}</div>
                <div style={styles.authorInfo}>
                  <div style={styles.authorName}>{testimonial.author}</div>
                  <div style={styles.authorDetails}>{testimonial.details}</div>
                  <div style={styles.rating}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} style={styles.star} viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                    <span style={styles.bandScore}>Band {testimonial.bandScore}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.statsSection}>
          <div style={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} style={styles.stat}>
                <div style={styles.statNumber}>{stat.number}</div>
                <div style={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;