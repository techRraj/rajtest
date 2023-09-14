// import Outer from "./Outer";
// import { useState, useEffect } from "react";

// function Login() {

//     const [data, setData] = useState([]);

//     useEffect(() => {
//         fetch('https://bheemainfotech.com/test.php', {
//             method: 'POST',
//             body: JSON.stringify({
//                 "name":"test",
//                 "id":"data"
//             }),
//             headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//             },
//         })
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log(data);
//             })
//             .catch((err) => {
//                 console.log(err.message);
//             });
//      }, []);

//     return(
//     <>
//     <div className="container">
//          <Outer/>

//          </div>
//         </>
//         )


// }
// export default Login







// import React, { useState, useEffect } from "react";

// function Login() {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         // Define the URL of the GET API
//         const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

//         // Make a GET request to the API
//         fetch(apiUrl)
//             .then((response) => response.json())
//             .then((responseData) => {
//                 setData(responseData); // Update the state with the fetched data
//             })
//             .catch((error) => {
//                 console.error("Error fetching data:", error);
//             });
//     }, []);

//     return (
//         <div >
//             <h1>Data from GET API:</h1>
//             <ul>
//                 {Array.isArray(data) && data.map((item, index) => (
//                     <li key={index}>{item.name} - {item.id}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Login;




import React, { useState, useEffect } from "react";
import Outer from "./Outer"; // Import the Outer component

function Login() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Define the URL of the GET API
        const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

        // Make a GET request to the API
        fetch(apiUrl)
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData);
                setData(responseData); // Update the state with the fetched data
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div className="container">
            <h1>Data from GET API:</h1>
            <ul>
                <li>{data.title}</li>
            </ul>

            <table >
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>contact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.id}</td>
            <td>{data.title}</td>
            <td>{data.completed}</td>
          </tr>
         
          
        </tbody>
      </table>
            <Outer /> {/* Add the Outer component here */}
        </div>
    );
}

export default Login;
