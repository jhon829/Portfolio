# 포트폴리오 프로젝트 구조

```
포트폴리오_웹/
├── docs/                          # 기획 문서
│   ├── PORTFOLIO_PLAN.md          # 전체 기획 (디자인 시스템, 페이지 구조, 진행 상황)
│   ├── PROFILE_INFO.md            # 김동년 프로필 정보 (경력, 프로젝트, 역량)
│   └── PROJECT_STRUCTURE.md       # 이 파일
│
├── public/
│   └── vite.svg
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             # 상단 네비게이션 ✅
│   │   ├── Navbar.css
│   │   ├── Hero.jsx               # 히어로 섹션 ✅
│   │   └── Hero.css
│   │
│   ├── App.jsx                    # 메인 레이아웃
│   ├── App.css                    # (사용 안 함, index.css로 통합)
│   ├── index.css                  # 글로벌 스타일 + 디자인 시스템
│   ├── main.jsx                   # 엔트리 포인트
│   └── assets/
│       └── react.svg
│
├── index.html                     # Pretendard 폰트 CDN 포함
├── package.json
├── vite.config.js
└── eslint.config.js
```

---

## 다음 생성할 컴포넌트

```
src/components/
├── About.jsx + About.css          # 자기소개
├── Experience.jsx + Experience.css # 경력
├── Projects.jsx + Projects.css    # 프로젝트
├── ProjectCard.jsx                # 프로젝트 카드 (재사용)
└── Contact.jsx + Contact.css      # 연락처
```

---

## 참고 문서

- Good Hands 상세: `/Users/kimdongnyeon/gzonesoft/portfolio/projects/goodhands/README.md`
