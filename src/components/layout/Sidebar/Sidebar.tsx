import Link from 'next/link';
import './Sidebar.scss';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Link href="/" className="sidebar__logo">
        <div className=""></div>
      </Link>
      <ul className="sidebar__list">
        <li>
          <Link href="/">Surf</Link>
        </li>
        <li>
          <Link href="/">Travel</Link>
        </li>
        <li>
          <Link href="/">Sleep</Link>
        </li>
        <li>
          <Link href="/">Shop</Link>
        </li>
      </ul>
    </div>
  );
}
