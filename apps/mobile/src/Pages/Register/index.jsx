import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import ElipseSuperior from '../../assets/SignIn/elipse-superior.png'

const schemaCreateUserForm = z.object({
  name: z.string().min(2, 'Pelo menos 2 caractéres').nonempty(),
  email: z
    .string()
    .nonempty('o email é obrigatório')
    .email('Formato de email inválido'),
  password: z
    .string()
    .nonempty('A senha é obrigatória')
    .min(6, 'A senha precisa ter no minimo 6 caractéres'),
  checkbox: z.boolean(),
})

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaCreateUserForm),
  })

  function createUser(data) {
    console.log(JSON.stringify(data, null, 2))
    console.log(errors)
  }

  return (
    <main className="container">
      <img
        className="relative -left-6 -top-6 z-0"
        src={ElipseSuperior}
        alt="Elipses verdes no canto superior esquerdo"
      />

      <section className="z-1 relative -top-6 flex flex-col items-center justify-center">
        <h1 className="mb-5 text-2xl ">Se cadastre aqui</h1>
        <form
          onSubmit={handleSubmit(createUser)}
          className="mt-4 flex w-full flex-col gap-6"
        >
          <input
            className="input border-gray-700 focus:input-accent"
            {...register('name')}
            type="text"
            placeholder="Primeiro nome"
          />
          {errors.name && <span>{errors.name.message}</span>}

          <input
            className="input border-gray-700 focus:input-accent"
            {...register('email')}
            type="email"
            placeholder="Email"
          />
          {errors.email && <span>{errors.email.message}</span>}

          <input
            className="input border-gray-700 focus:input-accent"
            {...register('password')}
            type="password"
            placeholder="Senha"
          />
          {errors.password && <span>{errors.password.message}</span>}
          <label className=" flex justify-center">
            <input
              {...register('checkbox')}
              className="checkbox-accent checkbox  "
              type="checkbox"
            />
            <span className="label-text pl-4">Aceito Termos e condições</span>
          </label>
          {errors.checkbox && <span>{errors.checkbox.message}</span>}

          <button className="btn-primary btn mt-6 w-full" type="submit">
            Cadastrar
          </button>
        </form>
      </section>
    </main>
  )
}

export default Register
