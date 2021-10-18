import React from 'react';
import './service.css';

const Service = (props) => {
    const { name, img, description } = props.service;
    return (
        <div>
            <div class="col">
                <div class="card p-2">
                    <img src={img} class="card-img-top img-fluid" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{description}</p>
                        <button className="btn btn-color">More Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;