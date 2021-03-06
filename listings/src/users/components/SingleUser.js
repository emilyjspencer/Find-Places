import React from 'react';
import Icon from '../../shared/components/UIElements/Icon';
import { Link } from 'react-router-dom';
import Card from '../../shared/components/UIElements/Card';
import './SingleUser.css'

const SingleUser = (props) => {
  return (
    <li className="single-user">
            <Card className="single-user_content">
              <Link to={`/${props.id}/listings`}>
                <div className="single-user_image">
                  <Icon />
                </div>
               <div className="single-user_info">
                  <h2>{props.name}</h2>
                    <h3>
                      {props.listingsCount} {props.listingsCount === 1 ? 'Listing' : 'Listings'}
                    </h3>
                </div>
            </Link>
            </Card>
        
    </li>
  )
}

export default SingleUser;

