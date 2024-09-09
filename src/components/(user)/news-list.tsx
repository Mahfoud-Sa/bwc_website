import React from "react";
import NewsCard from "./news-card";

export default function NewsList() {
  return (
    <div className="rounded-lg border m-2  divide-y-2">{ dataNews.map((item) => <NewsCard key={item.title} {...item} />)}</div>
  );
}



 export const dataNews = [
    {
      title: "إطلاق تقنية جديدة للذكاء الاصطناعي",
      description: "شركة عالمية تعلن عن إطلاق تقنية جديدة تعتمد على الذكاء الاصطناعي لتحسين الخدمات.",
      imgUrl: require("../../assets/img/news_1.jpg"),
    },
    {
      title: "زيادة في أسعار النفط العالمية",
      description: "شهدت أسعار النفط ارتفاعاً كبيراً نتيجة لتوترات جيوسياسية في المنطقة.",
      imgUrl: require("../../assets/img/news_1.jpg"),
    },
    {
      title: "اكتشاف أدوية جديدة لعلاج الأمراض النادرة",
      description: "علماء يعلنون عن اكتشاف أدوية مبتكرة لعلاج الأمراض النادرة والمزمنة.",
      imgUrl: require("../../assets/img/news_1.jpg"),
    },
    {
      title: "ارتفاع كبير في مبيعات الهواتف الذكية",
      description: "الشركات التقنية تسجل زيادة في مبيعات الهواتف الذكية خلال الربع الأخير من العام.",
      imgUrl: require("../../assets/img/news_1.jpg"),
    },
    {
      title: "التحول الرقمي في التعليم",
      description: "العديد من الدول تعتمد تقنيات التحول الرقمي في أنظمة التعليم لتسهيل العملية التعليمية.",
      imgUrl: require("../../assets/img/news_1.jpg"),
    },
    {
      title: "ابتكارات جديدة في قطاع الطاقة النظيفة",
      description: "الشركات تستثمر في تقنيات الطاقة النظيفة لتحسين البيئة وتقليل الانبعاثات الكربونية.",
      imgUrl: require("../../assets/img/news_1.jpg"),
    },
    {
      title: "الرياضة الإلكترونية تجذب ملايين المتابعين",
      description: "البطولات الإلكترونية تحقق أرقاماً قياسية في عدد المشاهدات حول العالم.",
      imgUrl: require("../../assets/img/news_1.jpg"),
    },
    {
      title: "السياحة في الشرق الأوسط تشهد انتعاشاً",
      description: "العديد من الدول الشرق أوسطية تسجل زيادة كبيرة في أعداد السياح بعد الجائحة.",
      imgUrl: require("../../assets/img/news_1.jpg"),
    },
    {
      title: "الزراعة الذكية تعتمد على التكنولوجيا المتقدمة",
      description: "مزارعون يعتمدون على الذكاء الاصطناعي لتحسين المحاصيل وزيادة الإنتاجية.",
      imgUrl: require("../../assets/img/news_1.jpg"),
    },
    {
      title: "توقعات بنمو الاقتصاد العالمي",
      description: "خبراء اقتصاديون يتوقعون تحسنًا في الاقتصاد العالمي خلال السنوات القادمة.",
      imgUrl: require("../../assets/img/news_1.jpg"),
    },
  ];
  