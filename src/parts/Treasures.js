import React from 'react'
import Button from '../elements/button'
import Fade from 'react-reveal'

export default function Treasures({data}) {
    return data.map((activities, index1) => {
        return <section className="container" key={`activities-${index1}`}> 
            <h4 className="mb-3 font-weight-medium" >
                {activities.name}
            </h4>
            <div className="container-grid">
                {/* mapping for activities */}
                {
                    activities.length === 0 ? <div className="row">
                        <div className="col-12 align-items-center">
                            There is no property at this activities
                        </div>
                    {/* mapping for item peractivities */}
                    </div> : activities.items.map ((item, index2) => {
                        return (
                            <div className="item column-3 row-1" key={`activities-${index1}-item-${index2}`}>
                                <Fade bottom={300 * index2}>
                                    <div className="card">
                                    {/* if popular  */}
                                        {item.isPopular && (
                                            <div className="tag">
                                                Popular{" "}
                                                <span className="font-weight-light">
                                                    Choice
                                                </span>
                                            </div>
                                        )}
                                    {/* end if popular */}
                                        <figure className="img-wrapper" style={{height: 180}}>
                                            <img src={item.imageUrl} alt={item.name} className="img-cover" />
                                        </figure>
                                        <div className="meta-wrapper">
                                            <Button type="link" href={`/properties/${item._id}`} className="stretched=link d-block text-gray-800">
                                                <h5 className="h4">{item.name}</h5>
                                            </Button>
                                            <span className="text-gray-500">
                                                {item.city}, {item.country}
                                            </span>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    })
}
