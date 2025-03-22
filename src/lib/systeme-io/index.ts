import { SystemeIoService } from "./class/system-io.service";

export * from "./class/system-io.service";

export const systemeIoService = new SystemeIoService({
  apiKey: process.env.SYSTEME_IO_API_KEY!,
  baseUrl: process.env.SYSTEME_IO_BASE_URL!,
});
