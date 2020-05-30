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
        title: 'Buckingham Palace',
        description: 'The London residence and administrative headquarters of the monarchy of the United Kingdom',
        imageURL: 'https://pngimage.net/buckingham-palace-png-5/',
        address: 'Westminster, London SW1A 1AA',
        location: {
            lat: '51.5012454',
            lng: '-0.148343'
        },
        creator: '2'
    },
    {
        id: '3',
        title: 'The Shard',
        description: 'a 95-storey supertall skyscraper, designed by the Italian architect Renzo Piano, in Southwark, London, that forms part of the Shard Quarter development',
        imageURL: 'https://www.kindpng.com/imgv/xwbbhT_london-shard-transparent-background-hd-png-download/',
        address: '32 London Bridge St, London SE1 9SG',
        location: {
            lat: '51.5045033',
            lng: '-0.0886887'
        },
        creator: '3'
    }
   
    
];


const UserListings = () => {
    const userId = useParams().userId
    const loadedListings = TEST_LISTINGS.filter(listing => listing.creator === userId)
  return <ListingsList items={loadedListings} />
}

export default UserListings;
