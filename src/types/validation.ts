import { z } from "zod";

export const addReferenceSchema = z.object({
  title: z.string(),
  link: z.string(),
});
