import React, { useEffect, useState } from "react";

function Table2() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Define the URL of the GET API to fetch a list of todos
    const apiUrl = 'https://dummyjson.com/products';

    // Make a GET request to the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        setData(responseData); // Update the state with the fetched data
      }
      )
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      
    </div>
  );
}

export default Table2;
