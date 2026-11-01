import timetable from './assets/projects/ghas-timetable.jpg'
import schedule from './assets/projects/ghas-schedule.jpg'

export const profile = { github: 'https://github.com/rem0116kjh', email: 'kjh08116@naver.com', blog: 'https://velog.io/@luka0116kjh/posts' }
export const projects = [
  {
    id: 'ghas', name: 'GHAS 알리미', category: '학교생활 · 앱 / 웹', status: '스토어 공개',
    summary: '학생들이 급식과 시간표를 한곳에서 확인하는 학교생활 앱.',
    problem: '학교생활에 필요한 급식과 시간표를 매번 따로 찾아야 하는 학생들을 위해 정보를 모았습니다.',
    role: '학교생활 지원 서비스 개발. 공개 소개에서 확인되는 범위는 급식·시간표 안내이며, 플랫폼별 기여와 협업 범위는 별도 개발 기록을 보완하고 있습니다.',
    period: '공개 스토어 등록 · 개발 기간 미기재', team: '개발 프로젝트 · 협업 범위 별도 확인',
    flow: ['앱 실행', '급식 또는 시간표 선택', '필요한 학교 정보 확인'],
    tech: 'HTML·CSS·JavaScript / TypeScript · Firebase Hosting · Android WebView · iOS WKWebView. 하나의 운영 웹 URL을 두 플랫폼에서 표시하는 구조로, 공통 화면의 변경을 웹 배포로 반영합니다.',
    decision: '시간표 조회에 실패해도 마지막 정상 정보를 유지하도록 캐시를 사용합니다. 공개 src/timetable.ts는 캐시 데이터의 형식을 검사하고, 손상된 캐시는 사용하지 않습니다. 조회 실패와 데이터 손상을 구분하는 구현을 확인했습니다. 이는 현재 코드에서 확인한 동작이며 당시 의사결정의 회고나 장애 해결 성과를 추정하지 않습니다.',
    verification: '공개 ghaslunch1 저장소의 README와 src/timetable.ts에서 웹·네이티브 연결 구조와 캐시 처리를 확인했습니다. 기존 포트폴리오에 출처가 기록된 스토어 화면을 사용했습니다. 이 포트폴리오 작업에서는 앱 실행이나 서버 응답을 재검증하지 않았으므로 사용자 수·성능·테스트 수를 제시하지 않습니다.',
    limit: '플랫폼별 개발 범위, 오류 수정 사례와 실기기 검증 기록을 공개 가능한 형태로 정리할 필요가 있습니다.',
    images: [{src:timetable, alt:'GHAS 알리미의 주간 시간표 화면', caption:'주간 시간표 — 과목을 요일과 교시별로 확인합니다. 출처: 공개 App Store 등록 이미지.'}, {src:schedule, alt:'GHAS 알리미의 학사일정 화면', caption:'학사일정 — 학교 일정을 확인하는 화면입니다. 출처: 공개 App Store 등록 이미지.'}],
    links: [{label:'공개 소스',url:'https://github.com/rem0116kjh/ghaslunch1'}, {label:'웹 서비스',url:'https://ghaslunch1.web.app/'}, {label:'App Store',url:'https://apps.apple.com/kr/app/id6779186783'}, {label:'Google Play',url:'https://play.google.com/store/apps/details?id=kr.hs.ghas.ghason'}],
  },
  {
    id:'readin', name:'ReadIn AI', category:'교육 · 학습 앱 데모', status:'교육·실습 프로젝트',
    summary:'문해력과 수리 문해력 학습을 다루는 교육 앱 데모 개발 경험.',
    problem:'학습자가 문제를 풀고 학습 과정을 확인할 수 있는 교육 앱을 만드는 프로젝트입니다. 문해력과 수리 문해력 작업을 하나의 프로젝트 사례로 정리했습니다.',
    role:'비주얼캠프 도제 교육·실습 과정에서 학습 화면과 기능 개발, 시선추적 도입 및 Android 앱 안정화 작업에 참여했습니다. 회사 프로젝트 전체의 성과와 개인 작업을 구분해 소개합니다.',
    period:'도제 교육·실습 과정 · 세부 수행 기간 미기재', team:'회사 교육·실습 프로젝트',
    flow:['학습 영역 선택', '학습 화면과 문제 풀이', '학습 결과 확인'],
    tech:'학습 앱 UI·기능 개발, 시선추적 기능 연동, Android 실기기 검수 경험을 중심으로 정리한 사례입니다.',
    decision:'학습 콘텐츠 구현과 기기에서의 안정적인 동작을 함께 다뤘습니다. 포트폴리오에서는 두 학습 영역을 묶어 소개하지만, 실제 앱의 통합 완료를 뜻하지 않습니다.',
    verification:'기존 포트폴리오에 학습 화면 개발·시선추적 도입·Android 검수 및 오류 수정 경험이 기재되어 있습니다. 공개 저장소에는 앱 소스와 실행 결과가 없어 통합 완료, 캘리브레이션·시선 데이터 처리·리포트 반영의 세부 범위를 확정하지 않습니다.',
    limit:'공개 가능한 코드·화면과 개인 담당 범위에 대한 근거를 보완해야 합니다. 회사 내부 자료와 학습자 데이터는 공개하지 않습니다.',
    images:[], links:[],
  },
  {
    id:'suffice-patch', name:'SufficePatch', category:'개발 도구 · AI 활용', status:'오픈소스',
    summary:'AI 코딩 도구가 수정 전에 프로젝트 맥락을 모으도록 돕는 스킬.',
    problem:'코드 수정 전에 관련 소스, 프로젝트 지침, 의존성과 테스트 후보를 함께 파악하는 작업을 돕습니다.',
    role:'Codex·Claude Code를 위한 프로젝트 맥락 수집 스킬 개발. 공개 저장소에서 구현을 확인할 수 있습니다.',
    period:'공개 저장소 운영 · 개발 기간 미기재', team:'공개 개발 도구 프로젝트',
    flow:['프로젝트 지정', '지침·소스·변경 내역 수집', '요약 또는 JSON 확인', '수정 범위 판단'],
    tech:'Python · Codex · Claude Code. 다양한 코드베이스의 맥락을 텍스트와 JSON으로 전달하는 구성입니다.',
    decision:'AI에게 바로 수정을 맡기기 전에 관련 파일과 테스트 후보를 먼저 모으도록 했습니다. 수집된 정보는 개발자가 변경 범위를 판단하는 입력이며, 올바른 수정이나 성능 향상을 보장하는 결과로 취급하지 않습니다.',
    verification:'공개 GitHub 저장소와 스킬 설명 페이지를 제공합니다. 이 포트폴리오에는 검증되지 않은 토큰 절감률이나 작업 속도 개선 수치를 싣지 않았습니다.',
    limit:'프로젝트마다 수집된 맥락의 적절성을 확인해야 하며, AI가 생성한 수정은 직접 검토하고 해당 프로젝트의 검사로 검증해야 합니다.',
    images:[],links:[{label:'GitHub 소스',url:'https://github.com/rem0116kjh/suffice-patch'},{label:'스킬 설명',url:'https://rem0116kjh.github.io/suffice-patch/'}],
  },
]
export const moreProjects = [
  {name:'lhLinux',summary:'Ubuntu 기반 WSL2 CLI 개발 환경.',url:'https://github.com/rem0116kjh/lhlinux'},
  {name:'GCPT',summary:'AI 토론 시각화 프로젝트. 디자인과 일부 기능 구현에 참여.',url:'https://github.com/cksdud32/gcpt'},
  {name:'KTspace',summary:'조건을 바꾸며 행성 궤도와 환경을 비교하는 교육용 시뮬레이터.',url:'https://github.com/rem0116kjh/KTspace'},
]
