// 📦 설치: npm install axios
import axios from "axios";

async function checkRobotsTxt(url) {
  try {
    const robotsUrl = new URL("/robots.txt", url).href;
    const { data } = await axios.get(robotsUrl, { timeout: 5000 });
    console.log(`✅ [${url}] robots.txt 확인 성공`);
    console.log("--------------------------------------------------");
    console.log(data.substring(0, 500)); // 앞부분만 출력 (길이 제한)
    console.log("--------------------------------------------------\n");
  } catch (err) {
    console.error(`❌ [${url}] robots.txt 확인 실패: ${err.message}\n`);
  }
}

async function main() {
  // 🇰🇷 한국의 유명 공공기관 사이트 10여개 (랜덤 선정)
  const sites = [
    "https://www.gov.kr",             // 정부24
    "https://www.mois.go.kr",         // 행정안전부
    "https://www.moe.go.kr",          // 교육부
    "https://www.mohw.go.kr",         // 보건복지부
    "https://www.me.go.kr",           // 환경부
    "https://www.msit.go.kr",         // 과학기술정보통신부
    "https://www.korea.go.kr",        // 대한민국정부 대표포털
    "https://www.naver.com",          // (비공공, 비교용)
    "https://www.seoul.go.kr",        // 서울시청
    "https://www.busan.go.kr",        // 부산광역시청
    "https://www.suwon.go.kr"         // 수원시청
  ];

  for (const site of sites) {
    await checkRobotsTxt(site);
  }
}

main();
