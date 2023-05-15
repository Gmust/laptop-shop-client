import { FieldError, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';
import classes from './authInput.module.scss';
import { ErrorMessage } from '@hookform/error-message';

type AuthInputParams<TFormValues> = {
  type: 'email' | 'text' | 'password',
  name: string,
  placeholder: string,
  label: string,
  // @ts-ignore
  register?: UseFormRegister<TFormValues>;
  registerName: Path<TFormValues>,
  rules?: RegisterOptions,
  errors: FieldError,
}

export const AuthInput = <TFormValues extends Record<string, unknown>>
({ rules, name, registerName, register, label, placeholder, type, errors }: AuthInputParams<TFormValues>) => {
  return (
    <div className={classes.inputWrapper}>
      <div className={classes.inputForm}>
        <label htmlFor={name}>{label}:</label>
        <input placeholder={placeholder} {...(register && register(registerName, rules))} type={type} />
      </div>
      <ErrorMessage
        name={registerName}
        errors={errors}
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p key={type} className={classes.errorMgs}>{message}</p>
          ))
        }
      />
    </div>

  );
};

