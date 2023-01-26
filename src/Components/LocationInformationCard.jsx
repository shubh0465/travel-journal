import React from 'react'

export default function LocationInformationCard(props) {
    return (
        <div>
            {props.item.id!=1?<hr/>:<div/>}
            <div className='card-container'>
                <img src={props.item.imageUrl} alt="" />
                <div>
                    <div className='location-container'>
                        <div>
                            <img src="/images/location.svg" alt="" />
                            <span>{props.item.location.toUpperCase()}</span>
                        </div>
                        <div>
                            <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                        </div>
                    </div>
                    <h1>{props.item.title}</h1>
                    <div className='date-container'>
                        <h5>{props.item.startDate}</h5>
                        <h5>-</h5>
                        <h5>{props.item.endDate}</h5>
                    </div>
                    <p className='description'>
                        {props.item.description}
                    </p>
                </div>
            </div>
        </div>
    )
}
