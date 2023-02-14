
import { useSelector } from "react-redux";

import Cards from "../components/Post/Cards";
import { isEmpty } from "../components/Utils";
import Tendances from "../components/Tendances"
import { useContext } from "react";
import { UidContext } from "../components/AppContext";
import Friends from "../components/Admin/Friends";

const Trending = () => {
    const uid = useContext(UidContext)

  const trendList = useSelector((state) => state.rootReducer.trendingReducer);

  return (
    <div className="flextest">
      <div className="main">
        <ul>
            {!isEmpty(trendList[0]) && trendList.map((post)=> <Cards post ={post} key={post._id} />)}
        </ul>
      </div>
      <div className="right-side">
        <div className="right-side-container">
            <Tendances/>
            {uid && <Friends/>}
        </div>
      </div>
    </div>
  );
};

export default Trending;
