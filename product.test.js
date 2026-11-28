const assert=require("node:assert/strict");
const fs=require("node:fs");

const app=fs.readFileSync("app.js","utf8");
const index=fs.readFileSync("index.html","utf8");
const sw=fs.readFileSync("sw.js","utf8");
const core=fs.readFileSync("study-core.js","utf8");
const v100=fs.readFileSync("visual-v100.css","utf8");

assert.match(app,/function studyPack\(\)/);
assert.match(app,/function practiceStudyPack\(packId\)/);
assert.match(app,/function reviewStudyPack\(packId\)/);
assert.match(app,/studyPacks/);
assert.match(app,/packContext/);
assert.match(app,/sourcePackId/);
assert.match(app,/lastResult/);
assert.match(app,/source:"practice",sourcePackId:packId/);
assert.match(core,/Array\.isArray\(evidence\.attempts\)/);
assert.match(app,/function accountPage\(\)/);
assert.match(app,/state\.view==="account"\?accountPage\(\)/);
assert.match(app,/source:"tutor-quiz",sourcePackId:packId/);
assert.match(app,/kind:"evidence-review"/);
assert.match(app,/pack.reviewDate=today\(\)/);
assert.match(app,/const preserved=oldPlan\.filter/);

assert.doesNotMatch(app,/“/);
assert.doesNotMatch(app,/— James Clear/);
assert.doesNotMatch(app,/— Helen Hayes/);

assert.ok(index.includes("visual-v100.css?v=100"));
assert.ok(index.includes("visual-v80.css?v=80"));
assert.ok(index.includes("app.js?v=77"));
assert.ok(index.includes('theme-color" content="#176b5e"'));
assert.ok(sw.includes("studysprint-shell-v108-v100"));
assert.ok(sw.includes("visual-v100.css?v=100"));
assert.ok(sw.includes("assets/study-hero.svg"));
assert.ok(sw.includes("assets/plan-visual.svg"));
assert.ok(sw.includes("assets/practice-visual.svg"));
assert.ok(sw.includes("assets/tutor-visual.svg"));
assert.ok(sw.includes("assets/review-visual.svg"));
assert.ok(sw.includes("assets/progress-visual.svg"));
assert.ok(sw.includes("assets/focus-visual.svg"));
assert.ok(sw.includes("assets/account-visual.svg"));

assert.match(app,/class="landing49"/);
assert.match(app,/Know what to do next/);
assert.match(app,/today-simple/);
assert.match(app,/today-next-layout/);
assert.match(app,/toggleTheme/);
assert.match(app,/function openTutorSearch\(\)/);

assert.match(v100,/\.studio-topbar/);
assert.match(v100,/\.today-next-card/);
assert.match(v100,/\.page-visual-band/);
assert.match(v100,/\.studio-mobile-nav/);
assert.match(v100,/prefers-reduced-motion:reduce/);
assert.match(v100,/\.landing49-hero/);
assert.match(v100,/\.tutorgrid/);
assert.match(v100,/\.review-pack-grid/);

console.log("StudySprint product integration tests: PASS");
console.log("StudySprint V100 visual integration tests: PASS");
