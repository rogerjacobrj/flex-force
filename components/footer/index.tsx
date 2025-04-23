import Link from "next/link";
import "./styles.scss";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="socials">
                            <Image
                                src="/icons/logo-white.svg"
                                priority={true}
                                width={360}
                                height={70}
                                alt="milestone"
                            />

                            <div className="social-icons">
                                <Image
                                    src="/icons/linkedin.svg"
                                    priority={true}
                                    width={40}
                                    height={40}
                                    alt="linkedin"
                                />

                                <Image
                                    src="/icons/instagram.svg"
                                    priority={true}
                                    width={40}
                                    height={40}
                                    alt="instagram"
                                />

                                <Image
                                    src="/icons/facebook.svg"
                                    priority={true}
                                    width={40}
                                    height={40}
                                    alt="facebook"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="footer-links">
                            <button>Book a Consultation</button>
                            <ul>
                                <li>Book a Learning Session</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="contact-us">
                            <h1>Contact Us</h1>
                            <ul>
                                <li>
                                    <Image
                                        src="/icons/phone-white.svg"
                                        priority={true}
                                        width={25}
                                        height={25}
                                        alt="phone"
                                    />
                                    XXX-XXXX-XXXX
                                </li>
                                <li>
                                    <Image
                                        src="/icons/email.svg"
                                        priority={true}
                                        width={25}
                                        height={25}
                                        alt="email"
                                    />
                                    hello@milestonelearning.com
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 col-lg-5">
                        <div className="copyright-text">
                            <p>
                                © 2025 Milestone Learning
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-7">
                        <div className="tc-links">
                            <Link href="">Privacy Policy</Link>
                            <Link href="">Terms of Services</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;