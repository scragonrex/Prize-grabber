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
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Prizegrabber</a>
                {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <select class="form-select" aria-label="Default select example" onChange={onCategoryChange}>
                                <option selected>Category</option>
                                <option value="chemistry">chemistry</option>
                                <option value="medicine">medicine</option>
                                <option value="physics">physics</option>
                                <option value="economics">economics</option>
                                <option value="literature">literature</option>
                                <option value="peace">peace</option>
                            </select></li>
                        <li class="nav-item">
                            <select class="form-select" aria-label="Default select example" onChange={onYearChange}>
                                <option selected>Year</option>
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
                                <option value="1968-1972">1968-1972</option>
                                <option value="1964-1968">1964-1968</option>
                                <option value="1960-1964">1960-1964</option>
                                <option value="1956-1960">1956-1960</option>
                                <option value="1952-1956">1952-1956</option>
                                <option value="1948-1952">1948-1952</option>
                                <option value="1944-1948">1944-1948</option>
                                <option value="1940-1944">1940-1944</option>
                                <option value="1936-1940">1936-1940</option>
                                <option value="1932-1936">1932-1936</option>
                                <option value="1928-1932">1928-1932</option>
                                <option value="1924-1928">1924-1928</option>
                                <option value="1920-1924">1920-1924</option>
                                <option value="1916-1920">1916-1920</option>
                                <option value="1912-1916">1912-1916</option>
                                <option value="1908-1912">1908-1912</option>
                                <option value="1904-1908">1904-1908</option>
                                <option value="1900-1904">1900-1904</option>
                                
                            </select></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar