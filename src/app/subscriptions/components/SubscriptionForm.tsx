"use client";

import Form from "next/form";
import { useActionState } from "react";
import { subscribeUserForm } from "../actions";
import { SubmitButton } from "./SubmitButton";
import { FunctionComponent } from "react";
import { SubscriptionFormState } from "../types/form";

const initialState: SubscriptionFormState = {
  error: null,
  success: null,
};

export const SubscriptionForm: FunctionComponent = () => {
  const [state, formAction, isPending] = useActionState(
    subscribeUserForm,
    initialState
  );

  const inputClassName =
    "rounded-xl font-semibold bg-background/70 border border-blue-700 px-5 py-3 placeholder:font-semibold placeholder:text-white";

  return (
    <Form action={formAction} className="flex flex-col gap-4">
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
      {state?.success && (
        <p className="text-center text-green-500">{state.success}</p>
      )}
      {state?.error && (
        <p className="text-center text-red-500">{state.error}</p>
      )}
      <SubmitButton pending={isPending} />
    </Form>
  );
};

SubscriptionForm.displayName = "SubscriptionForm";
