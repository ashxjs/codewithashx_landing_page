import {
  CreateContactOptions,
  Contact,
} from "@/lib/systeme-io/types/contact.type";
import { SystemeIoError } from "./systeme-io-error";

export class SystemeIoServiceContact {
  private readonly _apiKey: string;
  private readonly _baseUrl: string;

  constructor(apiKey: string, baseUrl: string) {
    this._apiKey = apiKey;
    this._baseUrl = baseUrl;
  }

  async createContact(payload: CreateContactOptions): Promise<Contact> {
    const contactUrl = `${this._baseUrl}/contacts`;

    const response = await fetch(contactUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Api-Key": this._apiKey,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new SystemeIoError(response.status);
    }

    return response.json();
  }

  async assignTagToContact(
    contactId: string,
    tagId: number
  ): Promise<Response> {
    const tagUrl = `${this._baseUrl}/contacts/${contactId}/tags`;

    return fetch(tagUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Api-Key": this._apiKey,
      },
      body: JSON.stringify({ tagId: tagId }),
    });
  }
}
