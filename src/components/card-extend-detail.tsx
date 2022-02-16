import * as React from "react"
const List = ({data, lang, type, chang}) => {
  return (
    <>
      <div className="card-wrap">
        <>
          {data.map((Jsondata, index) => {
            let encode = encodeURI(Jsondata.description)
              , s_target = encode.toLowerCase().indexOf(lang.toLowerCase());
            if( type.indexOf( 'type' ) != -1 && Jsondata.alt == lang && (Jsondata.type == chang || chang == 'default' || chang == '' ) 
             || type.indexOf( 'q' ) != -1 && (lang == '' || s_target != -1) && (Jsondata.type == chang || chang == 'default' || chang == '' ) 
             || type === ''
            ) {
              return ([
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
              ])
            }
          })
        }
        </>
      </div>
    </>
  )
};

export default List