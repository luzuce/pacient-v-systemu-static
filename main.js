
function byId(id){ return document.getElementById(id); }
function renderOrgs(list){
  const ul = byId('org-list'); ul.innerHTML='';
  list.forEach(o=>{
    const li=document.createElement('li');
    li.innerHTML=`<div><div><strong>${o.name}</strong></div><div class="small">${o.type} • ${o.diag} • ${o.region}</div></div>
    <a class="small" href="${o.url}" target="_blank">Otevřít</a>`;
    ul.appendChild(li);
  });
  if(list.length===0){ const li=document.createElement('li'); li.innerHTML='<span class="small">Nic nenalezeno.</span>'; ul.appendChild(li); }
}
function applyFilters(){
  const q=byId('q').value.trim().toLowerCase();
  const d=byId('diag').value; const r=byId('region').value;
  renderOrgs(ORGS.filter(o=> (d==='vse'||o.diag===d)&&(r==='vse'||o.region===r)&&(q===''||o.name.toLowerCase().includes(q)) ));
}
function updateLetter(){
  const to=byId('to').value, from=byId('from').value, role=byId('role').value;
  const summary=byId('summary').value, req=byId('request').value, att=byId('attachments').value;
  byId('letter').textContent = `Komu: ${to}

Věc: Stížnost na poskytovanou zdravotní péči

Vážené vedení,

${summary}

Jsem: ${role}.

${req}

Prosím o písemnou odpověď do zákonné lhůty a informaci o přijatých opatřeních.

Přílohy: ${att}

S pozdravem,
${from}`;
}
function copyLetter(){ navigator.clipboard.writeText(byId('letter').textContent); }
document.addEventListener('DOMContentLoaded', ()=>{
  ['q','diag','region'].forEach(id=>byId(id).addEventListener('input',applyFilters)); applyFilters();
  ['to','from','role','summary','request','attachments'].forEach(id=>byId(id).addEventListener('input',updateLetter)); updateLetter();
});
