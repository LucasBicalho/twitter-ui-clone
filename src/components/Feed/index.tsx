import React from 'react';

import { Container, Tab, Tweets } from './styles';

import Tweet from '../Tweet';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tab>Tweets</Tab>

      <Tweets>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </Tweets>
    </Container>
  );
};

export default Feed;
