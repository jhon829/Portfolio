import './Landing.css';

const roles = [
  {
    key: 'planner',
    title: '서비스 기획자',
    subtitle: '사용자를 이해하고, 서비스를 설계합니다',
    tags: ['서비스 기획', '유저 리서치', 'AI 서비스 설계'],
    href: '/planner',
  },
  {
    key: 'developer',
    title: '풀스택 개발자',
    subtitle: '기획하고, 만들고, 자동화합니다',
    tags: ['React', 'Node.js', 'n8n 자동화'],
    href: '/developer',
  },
];

const Landing = () => {
  return (
    <div className="landing">
      <section className="landing-frame">
        <div className="landing-content">
          <p className="landing-greeting">안녕하세요</p>
          <h1 className="landing-name">김동년</h1>
          <p className="landing-desc">어떤 포트폴리오를 보시겠어요?</p>

          <div className="landing-cards">
            {roles.map((role) => (
              <a key={role.key} href={role.href} className="role-card">
                <h2 className="role-title">{role.title}</h2>
                <p className="role-subtitle">{role.subtitle}</p>
                <div className="role-tags">
                  {role.tags.map((tag) => (
                    <span key={tag} className="role-tag">{tag}</span>
                  ))}
                </div>
                <span className="role-arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
