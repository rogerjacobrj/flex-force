import Link from "next/link";
import "./styles.scss";
import Image from "next/image";
import { academic } from "./data";

const Academic = () => {
    return (
        <section className="academic">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-4 col-xl-3">
                        <div className="academic-text">
                            <h1>How we increase academic performance</h1>
                            <p>
                                The most successful learning is <b>one-on-one.</b><br /><br />
                                At <b>Milestone Learning</b>, we recognize that every student learns differently—success comes from tailored support, personalized strategies, and a learning approach that works for them.
                            </p>

                            <Link href="" className="learn-more">
                                <div>
                                    <span>Learn More</span>
                                    <Image
                                        src="/icons/arrow-right.svg"
                                        priority={true}
                                        width={18}
                                        height={18}
                                        alt="more"
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="col-12 col-lg-8 col-xl-9">
                        <div className="row card-container">
                            {academic.map((item) => (
                                <div key={item.id} className="col-12 col-md-4 col-lg-6 card-item p-0">
                                    <Image
                                        src={item.image}
                                        priority={true}
                                        width={300}
                                        height={335}
                                        className="item-image"
                                        alt="milestone"
                                    />

                                    <button className="schedule-button">
                                        {item.buttonText}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Academic;