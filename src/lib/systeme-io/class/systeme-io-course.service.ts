import { CreateCourseEnrollmentOptions } from "@/lib/systeme-io/types/course.type";

export class SystemeIoServiceCourse {
  private readonly _apiKey: string;
  private readonly _baseUrl: string;

  constructor(apiKey: string, baseUrl: string) {
    this._apiKey = apiKey;
    this._baseUrl = baseUrl;
  }

  async createCourseEnrollment(
    payload: CreateCourseEnrollmentOptions
  ): Promise<Response> {
    const enrollmentUrl = `${this._baseUrl}/school/courses/${payload.courseId}/enrollments`;

    return fetch(enrollmentUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Api-Key": this._apiKey,
      },
      body: JSON.stringify(payload),
    });
  }
}
