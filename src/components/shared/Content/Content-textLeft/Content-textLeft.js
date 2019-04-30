import React from 'react';
import './Content-textLeft.scss';
import {Grid, Row, Col} from 'react-flexbox-grid';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';


const ContentTextLeft = ({textOne, textTwo, img, video}) => {

    return (
        <Row className="content-container" middle="xs" center="xs">
            <Col className="content-container__textLeft" xs={10} md={4}>
                <ScrollAnimation animateIn="fadeInUp" offset={100} duration={1} animateOnce={true}>
                    <p className="content__text">{textOne}</p>
                    <p className="content__text">{textTwo}</p>
                </ScrollAnimation>
            </Col>
            <Col xs={10} mdOffset={1} md={4}>
                <ScrollAnimation animateIn="fadeInUp" offset={100} duration={1} animateOnce={true}>
                    {img !== 0 &&
                    <img className="content-container__img" src={img} alt="Image"/>
                    }
                    {video !== 0 &&
                    <video width="100%" autoPlay loop muted>
                        <source src={video} type="video/mp4"/>
                    </video>
                    }
                </ScrollAnimation>
            </Col>
        </Row>
    );
};

export default ContentTextLeft;