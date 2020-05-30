import React from 'react';
import ListingsList from '../components/ListingsList';
import { useParams } from 'react-router-dom';

const TEST_LISTINGS = [
    {
        id: '1',
        title: 'Natural History Museum',
        description: 'Exhibits a vast range of specimens from various segments of natural history',
        imageURL: 'http://www.victorianweb.org/art/architecture/nhm/23.jpg',
        address: 'Cromwell Rd, South Kensington, London SW7 5BD',
        location: {
            lat: '51.3134488',
            lng: '-1.2646697'
        },
        creator: '1'
    },

    {
        id: '2',
        title: 'Natural History Museum',
        description: 'Exhibits a vast range of specimens from various segments of natural history',
        imageURL: 'http://www.victorianweb.org/art/architecture/nhm/23.jpg',
        address: 'Cromwell Rd, South Kensington, London SW7 5BD',
        location: {
            lat: '51.3134488',
            lng: '-1.2646697'
        },
        creator: '2'
    }
];


const UserListings = () => {
    const userId = useParams().userId
    const loadedListings = TEST_LISTINGS.filter(listing => listing.creator === userId)
  return <ListingsList items={loadedListings} />
}

export default UserListings;
