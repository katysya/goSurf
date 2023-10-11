import InfoLink from '@/components/UI/InfoLink/InfoLink';

// import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <InfoLink link="#" leftText="Go" rightText="Surf" />
      <p className="footer__copy">
        © Go-Surf 2018. All Rights Reserved.
      </p>
    </footer>
  );
}
