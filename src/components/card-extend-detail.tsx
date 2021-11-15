import * as React from "react"
const List = ({data}) => {
  return (
    <>
      <div className="card-wrap">
        {data.map((Jsondata, index) => 
          <div className="card-content" key={index}>
            <a href={`${Jsondata.url}`} target="_blank">
              <hgroup className="title">
                  <h3>{Jsondata.title}</h3>
                  <h4>{Jsondata.description}</h4>
              </hgroup>
              <img
                src={Jsondata.image}
                alt={Jsondata.alt}
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