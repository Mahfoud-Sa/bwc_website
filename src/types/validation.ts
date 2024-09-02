import { z } from "zod";

export const addReferenceSchema = z.object({
  ar_title: z.string(),
  en_title: z.string(),
  link: z.string(),
});

export type ReferenceResp = {
  id: number;
  ar_title: string;
  en_title: string;
  link: string;
};
