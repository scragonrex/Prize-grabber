import React, { useEffect, useState } from 'react';
import DisplayEl from './DisplayEl';
import PropTypes from 'prop-types'
const Display = (props) => {
    const [prize, setPrize] = useState([]);
    const [pageSize, setPageSize] = useState(5);
    const [page, setPage] = useState(1);
    let parseData, prizeData=[];

    const fetchPrize = async () => {
        let url = 'https://api.nobelprize.org/v1/prize.json';
        let data = await fetch(url);
        parseData = await data.json();
        prizeData=parseData.prizes;
        // console.log(props.startyear , props.endyear);
        if(props.filterState===true)
        {if(props.category)
        {
            console.log(props.category);
            prizeData=prizeData.filter((ele)=>
            {
                console.log("working");
                return ele.category === props.category;
            })
            console.log(parseData);
        }
        if(props.startyear>0 && props.endyear>0)
        {
            prizeData=prizeData.filter((ele)=>
            {
                return ele.year>=props.startyear && ele.year<=props.endyear;
            })
        }
    }
        setPrize(prizeData.slice((page - 1) * pageSize, pageSize * page));
        console.log("prizelength" + prizeData.length +"pageSize"+pageSize)
        console.log(prizeData.length/pageSize);
    }
    useEffect(() => {
        fetchPrize();
    }, [page,props.category,props.startyear,props.endyear,props.filterState]);
    const nextContent = () => {
        setPage(page + 1);
       
    }
    const previousContent = () => {
        setPage(page - 1);
        fetchPrize();
    
    }

    return (
            <div className="container my-3">
                < div className="container asset-2">
                <div className="row">
                    <div className="col-2 colAsset fs-5 fw-bold">Name</div>
                    <div className="col-2 colAsset fs-5 fw-bold">Category</div>
                    <div className="col-1 colAsset fs-5 fw-bold">Year</div>
                    <div className="col-7 colAsset fs-5 fw-bold">Motivation</div>
                </div>
                {prize.map((element, index) => {

                     console.log("render");

                    return (
                        <div className="row" key={index}>
                            {/* <h1>{index}</h1> */}
                            <DisplayEl category={element.category} year={element.year} laureates={element.laureates} />
                        </div>
                    )
                })
                }
                </div>
            <div className="button1 container">
                <button className="btn1" onClick={previousContent} disabled={ page <= 1?true:false}>&laquo; Previous</button>
                <button className="btn1">Page no-{page}</button>
                <button className="btn1" onClick={nextContent}>Next &raquo;</button>
            </div>
            </div>


    )
}
Display.propTypes={
    category:PropTypes.string,
    startyear:PropTypes.number,
    endyear:PropTypes.number
}
export default Display