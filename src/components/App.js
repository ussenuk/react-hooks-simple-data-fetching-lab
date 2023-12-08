// create your App component here
import React, {useState, useEffect} from "react";

function App () {

    const [randomDog, setRandomDog] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => {
                setRandomDog(data.message);
                setIsLoaded(true);
            });
    }, [])  // use an empty dependencies array, so we only run the fetch request ONCE

    // if the data hasn't been loaded, show a loading indicator
    if (!isLoaded) return <p>Loading...</p>;

    

    return <img alt="A Random Dog" src={randomDog} ></img>
}

export default App;
