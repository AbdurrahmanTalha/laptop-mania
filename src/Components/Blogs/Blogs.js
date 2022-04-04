import React from 'react';
// Blogs
const Blogs = () => {
    return (
        <div>
            <h2>This is blogs</h2>
            <div className="accordion container accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            What is Context Api?
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Context api is a react api. It was created to solve prob drilling from all levels of your application. It has been a experimental feature for bit of time. Context api is used to pass data in a up to bottim approach with propbs. Sometimes it is inconvenient for a few types of props that are required by many cimponents In the React application</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            What are the diffrences between inline block and inline elements
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Block elemnts: They consume the entire width avaliable. They always start in a new line and have top and bottom marings. It cant have any other element next to it!
                            Inline elements: Inline elements occupy only enoughf width that is sufficient to it and allows other elemnts next to it wich are inline. Inline elemnts dont' staart from a new line: and dont have top and bottom marings!</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;