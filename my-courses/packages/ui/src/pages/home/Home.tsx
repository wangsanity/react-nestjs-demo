import React from 'react';
import { Box } from '@wanderingleaf/learning-pc-web-components/dist';

const Home = (): React.ReactElement => {
  return (
    <Box style={{ textAlign: 'center', padding: '20px' }}>
      Home
      <Box style={{ textAlign: 'center', padding: '20px' }}>
        <a href="/notes">Notes</a>
      </Box>
    </Box>
  );
};

export default Home;
