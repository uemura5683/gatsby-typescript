import * as React from "react"
import { Link } from "gatsby"

const List = ({data, path}) => {
  return (
    <>
      <div className="card-wrap">
        {data.map((Jsondata, index) => 
          <div className="card-content" key={index}>
            <Link to={`/${path}/list?type=${Jsondata.alt}`}>
              <h3 className="title">{Jsondata.name}</h3>
              <img
                src={Jsondata.image}
                alt={Jsondata.name}
                style={{ margin: `5rem auto` }}
              />
            </Link>
          </div>        
        )}
      </div>
    </>
  )
};

export default List