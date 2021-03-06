import React,{useState,useEffect} from 'react'
import "./css/style.css";

const TempApp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Bhadohi");

    useEffect(() => {
        const fetchApi = async ()=>{
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=99092009fb570b8ab14f03f05b33dc13`
            const response = await fetch(url);
            // console.log(response);
            const resJson = await response.json();
            // console.log(resJson);
            setCity(resJson.main);
        }
 
        fetchApi();
    },[search]);

    return (
        <>
           <div className="box">
                <div className="inputData">
                    <input
                    type="search"
                    value={search}
                    className="inputField" 
                    onChange={(event)=>{
                        setSearch(event.target.value)
                    }} />

                    
                </div>

                
                
                {!city ? (
                    <p className="errorMsg">No Data Found</p>
                ) : (
                    <>
                    <div className="info">
                        <h2 className="location">
                        <i className="fas fa-street-view"></i>{search}
                        </h2>
                        <h3 className="temp">
                            {city.temp} Cel
                        </h3>
                        <h3 className="tempmin_max">Min : {city.temp_min} Cel | Max : {city.temp_max} Cel</h3>
                </div>

                    <div className="wave -one"></div>
                    <div className="wave -two"></div>
                    <div className="wave -three"></div> 
                    </> 
                )}

                

                

            </div>
        </>
    )
}

export default TempApp
