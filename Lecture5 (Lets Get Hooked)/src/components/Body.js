import { restaurentList } from "../contants";
import RestaurantCard from "../components/RestaurantCard";
import { useState } from "react";


function filterData(searchText, restaurants){
    const filterData= restaurants.filter((restaurant) => restaurant.info.name.includes(searchText));
    return filterData;
}

// Using the map function:
const Body=()=>{

    /*
    const searchTxt="KFC"; 
    This is the normal js variable creation

    const [searchText]=useState(); 
    This is creation of local state variables in React

    we can also write like this: 
    const searchVar = useState();
    [function name, variable to update] = searchVar;
    bez. useState() returns [function name, variable to update the variable]
    And this can we destructured use js destructuring

    const [searchText]=useState("KFC"); 
    This is how I can give default values

    **/


    const [restaurants, setRestaurants] = useState(restaurentList);
    const [searchText, setsearchText]=useState(""); 

    return (
        <>
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Search" 
            value={searchText} 
            onChange={(e)=>{
                setsearchText(e.target.value);
            }}
            />
            <button className="search-btn"
            onClick={()=>{
                // Need to Filter the data 
                // update the state - restaurrants
                // filter data
                const data = filterData(searchText, restaurants);
                setRestaurants(data) ;
            }}
            >Search</button>
            {/* <h3 className="search-input">{searchText}</h3> */}
        </div>
        <div className="Restaurant-List">
            {
                restaurants.map((restaurant) => {
                    return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
                })
            }
        </div>
        </>
    );
};

export default Body;