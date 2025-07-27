// import { useState } from "react";
import { type SubmitHandler, useForm } from 'react-hook-form';

import z from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

const loginZodSchema = z.object({
  name: z.string().min(3, 'naam xoto bhayo'),
  password: z.string(),
  address: z.string(),
});

type inputs = {
  name: string;
  password: string;
  address: string;
};
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<inputs>({ defaultValues: {}, resolver: zodResolver(loginZodSchema) });

  // eslint-disable-next-line no-console
  const onSubmit: SubmitHandler<inputs> = data => {
    console.log(data);
  };

  return (
    <div>
      <h1>Login Form</h1>
      <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor=''>Name: </label>
        <input
          className='bg-cyan-200'
          id='name'
          placeholder='enter name..'
          type='text'
          {...register('name', { required: { message: 'error', value: true } })}
        />
        {errors.name && <p className='text-red-400'>{errors.name.message}</p>}
        <label htmlFor=''>Password: </label>
        <input
          className='bg-cyan-200'
          id='password'
          placeholder='enter password..'
          type='password'
          {...register('password', { required: { message: 'error', value: true } })}
        />
        {errors.password && <p className='text-red-400'>{errors.password.message}</p>}
        <label htmlFor=''>Address: </label>
        <input
          className='bg-cyan-200'
          id='address'
          placeholder='enter address..'
          type='text'
          {...register('address', { required: { message: 'error', value: true } })}
        />
        {errors.address && <p className='text-red-400'>{errors.address.message}</p>}
        <button className='bg-green-500 text-black' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
