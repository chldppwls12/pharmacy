## 💊 동물약국 찾기 서비스

---

공공데이터를 활용하여 경기도 내의 동물약국 정보를 찾아볼 수 있는 웹 서비스

### 프로젝트 목표

---

사용자들이 경기도 내의 동물의약품을 취급하는 약국만을 지역별로 보다 쉽게 검색하여 정보를 얻을 수 있음

### 기획 배경 및 필요성

---

- 동물병원에서 사면 비싼 의약품을 동물의약품 취급 판매 약국 (이하 ‘동물약국’) 에서 저렴하고 간편하게 구입할 수 있다. 최신의 정보를 제공하는 것이 중요하기 때문에 공공데이터를 활용하여 경기도 내의 동물약국 정보를 손쉽게 찾아볼 수 있는 웹사이트를 기획해보았다.
- [대한동물약국협회](http://www.anipharm.net/findpharmacy)의 동물약국 찾기 서비스가 있으나, 오래된 데이터와 복잡한 UI를 보완하여 새로운 서비스를 만들어보았다. 메인 페이지에서 직관적으로 지역을 선택할 수 있게 했고, 지도를 활용하여 약국의 위치를 알기 쉽게 표현하였다.

### 팀원 및 역할

---

- [조원제](https://github.com/onejaejae)
  - 공공데이터포털 동물약국 현황 api 가져오기, 카카오맵 api 사용해 기능 구현(사용자 컨트롤 올리기, 마커 생성, 커스텀 오버레이 생성 등)
- [조홍비](https://github.com/dyongdi)
  - 전반적인 디자인 구성
- [최예진](https://github.com/chldppwls12)
  - 디자인 구현

### 기술 스택

---

- Front-end : React

### 기대효과

---

- 외부적 기대효과

  - 수요자 중심의 서비스 질 향상
  - 이용자가 선택한 위치를 기반으로 서비스를 제공하므로 다양한 이용자의 니즈를 수용

- 정성적 기대효과
  - 동물 의약품을 취급하는 약국을 선별해내는 귀찮음, 시간을 덜어낼 수 있다.