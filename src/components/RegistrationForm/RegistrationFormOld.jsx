import React from "react";

import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";

function RegistrationFormOld({ handleSignUp }) {
  const id = React.useId();

  const config = {
    givenNameError: 'Please enter a valid first name',
    familyNameError: 'Please enter a valid last name',
    emailError: 'Please enter a valid email',
  }

  const [values, setValues] = React.useState({
    givenName: '',
    givenNameValid: false,
    familyName: '',
    familyNameValid: false,
    email: '',
    emailValid: false,
    password: '',
    passwordValid: false,
    formValid: false,
    formSubmitted: false,
    formErrors: {
      givenName: '',
      familyName: '',
      email: '',
      password: '',
    }
  })

  // Needs useEffect to check for errors on each render
  React.useEffect(() => {
    
  }, [values.givenName, values.familyName, values.email, values.password])


  const saveFormData = async () => {
    const response = await fetch('/api/registration', {
      method: 'POST',
      body: JSON.stringify(values)
    });
    if (response.status !== 200) {
      throw new Error(`Request failed: ${response.status}`); 
    }
  }

  function validateField(value, fieldName) {
    let fieldValidationErrors = values.formErrors;
    let emailValid = values.emailValid;
    let passwordValid = values.passwordValid;
  
    switch(fieldName) {
      case 'givenName':
        fieldValidationErrors.givenName = emailValid ? '' : ' is invalid';
        break;
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    setValues({...values, formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, validateForm);
  }

  function validateForm() {
    setValues({...values, formValid: values.givenNameValid});
  }

  function handleChange(val, field) {
    () => {validateField(val, field)}
    setValues({...values, [field]: val, [`${field}Valid`]: !!val});
  }

  function showErrors(fieldName) {
    let entries = Object.entries(values);
			// console.log(entries);

			for (let [key, value] of entries) {
				// console.log(key, value);
        // validateField(key, value);

        if (value === '') {
          console.log(key)
        }
			}
  }

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default submission
    try {
      setValues({...values, formSubmitted: true});
      showErrors();

      if (values.givenNameValid && values.familyNameValid && values.emailValid && values.passwordValid) {
        setValues({...values, formValid: true});
      }

      if (values.formValid) {
        // console.log(values);
        // await saveFormData();
        alert('Your registration was successfully submitted!');
        setValues({
          givenName: '',
          familyName: '',
          email: '',
          password: '',
        });
      } else {
        console.log('else', values);
      }

    } catch (e) {
      alert(`Registration failed! ${e.message}`);
    }
  }


  function validateForm(event) {
    event.preventDefault();
    console.log('submit');
  }

  return (
    <form
      action=''
      className='bg-white text-neutral-1 rounded-md p-6 flex flex-col gap-y-[20px]'
      onSubmit={ handleSubmit } noValidate>
      <div className=''>
        <label htmlFor={`${id}-fname`}>
          <VisuallyHidden>First Name</VisuallyHidden>
        </label>
        <input
          className='block w-full rounded-md bg-white py-15 ps-8 pe-4 border border-neutral-2 placeholder:text-sm focus-visible:border-brand-accent focus-visible:outline-brand-accent focus-visible:outline-1 focus-visible:outline'
          required={true}
          type='text'
          name='fname'
          id={`${id}-fname`}
          placeholder='First Name'
          aria-describedby={`${id}-fname-err`}
          autoComplete='given-name'
          value={values.givenName}
          onChange={(event) => {
            handleChange(event.target.value, 'givenName');
          }}
        />
        <p id={`${id}-fname-err`}>{values.formSubmitted === true && values.givenNameValid === false ? config.givenNameError : ''}</p>
      </div>

      <div className=''>
        <button
          type='submit'
          className='bg-brand-2 text-white font-bold rounded-md shadow-inner-button block w-full p-[0.9375em] '
          aria-describedby={`${id}-terms`}>
          Claim your Free Trial
        </button>
        <p id={`${id}-terms`} className='text-xs mt-3 text-center'>
          By clicking the button, you are agreeing to our{" "}
          <a href='/' className='text-brand-1 font-bold'>
            Terms and Services
          </a>
        </p>
      </div>
    </form>
  );
}

export default RegistrationFormOld;
