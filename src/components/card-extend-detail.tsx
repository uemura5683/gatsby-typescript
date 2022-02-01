import * as React from "react"
const List = ({data, lang, chang}) => {
  return (
    <>
      <div className="card-wrap">
        {data.map((Jsondata, index) => 
          Jsondata.alt == lang && (Jsondata.type == chang || chang == 'default' ||chang == '' ) ? (
            <div className="card-content-detail" key={index}>
              <a href={`${Jsondata.url}`} target="_blank">
                <figure>
                  <img
                    src={Jsondata.image}
                    alt={Jsondata.alt}
                  />
                </figure>
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