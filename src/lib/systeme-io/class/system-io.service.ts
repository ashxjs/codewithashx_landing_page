import { SystemeIoServiceContact } from "./systeme-io-contact.service";
import { SystemeIoServiceCourse } from "./systeme-io-course.service";

interface SystemeIoServiceOptions {
  apiKey: string;
  baseUrl: string;
}

export class SystemeIoService {
  private readonly _contact: SystemeIoServiceContact;
  private readonly _course: SystemeIoServiceCourse;

  constructor({ apiKey, baseUrl }: SystemeIoServiceOptions) {
    this._contact = new SystemeIoServiceContact(apiKey, baseUrl);
    this._course = new SystemeIoServiceCourse(apiKey, baseUrl);
  }

  public get contact() {
    return this._contact;
  }

  public get course() {
    return this._course;
  }
}
