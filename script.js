const T=(a)=>a.map(x=>`<span>${x}</span>`).join('');
const H='Human Resource Information System',L='Logistics',S='SaaS';
const job=(o)=>`<div class="card">${o.cur?'<span class="cur mono">Current</span>':''}<h3>${o.t||'Digital Project Manager'}</h3><div class="co">${o.c||'PT. Sekawan Media Informatika'}</div><div class="tags">${T(o.g||[H,L,S])}</div><span class="det mono">Details ▣</span></div>`;
const yr=(y,d)=>`<div class="yr"><b>${y}</b><small class="mono">${d}</small></div>`;
const rows=[
 [job({cur:1,t:'Digital Product Manager',c:'PT. Sofco Graha',g:[H,'Applied AI',S]}),yr(2026,'2 year · August 2026 - Present')],
 [yr(2024,'1 year · Apr 2023 - Aug 24'),job({})+'<div class="subi">✦ Digital Health Product Manager at Connected Life<small class="mono">1 yr 1 months · August 2026 · Freelance</small></div>'],
 [job({}),yr(2023,'2 year · August 2026 - Present')],
 [job({}),''],
 [yr(2022,'1 year · Apr 2023 - Aug 24'),job({})],
 ['',job({})],
 [job({}),yr(2017,'2 year · August 2026 - Present')],
 [yr(2012,'1 year · Apr 2023 - Aug 24'),job({})]
];
document.getElementById('tl').innerHTML=rows.map((r,i)=>`<div class="row"><div class="cell l">${r[0]}</div><div class="dot"></div><div class="cell r">${r[1]}</div></div>`).join('');

const radar=`<div class="bc dk"><div class="pv"><div style="padding:16px;font-size:9px;font-weight:600">Logistics Radar<div style="font-size:7px;color:#888;font-weight:400">Telegram bot for logistics news</div></div><div style="display:flex;gap:26px;padding:34px 20px 0;font:700 22px Inter;letter-spacing:-.04em"><span>44+</span><span>AI</span><span>8 AM</span></div></div><div class="in"><div class="k mono">Side Project · Personal · AI Tool</div><h4>Logistics Radar: My AI Research Bot</h4><p>A Telegram bot that scans logistics news every morning, scores each story with AI, and sends only what matters.</p><div class="tags">${T(['AI','Telegram Bot','Automation','0→1'])}</div><b class="rm">Read More ▣</b></div></div>`;
const vahan=`<div class="bc"><div class="pv" style="background:#f4f4f4"><div style="padding:10px;font-size:9px;font-weight:700">VahanSync: The Autonomous Logistics Operating System</div><svg viewBox="0 0 300 130" style="width:100%;position:absolute;bottom:0"><g fill="#d0d0d0"><path d="M30 50l60-25 70 10 60 35-30 40-60 10-70-20z"/></g><g fill="#f97316"><circle cx="90" cy="60" r="5"/><circle cx="140" cy="80" r="5"/><circle cx="190" cy="55" r="4"/><circle cx="120" cy="45" r="4"/></g></svg><b style="position:absolute;left:12px;bottom:8px;font-size:22px;letter-spacing:-.04em">₹100Cr</b></div><div class="in"><div class="k mono">Case Study · Logistics · Strategy</div><h4>VahanSync: An Autonomous Logistics OS</h4><p>A zero-touch matchmaking OS that connects shippers to the right vehicle in under 20 minutes.</p><div class="tags">${T([L,'AI/ML','Marketplace','B2B'])}</div><b class="rm">Read More ▣</b></div></div>`;
const set=radar+vahan+radar+vahan;
document.getElementById('tr').innerHTML=set+set;

const lib=[['▭','PM & Startups','24 chapters','The PM Master Guide: frameworks, metrics, strategy, design thinking and technical fundamentals.','Start the guide →'],['✦','Poetry & Writing','54 pieces','Original शायरी, कविता and English poems. Written when PRDs feel too serious.','Read the notebook →'],['▭','Books & Articles','Coming soon','Reads that shifted how I think, and essays on product, life and persistent curiosities.','']];
document.getElementById('lib').innerHTML=lib.map((l,i)=>`<div class="card ${i==2?'dim':''}"><div class="t"><span class="ic">${l[0]}</span><div><h3>${l[1]}</h3><small class="mono">${l[2]}</small></div></div><p>${l[3]}</p>${l[4]?`<a class="mono" href="#">${l[4]} ▣</a>`:''}</div>`).join('');

const m=document.getElementById('menu');
document.getElementById('bg').onclick=()=>m.classList.toggle('open');
m.onclick=()=>m.classList.remove('open');
