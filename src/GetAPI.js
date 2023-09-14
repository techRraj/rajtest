import React, { useState, useEffect } from "react";

function GetAPI() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Define the URL of the GET API
        const apiUrl = 'https://dummyjson.com/products';

        // Make a GET request to the API
        fetch(apiUrl)
            .then((response) => response.json())
            .then((responseData) => {

                setData(responseData); // Update the state with the fetched data
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);
    
 
    return (
        <>
       

                {
                    data.products.map((product) => (

                    <div className="card" style={{width:'18rem'}}>
                            <img className="card-img-top" src="..." alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>

                    ))
                }
        </>
    );
}

export default GetAPI;
