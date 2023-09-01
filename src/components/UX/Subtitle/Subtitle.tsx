import './subtitle.scss';

interface IProps {
  name: String;
  desc: String;
  position: Number;
}

export default function Subtitle(props: IProps) {
  return (
    <div
      className={
        props.position == 1
          ? 'subtitle subtitle--left'
          : 'subtitle subtitle--right'
      }
    >
      <h3 className="subtitle__name">{props.name}</h3>
      <h4 className="subtitle__desc">{props.desc}</h4>
    </div>
  );
}
