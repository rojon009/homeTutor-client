import React from 'react';

const OurStory = () => {
    return (
        <section className="bg-info pb-5">
        <div className="container">
            <h1 className="text-center text-decoration-underline pt-5">Our Stroy</h1>
            <div className="row row-cols-1 row-cols-md-2 mt-4">
                <div className="col">
                    <img className="img-fluid" style={{height: '400px'}} src="https://www.crushpixel.com/static18/preview2/young-man-sleeping-with-books-3014877.jpg" alt=""/>
                </div>
                <div className="col d-flex flex-column justify-content-center">
                    <h2>When everyone was complaining. We were finding solution.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nisi optio enim, odit laudantium provident numquam quidem distinctio vitae praesentium! Optio dolorum consequatur quidem dignissimos voluptas sit! Amet cupiditate repellendus obcaecati debitis nulla veniam, ex tenetur, numquam iusto, voluptatum omnis?</p>
                    <button className="btn btn-warning">Read More...</button>
                </div>
            </div>
        </div>
        </section>
    );
};

export default OurStory;