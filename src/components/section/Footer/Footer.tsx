import LinkInfo from '@/components/UX/LinkInfo/LinkInfo';

import './footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <LinkInfo link="#" leftText="Go" rightText="Surf" />
      <p className="footer__copy">
        © Go-Surf 2018. All Rights Reserved.
      </p>
    </footer>
  );
}
