import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { AuthInput, SubmitInput } from '@components/elements/Inputs';
import { signInFx } from '@/sevices/api/auth';
import { PATTERN_MESSAGE_USERNAME, REQUIRED_MESSAGE } from '@utils/constants';
import classes from './signIn.module.scss';
import { setUser } from '@/context/user';


interface ISignInForm {
  username: string,
  password: string
}

export const SignIn = () => {

  const router = useRouter();

  const { handleSubmit, register, formState: { errors }, reset } = useForm<ISignInForm>({
    mode: 'onSubmit',
    criteriaMode: 'all'
  });

  const onSubmit = async (data: ISignInForm) => {
      const user =  await toast.promise(signInFx({
        url: '/users/login',
        password: data.password,
        username: data.username
      }), {
        loading: 'Signing in...',
        error: 'Invalid username or password',
        success: 'User successfully signed in!'
      });
      reset();
      setUser(user.user)
      router.refresh();
      router.push('/');
  };


  return (
    <form className={classes.signInWrapper} onSubmit={handleSubmit(onSubmit)}>
      <AuthInput type={'text'} name={'username'} placeholder={'CoolUser'}
                 label={'Username'} //@ts-ignore
                 register={register} registerName='username' errors={errors}
                 rules={{
                   required: REQUIRED_MESSAGE,
                   pattern: {
                     value: /^[a-z][a-z0-9]*$/i,
                     message: PATTERN_MESSAGE_USERNAME
                   }
                 }} />

      <AuthInput type={'password'} name={'password'} placeholder={'somepassword'}
                 label={'Password'}  //@ts-ignore
                 register={register} registerName='password' errors={errors}
                 rules={{
                   required: 'This field is required'
                 }} />

      <SubmitInput value='Sign in!' />
    </form>
  );
};

