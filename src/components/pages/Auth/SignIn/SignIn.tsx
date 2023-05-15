import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthInput, SubmitInput } from '@components/modules/Inputs';
import { signInFx } from '@/sevices/api/auth';
import { PATTERN_MESSAGE_USERNAME, REQUIRED_MESSAGE } from '@utils/constants';
import classes from './signIn.module.scss';

interface ISignInForm {
  username: string,
  password: string
}

export const SignIn = () => {

  const { handleSubmit, register, formState: { errors }, reset } = useForm<ISignInForm>({
    mode: 'onSubmit',
    criteriaMode: 'all'
  });

  const onSubmit = async (data: ISignInForm) => {
    try {
      const res = await signInFx({
        url: '/users/login',
        password: data.password,
        username: data.username
      });
      toast.success('User successfully signed up!');
      reset();
    } catch (e: any) {
      toast.error(e.response.data.message);
    }
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

