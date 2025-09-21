import { useState } from "react";
import { Search, Upload, Copy } from "lucide-react";
import diseases from "../data/diseases"; // or "../data/diseases"

export default function Home() {
  const [q, setQ] = useState("");
  const [translateOut, setTranslateOut] = useState(null);
  const [token, setToken] = useState("");
  const [bundleOut, setBundleOut] = useState(null);

  // 🔑 Demo login (no backend needed)
  async function login() {
    setToken("demo-token-12345");
    alert("Got demo token (demo mode)");
  }

  // 📂 Demo upload (no backend needed)
  async function uploadBundle() {
    if (!token) {
      alert("Please login first");
      return;
    }
    setBundleOut({ status: "success", message: "Bundle uploaded (demo)" });
  }

  // 🔍 Filter diseases
  const filteredResults = q
    ? diseases.filter((d) =>
      d.name.toLowerCase().includes(q.toLowerCase())
    )
    : [];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-green-700 flex items-center justify-center gap-2">
          🌿 NAMASTE Demo
        </h1>

        {/* 🔑 Login Section */}
        <div className="bg-white p-4 rounded-2xl shadow space-y-2">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <span>🔑</span> Login
          </h2>
          <button
            onClick={login}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Get Demo Token
          </button>
          <p className="text-sm text-gray-600">
            Token:{" "}
            <span className="font-mono">
              {token ? token.slice(0, 20) + "..." : "Not logged in"}
            </span>
          </p>
        </div>

        {/* 🔍 Search Section */}
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <span>🔎</span> Search Diseases
          </h2>
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Type e.g. Jwara"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="flex-1 border rounded-lg px-3 py-2"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
              <Search size={16} /> Search
            </button>
          </div>
          <ul className="space-y-2">
            {filteredResults.map((d) => (
              <li key={d.code} className="p-3 bg-gray-50 rounded-lg shadow">
                <div className="flex justify-between">
                  <span>
                    <strong>{d.code}</strong> – {d.name}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{d.description}</p>
                <p className="text-xs text-gray-500">
                  TM2: {d.tm2} | Biomed: {d.biomed}
                </p>
                <button
                  onClick={() => setTranslateOut(d)}
                  className="mt-2 px-3 py-1 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700"
                >
                  Translate
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* 🌐 Translate Section */}
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <span>🌐</span> Translate
          </h2>
          <div className="bg-gray-900 text-green-400 font-mono p-4 rounded-lg relative">
            <pre className="whitespace-pre-wrap text-sm">
              {translateOut
                ? JSON.stringify(translateOut, null, 2)
                : "Select a disease to translate"}
            </pre>
            <button
              onClick={() =>
                translateOut &&
                navigator.clipboard.writeText(
                  JSON.stringify(translateOut, null, 2)
                )
              }
              className="absolute top-2 right-2 text-gray-300 hover:text-white"
            >
              <Copy size={18} />
            </button>
          </div>
        </div>

        {/* 📂 Upload Section */}
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <span>📂</span> Upload Bundle
          </h2>
          <button
            onClick={uploadBundle}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center gap-2"
          >
            <Upload size={16} /> Upload (requires token)
          </button>
          <div className="mt-3 bg-gray-100 p-3 rounded-lg text-sm font-mono">
            <pre>
              {bundleOut
                ? JSON.stringify(bundleOut, null, 2)
                : "No bundle uploaded"}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
