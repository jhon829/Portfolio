# 김동년 포트폴리오 기획 문서

## 프로젝트 개요

| 항목 | 내용 |
|------|------|
| 목적 | 취업용 포트폴리오 랜딩페이지 |
| 타겟 | 채용 담당자, 면접관 |
| 포지셔닝 | "기획하고 직접 만드는 사람" |
| 기술 스택 | React + Vite |
| 프로젝트 경로 | `/Users/kimdongnyeon/동년의 작업실/포트폴리오_웹` |

---

## 디자인 시스템

### 컬러
```css
--color-bg: #FFFFFF;           /* 배경 */
--color-text: #1E1B4B;         /* 메인 텍스트 (네이비) */
--color-text-sub: #64748B;     /* 서브 텍스트 (슬레이트 그레이) */
--color-point: #818CF8;        /* 포인트 (연보라) */
--color-point-hover: #6366F1;  /* 포인트 호버 */
```

### 폰트
- Pretendard (한글/영문 통일)
- CDN: `https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css`

### 레이아웃
- 최대 너비: 1200px
- 섹션 간격: 100px
- 네비게이션: 상단 고정

### 톤 & 무드
- 클린 비즈니스, 미니멀
- 무채색 베이스 + 퍼플 포인트
- 담백하지만 단순하지 않음
- 신뢰감 + 호기심 유발

---

## 페이지 구조

```
1. Hero (히어로 섹션) ✅ 완료
2. About (자기소개)
3. Skills (역량) - 선택
4. Experience (경력)
5. Projects (프로젝트 2~3개 + 더보기)
6. Contact (연락처)
```

---

## 히어로 섹션 (완료)

### 콘텐츠
```
김동년
기획하고 직접 만드는 사람

Plan → Build → Automate
```

### 애니메이션
- 페이지 진입 시 "Plan → Build → Automate" 순차 페이드인 (0.3초 간격)
- 배경에 은은한 퍼플 그라데이션

### 구현 파일
- `src/components/Hero.jsx`
- `src/components/Hero.css`

---

## About 섹션 (미완료)

### 방향
- 간단한 자기소개
- 어떤 사람인지, 어떤 가치를 추구하는지
- 1~2 문단 정도

### 포함할 내용
- 컴퓨터공학 전공 + 지존소프트 정규직
- 기획과 개발을 동시에 하는 사람
- 자동화와 AI 통합에 관심

---

## Experience 섹션 (미완료)

### 구성
```
지존소프트 | 2024.xx ~ 현재 | Software Developer

- Notion 기반 프로젝트 관리
- n8n 자동화 워크플로우 개발
- DB 설계, 프론트엔드 개발 (시나브로G)
- 멀티채널 주문 자동화 시스템 (카카오톡/SMS/엑셀 → 통합 처리)
```

---

## Projects 섹션 (미완료)

### 메인 프로젝트 (2~3개, 상세 표시)
1. **멀티채널 주문 자동화 시스템** - 회사 실무
2. **Good Hands (인굿핸즈)** - 산학협력 프로젝트
3. **AI Avatar Insight Platform** 또는 **주식 뉴스 자동화** - 선택

### 추가 프로젝트 (링크로 연결)
- 노션 페이지 또는 별도 페이지로 연결
- TeamTalk, LinkCare, 유튜브 쇼츠 자동화 등

### 프로젝트 카드 구조
```
프로젝트명
한 줄 설명
기술 스택 태그
[상세보기] [GitHub] [Live]
```

---

## Contact 섹션 (미완료)

### 포함 정보
- 이메일
- GitHub
- LinkedIn (있다면)
- 연락 CTA

---

## 추가 기능 (선택)

- [ ] 다크 테마 토글
- [ ] 반응형 (모바일 네비게이션 햄버거 메뉴)
- [ ] 스크롤 시 현재 섹션 네비게이션 하이라이트
- [ ] 프로젝트 상세 모달 또는 별도 페이지

---

## 현재 진행 상황

### 완료
- [x] 프로젝트 세팅 (Vite + React)
- [x] 디자인 시스템 (CSS 변수, Pretendard)
- [x] Navbar 컴포넌트
- [x] Hero 섹션 (애니메이션 포함)
- [x] 섹션 뼈대 (About, Experience, Projects, Contact)

### 진행 필요
- [ ] About 섹션 콘텐츠
- [ ] Experience 섹션 콘텐츠
- [ ] Projects 섹션 콘텐츠
- [ ] Contact 섹션 콘텐츠
- [ ] 반응형 대응
- [ ] (선택) 다크 테마
