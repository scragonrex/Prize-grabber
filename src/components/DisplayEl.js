import React from 'react';
const DisplayEl = (props) => {
    const category = props.category;
    const year = props.year;
    const people = props.laureates;
    console.log("people" + people.length);
    return (
        <div className="container">
            
            {
                people.map((ele, index) => {
                    return (
                        <div className="row" key={index}>
                                <div class="col-2 border border-dark">{ele.firstname} {ele.surname}</div>
                                <div class="col-2 border border-dark">{category}</div>
                                <div class="col-1 border border-dark">{year}</div>
                                <div class="col-7 border border-dark">{ele.motivation}</div>
                        </div>
                    )
                })
            }
        </div>
    )
        
}
export default DisplayEl