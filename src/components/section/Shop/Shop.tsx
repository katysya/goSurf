import ProductSwiper from '@/components/Swipers/ProductSwiper/ProductSwiper';
import Title from '../../UX/Title/Title';

export default function Shop() {
  return (
    <section className="shop">
      <div className="container">
        <Title title="Shop" />
      </div>
      <ProductSwiper />
    </section>
  );
}
