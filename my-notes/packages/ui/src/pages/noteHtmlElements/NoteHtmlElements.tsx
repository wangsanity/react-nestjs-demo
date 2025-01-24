import React from 'react';

const Login = (): React.ReactElement => {
  const defaultStyle: React.CSSProperties = {
    borderRadius: '4px',
    padding: '6px 10px',
    border: 'solid 1px #ddd'
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <div style={{ marginBottom: '10px' }}>
        <div style={{ marginBottom: '10px' }}>
          <input placeholder="Note name" style={defaultStyle} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input placeholder="Note description" style={defaultStyle} />
        </div>
      </div>
      <div>
        <button style={{ marginRight: '10px' }}>Save</button>
        <button>Cancel</button>
      </div>
    </div>
  );
};

export default Login;
