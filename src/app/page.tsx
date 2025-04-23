import Academic from "../../components/academic";
import Banner from "../../components/banner";
import Header from "../../components/header";
import Support from "../../components/support";
import Testimonial from "../../components/testimonial";
import Tutors from "../../components/tutors";
import InterestedTutors from "../../components/interested-tutors";
import Footer from "../../components/footer";
import Insights from "../../components/insights";
import Faq from "../../components/faq";

export default function Home() {
  return (
    <div>
      <div style={{ position: "relative", height: '700px' }}>
        <Header />
        <Banner />
      </div>
      <Support />
      <Testimonial />
      <Academic />
      <Tutors />
      <Insights />
      <Faq />
      <InterestedTutors />
      <Footer />
    </div>
  );
}
