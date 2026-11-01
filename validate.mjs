import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const dir=path.resolve('dist'),html=fs.readFileSync(path.join(dir,'index.html'),'utf8');
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
assert.equal(ids.length,new Set(ids).size,'Duplicate HTML IDs');
for(const [,href] of html.matchAll(/(?:href|src)="([^"]+)"/g)){
 if(href.startsWith('#'))assert(ids.includes(href.slice(1)),`Missing anchor ${href}`);
 else if(!/^[a-z]+:/i.test(href))assert(fs.existsSync(path.join(dir,href.split('?')[0])),`Missing asset ${href}`);
}
const state={window:{}};
for(const f of ['config.js','projects.js'])vm.runInNewContext(fs.readFileSync(path.join(dir,f),'utf8'),state);
const projects=state.window.PORTFOLIO_PROJECTS;
assert.equal(projects.length,7);assert.equal(new Set(projects.map(p=>p.id)).size,7);
assert.equal(projects.filter(p=>p.repository).length,2);
for(const p of projects.filter(p=>p.repository))assert(/^https:\/\/github\.com\/Wapiyeymen\/(letter-system-excel-generator|venuems)$/.test(p.repository),'Unverified repository');
for(const p of projects){for(const k of ['title','category','context','role','summary','problem','outcome','note'])assert(p[k],`${p.id} missing ${k}`);for(const m of p.media){assert(m.alt&&m.caption);assert(fs.existsSync(path.join(dir,m.src)),m.src)}}
assert.equal(state.window.PORTFOLIO_CONFIG.linkedin,'https://www.linkedin.com/in/wafiy-aiyman-926940218/');
for(const text of [html,fs.readFileSync(path.join(dir,'projects.js'),'utf8'),fs.readFileSync(path.join(dir,'config.js'),'utf8')])assert(!/dribbble|tel:|Nama Kamu|Kopi Kita|Ledgerly|Rumah Sewa|six years|calendly/i.test(text),'Unapproved/template content');
for(const section of ['home','about','experience','projects','skills','contact'])assert(ids.includes(section));
assert(html.includes('id="copyContactEmail"'));
assert(!html.includes('id="contactForm"'));
const css=fs.readFileSync(path.join(dir,'style.css'),'utf8');
for(const color of ['#F2EBDD','#292820','#625D4C','#D6CDB8','#4F650D'])assert(css.includes(color),`Missing source colour ${color}`);
assert(css.includes('prefers-reduced-motion:reduce'));
const preview=fs.readFileSync(path.join(dir,'preview.js'),'utf8');assert(preview.includes('requestAnimationFrame'));assert(css.includes('pointer-events:none'));
console.log(JSON.stringify({uniqueIds:ids.length,featuredProjects:7,missingReferences:0,templateAndUnapprovedProfileCheck:'passed',palette:'warm ivory and olive',frontendDependencies:0}));

assert.equal(projects.find(p=>p.id==='datacenter').projectUrl,'https://www.coohom.com/pub/modelo/viewer/preview/3FO3HBXNYEW1?hl=en_US');
assert.equal(projects.find(p=>p.id==='datacenter').projectPlatform,'Coohom');
