import React from "react";
import NewsCard from "./news-card";

export default function NewsList() {
  return (
    <div className="rounded-lg border m-2  divide-y-2">
      {dataNews.map((item) => (
        <NewsCard key={item.title} {...item} />
      ))}
    </div>
  );
}

export const dataNews = [
  {
    title: "إطلاق تقنية جديدة للذكاء الاصطناعي",
    description:
      "شركة عالمية تعلن عن إطلاق تقنية جديدة تعتمد على الذكاء الاصطناعي لتحسين الخدمات.",
    imgUrl: require("../../assets/img/news_1.jpg"),
  },
  {
    title: "زيادة في أسعار النفط العالمية",
    description:
      "شهدت أسعار النفط ارتفاعاً كبيراً نتيجة لتوترات جيوسياسية في المنطقة.",
    imgUrl: require("../../assets/img/news_1.jpg"),
  },
  {
    title: "اكتشاف أدوية جديدة لعلاج الأمراض النادرة",
    description:
      "علماء يعلنون عن اكتشاف أدوية مبتكرة لعلاج الأمراض النادرة والمزمنة.",
    imgUrl: require("../../assets/img/news_1.jpg"),
  },
  {
    title: "ارتفاع كبير في مبيعات الهواتف الذكية",
    description:
      "الشركات التقنية تسجل زيادة في مبيعات الهواتف الذكية خلال الربع الأخير من العام.",
    imgUrl: require("../../assets/img/news_1.jpg"),
  },
];
