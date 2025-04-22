import Banner from "../../components/banner";
import Header from "../../components/header";
import Support from "../../components/support";
import Testimonial from "../../components/testimonial";

export default function Home() {
  return (
    <div>
      <div style={{ position: "relative", height: '700px' }}>
        <Header />
        <Banner />
      </div>
      <Support />
      <Testimonial />
    </div>
  );
}
