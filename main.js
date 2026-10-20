const $ = (id) => document.getElementById(id);
const tags = (a, c = "tag") => a.map((t) => `<span class="${c}">${t}</span>`).join("");

$("timeline").innerHTML = DATA.experience.map((e) => `
  <article class="tl-item">
    <div class="tl-year">${e.year}<small>${e.period || ""}</small></div>
    <div class="card">
      ${e.current ? '<span class="badge">Current</span>' : ""}
      <div class="row"><div><h3>${e.role}</h3><p class="company">${e.company}</p></div><span class="muted small">Details ↗</span></div>
      <div class="tags">${tags(e.tags)}</div>
    </div>
  </article>`).join("");

$("builds-grid").innerHTML = DATA.builds.map((b) => `
  <a class="card build" href="${b.href}">
    <div class="build-img" ${b.image ? `style="background-image:url(${b.image})"` : ""}>
      <b>${b.stat}</b><span class="mono">${b.statLabel}</span>
    </div>
    <div class="build-body">
      <p class="mono violet">${b.meta}</p><h3>${b.title}</h3><p class="muted">${b.text}</p>
      <div class="tags">${tags(b.tags)}</div><span class="more">Read More ↗</span>
    </div>
  </a>`).join("");

$("library-grid").innerHTML = DATA.library.map((l) => `
  <${l.soon ? "div" : "a"} class="card lib ${l.soon ? "soon" : ""}" ${l.soon ? "" : `href="${l.href}"`} style="border-color:rgba(${l.color},.25)">
    <div class="lib-head"><span class="ico">${l.icon}</span><div><h3>${l.title}</h3><p class="mono violet">${l.sub}</p></div></div>
    <p class="muted small">${l.text}</p>${l.cta ? `<span class="more">${l.cta} ↗</span>` : ""}
  </${l.soon ? "div" : "a"}>`).join("");

$("contact-links").innerHTML = DATA.contacts.map((c) => `<a class="btn" href="${c.href}" target="_blank" rel="noopener">${c.label}</a>`).join("");

$("menu").addEventListener("click", () => $("nav").classList.toggle("open"));
$("nav").addEventListener("click", () => $("nav").classList.remove("open"));
