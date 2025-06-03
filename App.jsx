import { useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-red-600">روح‌اله جمشیدی اردشیری</h1>
          <nav className="space-x-6 hidden md:flex">
            <button onClick={() => setActiveTab("about")} className={`hover:text-red-600 transition ${activeTab === "about" ? "text-red-600 font-semibold" : ""}`}>درباره من</button>
            <button onClick={() => setActiveTab("education")} className={`hover:text-red-600 transition ${activeTab === "education" ? "text-red-600 font-semibold" : ""}`}>تحصیلات</button>
            <button onClick={() => setActiveTab("expertise")} className={`hover:text-red-600 transition ${activeTab === "expertise" ? "text-red-600 font-semibold" : ""}`}>زمینه‌ها</button>
            <button onClick={() => setActiveTab("services")} className={`hover:text-red-600 transition ${activeTab === "services" ? "text-red-600 font-semibold" : ""}`}>خدمات</button>
            <button onClick={() => setActiveTab("projects")} className={`hover:text-red-600 transition ${activeTab === "projects" ? "text-red-600 font-semibold" : ""}`}>پروژه‌ها</button>
            <button onClick={() => setActiveTab("contact")} className={`hover:text-red-600 transition ${activeTab === "contact" ? "text-red-600 font-semibold" : ""}`}>تماس</button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {activeTab === "about" && (
          <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">درباره من</h2>
            <img src="https://placehold.co/600x400?text=Profile+Image" alt="Profile" className="w-full max-w-lg mx-auto rounded-lg shadow-md mb-6" />
            <p className="text-lg leading-relaxed">
              سلام، من <strong>روح‌اله جمشیدی اردشیری</strong> هستم.
              با بیش از ۱۵ سال تجربه در زمینه‌های مختلف اعم از عمران، مدیریت، کسب و کار، صادرات، املاک، IT و کوچینگ، همواره سعی کردم با رویکردی مبتکرانه و عملی، خدماتی باکیفیت و مؤثر به مشتریان عزیزم ارائه دهم.
              <br /><br />
              اهدافم روشن است: ایجاد ارزش، رشد متقابل، و ارتقاء سطح دانش و توانمندی‌های افراد و سازمان‌ها.
            </p>
          </section>
        )}

        {activeTab === "education" && (
          <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">تحصیلات و سابقه</h2>
            <ul className="space-y-4">
              <li className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold text-lg">لیسانس مهندسی عمران</h3>
                <p className="text-sm text-gray-600 mt-1">دانشگاه علم و صنعت ایران | 1379-1383</p>
              </li>
              <li className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold text-lg">فوق لیسانس مدیریت</h3>
                <p className="text-sm text-gray-600 mt-1">دانشگاه علامه طباطبایی | 1385-1387</p>
              </li>
              <li className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold text-lg">دکتری مدیریت کسب و کار</h3>
                <p className="text-sm text-gray-600 mt-1">دانشگاه آزاد واحد تهران مرکزی | 1390-1393</p>
              </li>
            </ul>
          </section>
        )}

        {activeTab === "expertise" && (
          <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">زمینه‌های فعالیت</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "کوچینگ فردی و تیمی",
                "آموزش و توسعه سازمانی",
                "مشاوره مدیریت و استراتژی",
                "صادرات محصولات و خدمات",
                "املاک و مستغلات | مشارکت در ساخت",
                "فناوری اطلاعات و دیجیتالی سازی"
              ].map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
                  <h3 className="font-semibold text-lg">{item}</h3>
                  <p className="text-sm text-gray-600 mt-2">تجربه عملی و موفق در این زمینه با همکاری‌های داخلی و بین‌المللی.</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === "services" && (
          <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">خدمات من</h2>
            <ul className="space-y-4">
              {[
                "کوچینگ فردی و تیمی برای رشد شغلی و شخصی",
                "برگزاری دوره‌های آموزشی و تخصصی در زمینه‌های کسب و کار",
                "مشاوره مدیریتی و استراتژیک برای سازمان‌ها",
                "همراهی در صادرات محصولات و خدمات",
                "تحلیل و مشاوره در زمینه املاک و سرمایه‌گذاری",
                "راهکارهای دیجیتالی سازی و بهره‌وری در حوزه IT"
              ].map((service, i) => (
                <li key={i} className="bg-white p-4 rounded-lg shadow flex items-start">
                  <span className="inline-block w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3">✓</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {activeTab === "projects" && (
          <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">پروژه‌های من</h2>
            <div className="space-y-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold text-lg">مشاوره مدیریتی در یک شرکت صادراتی</h3>
                <p className="text-sm text-gray-600 mt-2">بهینه‌سازی فرآیندها، راه‌اندازی تیم فروش بین‌المللی و افزایش ۴۰٪ در حجم صادرات.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold text-lg">کوچینگ فردی برای مدیران جوان</h3>
                <p className="text-sm text-gray-600 mt-2">ارائه برنامه‌های شخصی‌سازی شده برای رشد شغلی و توسعه مهارت‌های رهبری.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold text-lg">همکاری در پروژه مسکونی در شمال تهران</h3>
                <p className="text-sm text-gray-600 mt-2">مدیریت اجرایی و مالی، بازدهی بالا در قالب یک سرمایه‌گذاری مشترک.</p>
              </div>
            </div>
          </section>
        )}

        {activeTab === "contact" && (
          <section className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">تماس با من</h2>
            <form className="space-y-4">
              <input type="text" placeholder="نام شما" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-300 outline-none" />
              <input type="email" placeholder="ایمیل شما" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-300 outline-none" />
              <textarea rows="4" placeholder="موضوع پیام" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-300 outline-none"></textarea>
              <button className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition">ارسال پیام</button>
            </form>
            <div className="mt-8 text-center space-y-2">
              <p>تلفن: ۰۹۱۲۳۴۵۶۷۸۹</p>
              <p>ایمیل: roohollah.jamshidi@example.com</p>
              <p>آدرس: تهران، ایران</p>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} روح‌اله جمشیدی اردشیری — تمامی حقوق محفوظ است.
      </footer>
    </div>
  );
}