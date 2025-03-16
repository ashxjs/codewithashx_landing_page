import { Routes } from "@/types/Routes";
import { ArrowLeft } from "lucide-react";
import Form from "next/form";
import Link from "next/link";

export default function Subscriptions() {
  const inputClassName =
    "rounded-xl font-semibold bg-background/70 border border-blue-700 px-5 py-3 placeholder:font-semibold placeholder:text-white";

  const handleSubmit = async (formData: FormData) => {
    "use server";
    const { firstname, lastname, email } = Object.fromEntries(
      formData.entries()
    );
    console.log(firstname, lastname, email);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Link
        href={Routes.Home}
        className="absolute top-5 left-5 bg-blue-900 text-white rounded-full p-2 shadow-md hover:bg-gray-800 transition-colors z-10 border border-blue-700"
        aria-label="Retour à l'accueil"
      >
        <ArrowLeft size={24} />
      </Link>
      <div className="bg-dot-pattern absolute inset-0 opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background"></div>
      <div className="rounded-xl relative p-10 bg-background/70 max-w-xl shadow-lg md:p-20">
        <h1 className="text-white text-2xl font-bold pb-10">
          Dernières étapes pour accéder à la formation
        </h1>
        <Form action={handleSubmit} className="flex flex-col gap-4">
          <input
            className={inputClassName}
            type="text"
            autoCorrect="firstname"
            placeholder="Nom"
            defaultValue={"hurunghee"}
            name="firstname"
          />
          <input
            className={inputClassName}
            type="text"
            autoCorrect="lastname"
            placeholder="Prénom"
            defaultValue={"alexis"}
            name="lastname"
          />
          <input
            className={inputClassName}
            type="email"
            autoCorrect="email"
            placeholder="Email"
            defaultValue={"alexis@fk.fr"}
            name="email"
          />
          <button
            type="submit"
            className="font-bold mt-6 inline-block text-white py-3 px-6 bg-blue-900 hover:bg-blue-700 rounded-full shadow-md border border-blue-700"
          >
            Je m&apos;inscris gratuitement 🚀
          </button>
        </Form>
      </div>
    </div>
  );
}
