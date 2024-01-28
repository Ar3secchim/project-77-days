"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import IlustrationSingIn from "@/assets/SignIn/ilustratorSingIn.png";
import IlustrationElipse from "@/assets/SignIn/elipse-superior.svg";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

const schemaCreateUserForm = z.object({
  email: z.string().email("Formato de email inválido"),
  password: z.string().min(6, {
    message: "Username must be at least 6 characters.",
  }),
});

function Login() {
  const form = useForm<z.infer<typeof schemaCreateUserForm>>({
    resolver: zodResolver(schemaCreateUserForm),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof schemaCreateUserForm>) {
    console.log(data);
  }

  return (
    <main className="w-full">
      <div className="absolute -left-2">
        <Image src={IlustrationElipse} alt="elipse" />
      </div>

      <section className="flex flex-col justify-center h-screen">
        <div className="flex items-center flex-col">
          <h1 className="mb-5 text-2xl font-bold text-center ">Bem vindo</h1>
          <Image
            className="m-4"
            src={IlustrationSingIn}
            alt="elipse"
          />
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 pb-8"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      className="h-10  bg-white border-neutral-300 font-medium   text-neutral-700"
                      placeholder="email@email.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      className="h-10  bg-white border-neutral-300 font-medium   text-neutral-700"
                      placeholder="senha"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <Link href="/password" className="font-bold text-center text-primary">
          Esqueceu sua senha?
        </Link> 

        <Button className="mt-10" type="submit">
          Login
        </Button>

        <Link
          className="p-6 font-bold text-center text-neutral-600"
          href="/register"
        >
          Você ainda não é cadastrado? <span className="text-primary">Cadastre-se</span>
        </Link>
      </section>
    </main>
  );
}

export default Login;
