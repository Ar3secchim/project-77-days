"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import IlustrationElipse from "@/assets/SignIn/elipse-superior.svg";
import { IoArrowBackCircleOutline } from "react-icons/io5";

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
import { Button } from "@/components/ui/button";

const schemaCreateUserForm = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email("Formato de email inválido"),
  password: z.string().min(6, {
    message: "Username must be at least 6 characters.",
  }),
});

function Register() {
  const form = useForm<z.infer<typeof schemaCreateUserForm>>({
    resolver: zodResolver(schemaCreateUserForm),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof schemaCreateUserForm>) {
    console.log(data);
  }

  return (
    <main className="w-full">

      <Link href="/login" className=" z-10 absolute top-16 left-5 ">
        <IoArrowBackCircleOutline size={32}/>
      </Link>

      <div className="absolute -left-2">
        <Image src={IlustrationElipse} alt="elipse" />
      </div>

      <section className="flex flex-col justify-center h-screen">
        <h1 className="mb-5 text-3xl font-bold text-center ">
          Welcome Onboard!
        </h1>
        <p className="text-base font-medium text-primary text-center pb-14  ">
          Let’s help you meet up your task
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 pb-8"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      className="h-10  bg-white  border-neutral-300 font-medium   text-neutral-700"
                      placeholder="nome"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      className="h-10  bg-white border-neutral-300 font-medium  text-neutral-700"
                      placeholder="confirme sua senha"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <Button className="mt-8" type="submit">
          Cadastra-se
        </Button>
        <Link
          href="/login"
          className="p-6 font-bold text-center text-neutral-600"
        >
          Você já tem uma conta?
          <span className="text-primary"> Login</span>
        </Link>
      </section>
    </main>
  );
}

export default Register;
