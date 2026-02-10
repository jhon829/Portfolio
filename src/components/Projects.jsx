import { useState } from 'react';
import './Projects.css';

const featuredProject = {
  title: '시나브로G',
  subtitle: 'AI 기반 다채널 주문 관리 플랫폼',
  category: '회사 실무 · B2B SaaS',
  description:
    '엑셀, 문자, 이미지 등 다양한 채널의 비정형 주문을 AI로 자동 매칭하고 ERP에 반영하는 주문 관리 시스템. 실제 식자재 유통 고객사에서 운영 중.',
  period: '2025.09 ~ 현재',
  role: '웹 메인 개발자 / AI 서비스 기획',
  stats: [
    { value: '20분 → 2분', label: '주문 처리 시간 (200건)' },
    { value: '97%', label: '매칭 정확도' },
    { value: '192개', label: 'API 엔드포인트' },
    { value: '484 커밋', label: '기여도 53%' },
  ],
  problem: '고객 주문서의 품목명과 ERP 품목명이 불일치 (예: "소 국거리" → "한우 국거리용 1kg")',
  solution: '7단계 우선순위 매칭 + 자연어 사전 학습 시스템으로 자동화 파이프라인 구축',
  result: '매칭 정확도 50% → 97% 달성, 일 200건+ 주문 · 거래처 6개 실서비스 운영 중',
  skills: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'n8n', 'Claude API', 'Google Vision'],
  links: {
    live: 'https://mokwon.sinabrog.io',
  },
  architecture: [
    { label: '입력', items: ['엑셀', '문자(SMS)', '이미지(OCR)'] },
    { label: '처리', items: ['JSON 표준화', 'n8n 워크플로우', '7단계 매칭'] },
    { label: '출력', items: ['웹 리포트', '관리자 승인', 'ERP 반영'] },
  ],
  details: {
    evolution: [
      { stage: '초기', desc: '정확 일치만', accuracy: '~50%' },
      { stage: '1차', desc: 'AI 자연어 → 보편적 식재료명 변환', accuracy: '~60%' },
      { stage: '2차', desc: '최근 주문 기반 매칭 추가', accuracy: '~75%' },
      { stage: '3차', desc: '작업자 매칭 이력 DB 저장', accuracy: '~85%' },
      { stage: '4차', desc: 'n8n 테이블 노드 캐시화', accuracy: '~90%' },
      { stage: '5차', desc: '자연어 사전 + 7단계 우선순위', accuracy: '96-97%' },
    ],
    contributions: [
      {
        title: '자연어 사전 시스템',
        desc: '작업자가 매칭한 자연어 → 품목 관계를 DB에 자동 저장. 동일 주문 시 즉시 매칭되는 학습형 시스템. 매칭률 90% → 97% 달성의 핵심 요소.',
      },
      {
        title: 'n8n 워크플로우 설계',
        desc: '엑셀/문자/이미지 주문 처리, 외부주문 알림톡 발송, DB 캐시 스케줄링 등 5개+ 핵심 워크플로우 설계 및 구현.',
      },
      {
        title: '팀 협업 환경 구축',
        desc: '개발 경험 부족한 팀원 2명을 위한 프로젝트 구조화, 백업 자동화, Claude Code 스킬 10개 개발.',
      },
    ],
    challenges: [
      {
        title: '다채널 입력 통합',
        problem: '엑셀, 문자, 이미지 등 다양한 형식의 주문',
        solution: '프론트에서 JSON 표준화 → n8n 단일 워크플로우로 처리',
      },
      {
        title: 'DB 부하 최적화',
        problem: '매 요청마다 1만건+ 품목 DB 조회 시 성능 저하',
        solution: 'n8n 테이블 노드 캐시 + 스케줄링 갱신 → DB 부하 90% 감소',
      },
    ],
  },
};

