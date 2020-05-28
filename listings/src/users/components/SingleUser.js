import React from 'react';
import './SingleUser.css'

const SingleUser = (props) => {
  return (
    <li className="single-user">
        <div className="single-user_conent">
            <div className="single-user_image">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="single-user_info">
                <h2>{props.name}</h2>
                <h3>
                  {props.listingsCount} {props.listingsCount === 1 ? 'Listing' : 'Listings'}
                </h3>
            </div>
        </div>
    </li>
    
  )


}



export default SingleUser;

