import React from "react";
import allDepertments from "../../assets/img/all-departmemts.png";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";

export default function AllDepertments() {
  const { t, i18n } = useTranslation();
  const dir = i18n.dir();
  const isMobileScreen = useMediaQuery({ query: "(max-width: 767px)" });
  const isTabletScreen = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 979px)",
  });
  const isMonitorScreen = useMediaQuery({ query: "(min-width: 980px)" });
  return (
    <>
      {isMobileScreen && (
        <>
          {dir === "ltr" ? (
            <div className=" px-3 py-8 ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* First Section */}
                <div className="h-60 w-full ">
                  <img
                    src={allDepertments} // Replace with your image path
                    alt="تعليم و تدريب"
                    className="object-cover h-full w-full "
                  />
                </div>
                <div
                  dir="ltr"
                  className="flex flex-col justify-center min-h-[20vh] py-3 shadow-md px-4"
                >
                  <div className="flex ">
                    <div className="w-3 h-10 rounded-md bg-[#CCA972] mr-2 bg-gradient-to-r from-[#A27942] "></div>
                    <h2 className="text-2xl font-bold text-primary mb-4">
                      Education and Training
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-4">
                    MBC focuses on the importance of personal data privacy and
                    protection in Digital age, doing its best to protect data
                    privacy Users of MBC while browsing or using our sites
                    Electronic and our services.
                  </p>
                  <a
                    href="#"
                    className="text-primary text-end underline hover:no-underline mt-3 font-semibold"
                  >
                    learn more
                  </a>
                </div>

                {/* Second Section */}
                <div className="h-60 w-full ">
                  <img
                    src={allDepertments} // Replace with your image path
                    alt="تعليم و تدريب"
                    className="object-cover h-full w-full "
                  />
                </div>
                <div
                  dir="ltr"
                  className="flex flex-col justify-center min-h-[20vh] py-3 shadow-md px-4"
                >
                  <div className="flex ">
                    <div className="w-3 h-10 rounded-md bg-[#CCA972] mr-2 bg-gradient-to-r from-[#A27942] "></div>
                    <h2 className="text-2xl font-bold text-primary mb-4">
                      Education and Training
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-4">
                    MBC focuses on the importance of personal data privacy and
                    protection in Digital age, doing its best to protect data
                    privacy Users of MBC while browsing or using our sites
                    Electronic and our services.
                  </p>
                  <a
                    href="#"
                    className="text-primary text-end underline hover:no-underline mt-3 font-semibold"
                  >
                    learn more
                  </a>
                </div>

                {/*  */}

                <div className="h-60 w-full ">
                  <img
                    src={allDepertments} // Replace with your image path
                    alt="تعليم و تدريب"
                    className="object-cover h-full w-full "
                  />
                </div>
                <div
                  dir="ltr"
                  className="flex flex-col justify-center min-h-[20vh] py-3 shadow-md px-4"
                >
                  <div className="flex ">
                    <div className="w-3 h-10 rounded-md bg-[#CCA972] mr-2 bg-gradient-to-r from-[#A27942] "></div>
                    <h2 className="text-2xl font-bold text-primary mb-4">
                      Education and Training
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-4">
                    MBC focuses on the importance of personal data privacy and
                    protection in Digital age, doing its best to protect data
                    privacy Users of MBC while browsing or using our sites
                    Electronic and our services.
                  </p>
                  <a
                    href="#"
                    className="text-primary text-end underline hover:no-underline mt-3 font-semibold"
                  >
                    learn more
                  </a>
                </div>

                {/*  */}

                <div className="h-60 w-full ">
                  <img
                    src={allDepertments} // Replace with your image path
                    alt="تعليم و تدريب"
                    className="object-cover h-full w-full "
                  />
                </div>
                <div
                  dir="ltr"
                  className="flex flex-col justify-center min-h-[20vh] py-3 shadow-md px-4"
                >
                  <div className="flex ">
                    <div className="w-3 h-10 rounded-md bg-[#CCA972] mr-2 bg-gradient-to-r from-[#A27942] "></div>
                    <h2 className="text-2xl font-bold text-primary mb-4">
                      Education and Training
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-4">
                    MBC focuses on the importance of personal data privacy and
                    protection in Digital age, doing its best to protect data
                    privacy Users of MBC while browsing or using our sites
                    Electronic and our services.
                  </p>
                  <a
                    href="#"
                    className="text-primary text-end underline hover:no-underline mt-3 font-semibold"
                  >
                    learn more
                  </a>
                </div>

                {/*  */}
                <div className="h-60 w-full ">
                  <img
                    src={allDepertments} // Replace with your image path
                    alt="تعليم و تدريب"
                    className="object-cover h-full w-full "
                  />
                </div>
                <div
                  dir="ltr"
                  className="flex flex-col justify-center min-h-[20vh] py-3 shadow-md px-4"
                >
                  <div className="flex ">
                    <div className="w-3 h-10 rounded-md bg-[#CCA972] mr-2 bg-gradient-to-r from-[#A27942] "></div>
                    <h2 className="text-2xl font-bold text-primary mb-4">
                      Education and Training
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-4">
                    MBC focuses on the importance of personal data privacy and
                    protection in Digital age, doing its best to protect data
                    privacy Users of MBC while browsing or using our sites
                    Electronic and our services.
                  </p>
                  <a
                    href="#"
                    className="text-primary text-end underline hover:no-underline mt-3 font-semibold"
                  >
                    learn more
                  </a>
                </div>

                {/*  */}

                <div className="h-60 w-full ">
                  <img
                    src={allDepertments} // Replace with your image path
                    alt="تعليم و تدريب"
                    className="object-cover h-full w-full "
                  />
                </div>
                <div
                  dir="ltr"
                  className="flex flex-col justify-center min-h-[20vh] py-3 shadow-md px-4"
                >
                  <div className="flex ">
                    <div className="w-3 h-10 rounded-md bg-[#CCA972] mr-2 bg-gradient-to-r from-[#A27942] "></div>
                    <h2 className="text-2xl font-bold text-primary mb-4">
                      Education and Training
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-4">
                    MBC focuses on the importance of personal data privacy and
                    protection in Digital age, doing its best to protect data
                    privacy Users of MBC while browsing or using our sites
                    Electronic and our services.
                  </p>
                  <a
                    href="#"
                    className="text-primary text-end underline hover:no-underline mt-3 font-semibold"
                  >
                    learn more
                  </a>
                </div>

                {/* Add additional sections as needed, following the same structure */}
              </div>
            </div>
          ) : (
            <div className=" px-3 py-8 ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* First Section */}
                <div className="h-60 w-full ">
                  <img
                    src={allDepertments} // Replace with your image path
                    alt="تعليم و تدريب"
                    className="object-cover h-full w-full "
                  />
                </div>
                <div className="flex flex-col justify-center min-h-[20vh] py-3 shadow-md px-4">
                  <div className="flex ">
                    <div className="w-3 h-10 rounded-md bg-[#CCA972] ml-2 bg-gradient-to-r from-[#A27942] "></div>
                    <h2 className="text-2xl font-bold text-primary mb-4">
                      تعليم و تدريب
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-4">
                    تركز ام بي سي أهمية خصوصية البيانات الشخصية وحمايتها في
                    العصر الرقمي، وتبذل قصارى جهدها لحماية خصوصية بيانات مستخدمي
                    ام بي سي أثناء التصفح أو استخدام مواقعنا الإلكترونية
                    وخدماتنا.
                  </p>
                  <a
                    href="#"
                    className="text-primary  text-end underline hover:no-underline mt-3 font-semibold"
                  >
                    اعرف المزيد
                  </a>
                </div>

                {/* Second Section */}
                <div className="h-60 w-full ">
                  <img
                    src={allDepertments} // Replace with your image path
                    alt="تعليم و تدريب"
                    className="object-cover h-full w-full "
                  />
                </div>
                <div className="flex flex-col justify-center min-h-[20vh] py-3 shadow-md px-4">
                  <div className="flex ">
                    <div className="w-3 h-10 rounded-md bg-[#CCA972] ml-2 bg-gradient-to-r from-[#A27942] "></div>
                    <h2 className="text-2xl font-bold text-primary mb-4">
                      تعليم و تدريب
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-4">
                    تركز ام بي سي أهمية خصوصية البيانات الشخصية وحمايتها في
                    العصر الرقمي، وتبذل قصارى جهدها لحماية خصوصية بيانات مستخدمي
                    ام بي سي أثناء التصفح أو استخدام مواقعنا الإلكترونية
                    وخدماتنا.
                  </p>
                  <a
                    href="#"
                    className="text-primary  text-end underline hover:no-underline mt-3 font-semibold"
                  >
                    اعرف المزيد
                  </a>
                </div>

                {/*  */}

                <div className="h-60 w-full ">
                  <img
                    src={allDepertments} // Replace with your image path
                    alt="تعليم و تدريب"
                    className="object-cover h-full w-full "
                  />
                </div>
                <div className="flex flex-col justify-center min-h-[20vh] py-3 shadow-md px-4">
                  <div className="flex ">
                    <div className="w-3 h-10 rounded-md bg-[#CCA972] ml-2 bg-gradient-to-r from-[#A27942] "></div>
                    <h2 className="text-2xl font-bold text-primary mb-4">
                      تعليم و تدريب
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-4">
                    تركز ام بي سي أهمية خصوصية البيانات الشخصية وحمايتها في
                    العصر الرقمي، وتبذل قصارى جهدها لحماية خصوصية بيانات مستخدمي
                    ام بي سي أثناء التصفح أو استخدام مواقعنا الإلكترونية
                    وخدماتنا.
                  </p>
                  <a
                    href="#"
                    className="text-primary  text-end underline hover:no-underline mt-3 font-semibold"
                  >
                    اعرف المزيد
                  </a>
                </div>

                {/*  */}

                <div className="h-60 w-full ">
                  <img
                    src={allDepertments} // Replace with your image path
                    alt="تعليم و تدريب"
                    className="object-cover h-full w-full "
                  />
                </div>
                <div className="flex flex-col justify-center min-h-[20vh] py-3 shadow-md px-4">
                  <div className="flex ">
                    <div className="w-3 h-10 rounded-md bg-[#CCA972] ml-2 bg-gradient-to-r from-[#A27942] "></div>
                    <h2 className="text-2xl font-bold text-primary mb-4">
                      تعليم و تدريب
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-4">
                    تركز ام بي سي أهمية خصوصية البيانات الشخصية وحمايتها في
                    العصر الرقمي، وتبذل قصارى جهدها لحماية خصوصية بيانات مستخدمي
                    ام بي سي أثناء التصفح أو استخدام مواقعنا الإلكترونية
                    وخدماتنا.
                  </p>
                  <a
                    href="#"
                    className="text-primary  text-end underline hover:no-underline mt-3 font-semibold"
                  >
                    اعرف المزيد
                  </a>
                </div>

                {/*  */}
                <div className="h-60 w-full ">
                  <img
                    src={allDepertments} // Replace with your image path
                    alt="تعليم و تدريب"
                    className="object-cover h-full w-full "
                  />
                </div>
                <div className="flex flex-col justify-center min-h-[20vh] py-3 shadow-md px-4">
                  <div className="flex ">
                    <div className="w-3 h-10 rounded-md bg-[#CCA972] ml-2 bg-gradient-to-r from-[#A27942] "></div>
                    <h2 className="text-2xl font-bold text-primary mb-4">
                      تعليم و تدريب
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-4">
                    تركز ام بي سي أهمية خصوصية البيانات الشخصية وحمايتها في
                    العصر الرقمي، وتبذل قصارى جهدها لحماية خصوصية بيانات مستخدمي
                    ام بي سي أثناء التصفح أو استخدام مواقعنا الإلكترونية
                    وخدماتنا.
                  </p>
                  <a
                    href="#"
                    className="text-primary  text-end underline hover:no-underline mt-3 font-semibold"
                  >
                    اعرف المزيد
                  </a>
                </div>

                {/*  */}

                <div className="h-60 w-full ">
                  <img
                    src={allDepertments} // Replace with your image path
                    alt="تعليم و تدريب"
                    className="object-cover h-full w-full "
                  />
                </div>
                <div className="flex flex-col justify-center min-h-[20vh] py-3 shadow-md px-4">
                  <div className="flex ">
                    <div className="w-3 h-10 rounded-md bg-[#CCA972] ml-2 bg-gradient-to-r from-[#A27942] "></div>
                    <h2 className="text-2xl font-bold text-primary mb-4">
                      تعليم و تدريب
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-4">
                    تركز ام بي سي أهمية خصوصية البيانات الشخصية وحمايتها في
                    العصر الرقمي، وتبذل قصارى جهدها لحماية خصوصية بيانات مستخدمي
                    ام بي سي أثناء التصفح أو استخدام مواقعنا الإلكترونية
                    وخدماتنا.
                  </p>
                  <a
                    href="#"
                    className="text-primary  text-end underline hover:no-underline mt-3 font-semibold"
                  >
                    اعرف المزيد
                  </a>
                </div>

                {/* Add additional sections as needed, following the same structure */}
              </div>
            </div>
          )}
        </>
      )}

      {isTabletScreen && (
        <>
          {dir === "ltr" ? (
            <div className="   mx-auto py-8 px-4 md:px-7">
              {/*  */}
              <div className="flex relative mb-6">
                {/* First Section (Image) */}

                <div dir="ltr" className="w-[50%] relative z-10 ">
                  <div className="flex w-[100%] right-20 top-16 bg-white absolute mx-auto flex-col px-10 justify-center shadow-md h-60">
                    <div className="flex ">
                      <div className="w-3 h-10 rounded-md bg-[#CCA972] mr-2 bg-gradient-to-r from-[#A27942] "></div>
                      <h2 className="text-2xl font-bold text-primary mb-4">
                        Education and Training
                      </h2>
                    </div>
                    <p className="text-gray-600 mb-4">
                      MBC focuses on the importance of personal data privacy and
                      protection in Digital age, doing its best to protect data
                      privacy Users of MBC while browsing or using our sites
                      Electronic and our services.
                    </p>
                    <a
                      href="#"
                      className=" underline hover:no-underline text-end text-primary font-semibold"
                    >
                      learn more
                    </a>
                  </div>
                </div>

                <div className="h-96 w-[50%] relative -z-20">
                  <img
                    src={allDepertments} // Replace with your image path
                    alt="تعليم و تدريب"
                    className="object-cover h-full w-full"
                  />
                </div>

                {/* Second Section (Text Content) */}

                {/* Add additional sections as needed */}
              </div>

              <div className="flex relative mb-6">
                {/* First Section (Image) */}

                <div dir="ltr" className="w-[50%] relative z-10 ">
                  <div className="flex w-[100%] right-20 top-16 bg-white absolute mx-auto flex-col px-10 justify-center shadow-md h-60">
                    <div className="flex ">
                      <div className="w-3 h-10 rounded-md bg-[#CCA972] mr-2 bg-gradient-to-r from-[#A27942] "></div>
                      <h2 className="text-2xl font-bold text-primary mb-4">
                        Education and Training
                      </h2>
                    </div>
                    <p className="text-gray-600 mb-4">
                      MBC focuses on the importance of personal data privacy and
                      protection in Digital age, doing its best to protect data
                      privacy Users of MBC while browsing or using our sites
                      Electronic and our services.
                    </p>
                    <a
                      href="#"
                      className=" underline hover:no-underline text-end text-primary font-semibold"
                    >
                      learn more
                    </a>
                  </div>
                </div>

                <div className="h-96 w-[50%] relative -z-20">
                  <img
                    src={allDepertments} // Replace with your image path
                    alt="تعليم و تدريب"
                    className="object-cover h-full w-full"
                  />
                </div>

                {/* Second Section (Text Content) */}

                {/* Add additional sections as needed */}
              </div>
              <div className="flex relative mb-6">
                {/* First Section (Image) */}

                <div dir="ltr" className="w-[50%] relative z-10 ">
                  <div className="flex w-[100%] right-20 top-16 bg-white absolute mx-auto flex-col px-10 justify-center shadow-md h-60">
                    <div className="flex ">
                      <div className="w-3 h-10 rounded-md bg-[#CCA972] mr-2 bg-gradient-to-r from-[#A27942] "></div>
                      <h2 className="text-2xl font-bold text-primary mb-4">
                        Education and Training
                      </h2>
                    </div>
                    <p className="text-gray-600 mb-4">
                      MBC focuses on the importance of personal data privacy and
                      protection in Digital age, doing its best to protect data
                      privacy Users of MBC while browsing or using our sites
                      Electronic and our services.
                    </p>
                    <a
                      href="#"
                      className=" underline hover:no-underline text-end text-primary font-semibold"
                    >
                      learn more
                    </a>
                  </div>
                </div>

                <div className="h-96 w-[50%] relative -z-20">
                  <img
                    src={allDepertments} // Replace with your image path
                    alt="تعليم و تدريب"
                    className="object-cover h-full w-full"
                  />
                </div>

                {/* Second Section (Text Content) */}

                {/* Add additional sections as needed */}
              </div>
              <div className="flex relative mb-6">
                {/* First Section (Image) */}

                <div dir="ltr" className="w-[50%] relative z-10 ">
                  <div className="flex w-[100%] right-20 top-16 bg-white absolute mx-auto flex-col px-10 justify-center shadow-md h-60">
                    <div className="flex ">
                      <div className="w-3 h-10 rounded-md bg-[#CCA972] mr-2 bg-gradient-to-r from-[#A27942] "></div>
                      <h2 className="text-2xl font-bold text-primary mb-4">
                        Education and Training
                      </h2>
                    </div>
                    <p className="text-gray-600 mb-4">
                      MBC focuses on the importance of personal data privacy and
                      protection in Digital age, doing its best to protect data
                      privacy Users of MBC while browsing or using our sites
                      Electronic and our services.
                    </p>
                    <a
                      href="#"
                      className=" underline hover:no-underline text-end text-primary font-semibold"
                    >
                      learn more
                    </a>
                  </div>
                </div>

                <div className="h-96 w-[50%] relative -z-20">
                  <img
                    src={allDepertments} // Replace with your image path
                    alt="تعليم و تدريب"
                    className="object-cover h-full w-full"
                  />
                </div>

                {/* Second Section (Text Content) */}

                {/* Add additional sections as needed */}
              </div>
              <div className="flex relative mb-6">
                {/* First Section (Image) */}

                <div dir="ltr" className="w-[50%] relative z-10 ">
                  <div className="flex w-[100%] right-20 top-16 bg-white absolute mx-auto flex-col px-10 justify-center shadow-md h-60">
                    <div className="flex ">
                      <div className="w-3 h-10 rounded-md bg-[#CCA972] mr-2 bg-gradient-to-r from-[#A27942] "></div>
                      <h2 className="text-2xl font-bold text-primary mb-4">
                        Education and Training
                      </h2>
                    </div>
                    <p className="text-gray-600 mb-4">
                      MBC focuses on the importance of personal data privacy and
                      protection in Digital age, doing its best to protect data
                      privacy Users of MBC while browsing or using our sites
                      Electronic and our services.
                    </p>
                    <a
                      href="#"
                      className=" underline hover:no-underline text-end text-primary font-semibold"
                    >
                      learn more
                    </a>
                  </div>
                </div>

                <div className="h-96 w-[50%] relative -z-20">
                  <img
                    src={allDepertments} // Replace with your image path
                    alt="تعليم و تدريب"
                    className="object-cover h-full w-full"
                  />
                </div>

                {/* Second Section (Text Content) */}

                {/* Add additional sections as needed */}
              </div>
            </div>
          ) : (
            <div className="   mx-auto py-8 px-4 md:px-7">
              {/*  */}
              <div className="flex relative mb-6">
                {/* First Section (Image) */}
                <div className="h-96 w-[50%] relative -z-20">
                  <img
                    src={allDepertments} // Replace with your image path
                    alt="تعليم و تدريب"
                    className="object-cover h-full w-full"
                  />
                </div>

                {/* Second Section (Text Content) */}
                <div className="w-[50%] relative z-10 ">
                  <div className="flex w-[100%] left-20 top-16 bg-white absolute mx-auto flex-col px-10 justify-center shadow-md h-60">
                    <div className="flex ">
                      <div className="w-3 h-10 rounded-md bg-[#CCA972] ml-2 bg-gradient-to-r from-[#A27942] "></div>
                      <h2 className="text-2xl font-bold text-primary mb-4">
                        تعليم و تدريب
                      </h2>
                    </div>
                    <p className="text-gray-600 mb-4">
                      تركز ام بي سي أهمية خصوصية البيانات الشخصية وحمايتها في
                      العصر الرقمي، وتبذل قصارى جهدها لحماية خصوصية بيانات
                      مستخدمي ام بي سي أثناء التصفح أو استخدام مواقعنا
                      الإلكترونية وخدماتنا.
                    </p>
                    <a
                      href="#"
                      className=" underline hover:no-underline text-end text-primary font-semibold"
                    >
                      اعرف المزيد
                    </a>
                  </div>
                </div>

                {/* Add additional sections as needed */}
              </div>

              <div className="flex relative mb-6">
                {/* First Section (Image) */}
                <div className="h-96 w-[50%] relative -z-20">
                  <img
                    src={allDepertments} // Replace with your image path
                    alt="تعليم و تدريب"
                    className="object-cover h-full w-full"
                  />
                </div>

                {/* Second Section (Text Content) */}
                <div className="w-[50%] relative z-10 ">
                  <div className="flex w-[100%] left-20 top-16 bg-white absolute mx-auto flex-col px-10 justify-center shadow-md h-60">
                    <div className="flex ">
                      <div className="w-3 h-10 rounded-md bg-[#CCA972] ml-2 bg-gradient-to-r from-[#A27942] "></div>
                      <h2 className="text-2xl font-bold text-primary mb-4">
                        تعليم و تدريب
                      </h2>
                    </div>
                    <p className="text-gray-600 mb-4">
                      تركز ام بي سي أهمية خصوصية البيانات الشخصية وحمايتها في
                      العصر الرقمي، وتبذل قصارى جهدها لحماية خصوصية بيانات
                      مستخدمي ام بي سي أثناء التصفح أو استخدام مواقعنا
                      الإلكترونية وخدماتنا.
                    </p>
                    <a
                      href="#"
                      className=" underline hover:no-underline text-end text-primary font-semibold"
                    >
                      اعرف المزيد
                    </a>
                  </div>
                </div>

                {/* Add additional sections as needed */}
              </div>

              <div className="flex relative mb-6">
                {/* First Section (Image) */}
                <div className="h-96 w-[50%] relative -z-20">
                  <img
                    src={allDepertments} // Replace with your image path
                    alt="تعليم و تدريب"
                    className="object-cover h-full w-full"
                  />
                </div>

                {/* Second Section (Text Content) */}
                <div className="w-[50%] relative z-10 ">
                  <div className="flex w-[100%] left-20 top-16 bg-white absolute mx-auto flex-col px-10 justify-center shadow-md h-60">
                    <div className="flex ">
                      <div className="w-3 h-10 rounded-md bg-[#CCA972] ml-2 bg-gradient-to-r from-[#A27942] "></div>
                      <h2 className="text-2xl font-bold text-primary mb-4">
                        تعليم و تدريب
                      </h2>
                    </div>
                    <p className="text-gray-600 mb-4">
                      تركز ام بي سي أهمية خصوصية البيانات الشخصية وحمايتها في
                      العصر الرقمي، وتبذل قصارى جهدها لحماية خصوصية بيانات
                      مستخدمي ام بي سي أثناء التصفح أو استخدام مواقعنا
                      الإلكترونية وخدماتنا.
                    </p>
                    <a
                      href="#"
                      className=" underline hover:no-underline text-end text-primary font-semibold"
                    >
                      اعرف المزيد
                    </a>
                  </div>
                </div>

                {/* Add additional sections as needed */}
              </div>

              <div className="flex relative mb-6">
                {/* First Section (Image) */}
                <div className="h-96 w-[50%] relative -z-20">
                  <img
                    src={allDepertments} // Replace with your image path
                    alt="تعليم و تدريب"
                    className="object-cover h-full w-full"
                  />
                </div>

                {/* Second Section (Text Content) */}
                <div className="w-[50%] relative z-10 ">
                  <div className="flex w-[100%] left-20 top-16 bg-white absolute mx-auto flex-col px-10 justify-center shadow-md h-60">
                    <div className="flex ">
                      <div className="w-3 h-10 rounded-md bg-[#CCA972] ml-2 bg-gradient-to-r from-[#A27942] "></div>
                      <h2 className="text-2xl font-bold text-primary mb-4">
                        تعليم و تدريب
                      </h2>
                    </div>
                    <p className="text-gray-600 mb-4">
                      تركز ام بي سي أهمية خصوصية البيانات الشخصية وحمايتها في
                      العصر الرقمي، وتبذل قصارى جهدها لحماية خصوصية بيانات
                      مستخدمي ام بي سي أثناء التصفح أو استخدام مواقعنا
                      الإلكترونية وخدماتنا.
                    </p>
                    <a
                      href="#"
                      className=" underline hover:no-underline text-end text-primary font-semibold"
                    >
                      اعرف المزيد
                    </a>
                  </div>
                </div>

                {/* Add additional sections as needed */}
              </div>

              <div className="flex relative mb-6">
                {/* First Section (Image) */}
                <div className="h-96 w-[50%] relative -z-20">
                  <img
                    src={allDepertments} // Replace with your image path
                    alt="تعليم و تدريب"
                    className="object-cover h-full w-full"
                  />
                </div>

                {/* Second Section (Text Content) */}
                <div className="w-[50%] relative z-10 ">
                  <div className="flex w-[100%] left-20 top-16 bg-white absolute mx-auto flex-col px-10 justify-center shadow-md h-60">
                    <div className="flex ">
                      <div className="w-3 h-10 rounded-md bg-[#CCA972] ml-2 bg-gradient-to-r from-[#A27942] "></div>
                      <h2 className="text-2xl font-bold text-primary mb-4">
                        تعليم و تدريب
                      </h2>
                    </div>
                    <p className="text-gray-600 mb-4">
                      تركز ام بي سي أهمية خصوصية البيانات الشخصية وحمايتها في
                      العصر الرقمي، وتبذل قصارى جهدها لحماية خصوصية بيانات
                      مستخدمي ام بي سي أثناء التصفح أو استخدام مواقعنا
                      الإلكترونية وخدماتنا.
                    </p>
                    <a
                      href="#"
                      className=" underline hover:no-underline text-end text-primary font-semibold"
                    >
                      اعرف المزيد
                    </a>
                  </div>
                </div>

                {/* Add additional sections as needed */}
              </div>
            </div>
          )}
        </>
      )}

      {isMonitorScreen && (
        <>
          {dir === "ltr" ? (
            <div className="   mx-auto py-8 px-4 md:px-7">
              {/*  */}
              <div className="flex relative mb-6">
                {/* First Section (Image) */}

                <div dir="ltr" className="w-[50%] relative z-10 ">
                  <div className="flex w-[100%] right-20 top-16 bg-white absolute mx-auto flex-col px-10 justify-center shadow-md h-60">
                    <div className="flex ">
                      <div className="w-3 h-10 rounded-md bg-[#CCA972] mr-2 bg-gradient-to-r from-[#A27942] "></div>
                      <h2 className="text-2xl font-bold text-primary mb-4">
                        Education and Training
                      </h2>
                    </div>
                    <p className="text-gray-600 mb-4">
                      MBC focuses on the importance of personal data privacy and
                      protection in Digital age, doing its best to protect data
                      privacy Users of MBC while browsing or using our sites
                      Electronic and our services.
                    </p>
                    <a
                      href="#"
                      className=" underline hover:no-underline text-end text-primary font-semibold"
                    >
                      learn more
                    </a>
                  </div>
                </div>

                <div className="h-96 w-[50%] relative -z-20">
                  <img
                    src={allDepertments} // Replace with your image path
                    alt="تعليم و تدريب"
                    className="object-cover h-full w-full"
                  />
                </div>

                {/* Second Section (Text Content) */}

                {/* Add additional sections as needed */}
              </div>

              <div className="flex relative mb-6">
                {/* First Section (Image) */}

                <div dir="ltr" className="w-[50%] relative z-10 ">
                  <div className="flex w-[100%] right-20 top-16 bg-white absolute mx-auto flex-col px-10 justify-center shadow-md h-60">
                    <div className="flex ">
                      <div className="w-3 h-10 rounded-md bg-[#CCA972] mr-2 bg-gradient-to-r from-[#A27942] "></div>
                      <h2 className="text-2xl font-bold text-primary mb-4">
                        Education and Training
                      </h2>
                    </div>
                    <p className="text-gray-600 mb-4">
                      MBC focuses on the importance of personal data privacy and
                      protection in Digital age, doing its best to protect data
                      privacy Users of MBC while browsing or using our sites
                      Electronic and our services.
                    </p>
                    <a
                      href="#"
                      className=" underline hover:no-underline text-end text-primary font-semibold"
                    >
                      learn more
                    </a>
                  </div>
                </div>

                <div className="h-96 w-[50%] relative -z-20">
                  <img
                    src={allDepertments} // Replace with your image path
                    alt="تعليم و تدريب"
                    className="object-cover h-full w-full"
                  />
                </div>

                {/* Second Section (Text Content) */}

                {/* Add additional sections as needed */}
              </div>
              <div className="flex relative mb-6">
                {/* First Section (Image) */}

                <div dir="ltr" className="w-[50%] relative z-10 ">
                  <div className="flex w-[100%] right-20 top-16 bg-white absolute mx-auto flex-col px-10 justify-center shadow-md h-60">
                    <div className="flex ">
                      <div className="w-3 h-10 rounded-md bg-[#CCA972] mr-2 bg-gradient-to-r from-[#A27942] "></div>
                      <h2 className="text-2xl font-bold text-primary mb-4">
                        Education and Training
                      </h2>
                    </div>
                    <p className="text-gray-600 mb-4">
                      MBC focuses on the importance of personal data privacy and
                      protection in Digital age, doing its best to protect data
                      privacy Users of MBC while browsing or using our sites
                      Electronic and our services.
                    </p>
                    <a
                      href="#"
                      className=" underline hover:no-underline text-end text-primary font-semibold"
                    >
                      learn more
                    </a>
                  </div>
                </div>

                <div className="h-96 w-[50%] relative -z-20">
                  <img
                    src={allDepertments} // Replace with your image path
                    alt="تعليم و تدريب"
                    className="object-cover h-full w-full"
                  />
                </div>

                {/* Second Section (Text Content) */}

                {/* Add additional sections as needed */}
              </div>
              <div className="flex relative mb-6">
                {/* First Section (Image) */}

                <div dir="ltr" className="w-[50%] relative z-10 ">
                  <div className="flex w-[100%] right-20 top-16 bg-white absolute mx-auto flex-col px-10 justify-center shadow-md h-60">
                    <div className="flex ">
                      <div className="w-3 h-10 rounded-md bg-[#CCA972] mr-2 bg-gradient-to-r from-[#A27942] "></div>
                      <h2 className="text-2xl font-bold text-primary mb-4">
                        Education and Training
                      </h2>
                    </div>
                    <p className="text-gray-600 mb-4">
                      MBC focuses on the importance of personal data privacy and
                      protection in Digital age, doing its best to protect data
                      privacy Users of MBC while browsing or using our sites
                      Electronic and our services.
                    </p>
                    <a
                      href="#"
                      className=" underline hover:no-underline text-end text-primary font-semibold"
                    >
                      learn more
                    </a>
                  </div>
                </div>

                <div className="h-96 w-[50%] relative -z-20">
                  <img
                    src={allDepertments} // Replace with your image path
                    alt="تعليم و تدريب"
                    className="object-cover h-full w-full"
                  />
                </div>

                {/* Second Section (Text Content) */}

                {/* Add additional sections as needed */}
              </div>
              <div className="flex relative mb-6">
                {/* First Section (Image) */}

                <div dir="ltr" className="w-[50%] relative z-10 ">
                  <div className="flex w-[100%] right-20 top-16 bg-white absolute mx-auto flex-col px-10 justify-center shadow-md h-60">
                    <div className="flex ">
                      <div className="w-3 h-10 rounded-md bg-[#CCA972] mr-2 bg-gradient-to-r from-[#A27942] "></div>
                      <h2 className="text-2xl font-bold text-primary mb-4">
                        Education and Training
                      </h2>
                    </div>
                    <p className="text-gray-600 mb-4">
                      MBC focuses on the importance of personal data privacy and
                      protection in Digital age, doing its best to protect data
                      privacy Users of MBC while browsing or using our sites
                      Electronic and our services.
                    </p>
                    <a
                      href="#"
                      className=" underline hover:no-underline text-end text-primary font-semibold"
                    >
                      learn more
                    </a>
                  </div>
                </div>

                <div className="h-96 w-[50%] relative -z-20">
                  <img
                    src={allDepertments} // Replace with your image path
                    alt="تعليم و تدريب"
                    className="object-cover h-full w-full"
                  />
                </div>

                {/* Second Section (Text Content) */}

                {/* Add additional sections as needed */}
              </div>
            </div>
          ) : (
            <div className="   mx-auto py-8 px-4 md:px-7">
              {/*  */}
              <div className="flex relative mb-6">
                {/* First Section (Image) */}
                <div className="h-96 w-[50%] relative -z-20">
                  <img
                    src={allDepertments} // Replace with your image path
                    alt="تعليم و تدريب"
                    className="object-cover h-full w-full"
                  />
                </div>

                {/* Second Section (Text Content) */}
                <div className="w-[50%] relative z-10 ">
                  <div className="flex w-[100%] left-20 top-16 bg-white absolute mx-auto flex-col px-10 justify-center shadow-md h-60">
                    <div className="flex ">
                      <div className="w-3 h-10 rounded-md bg-[#CCA972] ml-2 bg-gradient-to-r from-[#A27942] "></div>
                      <h2 className="text-2xl font-bold text-primary mb-4">
                        تعليم و تدريب
                      </h2>
                    </div>
                    <p className="text-gray-600 mb-4">
                      تركز ام بي سي أهمية خصوصية البيانات الشخصية وحمايتها في
                      العصر الرقمي، وتبذل قصارى جهدها لحماية خصوصية بيانات
                      مستخدمي ام بي سي أثناء التصفح أو استخدام مواقعنا
                      الإلكترونية وخدماتنا.
                    </p>
                    <a
                      href="#"
                      className=" underline hover:no-underline text-end text-primary font-semibold"
                    >
                      اعرف المزيد
                    </a>
                  </div>
                </div>

                {/* Add additional sections as needed */}
              </div>

              <div className="flex relative mb-6">
                {/* First Section (Image) */}
                <div className="h-96 w-[50%] relative -z-20">
                  <img
                    src={allDepertments} // Replace with your image path
                    alt="تعليم و تدريب"
                    className="object-cover h-full w-full"
                  />
                </div>

                {/* Second Section (Text Content) */}
                <div className="w-[50%] relative z-10 ">
                  <div className="flex w-[100%] left-20 top-16 bg-white absolute mx-auto flex-col px-10 justify-center shadow-md h-60">
                    <div className="flex ">
                      <div className="w-3 h-10 rounded-md bg-[#CCA972] ml-2 bg-gradient-to-r from-[#A27942] "></div>
                      <h2 className="text-2xl font-bold text-primary mb-4">
                        تعليم و تدريب
                      </h2>
                    </div>
                    <p className="text-gray-600 mb-4">
                      تركز ام بي سي أهمية خصوصية البيانات الشخصية وحمايتها في
                      العصر الرقمي، وتبذل قصارى جهدها لحماية خصوصية بيانات
                      مستخدمي ام بي سي أثناء التصفح أو استخدام مواقعنا
                      الإلكترونية وخدماتنا.
                    </p>
                    <a
                      href="#"
                      className=" underline hover:no-underline text-end text-primary font-semibold"
                    >
                      اعرف المزيد
                    </a>
                  </div>
                </div>

                {/* Add additional sections as needed */}
              </div>

              <div className="flex relative mb-6">
                {/* First Section (Image) */}
                <div className="h-96 w-[50%] relative -z-20">
                  <img
                    src={allDepertments} // Replace with your image path
                    alt="تعليم و تدريب"
                    className="object-cover h-full w-full"
                  />
                </div>

                {/* Second Section (Text Content) */}
                <div className="w-[50%] relative z-10 ">
                  <div className="flex w-[100%] left-20 top-16 bg-white absolute mx-auto flex-col px-10 justify-center shadow-md h-60">
                    <div className="flex ">
                      <div className="w-3 h-10 rounded-md bg-[#CCA972] ml-2 bg-gradient-to-r from-[#A27942] "></div>
                      <h2 className="text-2xl font-bold text-primary mb-4">
                        تعليم و تدريب
                      </h2>
                    </div>
                    <p className="text-gray-600 mb-4">
                      تركز ام بي سي أهمية خصوصية البيانات الشخصية وحمايتها في
                      العصر الرقمي، وتبذل قصارى جهدها لحماية خصوصية بيانات
                      مستخدمي ام بي سي أثناء التصفح أو استخدام مواقعنا
                      الإلكترونية وخدماتنا.
                    </p>
                    <a
                      href="#"
                      className=" underline hover:no-underline text-end text-primary font-semibold"
                    >
                      اعرف المزيد
                    </a>
                  </div>
                </div>

                {/* Add additional sections as needed */}
              </div>

              <div className="flex relative mb-6">
                {/* First Section (Image) */}
                <div className="h-96 w-[50%] relative -z-20">
                  <img
                    src={allDepertments} // Replace with your image path
                    alt="تعليم و تدريب"
                    className="object-cover h-full w-full"
                  />
                </div>

                {/* Second Section (Text Content) */}
                <div className="w-[50%] relative z-10 ">
                  <div className="flex w-[100%] left-20 top-16 bg-white absolute mx-auto flex-col px-10 justify-center shadow-md h-60">
                    <div className="flex ">
                      <div className="w-3 h-10 rounded-md bg-[#CCA972] ml-2 bg-gradient-to-r from-[#A27942] "></div>
                      <h2 className="text-2xl font-bold text-primary mb-4">
                        تعليم و تدريب
                      </h2>
                    </div>
                    <p className="text-gray-600 mb-4">
                      تركز ام بي سي أهمية خصوصية البيانات الشخصية وحمايتها في
                      العصر الرقمي، وتبذل قصارى جهدها لحماية خصوصية بيانات
                      مستخدمي ام بي سي أثناء التصفح أو استخدام مواقعنا
                      الإلكترونية وخدماتنا.
                    </p>
                    <a
                      href="#"
                      className=" underline hover:no-underline text-end text-primary font-semibold"
                    >
                      اعرف المزيد
                    </a>
                  </div>
                </div>

                {/* Add additional sections as needed */}
              </div>

              <div className="flex relative mb-6">
                {/* First Section (Image) */}
                <div className="h-96 w-[50%] relative -z-20">
                  <img
                    src={allDepertments} // Replace with your image path
                    alt="تعليم و تدريب"
                    className="object-cover h-full w-full"
                  />
                </div>

                {/* Second Section (Text Content) */}
                <div className="w-[50%] relative z-10 ">
                  <div className="flex w-[100%] left-20 top-16 bg-white absolute mx-auto flex-col px-10 justify-center shadow-md h-60">
                    <div className="flex ">
                      <div className="w-3 h-10 rounded-md bg-[#CCA972] ml-2 bg-gradient-to-r from-[#A27942] "></div>
                      <h2 className="text-2xl font-bold text-primary mb-4">
                        تعليم و تدريب
                      </h2>
                    </div>
                    <p className="text-gray-600 mb-4">
                      تركز ام بي سي أهمية خصوصية البيانات الشخصية وحمايتها في
                      العصر الرقمي، وتبذل قصارى جهدها لحماية خصوصية بيانات
                      مستخدمي ام بي سي أثناء التصفح أو استخدام مواقعنا
                      الإلكترونية وخدماتنا.
                    </p>
                    <a
                      href="#"
                      className=" underline hover:no-underline text-end text-primary font-semibold"
                    >
                      اعرف المزيد
                    </a>
                  </div>
                </div>

                {/* Add additional sections as needed */}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
