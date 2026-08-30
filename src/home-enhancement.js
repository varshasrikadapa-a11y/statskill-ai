/* Home-only progressive enhancement. It waits for the existing React Landing page,
   preserves the current app logic, and adds the richer storytelling sections. */
(function(){
  const courses=[
    ['OFFICIAL STATISTICS','Sampling Design Fundamentals','NSSTA • 6 hours','https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=88'],
    ['DATA QUALITY','Data Quality Framework','MoSPI / NSS • 4.5 hours','https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=88'],
    ['STATISTICAL COMPUTING','Advanced Survey Estimation','NSSTA • 8 hours','https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&w=1200&q=88']
  ];

  function build(){
    const main=document.querySelector('main');
    const roles=document.querySelector('.roles');
    if(!main||!roles||main.querySelector('.ss-story')) return;

    roles.insertAdjacentHTML('afterend', `
      <section class="ss-story">
        <div class="ss-story-inner">
          <div class="ss-story-copy">
            <small>LEARNING IN THE FLOW OF WORK</small>
            <h2>Turn capability into confidence.</h2>
            <p>StatSkill AI connects competency evidence, role requirements, learning and assessment into one continuous journey for India's statistical workforce.</p>
          </div>
          <div class="ss-story-card"><strong>360°</strong><span>capacity-building loop — from individual learning to workforce intelligence</span></div>
        </div>
      </section>
      <section class="ss-stats">
        <div class="ss-stats-inner">
          <span class="ss-stats-label">THE SCALE OF THE MISSION</span>
          <h2>Learning infrastructure designed for a national workforce.</h2>
          <div class="ss-stat-grid">
            <div class="ss-stat"><span class="num" data-count="172000">0</span><span class="label">Learners onboarded</span></div>
            <div class="ss-stat"><span class="num" data-count="6271">0</span><span class="label">Courses and learning resources</span></div>
            <div class="ss-stat"><span class="num" data-count="15058531">0</span><span class="label">Learning completions</span></div>
            <div class="ss-stat"><span class="num" data-count="1629660">0</span><span class="label">Monthly active learners</span></div>
          </div>
        </div>
      </section>
      <section class="ss-courses">
        <div class="ss-courses-inner">
          <div class="ss-course-head">
            <div><span class="eyebrow">CURATED LEARNING</span><h2>Learning paths built around real statistical work.</h2></div>
            <p>Move from a competency gap to the next best learning action with role-aware recommendations.</p>
          </div>
          <div class="ss-course-track">
            ${courses.map((c,i)=>`<article class="ss-course"><div class="ss-course-image" style="background-image:url('${c[3]}')"></div><div class="ss-course-body"><small>${c[0]}</small><h3>${c[1]}</h3><div class="ss-course-meta"><span>${c[2]}</span><span>★ 4.${7+i}</span></div><div class="ss-course-arrow"><span>Explore course</span><span>→</span></div></div></article>`).join('')}
          </div>
        </div>
      </section>
      <section class="ss-ai">
        <div class="ss-ai-inner">
          <div class="ss-ai-copy"><small>STATSKILL INTELLIGENCE</small><h2>Learning that understands your role.</h2><p>The AI layer connects competency, skills, learning, assessment and workforce signals — while keeping recommendations explainable and grounded in approved material.</p><button class="primary" type="button">Explore AI Advisor →</button></div>
          <div class="ss-ai-visual">
            <div class="ss-ai-core"><div><b>AI</b><span>StatSkill Intelligence</span></div></div>
            <div class="ss-node n1">Competency</div><div class="ss-node n2">Learning</div><div class="ss-node n3">Assessment</div><div class="ss-node n4">Workforce</div><div class="ss-node n5">Skills</div>
          </div>
        </div>
      </section>`);

    animateCounters();
  }

  function animateCounters(){
    const nums=[...document.querySelectorAll('.ss-stat .num')];
    if(!nums.length) return;
    const format=n=>n.toLocaleString('en-IN');
    const io=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(!entry.isIntersecting||entry.target.dataset.done) return;
      entry.target.dataset.done='1';
      const target=Number(entry.target.dataset.count),start=performance.now(),duration=1300;
      const tick=now=>{const p=Math.min(1,(now-start)/duration);entry.target.textContent=format(Math.floor(target*(1-Math.pow(1-p,3))));if(p<1)requestAnimationFrame(tick)};
      requestAnimationFrame(tick);
    }),{threshold:.35});
    nums.forEach(n=>io.observe(n));
  }

  function nav(){
    const top=document.querySelector('.top');
    if(!top||top.dataset.enhanced) return;
    top.dataset.enhanced='1';
    const update=()=>top.classList.toggle('is-scrolled',window.scrollY>60);
    window.addEventListener('scroll',update,{passive:true});update();
  }

  function run(){build();nav()}
  const observer=new MutationObserver(run);
  observer.observe(document.body,{childList:true,subtree:true});
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',run); else setTimeout(run,0);
})();
