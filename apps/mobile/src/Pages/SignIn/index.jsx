import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import ElipseSuperior from '../../assets/SignIn/elipse-superior.png'
import IlustracaoSignIn from '../../assets/SignIn/ilustratorSingIn.png'

const schemaSiginUserForm = z.object({
  email: z
    .string()
    .nonempty('o email é obrigatório')
    .email('Formato de email inválido'),
  password: z
    .string()
    .nonempty('A senha é obrigatória')
    .min(6, 'A senha precisa ter no minimo 6 caractéres'),
})

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaSiginUserForm),
  })

  function createUser(data) {
    console.log(JSON.stringify(data, null, 2))
  }

  return (
    <main className="container">
      <img
        className="relative -left-6 -top-6 z-0"
        src={ElipseSuperior}
        alt="Elipses verdes no canto superior esquerdo"
      />
      <section className="z-1 relative -top-24 flex flex-col items-center justify-center">
        <h1 className="mb-5 text-2xl ">Seja Bem Vindo</h1>
        <img
          src={IlustracaoSignIn}
          alt="Rapaz em pé parco com camisa branca e calça verde apontando para um gradro branco "
        />

        <form
          onSubmit={handleSubmit(createUser)}
          className="mt-4 flex w-full flex-col gap-6"
        >
          <input
            className="input border-gray-700 focus:input-accent"
            {...register('email')}
            type="text"
            placeholder="Email"
          />
          {errors.email && <span>{errors.email.message}</span>}

          <input
            className="input border-gray-700 focus:input-accent"
            type="password"
            placeholder="Senha"
            {...register('password')}
          />
          {errors.email && <span>{errors.password.message}</span>}

          <Link className="mt-6 text-base text-accent">Esqueceu a senha?</Link>

          <button className="btn-primary btn mt-6 w-full" type="submit">
            Entrar
          </button>
        </form>

        <p className="mt-6 text-sm">
          Não tem uma conta ?
          <Link to={'/register'} className="pl-1 text-sm text-accent">
            Cadastra-se aqui
          </Link>
        </p>
      </section>
    </main>
  )
}

export default SignIn
