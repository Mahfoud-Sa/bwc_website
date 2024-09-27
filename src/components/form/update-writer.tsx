import React, { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UpdateWriterSchema, WriterResp } from "src/types/validation";
import { z } from "zod";
import Label from "src/ui/label";
import { Input } from "src/ui/input";
import { Button } from "../../ui/button";
import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosInstance, patchApi, postApi, putApi } from "src/lib/http";
import { useToast } from "src/ui/use-toast";
import { useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import AddPersonalImageDialog from "../dailog/add-personal-image-dialog";
import { Textarea } from "src/ui/textarea";
import { useTranslation } from "react-i18next";
import { MultiSelect } from "primereact/multiselect";

type WriterFormValue = z.infer<typeof UpdateWriterSchema>;

interface WriterResponse {
  data: {
    id: number; // Define the type of the id
    ar_fullName: string;
    en_fullName: string;
    ar_description: string;
    en_description: string;
    ar_role: string;
    en_role: string;
    soicalmedia: { id: number; name: string; url: string; writerId: number }[];
  };
}
interface City {
  name: string;
  code: string;
}
export default function UpdateWriterForm() {
  const [selectedCities, setSelectedCities] = useState<City[]>([]);
  console.log("selectedCities", selectedCities);
  const [selectedSocialMedia, setSelectedSocialMedia] = useState<any[]>([]);
  const [socialMediaFields, setSocialMediaFields] = useState<
    { name: string; url: string }[]
  >([]);
  console.log("socialMediaFields", socialMediaFields);
  const [socialMediaUrls, setSocialMediaUrls] = useState<{
    [key: string]: string;
  }>({});
  const cities: City[] = [
    { name: "Instagram", code: "instagram" },
    { name: "WhatsApp", code: "whatsapp" },
    { name: "X (Twitter)", code: "X" },
    { name: "LinkedIn", code: "linkedin" },
    { name: "Facebook", code: "facebook" },
  ];
  const { t, i18n } = useTranslation();
  const dir = i18n.dir();
  const { id } = useParams<{ id: string }>();
  const [existingImageUrl, setExistingImageUrl] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const navigate = useNavigate();
  const form = useForm<z.infer<typeof UpdateWriterSchema>>({
    resolver: zodResolver(UpdateWriterSchema),
  });

  const fetchData = async () => {
    const response = await axiosInstance.get<WriterResp>(
      `/api/Writers/${id}`,
      {}
    );
    return response.data;
  };
  const {
    data: WriterData,
    error: WriterError,
    isLoading: WriterIsLoading,
  } = useQuery({
    queryKey: ["Writer", id],
    queryFn: fetchData,
    enabled: !!id,
  });

  useEffect(() => {
    if (WriterData) {
      form.reset({
        Ar_fullName: WriterData.ar_fullName,
        En_fullName: WriterData.en_fullName,
        Ar_description: WriterData.ar_description,
        En_description: WriterData.en_description,
        Ar_role: WriterData.ar_role,
        En_role: WriterData.en_role,
      });

      setExistingImageUrl(WriterData.image);
    }
  }, [WriterData]);
  const {
    mutate: firstMutate,
    isError: firstIsError,
    isSuccess: firstIsSuccess,
    isPending: firstIsPending,
  } = useMutation<WriterResponse, Error, WriterFormValue>({
    mutationKey: ["Writer"],
    mutationFn: (datas: WriterFormValue) => {
      const formData = new FormData();
      formData.append("Ar_fullName", datas.Ar_fullName);
      formData.append("En_fullName", datas.En_fullName);
      formData.append("Ar_description", datas.Ar_description);
      formData.append("En_description", datas.En_description);
      formData.append("Ar_role", datas.Ar_role);
      formData.append("En_role", datas.En_role);
      if (datas.ImageFile) {
        formData.append("ImageFile", datas.ImageFile[0]);
      }
      return putApi(`/api/Writers/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
    onSuccess: (data) => {
      console.log("data", data.data);
      const writerId = Number(id);
      console.log("Writer ID:", writerId);

      if (writerId && socialMediaFields.length > 0) {
        console.log("socialMediaFields:", socialMediaFields);
        secondMutate({
          id: writerId,
          Soicalmedia: socialMediaFields,
        });
      } else {
        console.warn("Writer ID or socialMediaFields is missing.");
      }
    },
    onError: (error) => {
      toast.success("لم تتم العميله.", {
        style: {
          border: "1px solid  #FF5733 ",
          padding: "16px",
          color: " #FF5733 ",
        },
        iconTheme: {
          primary: " #FF5733 ",
          secondary: "#FFFAEE",
        },
      });
    },
  });

  const {
    mutate: secondMutate,
    isError: secondIsError,
    isSuccess: secondIsSuccess,
    isPending: secondIsPending,
  } = useMutation({
    mutationKey: ["SocialMedia"],
    mutationFn: (datas: {
      id: number;
      Soicalmedia: { name: string; url: string }[];
    }) => {
      console.log("Sending PATCH request to:", `/api/Writers/${datas.id}`);
      console.log("Request body:", datas.Soicalmedia);

      // Send the array of social media objects directly as the body
      return patchApi(`/api/Writers/${datas.id}`, datas.Soicalmedia);
    },
    onSuccess: (data) => {
      console.log("Second mutation success:", data);
      toast.success("تمت الاضافة بنجاح.", {
        style: {
          border: "1px solid #4FFFB0",
          padding: "16px",
          color: "#4FFFB0",
        },
        iconTheme: {
          primary: "#4FFFB0",
          secondary: "#FFFAEE",
        },
      });
      navigate("/admin-dashboard/writer");
      window.location.reload();
    },
    onError: (error) => {
      console.log("Second mutation error:", error);
      toast.error("لم تتم العميله.", {
        style: {
          border: "1px solid  #FF5733 ",
          padding: "16px",
          color: " #FF5733 ",
        },
        iconTheme: {
          primary: " #FF5733 ",
          secondary: "#FFFAEE",
        },
      });
    },
  });
  // Populate selected cities and URLs when WriterData is loaded
  useEffect(() => {
    if (
      WriterData &&
      selectedCities.length === 0 &&
      Object.keys(socialMediaUrls).length === 0
    ) {
      const preSelectedCities = WriterData.soicalmedia
        .map((social: any) => {
          return cities.find((city) => city.name === social.name);
        })
        .filter(Boolean) as City[]; // Make sure it's typed as City[]

      setSelectedCities(preSelectedCities || []);

      const prefilledUrls = WriterData.soicalmedia.reduce(
        (acc: any, social: any) => {
          acc[social.name] = social.url;
          return acc;
        },
        {}
      );

      setSocialMediaUrls(prefilledUrls || {});
    }

    if (WriterData) {
      const prefilledFields = WriterData.soicalmedia.map((social: any) => ({
        name: social.name,
        url: social.url,
      }));
      setSocialMediaFields(prefilledFields);
    }
  }, [WriterData]);

  // Handle change in selected social media platforms
  const handleSelectionChange = (e: any) => {
    setSelectedCities(e.value);
  };

  const handleSocialMediaChange = (name: string, url: string) => {
    setSocialMediaFields((prev) => {
      const updatedFields = prev.map((item) =>
        item.name === name ? { name, url } : item
      );
      return updatedFields.some((item) => item.name === name)
        ? updatedFields
        : [...updatedFields, { name, url }];
    });
  };

  const [isNewFileSelected, setIsNewFileSelected] = useState(false);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const file = files[0];

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);

      form.setValue("ImageFile", files);
      setIsNewFileSelected(true);
    } else {
      setPreview(null);
      setIsNewFileSelected(false);

      form.setValue("ImageFile", undefined as unknown as FileList);
    }
  };
  const onSubmit = (datas: WriterFormValue) => {
    firstMutate(datas);
  };

  function setNewImageFile(file: File) {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      {dir === "ltr" ? (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="min-h-[90vh]   w-[100%] bg-[#f2f2f2] "
          >
            {
              <>
                <div className=" items-right col-span-1 flex h-[140px] flex-col ml-10">
                  <label className="text-md mb-2 block font-bold text-gray-950">
                    صورة المؤسسة
                  </label>
                  <FormField
                    control={form.control}
                    name="ImageFile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Upload Image</FormLabel>
                        <FormControl>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              field.onChange(e.target.files);
                              handleFileChange(e); // Set the preview and form data
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="col-span-3"></div>
              </>
            }
            <div className="mt-4 ml-10">
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-32 h-32 object-cover"
                />
              ) : existingImageUrl ? (
                <img
                  src={existingImageUrl}
                  alt="Existing Image"
                  className="w-32 h-32 object-cover"
                />
              ) : (
                <p>No image uploaded</p>
              )}
            </div>
            <div className="grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
              <div className=" col-span-1 h-auto translate-y-10">
                <Label text="الاسم الكامل " />
                <FormField
                  control={form.control}
                  name="Ar_fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-red-900">
                        {"الاسم الكامل "}
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="ادخل الاسم الكامل ..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div
                dir="ltr"
                className="text-end col-span-1 h-auto translate-y-10"
              >
                <Label text="المسمئ الوظيفي" />
                <FormField
                  control={form.control}
                  name="Ar_role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-red-900">
                        {"المسمئ الوظيفي"}
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="ادخل المسمئ الوظيفي" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div
                dir="ltr"
                className="text-Start col-span-1 h-auto translate-y-10"
              >
                <Label text="social media" />
                <div className="card flex justify-center items-center py-6">
                  <div className="w-full p-2 -translate-y-6 max-w-md  bg-white border border-gray-300 rounded-lg shadow-lg">
                    <MultiSelect
                      dir="rtl"
                      value={selectedCities} // Use the selected cities
                      onChange={handleSelectionChange} // Update state with full objects
                      options={cities} // Options for all available social media platforms
                      optionLabel="name" // Show the name property in the dropdown
                      placeholder="Select social media"
                      maxSelectedLabels={3}
                      className="w-full"
                      panelClassName="rounded-md bg-white px-2 shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
            {selectedCities.length > 0 && (
              <div className="grid grid-cols-5 w-[100%] px-10 items-start gap-4 text-right h-[20vh]">
                {/* Instagram Input Field */}
                {selectedCities.some((city) => city.code === "instagram") && (
                  <div className="text-start col-span-1 h-auto translate-y-10">
                    <label>Instagram</label>
                    <Input
                      placeholder="Enter Instagram URL"
                      value={
                        socialMediaFields.find(
                          (field) => field.name === "Instagram"
                        )?.url || ""
                      } // Bind the input value to the Instagram URL
                      onChange={(e) =>
                        handleSocialMediaChange("Instagram", e.target.value)
                      } // Update the state on change
                    />
                  </div>
                )}

                {/* WhatsApp Input Field */}
                {selectedCities.some((city) => city.code === "whatsapp") && (
                  <div className="text-start col-span-1 h-auto translate-y-10">
                    <label>WhatsApp</label>
                    <Input
                      placeholder="Enter WhatsApp URL"
                      value={
                        socialMediaFields.find(
                          (field) => field.name === "WhatsApp"
                        )?.url || ""
                      }
                      onChange={(e) =>
                        handleSocialMediaChange("WhatsApp", e.target.value)
                      } // Update the state on change
                    />
                  </div>
                )}

                {/* X (Twitter) Input Field */}
                {selectedCities.some((city) => city.code === "X") && (
                  <div className="text-start col-span-1 h-auto translate-y-10">
                    <label>X (Twitter)</label>
                    <Input
                      placeholder="Enter X (Twitter) URL"
                      value={
                        socialMediaFields.find((field) => field.name === "X")
                          ?.url || ""
                      }
                      onChange={(e) =>
                        handleSocialMediaChange("X", e.target.value)
                      } // Update the state on change
                    />
                  </div>
                )}

                {/* LinkedIn Input Field */}
                {selectedCities.some((city) => city.code === "linkedin") && (
                  <div className="text-start col-span-1 h-auto translate-y-10">
                    <label>LinkedIn</label>
                    <Input
                      placeholder="Enter LinkedIn URL"
                      value={
                        socialMediaFields.find(
                          (field) => field.name === "LinkedIn"
                        )?.url || ""
                      }
                      onChange={(e) =>
                        handleSocialMediaChange("LinkedIn", e.target.value)
                      } // Update the state on change
                    />
                  </div>
                )}

                {/* Facebook Input Field */}
                {selectedCities.some((city) => city.code === "facebook") && (
                  <div className="text-start col-span-1 h-auto translate-y-10">
                    <label>Facebook</label>
                    <Input
                      placeholder="Enter Facebook URL"
                      value={
                        socialMediaFields.find(
                          (field) => field.name === "Facebook"
                        )?.url || ""
                      }
                      onChange={(e) =>
                        handleSocialMediaChange("Facebook", e.target.value)
                      } // Update the state on change
                    />
                  </div>
                )}
              </div>
            )}
            <div className="grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
              <div className=" col-span-1 h-auto translate-y-10">
                <Label text="role" />
                <FormField
                  control={form.control}
                  name="En_role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-red-900">{"role"}</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter role..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className=" col-span-1 h-auto translate-y-10">
                <Label text="full name" />
                <FormField
                  control={form.control}
                  name="En_fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-red-900">
                        {"full name"}
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Enter full name..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* <div className=" col-span-1 h-auto translate-y-10">
              <Label text="instgram" />
              <FormField
                control={form.control}
                name="link"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-red-900">{"full name"}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://www.instagram.com/"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div> */}
            </div>

            {/* TODO:Textarea */}
            <div className="grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
              <div className=" col-span-3 h-auto translate-y-10">
                <Label text="عن الكتاب" />
                <FormField
                  control={form.control}
                  name="Ar_description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-red-900">
                        {"عن الكتاب"}
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          dir="rtl"
                          className="bg-white border-2 border-[#d1d5db] rounded-xl"
                          rows={5}
                          {...field}
                          placeholder="ادخل عن الكتاب..."
                        ></Textarea>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 mt-5 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
              <div className=" text-start col-span-3 h-auto translate-y-10">
                <Label text="about writer" />
                <FormField
                  control={form.control}
                  name="En_description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-red-900">
                        {"about writer"}
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          className="bg-white border-2 border-[#d1d5db] rounded-xl"
                          rows={5}
                          {...field}
                          placeholder="Enter about writer ..."
                        ></Textarea>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="w-full -translate-x-10 flex justify-end mt-20">
              <Button className="text-lg mb-10 inline-flex h-10 items-center  justify-center whitespace-nowrap rounded-lg bg-[#000] px-10 py-2 font-bold text-white ring-offset-background transition-colors hover:bg-[#201f1f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                update
              </Button>
            </div>
          </form>
        </Form>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="min-h-[90vh]   w-[100%] bg-[#f2f2f2] "
          >
            {
              <>
                <div className=" items-right col-span-1 flex h-[140px] flex-col mr-10">
                  <label className="text-md block font-bold text-gray-950">
                    صورة المؤسسة
                  </label>
                  <FormField
                    control={form.control}
                    name="ImageFile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Upload Image</FormLabel>
                        <FormControl>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              field.onChange(e.target.files);
                              handleFileChange(e); // Set the preview and form data
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="col-span-3"></div>
              </>
            }
            <div className=" mr-10 ">
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-32 h-32 object-cover"
                />
              ) : existingImageUrl ? (
                <img
                  src={existingImageUrl}
                  alt="Existing Image"
                  className="w-32 h-32 object-cover"
                />
              ) : (
                <p>No image uploaded</p>
              )}
            </div>
            <div className="grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
              <div className=" col-span-1 h-auto translate-y-10">
                <Label text="الاسم الكامل " />
                <FormField
                  control={form.control}
                  name="Ar_fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-red-900">
                        {"الاسم الكامل "}
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="ادخل الاسم الكامل ..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div
                dir="ltr"
                className="text-end col-span-1 h-auto translate-y-10"
              >
                <Label text="المسمئ الوظيفي" />
                <FormField
                  control={form.control}
                  name="Ar_role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-red-900">
                        {"المسمئ الوظيفي"}
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="ادخل المسمئ الوظيفي" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* <div dir="ltr" className="text-end col-span-1 h-auto translate-y-10">
            <Label text="وسائل التواصل " />
            <FormField
              control={form.control}
              name="en_title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-red-900">
                    {"وسائل التواصل "}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="ادخل وسائل التواصل " {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div> */}
            </div>
            <div className="grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
              <div className=" col-span-1 h-auto translate-y-10">
                <Label text="role" />
                <FormField
                  control={form.control}
                  name="En_role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-red-900">{"role"}</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter role..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className=" col-span-1 h-auto translate-y-10">
                <Label text="full name" />
                <FormField
                  control={form.control}
                  name="En_fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-red-900">
                        {"full name"}
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Enter full name..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* <div className=" col-span-1 h-auto translate-y-10">
            <Label text="instgram" />
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-red-900">{"full name"}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://www.instagram.com/"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div> */}
            </div>

            {/* TODO:Textarea */}
            <div className="grid grid-cols-3 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
              <div className=" col-span-3 h-auto translate-y-10">
                <Label text="عن الكتاب" />
                <FormField
                  control={form.control}
                  name="Ar_description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-red-900">
                        {"عن الكتاب"}
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          dir="rtl"
                          className="bg-white border-2 border-[#d1d5db] rounded-xl"
                          rows={5}
                          {...field}
                          placeholder="ادخل عن الكتاب..."
                        ></Textarea>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 mt-5 w-[100%] px-10 items-start gap-4 text-right h-[20vh]  ">
              <div className=" text-start col-span-3 h-auto translate-y-10">
                <Label text="about writer" />
                <FormField
                  control={form.control}
                  name="En_description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-red-900">
                        {"about writer"}
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          className="bg-white border-2 border-[#d1d5db] rounded-xl"
                          rows={5}
                          {...field}
                          placeholder="Enter about writer ..."
                        ></Textarea>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="w-full translate-x-10 flex justify-end mt-20">
              <Button className="text-md mb-10 inline-flex h-10 items-center  justify-center whitespace-nowrap rounded-lg bg-[#000] px-10 py-2 text-sm font-bold text-white ring-offset-background transition-colors hover:bg-[#201f1f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                تعديل
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
}
