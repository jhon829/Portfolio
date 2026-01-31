import { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [visibleItems, setVisibleItems] = useState(0);
  
  const flowItems = ['Plan', 'Build', 'Automate'];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleItems((prev) => {
        if (prev < flowItems.length) return prev + 1;
        clearInterval(timer);
        return prev;
      });
    }, 300);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-name">김동년</h1>
          <p className="hero-tagline">기획하고 직접 만드는 사람</p>
          
          <div className="hero-flow">
            {flowItems.map((item, index) => (
              <span key={item} className="flow-wrapper">
                <span 
                  className={`flow-item ${index < visibleItems ? 'visible' : ''}`}
                >
                  {item}
                </span>
                {index < flowItems.length - 1 && (
                  <span className={`flow-arrow ${index < visibleItems - 1 ? 'visible' : ''}`}>
                    →
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="hero-gradient" />
    </section>
  );
};

export default Hero;
