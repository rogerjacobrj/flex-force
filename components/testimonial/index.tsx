import Image from "next/image";
import { testimonials } from "./data";
import "./styles.scss";

const Testimonial = () => {
    return (
        <section className="testimonial">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="header">
                            <h1>Success we&apos;ve achieved together</h1>
                            <p>
                                Together, we celebrate every milestone—turning challenges into achievements and goals into reality.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card-scroll-container">
                            {testimonials.map((item) => <div key={item.id} className="item">
                                <div className="item-content">
                                    <Image
                                        src="/icons/quote.svg"
                                        priority={true}
                                        width={45}
                                        height={39}
                                        alt="author"
                                    />
                                    <p>{item.description}</p>
                                </div>
                                <div className="author-content">
                                    <div>
                                        <Image
                                            src="/images/author.svg"
                                            priority={true}
                                            width={60}
                                            height={60}
                                            alt="author"
                                        />
                                    </div>
                                    <div className="author-details">
                                        <h1>{item.author}</h1>
                                        <p>{item.status}</p>
                                    </div>
                                </div>
                            </div>)}
                        </div>

                        <div className="view-all-container">
                            <button className="view-all">View All</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial