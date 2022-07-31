import useInput from "../hooks/basic-form-use-input";

const isNotEmpty = value => value.trim() !== '';

const BasicForm = (props) => {

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput } = useInput(isNotEmpty);

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput } = useInput(value => value.includes('@'));

  let formIsValid = false

  if (enteredNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    console.log(enteredName);

    if (!formIsValid) {
      return;
    }

    resetNameInput();
    resetLastNameInput();
    resetEmailInput();

  }

  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';

  const lastNameInputClasses = lastNameInputHasError ? 'form-control invalid' : 'form-control';

  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
            id='name'
            value={enteredName} />
          {nameInputHasError && <p className='error-text'>First Name must not be empty!</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            onChange={lastNameChangedHandler}
            onBlur={lastNameBlurHandler}
            id='name'
            value={enteredLastName} />
          {lastNameInputHasError && <p className='error-text'>Last Name must not be empty!</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='email'
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          id='email'
          value={enteredEmail} />
        {emailInputHasError && <p className='error-text'>Please enter valid email!</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
