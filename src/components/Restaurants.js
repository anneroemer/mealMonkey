import { AiFillStar } from "react-icons/ai";

const Restaurants = ({ imageurl, name, stars, ratings, type, origin }) => {
    return ( 
        <>
            <div className="restaurant">
                <img src={ imageurl } alt="restaurant" className="restaurant__img" height="240px"/>
                <h2 className="restaurant__h2">{ name }</h2>
                <div className="restaurant__ratings">
                    <AiFillStar />
                    <p className="stars">{ stars }</p>
                    <p>{ ratings } { type } { origin } food</p> 
                </div>
            </div>
        </>
     );
}
 
export default Restaurants;