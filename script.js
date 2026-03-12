const projects = [
{
title:"Stage — PEC Zwolle",
cat:"Stage / Social Media",
services:"Matchday visuals, Social design",
tools:"Photoshop, Illustrator",
cover:"images/Peczwolle_01.png",
preview:"images/Peczwolle_10.png",
gallery:[
"images/Peczwolle_01.png",
"images/Peczwolle_03.png",
"images/Peczwolle_10.png",
"images/Peczwolle_12.png",
"images/Peczwolle_15.png",
"images/Peczwolle_17.png",
"images/Peczwolle_21.png",
"images/Peczwolle_24.gif",
"images/Peczwolle_25.png"
],
desc:`In het seizoen 2022/23 liep ik stage bij PEC Zwolle op de afdeling Media Marketing. 
Ik werkte aan verschillende visuele uitingen voor de club zoals matchday visuals, social media content 
en campagnebeelden. Daarnaast werkte ik aan projecten zoals Wallpaper Wednesday, Tiktok visuals en 
materiaal voor de VoetbalAcademie.`
},

{
title:"Game Of Two Halves",
cat:"Editorial design",
services:"Book design, Typography",
tools:"InDesign, Photoshop",
cover:"images/Gameoftwohalves_01.png",
preview:"images/Gameoftwohalves_03.png",
gallery:[
"images/Gameoftwohalves_01.png",
"images/Gameoftwohalves_03.png",
"images/Gameoftwohalves_04.png",
"images/Gameoftwohalves_11.png",
"images/Gameoftwohalves_12.png",
"images/Gameoftwohalves_21.png",
"images/Gameoftwohalves_22.png",
"images/Gameoftwohalves_41.png",
"images/Gameoftwohalves_42.png",
"images/Gameoftwohalves_45.png"
],
desc:`Game of Two Halves is een boekconcept waarin iconische voetbalcommentaar momenten 
worden vastgelegd door middel van beeld en typografie. Op de ene pagina staat het commentaar, 
op de volgende pagina het moment zelf.`
},

{
title:"Loszand Festival 2024",
cat:"Festival identiteit",
services:"Social media design",
tools:"Photoshop, Illustrator",
cover:"images/Loszand_6.png",
preview:"images/Loszand_3.jpg",
gallery:[
"images/Loszand_6.png",
"images/Loszand_3.jpg",
"images/Loszand_4.jpg",
"images/Loszand_5.jpg",
"images/Loszand_1.png",
"images/Loszand_2.png",
"images/Loszand_7.png"
],
desc:`Loszand Festival vroeg mij social media visuals te ontwerpen. 
De stijl combineert de kleuren van zand en water om het zomerse festivalgevoel te versterken.`
},

{
title:"Liquid Liquor",
cat:"Branding / label design",
services:"Packaging design",
tools:"Illustrator",
cover:"images/Liquedliquor_1.png",
preview:"images/Liquedliquor_3.png",
gallery:[
"images/Liquedliquor_1.png",
"images/Liquedliquor_2.png",
"images/Liquedliquor_3.png",
"images/Liquedliquor_4.png"
],
desc:`Voor Liquid Liquor ontwikkelde ik een etiket voor een druivenlikeur. 
Het ontwerp combineert houtstructuren, paarse tinten en handgetekende druiven.`
},

{
title:"Insanity",
cat:"Festival social media",
services:"Concept design",
tools:"Photoshop",
cover:"images/Insanity_1.png",
preview:"images/Insanity_4.png",
gallery:[
"images/Insanity_1.png",
"images/Insanity_2.jpg",
"images/Insanity_3.png",
"images/Insanity_4.png",
"images/Insanity_5.png"
],
desc:`Voor festival Insanity ontwikkelde ik een visueel concept waarbij het logo werd omgezet 
naar een 3D visual gecombineerd met ruimte- en woestijnbeelden.`
},

{
title:"Ines Administratie",
cat:"Logo design",
services:"Brand identity",
tools:"Illustrator",
cover:"images/Inesadministratie_1.png",
preview:"images/Inesadministratie_1.png",
gallery:[
"images/Inesadministratie_1.png"
],
desc:`Voor Ines Administratie ontwierp ik een bedrijfslogo waarbij de letter I 
een centrale rol speelt in het ontwerp.`
},

{
title:"EVNTP",
cat:"Editorial design",
services:"Magazine design",
tools:"InDesign",
cover:"images/Evntp_21.png",
preview:"images/Evntp_22.png",
gallery:[
"images/Evntp_21.png",
"images/Evntp_22.png",
"images/Evntp_23.png",
"images/Evntp_24.png",
"images/Evntp_25.png",
"images/Evntp_27.png",
"images/Evntp_28.png"
],
desc:`Afstudeerproject waarbij ik onderzoek deed naar duurzamere festivalmunten 
en dit presenteerde in de vorm van een magazine.`
},

{
title:"Fight The Evil (Savellix)",
cat:"Music artwork",
services:"Album cover",
tools:"Photoshop",
cover:"images/Fight the evil_01.png",
preview:"images/Fight the evil_02.png",
gallery:[
"images/Fight the evil_01.png",
"images/Fight the evil_02.png",
"images/Fight the evil_03.png",
"images/Fight the evil_04.png",
"images/Fight the evil_07.png"
],
desc:`Album artwork ontworpen voor DJ Savellix voor de track "Fight The Evil".`
},

{
title:"Rise And Unite",
cat:"Music artwork",
services:"Album cover",
tools:"Photoshop",
cover:"images/Riseandunite_01.png",
preview:"images/Riseandunite_02.jpg",
gallery:[
"images/Riseandunite_01.png",
"images/Riseandunite_02.jpg",
"images/Riseandunite_03.png",
"images/Riseandunite_07.jpeg",
"images/Riseandunite_14.jpeg"
],
desc:`Artwork voor de track "Rise and Unite (Insanity Anthem 2021)" van Savellix & TCM.`
}
]

const list=document.getElementById("project-list")

projects.forEach((p,i)=>{
const row=document.createElement("div")
row.className="p-row"
row.innerHTML=`
<div class="p-num">${String(i+1).padStart(2,"0")}</div>
<div class="p-title">${p.title}</div>
<div class="p-cat">${p.cat}</div>
`
row.onclick=()=>openProject(i)
list.appendChild(row)
})

function openProject(i){

const p=projects[i]

document.getElementById("proj-h").innerText=p.title
document.getElementById("ps-title").innerText=p.title
document.getElementById("ps-cat").innerText=p.cat
document.getElementById("ps-serv").innerText=p.services
document.getElementById("ps-tools").innerText=p.tools
document.getElementById("proj-desc").innerText=p.desc

document.getElementById("proj-cover").src=p.cover

const grid=document.getElementById("gal-grid")
grid.innerHTML=""

p.gallery.forEach(img=>{
const el=document.createElement("img")
el.src=img
grid.appendChild(el)
})

document.getElementById("page-home").classList.remove("active")
document.getElementById("page-project").classList.add("active")
}
