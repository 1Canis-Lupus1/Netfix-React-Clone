import React,{useEffect,useState} from 'react'
import axios from "axios"

function Row(props) {
const [movies,setMovies]=useState([]);

useEffect(() => {
    // console.log(props.fetchUrl)
    async function fetchData(){
        const request= await axios.get(props.fetchUrl)
        // console.log(request)
        setMovies(request)
        console.log(movies)
    }
    fetchData()

}, [movies])

    return (
        <div>
            {/* {Title} */}
            <h1>{props.title}</h1>

            {/* {Container}=>posters */}
            <p>{movies.map(each=>{
                return each
            })}</p>
        </div>
    )
}

export default Row
