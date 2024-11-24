function Weather({city}){

    console.log("GELEN DEĞERLER",city)
    return(
        <div>
            <div className="mt-5 border-2 bg-blue-100 pt-3 pl-10 pr-10 pb-3" >
                
                <h1 className=" mb-3"> Temperature : <div className="text-red-800">{city.main.temp}</div></h1>
                
                <h1 className="  border-blue-400  mb-3"> City :  <div className="text-green-800">  {city.name}</div></h1>
                <h1 className="">Weather :<div className="text-blue-800">{city.weather[0].main}</div></h1>
            </div>
        </div>
    )
}
export default Weather;