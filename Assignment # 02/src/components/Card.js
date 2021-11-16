import React from 'react'


export default function Card(props) {
    return (
        <div className="card productCard col-md-3 col-lg-3 p-0 my-3 border-0 mx-3" >
            <div className="cardImage ">
                <img src={props.src} className="card-img-top" alt="..." />
            </div>
            
            <div className="card-body px-4">
                <h5 className="card-title">{props.title}</h5>
                <span className="card-text text-muted ">{props.description}</span>
                <div className="card-text mt-3 d-flex justify-content-between align-items-center">
                    <div>
                        <span className="display-selling-price me-2 fw-bold">
                            <span >{props.price}
                                <span> PKR</span> </span></span>   </div>
                    {props.status === "In Stock"? <span className=" text-uppercase stockAvailability stockAvailability-yes">In Stock</span>:<span className=" text-uppercase stockAvailability stockAvailability-no">Sold Out</span>}
                </div>
            </div>
            <div className="text-center">
                <button className="btn-dark w-75 px-4 py-2 mt-1 mb-3 border-0 rounded-2 text-uppercase">View Details</button>
            </div>
        </div>
    )
}
