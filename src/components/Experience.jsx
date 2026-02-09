import './Experience.css';

const experiences = [
  {
    company: '지존소프트',
    role: '자동화 & 풀스택 개발',
    period: '2024 ~ 현재',
    type: '인턴 → 정규직 전환',
    description: '식품 마켓플레이스 서비스 개발 및 업무 자동화',
    tasks: [
      '멀티채널(카카오톡, SMS, 엑셀) 주문을 단일 시스템으로 통합 자동화',
      'n8n 워크플로우 구축으로 수작업 주문처리 프로세스 제거',
      '시나브로G 서비스 DB 설계 및 React 기반 프론트엔드 개발',
      'Notion 기반 프로젝트 관리 체계 도입 및 운영',
    ],
    skills: ['n8n', 'React', 'Node.js', 'PostgreSQL', 'Docker'],
  },
];

// 수상 이력
const awards = [
  { year: '2025', title: 'HUSS 디지털 창업 경진대회', grade: '최우수', activity: '뉴노멀 프로젝트' },
  { year: '2025', title: '세종 DX 해커톤', grade: '우수상', activity: '뉴노멀 프로젝트' },
  { year: '2025', title: '교내 창업아이템 경진대회', grade: '장려상', activity: '창업동아리' },
  { year: '2025', title: '메타버스 아카데미', grade: '최우수팀', activity: '심화반' },
  { year: '2024', title: '자기주도학습 동아리', grade: '최우수', activity: '' },
  { year: '2020', title: '교내 창업아이템 경진대회', grade: '우수상', activity: '창업동아리' },
];

// 간트차트 데이터 (2020 | 군복무 | 2024 | 2025, 비율 1:0.5:1:1 = 총 3.5)
// 2020: 0~28.6%, 군복무: 28.6~42.9%, 2024: 42.9~71.4%, 2025: 71.4~100%
const ganttActivities = [
  { title: '창업동아리', start: 0, width: 100, period: '2020 ~ 2025', color: '#818CF8' },
  { title: '자기주도학습동아리', start: 0, width: 71, period: '2020 ~ 2024', color: 'rgba(129, 140, 248, 0.5)' },
  { title: '메타버스 SW 아카데미', start: 43, width: 57, period: '2024 ~ 2025', color: '#818CF8' },
  { title: '교내 튜터링 · 멘토링', start: 43, width: 57, period: '2024 ~ 2025', color: '#818CF8' },
  { title: '뉴노멀 프로젝트', start: 71, width: 29, period: '2025', color: '#818CF8' },
];

// flex 비율: 2020(1), 군복무(0.5), 2024(1), 2025(1)
const ganttYears = [
  { label: '2020', flex: 1 },
  { label: '군복무', flex: 0.5, isMilitary: true },
  { label: '2024', flex: 1 },
  { label: '2025', flex: 1 },
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2 className="section-title">Experience</h2>

        <div className="experience-grid">
          {/* 경력 + 수상 상단 영역 */}
          <div className="experience-top">
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

            {/* 수상 섹션 */}
            <div className="awards-section">
              <h3 className="subsection-title">수상</h3>
              <div className="awards-list">
                {awards.map((award, index) => (
                  <div key={index} className="award-item">
                    <span className="award-icon">🏆</span>
                    <div className="award-content">
                      <div className="award-header">
                        <span className="award-title">{award.title}</span>
                        <span className="award-grade">{award.grade}</span>
                      </div>
                      <span className="award-meta">
                        {award.year}{award.activity && ` · ${award.activity}`}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 활동 간트차트 */}
          <div className="activities-section">
            <h3 className="subsection-title">활동</h3>
            <div className="gantt-chart">
              <div className="gantt-header">
                {ganttYears.map((year) => (
                  <span
                    key={year.label}
                    className={`gantt-year ${year.isMilitary ? 'military' : ''}`}
                    style={{ flex: year.flex }}
                  >
                    {year.label}
                  </span>
                ))}
              </div>
              <div className="gantt-body">
                {ganttActivities.map((activity, index) => (
                  <div key={index} className="gantt-row">
                    <div className="gantt-label">{activity.title}</div>
                    <div className="gantt-track">
                      <div
                        className={`gantt-bar ${activity.ongoing ? 'ongoing' : ''}`}
                        style={{
                          left: `${activity.start}%`,
                          width: `${activity.width}%`,
                          background: activity.color,
                        }}
                      >
                        <span className="gantt-period">{activity.period}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
