import React from 'react';
import { Card } from 'semantic-ui-react';

const Friend = props => {
  return (
    <Card>
      <Card.Content className="card-wrapper">
        <Card.Header className="card-header">{props.friend.name}</Card.Header>
        <Card.Meta className="card-age">{props.friend.age}</Card.Meta>
        <Card.Description className="card-email">{props.friend.email}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default Friend;