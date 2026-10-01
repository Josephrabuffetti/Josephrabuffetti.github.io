const projects=[
  {
    "title": "Virtual cybersecurity lab",
    "kind": "SECURITY FOUNDATIONS",
    "status": "SELF-DIRECTED / 2026",
    "text": "A dedicated environment for hands-on security learning, built with Oracle VirtualBox and Kali Linux.",
    "label": "01 / VIRTUAL ENVIRONMENT",
    "diagram": "network",
    "sections": [
      [
        "THE OBJECTIVE",
        "Create a virtual cybersecurity testing environment for practical study and experimentation."
      ],
      [
        "THE IMPLEMENTATION",
        "Installed and configured Kali Linux in Oracle VirtualBox, managing virtual machine storage, system resources, and network configuration."
      ],
      [
        "THE FOUNDATION",
        "Virtualization, Linux setup, resource allocation, and networking fundamentals."
      ],
      [
        "PROJECT STATUS",
        "Lab deployment documented in the résumé. A public walkthrough and repository are not yet available."
      ]
    ],
    "note": "Self-directed learning project. Diagram is an architectural illustration, not a screenshot."
  },
  {
    "title": "Anchor",
    "kind": "PYTHON / TKINTER / SQLITE",
    "status": "IN DEVELOPMENT",
    "text": "An offline desktop reminder app with natural-language input, local storage, and a gentler approach to getting things done.",
    "label": "02 / LOCAL-FIRST SOFTWARE",
    "diagram": "anchor",
    "sections": [
      [
        "THE IDEA",
        "Reduce the friction of recording everyday reminders, with a friendly interface and no required online account."
      ],
      [
        "THE IMPLEMENTATION",
        "A Python/Tkinter desktop app with SQLite storage, a bounded offline date-and-time parser, and a review-before-save workflow."
      ],
      [
        "DESIGN TRADEOFFS",
        "Local storage avoids app network calls. Data is unencrypted on disk; reminders require the app to remain open and the computer awake."
      ],
      [
        "CURRENT STATUS",
        "The prototype supports search, rescheduling, snooze, and completion history. Accessibility and real-world alert delivery still require hands-on validation."
      ]
    ],
    "note": "Development approach: AI-assisted implementation and iteration, with documented design tradeoffs and remaining validation work. Prototype; not a production release."
  },
  {
    "title": "Paycheck calculators",
    "kind": "PYTHON / JAVA",
    "status": "COURSEWORK / PORTFOLIO EXTENSION",
    "text": "Turning daily hours and pay rates into readable payroll results, with conditional logic and checks for invalid inputs.",
    "label": "03 / LOGIC IN PRACTICE",
    "diagram": "flow",
    "sections": [
      [
        "THE CHALLENGE",
        "Translate a payroll problem into clear steps: gather daily hours, calculate total hours, and calculate pay."
      ],
      [
        "THE FOUNDATION",
        "Java coursework calculates weekly gross pay and prints a receipt. The Python portfolio extension adds decimal arithmetic, explicit input validation, and automated tests across three Python versions."
      ],
      [
        "WHAT TO EXPLORE",
        "Try the browser demonstration below. It adapts the documented weekly gross-pay calculation with editable daily hours and an hourly rate."
      ],
      [
        "IMPLEMENTATION NOTE",
        "The embedded demonstration runs in JavaScript. It illustrates the Python/Java project logic; it does not execute the original Python program."
      ]
    ],
    "note": "Educational gross-pay demonstration. It excludes taxes, deductions, and overtime premiums."
  }
];
const diagrams={network:`<svg viewBox="0 0 420 240" fill="none" aria-label="Illustrative system network diagram" role="img"><g stroke="#64764b"><path d="M210 120L60 55M210 120L350 40M210 120L350 190M210 120L80 200M60 55L80 200M350 40L350 190"/><circle cx="210" cy="120" r="77" stroke-dasharray="3 8"/></g><g fill="#21271b" stroke="#d0fa69"><rect x="182" y="92" width="56" height="56" rx="10"/><circle cx="60" cy="55" r="12"/><circle cx="350" cy="40" r="12"/><circle cx="350" cy="190" r="12"/><circle cx="80" cy="200" r="12"/></g><path d="M200 120l7 7 15-16" stroke="#d0fa69" stroke-width="2"/></svg>`,layers:`<svg viewBox="0 0 420 240" fill="none" role="img" aria-label="Illustrative layered analysis diagram"><g stroke="#64764b"><path d="M70 150l140-60 140 60-140 65zM70 110l140-60 140 60-140 65z"/></g><path d="M70 70l140-60 140 60-140 65z" stroke="#d0fa69"/><path d="M210 10v205" stroke="#a6c565" stroke-dasharray="3 6"/><circle cx="210" cy="70" r="7" fill="#d0fa69"/></svg>`,flow:`<svg viewBox="0 0 420 240" fill="none" role="img" aria-label="Illustrative input processing output diagram"><path d="M75 120h270" stroke="#64764b"/><g fill="#21271b" stroke="#d0fa69"><rect x="30" y="80" width="80" height="80" rx="10"/><rect x="170" y="80" width="80" height="80" rx="10"/><rect x="310" y="80" width="80" height="80" rx="10"/></g><g fill="#d0fa69" font-family="monospace" text-anchor="middle" font-size="22"><text x="70" y="128">IN</text><text x="210" y="128">{ }</text><text x="350" y="128">OUT</text></g></svg>`};

