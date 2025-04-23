import Image from "next/image";
import "./styles.scss";

const tutors = ["/images/t1.svg", "/images/t2.svg", "/images/t3.svg", "/images/t4.svg", "/images/t4.svg", "/images/t4.svg", "/images/t4.svg", "/images/t2.svg"];

const Tutors = () => {
    return (
        <section className="tutors">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="tutor-content">
                            <h1>Tutors you can trust from</h1>

                            <div className="tutor-list">
                                {tutors.map((tutor, idx) => (
                                    <div key={`${tutor}-${idx}`} className="item">
                                        <Image
                                            src={tutor}
                                            priority={true}
                                            width={56}
                                            height={56}
                                            className="banner-image"
                                            alt="tutor"
                                        />
                                    </div>))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tutors;