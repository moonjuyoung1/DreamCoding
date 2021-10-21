//switch

const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
  case "Firefox":
    console.log("love you!");
    break;
  default:
    console.log("same all!");
    break;
}

// while 조건이 true 일 동안 실행

let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while do안의 코드를 먼저 실행한 후
//while 조건 통과한지 검사후 실행할지 안할지 결정

do {
  console.log(`do while:${i}`);
  i--;
} while (i > 0);

//continue 와 break 사용

for (let i = 0; i < 11; i++) {
  if (i % 2 === 1) {
    continue;
  }

  console.log(i);
}

for (let i = 0; i < 11; i++) {
  if (i === 9) {
    break;
  }
  console.log(i);
}
