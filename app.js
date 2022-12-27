const canvas = document.querySelector("canvas");
//cotext : paint에서 사용할 브러쉬(붓)
const ctx = canvas.getContext("2d")

// 당장은 이해안되지만 css에서 작업한 너비와 높이를 js에서도 설정
// 이후 js에서만 작업할거임 : 이미지 퀄리티를 높이기 위해서
canvas.width=800;
canvas.height=800;

// canvas의 좌표 시스템 : 좌측상단부터 0,0의 x축과 y축으로 이루어져 있음.
// fillRect(x축,y축,너비,높이) : 사각형을 그리는 함수
// ctx.fillRect(50,50,100,200);
ctx.strokeRect(50,50,100,200);
