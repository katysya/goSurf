import ProductSwiper from '@/components/Swipers/ProductSwiper/ProductSwiper';
import Title from '../../UI/Title/Title';

export default function Shop() {
  return (
    <section className="shop" id="shop">
      <div className="container">
        <Title title="Shop" />
      </div>
      <ProductSwiper />
    </section>
  );
}
