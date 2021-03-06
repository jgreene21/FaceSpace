import React from 'react';
import { Card, Image, Icon, } from 'semantic-ui-react';
import { AccountConsumer } from '../providers/AccountProvider';



const Account = () => (


<AccountConsumer>
  { value => (
<Card>
    <Image wrapped ui={false} />
    {value.avatar} 
    <Card.Content>
      <Card.Header>{value.firstName} {value.lastName}</Card.Header>
      <hr/>
      <Card.Meta>
        <span className='email'>{value.email}</span>
      </Card.Meta>
      <Card.Description>
        {value.aboutMe}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='friendCount' />
        {value.friendCount} Friends
      </a>
    </Card.Content>
  </Card>
  )}
  </AccountConsumer>
);

export default Account; 

