"use server";

import { COURSE } from "@/mock/course";
import { TAGS } from "@/mock/tags";
import { systemeIoService } from "@/services/systeme-io.service";

export async function submitForm(formData: FormData) {
  const { firstname, lastname, email } = Object.fromEntries(formData.entries());

  const contact = await systemeIoService.createContact({
    email: email as string,
    fields: [
      {
        value: firstname as string,
        slug: "surname",
      },
      {
        value: lastname as string,
        slug: "first_name",
      },
    ],
  });

  await systemeIoService.assignTagToContact(contact.id, TAGS.FREE_MEMBER);
  await systemeIoService.createCourseEnrollment({
    contactId: contact.id,
    courseId: COURSE.JAVASCRIPT_FROM_ZERO_TO_HERO,
    accessType: "full_access",
  });
}
