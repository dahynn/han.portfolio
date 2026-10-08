# 유다현 · 한솔PNS IT 포트폴리오

한화 포트폴리오의 화면 구성과 프로젝트 자료를 재사용한 한솔PNS IT 지원용 풀스택 개발자 정적 포트폴리오입니다.

## 로컬 실행

Node.js 22.13 이상을 사용합니다.

```sh
npm ci
npm run dev -- --port 5173
```

## 검사와 정적 빌드

```sh
npm run lint -- --deny-warnings
npm run build:pages
```

정적 결과물은 `dist/client`입니다.

## GitHub Pages 설정

1. 저장소 Settings → Pages → Source를 **GitHub Actions**로 선택합니다.
2. Custom domain에 **hansol.dahyeon.kr**을 입력합니다.
3. DNS는 CNAME `hansol` → `dahynn.github.io.` (TTL 600)으로 설정합니다.
4. Settings → Secrets and variables → Actions → Variables에 `PORTFOLIO_PAGES_ENABLED`를 값 `true`로 추가합니다.
5. Actions → Portfolio CI → Run workflow를 실행합니다.
6. 도메인 인증서가 발급되면 Pages의 Enforce HTTPS를 켭니다.

검사와 빌드는 main push 및 PR에서 자동 실행됩니다. 배포는 위 변수를 켠 뒤에만 실행됩니다. GitHub Pages와 DNS 설정은 사용자가 직접 수행합니다.

## 브랜드 원본

- 한솔 공식 CI: https://hansol.com/home/hansol/hansol04.jsp
- 로고: 사용자가 제공한 한솔PNS PNG 원본
- 파랑 `#007fc3`, 초록 `#00a650`: 제공된 로고 색상
- 인재상: https://hansol.com/home/recruit/recruit01.jsp 의 몰입·투명·존중·스피드와 원형 구성을 반영합니다.
- 기존 활동 이력인 한화금융캠퍼스는 유지합니다.
