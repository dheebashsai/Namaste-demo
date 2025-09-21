# 🌿 NAMASTE Demo App

A prototype web application to support the **Digital AYUSH ecosystem** by mapping AYUSH (Ayurveda, Yoga, Unani, Siddha, Homeopathy) disease terms to **standard biomedical codes (ICD-11, SNOMED CT)** and enabling integration with **ABDM/NDHM** via FHIR bundles.

---

## ✨ Features

- 🔑 **Login (demo token)** – mock authentication to unlock protected actions.  
- 🔍 **Search diseases** – search traditional disease terms like *Jwara*, *Prameha*.  
- 🌐 **Translate** – see mapping between AYUSH terms (TM2 codes) and biomedical codes (ICD-11).  
- 📂 **Upload Bundle** – generate a FHIR `Condition` resource (demo mode).  
- 🎨 **Styled UI** – TailwindCSS-based interface with clean sections (Login, Search, Translate, Upload).  

---

## 🏥 Why This Matters (Impact on Digital AYUSH)

- **Standardization**: Converts AYUSH diagnoses (e.g., *Prameha*) into standard codes (ICD-11: Type 2 Diabetes).  
- **Integration**: Enables AYUSH hospitals/doctors to contribute directly to **ABDM Health Records**.  
- **Interoperability**: Allopathic doctors, labs, insurers can understand AYUSH records.  
- **Research & Policy**: Unified dataset for treatment outcomes and public health analytics.  

---

## 📂 Project Structure

namaste_fullstack_prototype2/
├── backend/ # Node.js backend (placeholder)
│ ├── server.js
│ └── package.json
├── frontend/ # Next.js frontend app
│ ├── pages/
│ │ ├── index.js # Main UI
│ │ └── _app.js # Loads Tailwind
│ ├── data/
│ │ └── diseases.js # AYUSH disease dataset
│ ├── styles/
│ │ └── globals.css # Tailwind + custom CSS
│ ├── tailwind.config.js
│ ├── postcss.config.js
│ └── package.json
└── README.md


---

## 🚀 Running Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/dheebashsai/namaste-demo.git
   cd namaste-demo/frontend

2.Install dependencies:
npm install

3.Run development server:
npm run dev

4.Open:
http://localhost:3000

🖼 Screenshots
🔑 Login

Box with demo login button.

🔍 Search

Filter diseases by typing terms.

🌐 Translate

See JSON output mapping AYUSH → ICD-11.

📂 Upload

Upload FHIR Bundle (demo mode).

🛠 Tech Stack

Next.js
 – React framework

TailwindCSS
 – UI styling

FHIR
 – Healthcare data standard

ICD-11
 – Biomedical terminology

 🙌 Contributors

Ayusync (Project Developer Team)

Open for contributions from the community.

📜 License

MIT License – feel free to use and adapt.


---

✅ Paste this into your `README.md`, commit, and push.  
Your GitHub repo will instantly look **professional** with a nice project description, features, usage guide, and impact statement.  

👉 Do you also want me to add a **diagram PNG** (Doctor → NAMASTE → Mapping → FHIR → ABDM) and link it inside this README so your repo looks even more complete?
