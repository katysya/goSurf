import './Logo.scss';

interface dataLogo {
  leftText: string;
  rightText: string;
}

export default function Logo(props: dataLogo) {
  return (
    <div className="logo">
      <div className="logo__left">{props.leftText}</div>
      <div className="logo__right">{props.rightText}</div>
    </div>
  );
}
