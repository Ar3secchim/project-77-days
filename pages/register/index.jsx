import Link from 'next/link';
import Button from '../components/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

function Register() {
  const schemaCreateUserForm = z
    .object({
      name: z
        .string()
        .min(3, { message: 'nome dever ter pelo menos 3 caractéres' }),
      email: z
        .string()
        .min(1, { message: 'email obrigátorio' })
        .email('Formato de email inválido'),
      password: z.string().trim().min(6, {
        message: 'A senha deve ter pelo menos 6 caractéres.',
      }),
      confirmedPassword: z.string().trim().min(6, {
        message: 'A senha deve ter pelo menos 6 caractéres.',
      }),
    })
    .refine((data) => data.password === data.confirmedPassword, {
      message: 'Senhas não conferem',
      path: ['confirmedPassword'],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaCreateUserForm),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmedPassword: '',
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <section className='m-4 mx-6 flex h-screen flex-col items-center justify-center'>
      <h1 className='text-center text-2xl font-extrabold'>
        Bem vindo a bordo!
      </h1>
      <h2 className='mb-8 text-xl font-bold text-primary'>
        Vamos ajudá-lo a seguir seus hábitos
      </h2>

      <form
        className='flex w-full flex-col items-center gap-3'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='flex w-full flex-col gap-2 font-normal'>
          <label className='text-base font-medium text-secondary'>Nome</label>
          <input
            className={`h-10 rounded-lg border bg-white px-2 font-sans font-light placeholder-secondary-dark-200 ${errors.name ? 'border-error text-error focus:border-error focus:outline-error' : 'border-secondary-dark-100 focus:outline-primary'}`}
            placeholder='Nome Sobrenome'
            {...register('name')}
          />
          {
            <span className='font-sans text-sm text-error'>
              {errors.name?.message}
            </span>
          }
        </div>
        <div className='flex w-full flex-col gap-2 font-normal'>
          <label className='text-base font-medium text-secondary'>Email</label>
          <input
            className={`h-10 rounded-lg border bg-white px-2 font-sans font-light placeholder-secondary-dark-200 ${errors.email ? 'border-error text-error focus:border-error focus:outline-error' : 'border-secondary-dark-100 focus:outline-primary'}`}
            placeholder='email@email.com'
            {...register('email')}
          />
          {
            <span className='font-sans text-sm text-error'>
              {errors.email?.message}
            </span>
          }
        </div>

        <div className='flex w-full flex-col gap-2 font-normal'>
          <label className='text-base font-medium text-secondary'>Senha</label>
          <input
            type='password'
            {...register('password')}
            className={`h-10 rounded-lg border bg-white px-2 font-sans font-light placeholder-secondary-dark-200 ${errors.password ? 'border-error text-error focus:border-error focus:outline-error' : 'border-secondary-dark-100 focus:outline-primary'}`}
          />
          {
            <span className='font-sans text-sm text-error'>
              {errors.password?.message}
            </span>
          }
          <label className='text-base font-medium text-secondary'>
            Confirme sua senha
          </label>
          <input
            type='password'
            {...register('confirmedPassword')}
            className={`h-10 rounded-lg border bg-white px-2 font-sans font-light placeholder-secondary-dark-200 ${errors.confirmedPassword ? 'border-error text-error focus:border-error focus:outline-error' : 'border-secondary-dark-100 focus:outline-primary'}`}
          />
          {
            <span className='font-sans text-sm text-error'>
              {errors.confirmedPassword?.message}
            </span>
          }
        </div>

        <span className='w-full'>
          <Button
            size='sm'
            style='link'
            className='m-2 justify-start p-0 font-display'
          >
            <Link className='w-fit' href='/'>
              Esqueceu a senha?
            </Link>
          </Button>
        </span>

        <Button size='md' style='filled' className='mt-8 w-56' type='submit'>
          Entrar
        </Button>
      </form>

      <div className='my-4 flex w-full flex-col text-center'>
        <span className=''>Já tem um conta?</span>
        <Button
          size='sm'
          style='link'
          className='font-display underline underline-offset-2'
        >
          <Link href='/login'>Faça seu login</Link>
        </Button>
      </div>
    </section>
  );
}

export default Register;
