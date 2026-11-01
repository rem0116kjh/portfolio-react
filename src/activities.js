// Participation and development results are retained from the original portfolio.
// Independently checked team standings have a resultSource link.
export const activityGroups = [
  {
    id: 'ctf', title: 'CTF·보안 대회', description: '팀 대회의 순위는 팀 전체 결과입니다. 개인의 문제별 기여와 풀이 코드는 별도 공개 기록으로 구분합니다.',
    items: [
      { date: '2026', title: 'Hack.lu CTF 2026', result: 'Hwalbin · 팀 24위', detail: '팀원으로 참가. 공식 Open bracket 스코어보드에서 팀 결과를 확인할 수 있습니다.', resultSource: 'https://flu.xxx/scoreboard', sourceLabel: '공식 스코어보드' },
      { date: '2026', title: 'HITCON CTF 2026', result: '팀 참가', detail: 'Hwalbin 팀 활동으로 참가한 대회입니다. 개인 풀이와 팀 성과를 구분해 정리합니다.' },
      { date: '2026.08', title: 'ASIS CTF Quals 2026 · Iran Tech Olympics CTF', result: 'Hwalbin · 팀 10위', detail: '두 대회가 통합 개최된 예선입니다. 같은 결과를 별개 수상으로 중복 계산하지 않습니다.', resultSource: 'https://ctftime.org/event/3033', sourceLabel: 'CTFtime 결과' },
      { date: '2026', title: 'FAUST CTF 2026', result: '참가', detail: '보안 대회 참여 이력. 개인 담당 문제와 공식 팀 결과는 후속 기록으로 연결합니다.' },
      { date: '2026.08', title: 'CCE 예선전', result: '예선 참가', detail: '예선 참여 이력. 참가 팀과 개인 역할을 구분해 관리합니다.' },
      { date: '2026', title: 'COSS 청소년 사이버 해킹방어', result: '예선 참가', detail: '청소년 보안 대회 예선 참여 이력.' },
      { date: '2026', title: '사이버가디언즈 CMX', result: '팀 대회 참가', detail: '팀 기반 보안 대회 참여 이력.' },
      { date: '2026', title: 'SCA CTF', result: '본선 참가', detail: '보안 대회 본선 참여 이력.' },
      { title: '현대오토에버 화이트해커 경진대회', result: '입상', detail: '기존 포트폴리오에 기록된 입상 이력. 수상 부문과 개최 시기는 추가 자료에 맞춰 보완합니다.' },
    ],
  },
  {
    id: 'development', title: '개발·AI·교내 대회', description: '기존 포트폴리오에 기록해 둔 개발 분야의 참가·수상 이력입니다. 기록에 없는 연도나 수상 명칭은 추가하지 않았습니다.',
    items: [
      { title: '총장배 로봇 프로그래밍 경진대회', result: '3등', detail: '로봇 프로그래밍 분야 수상 이력. 기존 기록의 대회명과 결과를 유지했습니다.' },
      { title: '미래를 그리는 알고리즘 경진대회', result: '2등', detail: '알고리즘 경진대회 수상 이력. 세부 과제와 풀이 자료는 별도로 정리합니다.' },
      { date: '2026', title: '제8회 전국 학생 AI 경진대회', result: '본선 진출', detail: '교과연계 AI 탐구 부문. 본선 진출 이후의 최종 결과는 추가 기재하지 않았습니다.' },
      { title: '교내 포트폴리오 경진대회', result: '3등 · 1·2학년 연속', detail: '프로젝트와 활동 기록을 정리해 소개한 교내 포트폴리오 수상 이력.' },
    ],
  },
  {
    id: 'learning', title: '교육·실습·보안 커뮤니티', description: '교육·수료·팀 활동을 대회 성적과 구분했습니다.',
    items: [
      { title: '비주얼캠프 도제 교육·실습', result: '학습 앱 데모 개발', detail: 'ReadIn AI 학습 화면·기능 개발, 시선추적 도입과 Android 앱 안정화 경험.', project: '/projects/readin' },
      { date: '2025', title: '현대오토에버 고교생 IT 꿈나무 화이트해커', result: '교육', detail: '화이트해커 양성 교육 참여.' },
      { date: '2026', title: 'KISA 버그헌팅 실습훈련 초급과정', result: '수료', detail: '버그헌팅 실습훈련 교육 수료 이력.' },
      { date: '2026', title: '경기 청소년 사이버 보안 캠프', result: '참여', detail: '청소년 대상 보안 캠프 참여.' },
      { date: '2026', title: 'Hwalbin', result: '팀원', detail: 'CTF 팀 활동. 공개 팀 프로필에 rem0116kjh 계정이 등록되어 있습니다.', resultSource: 'https://ctftime.org/team/304129', sourceLabel: '팀 공개 프로필' },
      { date: '2026', title: 'Null;', result: '팀 리더', detail: '기존 포트폴리오에 기록된 해킹팀 활동.' },
      { date: '2026', title: '.HACK 컨퍼런스', result: '참여', detail: '보안 분야 컨퍼런스 참여.' },
      { date: '2026', title: 'The Ignition 2026 :: YHHS X Hashed', result: '참여', detail: '기술·창업 분야 컨퍼런스 참여.' },
      { date: '2024', title: '인공지능 창업체험과 특강', result: '교육', detail: 'AI와 창업 관련 교육·특강 참여.' },
      { date: '2024', title: '앱인벤터·메이커 활동', result: '프로젝트 활동', detail: '앱 제작과 메이커 활동 경험.' },
    ],
  },
  {
    id: 'community', title: '교내·지역 활동', description: '기술 외에도 기록하고 전달하며 협업한 경험입니다.',
    items: [
      { date: '2024–2026', title: '학생기자단과 학교 블로그', result: '학생기자', detail: '학교 활동을 취재하고 글로 정리하는 기자단 활동.' },
      { date: '2024–2025', title: '청소년운영위원회 정책부', result: '위원', detail: '청소년운영위원회 정책부 활동.' },
      { date: '2024', title: '네이버 청소년 크리에이터 스쿨', result: '교육', detail: '콘텐츠 제작 관련 교육 참여.' },
    ],
  },
]
