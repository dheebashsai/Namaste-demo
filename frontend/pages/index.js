// pages/index.js
import { useState } from "react";
import { Search, Upload, Copy, LogIn, ArrowLeft } from "lucide-react";
import diseases from "../data/diseases";

/*
  Replacement index.js that uses inline styles to *guarantee* center alignment.
  No Tailwind or framer-motion required for centering.
*/

export default function Home() {
  const [step, setStep] = useState(0); // 0=Login,1=Search,2=Translate,3=Upload
  const [q, setQ] = useState("");
  const [translateOut, setTranslateOut] = useState(null);
  const [token, setToken] = useState("");
  const [bundleOut, setBundleOut] = useState(null);

  const filteredResults = q
    ? diseases.filter((d) => d.name.toLowerCase().includes(q.toLowerCase()))
    : [];

  // Inline styles (guarantee centering)
  const pageStyle = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    background: "linear-gradient(180deg, #ECFDF5 0%, #F0F9FF 50%, #F5F3FF 100%)",
    boxSizing: "border-box",
  };

  const cardStyle = {
    width: "100%",
    maxWidth: 960,   // was 720, now bigger
    background: "#ffffff",
    borderRadius: 20,
    boxShadow: "0 24px 48px rgba(16,24,40,0.1)",
    border: "1px solid rgba(15,23,42,0.06)",
    padding: 40,     // was 28, now more spacious
    boxSizing: "border-box",
  };


  const inputStyle = {
    width: "100%",
    padding: "10px 12px",
    borderRadius: 8,
    border: "1px solid #CBD5E1",
    outline: "none",
    boxSizing: "border-box",
  };

  function handleGetToken() {
    setToken("demo-token-12345");
    setStep(1); // go to search
  }

  function handleUpload() {
    if (!token) {
      alert("Please login first");
      return;
    }
    setBundleOut({ status: "success", message: "Bundle uploaded (demo)" });

    // ⏳ After 1.5s, go back to the login step
    setTimeout(() => {
      setBundleOut(null);
      setStep(0);
    }, 1500);
  }


  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
          {step === 0 && <LogIn size={22} color="#059669" />}
          {step === 1 && <Search size={22} color="#2563EB" />}
          {step === 2 && <span style={{ fontSize: 22 }}>🌐</span>}
          {step === 3 && <Upload size={22} color="#7C3AED" />}

          <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: "#0F172A" }}>
            {step === 0 && "Login"}
            {step === 1 && "Search Diseases"}
            {step === 2 && "Translate"}
            {step === 3 && "Upload Bundle"}
          </h2>
        </div>

        {/* Content by step */}
        {step === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <p style={{ margin: 0, color: "#475569" }}>Click below to get a demo token.</p>
            <button
              onClick={handleGetToken}
              style={{
                padding: "10px 14px",
                background: "#10B981",
                color: "white",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
                width: 180,
              }}
            >
              Get Demo Token
            </button>
            <div style={{ marginTop: 8, color: "#6B7280", fontFamily: "monospace" }}>
              Token: {token || "Not logged in"}
            </div>
          </div>
        )}

        {step === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search e.g. Jwara"
              style={inputStyle}
            />

            <div style={{ maxHeight: 280, overflowY: "auto", marginTop: 6 }}>
              {q && filteredResults.length === 0 && (
                <div style={{ color: "#64748B" }}>No results</div>
              )}
              {filteredResults.map((d) => (
                <div
                  key={d.code}
                  style={{
                    padding: 12,
                    background: "#F8FAFC",
                    borderRadius: 8,
                    border: "1px solid rgba(2,6,23,0.04)",
                    marginBottom: 10,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 700, color: "#059669" }}>
                      {d.code} – {d.name}
                    </div>
                    <div style={{ fontSize: 12, color: "#64748B" }}>
                      TM2: {d.tm2} | Biomed: {d.biomed}
                    </div>
                    <div style={{ marginTop: 6, fontSize: 13, color: "#334155" }}>
                      {d.description}
                    </div>
                  </div>
                  <div style={{ marginLeft: 12, alignSelf: "center" }}>
                    <button
                      onClick={() => {
                        setTranslateOut(d);
                        setStep(2); // go to translate
                      }}
                      style={{
                        padding: "8px 10px",
                        background: "#4F46E5",
                        color: "white",
                        border: "none",
                        borderRadius: 8,
                        cursor: "pointer",
                        fontSize: 13,
                      }}
                    >
                      Translate
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
              <button
                onClick={() => setStep(0)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 10px",
                  background: "#F1F5F9",
                  border: "1px solid #E6E9EE",
                  color: "#0F172A",
                  borderRadius: 8,
                  cursor: "pointer",
                }}
              >
                <ArrowLeft size={14} /> Back
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ background: "#0F172A", color: "#10B981", fontFamily: "monospace", padding: 12, borderRadius: 8 }}>
              <pre style={{ margin: 0, whiteSpace: "pre-wrap" }}>
                {translateOut ? JSON.stringify(translateOut, null, 2) : "No disease selected"}
              </pre>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
              <button
                onClick={() => setStep(1)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 10px",
                  background: "#F1F5F9",
                  border: "1px solid #E6E9EE",
                  color: "#0F172A",
                  borderRadius: 8,
                  cursor: "pointer",
                }}
              >
                <ArrowLeft size={14} /> Back
              </button>

              <button
                onClick={() => setStep(3)}
                style={{
                  padding: "10px 14px",
                  background: "#7C3AED",
                  color: "white",
                  border: "none",
                  borderRadius: 8,
                  cursor: "pointer",
                }}
              >
                Next: Upload Bundle
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <p style={{ margin: 0, color: "#475569" }}>Upload a FHIR bundle (demo mode).</p>

            <div style={{ display: "flex", gap: 8 }}>
              <button
                onClick={handleUpload}
                style={{
                  padding: "10px 14px",
                  background: "#7C3AED",
                  color: "white",
                  border: "none",
                  borderRadius: 8,
                  cursor: "pointer",
                }}
              >
                Upload (demo)
              </button>

              <button
                onClick={() => setStep(2)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 10px",
                  background: "#F1F5F9",
                  border: "1px solid #E6E9EE",
                  color: "#0F172A",
                  borderRadius: 8,
                  cursor: "pointer",
                }}
              >
                <ArrowLeft size={14} /> Back
              </button>
            </div>

            {bundleOut && (
              <div style={{ background: "#F8FAFC", padding: 10, borderRadius: 8, fontFamily: "monospace", fontSize: 12 }}>
                <pre style={{ margin: 0 }}>{JSON.stringify(bundleOut, null, 2)}</pre>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
