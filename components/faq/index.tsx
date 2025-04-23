import "./styles.scss";
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from 'react-bootstrap/AccordionItem';
import AccordionHeader from 'react-bootstrap/AccordionHeader';
import AccordionBody from 'react-bootstrap/AccordionBody';

const Faq = () => {
    return (
        <section className="faq">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <div className="header">
                            <h1>Frequently asked questions</h1>
                            <p>
                                Find answers to common questions and get the information you need!
                            </p>
                        </div>
                    </div>

                    <div className="col-8 custom-border">
                        <Accordion defaultActiveKey="0">
                            <AccordionItem eventKey="0">
                                <AccordionHeader>What makes Milestone Learning different from other tutoring services?</AccordionHeader>
                                <AccordionBody>
                                    We specialize in one-on-one, highly personalized tutoring that goes beyond just helping students with homework. Our expert tutors focus on mastery, confidence-building, and academic strategy, ensuring that students not only improve their grades but also develop lifelong learning skills.
                                </AccordionBody>
                            </AccordionItem>

                            <AccordionItem eventKey="1">
                                <AccordionHeader>Who are your tutors?</AccordionHeader>
                                <AccordionBody>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </AccordionBody>
                            </AccordionItem>

                            <AccordionItem eventKey="2">
                                <AccordionHeader>How do you match students with tutors?</AccordionHeader>
                                <AccordionBody>
                                    Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </AccordionBody>
                            </AccordionItem>

                            <AccordionItem eventKey="3">
                                <AccordionHeader>Do you offer in-person tutoring?</AccordionHeader>
                                <AccordionBody>
                                    Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur.
                                </AccordionBody>
                            </AccordionItem>
                        </Accordion>

                        <div className="view-all-container">
                            <button className="view-all">View All</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;