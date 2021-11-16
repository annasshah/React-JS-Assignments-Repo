import React from 'react'
import Box from '@mui/material/Box';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'








export default function Slider() {


    return (
        <Box>
            <Carousel variant="light">
                
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://s.alicdn.com/@img/imgextra/i2/O1CN01UKsNwd1QnfAFepFwM_!!6000000002021-2-tps-990-400.png"
                    />
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://s.alicdn.com/@img/imgextra/i3/O1CN01QEL53b1ZNOzSa5hHT_!!6000000003182-0-tps-990-400.jpg"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://s.alicdn.com/@img/tfs/TB1e.XyReL2gK0jSZFmXXc7iXXa-990-400.png"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://s.alicdn.com/@img/imgextra/i2/O1CN01eDYIeP1DSyFsa06Oi_!!6000000000216-0-tps-990-400.jpg"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://s.alicdn.com/@img/imgextra/i1/O1CN01aX23AE1uRABJ4InsG_!!6000000006033-0-tps-990-400.jpg"
                    />
                </Carousel.Item>
            </Carousel>

        </Box>
    )
}
