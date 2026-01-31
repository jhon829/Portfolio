import './About.css';

const skills = [
  // Development
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'dev' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'dev' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'dev' },
  { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', category: 'dev' },

  // Database & Infra
  { name: 'MariaDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg', category: 'infra' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'infra' },

  // Tools
  { name: 'n8n', icon: 'https://n8n.io/favicon.ico', category: 'tool' },
  { name: 'Notion', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg', category: 'tool' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', category: 'tool' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'tool' },

  // AI
  { name: 'OpenAI', icon: 'https://openai.com/favicon.ico', category: 'ai' },
  { name: 'Claude', icon: 'https://claude.ai/favicon.ico', category: 'ai' },
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About</h2>

        <div className="about-content">
          <div className="about-image">
            {/* 프로필 이미지 영역 */}
            <div className="profile-image-placeholder">
              <span className="placeholder-text">프로필 사진</span>
              <span className="placeholder-desc">정장 또는 비즈니스 캐주얼<br/>밝은 배경, 상반신 컷</span>
            </div>
          </div>

          <div className="about-text">
            <p className="about-intro">
              안녕하세요, <strong>기획하고 직접 만드는 개발자</strong> 김동년입니다.
            </p>

            <p className="about-description">
              컴퓨터공학을 전공하며 대학 4년간 스타트업과 창업 동아리에서
              다양한 프로젝트를 경험했습니다. 단순히 코드를 작성하는 것을 넘어,
              <strong>문제를 정의하고 해결책을 기획</strong>하는 과정에서
              가장 큰 성취감을 느낍니다.
            </p>

            <p className="about-description">
              현재 지존소프트에서 <strong>n8n 자동화 워크플로우</strong>와
              <strong>AI 통합 시스템</strong>을 개발하며, 반복되는 업무를
              기술로 해결하는 일을 하고 있습니다.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🎯</span>
                <div className="highlight-content">
                  <span className="highlight-label">관심 분야</span>
                  <span className="highlight-value">서비스 기획 · 업무 자동화 · AI 통합</span>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">📜</span>
                <div className="highlight-content">
                  <span className="highlight-label">자격증</span>
                  <span className="highlight-value">ADSP · SQLD</span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills & Tools */}
          <div className="skills-section">
            <h3 className="skills-title">Skills & Tools</h3>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <img src={skill.icon} alt={skill.name} className="skill-icon" />
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
