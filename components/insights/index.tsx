import Image from "next/image";
import { insights } from "./data";
import "./styles.scss";

const Insights = () => {
    return (
        <section className="insights">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="header">
                            <h1>Insights & inspiration from the world of one-on-one learning</h1>
                            <p>
                                Explore expert perspectives, success stories, and timely topics in education—designed for parents, students, and families navigating academic excellence in today’s competitive world.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card-scroll-container">
                            {insights.map((item) => <div key={item.id} className="item">
                                <div className="card-item">
                                    <Image
                                        src="/images/insight.png"
                                        priority={true}
                                        width={335}
                                        height={223}
                                        className="item-image"
                                        alt="milestone"
                                    />
                                    <div className="item-content">
                                        <div className="details">
                                            <p>{item.title}</p>
                                            <span>{item.description}</span>
                                        </div>
                                        <div className="tag">
                                            <p>{item.tag} <span>| {item.duration}</span></p>
                                            <button>
                                                <Image
                                                    src="/icons/arrow-top-right.svg"
                                                    priority={true}
                                                    width={8}
                                                    height={8}
                                                    alt="more"
                                                />
                                            </button>
                                        </div>
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

export default Insights