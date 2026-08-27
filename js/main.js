// FR Informatique — interactions
document.addEventListener('DOMContentLoaded', () => {

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isFinePointer = window.matchMedia('(pointer: fine)').matches;

  /* ---------- Ligne qui s'écrit toute seule ---------- */
  const runTypewriters = (instant) => {
    document.querySelectorAll('.typewriter').forEach(el => {
      const text = el.textContent.trim();
      if (instant) { el.textContent = text; return; }
      el.textContent = '';
      const cursor = document.createElement('span');
      cursor.className = 'tw-cursor';
      el.appendChild(cursor);
      let i = 0;
      const timer = setInterval(() => {
        if (i < text.length) {
          cursor.insertAdjacentText('beforebegin', text[i]);
          i++;
        } else {
          clearInterval(timer);
          setTimeout(() => cursor.classList.add('fade'), 700);
        }
      }, 42);
    });
  };

  /* ---------- 1. Intro "décodage" plein écran (une seule fois par visite) ---------- */
  const intro = document.querySelector('.intro-decode');
  const alreadySeen = sessionStorage.getItem('fri-intro-seen');
  if (intro && !reduceMotion && !alreadySeen) {
    sessionStorage.setItem('fri-intro-seen', '1');
    const textEl = intro.querySelector('.intro-text');
    const original = textEl.textContent.trim();
    const GLYPHS = '01#/+-·:*░▒▓';
    const duration = 480, stepMs = 24;
    const totalSteps = Math.ceil(duration / stepMs);
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const iteration = (step / totalSteps) * original.length;
      textEl.textContent = original.split('').map((ch, i) => {
        if (ch === ' ') return ' ';
        if (i < iteration) return original[i];
        return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }).join('');
      if (step >= totalSteps) {
        clearInterval(timer);
        textEl.textContent = original;
        setTimeout(() => {
          intro.classList.add('hide');
          runTypewriters(false);
          setTimeout(() => intro.remove(), 450);
        }, 120);
      }
    }, stepMs);
  } else if (intro) {
    intro.remove();
    if (!reduceMotion) {
      setTimeout(() => runTypewriters(false), 150);
    } else {
      runTypewriters(true);
    }
  }


  /* ---------- Header on scroll ---------- */
  const header = document.querySelector('.site-header');
  const progressTop = document.querySelector('.progress-top');
  const onScroll = () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 30);
    const h = document.documentElement;
    const scrollPct = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    if (progressTop) progressTop.style.width = scrollPct + '%';
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav ---------- */
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
    }));
  }

  /* ---------- Split words (titres qui se révèlent mot par mot) ---------- */
  document.querySelectorAll('.split').forEach(el => {
    const words = el.textContent.trim().split(/\s+/);
    el.innerHTML = words.map(w => `<span class="word-mask"><span class="word">${w}</span></span>`).join(' ');
    el.querySelectorAll('.word').forEach((w, i) => { w.style.transitionDelay = (i * 45) + 'ms'; });
  });
  const splitIo = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('in'); splitIo.unobserve(entry.target); }
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('.split').forEach(el => splitIo.observe(el));

  /* ---------- Reveal on scroll (existant) ---------- */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .zoom-in');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach((el, i) => {
    el.style.setProperty('--i', i % 6);
    io.observe(el);
  });

  /* ---------- Boutons magnétiques ---------- */
  document.querySelectorAll('.btn-primary, .nav-cta').forEach(btn => {
    btn.classList.add('magnetic');
    const strength = 0.35;
    btn.addEventListener('mousemove', (e) => {
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * strength;
      const y = (e.clientY - r.top - r.height / 2) * strength;
      btn.style.transform = `translate(${x}px, ${y}px)`;
    });
    btn.addEventListener('mouseleave', () => { btn.style.transform = 'translate(0,0)'; });
  });

  /* ---------- Liens de menu magnétiques (effet plus léger) ---------- */
  document.querySelectorAll('.nav-links a:not(.nav-cta)').forEach(link => {
    link.classList.add('magnetic-link');
    const strength = 0.28;
    link.addEventListener('mousemove', (e) => {
      const r = link.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * strength;
      const y = (e.clientY - r.top - r.height / 2) * strength;
      link.style.transform = `translate(${x}px, ${y}px)`;
    });
    link.addEventListener('mouseleave', () => { link.style.transform = 'translate(0,0)'; });
  });

  /* ---------- Effet "décodage" au survol (thème signal) ---------- */
  const GLYPHS = '01#/+-·:*░▒▓';
  document.querySelectorAll('.decode').forEach(el => {
    const original = el.textContent;
    let frame = null;
    el.addEventListener('mouseenter', () => {
      let iteration = 0;
      const maxIter = original.length;
      if (frame) clearInterval(frame);
      frame = setInterval(() => {
        el.textContent = original.split('').map((ch, i) => {
          if (ch === ' ') return ' ';
          if (i < iteration) return original[i];
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }).join('');
        iteration += maxIter / 14;
        if (iteration >= maxIter) {
          clearInterval(frame);
          el.textContent = original;
        }
      }, 28);
    });
    el.addEventListener('mouseleave', () => {
      if (frame) clearInterval(frame);
      el.textContent = original;
    });
  });


  document.querySelectorAll('section.dark, .site-footer').forEach(sec => {
    sec.addEventListener('mousemove', (e) => {
      const r = sec.getBoundingClientRect();
      sec.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      sec.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });

  /* ---------- Compteurs (statistiques) ---------- */
  const counters = document.querySelectorAll('.count');
  const countIo = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10) || 0;
      const duration = 900;
      const start = performance.now();
      const step = (now) => {
        const p = Math.min(1, (now - start) / duration);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      countIo.unobserve(el);
    });
  }, { threshold: 0.6 });
  counters.forEach(el => countIo.observe(el));

  /* ---------- Parallax léger ---------- */
  const parallaxEls = Array.from(document.querySelectorAll('[data-parallax]'));
  let ticking = false;
  const updateParallax = () => {
    parallaxEls.forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0.08;
      const r = el.getBoundingClientRect();
      const center = r.top + r.height / 2 - window.innerHeight / 2;
      el.style.transform = `translateY(${(-center * speed).toFixed(1)}px)`;
    });
    ticking = false;
  };
  document.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(updateParallax); ticking = true; }
  }, { passive: true });
  updateParallax();

  /* ---------- Diagnostic scan : les cartes de pannes s'auto-diagnostiquent au scroll ---------- */
  const diagCards = Array.from(document.querySelectorAll('.diag-card'));
  if (diagCards.length) {
    const DIAG_GLYPHS = '01#/+-·:*░▒▓';
    const scramble = (el, duration) => {
      const original = el.textContent;
      if (reduceMotion) return;
      const maxIter = original.length;
      const stepMs = 26;
      const totalSteps = Math.ceil(duration / stepMs);
      const inc = maxIter / totalSteps;
      let iteration = 0;
      const timer = setInterval(() => {
        iteration += inc;
        el.textContent = original.split('').map((ch, i) => {
          if (ch === ' ') return ' ';
          if (i < iteration) return ch;
          return DIAG_GLYPHS[Math.floor(Math.random() * DIAG_GLYPHS.length)];
        }).join('');
        if (iteration >= maxIter) {
          clearInterval(timer);
          el.textContent = original;
        }
      }, stepMs);
    };

    const diagIo = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const card = entry.target;
        const i = diagCards.indexOf(card);
        const baseDelay = i * 80;
        const title = card.querySelector('.glitch-in');
        if (reduceMotion) {
          card.classList.add('solved');
        } else {
          setTimeout(() => { if (title) scramble(title, 500); }, baseDelay + 300);
          setTimeout(() => card.classList.add('solved'), baseDelay + 1000);
        }
        diagIo.unobserve(card);
      });
    }, { threshold: 0.35 });
    diagCards.forEach(card => diagIo.observe(card));
  }

  /* ---------- Signal rail: progress + active act ---------- */
  const rail = document.querySelector('.signal-rail');
  if (rail) {
    const progressPath = rail.querySelector('.progress');
    const nodes = rail.querySelectorAll('.node');
    const labels = rail.querySelectorAll('.label');
    const acts = document.querySelectorAll('[data-act]');

    if (progressPath) {
      const len = progressPath.getTotalLength();
      progressPath.style.strokeDasharray = len;
      progressPath.style.strokeDashoffset = len;
    }

    const fixedAct = parseInt(document.body.dataset.pageAct, 10);
    const useScrollDetection = acts.length >= 2;

    const updateRail = () => {
      const h = document.documentElement;
      const scrollPct = Math.min(1, Math.max(0, h.scrollTop / (h.scrollHeight - h.clientHeight)));
      if (progressPath) {
        const len = progressPath.getTotalLength();
        progressPath.style.strokeDashoffset = String(len * (1 - scrollPct));
      }

      // Determine active act: scroll-driven on the homepage, fixed on subpages
      let activeIndex = Number.isNaN(fixedAct) ? 0 : fixedAct;
      if (useScrollDetection) {
        acts.forEach((section, i) => {
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.5) activeIndex = i;
        });
      }
      nodes.forEach((n, i) => n.classList.toggle('active', i === activeIndex));
      labels.forEach((l, i) => l.classList.toggle('active', i === activeIndex));

      const colors = ['#b5652e', '#4e8a7a', '#6bb39f'];
      if (progressPath) progressPath.style.stroke = colors[Math.min(activeIndex, colors.length - 1)];
    };
    document.addEventListener('scroll', updateRail, { passive: true });
    window.addEventListener('resize', updateRail);
    updateRail();
  }

  /* ---------- Current year ---------- */
  document.querySelectorAll('.current-year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- 3. Circuit imprimé animé (hero) ---------- */
  const circuitSvg = document.querySelector('.hero-scope svg');
  const heroEl = document.querySelector('.hero');
  const heroScopeVisible = window.matchMedia('(min-width: 981px)').matches;
  if (circuitSvg && heroEl && !reduceMotion && heroScopeVisible) {
    const paths = Array.from(circuitSvg.querySelectorAll('.circuit-path'));
    const pulseLayer = circuitSvg.querySelector('.circuit-pulses');
    const pulses = paths.map((path, i) => {
      const len = path.getTotalLength();
      const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      dot.setAttribute('r', '3.2');
      pulseLayer.appendChild(dot);
      return { path, len, dot, offset: (i / paths.length), speed: 0.00028 + i * 0.00004 };
    });

    const animateCircuit = (t) => {
      pulses.forEach(p => {
        const progress = ((t * p.speed) + p.offset) % 1;
        const pt = p.path.getPointAtLength(progress * p.len);
        p.dot.setAttribute('cx', pt.x);
        p.dot.setAttribute('cy', pt.y);
        p.dot.style.opacity = 0.35 + Math.sin(progress * Math.PI) * 0.65;
      });
      requestAnimationFrame(animateCircuit);
    };
    requestAnimationFrame(animateCircuit);

  }

  /* ---------- 4. Illustrations qui se dessinent au scroll ---------- */
  const drawEls = Array.from(document.querySelectorAll('.draw-on-scroll'));
  drawEls.forEach((el) => {
    try {
      const len = el.getTotalLength();
      el.style.strokeDasharray = len;
      el.style.strokeDashoffset = len;
    } catch (err) { /* not a geometry element, skip */ }
  });
  const drawIo = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const i = drawEls.indexOf(el);
        el.style.transition = `stroke-dashoffset 1.3s cubic-bezier(.2,.7,.2,1) ${(i % 8) * 70}ms`;
        el.style.strokeDashoffset = '0';
        drawIo.unobserve(el);
      }
    });
  }, { threshold: 0.4 });
  drawEls.forEach(el => drawIo.observe(el));

  /* ---------- 6. Cartes en relief (tilt 3D léger) ---------- */
  if (isFinePointer) {
    document.querySelectorAll('.card, .acte-card, .real-card, .diag-card').forEach((el) => {
      const maxTilt = 7;
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(800px) rotateX(${(-py * maxTilt).toFixed(2)}deg) rotateY(${(px * maxTilt).toFixed(2)}deg) translateY(-4px)`;
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
  }

  /* ---------- 5. Curseur avant / après ---------- */
  document.querySelectorAll('.ba-slider').forEach((slider) => {
    const setPos = (clientX) => {
      const r = slider.getBoundingClientRect();
      let pct = ((clientX - r.left) / r.width) * 100;
      pct = Math.max(4, Math.min(96, pct));
      slider.style.setProperty('--pos', pct + '%');
    };
    let dragging = false;
    slider.addEventListener('pointerdown', (e) => {
      dragging = true; setPos(e.clientX);
      try { slider.setPointerCapture(e.pointerId); } catch (err) {}
    });
    slider.addEventListener('pointermove', (e) => { if (dragging) setPos(e.clientX); });
    ['pointerup', 'pointerleave', 'pointercancel'].forEach(evt =>
      slider.addEventListener(evt, () => { dragging = false; })
    );
  });

  /* ---------- 7. Copie de l'e-mail au clic (secours si aucun client mail n'est configuré) ---------- */
  const showEmailToast = (email) => {
    let toast = document.querySelector('.email-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'email-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = `Adresse copiée : ${email}`;
    toast.classList.remove('show');
    void toast.offsetWidth;
    toast.classList.add('show');
    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(() => toast.classList.remove('show'), 3200);
  };
  document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
    link.addEventListener('click', () => {
      const email = link.href.replace('mailto:', '').split('?')[0];
      if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(() => showEmailToast(email)).catch(() => {});
      }
    });
  });

});

