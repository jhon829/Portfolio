import { useRole } from '../context/RoleContext';
import './Experience.css';

const experienceByRole = {
  planner: {
    role: 'AI 서비스 기획 & 프로세스 설계',
    description: 'AI 기반 식품 마켓플레이스 서비스 기획 및 프로세스 설계',
    tasks: [
      'AI 매칭 시스템 서비스 기획 및 요구사항 정의',
      '멀티채널 주문 프로세스 분석 및 통합 시스템 설계',
      '고객 요구사항 분석 및 유저 피드백 기반 서비스 개선',
      'n8n 자동화 워크플로우 설계 및 업무 프로세스 최적화',
      'Notion 기반 프로젝트 관리 체계 도입 및 운영',
    ],
    skills: ['Notion', 'Figma', 'n8n', 'SQL', 'MS Office'],
  },
  developer: {
    role: '자동화 & 풀스택 개발',
    description: '식품 마켓플레이스 서비스 개발 및 업무 자동화',
    tasks: [
      '멀티채널(카카오톡, SMS, 엑셀) 주문을 단일 시스템으로 통합 자동화',
      'n8n 워크플로우 구축으로 수작업 주문처리 프로세스 제거',
      '시나브로G 서비스 DB 설계 및 React 기반 프론트엔드 개발',
      'Notion 기반 프로젝트 관리 체계 도입 및 운영',
    ],
    skills: ['n8n', 'React', 'Node.js', 'PostgreSQL', 'Docker'],
  },
};

// 수상 이력
const awards = [
  { year: '2025.08', title: 'HUSS 대학 융합창업대회', grade: '최우수상', activity: '뉴노멀 프로젝트', team: '아시소모', org: '홍익대학교 총장' },
  { year: '2025.08', title: '2025 세종 DX 해커톤', grade: '우수상', activity: '뉴노멀 프로젝트', team: '시나코드', org: '국립한밭대학교 총장' },
  { year: '2025.06', title: '메타버스 융합 SW 아카데미 프로젝트 발표회', grade: '최우수상', activity: '메타버스 아카데미 심화반', team: '아보라', org: '홍익대학교 총장' },
  { year: '2025.05', title: '한국스마트미디어학회 춘계학술대회', grade: '우수논문상', activity: 'LMS 챗봇 기반 코드 개발 지원 메커니즘', team: '', org: '한국스마트미디어학회' },
  { year: '2024.10', title: '제22회 창업아이템 경진대회', grade: '장려상', activity: '창업동아리', team: '스마트 위험감지', org: '홍익대학교 총장' },
  { year: '2020.10', title: '제18회 창업아이템 경진대회', grade: '우수상', activity: '창업동아리', team: '차곡차곡', org: '홍익대학교 총장' },
];

// 간트차트 데이터
const ganttActivities = [
  { title: '창업동아리', start: 0, width: 100, period: '2020 ~ 2025', color: '#818CF8' },
  { title: '자기주도학습동아리', start: 0, width: 71, period: '2020 ~ 2024', color: 'rgba(129, 140, 248, 0.5)' },
  { title: '메타버스 SW 아카데미', start: 43, width: 57, period: '2024 ~ 2025', color: '#818CF8' },
  { title: '교내 튜터링 · 멘토링', start: 43, width: 57, period: '2024 ~ 2025', color: '#818CF8' },
  { title: '뉴노멀 프로젝트', start: 71, width: 29, period: '2025', color: '#818CF8' },
];

const ganttYears = [
  { label: '2020', flex: 1 },
  { label: '군복무', flex: 0.5, isMilitary: true },
  { label: '2024', flex: 1 },
  { label: '2025', flex: 1 },
];

const Experience = () => {
  const role = useRole();
  const exp = experienceByRole[role];

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
              <div className="experience-card">
                <div className="exp-header">
                  <div className="exp-company-info">
                    <h4 className="exp-company">지존소프트</h4>
                    <span className="exp-role">{exp.role}</span>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-period">2024 ~ 현재</span>
                    <span className="exp-type">인턴 → 정규직 전환</span>
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
                        {award.year}{award.team && ` · ${award.team}`}{award.org && ` · ${award.org}`}
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