const subProjects = [
  {
    id: 1,
    title: 'Good Hands',
    category: '산학협력 · 시니어 케어',
    description: '재외동포 시니어를 위한 케어 서비스. AI가 돌봄 데이터를 따뜻한 말투의 리포트로 변환하여 해외 자녀에게 전달.',
    role: '서비스 기획 50% + 백엔드 100% + AI 리포트 기획/개발',
    result: '세종 DX해커톤 우수상, HUSS 창업 경진대회 최우수상',
    skills: ['FastAPI', 'SQLAlchemy', 'MariaDB', 'n8n', 'GPT-3.5'],
    links: {
      github: 'https://github.com/jhon829/sinabro',
    },
    period: '2025.01 ~ 2025.09',
    details: {
      insight: '서비스 타겟은 "시니어"가 아니라 "해외에 있는 자녀". 죄책감 해소 + 안심 제공이 핵심 가치. 관계자 인터뷰와 협업기업(인굿핸즈)의 도메인 지식을 통해 기획.',
      aiReport: {
        title: 'AI 리포트 시스템 (100% 기획/개발)',
        flow: '케어기버 퇴근 → n8n 웹훅 트리거 → 체크리스트/돌봄노트 조회 → GPT-3.5가 따뜻한 말투로 리포트 생성 → 가디언에게 알림. 단순 경과 보고가 아닌, 자녀가 부모님께 연락하도록 유도하는 장치까지 설계.',
        example: '"할머니께서 요즘 식사를 정말 잘 드시고 계세요. 지난주보다 드시는 양이 늘어서 영양상태가 많이 좋아지셨어요."',
      },
      db: '18개 테이블 (사용자, 요양원, 돌봄세션, 체크리스트, 돌봄노트, AI리포트, 알림)',
      checklist: '영양상태 · 고혈압관리 · 우울증 3개 카테고리, 4점 척도, 이전 3주 트렌드 분석',
      integrity: '의료 데이터 특성상 수정/삭제 방지 — is_final 플래그 + API 레벨 차단 (403)',
    },
  },
  {
    id: 2,
    title: 'AI Avatar Insight',
    category: '메타버스 SW 아카데미 · 멀티에이전트',
    description: '다중 AI 아바타가 사용자의 아이디어에 대해 서로 대화하며 다양한 관점의 인사이트를 제공하는 대화형 브레인스토밍 플랫폼.',
    role: '서비스 기획 + 백엔드 개발 + AI 오케스트레이션 + n8n 워크플로우',
    result: '메타버스 SW 아카데미 최우수팀 선정',
    skills: ['FastAPI', 'Python', 'AutoGen', 'OpenAI', 'Gemini', 'Perplexity Sonar'],
    links: {
      github: 'https://github.com/jhon829/abora_backend',
    },
    period: '2025.01 ~ 2025.05',
    details: {
      personas: [
        { name: '분석형 (상균)', desc: 'GPT 기반, 데이터와 논리 중심 분석' },
        { name: '직관형 (채영)', desc: 'Gemini 기반, UX 전략과 감성적 조언' },
      ],
      flow: '사실 확인 → 가정 검증 → 패러다임 전환의 3단계 대화 구조. 실제 사람의 브레인스토밍 패턴을 연구하여 설계.',
      tech: 'AutoGen 기반 멀티모델 오케스트레이션 (GPT + Gemini), Perplexity Sonar API로 질문 강화/키워드 분류/시장 분석 전처리, n8n으로 질문 분류 → 전문가(기획자/디자이너/개발자) 라우팅',
      learning: '막연한 아이디어를 초기 창업가/마케터로 타겟 구체화. 기획 의도를 스토리보드로 시각화하여 소통. 기획 이상과 기술적 현실 사이의 타협점 찾기(다양한 리액션 → 시선 추적으로 대체).',
    },
  },
];

