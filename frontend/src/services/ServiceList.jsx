import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import CustomizationImg from '../assets/images/customization.png'

const serviceData = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, suscipit.",
    },
    {
        imgUrl: guideImg,
        title: "Book a Tour",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, suscipit.",
    },
    {
        imgUrl: CustomizationImg,
        title: "Customization",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, suscipit.",
    }
]

const ServiceList = () => {
    return <>
    {
        serviceData.map((item, index) =>(
        <Col lg='3' key={index}>
            <ServiceCard item={item}/>
        </Col>))
    }
    </>
};

export default ServiceList