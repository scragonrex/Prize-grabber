import React from "react"
const Navbar = (props) => {
    const onCategoryChange=(event)=>
    {
        props.categoryChange(event.target.value);
    }

    const onYearChange=(event)=>
    {
        props.yearChange(event.target.value);
    }
    const onFilterChange=()=>
    {
        props.filterChange(false);
    }
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark asset-3">
            <div className="container-fluid">
                <span className="navbar-brand text-dark fw-bold">Prizegrabber</span>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <span className="nav-link home active text-dark" aria-current="page" onClick={onFilterChange}>Home</span>
                        </li>
                        <li className="nav-item ms-3">
                            <select className="form-select text-dark" aria-label="Default select example" onChange={onCategoryChange} defaultValue={'Category'}>
                                <option value={'category'}>category</option>
                                <option value="chemistry">chemistry</option>
                                <option value="medicine">medicine</option>
                                <option value="physics">physics</option>
                                <option value="economics">economics</option>
                                <option value="literature">literature</option>
                                <option value="peace">peace</option>
                            </select></li>
                        <li className="nav-item ms-3 text-light">
                            <select className="form-select text-dark" aria-label="Default select example" onChange={onYearChange} defaultValue={'year'}>
                                <option value={'year'}>year</option>
                                <option value="2018-2022">2018-2022</option>
                                <option value="2014-2018">2014-2018</option>
                                <option value="2010-2014">2010-2014</option>
                                <option value="2006-2010">2006-2010</option>
                                <option value="2002-2006">2002-2006</option>
                                <option value="1998-2002">1998-2002</option>
                                <option value="1994-1998">1994-1998</option>
                                <option value="1990-1994">1990-1994</option>
                                <option value="1986-1990">1986-1990</option>
                                <option value="1982-1986">1982-1986</option>
                                <option value="1978-1982">1978-1982</option>
                                <option value="1974-1978">1974-1978</option>
                                <option value="1970-1974">1970-1974</option>
                                <option value="1966-1970">1966-1970</option>
                                <option value="1962-1966">1962-1966</option>
                                <option value="1958-1962">1958-1962</option>
                                <option value="1954-1958">1954-1958</option>
                                <option value="1950-1954">1950-1954</option>
                                <option value="1946-1950">1946-1950</option>
                                <option value="1942-1946">1942-1946</option>
                                <option value="1938-1942">1938-1942</option>
                                <option value="1934-1938">1934-1938</option>
                                <option value="1930-1934">1930-1934</option>
                                <option value="1926-1930">1926-1930</option>
                                <option value="1922-1926">1922-1926</option>
                                <option value="1918-1922">1918-1922</option>
                                <option value="1914-1918">1914-1918</option>
                                <option value="1910-1914">1910-1914</option>
                                <option value="1906-1910">1906-1910</option>
                                <option value="1900-1906">1900-1906</option>
                                
                            </select></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar