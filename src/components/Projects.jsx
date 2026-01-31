import './Projects.css';

const mainProjects = [
  {
    id: 1,
    title: '멀티채널 주문 자동화 시스템',
    category: '회사 실무',
    description:
      '카카오톡, SMS, 엑셀 등 다양한 채널로 들어오는 비정형 주문 데이터를 AI로 파싱하고 자동 처리하는 시스템',
    problem: '수작업으로 처리하던 주문 데이터로 인한 휴먼 에러와 시간 소모',
    solution: 'n8n + GPT API를 활용한 비정형 데이터 파싱 및 자동화 파이프라인 구축',
    result: '주문 처리 시간 대폭 단축, 에러율 감소',
    skills: ['n8n', 'GPT API', 'Node.js', 'MariaDB'],
    // 이미지 플레이스홀더 정보
    imagePlaceholder: {
      type: 'screenshot',
      description: 'n8n 워크플로우 화면 또는 시스템 아키텍처 다이어그램',
    },
  },
  {
    id: 2,
    title: 'Good Hands (인굿핸즈)',
    category: '산학협력',
    description:
      '북미 거주 재외동포 시니어를 위한 케어 서비스와 AI 기반 리포팅 플랫폼',
    problem: '해외 거주 한인 시니어의 건강/생활 상태를 가족에게 전달하기 어려움',
    solution: '케어 데이터를 수집하고 GPT로 자연어 리포트를 자동 생성하는 시스템 구축',
    result: '세종 DX 해커톤 우수상, HUSS 창업 경진대회 최우수상',
    skills: ['FastAPI', 'SQLAlchemy', 'MariaDB', 'n8n', 'GPT-3.5'],
    links: {
      // github: 'https://github.com/...',
    },
    imagePlaceholder: {
      type: 'mockup',
      description: '앱 UI 목업 또는 서비스 소개 이미지 (리포트 예시 화면)',
    },
  },
  {
    id: 3,
    title: 'AI Avatar Insight Platform',
    category: '사이드 프로젝트',
    description:
      '여러 AI 아바타가 대화하며 브레인스토밍하는 멀티에이전트 플랫폼',
    problem: '혼자서 다양한 관점으로 아이디어를 발전시키기 어려움',
    solution: '서로 다른 페르소나를 가진 AI 에이전트들이 토론하며 인사이트 도출',
    result: '창의적 아이디어 발굴 도구로 활용',
    skills: ['React', 'OpenAI API', 'Node.js'],
    imagePlaceholder: {
      type: 'screenshot',
      description: 'AI 아바타들이 대화하는 UI 화면',
    },
  },
];

const otherProjects = [
  { title: 'TeamTalk', description: 'IT 협업 시나리오용 멀티에이전트 AI 시스템' },
  { title: 'LinkCare', description: '북미 한인 시니어 케어 서비스 (인굿핸즈 협업)' },
  { title: '한국 주식 뉴스 자동화', description: 'n8n으로 매일 아침 카카오톡 브리핑 발송' },
  { title: '유튜브 쇼츠 자동화', description: '자동 영상 생성 워크플로우' },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>

        {/* 메인 프로젝트 */}
        <div className="projects-main">
          {mainProjects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-image">
                {/* 이미지 플레이스홀더 */}
                <div className="image-placeholder">
                  <span className="placeholder-type">{project.imagePlaceholder.type}</span>
                  <span className="placeholder-desc">{project.imagePlaceholder.description}</span>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-details">
                  <div className="detail-item">
                    <span className="detail-label">문제</span>
                    <span className="detail-value">{project.problem}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">해결</span>
                    <span className="detail-value">{project.solution}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">성과</span>
                    <span className="detail-value highlight">{project.result}</span>
                  </div>
                </div>

                <div className="project-skills">
                  {project.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <button className="link-btn primary">상세보기</button>
                  {project.links?.github && (
                    <a href={project.links.github} className="link-btn secondary" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* 기타 프로젝트 */}
        <div className="projects-other">
          <h3 className="subsection-title">Other Projects</h3>
          <div className="other-grid">
            {otherProjects.map((project, index) => (
              <div key={index} className="other-card">
                <h4 className="other-title">{project.title}</h4>
                <p className="other-description">{project.description}</p>
              </div>
            ))}
          </div>
          <a href="#" className="view-more-link">
            모든 프로젝트 보기 →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
