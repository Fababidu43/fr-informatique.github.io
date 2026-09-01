(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(pointer: fine)").matches;

  /* Introduction décodée et libellés qui s'écrivent, repris de l'identité historique. */
  function runTypewriters(instant) {
    document.querySelectorAll(".typewriter").forEach(function (element) {
      var value = element.textContent.trim();
      if (!value || element.dataset.typed === "true") return;
      element.dataset.typed = "true";
      if (instant) return;
      element.textContent = "";
      var cursor = document.createElement("span");
      cursor.className = "tw-cursor";
      element.appendChild(cursor);
      var index = 0;
      var timer = window.setInterval(function () {
        if (index < value.length) {
          cursor.insertAdjacentText("beforebegin", value[index]);
          index += 1;
        } else {
          window.clearInterval(timer);
          window.setTimeout(function () { cursor.classList.add("fade"); }, 650);
        }
      }, 28);
    });
  }

  var intro = document.querySelector(".intro-decode");
  var introSeen = window.sessionStorage.getItem("fri-intro-seen");
  if (intro && !reduceMotion && !introSeen) {
    window.sessionStorage.setItem("fri-intro-seen", "1");
    var introText = intro.querySelector(".intro-text");
    var originalIntro = introText.textContent.trim();
    var glyphs = "01#/+-·:*░▒▓";
    var introStep = 0;
    var introSteps = 22;
    var introTimer = window.setInterval(function () {
      introStep += 1;
      var limit = (introStep / introSteps) * originalIntro.length;
      introText.textContent = originalIntro.split("").map(function (character, index) {
        if (character === " " || index < limit) return character;
        return glyphs[Math.floor(Math.random() * glyphs.length)];
      }).join("");
      if (introStep >= introSteps) {
        window.clearInterval(introTimer);
        introText.textContent = originalIntro;
        window.setTimeout(function () {
          intro.classList.add("hide");
          runTypewriters(false);
          window.setTimeout(function () { intro.remove(); }, 450);
        }, 130);
      }
    }, 24);
  } else {
    if (intro) intro.remove();
    runTypewriters(reduceMotion);
  }

  var header = document.querySelector(".site-header");
  var nav = document.querySelector(".site-nav");
  var toggle = document.querySelector(".nav-toggle");
  var scrollTop = document.querySelector(".scroll-top");

  function setMenu(open) {
    if (!nav || !toggle) return;
    nav.classList.toggle("is-open", open);
    header.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setMenu(!nav.classList.contains("is-open"));
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a") && window.innerWidth <= 1020) setMenu(false);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 1020) setMenu(false);
    });
  }

  document.addEventListener("click", function (event) {
    document.querySelectorAll(".nav-services[open]").forEach(function (details) {
      if (!details.contains(event.target)) details.removeAttribute("open");
    });
  });

  function updateScrollState() {
    var scrolled = window.scrollY > 24;
    if (header) header.classList.toggle("is-scrolled", scrolled);
    if (scrollTop) scrollTop.classList.toggle("show", window.scrollY > 550);
    var documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    var progress = documentHeight > 0 ? Math.min(1, window.scrollY / documentHeight) : 0;
    var progressTop = document.querySelector(".progress-top");
    if (progressTop) progressTop.style.width = (progress * 100) + "%";
    var railProgress = document.querySelector(".signal-rail .progress");
    if (railProgress) {
      var length = railProgress.getTotalLength();
      railProgress.style.strokeDasharray = length;
      railProgress.style.strokeDashoffset = length * (1 - progress);
    }
    var active = progress < 0.34 ? 0 : progress < 0.7 ? 1 : 2;
    document.querySelectorAll(".signal-rail .node, .signal-rail .label").forEach(function (item, index) {
      item.classList.toggle("active", index % 3 === active);
    });
  }

  updateScrollState();
  window.addEventListener("scroll", updateScrollState, { passive: true });

  if (scrollTop) {
    scrollTop.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  var revealItems = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8%", threshold: 0.08 });

    revealItems.forEach(function (item) { observer.observe(item); });
  } else {
    revealItems.forEach(function (item) { item.classList.add("is-visible"); });
  }

  /* Titres révélés mot par mot, comme sur le site de référence. */
  var splitTitles = document.querySelectorAll(".hero h1, .service-hero h1, .section-head h2, .content-title, .cta-panel h2");
  splitTitles.forEach(function (title) {
    if (title.querySelector(".word-mask")) return;
    var words = title.textContent.trim().split(/\s+/);
    title.textContent = "";
    title.classList.add("split");
    words.forEach(function (word, index) {
      var mask = document.createElement("span");
      mask.className = "word-mask";
      var inner = document.createElement("span");
      inner.className = "word";
      inner.textContent = word;
      inner.style.transitionDelay = (index * 45) + "ms";
      mask.appendChild(inner);
      title.appendChild(mask);
      if (index < words.length - 1) title.appendChild(document.createTextNode(" "));
    });
  });

  if ("IntersectionObserver" in window && !reduceMotion) {
    var splitObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in");
        splitObserver.unobserve(entry.target);
      });
    }, { threshold: 0.25 });
    splitTitles.forEach(function (title) { splitObserver.observe(title); });
  } else {
    splitTitles.forEach(function (title) { title.classList.add("in"); });
  }

  /* Les schémas entrent dans le cadre puis leurs traits se dessinent. */
  var visualItems = document.querySelectorAll(".theme-visual, .process-visual, .zoom-in");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var visualObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in");
        visualObserver.unobserve(entry.target);
      });
    }, { threshold: 0.18, rootMargin: "0px 0px -8%" });
    visualItems.forEach(function (item) { visualObserver.observe(item); });
  } else {
    visualItems.forEach(function (item) { item.classList.add("in"); });
  }

  var drawItems = Array.from(document.querySelectorAll(".draw-on-scroll, .visual-main path, .visual-main rect, .visual-main ellipse"));
  drawItems.forEach(function (item) {
    try {
      var length = item.getTotalLength();
      item.style.strokeDasharray = length;
      item.style.strokeDashoffset = reduceMotion ? 0 : length;
    } catch (error) { /* Les éléments non géométriques sont simplement ignorés. */ }
  });
  if ("IntersectionObserver" in window && !reduceMotion) {
    var drawObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.style.strokeDashoffset = "0";
        drawObserver.unobserve(entry.target);
      });
    }, { threshold: 0.22 });
    drawItems.forEach(function (item, index) {
      item.style.transitionDelay = ((index % 8) * 65) + "ms";
      drawObserver.observe(item);
    });
  }

  /* Halo de signal dans le corps des pages uniquement : le footer reste parfaitement stable. */
  document.querySelectorAll("main .section:not(.contact-section)").forEach(function (section) {
    section.addEventListener("mousemove", function (event) {
      var rect = section.getBoundingClientRect();
      section.style.setProperty("--mx", (event.clientX - rect.left) + "px");
      section.style.setProperty("--my", (event.clientY - rect.top) + "px");
    });
  });

  /* Boutons magnétiques et léger relief des cartes sur pointeur précis. */
  if (finePointer && !reduceMotion) {
    document.querySelectorAll(".btn-primary, .nav-cta").forEach(function (button) {
      button.addEventListener("mousemove", function (event) {
        var rect = button.getBoundingClientRect();
        var x = (event.clientX - rect.left - rect.width / 2) * 0.28;
        var y = (event.clientY - rect.top - rect.height / 2) * 0.28;
        button.style.setProperty("--bx", ((event.clientX - rect.left) / rect.width * 100) + "%");
        button.style.setProperty("--by", ((event.clientY - rect.top) / rect.height * 100) + "%");
        button.style.transform = "translate(" + x + "px," + y + "px)";
      });
      button.addEventListener("mouseleave", function () { button.style.transform = ""; });
    });

    document.querySelectorAll(".service-card, .example-card, .benefit-card, .audience-card, .related-card, .project-card").forEach(function (card) {
      card.addEventListener("mousemove", function (event) {
        var rect = card.getBoundingClientRect();
        var px = (event.clientX - rect.left) / rect.width - 0.5;
        var py = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = "perspective(800px) rotateX(" + (-py * 5).toFixed(2) + "deg) rotateY(" + (px * 5).toFixed(2) + "deg) translateY(-4px)";
      });
      card.addEventListener("mouseleave", function () { card.style.transform = ""; });
    });
  }

  document.querySelectorAll(".btn").forEach(function (button) {
    button.addEventListener("pointerdown", function () { button.classList.add("is-pressed"); });
    ["pointerup", "pointerleave", "pointercancel"].forEach(function (eventName) {
      button.addEventListener(eventName, function () { button.classList.remove("is-pressed"); });
    });
  });

  /* Décodage bref au survol des appels à l'action. */
  document.querySelectorAll(".decode").forEach(function (element) {
    if (element.children.length) return;
    var original = element.textContent;
    var decodeTimer;
    element.addEventListener("mouseenter", function () {
      if (reduceMotion) return;
      var iteration = 0;
      window.clearInterval(decodeTimer);
      decodeTimer = window.setInterval(function () {
        element.textContent = original.split("").map(function (character, index) {
          if (character === " " || index < iteration) return original[index];
          return "01#/+-·:*"[Math.floor(Math.random() * 9)];
        }).join("");
        iteration += Math.max(1, original.length / 13);
        if (iteration >= original.length) {
          window.clearInterval(decodeTimer);
          element.textContent = original;
        }
      }, 26);
    });
    element.addEventListener("mouseleave", function () {
      window.clearInterval(decodeTimer);
      element.textContent = original;
    });
  });

  /* Comparateur accessible avant / après de la refonte Meca Europe. */
  document.querySelectorAll("[data-before-after]").forEach(function (compare) {
    var stage = compare.querySelector(".before-after-stage");
    var range = compare.querySelector("input[type='range']");

    function setCompare(value) {
      var clamped = Math.max(0, Math.min(100, value));
      compare.style.setProperty("--compare", clamped.toFixed(2) + "%");
      if (range) range.value = String(Math.round(clamped));
    }

    function setFromPointer(event) {
      var rect = stage.getBoundingClientRect();
      setCompare(((event.clientX - rect.left) / rect.width) * 100);
    }

    if (range) {
      range.addEventListener("input", function () {
        setCompare(Number(range.value));
      });
    }

    stage.addEventListener("pointerdown", function (event) {
      stage.setPointerCapture(event.pointerId);
      compare.classList.add("is-dragging");
      setFromPointer(event);
    });

    stage.addEventListener("pointermove", function (event) {
      if (stage.hasPointerCapture(event.pointerId)) {
        setFromPointer(event);
      }
    });

    ["pointerup", "pointercancel"].forEach(function (eventName) {
      stage.addEventListener(eventName, function (event) {
        compare.classList.remove("is-dragging");
        if (stage.hasPointerCapture(event.pointerId)) stage.releasePointerCapture(event.pointerId);
      });
    });

    setCompare(34);
  });

  /* Parallaxe très légère : le texte reste stable, seuls les visuels respirent. */
  var parallaxItems = Array.from(document.querySelectorAll("[data-parallax]"));
  var parallaxTicking = false;
  function updateParallax() {
    if (reduceMotion) return;
    parallaxItems.forEach(function (item) {
      var speed = parseFloat(item.dataset.parallax) || 0.025;
      var rect = item.getBoundingClientRect();
      var center = rect.top + rect.height / 2 - window.innerHeight / 2;
      item.style.setProperty("--parallax-y", (-center * speed).toFixed(1) + "px");
    });
    parallaxTicking = false;
  }
  window.addEventListener("scroll", function () {
    if (!parallaxTicking) {
      window.requestAnimationFrame(updateParallax);
      parallaxTicking = true;
    }
  }, { passive: true });
  updateParallax();

  /* Points lumineux qui circulent sur les circuits (hero d’accueil et schémas « Le principe en un coup d’œil »). */
  if (!reduceMotion) {
    document.querySelectorAll(".circuit-pulses").forEach(function (layer) {
      var circuit = layer.closest("svg");
      if (!circuit) return;
      var paths = Array.from(circuit.querySelectorAll(".circuit-path"));
      if (!paths.length) return;
      var pulses = paths.map(function (path, index) {
        var dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        dot.setAttribute("r", "3.2");
        dot.setAttribute("fill", index % 2 ? "#9d6ef0" : "#4fd6e6");
        layer.appendChild(dot);
        return { path: path, length: path.getTotalLength(), dot: dot, offset: index / paths.length, speed: 0.0002 + index * 0.000035 };
      });
      var animateCircuit = function (time) {
        pulses.forEach(function (pulse) {
          var p = (time * pulse.speed + pulse.offset) % 1;
          var point = pulse.path.getPointAtLength(p * pulse.length);
          pulse.dot.setAttribute("cx", point.x);
          pulse.dot.setAttribute("cy", point.y);
          pulse.dot.style.opacity = 0.35 + Math.sin(p * Math.PI) * 0.65;
        });
        window.requestAnimationFrame(animateCircuit);
      };
      window.requestAnimationFrame(animateCircuit);
    });
  }

  document.querySelectorAll(".contact-form").forEach(function (form) {
    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      var status = form.querySelector(".form-status");
      var button = form.querySelector("button[type='submit']");
      var originalLabel = button.textContent;
      status.className = "form-status";
      status.textContent = "Envoi en cours…";
      button.disabled = true;

      try {
        var response = await fetch(form.action, {
          method: form.method,
          body: new FormData(form),
          headers: { Accept: "application/json" }
        });
        if (!response.ok) throw new Error("Form submission failed");
        form.reset();
        status.classList.add("is-success");
        status.textContent = "Votre message a bien été envoyé. Merci !";
      } catch (error) {
        status.classList.add("is-error");
        status.innerHTML = "L’envoi n’a pas abouti. Vous pouvez écrire directement à <a href=\"mailto:fabian.measson.pro@gmail.com\">fabian.measson.pro@gmail.com</a>.";
      } finally {
        button.disabled = false;
        button.textContent = originalLabel;
      }
    });
  });
})();
