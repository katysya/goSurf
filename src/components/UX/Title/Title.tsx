import './title.scss';

export default function Title(props: any) {
  const { title } = props;

  return (
    <div className="title">
      <h3 className="title__name">{title}</h3>
      <h4 className="title__desc">{title}</h4>
    </div>
  );
}
