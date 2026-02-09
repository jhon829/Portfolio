import './About.css';

const skillCategories = [
  {
    title: '개발',
    subcategories: [
      {
        label: 'Frontend',
        skills: [
          { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
          { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        ]
      },
      {
        label: 'Backend',
        skills: [
          { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
          { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
          { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
        ]
      },
      {
        label: 'Database',
        skills: [
          { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        ]
      },
      {
        label: 'DevOps',
        skills: [
          { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
          { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        ]
      },
    ]
  },
  {
    title: '자동화 · AI',
    skills: [
      { name: 'n8n', icon: 'https://n8n.io/favicon.ico' },
      { name: 'Claude Code', icon: 'https://claude.ai/favicon.ico' },
    ]
  },
  {
    title: '기획 · 협업 · 디자인',
    skills: [
      { name: 'Notion', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'MS Office', icon: 'https://img.icons8.com/color/48/microsoft-office-2019.png' },
    ]
  },
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About</h2>

        <div className="about-content">
          <div className="about-image">
            <img src="/profile.jpg" alt="김동년 프로필" className="profile-image" />
          </div>

          <div className="about-text">
            <p className="about-intro">
              <strong>기획하고 직접 만드는 개발자</strong>, 김동년입니다.
            </p>

            <p className="about-description">
              컴퓨터공학 전공, 대학 재학 중 스타트업과 창업 동아리에서<br />
              <strong>기획부터 개발까지</strong> End-to-End로 프로젝트를 진행했습니다.
            </p>

            <p className="about-description">
              현재 지존소프트에서 <strong>업무 프로세스를 기획</strong>하고,<br />
              <strong>AI와 함께 개발</strong>하며, <strong>n8n으로 자동화</strong>하는 일을 하고 있습니다.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-label">관심 분야</span>
                <span className="highlight-value">서비스 기획 · 업무 자동화 · AI 통합</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-label">자격증</span>
                <span className="highlight-value">ADSP · SQLD</span>
              </div>
            </div>
          </div>

          {/* Skills & Tools */}
          <div className="skills-section">
            <h3 className="skills-title">Skills & Tools</h3>
            <div className="skills-categories">
              {skillCategories.map((category) => (
                <div key={category.title} className="skill-category">
                  <h4 className="category-title">{category.title}</h4>
                  {category.subcategories ? (
                    <div className="subcategories">
                      {category.subcategories.map((sub) => (
                        <div key={sub.label} className="subcategory">
                          <span className="subcategory-label">{sub.label}</span>
                          <div className="skill-list">
                            {sub.skills.map((skill) => (
                              <div key={skill.name} className="skill-item">
                                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                                <span className="skill-name">{skill.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="skill-list">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="skill-item">
                          <img src={skill.icon} alt={skill.name} className="skill-icon" />
                          <span className="skill-name">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
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
