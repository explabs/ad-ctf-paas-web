import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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
} from '@mui/material';
import Background from 'components/Background';
import { useDispatch, useSelector } from 'react-redux';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import _ from '../src/@lodash';
import { submitLogin } from '../src/features/auth/store/loginSlice';

function LoginPage() {
  const dispatch = useDispatch();
  const login = useSelector(({ auth }) => auth.login);
  const {
    control, setError, formState, handleSubmit, setValue,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(
      yup.object().shape({
        username: yup
          .string()
          .required('Это поле обязательно для заполнения.'),
        password: yup
          .string()
          .required('Это поле обязательно для заполнения.'),
      }),
    ),
  });
  const router = useRouter();

  const { isValid, dirtyFields, errors } = formState;

  useEffect(() => {
    login.errors.forEach((error) => {
      setError(error.type, {
        type: 'manual',
        message: error.message,
      });
    });
  }, [login.errors, setError]);

  async function onSubmit(model) {
    await dispatch(submitLogin(model));
  }

  useEffect(() => {
    const username = localStorage.getItem('login');
    if (username) {
      setValue('username', username);
    }
  }, []);

  useEffect(() => {
    if (router.query.login) {
      setValue('username', router.query.login);
    }
  }, [router.query.login]);

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
                <form onSubmit={handleSubmit(onSubmit)}>
                  <FormGroup sx={{ mb: 2 }}>
                    <InputLabel>Название команды</InputLabel>
                    <Controller
                      name="username"
                      control={control}
                      render={({ field }) => (
                        <Input
                          {...field}
                          type="text"
                          placeholder="mirea team"
                          error={!!errors.username}
                          helperText={errors?.username?.message}
                          variant="outlined"
                          required
                          fullWidth
                        />
                      )}
                    />
                  </FormGroup>
                  <FormGroup sx={{ mb: 1 }}>
                    <InputLabel>Пароль</InputLabel>
                    <Controller
                      name="password"
                      control={control}
                      render={({ field }) => (
                        <Input
                          {...field}
                          type="password"
                          placeholder="●●●●●●"
                          error={!!errors.password}
                          helperText={errors?.password?.message}
                          variant="outlined"
                          required
                          fullWidth
                        />
                      )}
                    />
                  </FormGroup>
                  <Button
                    sx={{
                      mb: '-12px',
                      ml: '-8px',
                    }}
                    type="submit"
                    disabled={_.isEmpty(dirtyFields) || !isValid}
                    aria-label="LOG IN"
                  >
                    Войти
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default LoginPage;
