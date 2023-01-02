interface Props {
  text: string;
  size: number;
}

export const Title: React.FC<Props> = (props) => {
  return <h2 style={{ fontSize: props.size }}>{props.text}</h2>;
};
