const $ = (id) => document.getElementById(id);
const svg = (p) => `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
const ICONS = {
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  folder: '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.7-.9l-.8-1.2A2 2 0 0 0 7.9 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>',
  spark: '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/>',
  grad: '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>',
  github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.1-1.4-.4-2.7-1.3-3.7.4-1.1.4-2.4 0-3.5 0 0-1.2 0-3.5 1.5a13.4 13.4 0 0 0-7 0C6.9 2.3 5.7 2.3 5.7 2.3c-.4 1.1-.4 2.4 0 3.5A5.4 5.4 0 0 0 4.5 9.5c0 3.5 3 5.5 6 5.5a4.8 4.8 0 0 0-1 3.5v4"/><path d="M9 18c-4.5 1.5-5-2.5-7-3"/>',
  instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.4a4 4 0 1 1-7.9 1.2 4 4 0 0 1 7.9-1.2zM17.5 6.5h.01"/>',
  facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  chat: '<path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.4L3 21l2-5.6A8.4 8.4 0 1 1 21 11.5z"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/>'
};
const ic = (n) => (ICONS[n] ? svg(ICONS[n]) : "");
const tags = (a) => a.map((t) => `<span class="tag">${t}</span>`).join("");

const extraHtml = (ex) => `
  <div class="extra${ex.plain ? " plain" : ""}">
    ${ex.plain ? "" : ic("spark")}
    <div>${ex.title}<small>${ex.period || ""}</small>${ex.tags ? `<div class="tags">${tags(ex.tags)}</div>` : ""}</div>
  </div>`;

$("timeline").innerHTML = DATA.experience.map((e, i, arr) => {
  const t = arr.length > 1 ? i / (arr.length - 1) : 0;
  const shade = Math.round(17 + t * (170 - 17));
  const extrasList = e.extras || (e.extra ? [e.extra] : []);
  return `
  <article class="tl-item ${e.side}" style="--dot:rgb(${shade},${shade},${shade})">
    <div class="tl-year">${e.year}<small>${e.period || ""}</small></div>
    <div class="tl-body">
      ${e.role ? `
      <div class="card">
        ${e.current ? '<span class="badge">Current</span>' : ""}
        <div class="row"><div><h3>${e.role}</h3><p class="company">${e.company}</p></div><span class="muted small">Details ↗</span></div>
        <div class="tags">${tags(e.tags)}</div>
      </div>` : ""}
      ${extrasList.map(extraHtml).join("")}
    </div>
  </article>`;
}).join("");

$("builds-grid").innerHTML = DATA.builds.map((b) => `
  <a class="card build" href="${b.href}">
    <div class="build-img" ${b.image ? `style="background-image:linear-gradient(180deg,rgba(5,4,15,0) 45%,rgba(5,4,15,.88)),url(${b.image})"` : ""}>
      <b>${b.stat}</b><span class="mono">${b.statLabel}</span>
    </div>
    <div class="build-body">
      <p class="mono violet">${b.meta}</p><h3>${b.title}</h3><p class="muted">${b.text}</p>
      <div class="tags">${tags(b.tags)}</div><span class="more">Read More ↗</span>
    </div>
  </a>`).join("");

$("library-grid").innerHTML = DATA.library.map((l) => `
  <${l.soon ? "div" : "a"} class="card lib ${l.soon ? "soon" : ""}" ${l.soon ? "" : `href="${l.href}"`} style="border-color:rgba(${l.color},.25)">
    <div class="lib-head"><span class="ico">${ic(l.icon)}</span><div><h3>${l.title}</h3><p class="mono violet">${l.sub}</p></div></div>
    <p class="muted small">${l.text}</p>${l.cta ? `<span class="more">${l.cta} ↗</span>` : ""}
  </${l.soon ? "div" : "a"}>`).join("");

$("contact-links").innerHTML = DATA.contacts.map((c) => `<a class="btn" href="${c.href}" target="_blank" rel="noopener">${ic(c.icon)}${c.label}</a>`).join("");

document.querySelectorAll("[data-icon]").forEach((el) => (el.innerHTML = ic(el.dataset.icon)));
$("menu").addEventListener("click", () => $("nav").classList.toggle("open"));
$("nav").addEventListener("click", () => $("nav").classList.remove("open"));

/* ====== Timeline: curved animated spine + scroll-reveal ====== */
function buildTimelineLine() {
  const el = $("timeline");
  if (!el) return null;
  const h = Math.max(el.scrollHeight, 1);
  const mobile = window.innerWidth <= 800;
  const w = 48;
  let d;
  if (mobile) {
    d = `M 24 0 L 24 ${h}`;
  } else {
    const pts = [[24, 0], [40, h * 0.22], [10, h * 0.5], [38, h * 0.76], [20, h]];
    d = `M ${pts[0][0]} ${pts[0][1]} `;
    for (let i = 1; i < pts.length; i++) {
      const [x0, y0] = pts[i - 1], [x1, y1] = pts[i], cy = (y0 + y1) / 2;
      d += `C ${x0} ${cy}, ${x1} ${cy}, ${x1} ${y1} `;
    }
  }
  let ns = "http://www.w3.org/2000/svg";
  let svgEl = el.querySelector(".timeline-line");
  if (!svgEl) {
    svgEl = document.createElementNS(ns, "svg");
    svgEl.setAttribute("class", "timeline-line");
    svgEl.setAttribute("preserveAspectRatio", "none");
    const defs = document.createElementNS(ns, "defs");
    const grad = document.createElementNS(ns, "linearGradient");
    grad.setAttribute("id", "tlGradient");
    grad.setAttribute("x1", "0"); grad.setAttribute("y1", "0");
    grad.setAttribute("x2", "0"); grad.setAttribute("y2", "1");
    grad.innerHTML = `<stop offset="0%" stop-color="#111"/><stop offset="100%" stop-color="#c9c9c9"/>`;
    defs.appendChild(grad);
    svgEl.appendChild(defs);
    const path = document.createElementNS(ns, "path");
    svgEl.appendChild(path);
    el.prepend(svgEl);
  }
  svgEl.setAttribute("viewBox", `0 0 ${w} ${h}`);
  svgEl.style.height = h + "px";
  const path = svgEl.querySelector("path");
  path.setAttribute("d", d);
  const len = path.getTotalLength();
  path.style.strokeDasharray = len;
  if (!path.dataset.drawn) path.style.strokeDashoffset = len;
  return path;
}
let tlPath = buildTimelineLine();
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => { tlPath = buildTimelineLine(); }, 150);
});

if ("IntersectionObserver" in window) {
  const itemObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        itemObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2, rootMargin: "0px 0px -60px 0px" });
  document.querySelectorAll(".tl-item").forEach((item, i) => {
    item.style.transitionDelay = `${Math.min(i * 70, 420)}ms`;
    itemObserver.observe(item);
  });

  const lineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && tlPath) {
        tlPath.style.strokeDashoffset = "0";
        tlPath.dataset.drawn = "1";
        lineObserver.disconnect();
      }
    });
  }, { threshold: 0.05 });
  if ($("timeline")) lineObserver.observe($("timeline"));
} else {
  document.querySelectorAll(".tl-item").forEach((item) => item.classList.add("visible"));
  if (tlPath) tlPath.style.strokeDashoffset = "0";
}
