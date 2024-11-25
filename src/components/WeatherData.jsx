
import axios from "axios";
import { useEffect, useState } from "react";
import Weather from "./Weather";

function WeaterData() {
    const key = "c76f185b50a24a40ba91521421a9ea32"

    const [search, setSearch] = useState("")
    const [city, setCity] = useState()


    useEffect(() => {
        async function getApi() {


            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`)
                // console.log(response)
                // console.log(response.data)
                setCity(response.data)

            } catch (error) {
                console.log(error)

            }
        }

        getApi();


    }, [search])

    console.log("Datadan gelen veriler:", city)
    console.log("Inputtan gelen veriler:", search)

    return (

        <div>

            <input className="rounded-lg  text-gray-900 pt-2 pb-2 pl-2 bg-blue-100 " 
            placeholder="Location Search"
            onChange={(e) => setSearch(e.target.value)} >
            </input>
            <div className="mt-3">
                {city ? <Weather city={city} />: " Plase enter the location "}
            </div>
        </div>
    )
}
export default WeaterData;
