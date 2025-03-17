type SystemeIoServiceOptions = {
  apiKey: string;
};

type Field = {
  //   fieldName: string;
  slug: string;
  value: string;
};

type CreateContactOptions = {
  email: string;
  fields: Field[];
};

type CreateCourseEnrollmentOptions = {
  contactId: string;
  courseId: number;
  accessType: "full_access";
};

const SYSTEME_IO_API_URL = "https://api.systeme.io/api";

export class SystemeIoService {
  private readonly apiKey: string;

  constructor({ apiKey }: SystemeIoServiceOptions) {
    this.apiKey = apiKey;
  }

  async createContact(payload: CreateContactOptions) {
    const contactUrl = `${SYSTEME_IO_API_URL}/contacts`;

    const response = await fetch(contactUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Api-Key": this.apiKey,
      },
      body: JSON.stringify(payload),
    });

    return response.json();
  }

  async assignTagToContact(
    contactId: string,
    tagId: number
  ): Promise<Response> {
    const tagUrl = `${SYSTEME_IO_API_URL}/contacts/${contactId}/tags`;

    return await fetch(tagUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Api-Key": this.apiKey,
      },
      body: JSON.stringify({ tagId: tagId }),
    });
  }

  async createCourseEnrollment(
    payload: CreateCourseEnrollmentOptions
  ): Promise<Response> {
    const enrollmentUrl = `${SYSTEME_IO_API_URL}/school/courses/${payload.courseId}/enrollments`;

    return await fetch(enrollmentUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Api-Key": this.apiKey,
      },
      body: JSON.stringify(payload),
    });
  }
}

export const systemeIoService = new SystemeIoService({
  apiKey: process.env.SYSTEME_IO_API_KEY!,
});
