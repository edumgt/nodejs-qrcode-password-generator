// 📦 필요한 패키지 설치
// npm install prompt axios cheerio

import prompt from "prompt";
import axios from "axios";
// import cheerio from "cheerio";
import * as cheerio from "cheerio";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { URL } from "url";

// __dirname 대체 (ESM 환경용)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function downloadFile(fileUrl, savePath) {
  try {
    const response = await axios.get(fileUrl, { responseType: "arraybuffer" });
    fs.mkdirSync(path.dirname(savePath), { recursive: true });
    fs.writeFileSync(savePath, response.data);
    console.log("📥 저장 완료:", savePath);
  } catch (err) {
    console.error("❌ 다운로드 실패:", fileUrl, err.message);
  }
}

async function crawlWebsite(targetUrl) {
  try {
    // 1. 메인 HTML 가져오기
    const { data } = await axios.get(targetUrl);
    const $ = cheerio.load(data);

    // 2. 로컬에 HTML 저장
    const htmlPath = path.join(__dirname, "download", "index.html");
    fs.mkdirSync(path.dirname(htmlPath), { recursive: true });
    fs.writeFileSync(htmlPath, data);
    console.log("✅ 메인 HTML 저장 완료");

    // 3. CSS, JS 파일 경로 수집
    const resources = [];

    $("link[rel='stylesheet']").each((i, el) => {
      const href = $(el).attr("href");
      if (href) resources.push(href);
    });

    $("script[src]").each((i, el) => {
      const src = $(el).attr("src");
      if (src) resources.push(src);
    });

    console.log("🔗 찾은 리소스:", resources);

    // 4. 다운로드 실행
    for (const res of resources) {
      try {
        const absoluteUrl = new URL(res, targetUrl).href;
        const savePath = path.join(
          __dirname,
          "download",
          new URL(absoluteUrl).pathname
        );
        await downloadFile(absoluteUrl, savePath);
      } catch (err) {
        console.error("⚠ 경로 변환 실패:", res);
      }
    }
  } catch (err) {
    console.error("❌ 크롤링 실패:", err.message);
  }
}

async function main() {
  prompt.start();
  prompt.get(["websiteUrl"], async (err, result) => {
    if (err) return console.error(err);

    const websiteUrl = result.websiteUrl;
    console.log("🌍 입력한 URL:", websiteUrl);

    await crawlWebsite(websiteUrl);
  });
}

main();
