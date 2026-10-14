import {normalizeProject} from './planner.js';
export const categories=['Document-verified','Student-reported','Proposed','Unknown'];
export function validateWorkspace(data){
 if(!data||data.version!==1||!data.project||typeof data.project!=='object'||Array.isArray(data.project)||!Array.isArray(data.evidence)||!Array.isArray(data.done)||data.evidence.length>500)throw Error('Unsupported workspace format.');
 const project=normalizeProject(data.project);
 const evidence=data.evidence.map((e,i)=>{if(!e||!categories.includes(e.category)||typeof e.claim!=='string'||!e.claim.trim()||(e.category==='Document-verified'&&!String(e.source||'').trim()))throw Error('Invalid evidence entry or missing verification reference.');return {id:`import-${i}`,category:e.category,kind:['general','equipment','permission'].includes(e.kind)?e.kind:'general',claim:e.claim.trim().slice(0,2000),source:String(e.source||'').trim().slice(0,2000)};});
 return {version:1,plannerRevision:2,project,evidence,done:[...new Set((data.plannerRevision===2?data.done:[]).filter(x=>typeof x==='string'&&/^week-\d+$/.test(x)&&Number(x.slice(5))>=1&&Number(x.slice(5))<=project.weeks))],updated:typeof data.updated==='string'&&!Number.isNaN(Date.parse(data.updated))?data.updated:null};
}
