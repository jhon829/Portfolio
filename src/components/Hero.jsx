import { useRole } from '../context/RoleContext';
import './Hero.css';

const content = {
  planner: {
    headline: '사용자를 이해하고, 서비스를 설계합니다',
    name: '서비스 기획자 김동년',
    keywords: ['유저 리서치', '서비스 설계', 'AI 서비스 기획'],
  },
  developer: {
    headline: '기획하고, 만들고, 자동화합니다',
    name: '풀스택 개발자 김동년',
    keywords: null,
  },
};

const Hero = () => {
  const role = useRole();
  const { headline, name, keywords } = content[role];

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-status">Available for Work</span>
          <h1 className="hero-headline">{headline}</h1>
          <p className="hero-name">{name}</p>
          {keywords && (
            <div className="hero-keywords">
              {keywords.map((kw) => (
                <span key={kw} className="hero-keyword">{kw}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
