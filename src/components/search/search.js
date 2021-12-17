import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';

const Search = ({handleSearchTit,searchByRating})=>{
const [search,setSearch] = useState(" ");
    const handleSumbit=(e) => {
        e.preventDefault();
        handleSearchTit(search);
    };
    const ratingChanged = (newRating) =>{
        searchByRating(newRating);
    };
   return(
       <div>
           <form onSubmit={handleSumbit}>
           <input type="text"
           placeholder='search'
           onChange={(e)=> setSearch(e.target.value)} />
           <ReactStars
           size="500px"
           count="10"
           onChange={ratingChanged}
/>
</form>
</div>
);
};
export default Search