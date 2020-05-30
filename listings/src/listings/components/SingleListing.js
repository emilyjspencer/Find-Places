import React, { Fragment, useState } from 'react';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';

import './SingleListing.css';

const SingleListing = props => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);


  const closeMapHandler = () => setShowMap(false);

  
  return (
      <Fragment>
          <Modal show={showMap} 
          onCancel={closeMapHandler} 
          header={props.address} 
          contentClass="single-listing_modal-content"
          footerClass="single-listing_modal-actions"
          footer={<Button onClick={closeMapHandler}>Close</Button>}>
              <div className="map-container"></div>
              <h2>Maps of listing</h2>
          </Modal>
  <li className="single-listing">
      <Card className="single-listing_content">
      <div className="single-listing_image">
          <img src={props.image} alt={props.title} />
          <div className="single-listing_info">
              <h2>{props.title}</h2>
              <h3>{props.address}</h3>
              <p>{props.description}</p>
          </div>
          <div className="single-listing_actions">
            <Button inverse onClick={openMapHandler}>View listing on map</Button>
            <Button to={`/listings${props.id}`}>Edit listing</Button>
            <Button danger>Delete listing</Button>
          </div>
      </div>
    </Card>
  </li>
  </Fragment>
  )
}


export default SingleListing;