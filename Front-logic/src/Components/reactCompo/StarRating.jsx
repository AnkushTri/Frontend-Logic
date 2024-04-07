import React, { useState } from "react";

const StarRating = ({ initialRating }) => {
  const [rating, setRating] = useState(initialRating);

  const handleClick = (newRating) => {
    setRating(newRating);
    console.log(rating)
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((index) => (
        <span
          key={index}
          className={`text-xl cursor-pointer ${
            index <= rating ? "text-yellow-400" : "text-gray-400"
          }`}
          onClick={() => handleClick(index)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;

// import React from "react";

// const StarRating = () => {
//   const stars = [];
//   const rating=0;
//   for (let i = 0; i < 5; i++) {
//     stars.push(
//       <span
//         key={i}
//         className={`text-xl ${
//           i < rating ? "text-yellow-400" : "text-gray-400"
//         }`}
//       >
//         ★
//       </span>
//     );
//   }

//   return <div className="star-rating">{stars}</div>;
// };

// export default StarRating;
