import { ChakraProvider, defaultSystem, Input } from '@chakra-ui/react';
import React from 'react';

const Login = (): React.ReactElement => {
  const defaultStyle: React.CSSProperties = {
    borderRadius: '4px',
    padding: '6px 10px',
    width: '180px',
    border: 'solid 1px #ddd'
  };

  return (
    <ChakraProvider value={defaultSystem}>
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <div style={{ marginBottom: '10px' }}>
          <div style={{ marginBottom: '10px' }}>
            <Input placeholder="Course name" style={defaultStyle} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <Input placeholder="Course description" style={defaultStyle} />
          </div>
        </div>
        <div>
          <button style={{ marginRight: '10px' }}>Save</button>
          <button>Cancel</button>
        </div>
      </div>
    </ChakraProvider>
  );
};

export default Login;
