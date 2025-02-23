import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-[100dvh] relative">
      <div className="z-[-100] bg-square-pattern absolute inset-0 opacity-50"></div>
      <div className="z-[-100] absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background"></div>
      <div className="h-full z-10 flex flex-col gap-y-4 items-center justify-center">
        <h1 className="text-4xl font-bold">
          Error{" "}
          <span className="border border-red-600/80 bg-red-900/70 px-2 mx-1">
            404
          </span>
        </h1>
        <p className="text-lg">La page que vous cherchez n&apos;existe pas</p>
        <Link
          href="/"
          className="mt-4 px-4 py-2 bg-blue-900/70 text-white rounded border border-blue-700 hover:bg-blue-700"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
