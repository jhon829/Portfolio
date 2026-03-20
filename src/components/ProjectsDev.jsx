import './Projects.css';
import './ProjectsDev.css';

/* ========================================
   공통 서브 컴포넌트
   ======================================== */
const StatsGrid = ({ stats }) => (
  <div className="stats-grid">
    {stats.map((s, i) => (
      <div key={i} className="stat-card">
        <span className="stat-value">{s.value}</span>
        <span className="stat-label">{s.label}</span>
      </div>
    ))}
  </div>
);

const SkillRow = ({ skills }) => (
  <div className="skill-row">
    {skills.map((s) => (
      <span key={s} className="skill-badge">{s}</span>
    ))}
  </div>
);

const FlowDiagram = ({ title = 'System Flow', steps }) => (
  <div className="flow-diagram">
    <span className="flow-title">{title}</span>
    {steps.map((step, i) => (
      <div key={i} className="flow-group">
        <div className="flow-step">
          <span className="flow-label">{step.label}</span>
          <div className="flow-items">
            {step.items.map((item, j) => (
              <span key={j} className="flow-item">{item}</span>
            ))}
          </div>
        </div>
        {i < steps.length - 1 && <span className="flow-arrow">↓</span>}
      </div>
    ))}
  </div>
);

const Placeholder = ({ children, className = '' }) => (
  <div className={`placeholder ${className}`}>{children}</div>
);

const SlideIndicator = ({ label }) => (
  <span className="slide-indicator">{label}</span>
);

const SectionTitle = ({ sub, title, meta }) => (
  <div className="slide-header">
    <span className="project-category">{sub}</span>
    <h3 className="slide-title">{title}</h3>
    {meta && <p className="slide-meta">{meta}</p>}
  </div>
);

const BlockTitle = ({ children }) => (
  <h4 className="block-title">{children}</h4>
);

/* ========================================
   ProjectsDev 컴포넌트 — 기술 중심
   ======================================== */
