import './Title.scss';

interface ITitle {
  title: string;
}

export default function Title(props: ITitle) {
  return (
    <div className="title">
      <h3 className="title__name">{props.title}</h3>
      <h4 className="title__desc">{props.title}</h4>
    </div>
  );
}
