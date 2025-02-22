interface TextBoxType {
  text?: string;
  size?: string;
  weight?: string;
}

const TextBox = ({ text, size='text-md', weight='font-medium' }: TextBoxType) => {
  return <div className={`${size} ${weight}`}>{text}</div>;
};

export default TextBox;
