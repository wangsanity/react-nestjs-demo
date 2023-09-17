import React from 'react';
import { useAppDispatch, userAppSelector } from '../../app/store';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../app/userSlice';
import { Box, Button, Input } from '@wanderingleaf/learning-pc-web-components';
import { selectTexts } from '../../texts/textsSlice';

export const Login = (): React.ReactElement => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { textsShort } = userAppSelector(selectTexts);
  const [userName, setUserName] = React.useState('');
  const login = () => {
    if (userName) {
      dispatch(
        setUser({
          name: userName,
          token: String(new Date().getTime())
        })
      );

      navigate('/');
    }
  };

  return (
    <Box style={{ textAlign: 'center', padding: '50px' }}>
      <Box style={{ marginBottom: '20px' }}>
        <Input
          placeholder={textsShort?.loginName}
          onKeyUp={(e) => e.key === 'Enter' && login()}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
        />
      </Box>
      <Box>
        <Button onClick={login}>{textsShort?.login}</Button>
      </Box>
    </Box>
  );
};

export default Login;
