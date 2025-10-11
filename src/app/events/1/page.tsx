import { notFound } from "next/navigation";

export default async function EventDetails({ params }: any) {
  const res = await fetch(
    "https://your-site-url.vercel.app/api/events",
    { cache: "no-store" }
  );
  const data = await res.json();
  const event = data.find((e: any) => e.event_id === params.id);

  if (!event) return notFound();

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white p-10 flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-yellow-400 via-red-500 to-orange-600 text-transparent bg-clip-text">
          {event.title}
        </h1>
        <p className="text-gray-400 mb-8">{event.date}</p>
        <p className="text-lg text-gray-200 leading-relaxed mb-10">
          {event.description}
        </p>

        <a
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-red-500 text-black font-bold rounded-full hover:scale-105 transition-transform"
        >
          Open Registration Form
        </a>
      </div>
    </section>
  );
}
