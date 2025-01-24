import React from 'react';
import { Box, Button, Input } from '@wanderingleaf/learning-pc-web-components/dist';

const Login = (): React.ReactElement => {
  return (
    <Box style={{ textAlign: 'center', padding: '50px' }}>
      <Box style={{ marginBottom: '10px' }}>
        <Box style={{ marginBottom: '10px' }}>
          <Input placeholder="Course name" />
        </Box>
        <Box style={{ marginBottom: '10px' }}>
          <Input placeholder="Course description" />
        </Box>
      </Box>
      <Box>
        <Button style={{ marginRight: '10px' }}>Save</Button>
        <Button>Cancel</Button>
      </Box>
    </Box>
  );
};

export default Login;
