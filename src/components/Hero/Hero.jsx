import React from 'react';

const Hero = () => {
    return (
        <div className="bg-secondary bg-gradient py-5">
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 mt-4">
                <div className="col d-flex flex-column justify-content-center">
                    <h2>Take Best Tuition at Your Home</h2>
                    <p>If you are tired of searching a good tutor. Here we are.</p>
                </div>
                <div className="col">
                    <img className="img-fluid" style={{height: '400px'}} src="https://img.favpng.com/6/19/3/in-home-tutoring-education-tuition-payments-teacher-png-favpng-2wNWY2zzWqELUDBWd8PThWYLR.jpg" alt=""/>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Hero;