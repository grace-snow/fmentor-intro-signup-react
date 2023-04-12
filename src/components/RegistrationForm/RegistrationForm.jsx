import React from "react";
import { useForm } from "react-hook-form";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";

function RegistrationForm({ onSubmit }) {
  const id = React.useId();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ criteriaMode: "all" });

  // console.log(watch("givenName")); // watch input value by passing the name of it

  const config = {
    givenNameRequiredError: "First name cannot be empty",
    familyNameRequiredError: "Last name cannot be empty",
    emailRequiredError: "Email cannot be empty",
    passwordRequiredError: "Password cannot be empty",
    emailFormatError: "It looks like that's not an email",
    passwordFormatErrors: {
      containsWhitespace: "Password must not contain any Whitespaces.",
      containsUppercase: "Password must contain at least one Uppercase character.",
      containsLowercase: "Password must contain at least one Lowercase character.",
      containsNumber: 'Password must contain at least one number',
      containsSymbol: 'Password must contain at least one Symbol.',
      validLength: 'Password length must be between 8 and 24 Characters.'
    },
  };

  return (
    <form
      action=''
      className='bg-white text-neutral-1 rounded-md p-6 flex flex-col gap-y-[20px]'
      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
      onSubmit={handleSubmit(onSubmit)}
      noValidate>
      {/* First Name */}
      <div className='form-group'>
        <label htmlFor={`${id}-givenName`}>
          <VisuallyHidden>First Name</VisuallyHidden>
        </label>
        <input
          className='block w-full rounded-md bg-white py-15 ps-8 pe-4 border border-neutral-2 placeholder:text-sm focus-visible:border-brand-accent focus-visible:outline-brand-accent focus-visible:outline-1 focus-visible:outline aria-invalid:border-brand-1 aria-invalid:focus-visible:border-brand-1 aria-invalid:focus-visible:outline-brand-1 aria-invalid:bg-field-error bg-no-repeat bg-field-error-img'
          required={true}
          type='text'
          id={`${id}-givenName`}
          placeholder='First Name'
          aria-describedby={`${id}-givenName-err`}
          autoComplete='given-name'
          defaultValue=''
          {...register("givenName", { required: true })}
          aria-invalid={errors.givenName ? "true" : "false"}
        />
        <div id={`${id}-givenName-err`} aria-live='polite'>
          {errors.givenName?.type === "required" && (
            <p className='text-brand-1 italic text-end text-sm mt-[0.43em]'>
              {config.givenNameRequiredError}
            </p>
          )}
        </div>
      </div>

      {/* Last Name */}
      <div className='form-group'>
        <label htmlFor={`${id}-familyName`}>
          <VisuallyHidden>Last Name</VisuallyHidden>
        </label>
        <input
          className='block w-full rounded-md bg-white py-15 ps-8 pe-4 border border-neutral-2 placeholder:text-sm focus-visible:border-brand-accent focus-visible:outline-brand-accent focus-visible:outline-1 focus-visible:outline aria-invalid:border-brand-1 aria-invalid:focus-visible:border-brand-1 aria-invalid:focus-visible:outline-brand-1 aria-invalid:bg-field-error bg-no-repeat bg-field-error-img'
          required={true}
          type='text'
          id={`${id}-familyName`}
          placeholder='Last Name'
          aria-describedby={`${id}-familyName-err`}
          autoComplete='family-name'
          defaultValue=''
          {...register("familyName", { required: true })}
          aria-invalid={errors.familyName ? "true" : "false"}
        />
        <div id={`${id}-familyName-err`} aria-live='polite'>
          {errors.familyName?.type === "required" && (
            <p className='text-brand-1 italic text-end text-sm mt-[0.43em]'>
              {config.familyNameRequiredError}
            </p>
          )}
        </div>
      </div>

      {/* Email */}
      <div className='form-group'>
        <label htmlFor={`${id}-email`}>
          <VisuallyHidden>Email</VisuallyHidden>
        </label>
        <input
          className='block w-full rounded-md bg-white py-15 ps-8 pe-4 border border-neutral-2 placeholder:text-sm focus-visible:border-brand-accent focus-visible:outline-brand-accent focus-visible:outline-1 focus-visible:outline aria-invalid:border-brand-1 aria-invalid:focus-visible:border-brand-1 aria-invalid:focus-visible:outline-brand-1 aria-invalid:bg-field-error bg-no-repeat bg-field-error-img'
          required={true}
          type='email'
          id={`${id}-email`}
          placeholder='Email'
          aria-describedby={`${id}-email-err`}
          autoComplete='email'
          defaultValue=''
          {...register("email", {
            required: true,
            pattern: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,
          })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        <div id={`${id}-email-err`} aria-live='polite'>
          {errors.email?.type === "required" && (
            <p className='text-brand-1 italic text-end text-sm mt-[0.43em]'>
              {config.emailRequiredError}
            </p>
          )}
          {errors.email?.type === "pattern" && (
            <p className='text-brand-1 italic text-end text-sm mt-[0.43em]'>
              {config.emailFormatError}
            </p>
          )}
        </div>
      </div>

      {/* Password */}
      <div className='form-group'>
        <label htmlFor={`${id}-pw`}>
          <VisuallyHidden>Password</VisuallyHidden>
        </label>
        <input
          className='block w-full rounded-md bg-white py-15 ps-8 pe-4 border border-neutral-2 placeholder:text-sm focus-visible:border-brand-accent focus-visible:outline-brand-accent focus-visible:outline-1 focus-visible:outline aria-invalid:border-brand-1 aria-invalid:focus-visible:border-brand-1 aria-invalid:focus-visible:outline-brand-1 aria-invalid:bg-field-error bg-no-repeat bg-field-error-img'
          required={true}
          type='email'
          id={`${id}-pw`}
          placeholder='Password'
          aria-describedby={`${id}-pw-err`}
          autoComplete='new-password'
          defaultValue=''
          {...register("password", {
            required: true,
            pattern: /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,24}$/,
          })}
          aria-invalid={errors.password ? "true" : "false"}
        />

        <div id={`${id}-pw-err`} aria-live='polite'>
          {errors.password?.type === "required" && (
            <p className='text-brand-1 italic text-end text-sm mt-[0.43em]'>
              {config.passwordRequiredError}
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <ol className='text-brand-1 italic text-sm mt-[0.43em] ps-[1.5em] list-revert'>
                <li>{config.passwordFormatErrors.containsWhitespace}</li>
                <li>{config.passwordFormatErrors.containsUppercase}</li>
                <li>{config.passwordFormatErrors.containsLowercase}</li>
                <li>{config.passwordFormatErrors.containsNumber}</li>
                <li>{config.passwordFormatErrors.containsSymbol}</li>
                <li>{config.passwordFormatErrors.validLength}</li>
            </ol>
          )}
        </div>
      </div>

      <div className=''>
        <button
          type='submit'
          className='bg-brand-2 text-white font-bold rounded-md shadow-inner-button hover:bg-brand-accent transition ease-out duration-500 block w-full p-[0.9375em] '
          aria-describedby={`${id}-terms`}>
          Claim your Free Trial
        </button>
        <p id={`${id}-terms`} className='text-xs mt-3 text-center'>
          By clicking the button, you are agreeing to our{" "}
          <a href='/' className='text-brand-1 hover:text-brand-accent transition ease-out duration-500 outline-offset-2 font-bold underline'>
            Terms and Services
          </a>
        </p>
      </div>
    </form>
  );
}

export default RegistrationForm;