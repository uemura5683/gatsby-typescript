import * as React from "react"
const List = ({data, lang}) => {
  return (
    <>
      <div className="card-wrap">
        {data.map((Jsondata, index) => 
          Jsondata.alt == lang ? (
            <div className="card-content-detail" key={index}>
              <a href={`${Jsondata.url}`} target="_blank">
                <img
                  src={Jsondata.image}
                  alt={Jsondata.alt}
                  style={{ margin: `2rem auto` }}
                />
                <hgroup className="title">
                    <h4>{Jsondata.description}</h4>
                </hgroup>
              </a>
            </div>  
          ) : null
        ) }
      </div>
    </>
  )
};

export default List