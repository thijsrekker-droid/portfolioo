const projects = [
  {
    title: "Festival Identiteit",
    cat: "Branding",
    year: "2024",
    services: "Art Direction, Identity",
    tools: "Illustrator, Photoshop, InDesign",
    desc: "Een visuele identiteit voor een cultureel event, met focus op ritme, typografie en herkenning in zowel print als online uitingen.",
    cover: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1400&q=80"
    ]
  },
  {
    title: "Merkhuisstijl Concept",
    cat: "Identity",
    year: "2024",
    services: "Logo, Visual System",
    tools: "Illustrator, Figma",
    desc: "Een minimalistische merkidentiteit met een rustige, moderne beeldtaal. Ontwikkeld voor consistente toepassing op socials, print en presentatie.",
    cover: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80"
    ]
  },
  {
    title: "Campagne Visuals",
    cat: "Campaign",
    year: "2023",
    services: "Concept, Social Design",
    tools: "Photoshop, InDesign",
    desc: "Serie campagne-uitingen met een duidelijke hiërarchie en sterke visuele herkenbaarheid voor online en offline toepassingen.",
    cover: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1400&q=80"
    ]
  }
];

let currentProjectIndex = 0;

const pages = {
  home: document.getElementById("page-home"),
  about: document.getElementById("page-about"),
  project: document.getElementById("page-project")
};

function activatePage(key) {
  Object.values(pages).forEach(page => page.classList.remove("active"));
  pages[key].classList.add("active");
  window.scrollTo({ top: 0, behavior: "instant" });
}

function showHome() {
  activatePage("home");
}

function showPage(name) {
  if (pages[name]) activatePage(name);
}

function renderProjectList() {
  const list = document.getElementById("project-list");
  list.innerHTML = "";

  projects.forEach((project, index) => {
    const row = document.createElement("button");
    row.className = "p-row reveal";
    row.innerHTML = `
      <div class="p-num">${String(index + 1).padStart(2, "0")}</div>
      <div class="p-title">${project.title}</div>
      <div style="display:flex; gap:24px; align-items:center;">
        <div class="p-cat">${project.cat}</div>
        <div class="p-year">${project.year}</div>
      </div>
    `;
    row.addEventListener("click", () => openProject(index));
    row.addEventListener("mouseenter", () => showPreview(project.cover));
    row.addEventListener("mouseleave", hidePreview);
    list.appendChild(row);
  });

  revealAll();
}

function splitTitle(title) {
  const parts = title.split(" ");
  if (parts.length < 2) return `${title}`;
  const last = parts.pop();
  return `${parts.join(" ")} <span class="thin">${last}</span>`;
}

function openProject(index) {
  currentProjectIndex = index;
  const project = projects[index];

  document.getElementById("proj-h").innerHTML = splitTitle(project.title);
  document.getElementById("ps-title").textContent = project.title;
  document.getElementById("ps-cat").textContent = project.cat;
  document.getElementById("ps-serv").textContent = project.services;
  document.getElementById("ps-tools").textContent = project.tools;
  document.getElementById("proj-desc").textContent = project.desc;

  const cover = document.getElementById("proj-cover");
  cover.src = project.cover;
  cover.alt = project.title;

  const grid = document.getElementById("gal-grid");
  grid.innerHTML = "";
  project.gallery.forEach((src, i) => {
    const item = document.createElement("div");
    item.className = "gi" + (i === 0 ? " wide" : "");
    item.innerHTML = `<img src="${src}" alt="${project.title} beeld ${i + 1}">`;
    grid.appendChild(item);
  });

  const prevIndex = (index - 1 + projects.length) % projects.length;
  const nextIndex = (index + 1) % projects.length;

  document.getElementById("pnb-prev-n").textContent = projects[prevIndex].title;
  document.getElementById("pnb-next-n").textContent = projects[nextIndex].title;

  document.getElementById("pnb-prev").onclick = () => openProject(prevIndex);
  document.getElementById("pnb-next").onclick = () => openProject(nextIndex);

  activatePage("project");
}

const cur = document.getElementById("cur");
const curF = document.getElementById("cur-f");

window.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  if (cur) {
    cur.style.left = `${clientX - 4}px`;
    cur.style.top = `${clientY - 4}px`;
  }
  if (curF) {
    curF.style.left = `${clientX - 17}px`;
    curF.style.top = `${clientY - 17}px`;
  }
});

document.querySelectorAll("a, button, .about-teaser").forEach(el => {
  el.addEventListener("mouseenter", () => cur?.classList.add("big"));
  el.addEventListener("mouseleave", () => cur?.classList.remove("big"));
});

const preview = document.getElementById("preview");
const previewImg = document.getElementById("preview-img");

function showPreview(src) {
  if (!preview || !previewImg || window.matchMedia("(pointer: coarse)").matches) return;
  previewImg.src = src;
  preview.classList.add("visible");
}

function hidePreview() {
  preview?.classList.remove("visible");
}

window.addEventListener("mousemove", (e) => {
  if (!preview || !preview.classList.contains("visible")) return;
  preview.style.left = `${e.clientX + 22}px`;
  preview.style.top = `${e.clientY + 22}px`;
});

function revealAll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("in");
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

renderProjectList();
revealAll();
