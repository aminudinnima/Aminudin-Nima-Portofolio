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

$("timeline").innerHTML = DATA.experience.map((e) => `
  <article class="tl-item ${e.side}">
    <div class="tl-year">${e.year}<small>${e.period || ""}</small></div>
    <div class="tl-body">
      <div class="card">
        ${e.current ? '<span class="badge">Current</span>' : ""}
        <div class="row"><div><h3>${e.role}</h3><p class="company">${e.company}</p></div><span class="muted small">Details ↗</span></div>
        <div class="tags">${tags(e.tags)}</div>
      </div>
      ${e.extra ? `<div class="extra">${ic("spark")}<div>${e.extra.title}<small>${e.extra.period}</small></div></div>` : ""}
    </div>
  </article>`).join("");

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
