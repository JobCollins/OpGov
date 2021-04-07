import React from 'react'
import { Button, Carousel, Tabs, Tab } from 'react-bootstrap'
import Sonnet from '../components/Sonnet'


export const HomeScreen = () => {
    return (
        <>
            <div className="carousel">
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/images/edu.jpg"
                    alt="First slide"
                    />
                    <div className="carousel-div">
                        <h1 className="carousel-header"> The Open Discussion Project </h1>
                        <h3 className="carousel-header">First slide label</h3>
                        <Button className="carousel-button">Join the Discussion</Button>
                        <Button className="carousel-prompt">Check other discussion<i className='fas fa-shopping-cart'></i></Button>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/images/imf.jpeg"
                    alt="Second slide"
                    />
                    <div className="carousel-div">
                        <h1 className="carousel-header"> The Open Discussion Project </h1>
                        <h3 className="carousel-header">Second slide label</h3>
                        <Button className="carousel-button">Join the Discussion</Button>
                        <Button className="carousel-prompt">Check other discussion</Button>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/images/market.jpg"
                    alt="Third slide"
                    />
                    <div className="carousel-div">
                        <h1 className="carousel-header"> The Open Discussion Project </h1>
                        <h3 className="carousel-header">Third slide label</h3>
                        <Button className="carousel-button">Join the Discussion</Button>
                        <Button className="carousel-prompt">Check other discussion</Button>
                    </div>
                </Carousel.Item>
            </Carousel>
            </div>
            <Sonnet />
        </>
    )
}
