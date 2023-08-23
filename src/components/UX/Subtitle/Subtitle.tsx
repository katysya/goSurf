import './subtitle.scss';

export default function Subtitle() {
  return (
    <div className="subtitle">
      <h3 className="subtitle__name">Current location</h3>
      <h4 className="subtitle__desc">
        California <span>|</span> USA
      </h4>
    </div>
  );
}
