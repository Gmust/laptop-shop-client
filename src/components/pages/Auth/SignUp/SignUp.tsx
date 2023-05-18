import { useForm } from 'react-hook-form';
import { AuthInput, SubmitInput } from '@components/elements/Inputs';
import {
  MIN_LENGTH,
  PATTERN_MESSAGE_EMAIL,
  PATTERN_MESSAGE_USERNAME,
  PATTERN_PASSWORD_MESSAGE,
  REQUIRED_MESSAGE
} from '@utils/constants';
import classes from './signUp.module.scss';
import { signUpFx } from '@/sevices/api/auth';

interface ISignUpForm {
  email: string,
  username: string,
  password: string
}

export const SignUp = () => {


  const { handleSubmit, register, formState: { errors }, reset } = useForm<ISignUpForm>({
    mode: 'onSubmit',
    criteriaMode: 'all'
  });


  const onSubmit = async (data: ISignUpForm) => {
    try {
      /*      await toast.promise(signUpFx({
              url: '/users/signup',
              password: data.password,
              email: data.email,
              username: data.username
            }), {
              loading: 'Signing up...',
              error: '',
              success: 'User successfully signed up!'
            });*/
      await signUpFx({
        url: '/users/signup',
        password: data.password,
        email: data.email,
        username: data.username
      });
      reset();
    } catch (e: any) {
      console.log(e);
    }
  };


  return (
    <form className={classes.signUpWrapper} onSubmit={handleSubmit(onSubmit)}>
      <AuthInput type={'email'} name={'email'} placeholder={'example@gmail.com'}
                 label={'Email'} //@ts-ignore
                 register={register} registerName='email' errors={errors}
                 rules={{
                   required: REQUIRED_MESSAGE,
                   pattern: {
                     value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                     message: PATTERN_MESSAGE_EMAIL
                   }
                 }}
      />

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
                   required: 'This field is required',
                   minLength: {
                     value: 8,
                     message: `${MIN_LENGTH} 8`
                   },
                   pattern: {
                     value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
                     message: PATTERN_PASSWORD_MESSAGE
                   }
                 }} />

      <SubmitInput value='Sign up!' />
    </form>
  );
};