document.querySelector('#projects').innerHTML=projects.map((p,i)=>`<article class="project"><div class="project-visual ${p.diagram==='anchor'?'anchor-visual':''}"><span class="visual-label">${p.label}</span>${p.diagram==='anchor'?'<img src="anchor-logo.png" width="344" height="190" alt="Anchor — Remember it. Don’t carry it." loading="lazy">':diagrams[p.diagram]}<span class="visual-caption">${p.diagram==='anchor'?'ORIGINAL PROJECT ARTWORK':'CONCEPTUAL DIAGRAM'}</span></div><div class="project-info"><div class="project-meta"><span>${p.kind}</span><span>${p.status}</span></div><h3>${p.title}</h3><p>${p.text}</p><button data-project="${i}">${i===2?'Read the story & try the demo':'Explore the project'}</button></div></article>`).join('');
const modal=document.querySelector('dialog');let opener;
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{opener=button;const index=Number(button.dataset.project),p=projects[index];document.querySelector('#dialog-title').textContent=p.title;document.querySelector('.dialog-intro').textContent=p.text;document.querySelector('.case-grid').innerHTML=p.sections.map(([title,text],i)=>`<section><span>0${i+1} / ${title}</span><p>${text}</p></section>`).join('');document.querySelector('.dialog-note').textContent=p.note;document.querySelector('#demo').innerHTML=index===2?`<p><a href="https://github.com/Josephrabuffetti/paycheck-calculator" target="_blank" rel="noopener noreferrer">View Python source, tests & documentation on GitHub ↗</a></p><form id="payroll"><h3>Try the gross-pay calculator</h3><p class="muted">Edit the daily hours and hourly rate to see the calculation.</p><div class="hours">${['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((day,i)=>`<label>${day}<input name="day${i}" type="number" min="0" max="24" step="0.01" required value="${[5.75,6.5,8,7.25,6,0,0][i]}"></label>`).join('')}</div><label class="rate">Hourly rate ($)<input name="rate" type="number" min="0" max="100000" step="0.01" required value="16.50"></label><div class="pay-results" aria-live="polite"><div><span>Total hours</span><strong id="total-hours">33.5</strong></div><div><span>Gross pay</span><strong id="gross-pay">$552.75</strong></div></div><p id="pay-error" role="status"></p></form>`:'';if(index===2)document.querySelector('#payroll').addEventListener('input',updatePay);modal.showModal();modal.scrollTop=0}));
function calculatePay(hours,rate){return{hours:hours.reduce((a,b)=>a+b,0),gross:hours.reduce((a,b)=>a+b,0)*rate}}
function updatePay(){const form=document.querySelector('#payroll'),inputs=[...form.querySelectorAll('input')];if(!inputs.every(i=>i.value.trim()!==''&&i.validity.valid&&Number.isFinite(Number(i.value)))){document.querySelector('#pay-error').textContent='Enter daily hours from 0 to 24 and a rate from $0 to $100,000.';document.querySelector('#total-hours').textContent='—';document.querySelector('#gross-pay').textContent='—';return}document.querySelector('#pay-error').textContent='';const result=calculatePay(inputs.slice(0,7).map(i=>Number(i.value)),Number(inputs[7].value));document.querySelector('#total-hours').textContent=Number(result.hours.toFixed(2));document.querySelector('#gross-pay').textContent=new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(result.gross)}
document.addEventListener('submit',e=>{if(e.target.id==='payroll')e.preventDefault()});document.querySelector('.close').addEventListener('click',()=>modal.close());modal.addEventListener('click',event=>{if(event.target===modal){const r=modal.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)modal.close()}});modal.addEventListener('close',()=>opener?.focus());
