import React from 'react';
const DisplayEl = (props) => {
    const category = props.category;
    const year = props.year;
    const people = props.laureates;
    return (
        <div className="container">      
            {
                people.map((ele, index) => {
                    return (
                        <div className="row" key={index}>
                                <div className="col-2 border border-dark">{ele.firstname} {ele.surname}</div>
                                <div className="col-2 border border-dark">{category}</div>
                                <div className="col-1 border border-dark">{year}</div>
                                <div className="col-7 border border-dark">{ele.motivation}</div>
                        </div>
                    )
                })
            }
        </div>
    )    
}
export default DisplayEl