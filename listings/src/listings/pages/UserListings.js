import React from 'react';
import ListingsList from '../components/ListingsList';

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
        creator: 'u1'
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
        creator: 'u2'
    }


]


const UserListings = () => {
  return <ListingsList items={TEST_LISTINGS} />
}

export default UserListings;
