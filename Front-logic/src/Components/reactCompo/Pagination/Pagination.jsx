import React,{ useEffect, useState } from "react"


const Pagination = () => {

    //pagination ater fectching api 
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts`
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  return (
    <div>
      {currentData.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index + 1} onClick={() => handleClick(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};


// pagination normal
//   const [currentPage, setCurrentPage] = useState(1);
//   const [data, setData] = useState([]);
//   const itemsPerPage = 10;

//   // Fetch data from API or local storage
//   useEffect(() => {
//     // Example fetch data function
//     const fetchData = async () => {
//       const sampleData = Array.from({ length: 50 }, (_, index) => ({
//         id: index + 1,
//         name: `Item ${index + 1}`,
//       }));
//       setData(sampleData);
//     };

//     fetchData();
//   }, []);

//   const handleClick = (page) => {
//     setCurrentPage(page);
//   };

//   const totalPages = Math.ceil(data.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const currentData = data.slice(startIndex, endIndex);

//   return (
//     <div>
//       {currentData.map((item) => (
//         <div key={item.id}>{item.name}</div>
//       ))}
//       <div>
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button key={index + 1} onClick={() => handleClick(index + 1)}>
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };


export default Pagination

