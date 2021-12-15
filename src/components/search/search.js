import React from 'react'
import reactStars from 'react-rating-stars-component'

const search = ({handleSearchtit,searchByRate})=>{
{ const [search,setSearch] = useState("");
    const handleSumbit=(e) => {
        e.preventDefault();
        handleSearchtit(search);
    };
    const ratingChanged = (newRating) =>{
        searchByRate(newRating);
    };
   return(
       <div>
           <form onSubmit={handleSumbit}/>
           <input type="text"
           placeholder='search'
           onChange={(e)=> setSearch(e.target.value)} />
          
           <reactStars
           size="500px"
           count="10"
           onChange={ratingChanged}
/>
</div>
   );
   }}