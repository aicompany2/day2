// API 주소 설정 — 배포 후 Railway 주소로 한 번만 바꾸면 모든 페이지에 적용됩니다.
// (이 파일에는 비밀 키를 절대 넣지 마세요. 주소는 공개되어도 안전한 값입니다.)
window.API_URL =
  location.hostname === 'localhost' || location.hostname === '127.0.0.1'
    ? 'http://localhost:8000'
    : 'https://YOUR-RAILWAY-APP.up.railway.app';