const otherProjects = [
  {
    title: 'Shorts Factory',
    description: '리서치 → 스크립트 → 영상 → 업로드 자동화 AI 플랫폼',
    skills: ['React', 'FastAPI', 'PostgreSQL', 'n8n', 'Docker'],
    github: 'https://github.com/jhon829/trend-web-builder',
  },
  {
    title: '전공 추천 시스템',
    description: 'Gemini AI 기반 IT 전공 적성 추천 앱',
    skills: ['Flutter', 'Firebase', 'Gemini'],
    github: 'https://github.com/jhon829/majortest',
  },
  {
    title: 'Portfolio',
    description: 'React + Vite 기반 개인 포트폴리오 웹사이트',
    skills: ['React', 'Vite', 'CSS'],
    github: 'https://github.com/jhon829/portfolio',
  },
];

const Projects = () => {
  const [featuredExpanded, setFeaturedExpanded] = useState(false);
  const [expandedSub, setExpandedSub] = useState(null);

  const toggleSub = (id) => {
    setExpandedSub(expandedSub === id ? null : id);
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>

        {/* Featured Project - 시나브로G */}
        <article className="featured-project">
          <div className="featured-content">
            <div className="featured-header">
              <span className="project-category">{featuredProject.category}</span>
              <h3 className="featured-title">
                {featuredProject.title}
                <span className="featured-subtitle"> — {featuredProject.subtitle}</span>
              </h3>
              <p className="featured-meta">{featuredProject.period} · {featuredProject.role}</p>
            </div>

            <p className="featured-description">{featuredProject.description}</p>

            <div className="stats-grid">
              {featuredProject.stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="project-details">
              <div className="detail-item">
                <span className="detail-label">문제</span>
                <span className="detail-value">{featuredProject.problem}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">해결</span>
                <span className="detail-value">{featuredProject.solution}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">성과</span>
                <span className="detail-value highlight">{featuredProject.result}</span>
              </div>
            </div>

            <div className="project-skills">
              {featuredProject.skills.map((skill) => (
                <span key={skill} className="skill-badge">{skill}</span>
              ))}
            </div>

            <div className="project-actions">
              <button
                className={`expand-btn ${featuredExpanded ? 'expanded' : ''}`}
                onClick={() => setFeaturedExpanded(!featuredExpanded)}
              >
                {featuredExpanded ? '접기' : '상세보기'}
                <span className="expand-icon">{featuredExpanded ? '−' : '+'}</span>
              </button>
              {featuredProject.links && (
                <>
                  {featuredProject.links.live && (
                    <a href={featuredProject.links.live} target="_blank" rel="noopener noreferrer" className="project-link">Live ↗</a>
                  )}
                  {featuredProject.links.github && (
                    <a href={featuredProject.links.github} target="_blank" rel="noopener noreferrer" className="project-link">GitHub ↗</a>
                  )}
                </>
              )}
            </div>
          </div>

          {/* 시스템 구성도 */}
          <div className="featured-visual">
            <div className="architecture-diagram">
              <span className="diagram-title">System Flow</span>
              {featuredProject.architecture.map((step, index) => (
                <div key={index} className="arch-step">
                  <span className="arch-label">{step.label}</span>
                  <div className="arch-items">
                    {step.items.map((item, i) => (
                      <span key={i} className="arch-item">{item}</span>
                    ))}
                  </div>
                  {index < featuredProject.architecture.length - 1 && (
                    <span className="arch-arrow">↓</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* Featured 펼침 영역 */}
        <div className={`expand-section ${featuredExpanded ? 'open' : ''}`}>
          <div className="expand-content">
            <div className="expand-block">
              <h4 className="expand-block-title">매칭 시스템 발전 과정</h4>
              <div className="evolution-timeline">
                {featuredProject.details.evolution.map((step, index) => (
                  <div key={index} className="evolution-step">
                    <span className="evo-stage">{step.stage}</span>
                    <span className="evo-desc">{step.desc}</span>
                    <span className="evo-accuracy">{step.accuracy}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="expand-block">
              <h4 className="expand-block-title">100% 내 기여</h4>
              <div className="contributions-grid">
                {featuredProject.details.contributions.map((item, index) => (
                  <div key={index} className="contribution-card">
                    <h5 className="contrib-title">{item.title}</h5>
                    <p className="contrib-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="expand-block">
              <h4 className="expand-block-title">기술적 도전</h4>
              <div className="challenges-list">
                {featuredProject.details.challenges.map((item, index) => (
                  <div key={index} className="challenge-item">
                    <span className="challenge-title">{item.title}</span>
                    <div className="challenge-detail">
                      <span className="challenge-problem">{item.problem}</span>
                      <span className="challenge-arrow">→</span>
                      <span className="challenge-solution">{item.solution}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sub Projects - Good Hands & AI Avatar */}
        <div className="sub-projects">
          {subProjects.map((project) => (
            <article key={project.id} className="sub-card">
              <div className="sub-header">
                <span className="project-category">{project.category}</span>
                <h3 className="sub-title">{project.title}</h3>
                <span className="sub-period">{project.period}</span>
              </div>
              <p className="sub-description">{project.description}</p>
              <p className="sub-role">{project.role}</p>
              <p className="sub-result">{project.result}</p>
              <div className="project-skills">
                {project.skills.map((skill) => (
                  <span key={skill} className="skill-badge">{skill}</span>
                ))}
              </div>

              <div className="project-actions">
                <button
                  className={`expand-btn ${expandedSub === project.id ? 'expanded' : ''}`}
                  onClick={() => toggleSub(project.id)}
                >
                  {expandedSub === project.id ? '접기' : '상세보기'}
                  <span className="expand-icon">{expandedSub === project.id ? '−' : '+'}</span>
                </button>
                {project.links && (
                  <>
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link">GitHub ↗</a>
                    )}
                    {project.links.live && (
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="project-link">Live ↗</a>
                    )}
                  </>
                )}
              </div>

              {/* Sub 펼침 영역 */}
              <div className={`expand-section sub-expand ${expandedSub === project.id ? 'open' : ''}`}>
                <div className="expand-content">
                  {project.id === 1 && (
                    <>
                      <div className="expand-block">
                        <h4 className="expand-block-title">핵심 인사이트</h4>
                        <p className="expand-text">{project.details.insight}</p>
                      </div>
                      <div className="expand-block">
                        <h4 className="expand-block-title">{project.details.aiReport.title}</h4>
                        <p className="expand-text">{project.details.aiReport.flow}</p>
                        <blockquote className="expand-quote">
                          {project.details.aiReport.example}
                        </blockquote>
                      </div>
                      <div className="expand-block">
                        <h4 className="expand-block-title">데이터베이스 설계</h4>
                        <p className="expand-text">{project.details.db}</p>
                      </div>
                      <div className="expand-tags">
                        <span className="expand-tag">{project.details.checklist}</span>
                        <span className="expand-tag">{project.details.integrity}</span>
                      </div>
                    </>
                  )}

                  {project.id === 2 && (
                    <>
                      <div className="expand-block">
                        <h4 className="expand-block-title">AI 페르소나</h4>
                        <div className="personas-grid">
                          {project.details.personas.map((p, i) => (
                            <div key={i} className="persona-card">
                              <span className="persona-name">{p.name}</span>
                              <span className="persona-desc">{p.desc}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="expand-block">
                        <h4 className="expand-block-title">대화 구조</h4>
                        <p className="expand-text">{project.details.flow}</p>
                      </div>
                      <div className="expand-block">
                        <h4 className="expand-block-title">기술 구현</h4>
                        <p className="expand-text">{project.details.tech}</p>
                      </div>
                      <div className="expand-block">
                        <h4 className="expand-block-title">배운 점</h4>
                        <p className="expand-text">{project.details.learning}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Other Projects */}
        <div className="projects-other">
          <h3 className="subsection-title">Other Projects</h3>
          <div className="other-grid">
            {otherProjects.map((project, index) => (
              <a key={index} className="other-card" href={project.github} target="_blank" rel="noopener noreferrer">
                <h4 className="other-title">{project.title} <span className="other-arrow">↗</span></h4>
                <p className="other-description">{project.description}</p>
                {project.skills && (
                  <div className="other-skills">
                    {project.skills.map((skill) => (
                      <span key={skill} className="other-skill-badge">{skill}</span>
                    ))}
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
