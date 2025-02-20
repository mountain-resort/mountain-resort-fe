interface TextBoxType {
  text?: string;
  size?: string;
}

const TextBox = ({ text, size }: TextBoxType) => {
  return <div className={size ? size : 'text-md'}>{text}</div>;
};

export default TextBox;
