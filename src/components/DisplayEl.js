import React, { useEffect, useState } from 'react';
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
                                <div class="col-2 border">{ele.firstname} {ele.surname}</div>
                                <div class="col-2 border">{category}</div>
                                <div class="col-1 border">{year}</div>
                                <div class="col-7 border">{ele.motivation}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default DisplayEl