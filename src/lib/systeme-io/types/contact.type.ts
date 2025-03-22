export type Field = {
  slug: string;
  value: string;
};

export type CreateContactOptions = {
  email: string;
  fields: Field[];
};

export type Contact = {
  id: string;
  email: string;
  fields: Field[];
};
