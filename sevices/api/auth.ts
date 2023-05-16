import { createEffect } from 'effector';
import toast from 'react-hot-toast';
import instance from '@/sevices/axiosClient';
import { ISignIn, ISignUp } from '@/types/auth';

export const signUpFx = createEffect(async ({ url, username, password, email }: ISignUp) => {
  const { data } = await instance.post(url, { username, password, email });
  if (data.errorMsg) {
    toast.error(data.errorMsg);
  }else (
    toast.success('Successfully signed up!')
  )
  return data;
});


export const signInFx = createEffect(async ({ url, username, password }: ISignIn) => {
  const { data } = await instance.post(url, { username, password });


  return data
});