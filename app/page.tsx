import Image from "next/image";
import Ilustration from "@/assets/SignIn/ilustratorPageInto.png";
import IlustrationElipse from "@/assets/SignIn/elipse-superior.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="absolute -left-2">
        <Image src={IlustrationElipse} alt="elipse" />
      </div>
      <section className="flex flex-col justify-center h-screen">
        <Image
          src={Ilustration}
          alt="jovem sentado no sofá com um gato ao lado dele"
        />

        <div className="pb-14 pt-6">
          <h1 className="font-bold text-xl text-center pb-4">
            Faça as coisas com ToDo
          </h1>
          <p className="text-base font-bold text-neutral-700 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing. Maxime,
            tempore! Animi nemo aut atque, deleniti nihil dolorem repellendus.
          </p>
        </div>
        <Button asChild>
          <Link href="/register">Vamos começar</Link> 
        </Button>
      </section>
    </main>
  );
}
