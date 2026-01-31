import './Experience.css';

const experiences = [
  {
    company: '지존소프트',
    role: 'Software Developer',
    period: '2024 ~ 현재',
    type: '인턴 → 정규직 전환',
    description: '식품 마켓플레이스 서비스 개발 및 업무 자동화 시스템 구축',
    tasks: [
      'n8n 기반 자동화 워크플로우 설계 및 개발',
      '멀티채널(카카오톡, SMS, 엑셀) 주문 통합 처리 시스템 구축',
      '시나브로G 서비스 DB 설계 및 프론트엔드 개발',
      'Notion 기반 프로젝트 관리 체계 구축',
    ],
    skills: ['n8n', 'React', 'Node.js', 'MariaDB', 'Docker'],
  },
];

const activities = [
  {
    title: 'IT 스터디 그룹 운영',
    period: '2024',
    description: 'PM, 디자이너, 개발자 지망생 대상 협업과 AI 도구 활용 교육',
  },
  {
    title: '뉴노멀 프로젝트 (홍익대학교 산학협력)',
    period: '2025.01 ~ 2025.09',
    description: '인굿핸즈 스타트업과 협업하여 시니어 케어 서비스 개발',
  },
  {
    title: '스타트업/창업 동아리',
    period: '대학 4년',
    description: '다양한 경진대회 참여 및 실제 스타트업과 협업 경험',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2 className="section-title">Experience</h2>

        <div className="experience-grid">
          {/* 경력 섹션 */}
          <div className="experience-main">
            <h3 className="subsection-title">경력</h3>
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="exp-header">
                  <div className="exp-company-info">
                    <h4 className="exp-company">{exp.company}</h4>
                    <span className="exp-role">{exp.role}</span>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-period">{exp.period}</span>
                    <span className="exp-type">{exp.type}</span>
                  </div>
                </div>

                <p className="exp-description">{exp.description}</p>

                <ul className="exp-tasks">
                  {exp.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>

                <div className="exp-skills">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 활동 섹션 */}
          <div className="experience-side">
            <h3 className="subsection-title">활동</h3>
            <div className="activities-list">
              {activities.map((activity, index) => (
                <div key={index} className="activity-item">
                  <div className="activity-header">
                    <h4 className="activity-title">{activity.title}</h4>
                    <span className="activity-period">{activity.period}</span>
                  </div>
                  <p className="activity-description">{activity.description}</p>
                </div>
              ))}
            </div>

            {/* 인프라 경험 */}
            <div className="infra-section">
              <h3 className="subsection-title">인프라 운영</h3>
              <div className="infra-card">
                <div className="infra-icon">
                  {/* 서버 아이콘 플레이스홀더 */}
                  <span>🖥️</span>
                </div>
                <div className="infra-content">
                  <h4>Mac Mini 홈서버</h4>
                  <p>Docker 기반 다중 웹사이트 호스팅</p>
                  <span className="infra-detail">동물병원, 약국 등 클라이언트 사이트 운영 · SSL 관리</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
