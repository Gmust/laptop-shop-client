import { createEffect } from 'effector';
import toast from 'react-hot-toast';
import instance from '@/sevices/axiosClient';
import { ISignIn, ISignUp } from '@/types/auth';
import { AxiosError } from 'axios';
import { HttpStatus } from '@utils/constants';

export const signUpFx = createEffect(async ({ url, username, password, email }: ISignUp) => {
  const { data } = await instance.post(url, { username, password, email });
  if (data.errorMsg) {
    toast.error(data.errorMsg);
  } else (
    toast.success('Successfully signed up!')
  );
  return data;
});


export const signInFx = createEffect(async ({ url, username, password }: ISignIn) => {
  const { data } = await instance.post(url, { username, password });
  return data;
});


export const checkUserAuthFx = createEffect(async (url: string) => {
  try {
    const { data } = await instance.post(url);
    return data;
  } catch (e) {
    const axiosError = e as AxiosError;
    if (axiosError.response) {
      if (axiosError.response.status === HttpStatus.FORBIDDEN) {
        return false;
      }
      toast.error((e as Error).message);
    }
  }
});

export const logoutFx = createEffect(async (url: string) => {
  try {
    await instance.post(url);
    toast.success('Successfully logged out!')
  } catch (e) {
    toast.error((e as Error).message);
  }
});