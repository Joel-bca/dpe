"use client";
import { useEffect, useState } from "react";
import { Info, FileText, Link2 } from "lucide-react";

const icons = {
  info: Info,
  "file-text": FileText,
  link: Link2,
};

export default function ASMPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/events?sheet=ASM")
      .then((r) => r.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-16 px-8">
      <h1 className="text-4xl font-bold text-center mb-10">Annual Sports Meet</h1>

      <div className="max-w-4xl mx-auto space-y-10">
        {data.map((item, i) => {
          const Icon = icons[item.Icon?.toLowerCase()] || Info;
          return (
            <div key={i} className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-md hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-4">
                <Icon className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-semibold">{item.Title}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">{item.Content}</p>

              {item.Section === "Registration" && (
                <a
                  href={item.Content}
                  className="inline-block mt-4 text-blue-600 font-medium hover:underline"
                  target="_blank"
                >
                  Register Now →
                </a>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
