"use client";

import Form from "next/form";
import { useFormStatus } from "react-dom";
import { submitForm } from "../actions";
import { SubmitButton } from "./SubmitButton";
import { FunctionComponent } from "react";

export const dynamic = "force-dynamic";

export const SubscriptionForm: FunctionComponent = () => {
  const { pending } = useFormStatus();

  const inputClassName =
    "rounded-xl font-semibold bg-background/70 border border-blue-700 px-5 py-3 placeholder:font-semibold placeholder:text-white";

  return (
    <Form action={submitForm} className="flex flex-col gap-4">
      <input
        type="text"
        autoCorrect="firstname"
        autoComplete="given-name"
        placeholder="Nom"
        name="firstname"
        required
        className={inputClassName}
      />
      <input
        type="text"
        autoCorrect="lastname"
        autoComplete="family-name"
        placeholder="Prénom"
        name="lastname"
        required
        className={inputClassName}
      />
      <input
        type="email"
        autoCorrect="email"
        autoComplete="email"
        placeholder="Email"
        name="email"
        required
        className={inputClassName}
      />
      <SubmitButton pending={pending} />
    </Form>
  );
};

SubscriptionForm.displayName = "SubscriptionForm";
