import "./styles.scss";
import Image from "next/image";
import { support } from "./data";

const Support = () => {

    return (
        <section className="support">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="header">
                            <h1>Support for every stage of learning</h1>
                            <p>
                                From foundational skills to advanced academics, we’re with you every step of the way.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {support.map((item) => <div key={item.title} className="col-12 col-md-6 col-lg-6">
                        <div className="item">
                            <div className="icon-box">
                                <Image
                                    src={item.icon}
                                    priority={true}
                                    width={50}
                                    height={50}
                                    alt={item.alt}
                                />
                            </div>
                            <div className="item-content">
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>)}

                </div>
            </div>
        </section>
    );
};

export default Support;