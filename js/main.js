/* ==========================================================================
   Jainam Shah — Developer Desk Portfolio JavaScript Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initRetroClock();
  initLampToggle();
  initThemeToggle();
  initModeDock();
  initModalInteractions();
  initDiscoveryHighlight();
});

/* --- Live Retro Digital Clock --- */
let is24HourFormat = false;

function initRetroClock() {
  const clockContainer = document.getElementById('retroClock');
  if (!clockContainer) return;

  function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    let ampm = '';

    if (!is24HourFormat) {
      ampm = hours >= 12 ? ' PM' : ' AM';
      hours = hours % 12 || 12;
    }

    const strHours = String(hours).padStart(2, '0');

    clockContainer.innerHTML = `
      <span class="rt-card">${strHours}</span>
      <span class="rt-colon">:</span>
      <span class="rt-card">${minutes}</span>
      <span class="rt-colon">:</span>
      <span class="rt-card">${seconds}</span>
      <span style="font-size:0.75rem; opacity:0.8; margin-left:2px;">${ampm}</span>
    `;
  }

  updateClock();
  setInterval(updateClock, 1000);

  clockContainer.addEventListener('click', () => {
    is24HourFormat = !is24HourFormat;
    clockContainer.setAttribute('title', is24HourFormat ? 'Switch to 12h format' : 'Switch to 24h format');
    updateClock();
  });
}

/* --- Desk Lamp ON / OFF Toggle --- */
function initLampToggle() {
  const headerLampSwitch = document.getElementById('lampHeaderSwitch');

  function toggleLamp() {
    const isLampOn = document.body.classList.toggle('lamp-on');
    
    if (headerLampSwitch) {
      headerLampSwitch.innerHTML = isLampOn ? '💡 Lamp: ON' : '💡 Lamp: OFF';
    }
  }

  if (headerLampSwitch) {
    headerLampSwitch.addEventListener('click', toggleLamp);
  }
}

/* --- Dark Desk Theme Switcher --- */
function initThemeToggle() {
  const themeBtn = document.getElementById('themeToggle');
  const storedTheme = localStorage.getItem('jainam-desk-theme');

  if (storedTheme === 'dark') {
    document.body.classList.add('dark-desk');
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark-desk');
      localStorage.setItem('jainam-desk-theme', isDark ? 'dark' : 'light');
    });
  }
}

/* --- Mode Switcher Dock --- */
function initModeDock() {
  const modeButtons = document.querySelectorAll('.mode-btn');

  modeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      modeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const mode = btn.getAttribute('data-mode');
      const collage = document.querySelector('.desk-collage');

      if (mode === 'focus') {
        collage.style.gridTemplateColumns = '1fr';
        document.querySelector('.desk-objects-canvas').style.display = 'none';
      } else if (mode === 'scatter') {
        collage.style.gridTemplateColumns = '1fr 1fr';
        document.querySelector('.desk-objects-canvas').style.display = 'flex';
        document.querySelector('.desk-crt-monitor').style.transform = 'rotate(-2deg)';
        document.querySelector('.paperclip-card').style.transform = 'rotate(3deg)';
      } else {
        // Tidy Desk (Default)
        collage.style.gridTemplateColumns = '1fr 1fr';
        document.querySelector('.desk-objects-canvas').style.display = 'flex';
        document.querySelector('.desk-crt-monitor').style.transform = 'none';
        document.querySelector('.paperclip-card').style.transform = 'none';
      }
    });
  });
}

/* --- Interactive Discovery Highlight Helper --- */
function initDiscoveryHighlight() {
  const discoveryBtn = document.getElementById('discoveryBtn');
  if (!discoveryBtn) return;

  discoveryBtn.addEventListener('click', () => {
    const isHighlighted = document.body.classList.toggle('discovery-highlight');
    discoveryBtn.textContent = isHighlighted ? '✨ Interactive Highlights Active' : '🔍 Hint: Highlight Interactive Desk';
    discoveryBtn.style.background = isHighlighted ? 'var(--accent-crimson)' : 'var(--accent-amber)';
    discoveryBtn.style.color = isHighlighted ? '#ffffff' : '#0f172a';
  });
}

/* --- Interactive Object Modal Dialogs --- */
function initModalInteractions() {
  const modalOverlay = document.getElementById('deskModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const modalClose = document.getElementById('modalClose');

  const crtMonitor = document.querySelector('.desk-crt-monitor');
  const paperclipCard = document.querySelector('.paperclip-card');

  if (crtMonitor && modalOverlay) {
    crtMonitor.addEventListener('click', () => {
      modalTitle.textContent = '🖥️ Terminal Apps Showcase';
      modalBody.innerHTML = `
        <p style="margin-bottom:1rem; color:var(--text-muted);">
          Key production applications built and engineered by <strong>Jainam Shah</strong> across mobile and web platforms:
        </p>
        <ul style="padding-left:1.2rem; line-height:1.8;">
          <li><strong>YuJa (Toronto)</strong>: React web platform used by 10k+ monthly users with 35% speed improvement.</li>
          <li><strong>Phyxable (Toronto)</strong>: React Native mobile app with Twilio video consultation & AWS integration.</li>
          <li><strong>Abu Dhabi Pension Fund</strong>: Enterprise mobile app (Android & iOS).</li>
          <li><strong>Sharjah 24</strong>: News and media app (Android & iOS).</li>
          <li><strong>JKB Mobile</strong>: Banking application platform.</li>
          <li><strong>NewsDaily</strong>: Open-source Flutter mobile application framework.</li>
        </ul>
      `;
      openModal();
    });
  }

  if (paperclipCard && modalOverlay) {
    paperclipCard.addEventListener('click', () => {
      modalTitle.textContent = '📋 About Jainam Shah';
      modalBody.innerHTML = `
        <p style="font-size:1.05rem; line-height:1.7; color:var(--text-main);">
          Full Stack Developer with nearly <strong>4 years of experience</strong> in hybrid mobile development and full-stack web development.
          Skilled at leading developer teams, managing software development cycles, and building high-impact products.
        </p>
        <div style="margin-top:1.25rem; display:flex; gap:1rem; flex-wrap:wrap;">
          <span class="skill-pill">📍 Toronto, ON / Ahmedabad, IN</span>
          <span class="skill-pill">📧 jainamshah395@gmail.com</span>
          <span class="skill-pill">📱 +91 93132 60275</span>
        </div>
      `;
      openModal();
    });
  }

  function openModal() {
    modalOverlay.classList.add('open');
  }

  function closeModal() {
    modalOverlay.classList.remove('open');
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }
}
