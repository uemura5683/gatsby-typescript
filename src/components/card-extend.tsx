import * as React from "react"
export default function List(Jsondata) {
  Jsondata = Jsondata.data;
  return (
    <>
      <div className="card-wrap">
        {Jsondata.map((Jsondata, index) => 
          <div className="card-content" key={index}>
            <div className="title">{Jsondata.name}</div>
            <img
              src={Jsondata.image}
              alt={Jsondata.alt}
              style={{ margin: `5rem 0` }}
            />
          </div>        
        )}
      </div>
    </>
  )
};