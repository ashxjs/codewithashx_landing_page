"use server";

import { z } from "zod";
import { COURSE } from "@/mock/course";
import { TAGS } from "@/mock/tags";
import { systemeIoService } from "@/lib/systeme-io";
import { SubscriptionFormState } from "./types/form";

const subscriptionSchema = z.object({
  firstname: z.string().min(1, "Le prénom est requis"),
  lastname: z.string().min(1, "Le nom est requis"),
  email: z.string().email("L'email est invalide"),
});

const SUCCESS_MESSAGE = "Votre inscription a été effectuée avec succès";

export async function subscribeUserForm(
  prevState: Awaited<SubscriptionFormState> | SubscriptionFormState,
  formData: FormData
): Promise<SubscriptionFormState> {
  const data = {
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname"),
    email: formData.get("email"),
  };

  const result = subscriptionSchema.safeParse(data);

  if (!result.success) {
    return {
      success: null,
      error: "Erreur de validation : " + JSON.stringify(result.error.format()),
    };
  }

  const { firstname, lastname, email } = result.data;

  try {
    const contact = await systemeIoService.contact.createContact({
      email: email,
      fields: [
        { value: firstname, slug: "surname" },
        { value: lastname, slug: "first_name" },
      ],
    });

    await systemeIoService.contact.assignTagToContact(
      contact.id,
      TAGS.FREE_MEMBER
    );

    await systemeIoService.course.createCourseEnrollment({
      contactId: contact.id,
      courseId: COURSE.JAVASCRIPT_FROM_ZERO_TO_HERO,
      accessType: "full_access",
    });

    return { success: SUCCESS_MESSAGE, error: null };
  } catch (error) {
    return { success: null, error: (error as Error).message };
  }
}
