import './Projects.css';

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

const FlowDiagram = ({ title = 'Service Flow', steps }) => (
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

const PSR = ({ problem, solution, result }) => (
  <div className="psr-block">
    <div className="psr-item">
      <span className="psr-label">문제</span>
      <span className="psr-value">{problem}</span>
    </div>
    <div className="psr-item">
      <span className="psr-label">해결</span>
      <span className="psr-value">{solution}</span>
    </div>
    <div className="psr-item">
      <span className="psr-label">성과</span>
      <span className="psr-value psr-highlight">{result}</span>
    </div>
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
   Projects 컴포넌트 — 기획력 성장 스토리
   Background → Needs → Solution → Impact
   ======================================== */
const Projects = () => {
  return (
    <>
      {/* =============================================
          Slide 0: 스토리 개요
          ============================================= */}
      <section id="projects" className="projects">
        <div className="projects-container slide-col slide-centered">
          <h2 className="section-title">Projects</h2>
          <h3 className="story-headline">기획력 성장 스토리</h3>
          <p className="story-subtitle">시장 분석부터 실서비스 운영까지, 3개의 프로젝트가 하나의 성장으로 이어집니다.</p>

          <div className="story-timeline">
            <div className="story-chapter">
              <span className="chapter-num">Chapter 1</span>
              <span className="chapter-title">AI로 비즈니스 문제를 풀다</span>
              <span className="chapter-project">쇼츠메이커</span>
              <span className="chapter-learn">시장 분석 · 클라이언트 협업 · 데이터 기반 개선</span>
            </div>
            <span className="story-arrow">→</span>
            <div className="story-chapter">
              <span className="chapter-num">Chapter 2</span>
              <span className="chapter-title">사용자를 이해하는 기획</span>
              <span className="chapter-project">Good Hands</span>
              <span className="chapter-learn">유저 리서치 · 도메인 몰입 · AI 경험 설계</span>
            </div>
            <span className="story-arrow">→</span>
            <div className="story-chapter current">
              <span className="chapter-num">Chapter 3</span>
              <span className="chapter-title">실전에서 증명하다</span>
              <span className="chapter-project">시나브로G</span>
              <span className="chapter-learn">프로세스 설계 · 데이터 기반 개선</span>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          Ch1 Cover: 쇼츠메이커
          ============================================= */}
      <section className="projects">
        <div className="projects-container slide-col slide-centered">
          <span className="chapter-badge">Chapter 1 · AI로 비즈니스 문제를 풀다</span>
          <h3 className="cover-title">쇼츠메이커</h3>
          <p className="cover-summary">
            소상공인의 홍보 문제를 AI 쇼츠 자동화로 해결하는<br />
            원스톱 플랫폼을 기획하고, 실제 클라이언트와 협업
          </p>
          <div className="cover-meta">
            <div className="cover-meta-item">
              <span className="cover-meta-label">기간</span>
              <span className="cover-meta-value">2026.01 ~ 2026.03 (진행중)</span>
            </div>
            <div className="cover-meta-item">
              <span className="cover-meta-label">역할</span>
              <span className="cover-meta-value">서비스 기획 + 자동화 파이프라인 설계</span>
            </div>
            <div className="cover-meta-item">
              <span className="cover-meta-label">성과</span>
              <span className="cover-meta-value cover-highlight">바네스데코 협업 · 조회수 59배 성장</span>
            </div>
          </div>
          <SkillRow skills={['Notion', 'n8n', 'YouTube Analytics']} />
        </div>
        <SlideIndicator label="Chapter 1 · 쇼츠메이커 — 1 / 4" />
      </section>

      {/* =============================================
          Ch1-1: Background & Needs
          ============================================= */}
      <section className="projects">
        <div className="projects-container slide-with-title">
          <div className="slide-split">
            <div className="slide-col">
              <SectionTitle
                sub="사이드 프로젝트 · AI 자동화"
                title="쇼츠메이커"
                meta="2026.01 ~ 2026.03 · 서비스 기획 + 자동화 파이프라인 설계"
              />
              <div className="text-block">
                <BlockTitle>Background</BlockTitle>
                <p className="slide-desc">
                  온라인 쇼핑몰 소상공인은 <strong>홍보 비용 부담, 플랫폼 수수료, 마케팅 인력 부재</strong>라는 구조적 문제를 안고 있다.
                  이커머스 플랫폼에 의존하지 않는 자사몰 유입 채널이 필요.
                </p>
              </div>
              <div className="problem-cards">
                <div className="problem-card">
                  <span className="problem-icon">💰</span>
                  <span className="problem-title">홍보 비용 부담</span>
                  <span className="problem-desc">네이버 광고 등 막대한 비용 + 1회성</span>
                </div>
                <div className="problem-card">
                  <span className="problem-icon">📊</span>
                  <span className="problem-title">플랫폼 수수료</span>
                  <span className="problem-desc">쿠팡·스마트스토어 높은 수수료로 마진 감소</span>
                </div>
                <div className="problem-card">
                  <span className="problem-icon">👤</span>
                  <span className="problem-title">인력 부재</span>
                  <span className="problem-desc">1인/소규모 사업자에겐 마케팅 전담 인력이 없음</span>
                </div>
              </div>
              <SkillRow skills={['Notion', 'n8n', 'YouTube Analytics']} />
            </div>
            <div className="slide-col slide-col-right">
              <div className="text-block">
                <BlockTitle>클라이언트 요구사항 — 바네스데코</BlockTitle>
                <div className="overcome-list">
                  <div className="overcome-item">
                    <span className="overcome-label">관여도</span>
                    <span className="overcome-desc">"아예 신경쓰고 싶지 않다" — 완전 자동화</span>
                  </div>
                  <div className="overcome-item">
                    <span className="overcome-label">채널 수</span>
                    <span className="overcome-desc">10개 이상 멀티 채널 운영</span>
                  </div>
                  <div className="overcome-item">
                    <span className="overcome-label">비용</span>
                    <span className="overcome-desc">쇼츠 1개당 2,000원 이하</span>
                  </div>
                  <div className="overcome-item">
                    <span className="overcome-label">성과</span>
                    <span className="overcome-desc">조회수 1,000+ · 자사몰 유입 극대화</span>
                  </div>
                </div>
              </div>
              <PSR
                problem="소상공인의 홍보 비용 부담 + 마케팅 인력 부재"
                solution="AI 쇼츠 자동화로 2,000원 이하의 홍보 콘텐츠 자동 생성"
                result="바네스데코 협업 · 조회수 59배 성장"
              />
            </div>
          </div>
        </div>
        <SlideIndicator label="Chapter 1 · 쇼츠메이커 — 2 / 4" />
      </section>

      {/* =============================================
          Ch1-2: Solution — 파이프라인 설계 & 품질 개선
          ============================================= */}
      <section className="projects">
        <div className="projects-container slide-split">
          <div className="slide-col">
            <SectionTitle sub="Chapter 1 · Solution" title="7단계 자동화 파이프라인 설계" />
            <FlowDiagram title="쇼츠 제작 파이프라인" steps={[
              { label: '수집', items: ['제품 URL → 웹 크롤링', '제품 정보 AI 분석'] },
              { label: '기획', items: ['6단계 바이럴 스크립트 생성', 'AI 보이스 + 씬 자동 분할'] },
              { label: '제작', items: ['씬별 이미지 생성', '이미지→영상 변환', '클립 병합 + 오디오 합성'] },
              { label: '배포', items: ['YouTube 자동 업로드', '실시간 상태 추적'] },
            ]} />
            <div className="text-block">
              <BlockTitle>핵심 기획 요소</BlockTitle>
              <div className="overcome-list">
                <div className="overcome-item">
                  <span className="overcome-label">바이럴 공식</span>
                  <span className="overcome-desc">킬러 후킹 → 공감 → 경험 → 반전 → 마무리 → CTA (6단계 직접 설계)</span>
                </div>
                <div className="overcome-item">
                  <span className="overcome-label">프롬프트 전략</span>
                  <span className="overcome-desc">빛 위치, 카메라 구도, 배경까지 디테일한 이미지 프롬프트 설계</span>
                </div>
                <div className="overcome-item">
                  <span className="overcome-label">비용 설계</span>
                  <span className="overcome-desc">8개 AI 서비스 조합으로 쇼츠 1개당 ~1,770원 달성</span>
                </div>
              </div>
            </div>
          </div>
          <div className="slide-col slide-col-right">
            <div className="text-block">
              <BlockTitle>시청 유지율 개선 — Before / After</BlockTitle>
              <div className="before-after">
                <div className="ba-card ba-before">
                  <span className="ba-label">초기 영상</span>
                  <p className="ba-text">유효 조회수 4회 · 유지율 16% · 전체 27회</p>
                </div>
                <div className="ba-card ba-after">
                  <span className="ba-label">최근 영상</span>
                  <p className="ba-text">유효 조회수 506회 · 유지율 31.8% · 전체 1,600회</p>
                </div>
              </div>
              <StatsGrid stats={[
                { value: '59배', label: '조회수 성장' },
                { value: '126배', label: '유효 조회수 성장' },
                { value: '16→31.8%', label: '시청 유지율' },
              ]} />
            </div>
            <Placeholder>자동화 파이프라인 구성도 · n8n 워크플로우 (자료 추가 예정)</Placeholder>
          </div>
        </div>
        <SlideIndicator label="Chapter 1 · 쇼츠메이커 — 3 / 4" />
      </section>

      {/* =============================================
          Ch1-3: Impact & Insight
          ============================================= */}
      <section className="projects">
        <div className="projects-container slide-split">
          <div className="slide-col">
            <SectionTitle sub="Chapter 1 · Impact" title="실제 클라이언트와의 협업으로 검증" />

            <StatsGrid stats={[
              { value: '~1,770원', label: '쇼츠 1개 제작 비용' },
              { value: '1.2만회', label: '바네스데코 총 조회수' },
              { value: '2.5만+', label: '총 조회수 (2채널 합산)' },
              { value: '9 + 34개', label: '쇼츠 제작 (바네스데코 + 시니어)' },
            ]} />

            <div className="contributions-grid">
              <div className="contribution-card">
                <h5 className="contrib-title">바네스데코 (가구 쇼핑몰)</h5>
                <p className="contrib-desc">
                  9개 쇼츠 제작 · 1.2만 조회수 · 자사몰 유입 13명 · 공유 20회.
                  커뮤니티에서 직접 찾아간 실제 클라이언트.
                </p>
              </div>
              <div className="contribution-card">
                <h5 className="contrib-title">시니어 뉴스 (테스트베드)</h5>
                <p className="contrib-desc">
                  34개 영상으로 대본 구성과 영상 품질을 사전 검증.
                  검증된 품질로 바네스데코 협업에 진입.
                </p>
              </div>
            </div>
          </div>
          <div className="slide-col slide-col-right">
            <div className="insight-card">
              <BlockTitle>이 프로젝트에서 배운 것</BlockTitle>
              <blockquote className="insight-quote">
                "어떻게가 아니라 무엇을 — AI 활용에서 중요한 것은 의도다"
              </blockquote>
              <p className="insight-text">처음엔 '어떻게 자동화할지'에 집중했지만, '무엇을 만들지'에 대한 고민이 깊을수록 품질이 올랐다. AI는 도구일 뿐, 기획 의도가 결과를 결정한다.</p>
            </div>
            <div className="growth-arrow-card">
              <span className="growth-from">여기서 배운 것</span>
              <span className="growth-arrow-icon">→</span>
              <span className="growth-to">Good Hands에서 유저 리서치를 직접 실행</span>
            </div>
            <Placeholder>바네스데코 쇼츠 화면 · 시청 유지율 그래프 (자료 추가 예정)</Placeholder>
          </div>
        </div>
        <SlideIndicator label="Chapter 1 · 쇼츠메이커 — 4 / 4" />
      </section>

      {/* =============================================
          Ch2 Cover: Good Hands
          ============================================= */}
      <section className="projects">
        <div className="projects-container slide-col slide-centered">
          <span className="chapter-badge">Chapter 2 · 사용자를 이해하는 기획</span>
          <h3 className="cover-title">Good Hands</h3>
          <p className="cover-summary">
            재외동포 시니어 케어 서비스의 AI 리포트 컨셉을 기획하고<br />
            유저 리서치를 통해 진짜 타겟을 재정의
          </p>
          <div className="cover-meta">
            <div className="cover-meta-item">
              <span className="cover-meta-label">기간</span>
              <span className="cover-meta-value">2025.01 ~ 2025.09</span>
            </div>
            <div className="cover-meta-item">
              <span className="cover-meta-label">역할</span>
              <span className="cover-meta-value">서비스 기획 50% + AI 리포트 컨셉 설계 + 유저 리서치</span>
            </div>
            <div className="cover-meta-item">
              <span className="cover-meta-label">성과</span>
              <span className="cover-meta-value cover-highlight">해커톤 우수상 · 창업대회 최우수상</span>
            </div>
          </div>
          <SkillRow skills={['Notion', 'Figma', 'n8n']} />
        </div>
        <SlideIndicator label="Chapter 2 · Good Hands — 1 / 4" />
      </section>

      {/* =============================================
          Ch2-1: Background & Needs
          ============================================= */}
      <section className="projects">
        <div className="projects-container slide-with-title">
          <div className="slide-split">
            <div className="slide-col">
              <SectionTitle
                sub="산학협력 · 시니어 케어"
                title="Good Hands"
                meta="2025.01 ~ 2025.09 · 서비스 기획 50% + AI 리포트 컨셉 설계 + 유저 리서치"
              />
              <div className="text-block">
                <BlockTitle>Background</BlockTitle>
                <p className="slide-desc">
                  재외동포 시니어를 위한 케어 서비스. 그런데 핵심 타겟은 시니어가 아니었다.
                </p>
                <blockquote className="insight-quote">
                  "서비스 타겟은 '시니어'가 아니라 해외에 있는 '자녀'다"
                </blockquote>
                <p className="slide-desc">
                  실제 비용을 지불하는 사람(자녀)의 니즈에 집중. 쇼츠메이커에서 배운 <strong>'데이터 기반 검증'</strong>을 유저 리서치로 확장.
                </p>
              </div>
              <SkillRow skills={['Notion', 'Figma', 'n8n']} />
            </div>
            <div className="slide-col slide-col-right">
              <div className="text-block">
                <BlockTitle>해결하려는 문제</BlockTitle>
                <div className="problem-cards">
                  <div className="problem-card">
                    <span className="problem-icon">📡</span>
                    <span className="problem-title">정보 부족</span>
                    <span className="problem-desc">해외 자녀가 부모님 돌봄 상태를 알 수 없음</span>
                  </div>
                  <div className="problem-card">
                    <span className="problem-icon">💭</span>
                    <span className="problem-title">죄책감</span>
                    <span className="problem-desc">부모님을 멀리 보내서 느끼는 죄책감</span>
                  </div>
                  <div className="problem-card">
                    <span className="problem-icon">🔍</span>
                    <span className="problem-title">신뢰 부족</span>
                    <span className="problem-desc">케어 서비스가 제대로 되는지 확인 불가</span>
                  </div>
                </div>
              </div>
              <div className="text-block">
                <BlockTitle>유저 리서치 과정</BlockTitle>
                <div className="overcome-list">
                  <div className="overcome-item">
                    <span className="overcome-label">관계자 인터뷰</span>
                    <span className="overcome-desc">실제 케어 현장의 관계자들과 다수 인터뷰 진행</span>
                  </div>
                  <div className="overcome-item">
                    <span className="overcome-label">도메인 학습</span>
                    <span className="overcome-desc">협업기업(인굿핸즈)으로부터 재외동포 케어 도메인 지식 습득</span>
                  </div>
                  <div className="overcome-item">
                    <span className="overcome-label">유저 테스트</span>
                    <span className="overcome-desc">팀원의 할머님과 삼촌께 직접 보여드리며 피드백 수집</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SlideIndicator label="Chapter 2 · Good Hands — 2 / 4" />
      </section>

      {/* =============================================
          Slide 4: Ch2 Good Hands — Solution
          ============================================= */}
      <section className="projects">
        <div className="projects-container slide-split">
          <div className="slide-col">
            <SectionTitle sub="Chapter 2 · Solution" title="AI 리포트 = 자녀 연락 유도 장치" />
            <div className="text-block">
              <BlockTitle>솔루션 컨셉</BlockTitle>
              <p className="slide-desc">
                단순 경과 보고가 아닌, <strong>자녀가 부모님께 연락하도록 유도</strong>하는 장치로 설계.
                케어기버가 매일 체크리스트 + 돌봄노트를 작성하면, AI가 따뜻한 말투로 리포트를 생성하여 해외 자녀에게 전달.
              </p>
            </div>
            <div className="text-block">
              <BlockTitle>GPT 프롬프트 설계</BlockTitle>
              <div className="before-after">
                <div className="ba-card ba-before">
                  <span className="ba-label">Before — 수치 데이터</span>
                  <p className="ba-text">"영양상태가 75%에서 87.5%로 개선되었습니다."</p>
                </div>
                <div className="ba-card ba-after">
                  <span className="ba-label">After — AI 리포트</span>
                  <p className="ba-text">"할머니께서 요즘 식사를 정말 잘 드시고 계세요. 지난주보다 드시는 양이 늘어서 영양상태가 많이 좋아지셨어요."</p>
                </div>
              </div>
            </div>
          </div>
          <div className="slide-col slide-col-right">
            <FlowDiagram title="서비스 플로우 (유저 여정)" steps={[
              { label: '케어기버', items: ['출근', '체크리스트 작성', '돌봄노트 기록'] },
              { label: 'AI 처리', items: ['돌봄 데이터 수집', 'AI 리포트 자동 생성'] },
              { label: '자녀(가디언)', items: ['AI 리포트 수신', '부모님 안부 확인', '연락 유도'] },
            ]} />
            <Placeholder>서비스 플로우 · 유저 여정맵 (Figma/Notion 자료 추가 예정)</Placeholder>
          </div>
        </div>
        <SlideIndicator label="Chapter 2 · Good Hands — 3 / 4" />
      </section>

      {/* =============================================
          Slide 5: Ch2 Good Hands — Impact & Insight
          ============================================= */}
      <section className="projects">
        <div className="projects-container slide-split">
          <div className="slide-col">
            <SectionTitle sub="Chapter 2 · Impact" title="2건 수상, 유저 리서치의 힘을 체감" />

            <StatsGrid stats={[
              { value: '2건 수상', label: '해커톤 · 창업대회' },
              { value: '4개 유저 유형', label: '케어기버/가디언/시니어/관리자' },
              { value: 'AI 리포트', label: '따뜻한 말투 변환 컨셉 기획' },
              { value: '유저 테스트', label: '실사용자 대상 피드백 수집' },
            ]} />

            <div className="awards-row">
              <a className="award-badge" href="/images/awards/sejong-dx-award.png" target="_blank" rel="noopener noreferrer">
                <img className="award-img" src="/images/awards/sejong-dx-award.png" alt="세종 DX 해커톤 우수상" />
                <span className="award-name">세종 DX 해커톤</span>
                <span className="award-result">우수상</span>
              </a>
              <a className="award-badge" href="/images/awards/huss-award.png" target="_blank" rel="noopener noreferrer">
                <img className="award-img" src="/images/awards/huss-award.png" alt="HUSS 창업 경진대회 최우수상" />
                <span className="award-name">HUSS 창업 경진대회</span>
                <span className="award-result">최우수상</span>
              </a>
            </div>

            <div className="text-block">
              <BlockTitle>기획 성장 포인트</BlockTitle>
              <p className="slide-desc">
                직접 경험 없는 도메인도 <strong>관계자 인터뷰</strong>와 <strong>협업기업 도메인 지식</strong>으로 깊이 이해할 수 있었다.
                타겟 사용자를 직접 만나보는 것이 데스크 리서치보다 100배 효과적.
              </p>
            </div>
          </div>
          <div className="slide-col slide-col-right">
            <div className="insight-card">
              <BlockTitle>이 프로젝트에서 배운 것</BlockTitle>
              <blockquote className="insight-quote">
                "직접 경험 없는 도메인도 인터뷰로 깊이 이해할 수 있다"
              </blockquote>
              <p className="insight-text">AI를 '기능'이 아닌 '경험'으로 기획하는 시각 확보. 따뜻한 말투의 리포트 하나가 자녀의 연락을 유도하는 행동 변화 장치가 될 수 있다.</p>
            </div>
            <div className="growth-arrow-card">
              <span className="growth-from">여기서 배운 것</span>
              <span className="growth-arrow-icon">→</span>
              <span className="growth-to">시나브로G에서 실제 고객사 대상 프로덕션 운영</span>
            </div>
          </div>
        </div>
        <SlideIndicator label="Chapter 2 · Good Hands — 4 / 4" />
      </section>

      {/* =============================================
          Ch3 Cover: 시나브로G
          ============================================= */}
      <section className="projects">
        <div className="projects-container slide-col slide-centered">
          <span className="chapter-badge current">Chapter 3 · 실전에서 증명하다</span>
          <h3 className="cover-title">시나브로G</h3>
          <p className="cover-summary">
            비정형 주문 프로세스를 AI 매칭 기반으로 재설계하여<br />
            처리 시간 90% 단축, 6개 거래처 실서비스 운영
          </p>
          <div className="cover-meta">
            <div className="cover-meta-item">
              <span className="cover-meta-label">기간</span>
              <span className="cover-meta-value">2025.09 ~ 현재</span>
            </div>
            <div className="cover-meta-item">
              <span className="cover-meta-label">역할</span>
              <span className="cover-meta-value">AI 매칭 서비스 기획 / 주문 프로세스 설계</span>
            </div>
            <div className="cover-meta-item">
              <span className="cover-meta-label">성과</span>
              <span className="cover-meta-value cover-highlight">20분→2분 · 정확도 97% · 6개 거래처</span>
            </div>
          </div>
          <SkillRow skills={['Notion', 'n8n', 'Figma', 'Excel']} />
        </div>
        <SlideIndicator label="Chapter 3 · 시나브로G — 1 / 4" />
      </section>

      {/* =============================================
          Ch3-1: Background & Needs
          ============================================= */}
      <section className="projects">
        <div className="projects-container slide-with-title">
          <div className="slide-split">
            <div className="slide-col">
              <SectionTitle
                sub="회사 실무 · B2B SaaS"
                title="시나브로G"
                meta="2025.09 ~ 현재 · AI 매칭 서비스 기획 / 주문 프로세스 설계"
              />
              <div className="text-block">
                <BlockTitle>Background</BlockTitle>
                <p className="slide-desc">
                  식자재 유통 업체의 주문은 엑셀, 문자, 이미지 등 <strong>비정형 데이터</strong>로 들어온다.
                  고객 주문서의 품목명과 ERP 품목명이 불일치하여 수동 매칭에 의존.
                </p>
              </div>
              <StatsGrid stats={[
                { value: '6개', label: '실사용 거래처' },
                { value: '200건+', label: '일일 주문 처리량' },
                { value: '20분→2분', label: '주문 처리 시간' },
                { value: '97%', label: '매칭 정확도' },
              ]} />
              <SkillRow skills={['Notion', 'n8n', 'Figma', 'Excel']} />
            </div>
            <div className="slide-col slide-col-right">
              <div className="text-block">
                <BlockTitle>Before / After</BlockTitle>
                <div className="before-after">
                  <div className="ba-card ba-before">
                    <span className="ba-label">Before</span>
                    <p className="ba-text">주문서 수동 확인 → 품목 하나씩 검색 → ERP 수기 입력</p>
                    <div className="ba-stats">
                      <span className="ba-stat">⏱ 20분 / 200건</span>
                      <span className="ba-stat">📉 정확도 ~50%</span>
                    </div>
                  </div>
                  <div className="ba-card ba-after">
                    <span className="ba-label">After</span>
                    <p className="ba-text">다채널 자동 수집 → AI 매칭 → 관리자 승인 → ERP 자동 반영</p>
                    <div className="ba-stats">
                      <span className="ba-stat">⏱ 2분 / 200건</span>
                      <span className="ba-stat">📈 정확도 97%</span>
                    </div>
                  </div>
                </div>
              </div>
              <Placeholder>주문 프로세스 분석 · AS-IS / TO-BE (자료 추가 예정)</Placeholder>
            </div>
          </div>
        </div>
        <SlideIndicator label="Chapter 3 · 시나브로G — 2 / 4" />
      </section>

      {/* =============================================
          Slide 7: Ch3 시나브로G — Solution
          ============================================= */}
      <section className="projects">
        <div className="projects-container slide-split">
          <div className="slide-col">
            <SectionTitle sub="Chapter 3 · Solution" title="매칭 정확도 5차 개선 과정" />
            <div className="evolution-timeline">
              {[
                { stage: '초기', desc: '정확 일치만 — 기본 매칭', accuracy: '~50%' },
                { stage: '1차', desc: 'AI 자연어 → 보편적 식재료명 변환', accuracy: '~60%' },
                { stage: '2차', desc: '최근 주문 이력 기반 매칭 추가', accuracy: '~75%' },
                { stage: '3차', desc: '작업자 매칭 이력 학습', accuracy: '~85%' },
                { stage: '4차', desc: '거래처별 캐시 데이터 활용', accuracy: '~90%' },
                { stage: '5차', desc: '자연어 사전 + 7단계 우선순위 설계', accuracy: '96-97%' },
              ].map((step, i) => (
                <div key={i} className="evolution-step">
                  <span className="evo-stage">{step.stage}</span>
                  <span className="evo-desc">{step.desc}</span>
                  <span className="evo-accuracy">{step.accuracy}</span>
                </div>
              ))}
            </div>
            <div className="challenges-list">
              <BlockTitle>프로세스 설계 관점</BlockTitle>
              <div className="challenge-item">
                <span className="challenge-title">다채널 주문 통합 프로세스 설계</span>
                <div className="challenge-detail">
                  <span className="challenge-problem">엑셀, 문자, 이미지 등 채널별 상이한 형식</span>
                  <span className="challenge-arrow">→</span>
                  <span className="challenge-solution">표준화된 단일 처리 프로세스로 통합 설계</span>
                </div>
              </div>
              <div className="challenge-item">
                <span className="challenge-title">자연어 사전 시스템 기획</span>
                <div className="challenge-detail">
                  <span className="challenge-problem">거래처마다 다른 품목 호칭 (예: 양파 = 옥총)</span>
                  <span className="challenge-arrow">→</span>
                  <span className="challenge-solution">작업자 매칭 이력을 자동 학습하는 사전 구조 기획</span>
                </div>
              </div>
            </div>
          </div>
          <div className="slide-col slide-col-right">
            <FlowDiagram title="주문 처리 서비스 플로우" steps={[
              { label: '주문 수신', items: ['엑셀 업로드', '문자(SMS)', '이미지(OCR)'] },
              { label: 'AI 매칭', items: ['자연어 사전 조회', '7단계 우선순위 매칭'] },
              { label: '관리자 검수', items: ['매칭 결과 확인', '수동 보정 (학습 반영)'] },
              { label: 'ERP 반영', items: ['주문서 자동 생성', '거래처별 리포트'] },
            ]} />
            <Placeholder className="placeholder-lg">
              서비스 플로우 · 주문처리 IA · 매칭 로직 기획서 (자료 추가 예정)
            </Placeholder>
          </div>
        </div>
        <SlideIndicator label="Chapter 3 · 시나브로G — 3 / 4" />
      </section>

      {/* =============================================
          Slide 8: Ch3 시나브로G — Impact & Contributions
          ============================================= */}
      <section className="projects">
        <div className="projects-container slide-split">
          <div className="slide-col">
            <SectionTitle sub="Chapter 3 · Impact" title="실서비스 운영으로 증명한 성과" />

            <StatsGrid stats={[
              { value: '20분 → 2분', label: '주문 처리 시간 (200건)' },
              { value: '97%', label: '매칭 정확도' },
              { value: '6개 거래처', label: '실서비스 운영 중' },
              { value: '200건+', label: '일일 주문 처리량' },
            ]} />

            <div className="contributions-grid three-col">
              <div className="contribution-card">
                <h5 className="contrib-title">주문 프로세스 재설계</h5>
                <p className="contrib-desc">
                  AS-IS 주문 프로세스를 분석하고 비효율 지점을 파악. AI 매칭 기반 TO-BE 프로세스를 설계하여 처리 시간 90% 단축.
                </p>
              </div>
              <div className="contribution-card">
                <h5 className="contrib-title">요구사항 정의 및 우선순위화</h5>
                <p className="contrib-desc">
                  6개 거래처의 주문 패턴을 분석하여 공통 요구사항 도출. 비즈니스 임팩트 기준으로 우선순위를 결정하여 개발 방향 설정.
                </p>
              </div>
              <div className="contribution-card">
                <h5 className="contrib-title">유저 피드백 기반 5차 개선</h5>
                <p className="contrib-desc">
                  실사용자(거래처 담당자) 피드백을 수집하여 매칭 정확도를 50%에서 97%까지 5차에 걸쳐 개선. 데이터 기반 의사결정 실행.
                </p>
              </div>
            </div>
          </div>
          <div className="slide-col slide-col-right">
            <div className="insight-card">
              <BlockTitle>3개 프로젝트를 관통하는 인사이트</BlockTitle>
              <blockquote className="insight-quote">
                "기획은 '무엇을 만들지'가 아니라 '누구의 어떤 문제를 풀지'를 정의하는 것"
              </blockquote>
              <p className="insight-text">
                쇼츠메이커에서 시장 분석과 데이터 기반 개선을, Good Hands에서 유저 리서치를, 시나브로G에서 실서비스 운영을 경험하며
                기획력이 단계적으로 성장.
              </p>
            </div>
            <Placeholder className="placeholder-lg">
              시나브로G 실서비스 화면 (스크린샷 추가 예정)<br />
              매칭 리포트 · 주문 관리 대시보드
            </Placeholder>
          </div>
        </div>
        <SlideIndicator label="Chapter 3 · 시나브로G — 4 / 4" />
      </section>

    </>
  );
};

export default Projects;
