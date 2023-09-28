import { Metadata } from "next";
import Paper from "@/components/ui/paper";

export const metadata: Metadata = {
  title: "درباره ما",
};

export default function Page() {
  return (
    <div className="h-full w-full space-y-7 pt-9">
      <div className="space-y-2 bg-primary py-5">
        <h1 className="text-center text-xl text-white md:text-4xl">
          درباره ما
        </h1>
        <div className="mx-auto h-0.5 w-2/12 bg-secondary md:w-1/12"></div>
      </div>
      <Paper className="container relative space-y-8" size="lg">
        <div className="space-y-5 text-justify">
          <p className="leading-7 text-gray-600">
            سایت بلوبری توسط جمعی از برنامه نویسان ساخته شد تا مشکلات آموزشی
            خاور میانه رو حل بکند، و برای حل این مشکل سایت بلوبری را طراحی کردند
            تا با دیزاین ساده ولی کاربردی یه کمک افراد بیاید. از نکات دیگر این
            سایت قابلیت های مختلفی است که دارد مثلا: 1- پرسیدن سوالات درسی یا
            کاری 2- جواب دادن و کمک کردن به دیگران با پاسخ دادن به سوالات آن ها
            3- و کلی قابلیت دیگر
          </p>
        </div>

        <div className="flex items-center justify-center rounded-lg bg-secondary p-4 text-white md:p-7">
          <h5>امکانات دیگر بلوبری</h5>
        </div>
        <ul className="list-disc text-gray-600 container text-sm md:text-base space-y-2 pr-3">
          <li>امکان فیلتر سوالات بر اساس معیار های مختلف</li>
          <li>امکان پاسخگویی به یک مسئله بصورت متن و عکس</li>
          <li>...</li>
        </ul>
        <p className="text-justify leading-7 text-gray-700"></p>
      </Paper>
    </div>
  );
}
