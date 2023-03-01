import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import helenaPic from "../public/helena.jpeg"
import logoPic from "../public/logo.svg"


export default function Home() {
  const faqs = [
    {
      question: 'מה זה טיפול במוזיקה?',
      answer:
        'שילוב של 3 דברים: פסיכולוגיה מוזיקה ורפואה. אני צריכה לדעת מה המצב הפיזי, מה המצב הנפשי ואיזה מוזיקה אני יכולה להתאים למצב שלו',
    },
    {
      question: 'האם צריך לדעת לנגן בכלים מוזיקליים כשהולכים לטיפול במוזיקה?',
      answer:
        'לא, אין צורך בכלל! אנחנו עוסקים בשירה, נגינה, תיפוף, אילתור והאזנה למוזיקה',
    },
    {
      question: 'האם הטיפול במוזיקה עוזר לילדים בספקטרום האוטיסטי?',
      answer:
        'התשובה היא כן. מאחר והבעיה המרכזית של ילדים/אנשים על הספקטרום האוטיסטי היא בעיית תקשורת. דרך המוזיקה אנחנו לומדים בצורה נעימה ויעילה לתקשר, לדבר בלי מילים רק בעזרת מוזיקה ובונים תקשורת יעילה.',
    },
    {
      question: 'כמה זמן נמשך טיפול במוזיקה?',
      answer:
        'זה מאוד תלוי בצרכים של המטופל, מה המטרות שלנו ובאילו כלים נשתמש כדי להשיג את המטרות האלו. הטיפול נע בין כמה חודשים-שנה.',
    },
    {
      question: 'למה טיפול במוזיקה מתאים לילדים בספקטרום האוטיסטי?',
      answer:
        'מחקרים רבים מראים שהבעיה המרכזית אצל ילדים על הספקטרום זה זיהוי רגשות והתאמתם לסביבה. המחקרים מראים כי ילדים על הספקטרום יודעים לזהות רגשות באמצעות מוזיקה. ככה אנחנו מלמדים דרך מוזיקה לזהות ולבטא רגשות.',
    },
  ]
  return (
    <>
      <Head>
        <title>ד&quot;ר הלנה בוגופולסקי - מטפלת במוסיקה לילדים על הספקטרום האוטיסטי בירושלים</title>
        <meta name="description" content='ד"ר הלנה בוגופולסקי, מומחית לפסיכותרפיה בעזרת מוזיקה בירושלים, מסייעת לילדים אוטיסטים, ילדים בעלי פחדים וחרדות, ילדים עם קשיים חברתיים, וילדים עם ביטחון עצמי ירוד בעזרת טיפול במוזיקה בקלינקה פרטית בירושלים' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="qFNG9PsL8xyUKuBVQAsvi_VLyU5D-BptbbdrvzyPFVM" />
      </Head>
      <header className="bg-white mx-auto pb-10">
        <nav className="mx-auto flex flex-col sm:flex-row max-w-7xl items-center justify-between pt-6 lg:pt-8" aria-label="Global">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image src={logoPic} alt="דר הלנה בוגופולסקי - טיפול במוזיקה לילדים על הספקטרום האוטיסטי בירושלים" height={75} />
          </Link>
          <div className="flex flex-1 justify-end gap-x-5">
            <a href="tel:0543171796" className="font-semibold leading-6 py-3   text-gray-900">
              054-3171796 <span aria-hidden="true">&larr;</span>
            </a>
          </div>
        </nav>
      </header>
      <main className="bg-white pt-6 pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto flex gap-16 flex-col-reverse sm:flex-row">
            <div className="basis-1/2">
              <div className="relative overflow-hidden rounded-3xl bg-gray-900 pb-9 pt-64 lg:pt-96 shadow-2xl px-12">
                <Image src={helenaPic} className="absolute inset-0 h-full w-full object-cover" alt="טיפול במוזיקה לילדים על הספקטרום האוטיסטי בירושלים" height={870} />
                <div className="absolute inset-0 bg-gray-500 mix-blend-multiply" />

                <figure className="relative isolate">
                  <blockquote className="mt-6 text-lg font-semibold leading-8 text-white">
                    <p>
                      “מנסיוני הרב של יותר מעשרים שנה בעבודה עם ילדים על הספקטרום האוטיסטי אני רואה את היעילות הרבה של הטיפול במוסיקה לילדים אלו.”
                    </p>
                  </blockquote>
                </figure>
              </div>
            </div>
            <div className="text-base leading-7 text-gray-700 basis-1/2">
              <p className="text-base font-semibold leading-7 text-blue-600">ד&quot;ר הלנה בוגופולסקי</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                טיפול לילדים בעזרת מוזיקה בירושלים
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  ד&quot;ר הלנה בוגופולסקי, מומחית לפסיכותרפיה בעזרת מוזיקה, מסייעת לילדים בעזרת טיפול במוזיקה בקלינקה פרטית בירושלים, מתמחה ב:
                </p>
                <ul className="list-disc list-inside mt-4">
                  <li>ילדים אוטיסטים</li>
                  <li>ילדים בעלי פחדים וחרדות</li>
                  <li>ילדים עם קשיים חברתיים</li>
                  <li>ילדים עם ביטחון עצמי ירוד</li>
                </ul>
                <p className="mt-8">
                  במסגרת עבודתי אני מטפלת בילדים באופן פרטני ובקבוצות. במפגשים אלו אנחנו מנגנים, שרים, כותבים שירים, משחקים במשחקים מוסיקליים ומאלתרים במגוון רב של כלי מוסיקה ובהם: אורגנית, גיטרה, תופים, מערכת תופים חשמלית, קסילופונים ועוד.

                </p>
                <p className="mt-8">
                  בעבודת הדוקטורט שלי בנושא &quot;מוסיקה ורפואה&quot; מצאתי הוכחות להשפעת המוסיקה על מדדים פיזיולוגים, ביוכימים ורגשיים של המטופלים. מנסיוני הרב של יותר מעשרים שנה בעבודה עם ילדים על הספקטרום האוטיסטי, ילדים בעלי ביטחון עצמי ירוד ילדים עם פחדים וחרדות, וילדית עם מחלות כרוניות.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="bg-blue-100">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            מעוניין/ת לשמוע מידע נוסף?
            <br />
            התקשרו אליי כעת
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <a
              href="tel:0543171796"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              התקשר/י עכשיו - 054-3171796
            </a>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:py-40 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">שאלות נפוצות</h2>
            </div>
            <div className="mt-10 lg:col-span-7 lg:mt-0">
              <dl className="space-y-10">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <dt className="text-base font-semibold leading-7 text-gray-900">{faq.question}</dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl py-12 px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center gap-x-6 md:order-2 text-sm">

            <Link href="/accessibility">
              הצהרת נגישות
            </Link>
            <a href="https://rivlin.dev/web-development">
              פיתוח אתרים
            </a>

          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center leading-5 text-gray-200">
              &copy; דר&apos; הלנה בוגופולסקי - מטפלת במוסיקה לילדים על הספקטרום האוטיסטי בירושלים
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
