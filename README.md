# Cyberknp/projects

A multi-project monorepo / portfolio repository containing a collection of prototypes and student/learning builds across **Cybersecurity**, **Machine Learning**, **IoT**, and **App/Web development**.  
Each top-level folder is an independent project with its own assets (datasets, notebooks, code, builds, and documentation).

> If you’re looking for a specific project, start in the **Projects in this repo** section and jump to the folder.

---

## Repository structure

Top-level directories currently present:

- **Artemish shield/** — phishing detection (ML/anomaly detection) + packaged frontend artifact(s)
- **Bijudgam crop predictor[ML][Basic]/** — basic crop prediction notebook + dataset
- **Fire hazard alert[IOT][Basic]/** — IoT fire/CO hazard detection project + media + sketches
- **HumbleKnight/** — Godot platformer prototype + exported/archive assets
- **ayurwatch [IOT,ML]/** — wearable/health sensor experimentation (MPU6050, MAX30102, OLED) + sketches
- **light intensity[IOT][Basic]/** — light-intensity IoT project + Android APK + media + sketch
- **matuguides/** — TypeScript/Vite frontend project (includes its own README)

---

## Projects in this repo

### 1) Artemish shield (Phishing Detection)
**Path:** `Artemish shield/`

Focuses on phishing detection using anomaly detection / ML experimentation and includes artifacts such as:
- Jupyter notebooks for preprocessing and detection
- A phishing dataset (`dataset_phishing.csv`)
- Serialized model files (`.pkl`)
- A packaged frontend archive (`artemisshield-frontend.zip`)
- A short functionality note (`artemish shield functionality.txt`)
- A PDF writeup (`Phishing Detection via Anomaly Detection_.pdf`)

**Key files (observed):**
- `emailphishingpreprocessing.ipynb`
- `phishingemaildetect.ipynb`
- `phishinglinks.py`, `preprocessing.py`
- `dataset_phishing.csv`
- `phishing_detector_model.pkl`, `isolation_forest_model.pkl`
- `artemisshield-frontend.zip`

**How to use (typical):**
1. Open the notebooks (`*.ipynb`) in Jupyter/VS Code.
2. Ensure you have Python ML dependencies installed (see “Common setup” below).
3. Run preprocessing and model inference steps as defined in the notebooks.

---

### 2) Bijudgam crop predictor [ML][Basic]
**Path:** `Bijudgam crop predictor[ML][Basic]/`

A basic ML notebook project for crop prediction.
**Key files (observed):**
- `crop_predictor_working.ipynb`
- `crop.xls` (dataset)
- `BijUdgam_20240517_224720_0000 (1).pdf` (documentation/pitch/report)

---

### 3) Fire hazard alert [IOT][Basic]
**Path:** `Fire hazard alert[IOT][Basic]/`

An IoT project for detecting fire hazards and carbon monoxide (CO), including:
- Arduino/embedded sketches (folders)
- Images and a test video
- A walkthrough document

**Key items (observed):**
- `_Firedetect/` (sketch folder)
- `_codetect/` (sketch folder)
- `project walkthrough.txt`
- `fire detec.jpg`, `co detec.jpg`
- `firedetec trial.mp4`

---

### 4) HumbleKnight (Godot platformer)
**Path:** `HumbleKnight/`

A Godot platformer prototype with:
- A zipped project archive
- Notes / scripts in text form

**Key items (observed):**
- `platformer.zip`
- `gdscript.txt`
- `godot game 1.txt`

---

### 5) ayurwatch [IOT,ML]
**Path:** `ayurwatch [IOT,ML]/`

A wearable/health-monitor style project combining sensors and display components.  
Includes code snippets and at least one sketch folder.

**Key items (observed):**
- `MPU6050 raw code`
- `max30102code.txt`
- `OLED clock`
- `combined code`
- `workingsketchdatalogging/`

---

### 6) light intensity [IOT][Basic]
**Path:** `light intensity[IOT][Basic]/`

An IoT light intensity project that also includes a mobile component.
**Key items (observed):**
- `_lightintensity/` (sketch folder)
- `Lighivibe.apk`
- `Test run.mp4`
- `app blocks.png`, `appfrontend.png`
- `final model.jpg`

---

### 7) matuguides (TypeScript + Vite)
**Path:** `matuguides/`

A web frontend project built with TypeScript and Vite.
**Key items (observed):**
- `package.json`, `vite.config.ts`, `tsconfig.json`
- `index.html`, `index.tsx`, `App.tsx`
- `components/`, `services/`
- `README.md` (project-specific)

**Run locally:**
```bash
cd matuguides
npm install
npm run dev
```

---

## Common setup (recommended)

Because this repo contains multiple independent projects, there isn’t a single universal environment. These are common requirements:

### Python / Jupyter (for ML notebooks)
- Python 3.9+ recommended
- Jupyter Notebook / JupyterLab or VS Code with Jupyter extension
- Common libraries often used in projects like these:
  - `pandas`, `numpy`, `scikit-learn`, `matplotlib`, `seaborn`

Example:
```bash
python -m venv .venv
# activate your venv
pip install jupyter pandas numpy scikit-learn matplotlib seaborn
```

### Arduino / Embedded (for IoT sketches)
- Arduino IDE or PlatformIO
- Correct board support packages + required libraries for the sensors used (e.g., MAX30102, MPU6050, OLED displays)

### Node.js (for web projects)
- Node.js 18+ recommended
- npm (or pnpm/yarn)

---

## Notes about large/binary assets

This repository contains several binary artifacts (e.g., `.zip`, `.apk`, `.mp4`, `.pkl`, `.pdf`, images).  
If you plan to collaborate heavily, consider:
- Using **Git LFS** for large binaries
- Adding consistent per-project READMEs
- Adding `.gitignore` and environment files per subproject

---

## Contributing

Contributions are welcome, especially:
- Adding/expanding per-project READMEs
- Documenting dependencies and wiring diagrams for IoT builds
- Adding reproducible environment files (`requirements.txt`, `environment.yml`, or `package-lock.json`)
- Cleaning up or organizing assets into clearer folder layouts

Suggested workflow:
1. Fork the repo
2. Create a feature branch
3. Commit changes with clear messages
4. Open a pull request

---

## License

No license file is currently included at the repository root.  
If you want others to reuse your work, add a `LICENSE` (MIT/Apache-2.0/GPL/etc.) and specify per-project licensing if needed.

---

## Contact

Owner: **@Cyberknp**
Repo: https://github.com/Cyberknp/projects
