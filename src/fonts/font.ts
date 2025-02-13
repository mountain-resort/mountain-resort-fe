import { Lora, Open_Sans } from "next/font/google";


// Font의 classnames를 합치는 공통 함수
const sumClass = (...classnames: string[]) => {
  return classnames.join(" ");
};

const lora = Lora({
  subsets: ["latin"], // preload에 사용할 subsets 또는 preload: false
  weight: ["400", "500", "600", "700"], // 사용할 weight 설정
  variable: "--lora", // tailwindcss에서 사용할 수 있도록 CSS 변수 방식 설정
  display: "swap",
});

const open_sans = Open_Sans({
  weight: ["400"],
  variable: "--open_sans",
  display: "swap",
});

// 폰트가 추가되면 여기에 ,(콤마)로 구분하여 추가함 - 외부에서 FontClassNames를 불러와 적용함
export const FontClassNames = sumClass(lora.className, open_sans.variable);