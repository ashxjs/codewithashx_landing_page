import { SubscriptionForm } from "./components/SubscriptionForm";
import { BackButton } from "./components/BackButton";

export default function Subscriptions() {
  return (
    <div className="flex items-center justify-center h-screen">
      <BackButton />
      <div className="bg-dot-pattern absolute inset-0 opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background"></div>
      <div className="rounded-xl relative p-10 bg-background/70 max-w-xl shadow-lg md:p-20">
        <h1 className="text-white text-2xl font-bold pb-10">
          Dernières étapes pour accéder à la formation
        </h1>
        <SubscriptionForm />
      </div>
    </div>
  );
}
