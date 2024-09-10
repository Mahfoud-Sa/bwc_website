import { z } from "zod";
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const addReferenceSchema = z.object({
  ar_title: z.string().max(19),
  en_title: z.string().max(19),
  link: z.string().max(1000),
});
export const addJobSchema = z.object({
  ar_title: z.string().max(19),
  en_title: z.string().max(19),
  link: z.string().max(1000),
  type: z.boolean(),
});
export const addTaskForceSchema = z.object({
  Name: z.string().max(19),
  Degree: z.string().max(19),
  Role: z.string().max(19),
  ImageFile: z
    .instanceof(FileList)
    .refine((files) => files.length === 1, {
      message: "You must upload one file.",
    })
    .refine((files) => files[0].size <= MAX_FILE_SIZE, {
      message: `File size must be less than ${MAX_FILE_SIZE / 1024 / 1024}MB.`,
    })
    .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files[0].type), {
      message: "Only JPEG, JPG, PNG, and WEBP files are accepted.",
    }),
});

export const addOrgSchema = z.object({
  name: z.string(),
  link: z.string(),
  imageFile: z
    .instanceof(FileList)
    .refine((files) => files.length === 1, {
      message: "You must upload one file.",
    })
    .refine((files) => files[0].size <= MAX_FILE_SIZE, {
      message: `File size must be less than ${MAX_FILE_SIZE / 1024 / 1024}MB.`,
    })
    .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files[0].type), {
      message: "Only JPEG, JPG, PNG, and WEBP files are accepted.",
    }),
});

export const addWriterSchema = z.object({
  ar_fullName: z.string().nonempty("Arabic full name is required"),
  En_fullName: z.string().nonempty("English full name is required"),
  ImageFile: z
    .instanceof(FileList)
    .refine((files) => files.length === 1, {
      message: "You must upload one file.",
    })
    .refine((files) => files[0].size <= MAX_FILE_SIZE, {
      message: `File size must be less than ${MAX_FILE_SIZE / 1024 / 1024}MB.`,
    })
    .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files[0].type), {
      message: "Only JPEG, JPG, PNG, and WEBP files are accepted.",
    }),
  ar_description: z.string().nonempty("Arabic description is required"),
  en_description: z.string().nonempty("English description is required"),
  ar_role: z.string().nonempty("Arabic role is required"),
  en_role: z.string().nonempty("English role is required"),
});

export type ReferenceResp = {
  id: number;
  ar_title: string;
  en_title: string;
  link: string;
};
export type WriterResp = {
  id: number;
  ar_fullName: string;
  en_fullName: string;
  image: string;
  ar_description: string;
  en_description: string;
  ar_role: string;
  en_role: string;
};
export type TaskForceResp = {
  id: number;
  name: string;
  degree: string;
  role: string;
  image: string;
};
export type OgResp = {
  id: number;
  name: string;
  img: string;
  link: string;
};
