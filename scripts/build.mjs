import {mkdir,copyFile,rm} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true}); await mkdir('dist');
for(const file of ['index.html','styles.css','src/app.js','src/planner.js','favicon.svg']) await copyFile(file,`dist/${file.split('/').pop()}`);
console.log('Built static application in dist/');
