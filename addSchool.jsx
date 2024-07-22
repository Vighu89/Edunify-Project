
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddSchool = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    const formData = new FormData();
    // formData.append('name', data.name);
    // formData.append('address', data.address);
    // formData.append('city', data.city);
    // formData.append('state', data.state);
    // formData.append('contact', data.contact);
    // // formData.append('image', data.image[0]);
    // formData.append('email_id', data.email_id);
    console.log('formData', formData)
    axios.post('http://localhost:3001/addschool', {
      data,
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name', { required: true })} placeholder="Name" />
      {errors.name && <p>Name is required</p>}<br/>
      <input {...register('address', { required: true })} placeholder="Address" />
      {errors.address && <p>Address is required</p>}<br/>
      <input {...register('city', { required: true })} placeholder="City" />
      {errors.city && <p>City is required</p>}<br/>
      <input {...register('state', { required: true })} placeholder="State" />
      {errors.state && <p>State is required</p>}<br/>
      <input {...register('contact', { required: true })} placeholder="Contact" />
      {errors.contact && <p>Contact is required</p>}<br/>
      <input {...register('image', { required: true })} type="file" />
      {errors.image && <p>Image is required</p>}<br/>
      <input {...register('email_id', { required: true, pattern: /^\S+@\S+$/i })} placeholder="Email" />
      {errors.email_id && <p>Valid email is required</p>}<br/>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddSchool;


