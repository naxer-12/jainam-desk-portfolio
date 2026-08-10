# 💻 Jainam Shah — Interactive Developer Desk Portfolio

An interactive, retro-modern personal developer portfolio website inspired by [aishashok.com](https://aishashok.com/), tailored for **Full Stack & Hybrid Mobile Developers**.

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## ✨ Features & Interactive Desk Objects

- **💡 Ambient Desk Lamp**: Clickable lamp button (and in-header toggle) that illuminates the canvas with a warm, cozy golden studio glow.
- **🕒 Retro Live Digital Clock**: Real-time ticker in the header with 12h/24h AM/PM format toggling.
- **🖥️ CRT Terminal Monitor**: Interactive CRT screen displaying featured mobile & web applications (*YuJa, Phyxable, Abu Dhabi Pension Fund, Sharjah 24, JKB, NewsDaily*).
- **📋 Paperclip Bio Card**: Sticky note style card with location tags and quick contact actions.
- **🎛️ Mode Switcher Dock**: Toggle between **Tidy Desk** (organized layout), **Studio Scatter** (floating objects), and **Focus Mode** (clean text-first layout).
- **🌙 Dark/Light Desk Theme**: Real-time theme toggle with `localStorage` persistence.
- **📱 Detailed Experience Timeline**: Metrics-driven breakdown of full-stack engineering roles (*10k+ monthly users, +35% load speed, 80% CI test coverage, 5+ mobile apps shipped*).
- **⚙️ Technical Skills Grid**: Categorized skill stack badges for Languages, Frameworks, Cloud, Databases, and DevOps.

---

## 🛠️ Project Structure

```
jainam-desk-portfolio/
├── index.html            # Main semantic HTML markup & resume content
├── css/
│   └── style.css         # Retro desk design tokens, CRT scanlines & lamp lighting
├── js/
│   └── main.js           # Live clock ticker, lamp switch sync, modal dialogs & mode dock
└── README.md             # Complete setup & GitHub Pages deployment guide
```

---

## 🚀 How to Create & Host Your Own Desk Portfolio

### Step 1: Clone or Download the Repository
```bash
git clone https://github.com/naxer-12/jainam-desk-portfolio.git
cd jainam-desk-portfolio
```

### Step 2: Customize Your Resume Content
1. Open `index.html` in your code editor.
2. Update the **Hero Section** with your name, title, bio, and location.
3. Edit the **Experience Timeline** (`#experience`) with your past roles, achievements, and impact metrics.
4. Customize the **Apps Built** section (`#apps`) with your projects.
5. Update your **Technical Skills** (`#skills`) and **Education** (`#education`).

### Step 3: Run & Test Locally
You can run a quick local web server using Python or Node.js:
```bash
# Using Python 3
python3 -m http.server 8080

# OR using Node npx serve
npx serve .
```
Open `http://localhost:8080` in your web browser.

---

## 🌐 How to Host on GitHub Pages (Free Production Link)

1. **Create a GitHub Repository**:
   - Go to [GitHub New Repository](https://github.com/new).
   - Name your repo `portfolio` or `jainam-desk-portfolio`.
   - Set visibility to **Public**.

2. **Push your code**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Developer Desk Portfolio"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/<REPO_NAME>.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Navigate to your repository on GitHub.
   - Click **Settings** &rarr; **Pages** (in the left sidebar).
   - Under **Build and deployment** &rarr; **Branch**:
     - Select `main` branch.
     - Folder: `/ (root)`.
     - Click **Save**.

4. **Access your live site**:
   After 1-2 minutes, GitHub will publish your site live at:
   ```
   https://<YOUR_USERNAME>.github.io/<REPO_NAME>/
   ```

---

## 📄 License

Distributed under the **MIT License**. Feel free to use this template for your personal portfolio!
