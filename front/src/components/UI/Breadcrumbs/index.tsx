import { ReactElement } from "react";
import { Link } from "react-router-dom";


const index = ({paths}:{paths:[] | any}) => {
  return (
    <div className="">
      <ul>
        {paths.map(path => (
          <li><Link to={path.url}>{path.name}</Link></li>
        ))}
      </ul>
    </div>
  );
}

export default index;