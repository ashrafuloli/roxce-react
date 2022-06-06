import React from 'react';
import {Accordion} from "react-bootstrap";
import {images} from "../../../utilities/Images";

const FaqHomeTwo = () => {
    return (
        <>
            <section className="faq__area pb-115 pt-35">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6">
                            <div className="faq__thumb ml--200">
                                <img src={images.faq1} alt="faq"/>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6">
                            <div className="faq__wrapper pl-70">
                                <div className="section__title-wrapper-2 mb-30">
                                    <span className="section__title-pre section__title-pre-2">Faq</span>
                                    <h2 className="section__title section__title-2">Frequently Asked Questions</h2>
                                </div>
                                <div className="faq__content">
                                    <Accordion className="accordion" defaultActiveKey="0">
                                        <Accordion.Item className="accordion-item" eventKey="0">
                                            <Accordion.Header className="accordion-header">
                                                Data Visualization Improve Mobile Web ?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>
                                                    Sed perspiciais unde omnis iste natus error voluptat accusantium
                                                    dolore lautium totam rem aperiam eaque abillo inventore
                                                    veritatis et quasi architeo beate vita dicta sunt explicaboemo
                                                    enim ipsam voluptatem
                                                </p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>
                                                How To Create A Mobile App In Expo?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>Sed perspiciais unde omnis iste natus error voluptat accusantium
                                                    dolore lautium totam rem aperiam eaque abillo inventore
                                                    veritatis et quasi architeo beate vita dicta sunt explicaboemo
                                                    enim ipsam voluptatem</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>
                                                Challenging Online Workshops Meetups ?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>Sed perspiciais unde omnis iste natus error voluptat accusantium
                                                    dolore lautium totam rem aperiam eaque abillo inventore
                                                    veritatis et quasi architeo beate vita dicta sunt explicaboemo
                                                    enim ipsam voluptatem</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>
                                                Accessible Images For When Matter Most ?
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p>Sed perspiciais unde omnis iste natus error voluptat accusantium
                                                    dolore lautium totam rem aperiam eaque abillo inventore
                                                    veritatis et quasi architeo beate vita dicta sunt explicaboemo
                                                    enim ipsam voluptatem</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FaqHomeTwo;
