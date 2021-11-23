import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import Layout from 'components/Layout';
import {
  Grid,
  FormGroup,
  Button,
  Input,
  InputLabel,
  Container,
  Card,
  CardContent,
  Typography,
  CardActions,
} from '@mui/material';
import Background from 'components/Background';
import AuthService from '../services/auth.service';

function LoginPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);

    AuthService.login(name, password).then(
      (data) => {
        console.log(data);
        setLoading(false);

        return Promise.resolve();
      },
      (error) => {
        const message = (error.response
          && error.response.data
          && error.response.data.message)
          || error.message
          || error.toString();

        console.log(message);

        return Promise.reject();
      },
    ).then(() => {
      // history.push('/');
      // window.location.reload();
    })
    .catch(() => {
      setLoading(false);
    });
  }

  return (
    <Layout>
      <Background />

      <Container>
        <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Grid item md={4}>
            <Card raised>
              <CardContent sx={{ p: '24px', pb: '8px' }}>
                <Typography variant="h4" sx={{ mb: 1 }}>
                  Авторизация
                </Typography>
                <form>
                  <FormGroup sx={{ mb: 2 }}>
                    <InputLabel>Название команды</InputLabel>
                    <Input
                      type="text"
                      placeholder="mirea team"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <InputLabel>Пароль</InputLabel>
                    <Input
                      type="password"
                      placeholder="●●●●●●"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormGroup>
                </form>
              </CardContent>
              <CardActions sx={{ p: '0 24px 8px 16px' }}>
                <Button onClick={handleSubmit}>Войти</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default LoginPage;
