export type Step = {
  title: string;
  body: string;
  code?: string;
};

export type Tutorial = {
  slug: string;
  title: string;
  intro: string;
  time: string;
  level: string;
  steps: Step[];
};

export const tutorials: Tutorial[] = [
  {
    slug: "deepseek-api-start",
    title: "آموزش شروع کار با API مدل DeepSeek",
    intro: "با ساخت کلید API و اولین درخواست با پایتون، از مدل DeepSeek در برنامه‌ی خودت استفاده کن.",
    time: "۴ دقیقه",
    level: "مبتدی",
    steps: [
      {
        title: "ساخت حساب و دریافت کلید",
        body: "وارد platform.deepseek.com شو، ثبت‌نام کن و در بخش API Keys یک کلید جدید بساز. کلید را جایی امن نگه دار و آن را در کدی که عمومی است قرار نده.",
      },
      {
        title: "نصب کتابخانه",
        body: "DeepSeek با کتابخانه‌ی OpenAI سازگار است، پس همان کتابخانه را نصب می‌کنیم.",
        code: "pip install openai",
      },
      {
        title: "اولین درخواست",
        body: "کلید خودت را جایگزین YOUR_API_KEY کن و فایل را اجرا کن.",
        code: `from openai import OpenAI

client = OpenAI(
    api_key="YOUR_API_KEY",
    base_url="https://api.deepseek.com",
)

response = client.chat.completions.create(
    model="deepseek-chat",
    messages=[{"role": "user", "content": "سلام، خودت را معرفی کن"}],
)

print(response.choices[0].message.content)`,
      },
      {
        title: "نکته‌ی مهم",
        body: "سهمیه‌ی رایگان و شرایط استفاده ممکن است تغییر کنند. قبل از استفاده‌ی جدی، جزئیات را در سایت رسمی بررسی کن.",
      },
    ],
  },
  {
    slug: "how-to-use-claude",
    title: "چطور از Claude استفاده کنیم؟",
    intro: "از ساخت حساب تا نوشتن اولین دستور خوب برای گرفتن پاسخ دقیق‌تر در Claude.",
    time: "۵ دقیقه",
    level: "مبتدی",
    steps: [
      {
        title: "ساخت حساب",
        body: "وارد claude.ai شو و با ایمیل یا حساب گوگل ثبت‌نام کن. نسخه‌ی رایگان بدون پرداخت در همان مرورگر قابل استفاده است.",
      },
      {
        title: "شروع اولین گفتگو",
        body: "یک گفتگوی جدید بساز و سؤالت را مستقیم بنویس. نیازی به تنظیمات خاصی نیست.",
      },
      {
        title: "نوشتن دستور خوب",
        body: "هرچه زمینه‌ی کار را واضح‌تر بگویی، پاسخ بهتری می‌گیری. سه چیز را ذکر کن: هدف، موضوع و قالب پاسخ. مثلاً: «برای یک فروشگاه کوچک، سه ایده‌ی پست اینستاگرام بنویس؛ هر ایده یک خط باشد.»",
      },
      {
        title: "محدودیت پلن رایگان",
        body: "در پلن رایگان تعداد پیام‌ها در بازه‌ی زمانی محدود است. اگر به محدودیت رسیدی، کمی صبر کن یا گفتگو را در همان نقطه ادامه بده.",
      },
    ],
  },
  {
    slug: "gemini-ai-studio",
    title: "شروع کار با Gemini در AI Studio",
    intro: "با حساب گوگل وارد AI Studio شو، مدل را انتخاب کن و کلید API رایگان بساز.",
    time: "۳ دقیقه",
    level: "مبتدی",
    steps: [
      {
        title: "ورود با حساب گوگل",
        body: "وارد aistudio.google.com شو و با حساب گوگل خودت وارد شو.",
      },
      {
        title: "آزمایش در مرورگر",
        body: "در بخش Prompt می‌توانی مستقیم با مدل گفتگو کنی. مدل‌های مختلف را از فهرست بالای صفحه انتخاب کن و نتیجه را مقایسه کن.",
      },
      {
        title: "دریافت کلید API",
        body: "از منوی Get API key یک کلید بساز. این کلید را نگه دار و در کدی که عمومی است قرار نده.",
      },
      {
        title: "نکته‌ی مهم",
        body: "محدودیت‌ها بسته به مدل و کشور متفاوت است و ممکن است تغییر کنند. برای جزئیات، صفحه‌ی قیمت‌گذاری رسمی گوگل را ببین.",
      },
    ],
  },
];
