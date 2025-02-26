interface TextBoxType {
  text?: string;
  size?: string; //기본 값을 위해 분리 시켜놓음
  weight?: string; //기본 값을 위해 분리 시켜놓음
  otherStyle?: string; //색, 폰트 등 기타 속성
}

const TextBox = ({
  text,
  size = 'text-md',
  weight = 'font-medium',
  otherStyle,
}: TextBoxType) => {
  return <div className={`${size} ${weight} ${otherStyle}`}>{text}</div>;
};

export default TextBox;