const ProjectsDev = () => {
  return (
    <>
      {/* =============================================
          Slide 0: Projects Overview
          ============================================= */}
      <section id="projects" className="projects">
        <div className="projects-container slide-col slide-centered">
          <h2 className="section-title">Projects</h2>
          <p className="dev-overview-desc">기획부터 개발, 자동화까지 End-to-End로 프로젝트를 수행합니다.</p>

          <div className="dev-project-cards">
            <div className="dev-project-card featured">
              <div className="dev-card-header">
                <h3 className="dev-card-title">시나브로G</h3>
                <span className="dev-card-badge">Production</span>
              </div>
              <p className="dev-card-desc">AI 기반 다채널 주문 관리 플랫폼 (OMS)</p>
              <div className="dev-card-stats">
                <span>192 API</span>
                <span>484 commits</span>
                <span>28 tables</span>
              </div>
              <SkillRow skills={['React', 'TypeScript', 'Express', 'PostgreSQL', 'n8n', 'Claude API']} />
            </div>
            <div className="dev-project-card">
              <div className="dev-card-header">
                <h3 className="dev-card-title">Good Hands</h3>
                <span className="dev-card-badge">Award</span>
              </div>
              <p className="dev-card-desc">재외동포 케어 + AI 리포팅 플랫폼</p>
              <div className="dev-card-stats">
                <span>18 tables</span>
                <span>Backend 100%</span>
                <span>2건 수상</span>
              </div>
              <SkillRow skills={['FastAPI', 'SQLAlchemy', 'MariaDB', 'n8n', 'GPT-3.5', 'Docker']} />
            </div>
            <div className="dev-project-card">
              <div className="dev-card-header">
                <h3 className="dev-card-title">AI Avatar Insight</h3>
                <span className="dev-card-badge">Academy</span>
              </div>
              <p className="dev-card-desc">멀티에이전트 기반 아이디어 분석 플랫폼</p>
              <div className="dev-card-stats">
                <span>AutoGen</span>
                <span>3 AI Models</span>
                <span>최우수팀</span>
              </div>
              <SkillRow skills={['FastAPI', 'AutoGen', 'OpenAI', 'Gemini', 'Perplexity']} />
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          Slide 1: 시나브로G — Architecture & Scale
          ============================================= */}
      <section className="projects">
        <div className="projects-container slide-with-title">
          <span className="chapter-badge current">Production Service</span>
          <div className="slide-split">
            <div className="slide-col">
              <SectionTitle
                sub="회사 실무 · B2B SaaS"
                title="시나브로G"
                meta="2025.09 ~ 현재 · 웹 메인 개발자 (프론트 + 백엔드 + n8n)"
              />
              <div className="text-block">
                <BlockTitle>Problem</BlockTitle>
                <p className="slide-desc">
                  식자재 유통 업체의 주문은 엑셀, 문자, 이미지 등 <strong>비정형 데이터</strong>로 들어온다.
                  고객 주문서의 품목명과 ERP 품목명이 불일치하여 수동 매칭에 의존 — 200건 처리에 20분, 정확도 ~50%.
                </p>
              </div>
              <StatsGrid stats={[
                { value: '192개', label: 'API 엔드포인트' },
                { value: '484 커밋', label: '기여도 53%' },
                { value: '28개', label: 'DB 테이블' },
                { value: '318개', label: 'PostgreSQL 함수' },
              ]} />
              <SkillRow skills={['React', 'TypeScript', 'Express', 'PostgreSQL', 'MSSQL', 'n8n', 'Claude API']} />
            </div>
            <div className="slide-col slide-col-right">
              <FlowDiagram title="System Architecture" steps={[
                { label: 'Input', items: ['엑셀 업로드', '문자 입력', '이미지 OCR (Gemini)'] },
                { label: 'Frontend', items: ['React 19 + TypeScript', 'JSON 표준화', 'Web Worker 엑셀 처리'] },
                { label: 'Backend', items: ['Express 5 · 192 API', 'PostgreSQL + MSSQL(ERP)'] },
                { label: 'AI Pipeline', items: ['n8n 워크플로우', '7단계 우선순위 매칭', 'Claude API'] },
              ]} />
            </div>
          </div>
        </div>
        <SlideIndicator label="시나브로G — 1 / 3" />
      </section>

      {/* =============================================
          Slide 2: 시나브로G — AI Matching Pipeline
          ============================================= */}
      <section className="projects">
        <div className="projects-container slide-split">
          <div className="slide-col">
            <SectionTitle sub="Core Feature" title="AI 매칭 시스템 진화 과정" />
            <div className="evolution-timeline">
              {[
                { stage: '초기', desc: '정확 일치만', accuracy: '~50%' },
                { stage: '1차', desc: 'AI 자연어 → 보편적 식재료명 변환', accuracy: '~60%' },
                { stage: '2차', desc: '최근 주문 기반 매칭 추가', accuracy: '~75%' },
                { stage: '3차', desc: '작업자 매칭 이력 DB 저장', accuracy: '~85%' },
                { stage: '4차', desc: 'n8n 테이블 노드 캐시화', accuracy: '~90%' },
                { stage: '5차', desc: '자연어 사전 + 7단계 우선순위', accuracy: '96-97%' },
              ].map((step, i) => (
                <div key={i} className="evolution-step">
                  <span className="evo-stage">{step.stage}</span>
                  <span className="evo-desc">{step.desc}</span>
                  <span className="evo-accuracy">{step.accuracy}</span>
                </div>
              ))}
            </div>

            <div className="text-block">
              <BlockTitle>자연어 사전 시스템 (100% 기여)</BlockTitle>
              <p className="slide-desc">
                작업자가 매칭한 자연어→품목 관계를 DB에 자동 저장.
                동일 주문 시 즉시 매칭. <strong>매칭률 90% → 97%</strong> 달성의 핵심 모듈.
              </p>
            </div>
          </div>
          <div className="slide-col slide-col-right">
            <div className="before-after">
              <div className="ba-card ba-before">
                <span className="ba-label">Before</span>
                <p className="ba-text">주문서 수동 확인 → 품목 하나씩 검색 → ERP 수기 입력</p>
                <div className="ba-stats">
                  <span className="ba-stat">20분 / 200건</span>
                  <span className="ba-stat">정확도 ~50%</span>
                </div>
              </div>
              <div className="ba-card ba-after">
                <span className="ba-label">After</span>
                <p className="ba-text">다채널 자동 수집 → AI 매칭 → 관리자 승인 → ERP 자동 반영</p>
                <div className="ba-stats">
                  <span className="ba-stat">2분 / 200건</span>
                  <span className="ba-stat">정확도 97%</span>
                </div>
              </div>
            </div>
            <FlowDiagram title="7단계 매칭 우선순위" steps={[
              { label: '1-2', items: ['자연어 사전 정확 일치', '자연어 사전 유사 일치'] },
              { label: '3-4', items: ['최근 주문 이력 매칭', '작업자 매칭 이력 참조'] },
              { label: '5-7', items: ['ERP 품목 직접 매칭', 'AI 자연어 변환 매칭', 'Claude API fallback'] },
            ]} />
          </div>
        </div>
        <SlideIndicator label="시나브로G — 2 / 3" />
      </section>

      {/* =============================================
          Slide 3: 시나브로G — Technical Challenges
          ============================================= */}
      <section className="projects">
        <div className="projects-container slide-split">
          <div className="slide-col">
            <SectionTitle sub="Technical Deep Dive" title="기술적 도전과 해결" />

            <div className="challenges-list">
              <div className="challenge-item">
                <span className="challenge-title">멀티 DB 아키텍처</span>
                <div className="challenge-detail">
                  <span className="challenge-problem">PostgreSQL(신규) + MSSQL(기존 ERP) 동시 사용</span>
                  <span className="challenge-arrow">→</span>
                  <span className="challenge-solution">트랜잭션 분리 + pg_net 비동기 동기화</span>
                </div>
              </div>
              <div className="challenge-item">
                <span className="challenge-title">대용량 엑셀 처리</span>
                <div className="challenge-detail">
                  <span className="challenge-problem">수백 행 엑셀 파싱 시 브라우저 멈춤</span>
                  <span className="challenge-arrow">→</span>
                  <span className="challenge-solution">Web Worker + 청크 단위 처리 → 3초 내 완료</span>
                </div>
              </div>
              <div className="challenge-item">
                <span className="challenge-title">OCR 정확도</span>
                <div className="challenge-detail">
                  <span className="challenge-problem">손글씨/저화질 이미지 인식률 저조</span>
                  <span className="challenge-arrow">→</span>
                  <span className="challenge-solution">Google Vision + Gemini 후처리 → 85%+</span>
                </div>
              </div>
              <div className="challenge-item">
                <span className="challenge-title">DB 부하 최적화</span>
                <div className="challenge-detail">
                  <span className="challenge-problem">매 요청마다 1만건+ 품목 DB 조회</span>
                  <span className="challenge-arrow">→</span>
                  <span className="challenge-solution">n8n 테이블 노드 캐시 + 스케줄링 갱신</span>
                </div>
              </div>
            </div>
          </div>
          <div className="slide-col slide-col-right">
            <div className="text-block">
              <BlockTitle>개발 생산성 도구</BlockTitle>
              <div className="dev-tools-grid">
                <div className="dev-tool-item">
                  <span className="dev-tool-name">Claude Code 스킬 10개</span>
                  <span className="dev-tool-desc">db-design, git-commit, swagger-update 등</span>
                </div>
                <div className="dev-tool-item">
                  <span className="dev-tool-name">DDL 자동 생성</span>
                  <span className="dev-tool-desc">db-design 스킬로 83% 시간 단축</span>
                </div>
                <div className="dev-tool-item">
                  <span className="dev-tool-name">API 문서 자동화</span>
                  <span className="dev-tool-desc">JSDoc → Swagger 자동 생성</span>
                </div>
                <div className="dev-tool-item">
                  <span className="dev-tool-name">백업 자동화</span>
                  <span className="dev-tool-desc">n8n 스케줄 기반 DB 백업</span>
                </div>
              </div>
            </div>

            <StatsGrid stats={[
              { value: '20분→2분', label: '주문 처리 시간' },
              { value: '97%', label: '매칭 정확도' },
              { value: '6개 거래처', label: '실서비스 운영' },
              { value: '200건+', label: '일일 처리량' },
            ]} />

            <Placeholder className="placeholder-lg">
              시나브로G 실서비스 화면<br />
              매칭 리포트 · 주문 관리 대시보드
            </Placeholder>
          </div>
        </div>
        <SlideIndicator label="시나브로G — 3 / 3" />
      </section>

      {/* =============================================
          Slide 4: Good Hands — Backend & AI
          ============================================= */}
      <section className="projects">
        <div className="projects-container slide-split">
          <div className="slide-col">
            <SectionTitle
              sub="산학협력 · 시니어 케어"
              title="Good Hands"
              meta="2025.01 ~ 2025.09 · 백엔드 100% + AI 리포트 기획/개발"
            />
            <div className="text-block">
              <BlockTitle>Backend Architecture</BlockTitle>
              <p className="slide-desc">
                FastAPI + SQLAlchemy 기반 REST API.
                4개 사용자 유형(케어기버, 가디언, 시니어, 관리자)에 맞춘 <strong>18개 테이블</strong> ERD 설계.
                역할 기반 접근 제어(RBAC) + JWT 인증.
              </p>
            </div>
            <div className="arch-tree">
              <BlockTitle>프로젝트 구조</BlockTitle>
              <pre className="code-block">{`app/
├── models/     # SQLAlchemy (7개)
├── routers/    # FastAPI 라우터 (8개)
├── schemas/    # Pydantic 스키마 (7개)
├── services/   # 비즈니스 로직 (11개)
├── config.py
├── database.py
└── main.py`}</pre>
            </div>
            <StatsGrid stats={[
              { value: '18개', label: 'DB 테이블' },
              { value: '100%', label: '백엔드 기여도' },
              { value: '2건 수상', label: '해커톤 · 창업대회' },
            ]} />
            <SkillRow skills={['FastAPI', 'SQLAlchemy', 'MariaDB', 'Alembic', 'JWT', 'Docker']} />
          </div>
          <div className="slide-col slide-col-right">
            <FlowDiagram title="AI 리포트 파이프라인" steps={[
              { label: '입력', items: ['체크리스트 (영양·고혈압·우울)', '돌봄노트 (6개 질문)'] },
              { label: '트리거', items: ['케어기버 퇴근 → n8n 웹훅'] },
              { label: 'AI 처리', items: ['GPT-3.5 리포트 생성', '수치 → 따뜻한 자연어 변환'] },
              { label: '출력', items: ['ai_reports 테이블 저장', '가디언 알림 발송'] },
            ]} />

            <div className="text-block">
              <BlockTitle>데이터 무결성 정책</BlockTitle>
              <div className="challenges-list">
                <div className="challenge-item">
                  <span className="challenge-title">1일 1회 제한</span>
                  <div className="challenge-detail">
                    <span className="challenge-solution">복합 UNIQUE KEY로 중복 방지</span>
                  </div>
                </div>
                <div className="challenge-item">
                  <span className="challenge-title">수정/삭제 차단</span>
                  <div className="challenge-detail">
                    <span className="challenge-solution">is_final 플래그 + API 레벨 403 반환</span>
                  </div>
                </div>
              </div>
            </div>

            <Placeholder>Good Hands 앱 화면 · AI 리포트 예시</Placeholder>
          </div>
        </div>
        <SlideIndicator label="Good Hands — 1 / 1" />
      </section>

      {/* =============================================
          Slide 5: AI Avatar — Multi-Agent Orchestration
          ============================================= */}
      <section className="projects">
        <div className="projects-container slide-split">
          <div className="slide-col">
            <SectionTitle
              sub="메타버스 SW 아카데미 · 멀티에이전트"
              title="AI Avatar Insight"
              meta="2025.01 ~ 2025.05 · 백엔드 + AI 오케스트레이션 개발"
            />
            <div className="text-block">
              <BlockTitle>Multi-Agent Orchestration</BlockTitle>
              <p className="slide-desc">
                AutoGen 기반으로 <strong>GPT(분석형) + Gemini(직관형)</strong> 두 AI를 동시 제어.
                3단계 대화 구조(사실 확인 → 가정 검증 → 패러다임 전환)로 일관된 흐름 확보.
              </p>
            </div>
            <div className="text-block">
              <BlockTitle>핵심 코드</BlockTitle>
              <div className="code-stats">
                <div className="code-stat-item">
                  <span className="code-file">logic.py</span>
                  <span className="code-lines">291줄</span>
                  <span className="code-desc">AI 오케스트레이션 핵심 로직</span>
                </div>
                <div className="code-stat-item">
                  <span className="code-file">sonar.py</span>
                  <span className="code-lines">140줄</span>
                  <span className="code-desc">Sonar API 연동, 키워드 추출</span>
                </div>
              </div>
            </div>
            <StatsGrid stats={[
              { value: '최우수팀', label: '메타버스 SW 아카데미' },
              { value: '2개 모델', label: 'GPT + Gemini' },
              { value: '3단계', label: '대화 구조 설계' },
            ]} />
            <SkillRow skills={['FastAPI', 'AutoGen', 'OpenAI', 'Gemini', 'Perplexity Sonar', 'Whisper']} />
          </div>
          <div className="slide-col slide-col-right">
            <FlowDiagram title="AI Pipeline" steps={[
              { label: '입력', items: ['아이디어 입력', 'Sonar 질문 강화 · 시장 분석'] },
              { label: '오케스트레이션', items: ['AutoGen 기반 에이전트 제어', '분석형(GPT) + 직관형(Gemini)'] },
              { label: '3단계 대화', items: ['사실 확인 → 가정 검증 → 패러다임 전환'] },
              { label: '출력', items: ['3D 아바타 시각화', 'React Three Fiber'] },
            ]} />

            <div className="text-block">
              <BlockTitle>기술적 도전</BlockTitle>
              <div className="challenges-list">
                <div className="challenge-item">
                  <span className="challenge-title">AI 대화 흐름 제어</span>
                  <div className="challenge-detail">
                    <span className="challenge-problem">AI가 주제 이탈, 반복 발화</span>
                    <span className="challenge-arrow">→</span>
                    <span className="challenge-solution">3단계 프레임 강제로 해결</span>
                  </div>
                </div>
                <div className="challenge-item">
                  <span className="challenge-title">모델 간 품질 편차</span>
                  <div className="challenge-detail">
                    <span className="challenge-problem">GPT vs Gemini 응답 패턴 차이</span>
                    <span className="challenge-arrow">→</span>
                    <span className="challenge-solution">프롬프트 엔지니어링으로 일관성 확보</span>
                  </div>
                </div>
              </div>
            </div>

            <Placeholder>AI 아바타 3D 대화 화면</Placeholder>
          </div>
        </div>
        <SlideIndicator label="AI Avatar Insight — 1 / 1" />
      </section>

      {/* =============================================
          Slide 6: Other Projects
          ============================================= */}
      <section className="projects">
        <div className="projects-container slide-col slide-centered">
          <SectionTitle sub="Other Projects" title="그 외 프로젝트" />
          <div className="other-grid">
            {[
              {
                title: 'Shorts Factory',
                description: '키워드 입력 → 리서치/스크립트/영상/업로드까지 자동화하는 AI 플랫폼',
                skills: ['React', 'FastAPI', 'PostgreSQL', 'n8n', 'Docker'],
                github: 'https://github.com/jhon829/trend-web-builder',
              },
              {
                title: '전공 추천 시스템',
                description: 'Gemini AI 기반 IT 전공 적성 추천 앱 (24문항 설문)',
                skills: ['Flutter', 'Firebase', 'Gemini'],
                github: 'https://github.com/jhon829/majortest',
              },
              {
                title: 'Portfolio',
                description: 'React + Vite 기반 개인 포트폴리오 웹사이트 (이 사이트)',
                skills: ['React', 'Vite', 'CSS'],
                github: 'https://github.com/jhon829/portfolio',
              },
            ].map((project, index) => (
              <a key={index} className="other-card" href={project.github} target="_blank" rel="noopener noreferrer">
                <h4 className="other-title">{project.title} <span className="other-arrow">↗</span></h4>
                <p className="other-description">{project.description}</p>
                <div className="other-skills">
                  {project.skills.map((skill) => (
                    <span key={skill} className="other-skill-badge">{skill}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsDev;
