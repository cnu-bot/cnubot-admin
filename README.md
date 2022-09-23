# 츠누봇 관리자 페이지

<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url] -->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/cnu-bot">
    <img src="https://user-images.githubusercontent.com/69495129/191981078-ce719995-d227-43b3-98f7-12e656336faf.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">🌎Cnubot admin🌎</h3>
  <p align="center">
    <br />
    <a href="https://github.com/cnu-bot"><strong>Explore the Organization</strong></a>
    <br />
    <br />
    <!-- <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a> -->
    <!-- · -->
    <a href="https://github.com/cnu-bot/issuess">Report Bug</a>
    ·
    <a href="https://github.com/cnu-bot/issues">Request Feature</a>
  </p>
</div>

### Built With

Frontend

<code><img width="60" height="60" src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"></code>
<code><img width="60" height="60" src="https://www.vectorlogo.zone/logos/w3_css/w3_css-official.svg"></code>
<code><img width="60" height="60" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"></code>
<code><img width="60" height="60" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"></code>

etc

<code><img width="60" height="60" src="https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg"></code>
<code><img width="60" height="60" src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg"></code>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### convention

- Coding Convention

1. React folder Structure
   ```txt
   /SomeComponent or page folder
   ├── index.js
   ├── SomeComponent.tsx
   └── SomComponent.style.ts
   /SomeComponent2 or page folder
   ├── index.js
   ├── SomeComponent2.tsx
   └── SomComponent2.style.ts
   ```
2. prettier

   ```txt
   {
   "arrowParens": "avoid",
   "bracketSpacing": true,
   "htmlWhitespaceSensitivity": "css",
   "insertPragma": false,
   "jsxBracketSameLine": false,
   "jsxSingleQuote": false,
   "printWidth": 80,
   "proseWrap": "preserve",
   "quoteProps": "as-needed",
   "requirePragma": false,
   "semi": true,
   "singleQuote": false,
   "tabWidth": 2,
   "trailingComma": "none",
   "useTabs": false
   }
   ```

3. Camel Case

   ```ts
   lectureHall;
   lastName;
   ```

4. 타입 관리

- 전역적으로 재사용될 타입: `src/@types/index.d.ts`에서 `declare`하여 정리(import, export 필요 없음)
- 단 하나의 컴포넌트에만 쓰이는 타입은 해당 파일 내부에 선언해도 무관
- 타입 선언 방식: interface(대부분의 타입) + type alias(원시 타입)

### Commit Convention

feat: 새로운 기능에 대한 커밋  
content: 내용
design: UI 수정 및 구현에 대한 커밋
fix: 버그 수정에 대한 커밋  
build: 빌드 관련 파일 수정에 대한 커밋  
etc: 그 외 자잘한 수정에 대한 커밋  
docs: README.md 수정에 대한 커밋  
style: 코드 스타일 혹은 포맷 등에 관한 커밋(prettier 등)  
refactor: 코드 리팩토링에 대한 커밋

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- we use yarn berry for zero-install
  ```sh
  yarn install
  yarn start
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/cnu-bot/cnubot-admin.git
   ```
2. Install NPM packages both client and server
   ```sh
   yarn install
   ```
3. start your web
   ```sh
   yarn start
   ```
4. test your web
   ```sh
   yarn test
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feat/AmazingFeature`) we have our convention
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request (we have our PR templates)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Chanhyuk Park - [GitHub](https://github.com/ChanhyukPark-Tech) - chanhyuk-tech@kakao.com

Project Link: [cnubot-admin](admin)

<p align="right">(<a href="#top">back to top</a>)</p>

## 🌟 Contributors

[![contributors](https://contrib.rocks/image?repo=cnu-bot/cnubot-admin)](https://github.com/cnu-bot/cnubot-admin/graphs/contributors)
