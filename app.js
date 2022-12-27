const canvas = document.querySelector("canvas");
//cotext : paint에서 사용할 브러쉬(붓)
const ctx = canvas.getContext("2d")

// 당장은 이해안되지만 css에서 작업한 너비와 높이를 js에서도 설정
// 이후 js에서만 작업할거임 : 이미지 퀄리티를 높이기 위해서
canvas.width=800;
canvas.height=800;

// canvas의 좌표 시스템 : 좌측상단부터 0,0의 x축과 y축으로 이루어져 있음.

// 전부 같은 경로의 일부이기 때문에 스타일을 바꾸면 전체로 적용된다. 
ctx.rect(50,50,100,100); // 모양을 채우기 전에 선을 그릴 수 있다. 
ctx.rect(150,150,100,100);
ctx.rect(250,250,100,100);
ctx.fill(); // 그린 선에 모양을 만들 수 있음 fill or stroke

// 이전 경로와의 연결을 끊고 새로 경로를 만듬.
ctx.beginPath(); // 이전 경로와의 단절
ctx.rect(350,350,100,100);
ctx.fillStyle="red";
ctx.fill();

// ctx.fillRect(50,50,100,200); // fillRect(x축,y축,너비,높이) : 채워진 사각형을 그리는 함수
//ctx.strokeRect(50,50,100,200); // strokeRect(x축,y축,너비,높이) : 비워진 사각형을 그리는 함수
