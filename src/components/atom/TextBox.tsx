interface TextBoxType {
  text?: string;
  size?: string; //기본 값을 위해 분리 시켜놓음
  weight?: string; //기본 값을 위해 분리 시켜놓음
  etc?: string; //색, 폰트 등 기타 속성
}

const TextBox = ({
  text,
  size = 'text-md',
  weight = 'font-medium',
  etc,
}: TextBoxType) => {
  return <div className={`${size} ${weight} ${etc}`}>{text}</div>;
};

export default TextBox;
