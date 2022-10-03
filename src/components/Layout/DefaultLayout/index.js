import Header from '~/components/Layout/components/Header';
import Slider from '~/components/Layout/components/Slider';
import Footer from '~/components/Layout/components/Footer';

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <Slider />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
