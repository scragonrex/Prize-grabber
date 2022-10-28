import React, { useEffect, useState } from 'react';
import DisplayEl from './DisplayEl';
import PropTypes from 'prop-types'
const Display = (props) => {
    
    const [prize, setPrize] = useState([]);
    let pageSize = 5;
    const [page, setPage] = useState(1);
    let parseData, prizeData = [];

    const fetchPrize = async () => {               //fetching the data from the user
        let url = 'https://api.nobelprize.org/v1/prize.json';
        let data = await fetch(url);
        parseData = await data.json();
        prizeData = parseData.prizes;
        if (props.filterState === true) {
            if (props.category) {
                console.log(props.category);
                prizeData = prizeData.filter((ele) => {
                    return ele.category === props.category;
                })
            }
            if (props.startyear > 0 && props.endyear > 0) {
                prizeData = prizeData.filter((ele) => {
                    return ele.year >= props.startyear && ele.year <= props.endyear;
                })
            }
        }
        setPrize(prizeData.slice((page - 1) * pageSize, pageSize * page));
        console.log("prizelength " + prizeData.length + "pageSize " + pageSize)
        console.log(prizeData.length / pageSize);
    }


    useEffect(() => {
        fetchPrize()
    }, [page, props.category, props.startyear, props.endyear, props.filterState]);


    const nextContent = () => {
        setPage(page + 1);
    }


    const previousContent = () => {
        setPage(page - 1);
    }

    return (
        <div className="container my-3">
            < div className="container asset-2">
            <div className="container heading text-center">
                <h3>Noble Prize winners</h3>
            </div>
                <div className="row">
                    <div className="col-2 colAsset fs-5 fw-bold">Name</div>
                    <div className="col-2 colAsset fs-5 fw-bold">Category</div>
                    <div className="col-1 colAsset fs-5 fw-bold">Year</div>
                    <div className="col-7 colAsset fs-5 fw-bold">Motivation</div>
         </div>
                {prize.map((element, index) => {
                   return (
                        <div className="row" key={index}>
                            <DisplayEl category={element.category} year={element.year} laureates={element.laureates} />
                        </div>
                    )
                })
                }
            </div>
            <div className="button1 container">
                <button className="btn1" onClick={previousContent} disabled={page <= 1 ? true : false}>&laquo; Previous</button>
                <button className="btn1">Page no-{page}</button>
                <button className="btn1" onClick={nextContent} disabled={false}>Next &raquo;</button>
            </div>
        </div>
    )
}
Display.propTypes = {
    category: PropTypes.string,
    startyear: PropTypes.number,
    endyear: PropTypes.number
}
export default Display