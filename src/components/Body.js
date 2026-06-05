import reslist from "../utils/mockdata";
import Restrocards from "./Restrocards";

const Body = () => {
  return (
    <div className="Body">
        <div className="search">Search</div>
        <div className="res-conatiners">
            {reslist.map((resturent)=>(
                <Restrocards key={resturent.info.id} resdata={resturent}/>
            ))}
        </div>
    </div>
  );
};

export default Body;