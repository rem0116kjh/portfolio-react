# 김진형 · REM 포트폴리오

React 19 + Vite 7 + React Router. 기존 GitHub Pages 배포 구조를 유지합니다.

## 실행

Node는 `.nvmrc`에 지정된 버전을 사용합니다.

```sh
npm ci
npm run dev
npm run lint
npm run build
npm run preview
```

JavaScript 프로젝트로 별도 타입 검사 스크립트는 없습니다. ESLint와 Vite 빌드를 실행합니다.

## 구성과 콘텐츠

- `src/App.jsx`: 홈, 프로젝트 목록·상세, 경험·이력, 보안·CTF, 개발 노트, 소개·연락처.
- `src/content.js`: 대표 프로젝트 본문과 공개 링크. 프로젝트 추가 시 여기서 관리합니다.
- `src/Portfolio.css`: 반응형 레이아웃, 라이트·다크, 인쇄 스타일.
- `src/assets/projects/SOURCES.md`: 기존 실제 앱 이미지 출처.
- `docs/PORTFOLIO_REVIEW.md`: 콘텐츠 근거, 보류 사항, 검증 결과.

Pages의 하위 경로 `/portfolio-react/`를 유지합니다. 정적 호스팅에서 상세 주소 새로고침이 동작하도록 HashRouter를 사용합니다. 예: `/portfolio-react/#/projects/ghas`. 새 콘텐츠에 맞춘 타이틀·설명은 클라이언트에서 변경합니다. 소셜 크롤러는 해시별 페이지를 구분하지 못하므로 공유 미리보기는 공통 이미지와 설명입니다. 프로젝트별 공유 카드가 필요하면 정적 사전 렌더링과 경로 구조를 함께 변경해야 합니다.

`main` push → GitHub Actions → npm ci → lint → build → GitHub Pages 배포. 기존 워크플로를 유지했습니다. 기존 terminal/영문 콘텐츠 컴포넌트·자산은 보존했으나 새 한국어 화면에서는 사용하지 않습니다.
