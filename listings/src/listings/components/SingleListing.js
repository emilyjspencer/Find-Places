import React from 'react';
import Card from '../../shared/components/UIElements/Card';

import './SingleListing.css';

const SingleListing = props => {
  return <li className="single-listing">
      <Card className="single-listing_content">
      <div className="single-listing_image">
          <img src={props.image} alt={props.title} />
          <div className="single-listing_info">
              <h2>{props.title}</h2>
              <h3>{props.address}</h3>
              <p>{props.description}</p>
          </div>
          <div className="single-listing_actions">
            <button>View listing on map</button>
            <button>Edit listing</button>
            <button>Delete listing</button>
          </div>
      </div>
    </Card>
  </li>
}


export default SingleListing;