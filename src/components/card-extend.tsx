import * as React from "react"
const List = ({data, path}) => {
  return (
    <>
      <div className="card-wrap">
        {data.map((Jsondata, index) => 
          <div className="card-content" key={index}>
            <a href={`${path}/list?type=${Jsondata.alt}`}>
              <h3 className="title">{Jsondata.name}</h3>
              <img
                src={Jsondata.image}
                alt={Jsondata.name}
                style={{ margin: `5rem auto` }}
              />
            </a>
          </div>        
        )}
      </div>
    </>
  )
};

export default List