const ERROR_MESSAGES = {
  422: "Un compte avec cet email existe déjà",
};

export class SystemeIoError extends Error {
  constructor(status: number) {
    super(ERROR_MESSAGES[status as keyof typeof ERROR_MESSAGES]);
  }
}
