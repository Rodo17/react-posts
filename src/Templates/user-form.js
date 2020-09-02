import React from "react";
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';

function UserForm() {
  const { register, handleSubmit, errors } = useForm();
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  const onSubmit = data => {console.log(data);}
  const validateIdUser = async (value) => {
    await  sleep(1000);
    if (value === '202000') return true;

    return false;
  }

  return (

    <form onSubmit={handleSub  mit(onSubmit)} className="col-8" >
      <section className="form-row">
        <label className="m-2">
          User ID:
                <input name="idUser" className="form-control" type='number' ref={register({ required: true, min: 202000,
                validate: validateIdUser })} />
                {errors.idUser && errors.idUser.type === "required" && <p>This is required</p>}
                {errors.idUser && errors.idUser.type === "min" &&
                 <p>This field required min value of 202000</p>}
                 {errors.idUser && <p>This id isn't correct</p>}
        </label>
        <label className="m-2">
          Name:
                <input name="userName" className="form-control" type='text' ref={register({ required: true, pattern: /^[A-Za-z]+$/i })} />
                {errors.userName && errors.userName.type === "required" && <p>This is required</p>}
                {errors.userName && <p>This field can only contain normal characters</p>}
        </label>
        <label className="m-2">
          Password:
                <input name="pass" className="form-control" type='text' ref={register({ required: true})} />
        </label>
      </section>
      <button type='button' className="btn btn-outline-secondary m-1" >Reset Form</button>
      <button type='submit' className="btn btn-outline-secondary m-1">Send</button>
    </form>
    /*
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>
            First Name: 
        <input name="firstName" ref={register({ required: true, maxLength: 20 })} />
        </label>
      
      <label>
          LastName:
      <input name="lastName" ref={register({ required: true, pattern: /^[A-Za-z]+$/i })} />
      </label>
      
      <label>
          Age:
          <input name="age" type="number" ref={register({ required: true, min: 18, max: 99 })} />
      </label>
      
      <input type="submit" />
    </form>
    */
  );
}

export default UserForm;