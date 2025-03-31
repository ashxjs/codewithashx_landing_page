"use client";

import Form from "next/form";
import { useActionState } from "react";
import { subscribeUserForm } from "../actions";
import { SubmitButton } from "./SubmitButton";
import { FunctionComponent } from "react";
import { SubscriptionFormState } from "../types/form";
import { useTranslations } from "next-intl";

const initialState: SubscriptionFormState = {
  error: null,
  success: null,
};

export const SubscriptionForm: FunctionComponent = () => {
  const [state, formAction, isPending] = useActionState(
    subscribeUserForm,
    initialState
  );

  const t = useTranslations("subscribe");

  const inputClassName =
    "rounded-xl font-semibold bg-background/70 border border-blue-700 px-5 py-3 placeholder:font-semibold placeholder:text-white";

  return (
    <Form action={formAction} className="flex flex-col gap-4">
      <input
        required
        autoFocus
        type="text"
        autoCorrect="firstname"
        autoComplete="given-name"
        placeholder={t("form.firstname")}
        name="firstname"
        className={inputClassName}
        aria-describedby="firstname-error"
      />
      <input
        required
        type="text"
        autoCorrect="lastname"
        autoComplete="family-name"
        placeholder={t("form.lastname")}
        name="lastname"
        className={inputClassName}
        aria-describedby="lastname-error"
      />
      <input
        type="email"
        autoCorrect="email"
        autoComplete="email"
        placeholder={t("form.email")}
        name="email"
        required
        className={inputClassName}
        aria-describedby="email-error"
      />
      {state?.success && (
        <p
          role="status"
          aria-live="polite"
          className="text-center text-green-500"
        >
          {t(state.success)}
        </p>
      )}
      {state?.error && (
        <p
          role="alert"
          aria-live="assertive"
          className="text-center text-red-500"
        >
          {t(state.error)}
        </p>
      )}
      <SubmitButton pending={isPending} />
    </Form>
  );
};

SubscriptionForm.displayName = "SubscriptionForm";
