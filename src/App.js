import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/movieList/MovieList';
import Add from './components/add/add';
import Search from './components/search/search'; 
import MovieDetails from "./components/MovieDetails/MovieDetails";
import { Route, Routes } from 'react-dom';


function App() {
  const movies=[
    {title:"house of gucci",description:"When Patrizia Reggiani Lady Gaga an outsider from humble beginnings marries into the Gucci family her unbridled ambition begins to unravel the family legacy and triggers a reckless spiral of betrayal decadence revenge and ultimately murder A legacy worth killing for."
    ,posterURL:"./img/img1.jpg",rating:"7"},
    {title:"joker",description:"In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker. Arthur Fleck works as a clown and is an aspiring stand-up comic.",posterURL:"./img/img2.jpg",rating:"8"},
    {title:"the fault in our stars",description:"Two teenage cancer patients begin a life-affirming journey to visit a reclusive author in Amsterdam. Hazel and Augustus are two teenagers who share an acerbic wit, a disdain for the conventional, and a love that sweeps them on a journey"
    ,posterURL:"./img/img3.jpg",rating:"7"},
    {title:"me before you",description:"A girl in a small town forms an unlikely bond with a recently-paralyzed man she's taking care of. A girl in a small town forms an unlikely bond with a recently-paralyzed man she's taking care of. A girl in a small town forms an unlikely bond with a recently-paralyzed man she's taking care of.",posterURL:"./img/img4.jpg",rating:"8"},
    {title:"12 years a slave",description:"In 1841, African American Solomon Northup, a free man, is kidnapped and forced into slavery under the name 'Platt' for 12 years. He faces the hardships of being a slave under the hands of a few different slave owners. Through faith, will power, and courage Northup must survive and endure those 12 years as a slave.",posterURL:"./img/img8.jpg",rating:"8"},
{title:"hunger games catching fires",description:"Katniss Everdeen and Peeta Mellark become targets of the Capitol after their victory in the 74th Hunger Games sparks a rebellion in the Districts of Panem. ... After defying the Capitol on national television, Katniss has to attempt to control an uprising stirring in the districts.",posterURL:"./img/img7.jpg",rating:"7"}
  ]
const[newList,setNewList]=useState(movies)
const handleAdd=(movies)=>{
  setNewList([...newList,{...movies,id:newList.length+2}])

} 
const [searchTitle,setSearchTitle ] = useState("")
const [searchRating,setSearchRating]=useState(0)
const handleSearchTit=(title)=>{
  setSearchTitle(title)
}
const searchByRating=(rate)=>{
  setSearchRating(rate)
}
 
  return (
    <div className="App"> 
    <h1>movie app</h1>
    <Routes> 
        <Route path="/" element={<MovieList movies={newList} />}/> 
        <Route path="/add" element={<Add />}/>
        <Route path="/movieDetails/:id" element={<MovieDetails movies={newList}/>}/>
      </Routes>
<Search handleSearchTit={handleSearchTit} searchByRating={searchByRating}/>
<MovieList movies={newList.filter(el=>el.title.toLocaleLowerCase().includes(searchTitle.toLocaleLowerCase().trim()) &&el.rating>=searchRating)}/>
         <Add handleAdd={handleAdd}/>
 
    </div>
  );
}


export default App;
