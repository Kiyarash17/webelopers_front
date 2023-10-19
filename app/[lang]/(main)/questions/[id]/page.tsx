import Button from "@/components/ui/button";
import Paper from "@/components/ui/paper";

export default function BeforeExam() {
  return (
    <div className="md:p-8">
      <Paper className=" md:!p-10 space-y-8">
        <h2 className="text-2xl">چگونه یک پروژه ریکت بسازیم؟</h2>
        <div className="w-full h-0.5 bg-primary"></div>
        <div className="space-y-8">
          <p className="leading-8 text-sm md:text-base">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجا.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <Paper>
              <p className="text-right text-gray-500">تاریخ ددلاین</p>
              <p className="text-left text-gray-700">1402/07/26</p>
            </Paper>
            <Paper>
              <p className="text-right text-gray-500">تگ</p>
              <p className="text-left text-gray-700">لورم</p>
            </Paper>
            <Paper>
              <p className="text-right text-gray-500">نوع سوال</p>
              <p className="text-left text-gray-700">آموزشی</p>
            </Paper>
            <Paper className="sm:col-span-2  md:col-span-4">
              <p className="text-center text-gray-500">
                زمان باقی مانده تا اتمام ددلاین
              </p>
              <p className="text-primary text-center font-bold text-xl">
                2 روز
              </p>
            </Paper>
          </div>
          <div className="flex justify-center items-center gap-5">
            <Button className="text-primary border-2 border-primary !rounded-3xl !px-4 md:!px-8">
              مشاهده جزئیات سوال
            </Button>
            <Button color="primary" className="!rounded-3xl !px-8 md:!px-16">
              پاسخ به سوال
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  );
}
