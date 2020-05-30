import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import SingleListing from './SingleListing';
import { useParams } from 'react-router-dom';

import './ListingsList.css';

const ListingsList = props => {
  if(props.items.length === 0){
    return <div className="listings-list center">
      <Card>
        <h2>No listings found</h2>
        <button>Share listing</button>
      </Card>
    </div>
  }

  return <ul className="listings-list">
    {props.items.map(listing => <SingleListing key={listing.id} id={listing.id} image={listing.imageUrl} title={listing.title} description={listing.description} address={listing.address} creatorId={listing.creator} coordinates={listing.location} ></SingleListing> )}
  </ul>
};


export default ListingsList;

