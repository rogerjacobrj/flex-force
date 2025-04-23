import "./styles.scss";
import Image from "next/image";
import { why } from "./data";

const Why = () => {
    return (
        <section className="why">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="header">
                            <h1>Why Milestone Learning?</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-5">
                <div className="row justify-content-center mb-4">
                    {why.slice(0, 3).map((item) => <div key={item.id} className="col-md-4 d-flex justify-content-center">
                        <div className="card p-0">
                            <div className="icon">
                                <Image
                                    src={item.icon}
                                    priority={true}
                                    width={70}
                                    height={70}
                                    alt="milestone"
                                />
                            </div>
                            <div className="content">
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>)}
                </div>

                <div className="row justify-content-center">
                    {why.slice(3, 5).map((item) => <div key={item.id} className="col-md-4 d-flex justify-content-center">
                        <div className="card p-4">
                            <div className="icon">
                                <Image
                                    src={item.icon}
                                    priority={true}
                                    width={70}
                                    height={70}
                                    alt="milestone"
                                />
                            </div>
                            <div className="content">
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>)}
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="action-buttons">
                            <button className="action-button start-button">
                                Get Started Today
                            </button>

                            <button className="action-button learn-button">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Why;