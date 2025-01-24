import React from 'react';
import { useAppDispatch, userAppSelector } from '../../app/store';
import { Box, Button, Input } from '@wanderingleaf/learning-pc-web-components/dist';
import { selectTexts } from '../../texts/textsSlice';
import { setUser } from '../../app/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { textsShort } = userAppSelector(selectTexts);
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const login = () => {
    if (userName && password) {
      dispatch(setUser({ name: userName, token: userName }));
      navigate('/home');
    }
  };

  return (
    <Box style={{ textAlign: 'center', padding: '50px' }}>
      <Box style={{ marginBottom: '10px' }}>
        <Box style={{ marginBottom: '10px' }}>
          <Input
            placeholder={textsShort?.loginName}
            onKeyUp={(e) => e.key === 'Enter' && login()}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
          />
        </Box>
        <Box>
          <Input
            placeholder={textsShort?.password}
            onKeyUp={(e) => e.key === 'Enter' && login()}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
        </Box>
      </Box>
      <Box>
        <Button onClick={login}>{textsShort?.login}</Button>
      </Box>
    </Box>
  );
};

export default Login;
