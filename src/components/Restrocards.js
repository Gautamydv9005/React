import {CDN_URL} from "../utils/constants";

const Restrocards = (props)=>{
    const{resdata}=props;
    const{name,cuisines,cloudinaryImageId,avgRating}=resdata?.info;
    return(
        <div className="res-cards">
            <img className="card-img" src={`${CDN_URL}${cloudinaryImageId}`}/>
            <h3>{name}</h3>
            <h3>{cuisines.join(",")}</h3>
            <h4>Rating {avgRating} </h4>
        </div>
        
    )
};

export default Restrocards;