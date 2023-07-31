## *💸* **가계부를 자동으로 입력해준다고? SHOW ME THE MONEY** *💸*

가계부를 직접 작성하지 않고, 자동으로 작성해주는 **SMTM**입니다!

**SMTM**과 함께 **절약**을 해보러 가볼까요?<br/>
: 네이버 OCR 를 활용해 영수증 사진을 넣으면 결제 정보를 자동으로 읽어 가계부를 작성해주는 웹 서비스<br/>
**www.smtm.kr -> 현재 서버 중단**

![SHOW me the MONEY (1)](https://user-images.githubusercontent.com/101851472/214908541-19eabb50-e10d-42e5-8bfa-e1a69bc887cf.png)
 <br>
 ## ❓ WHAT IS SHOW ME THE MONEY?
 
**1. 영수증 자동 작성**
    
    → 영수증 사진만 넣으면 편리하게 자동 작성
    
**2. 수입/지출 한눈에 그래프화**
    
    → 수입/지출 그래프화
    → 용도별 지출 그래프화
    → 3개월 수입/지출/평균 그래프화
    
**3. 과도한 지출 NO! 챌린지**
    
    → 챌린지 금액 설정 후, 남은 금액 확인 ⇒ 나만의 과소비 지출 패턴 확인
    → 편하게 +1000씩 눌러 금액 설정
 
 
 ## 🌈 Table of Contents
 - [System Architecture](#system-architecture)
 - [Tech Stack](#%EF%B8%8F-tech-stack)
 - [Service](#-service)
 - [ERD](#-erd)
 - [API](#-api)
 - [Monitoring Tools](#-monitoring-tools)
 - [File Directory](#-file-directory)
 - [Installation](#-installation)
 - [Member](#-member)
 
 <br>
 
## 📍 System Architecture
![SA](https://user-images.githubusercontent.com/101851472/216039402-e5595e53-cde6-487d-b528-af93c982785e.png)

<br>

## 🛠️ Tech Stack
| Frontend | Backend | DevOps | Monitoring |  ETC |
|:--------:|:-------:|:------:|:----------:|:----:|
|<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/><br><img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" /><br><img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" /><br><img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white"/>|<img src="https://img.shields.io/badge/Django-092E20?style=flat&logo=Django&logoColor=white" /><br><img src="https://img.shields.io/badge/Gunicorn-499848?style=flat&logo=Gunicorn&logoColor=white" /><br><img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=white" />|<img src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=Docker&logoColor=white"/><br><img src="https://img.shields.io/badge/NGINX-009639?style=flat&logo=NGINX&logoColor=white"/><br><img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=flat&logo=Amazon EC2&logoColor=white"/>|<img src="https://img.shields.io/badge/Grafana-F46800?style=flat&logo=Grafana&logoColor=white"/><br><img src="https://img.shields.io/badge/Prometheus-E6522C?style=flat&logo=Prometheus&logoColor=white"/><br><img src="https://img.shields.io/badge/-Google%20Analytics-%23FFBB00?logo=Google%20Analytics"/>|<img src="https://img.shields.io/badge/Slack-4A154B?style=flat&logo=Slack&logoColor=white"/><br><img src="https://img.shields.io/badge/Notion-000000?style=flat&logo=Notion&logoColor=white"/><br><img src="https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=Postman&logoColor=white"/><br><img src="https://img.shields.io/badge/Swagger-85EA2D?style=flat&logo=Swagger&logoColor=white"/><br><img src="https://img.shields.io/badge/GitHub Actions-2088FF?style=flat&logo=GitHub Actions&logoColor=white"/><br>|

<br>

## 🔎 Service
[ Main ]<br/>
![초기화면](https://user-images.githubusercontent.com/83697577/216048997-68545a8c-8c24-4a86-aab3-ee2a28c8eb74.gif)

[ Sign Up & Login ]<br/>
![다시 수정](https://user-images.githubusercontent.com/101851472/216041190-18eea216-f25a-4b03-a986-2c4763b78345.gif)

[ Income ]<br/>
![수입내역,추가,수정,삭제](https://user-images.githubusercontent.com/83697577/216049109-330bceb4-bbbc-4849-be97-88276c7a0424.gif)

[ Spending ]<br/>
![영수증](https://user-images.githubusercontent.com/83697577/216049227-e3ef25d0-2a17-4e5a-b3d6-e3998ac7f4f4.gif)

[ Graph ]<br/>
![그래프](https://user-images.githubusercontent.com/83697577/216049328-18cecf3b-d45f-4e14-819d-f742bf2ffbc2.gif)
![다크모드](https://user-images.githubusercontent.com/83697577/216049379-2b3363f8-5cc9-4f67-9d5f-d1bf7e95624d.gif)

[ Spending Challenge ]<br/>
![지출 챌린지](https://user-images.githubusercontent.com/83697577/216049546-b92c3536-a5d0-4a71-ad59-beddba9a3da4.gif)

<br>

## ✏ ERD
<img width="700" alt="스크린샷 2023-01-20 오후 10 04 51" src="https://user-images.githubusercontent.com/101851472/213865825-e2799486-e5de-44e7-8429-09788748da83.png">

<br>

## ✨ API

> Swagger
 
![Untitled](https://user-images.githubusercontent.com/101851472/214647364-906f02b1-905c-49a7-909d-92d837ee6cf9.png)
![2](https://user-images.githubusercontent.com/101851472/214647406-2705d985-086a-42e7-a212-daaaa5087587.png)
![3](https://user-images.githubusercontent.com/101851472/214647431-79b10717-c393-417b-a3e4-ed579a901cda.png)



<br>

## 📊 Monitoring Tools

> Prometheus & Grafana

![스크린샷 2023-01-30 오후 8 40 12](https://user-images.githubusercontent.com/101851472/215557478-aa119871-81d4-48ae-935d-628e091fabff.png)
![스크린샷 2023-01-30 오후 8 41 53](https://user-images.githubusercontent.com/101851472/215557511-c3fc7f77-15f7-467e-970d-d6c718b0e4fc.png)

> Google Analytics
<img width="1495" alt="스크린샷 2023-02-01 오후 8 38 05" src="https://user-images.githubusercontent.com/101851472/216040043-69c9464a-bf76-473e-9407-dc9fd2f500b1.png">
<img width="1495" alt="스크린샷 2023-02-01 오후 8 27 46" src="https://user-images.githubusercontent.com/101851472/216040170-c5faa809-332d-4fe9-be0c-84317c4401b8.png">

<br>

## 📂 File Directory

<details>
<summary> docker </summary>
<aside>

```
📦docker
 ┣ 📂.github
 ┃ ┗ 📂workflows
 ┃ ┃ ┗ 📜Deploy.yml
 ┣ 📂backend
 ┃ ┣ 📂backend
 ┃ ┃ ┣ 📜.env
 ┃ ┃ ┣ 📜__init__.py
 ┃ ┃ ┣ 📜asgi.py
 ┃ ┃ ┣ 📜settings.py
 ┃ ┃ ┣ 📜urls.py
 ┃ ┃ ┗ 📜wsgi.py
 ┃ ┣ 📂income
 ┃ ┃ ┣ 📂migrations
 ┃ ┃ ┃ ┣ 📜0001_initial.py
 ┃ ┃ ┃ ┗ 📜__init__.py
 ┃ ┃ ┣ 📜__init__.py
 ┃ ┃ ┣ 📜admin.py
 ┃ ┃ ┣ 📜apps.py
 ┃ ┃ ┣ 📜models.py
 ┃ ┃ ┣ 📜serializers.py
 ┃ ┃ ┣ 📜tests.py
 ┃ ┃ ┣ 📜urls.py
 ┃ ┃ ┗ 📜views.py
 ┃ ┣ 📂mediafiles
 ┃ ┣ 📂ocr
 ┃ ┃ ┣ 📂migrations
 ┃ ┃ ┃ ┗ 📜__init__.py
 ┃ ┃ ┣ 📜__init__.py
 ┃ ┃ ┣ 📜admin.py
 ┃ ┃ ┣ 📜apps.py
 ┃ ┃ ┣ 📜models.py
 ┃ ┃ ┣ 📜serializers.py
 ┃ ┃ ┣ 📜tests.py
 ┃ ┃ ┣ 📜urls.py
 ┃ ┃ ┗ 📜views.py
 ┃ ┣ 📂prometheus
 ┃ ┣ 📂sample_swagger
 ┃ ┃ ┣ 📂migrations
 ┃ ┃ ┃ ┗ 📜__init__.py
 ┃ ┃ ┣ 📜__init__.py
 ┃ ┃ ┣ 📜admin.py
 ┃ ┃ ┣ 📜apps.py
 ┃ ┃ ┣ 📜models.py
 ┃ ┃ ┣ 📜open_api_params.py
 ┃ ┃ ┣ 📜serializers.py
 ┃ ┃ ┣ 📜tests.py
 ┃ ┃ ┣ 📜urls.py
 ┃ ┃ ┗ 📜views.py
 ┃ ┣ 📂sltaticfies
 ┃ ┣ 📂spending
 ┃ ┃ ┣ 📂migrations
 ┃ ┃ ┃ ┣ 📜0001_initial.py
 ┃ ┃ ┃ ┗ 📜__init__.py
 ┃ ┃ ┣ 📜__init__.py
 ┃ ┃ ┣ 📜admin.py
 ┃ ┃ ┣ 📜apps.py
 ┃ ┃ ┣ 📜models.py
 ┃ ┃ ┣ 📜serializers.py
 ┃ ┃ ┣ 📜tests.py
 ┃ ┃ ┣ 📜urls.py
 ┃ ┃ ┗ 📜views.py
 ┃ ┣ 📂spending_challenge
 ┃ ┃ ┣ 📂migrations
 ┃ ┃ ┃ ┣ 📜0001_initial.py
 ┃ ┃ ┃ ┗ 📜__init__.py
 ┃ ┃ ┣ 📜__init__.py
 ┃ ┃ ┣ 📜admin.py
 ┃ ┃ ┣ 📜apps.py
 ┃ ┃ ┣ 📜models.py
 ┃ ┃ ┣ 📜serializers.py
 ┃ ┃ ┣ 📜tests.py
 ┃ ┃ ┣ 📜urls.py
 ┃ ┃ ┗ 📜views.py
 ┃ ┣ 📂staticfiles
 ┃ ┃ ┣ 📂admin
 ┃ ┃ ┣ 📂drf-yasg
 ┃ ┃ ┗ 📂rest_framework
 ┃ ┣ 📂user
 ┃ ┃ ┣ 📂migrations
 ┃ ┃ ┃ ┣ 📜0001_initial.py
 ┃ ┃ ┃ ┗ 📜__init__.py
 ┃ ┃ ┣ 📜__init__.py
 ┃ ┃ ┣ 📜admin.py
 ┃ ┃ ┣ 📜apps.py
 ┃ ┃ ┣ 📜models.py
 ┃ ┃ ┣ 📜serializers.py
 ┃ ┃ ┣ 📜service.py
 ┃ ┃ ┣ 📜tests.py
 ┃ ┃ ┣ 📜urls.py
 ┃ ┃ ┗ 📜views.py
 ┃ ┣ 📜Dockerfile
 ┃ ┣ 📜db.sqlite3
 ┃ ┣ 📜manage.py
 ┃ ┣ 📜requirements.txt
 ┃ ┗ 📜secrets.json
 ┣ 📂data
 ┃ ┗ 📂grafana
 ┃ ┃ ┣ 📂alerting
 ┃ ┃ ┃ ┗ 📂1
 ┃ ┃ ┃ ┃ ┗ 📜__default__.tmpl
 ┃ ┃ ┣ 📂csv
 ┃ ┃ ┣ 📂file-collections
 ┃ ┃ ┣ 📂plugins
 ┃ ┃ ┣ 📂png
 ┃ ┃ ┗ 📜grafana.db
 ┣ 📂db
 ┃ ┣ 📜.env.db
 ┃ ┣ 📜.env.dev
 ┃ ┣ 📜.env.prod
 ┃ ┣ 📜.env.prod.db
 ┃ ┗ 📜Dockerfile
 ┣ 📂frontend
 ┃ ┣ 📂build
 ┃ ┗ 📂node_modules
 ┣ 📂frontend_repo
 ┃ ┣ 📂public
 ┃ ┃ ┣ 📂assets
 ┃ ┃ ┃ ┗ 📜user.png
 ┃ ┃ ┣ 📜favicon.ico
 ┃ ┃ ┣ 📜index.html
 ┃ ┃ ┣ 📜logo192.png
 ┃ ┃ ┣ 📜logo512.png
 ┃ ┃ ┣ 📜manifest.json
 ┃ ┃ ┣ 📜pig.ico
 ┃ ┃ ┗ 📜robots.txt
 ┃ ┣ 📂src
 ┃ ┃ ┣ 📂assets
 ┃ ┃ ┃ ┣ 📂fonts
 ┃ ┃ ┃ ┃ ┣ 📜LINESeedKR-Bd.ttf
 ┃ ┃ ┃ ┃ ┣ 📜LINESeedKR-Rg.ttf
 ┃ ┃ ┃ ┃ ┗ 📜LINESeedKR-Th.ttf
 ┃ ┃ ┃ ┗ 📂images
 ┃ ┃ ┃ ┃ ┣ 📜logo.svg
 ┃ ┃ ┃ ┃ ┣ 📜side_four.svg
 ┃ ┃ ┃ ┃ ┣ 📜side_one.svg
 ┃ ┃ ┃ ┃ ┣ 📜side_three.svg
 ┃ ┃ ┃ ┃ ┣ 📜side_two.svg
 ┃ ┃ ┃ ┃ ┗ 📜sm.svg
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📂css
 ┃ ┃ ┃ ┃ ┣ 📜Button.css
 ┃ ┃ ┃ ┃ ┣ 📜Challenge.css
 ┃ ┃ ┃ ┃ ┣ 📜IntroSwiper.css
 ┃ ┃ ┃ ┃ ┣ 📜Login.css
 ┃ ┃ ┃ ┃ ┣ 📜Nav.css
 ┃ ┃ ┃ ┃ ┗ 📜Signup.css
 ┃ ┃ ┃ ┣ 📜BarChart.jsx
 ┃ ┃ ┃ ┣ 📜Button.jsx
 ┃ ┃ ┃ ┣ 📜Challenge.jsx
 ┃ ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┃ ┣ 📜IncomeAddModal.jsx
 ┃ ┃ ┃ ┣ 📜IntroSwiper.jsx
 ┃ ┃ ┃ ┣ 📜LineChart.jsx
 ┃ ┃ ┃ ┣ 📜Login.jsx
 ┃ ┃ ┃ ┣ 📜Nav.jsx
 ┃ ┃ ┃ ┣ 📜PieChart.jsx
 ┃ ┃ ┃ ┣ 📜ProgressCircle.jsx
 ┃ ┃ ┃ ┣ 📜Signup.jsx
 ┃ ┃ ┃ ┣ 📜SpendingAddModal.jsx
 ┃ ┃ ┃ ┗ 📜StatBox.jsx
 ┃ ┃ ┣ 📂pages
 ┃ ┃ ┃ ┣ 📂bar
 ┃ ┃ ┃ ┃ ┗ 📜index.jsx
 ┃ ┃ ┃ ┣ 📂challenge
 ┃ ┃ ┃ ┃ ┗ 📜challenge.jsx
 ┃ ┃ ┃ ┣ 📂dashboard
 ┃ ┃ ┃ ┃ ┗ 📜index.jsx
 ┃ ┃ ┃ ┣ 📂global
 ┃ ┃ ┃ ┃ ┣ 📜Sidebar.jsx
 ┃ ┃ ┃ ┃ ┗ 📜Topbar.jsx
 ┃ ┃ ┃ ┣ 📂income
 ┃ ┃ ┃ ┃ ┗ 📜index.jsx
 ┃ ┃ ┃ ┣ 📂intro
 ┃ ┃ ┃ ┃ ┗ 📜index.jsx
 ┃ ┃ ┃ ┣ 📂line
 ┃ ┃ ┃ ┃ ┗ 📜index.jsx
 ┃ ┃ ┃ ┣ 📂login
 ┃ ┃ ┃ ┃ ┣ 📜login.jsx
 ┃ ┃ ┃ ┃ ┗ 📜signup.jsx
 ┃ ┃ ┃ ┣ 📂pie
 ┃ ┃ ┃ ┃ ┗ 📜index.jsx
 ┃ ┃ ┃ ┗ 📂spending
 ┃ ┃ ┃ ┃ ┗ 📜index.jsx
 ┃ ┃ ┣ 📜App.js
 ┃ ┃ ┣ 📜index.css
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜setupProxy.js
 ┃ ┃ ┗ 📜theme.js
 ┃ ┣ 📜.gitignore
 ┃ ┣ 📜README.md
 ┃ ┣ 📜db.json
 ┃ ┣ 📜package-lock.json
 ┃ ┗ 📜package.json
 ┣ 📂grafana
 ┃ ┗ 📂provisioning
 ┃ ┃ ┗ 📂dashboards
 ┃ ┃ ┃ ┣ 📜dashboard.yml
 ┃ ┃ ┃ ┗ 📜docker_host.json
 ┣ 📂nginx
 ┃ ┣ 📂log
 ┃ ┃ ┣ 📜access.log
 ┃ ┃ ┗ 📜error.log
 ┃ ┣ 📜Dockerfile
 ┃ ┗ 📜nginx.conf
 ┣ 📂prometheus
 ┃ ┣ 📂consoles
 ┃ ┃ ┗ 📜django.html
 ┃ ┣ 📜django.rules
 ┃ ┗ 📜prometheus.yml
 ┣ 📜.DS_Store
 ┣ 📜.gitignore
 ┣ 📜README.md
 ┣ 📜docker-compose.logging.yml
 ┣ 📜docker-compose.prod.yml
 ┗ 📜docker-compose.yml
```

</aside>
</details>

<br>

## ♻ Installation

### 1. Clone Repository
```
git clone https://github.com/2022-Winter-Bootcamp-Team-C/docker.git
```
### 2. Front-end : package.json 파일 수정
  ```json
  {
    "proxy": "http://<ip>:<server_port>",
  }
  ```

### 3. terminal에서 docker 명령어 실행 🐳
```docker
docker-compose -f docker-compose.prod.yml -f docker-compose.logging.yml up --build
# DB table 생성
docker-compose -f docker-compose.prod.yml -f docker-compose.logging.yml exec backend python manage.py migrate --noinput 
```

<br>

## 👫 Member

<table width="1000">
    <thead>
    </thead>
    <tbody>
    <tr>
        <th>Pictures</th>
         <td width="100" align="center">
            <a href="https://github.com/jung-yeon99">
                <img src="https://avatars.githubusercontent.com/u/83697577?s=400&u=bc045ecc3192a39eb88e370299a5d1097df08a3f&v=4" width="60" height="60">
            </a>
        </td>
        <td width="100" align="center">
             <a href="https://github.com/dlwldnjs1009">
                <img src="https://avatars.githubusercontent.com/u/107186291?v=4" width="60" height="60">
            </a>
        </td>
        <td width="100" align="center">
             <a href="https://github.com/KeonYu">
                <img src="https://avatars.githubusercontent.com/u/96862049?v=4" width="60" height="60">
            </a>
        </td>
        <td width="100" align="center">
             <a href="https://github.com/zinwonzung">
                <img src="https://avatars.githubusercontent.com/u/113844225?v=4" width="60" height="60">
            </a>
        </td>
        <td width="100" align="center">
             <a href="https://github.com/dmswn1004">
                <img src="https://avatars.githubusercontent.com/u/101851472?v=4" width="60" height="60">
            </a>
        </td>
    </tr>
    <tr>
        <th>Name</th>
        <td width="100" align="center">김정연</td>
        <td width="100" align="center">이지원</td>
        <td width="100" align="center">유건</td>
        <td width="100" align="center">정진원</td>
        <td width="100" align="center">조은주</td>
    </tr>
    <tr>
        <th>Position</th>
        <td width="150" align="center">
            Frontend<br>
            Leader<br>
        </td>
        <td width="150" align="center">
            Backend<br>
            DevOps<br>
        </td>
        <td width="150" align="center">
            Backend<br>
            DevOps<br>
        </td>
        <td width="150" align="center">
            Frontend<br>
        </td>
        <td width="150" align="center">
            Backend<br>
            DevOps<br>
        </td>
    </tr>
    <tr>
        <th>GitHub</th>
        <td width="100" align="center">
            <a href="https://github.com/jung-yeon99">
                <img src="http://img.shields.io/badge/jungyeon99-green?style=social&logo=github"/>
            </a>
        </td>
        <td width="100" align="center">
            <a href="https://github.com/dlwldnjs1009">
                <img src="http://img.shields.io/badge/dlwldnjs1009-green?style=social&logo=github"/>
            </a>
        </td>
        <td width="100" align="center">
            <a href="https://github.com/KeonYu">
                <img src="http://img.shields.io/badge/YuKeon97-green?style=social&logo=github"/>
            </a>
        </td>
        <td width="100" align="center">
            <a href="https://github.com/zinwonzung">
                <img src="http://img.shields.io/badge/zinwonzung-green?style=social&logo=github"/>
            </a>
        </td>
        <td width="100" align="center">
            <a href="https://github.com/dmswn1004">
                <img src="http://img.shields.io/badge/dmswn1004-green?style=social&logo=github"/>
            </a>
        </td>
     </tr>
    </tbody>
</table>

## 💬 Medium
<b><a href="https://medium.com/@dlwldnjs1009/smart-household-account-service-9f55ec3851ec">🇺🇸 Medium English.ver </a></b><br/>
<b><a href="https://medium.com/@dlwldnjs1009/smart-%EA%B0%80%EA%B3%84%EB%B6%80-%EC%84%9C%EB%B9%84%EC%8A%A4-f89a74297aa">🇰🇷 Medium Korean.ver </a></b><br/>

<div align="right">
    <b><a href="#-가계부를-자동으로-입력해준다고-show-me-the-money-">⬆️ Back to Top</a></b>
</div>
