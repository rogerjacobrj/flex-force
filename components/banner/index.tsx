import Image from "next/image";
import "./styles.scss";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"]
});

const Banner = () => {
    return (
        <div className="banner">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-5">
                        <div className="banner-content">
                            <h1 className={[poppins.className, "banner-text"].join(" ")}>
                                Empowering every Student with personalized learning for <span>lasting success</span>
                            </h1>

                            <ul className="bullets">
                                <li className="bullet-point">
                                    <Image
                                        src="/icons/check.svg"
                                        priority={true}
                                        width={20}
                                        height={20}
                                        alt="check"
                                    />
                                    <span>Personalized, efficient learning</span>
                                </li>

                                <li className="bullet-point">
                                    <Image
                                        src="/icons/check.svg"
                                        priority={true}
                                        width={20}
                                        height={20}
                                        alt="check"
                                    />
                                    <span>Deep collaboration with parents & students</span>
                                </li>

                                <li className="bullet-point">
                                    <Image
                                        src="/icons/check.svg"
                                        priority={true}
                                        width={20}
                                        height={20}
                                        alt="check"
                                    />
                                    <span>Personalized One-on-One Learning</span>
                                </li>
                            </ul>

                            <button className="start-button">
                                Get Started Today
                            </button>
                        </div>
                    </div>

                    <div className="col-12 col-lg-7 p-0">
                        <div className="banner-wrapper">
                            <Image
                                src="/images/banner.png"
                                priority={true}
                                width={1920}
                                height={800}
                                className="banner-image"
                                alt="milestone"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;