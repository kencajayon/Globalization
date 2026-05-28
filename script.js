const TOPICS = [
  { id:'internet', label:'Global Internet Access', tag:'Infrastructure', stat:'5.4B', statLabel:'users online worldwide', color:'#4db8ff',
    image:'images/global-internet-access.png',
    imageAlt:'Hand holding a glowing digital globe representing global internet connectivity',
    collageAlts:['Digital globe representing global connectivity','Data center servers powering the internet','Network cables and infrastructure','Person using laptop connected online'],
    desc:'Over 5.4 billion people are now online, connecting individuals across every continent through shared digital infrastructure.',
    points:['5.4 billion people — 67% of the world — are now online','Asia-Pacific has the most internet users of any region','Mobile phones are the primary access method in Africa and Southeast Asia','Submarine cables carry 95% of international internet traffic','Average global internet speed has increased 20× in the past decade'],
    pages:[
      { title:'Background', paragraphs:[
        'Global internet access is the foundation of digital globalization. When people can connect, they can learn, work, trade, and participate in global communities in real time.',
        'Today, more than 5.4 billion people are online — about two-thirds of the world. That progress is real, but access is still uneven across regions, income levels, and communities.',
        'Internet access is not just “having Wi‑Fi.” It also depends on affordable data, reliable devices, and the skills to use digital tools safely and effectively.',
        'From classrooms in cities to island communities using prepaid mobile data, reliable internet shapes how Filipino students learn, families connect, and workers join the global digital economy.'
      ]},
      { title:'How it works', paragraphs:[
        'Most international data travels through physical infrastructure: fiber networks on land and submarine cables under oceans. Satellites help in remote areas, but cables still carry the vast majority of global traffic.',
        'For everyday users, connection quality depends on both backbone infrastructure and the “last mile” link to homes, schools, and workplaces.'
      ], bullets:['Undersea cables connect continents and carry most international traffic.','Mobile broadband expands access quickly where fixed fiber is costly.','Local networks and routers determine real-world speed and reliability.'] },
      { title:'Examples & context', paragraphs:[
        'Governments and companies expand access through community networks, public Wi‑Fi, and 4G/5G rollouts. Schools and libraries often become the first reliable access point in underserved areas.',
        'In the Philippines, mobile-first usage is common. Many students and workers rely on prepaid data, which makes affordability and signal quality especially important for daily life.'
      ], bullets:['Public and private projects improve coverage in rural and island communities.','Connectivity supports online jobs, e-commerce, and digital government services.'] },
      { title:'Challenges & takeaways', paragraphs:[
        'Access can still be uneven because of cost, geography, and policy gaps. Building towers or laying fiber is only the first step — people also need affordable plans and digital literacy.',
        'Closing the access gap means investing in infrastructure while reducing barriers so connection becomes opportunity, not exclusion.'
      ], bullets:['Affordability matters as much as coverage.','Digital skills help people turn access into real outcomes.'] }
    ] },
  { id:'social', label:'Social Media & Culture', tag:'Culture', stat:'150+', statLabel:'countries reached by major platforms', color:'#6ba3d4',
    image:'images/social-media-culture.png',
    imageAlt:'Young woman using smartphone surrounded by social media platform icons',
    collageAlts:['Social media apps on a smartphone screen','Creator filming content for online platforms','Friends sharing moments together','Team collaborating on digital content'],
    desc:'Platforms like TikTok, YouTube, and Instagram spread ideas and trends worldwide, reshaping how cultures interact across borders.',
    points:['TikTok reaches users in 150+ countries and 75 languages','K-pop, anime, and Filipino creators have found global audiences','Social media enables real-time communication during global crises','Misinformation can spread at the same speed as accurate news','Platforms adapt to local languages and norms to expand globally'],
    pages:[
      { title:'Background', paragraphs:[
        'Social media connects cultures at a scale that was impossible before the internet. A trend, song, or idea can move from one country to the world in hours.',
        'Platforms like TikTok, YouTube, and Instagram reshape how people express identity, follow news, and build communities across borders.',
        'This global reach creates new opportunities for creators, but it also changes how culture is shared, copied, and understood.',
        'For many young people, social platforms are spaces for identity, creativity, activism, and building communities that can span countries in a single day.'
      ]},
      { title:'How it works', paragraphs:[
        'Most platforms use recommendation algorithms that suggest content based on engagement signals such as watch time, likes, comments, and shares.',
        'Because feeds are personalized, two users in the same country may see very different versions of “what is trending.”'
      ], bullets:['Virality depends on networks: who shares content, when, and to whom.','Moderation rules and local laws shape what appears in each region.','Platform design can amplify both creativity and harmful content.'] },
      { title:'Examples & context', paragraphs:[
        'K-pop fandoms, anime communities, and Filipino creators show how local culture can find global audiences without traditional media gatekeepers.',
        'Social media also plays a practical role during disasters and major events, helping communities coordinate aid and share urgent updates in real time.'
      ], bullets:['Creators can earn through ads, sponsors, and digital products.','Translation and subtitles help content cross language barriers.'] },
      { title:'Challenges & takeaways', paragraphs:[
        'The same speed that spreads culture can spread misinformation, harassment, and privacy risks. Users need skills to evaluate what they see online.',
        'Healthy digital participation means balancing openness with responsibility — for platforms, governments, and everyday users.'
      ], bullets:['Verify sources before sharing sensitive information.','Understand how algorithms shape what you see.'] }
    ] },
  { id:'ecommerce', label:'E-Commerce', tag:'Economy', stat:'$6.3T', statLabel:'global e-commerce revenue (2024)', color:'#5ac4b8',
    image:'images/e-commerce.png',
    imageAlt:'Laptop showing online store dashboard with shopping cart, credit card, and shipping boxes',
    collageAlts:['Customer paying online at checkout','Warehouse packages ready for shipping','Online shopping on a laptop','Delivery boxes arriving at a doorstep'],
    desc:'Digital marketplaces allow anyone to buy and sell goods across international borders without a traditional storefront.',
    points:['Global e-commerce revenue reached $6.3 trillion in 2024','Shopee dominates Southeast Asia; Alibaba leads in China','Cross-border commerce enables small businesses to sell internationally','Logistics networks are the backbone of global online retail',"The Philippines' e-commerce sector grew over 25% annually"],
    pages:[
      { title:'Background', paragraphs:[
        'E-commerce moves buying and selling online, allowing businesses to reach customers far beyond a physical storefront.',
        'Global e-commerce has grown into a multi-trillion-dollar economy, powered by marketplaces, digital payments, and international logistics.',
        'For small sellers, online platforms can reduce startup costs and open access to national and global markets.',
        'Marketplace apps, digital payments, and delivery networks have made cross-border shopping feel local — helping micro-businesses compete beyond their physical location.'
      ]},
      { title:'How it works', paragraphs:[
        'A typical e-commerce flow combines three systems: a storefront platform, payment processing, and delivery logistics.',
        'Customer trust is built through reviews, secure checkout, clear return policies, and reliable fulfillment.'
      ], bullets:['Storefronts list products, manage inventory, and run promotions.','Payments may include cards, e-wallets, bank transfers, or cash on delivery.','Warehousing and last-mile delivery determine speed and cost.'] },
      { title:'Examples & context', paragraphs:[
        'In Southeast Asia, mobile shopping is common and cash-on-delivery remains popular in many communities.',
        'Filipino sellers often combine social media marketing with marketplace listings to reach customers nationwide and, in some cases, abroad.'
      ], bullets:['Cross-border selling increases product choice but adds customs and shipping complexity.','Digital tools help micro-businesses track orders and customer messages.'] },
      { title:'Challenges & takeaways', paragraphs:[
        'E-commerce growth also brings fraud risks, product returns, and sustainability concerns around packaging and delivery emissions.',
        'Long-term success depends on consumer protection, secure payments, and trustworthy seller practices.'
      ], bullets:['Fake listings and scams require verification and enforcement.','Reliable logistics builds repeat customers.'] }
    ] },
  { id:'remote', label:'Remote Work', tag:'Work', stat:'300M+', statLabel:'remote workers enabled by technology', color:'#7b9fd4',
    image:'images/remote-work.png',
    imageAlt:'Woman working remotely from home office on a video conference call',
    collageAlts:['Video conference call with remote teammates','Home office desk setup for remote work','Collaborative team working together','Laptop used for flexible remote work'],
    desc:'Workers can now collaborate across continents from home, redefining employment and productivity on a global scale.',
    points:['The COVID-19 pandemic normalized remote work globally','Filipino BPO workers serve clients in the US, UK, and Australia','Platforms like Upwork connect global employers with talent','Remote work reduces the need to migrate for better jobs','Time zones are managed as an advantage for 24/7 productivity'],
    pages:[
      { title:'Background', paragraphs:[
        'Remote work allows people to contribute to companies across borders without relocating. It changes where talent lives and how teams organize day-to-day work.',
        'The COVID-19 pandemic accelerated this shift globally, proving that many jobs can be done effectively outside a traditional office.',
        'For countries like the Philippines, remote work connects local talent to international clients and employers.',
        'Hybrid schedules now blend office collaboration with home flexibility, changing how teams communicate, manage projects, and measure productivity.'
      ]},
      { title:'How it works', paragraphs:[
        'Remote teams rely on communication tools (chat and video), collaboration platforms (documents and project boards), and secure access systems.',
        'Successful remote work depends on clear expectations, documented processes, and trust between managers and employees.'
      ], bullets:['Async communication reduces unnecessary meetings.','Cloud files replace “ask someone at the next desk.”','VPN and security policies protect company data outside the office.'] },
      { title:'Examples & context', paragraphs:[
        'BPO and online freelancing are strong examples of the Philippines participating in the global workforce through digital platforms.',
        'Some teams use time-zone differences as an advantage, passing tasks across regions for near 24/7 progress.'
      ], bullets:['Freelance platforms match skills with global demand.','Hybrid models combine office culture with remote flexibility.'] },
      { title:'Challenges & takeaways', paragraphs:[
        'Remote work can blur work-life boundaries, create isolation, and expose inequality when some jobs cannot be done remotely.',
        'Healthy remote culture requires structure, reliable tools, and support for employee wellbeing.'
      ], bullets:['Reliable internet and proper equipment are essential.','Outcome-based management works better than “online presence” alone.'] }
    ] },
  { id:'divide', label:'The Digital Divide', tag:'Equity', stat:'2.6B', statLabel:'people still without internet access', color:'#a8947a',
    image:'images/equality.png',
    imageAlt:'People in a city crosswalk connected through social media and digital platforms',
    collageAlts:['Rural landscape where connectivity is limited','Students learning with shared classroom resources','Books and study materials for digital literacy','Diverse community members in an urban setting'],
    desc:'Not everyone benefits equally from digital globalization — billions remain offline, deepening global inequality.',
    points:['2.6 billion people have no internet access','Rural areas in wealthy nations often have poor connectivity','The divide deepens economic and educational inequality','Initiatives like Starlink aim to reach remote regions','Digital literacy is a second layer of the divide'],
    pages:[
      { title:'Background', paragraphs:[
        'The digital divide is the gap between people who can access and use digital technology and those who cannot.',
        'It affects education, employment, healthcare information, and civic participation — especially for low-income, rural, elderly, and disabled communities.',
        'Even in connected countries, inequality persists when data plans are expensive or devices are outdated.',
        'Closing these gaps requires affordable access, inclusive design, and training so people can use technology confidently for school, work, and daily life.'
      ]},
      { title:'How it works', paragraphs:[
        'Being “near coverage” does not always mean being online. High prices, unstable power, weak devices, and low digital literacy can still block participation.',
        'Over time, these gaps compound: people with weaker access fall further behind in skills, income, and opportunities.'
      ], bullets:['Students struggle when learning materials move online without support.','Small businesses lose customers if they cannot sell digitally.','Skills gaps limit safe and effective tool use.'] },
      { title:'Examples & context', paragraphs:[
        'Rural communities, island provinces, and low-income households often face the strongest barriers to reliable connectivity.',
        'Programs such as community Wi‑Fi, subsidized data, device lending, and local-language training can reduce these gaps.'
      ], bullets:['Shared access points can serve schools and barangays.','Affordable devices widen participation for families.'] },
      { title:'Challenges & takeaways', paragraphs:[
        'Closing the divide requires more than installing infrastructure. It needs sustained investment in affordability, accessibility, and education.',
        'Progress should be measured by outcomes — learning, jobs, and wellbeing — not only by coverage maps.'
      ], bullets:['Support teachers, workers, and families with digital skills training.','Design services for people with disabilities and limited literacy.'] }
    ] },
  { id:'ai', label:'AI & Automation', tag:'Innovation', stat:'100M', statLabel:'ChatGPT users in 2 months', color:'#8a9bb8',
    image:'images/ai-automation.png',
    imageAlt:'Wireframe robotic hand and human hand reaching to connect — AI and human collaboration',
    collageSlotOverrides:{
      1:'https://loremflickr.com/760/520/programming,software/all?lock=ai-unique-2'
    },
    collageAlts:['AI visualization and neural network concept','Robotic arm used in automation','Computer chip powering machine learning','Technology shaping future automation'],
    desc:'Artificial intelligence is reshaping global labor markets and accelerating cross-border innovation at unprecedented speed.',
    points:['AI translation breaks down language barriers in real time','ChatGPT reached 100 million users in just 2 months','Automation displaces some jobs while creating new ones in tech','Smaller countries can leapfrog industries via digital economies','AI regulation is now a major international policy topic'],
    pages:[
      { title:'Background', paragraphs:[
        'Artificial intelligence uses data and algorithms to recognize patterns, make predictions, and generate content at scale.',
        'From translation and recommendations to chatbots and image tools, AI is now embedded in apps used by billions of people worldwide.',
        'Its rapid adoption is changing productivity, creativity, and the skills valued in modern workplaces.',
        'Schools, companies, and governments are now shaping rules for responsible AI use — balancing innovation with safety, privacy, and fair access to new tools.'
      ]},
      { title:'How it works', paragraphs:[
        'Many modern AI systems are trained on large datasets, then tuned to perform tasks such as answering questions, labeling images, or drafting text.',
        'Outputs are probabilistic — the model predicts likely responses rather than guaranteed facts — so human review remains important.'
      ], bullets:['Training requires data, computing power, and evaluation.','Bias can appear when training data is incomplete or unbalanced.','Guardrails and policies reduce harmful or unsafe outputs.'] },
      { title:'Examples & context', paragraphs:[
        'AI supports customer service, content drafting, translation, and accessibility features such as captions and voice tools.',
        'In education and work, it can help summarize readings or organize ideas — but users still need to verify accuracy and maintain originality.'
      ], bullets:['Translation tools reduce language barriers for global teams.','Automation speeds up repetitive document and request processing.'] },
      { title:'Challenges & takeaways', paragraphs:[
        'AI also introduces risks: misinformation, privacy concerns, job disruption, and unclear accountability when systems make mistakes.',
        'Responsible use means transparency, safety checks, and investing in skills so people collaborate with AI instead of being left behind.'
      ], bullets:['Always verify AI outputs before relying on them.','Protect sensitive personal and organizational data.'] }
    ] }
];

function topicCollageImages(t){
  const tagsByTopic = {
    internet:['internet,technology','server,network','cable,infrastructure','laptop,computer'],
    social:['smartphone,social','camera,video','friends,people','teamwork,office'],
    ecommerce:['shopping,store','warehouse,package','laptop,shopping','delivery,box'],
    remote:['videocall,meeting','homeoffice,desk','teamwork,collaboration','laptop,work'],
    divide:['rural,landscape','education,classroom','books,study','community,people'],
    ai:['artificialintelligence,technology','robot,automation','computer,chip','technology,future']
  };
  const tags = tagsByTopic[t.id] || ['technology,digital','network,computer','data,server','global,world'];
  const alts = (t.collageAlts && t.collageAlts.length >= 4)
    ? t.collageAlts.slice(0, 4)
    : tags.map((_, i) => `${t.imageAlt || t.label} — view ${i + 1}`);
  const overrides = t.collageSlotOverrides || {};
  return tags.map((tag, i) => ({
    src: overrides[i] !== undefined
      ? overrides[i]
      : `https://loremflickr.com/760/520/${tag}/all?lock=${t.id}-${i}`,
    fallback: `https://picsum.photos/seed/dg-${t.id}-collage-${i + 1}/760/520`,
    alt: alts[i]
  }));
}

function topicImgUrl(url, width){
  if(!url) return url;
  if(/^https?:\/\/(picsum\.photos|loremflickr\.com)/i.test(url)) return url;
  const id = url.match(/photo-([a-z0-9-]+)/i);
  if(!id) return url;
  return `https://images.unsplash.com/photo-${id[1]}?w=${width||960}&q=80&auto=format&fit=crop`;
}

const imagePreloadCache = new Map();

function preloadImage(url){
  if(!url) return Promise.resolve(false);
  if(imagePreloadCache.has(url)) return imagePreloadCache.get(url);
  const promise = new Promise(resolve => {
    const img = new Image();
    img.referrerPolicy = 'no-referrer';
    img.decoding = 'async';
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
  imagePreloadCache.set(url, promise);
  return promise;
}

function getTopicImageUrls(t){
  const collage = topicCollageImages(t);
  const urls = [
    topicImgUrl(t.image, 1200),
    topicImgUrl(t.image, 960),
    topicImgUrl(t.image, 400),
    ...collage.map(c => c.src),
    ...collage.map(c => c.fallback)
  ];
  return [...new Set(urls.filter(Boolean))];
}

function preloadTopicImages(t){
  return Promise.all(getTopicImageUrls(t).map(preloadImage));
}

function preloadAllTopicImages(){
  TOPICS.forEach(t => preloadTopicImages(t));
}

let currentTopicIdx = 0;
let currentPageIdx = 0;
let currentView = 'home';

function goView(name){
  const views = { home: document.getElementById('view-home'), topic: document.getElementById('view-topic'), quiz: document.getElementById('view-quiz') };
  Object.values(views).forEach(v => { v.classList.remove('active','exit-left'); });
  if(currentView === 'topic' && name === 'home') views.topic.classList.add('exit-left');
  views[name].classList.add('active');
  currentView = name;
  if(views.quiz){
    views.quiz.scrollTop = 0;
    if(name === 'quiz'){
      requestAnimationFrame(() => { views.quiz.scrollTop = 0; });
    }
  }
  document.querySelectorAll('.nav-link').forEach(a => a.classList.toggle('active', a.dataset.view === name));
  if(name === 'home') document.getElementById('nav-home').classList.add('active');
  document.getElementById('site-nav')?.classList.remove('nav-hidden');
  resetNavScroll();
}

function resetNavScroll(){
  setNavVisible(true);
  navScrollState.accumulated = 0;
  const activeView = currentView === 'topic'
    ? document.getElementById('view-topic')
    : document.getElementById('view-home');
  navScrollState.lastY = activeView?.scrollTop || 0;
}

const navScrollState = { lastY: 0, ticking: false, accumulated: 0 };

function setNavVisible(show){
  const nav = document.getElementById('site-nav');
  if(!nav) return;
  nav.classList.toggle('nav-hidden', !show);
}

function updateNavOnScroll(){
  navScrollState.ticking = false;
  const activeView = currentView === 'topic'
    ? document.getElementById('view-topic')
    : currentView === 'home'
      ? document.getElementById('view-home')
      : null;
  if(!activeView || !activeView.classList.contains('active')) return;

  const y = activeView.scrollTop;
  const delta = y - navScrollState.lastY;
  navScrollState.lastY = y;

  // Always show nav when near top of page
  if(y <= 24){
    navScrollState.accumulated = 0;
    setNavVisible(true);
    return;
  }

  // Ignore tiny jitter; only react after meaningful scroll distance
  navScrollState.accumulated += delta;
  const HIDE_AFTER = 20;  // scroll down into content → hide
  const SHOW_AFTER = 14;  // scroll back up → show (slightly lower = less flicker)

  if(navScrollState.accumulated >= HIDE_AFTER){
    setNavVisible(false);
    navScrollState.accumulated = 0;
  } else if(navScrollState.accumulated <= -SHOW_AFTER){
    setNavVisible(true);
    navScrollState.accumulated = 0;
  }
}

function initNavScroll(){
  const nav = document.getElementById('site-nav');
  const homeView = document.getElementById('view-home');
  const topicView = document.getElementById('view-topic');
  if(!nav || !topicView || !homeView) return;

  const onScroll = () => {
    if((currentView !== 'topic' && currentView !== 'home') || navScrollState.ticking) return;
    navScrollState.ticking = true;
    requestAnimationFrame(updateNavOnScroll);
  };

  topicView.addEventListener('scroll', onScroll, { passive: true });
  homeView.addEventListener('scroll', onScroll, { passive: true });

  resetNavScroll();
}

function openTopicSlide(topicId){
  const idx = TOPICS.findIndex(t => t.id === topicId);
  if(idx < 0) return;
  const t = TOPICS[idx];
  currentTopicIdx = idx;
  currentPageIdx = 0;

  const showTopic = () => {
    renderTopicSlide(idx);
    document.querySelectorAll('.tcard').forEach(c => c.classList.toggle('active', c.dataset.topic === topicId));
    goView('topic');
  };

  Promise.race([
    preloadTopicImages(t),
    new Promise(r => setTimeout(r, 700))
  ]).then(showTopic);
}

function buildTopicBlock(page){
  const paras = page.paragraphs?.length ? page.paragraphs : (page.text ? [page.text] : []);
  let html = `<article class="topic-block">`;
  html += `<h3 class="topic-block-title">${page.title}</h3>`;
  html += paras.map(p => `<p class="page-para">${p}</p>`).join('');
  if(page.bullets?.length){
    html += `<div class="page-bullets-label">${page.bulletLabel || 'Key points'}</div>`;
    html += `<ul class="page-bullets">${page.bullets.map(b => `<li>${b}</li>`).join('')}</ul>`;
  }
  html += `</article>`;
  return html;
}

function renderTopicLongform(t){
  const pages = (t.pages && t.pages.length) ? t.pages : [{ title:'Overview', paragraphs:[t.desc], bullets:t.points }];
  const scrollEl = document.getElementById('topic-scroll');
  if(!scrollEl) return;
  const p0 = pages[0] || { title:'Overview', paragraphs:[t.desc], bullets:t.points };
  const p1 = pages[1] || p0;
  const p2 = pages[2] || p0;
  const p3 = pages[3] || p0;
  const bullets = [p1, p2, p3].flatMap(p => p.bullets || []);
  const collage = topicCollageImages(t);

  const singleCard = `
    <section class="topic-panel">
      <div class="topic-showcase-head">
        <div>
          <div class="topic-kicker">${t.tag}</div>
          <h3>${t.label}</h3>
          <div class="topic-kicker">Background</div>
          ${(p0.paragraphs || [p0.text || t.desc]).slice(0,3).map(txt => `<p class="page-para">${txt}</p>`).join('')}
        </div>
        <div class="topic-panel-media" style="--topic-accent:${t.color}">
          <img src="${topicImgUrl(t.image, 1200)}" data-fallback="https://picsum.photos/seed/dg-${t.id}-hero/1200/800" alt="${t.imageAlt || t.label}" loading="eager" decoding="async" fetchpriority="high" referrerpolicy="no-referrer" />
          <div class="topic-hero-stat">
            <div class="topic-hero-stat-inner">
              <span class="topic-hero-stat-num">${t.stat}</span>
              <span class="topic-hero-stat-label">${t.statLabel}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="topic-row topic-row-b">
        <div class="topic-collage">
          ${collage.map((item, i) => `
            <div><img src="${item.src}" data-fallback="${item.fallback}" data-collage-idx="${i}" alt="${item.alt}" loading="eager" decoding="async" referrerpolicy="no-referrer" /></div>
          `).join('')}
        </div>
        <div class="topic-row-copy">
          <div class="topic-kicker">${p1.title}</div>
          <h3>${p1.title} in Practice</h3>
          ${(p1.paragraphs || [p1.text || '']).slice(0,2).map(txt => `<p class="page-para">${txt}</p>`).join('')}
          <ul class="page-bullets">${(p1.bullets || []).slice(0,3).map(b => `<li>${b}</li>`).join('')}</ul>
        </div>
      </div>
      <div class="topic-kicker">Key Applications</div>
      <h3>${p2.title} and ${p3.title}</h3>
      ${(p2.paragraphs || [p2.text || '']).slice(0,1).map(txt => `<p class="page-para">${txt}</p>`).join('')}
      <div class="topic-services-grid">
        ${[0,1,2,3].map(i => `
          <article class="topic-feature">
            <h4>Focus ${String(i + 1).padStart(2, '0')}</h4>
            <p>${bullets[i] || 'Strategic insights and practical implications for this topic.'}</p>
          </article>
        `).join('')}
      </div>
    </section>
  `;

  scrollEl.classList.add('is-swapping');
  scrollEl.innerHTML = `<div class="topic-layout">${singleCard}</div>`;
  wireTopicImageFallback();
  wireTopicImageReveal();
  wireTopicImage3D();
  requestAnimationFrame(() => scrollEl.classList.remove('is-swapping'));
}

function wireTopicImageReveal(){
  document.querySelectorAll('#topic-scroll img').forEach(img => {
    const reveal = () => img.classList.add('is-ready');
    if(img.complete && img.naturalWidth > 0) reveal();
    else{
      img.addEventListener('load', reveal, { once: true });
      img.addEventListener('error', reveal, { once: true });
    }
  });
}

function wireTopicImageFallback(){
  document.querySelectorAll('[data-fallback]').forEach(img => {
    img.onerror = () => {
      const fb = img.dataset.fallback;
      if(fb && img.src !== fb){
        img.src = fb;
        img.onload = () => img.classList.add('is-ready');
      } else {
        img.classList.add('is-ready');
      }
    };
  });
}

function wireTopicImage3D(){
  const targets = document.querySelectorAll('.topic-panel-media, .topic-collage > div');
  targets.forEach(el => {
    if(el.dataset.tiltBound) return;
    el.dataset.tiltBound = '1';
    el.addEventListener('mousemove', ev => {
      const r = el.getBoundingClientRect();
      const px = (ev.clientX - r.left) / r.width;
      const py = (ev.clientY - r.top) / r.height;
      const rx = (0.5 - py) * 7;
      const ry = (px - 0.5) * 9;
      el.style.transform = `perspective(950px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
      el.style.boxShadow = '0 14px 30px rgba(0,0,0,0.3)';
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
      el.style.boxShadow = '';
    });
  });
}

function renderTopicSlide(idx){
  const t = TOPICS[idx];
  document.getElementById('slide-num').textContent = String(idx + 1).padStart(2,'0');
  document.getElementById('slide-stat').innerHTML = `<strong>${t.stat}</strong>${t.statLabel}`;
  document.getElementById('slide-img-badge').textContent = t.tag;
  document.getElementById('slide-img-badge').style.color = t.color;
  document.getElementById('slide-img-badge').style.borderColor = t.color + '55';
  document.documentElement.style.setProperty('--accent', t.color);
  renderTopicLongform(t);
  const view = document.getElementById('view-topic');
  if(view) view.scrollTop = 0;
  resetNavScroll();

  const img = document.getElementById('slide-image');
  const src = topicImgUrl(t.image, 960);
  delete img.dataset.fallback;
  img.classList.remove('loaded');
  img.alt = t.imageAlt || t.label;
  img.referrerPolicy = 'no-referrer';
  img.onload = () => img.classList.add('loaded');
  img.onerror = () => {
    if(!img.dataset.fallback){
      img.dataset.fallback = '1';
      img.src = `https://picsum.photos/seed/dg-${t.id}/960/720`;
      return;
    }
    img.classList.add('loaded');
  };
  img.src = src;

}

// Topic cards
const cardsEl = document.getElementById('topic-cards');
cardsEl.innerHTML = TOPICS.map((t,i) => `
  <article class="tcard" data-topic="${t.id}" tabindex="0">
    <div class="tcard-thumb">
      <img src="${topicImgUrl(t.image, 400)}" data-fallback="https://picsum.photos/seed/dg-${t.id}-card/400/300" alt="${t.imageAlt || t.label}" loading="lazy" referrerpolicy="no-referrer" />
    </div>
    <div class="tcard-body">
      <div class="tcard-icon" style="border-color:${t.color}55;color:${t.color}">${String(i+1).padStart(2,'0')}</div>
      <h3>${t.label}</h3>
      <p>${t.desc.slice(0,72)}…</p>
    </div>
  </article>
`).join('');
wireTopicImageFallback();
cardsEl.addEventListener('click', e => {
  const card = e.target.closest('.tcard');
  if(card) openTopicSlide(card.dataset.topic);
});
cardsEl.addEventListener('mouseenter', e => {
  const card = e.target.closest('.tcard');
  if(!card) return;
  const t = TOPICS.find(x => x.id === card.dataset.topic);
  if(t) preloadTopicImages(t);
}, true);
cardsEl.addEventListener('focusin', e => {
  const card = e.target.closest('.tcard');
  if(!card) return;
  const t = TOPICS.find(x => x.id === card.dataset.topic);
  if(t) preloadTopicImages(t);
});
cardsEl.addEventListener('keydown', e => {
  const card = e.target.closest('.tcard');
  if(card && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openTopicSlide(card.dataset.topic); }
});

document.getElementById('slide-back').onclick = () => goView('home');
document.getElementById('slide-prev').onclick = () => openTopicSlide(TOPICS[(currentTopicIdx - 1 + TOPICS.length) % TOPICS.length].id);
document.getElementById('slide-next').onclick = () => openTopicSlide(TOPICS[(currentTopicIdx + 1) % TOPICS.length].id);
document.getElementById('btn-first-topic').onclick = () => openTopicSlide(TOPICS[0].id);
document.getElementById('nav-explore').onclick = () => openTopicSlide(TOPICS[0].id);

document.querySelectorAll('[data-view]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    goView(a.dataset.view);
    if(a.dataset.view === 'home') document.querySelectorAll('.tcard').forEach(c => c.classList.remove('active'));
  });
});

window.openTopicSlide = openTopicSlide;
window.goView = goView;

/* 3D Globe */
(function(){
  const canvas = document.getElementById('globe3d');
  const fallback = document.getElementById('globe-fallback');
  if(!canvas || !window.THREE || typeof THREE.OrbitControls !== 'function'){
    if(fallback){ fallback.hidden = false; fallback.textContent = 'Globe unavailable — refresh page (Ctrl+F5)'; }
    return;
  }
  let renderer, scene, camera, controls, root, mainGroup, interacting = false;
  const R = 1.05;
  const CAM_DIST = 5.35;
  const CAM_TARGET = new THREE.Vector3(0, 0.04, 0);
  const CAM_OFFSET = new THREE.Vector3(0.48, 0.18, 0.84).normalize();

  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
    renderer.setClearColor(0, 0);

    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020408, 0.055);
    camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    camera.position.copy(CAM_OFFSET.clone().multiplyScalar(CAM_DIST).add(CAM_TARGET));
    controls = new THREE.OrbitControls(camera, canvas);
    controls.target.copy(CAM_TARGET);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.minDistance = CAM_DIST;
    controls.maxDistance = CAM_DIST;
    controls.minPolarAngle = Math.PI * 0.32;
    controls.maxPolarAngle = Math.PI * 0.62;
    controls.addEventListener('start', () => interacting = true);
    controls.addEventListener('end', () => interacting = false);

    scene.add(new THREE.AmbientLight(0x0a1830, 0.65));
    const sun = new THREE.DirectionalLight(0x88ddff, 0.45);
    sun.position.set(4, 2, 5); scene.add(sun);

    root = new THREE.Group(); scene.add(root);

    const bokeh = new Float32Array(120 * 3);
    const bokehCol = new Float32Array(120 * 3);
    for(let i = 0; i < 120; i++){
      const r = 8 + Math.random() * 14, th = Math.random() * Math.PI * 2, ph = Math.acos(2 * Math.random() - 1);
      bokeh[i*3] = r * Math.sin(ph) * Math.cos(th);
      bokeh[i*3+1] = r * Math.cos(ph);
      bokeh[i*3+2] = r * Math.sin(ph) * Math.sin(th);
      const warm = Math.random() > 0.55;
      bokehCol[i*3] = warm ? 1 : 0;
      bokehCol[i*3+1] = warm ? 0.55 + Math.random() * 0.2 : 0.75 + Math.random() * 0.25;
      bokehCol[i*3+2] = warm ? 0.15 : 0.95 + Math.random() * 0.05;
    }
    const bgGeo = new THREE.BufferGeometry();
    bgGeo.setAttribute('position', new THREE.BufferAttribute(bokeh, 3));
    bgGeo.setAttribute('color', new THREE.BufferAttribute(bokehCol, 3));
    const bgPts = new THREE.Points(bgGeo, new THREE.PointsMaterial({
      size: 0.08, vertexColors: true, transparent: true, opacity: 0.45,
      blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true
    }));
    scene.add(bgPts);

    const stars = new Float32Array(350 * 3);
    for(let i = 0; i < 350; i++){
      const r = 18 + Math.random() * 22, th = Math.random() * Math.PI * 2, ph = Math.acos(2 * Math.random() - 1);
      stars[i*3] = r * Math.sin(ph) * Math.cos(th);
      stars[i*3+1] = r * Math.cos(ph);
      stars[i*3+2] = r * Math.sin(ph) * Math.sin(th);
    }
    const sg = new THREE.BufferGeometry();
    sg.setAttribute('position', new THREE.BufferAttribute(stars, 3));
    scene.add(new THREE.Points(sg, new THREE.PointsMaterial({ color: 0x6a8aaa, size: 0.022, transparent: true, opacity: 0.3 })));

    const ORANGE = 0xff7a1a;
    const BLUE = 0x2288ee;
    const TEX = 'https://threejs.org/examples/textures/planets/';
    let landDots = null;
    let atmShader = null;
    const animArcs = [];
    const animNodes = [];
    const tmpCamDir = new THREE.Vector3();

    function latLonToVec3(lat, lon, radius){
      const phi = (90 - lat) * Math.PI / 180;
      const theta = (lon + 180) * Math.PI / 180;
      return new THREE.Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      );
    }

    function clamp(v, lo, hi){ return Math.max(lo, Math.min(hi, v)); }

    function facingFade(worldPos){
      tmpCamDir.copy(camera.position).sub(CAM_TARGET).normalize();
      const d = worldPos.clone().normalize().dot(tmpCamDir);
      return clamp(0.12 + (d + 1) * 0.44, 0.08, 1);
    }

    function makeDataArc(latA, lonA, latB, lonB, lift){
      const start = latLonToVec3(latA, lonA, R);
      const end = latLonToVec3(latB, lonB, R);
      const mid = start.clone().add(end).normalize().multiplyScalar(R + lift);
      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      const geo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(72));
      const mat = new THREE.LineDashedMaterial({
        color: ORANGE, dashSize: 0.035, gapSize: 0.022,
        transparent: true, opacity: 0.62,
        blending: THREE.AdditiveBlending, depthWrite: false
      });
      const line = new THREE.Line(geo, mat);
      line.computeLineDistances();
      const grp = new THREE.Group();
      grp.add(line);
      const packets = [];
      for(let k = 0; k < 2; k++){
        const packet = new THREE.Mesh(
          new THREE.SphereGeometry(0.008, 6, 6),
          new THREE.MeshBasicMaterial({ color: 0xffaa55, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false })
        );
        const glow = new THREE.Mesh(
          new THREE.SphereGeometry(0.018, 6, 6),
          new THREE.MeshBasicMaterial({ color: ORANGE, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending, depthWrite: false })
        );
        packet.add(glow);
        grp.add(packet);
        packets.push(packet);
      }
      animArcs.push({
        line, curve, mat, packets,
        phase: Math.random(),
        speed: 0.002 + Math.random() * 0.0035,
        baseOpacity: 0.35 + Math.random() * 0.35
      });
      return grp;
    }

    function makeHubNode(lat, lon, size, strong){
      const pos = latLonToVec3(lat, lon, R + 0.003);
      const core = new THREE.Mesh(
        new THREE.SphereGeometry(size || 0.016, 10, 10),
        new THREE.MeshBasicMaterial({ color: 0xffcc66, transparent: true, opacity: 0.98, blending: THREE.AdditiveBlending, depthWrite: false })
      );
      const halo = new THREE.Mesh(
        new THREE.SphereGeometry((size || 0.016) * (strong ? 3.8 : 2.6), 10, 10),
        new THREE.MeshBasicMaterial({ color: ORANGE, transparent: true, opacity: strong ? 0.28 : 0.14, blending: THREE.AdditiveBlending, depthWrite: false })
      );
      const ring = new THREE.Mesh(
        new THREE.RingGeometry((size || 0.016) * 2.2, (size || 0.016) * 2.8, 24),
        new THREE.MeshBasicMaterial({ color: ORANGE, transparent: true, opacity: 0.12, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide })
      );
      core.add(halo);
      core.add(ring);
      core.position.copy(pos);
      core.lookAt(0, 0, 0);
      animNodes.push({ mesh: core, phase: Math.random() * Math.PI * 2, strong: !!strong });
      return core;
    }

    function buildLandDotCloud(map){
      const img = map.image;
      const c = document.createElement('canvas');
      c.width = img.width; c.height = img.height;
      const ctx = c.getContext('2d');
      ctx.drawImage(img, 0, 0);
      const data = ctx.getImageData(0, 0, c.width, c.height).data;
      const positions = [];
      const step = 5;
      for(let y = 0; y < c.height; y += step){
        for(let x = 0; x < c.width; x += step){
          const i = (y * c.width + x) * 4;
          const r = data[i], g = data[i + 1], b = data[i + 2];
          const lum = 0.299 * r + 0.587 * g + 0.114 * b;
          if(lum > 38 && g >= b * 0.82 && lum < 245){
            const lon = (x / c.width) * 360 - 180;
            const lat = 90 - (y / c.height) * 180;
            const v = latLonToVec3(lat, lon, R + 0.002);
            positions.push(v.x, v.y, v.z);
          }
        }
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positions), 3));
      return new THREE.Points(geo, new THREE.PointsMaterial({
        color: BLUE, size: 0.011, transparent: true, opacity: 0.78,
        blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true
      }));
    }

    function makeGlobe(){
      const g = new THREE.Group();

      g.add(new THREE.Mesh(
        new THREE.SphereGeometry(R, 64, 64),
        new THREE.MeshPhongMaterial({ color: 0x010306, emissive: 0x000204, shininess: 2, specular: 0x000000 })
      ));

      const atmMat = new THREE.ShaderMaterial({
        transparent: true, depthWrite: false, side: THREE.BackSide, blending: THREE.AdditiveBlending,
        uniforms: { uTime: { value: 0 } },
        vertexShader: `
          varying vec3 vNorm;
          void main(){
            vNorm = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }`,
        fragmentShader: `
          varying vec3 vNorm;
          uniform float uTime;
          void main(){
            float rim = pow(0.58 - dot(vNorm, vec3(0.0, 0.0, 1.0)), 2.4);
            gl_FragColor = vec4(0.08, 0.35, 0.75, rim * 0.28);
          }`
      });
      g.add(new THREE.Mesh(new THREE.SphereGeometry(R + 0.07, 64, 64), atmMat));
      atmShader = atmMat;

      const loader = new THREE.TextureLoader();
      loader.setCrossOrigin('anonymous');
      loader.load(TEX + 'earth_atmos_2048.jpg', map => {
        try {
          landDots = buildLandDotCloud(map);
          g.add(landDots);
        } catch(err){ console.warn('Land dot grid skipped:', err); }
      }, undefined, err => console.warn('Earth texture unavailable:', err));

      const hubs = [
        [-26.2, 28.0, 0.018, true], [30.0, 31.2, 0.017, true], [6.5, 3.4, 0.016, true],
        [51.5, -0.1, 0.016, true], [40.7, -74, 0.016, true], [25.2, 55.3, 0.015, true],
        [19.0, 72.8, 0.015, true], [1.35, 103.8, 0.014, false], [35.7, 139.7, 0.014, false],
        [14.6, 121.0, 0.014, false], [-33.9, 151.2, 0.013, false], [-23.5, -46.6, 0.013, false],
        [48.9, 2.3, 0.013, false], [55.8, 37.6, 0.012, false], [-1.3, 36.8, 0.014, false],
        [34.0, -118.2, 0.013, false], [22.3, 114.2, 0.012, false], [52.4, 13.4, 0.012, false]
      ];
      const hubGroup = new THREE.Group();
      hubs.forEach(([lat, lon, sz, strong]) => hubGroup.add(makeHubNode(lat, lon, sz, strong)));
      g.add(hubGroup);

      const arcGroup = new THREE.Group();
      const routes = [
        [-26.2,28.0, 51.5,-0.1, 0.26], [-26.2,28.0, 30.0,31.2, 0.18], [-26.2,28.0, 6.5,3.4, 0.14],
        [-26.2,28.0, 25.2,55.3, 0.32], [-26.2,28.0, 19.0,72.8, 0.36], [-26.2,28.0, 1.35,103.8, 0.42],
        [6.5,3.4, 51.5,-0.1, 0.24], [6.5,3.4, 30.0,31.2, 0.16], [6.5,3.4, 40.7,-74, 0.38],
        [6.5,3.4, 25.2,55.3, 0.28], [6.5,3.4, -1.3,36.8, 0.1], [30.0,31.2, 51.5,-0.1, 0.2],
        [30.0,31.2, 25.2,55.3, 0.22], [30.0,31.2, 19.0,72.8, 0.26], [51.5,-0.1, 40.7,-74, 0.3],
        [51.5,-0.1, 25.2,55.3, 0.28], [51.5,-0.1, 19.0,72.8, 0.32], [51.5,-0.1, 55.8,37.6, 0.2],
        [51.5,-0.1, 48.9,2.3, 0.14], [51.5,-0.1, 52.4,13.4, 0.12], [40.7,-74, 34.0,-118.2, 0.16],
        [40.7,-74, -23.5,-46.6, 0.34], [40.7,-74, 25.2,55.3, 0.4], [25.2,55.3, 19.0,72.8, 0.18],
        [25.2,55.3, 1.35,103.8, 0.26], [25.2,55.3, 35.7,139.7, 0.34], [19.0,72.8, 1.35,103.8, 0.2],
        [19.0,72.8, 14.6,121.0, 0.22], [19.0,72.8, 22.3,114.2, 0.18], [1.35,103.8, 35.7,139.7, 0.2],
        [1.35,103.8, 14.6,121.0, 0.12], [1.35,103.8, 22.3,114.2, 0.14], [35.7,139.7, 37.8,-122.4, 0.38],
        [35.7,139.7, -33.9,151.2, 0.32], [35.7,139.7, 14.6,121.0, 0.24], [14.6,121.0, 34.0,-118.2, 0.42],
        [-23.5,-46.6, 40.7,-74, 0.36], [-23.5,-46.6, 51.5,-0.1, 0.4], [48.9,2.3, 55.8,37.6, 0.12],
        [-1.3,36.8, 19.0,72.8, 0.2], [-1.3,36.8, 6.5,3.4, 0.14], [52.4,13.4, 25.2,55.3, 0.24]
      ];
      routes.forEach(([a,b,c,d,h]) => arcGroup.add(makeDataArc(a,b,c,d,h)));
      g.add(arcGroup);

      return g;
    }

    mainGroup = new THREE.Group();
    mainGroup.rotation.y = -0.95;
    mainGroup.rotation.x = 0.06;
    mainGroup.scale.setScalar(0.9);
    mainGroup.add(makeGlobe());
    root.add(mainGroup);

    function resize(){
      const w = canvas.clientWidth, h = canvas.clientHeight;
      if(!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    resize();
    window.addEventListener('resize', resize);
    fallback.hidden = true;

    function animate(){
      try {
      const t = performance.now() * 0.001;
      if(!interacting && mainGroup) mainGroup.rotation.y += 0.0009;
      if(atmShader) atmShader.uniforms.uTime.value = t;
      const wp = new THREE.Vector3();
      animArcs.forEach(a => {
        a.phase = (a.phase + a.speed) % 1;
        a.packets.forEach((p, idx) => {
          const ph = (a.phase + idx * 0.45) % 1;
          p.position.copy(a.curve.getPoint(ph));
        });
        a.mat.dashOffset -= 0.012 + a.speed * 3;
        wp.copy(a.curve.getPoint(0.5));
        mainGroup.localToWorld(wp);
        const fade = facingFade(wp);
        a.mat.opacity = a.baseOpacity * fade * (0.75 + 0.25 * Math.sin(t * 2.2 + a.phase * 6.28));
      });
      animNodes.forEach(n => {
        n.mesh.getWorldPosition(wp);
        const fade = facingFade(wp);
        const pulse = 0.82 + 0.28 * Math.sin(t * 2.8 + n.phase);
        n.mesh.scale.setScalar(pulse * (n.strong ? 1.08 : 0.95));
        n.mesh.material.opacity = (n.strong ? 0.95 : 0.75) * fade;
        if(n.mesh.children[0]) n.mesh.children[0].material.opacity = (n.strong ? 0.28 : 0.14) * fade * pulse;
      });
      if(landDots){
        landDots.material.opacity = 0.62 + 0.12 * Math.sin(t * 1.4);
      }
      bgPts.rotation.y += 0.00006;
      bgPts.rotation.x += 0.00003;
      controls.update();
      const dist = camera.position.distanceTo(controls.target);
      if(Math.abs(dist - CAM_DIST) > 0.001){
        camera.position.sub(controls.target).normalize().multiplyScalar(CAM_DIST).add(controls.target);
      }
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
      } catch(err){
        console.error('Globe animate:', err);
      }
    }
    animate();
  } catch(e){
    console.error('Globe init:', e);
    fallback.hidden = false;
    fallback.textContent = 'Globe error — ' + (e.message || 'see browser console (F12)');
  }
})();

/* Quiz */
const questions = [
  { q:'How many people are currently using the internet worldwide?', opts:['About 2 billion','About 3.5 billion','About 5.4 billion','About 7 billion'], ans:2, exp:'Approximately 5.4 billion people — around 67% of the global population — are internet users.' },
  { q:'What carries 95% of international internet traffic?', opts:['Satellites','Submarine cables','Radio towers','Land fiber only'], ans:1, exp:'Undersea submarine cables carry about 95% of international data traffic.' },
  { q:'Which platform reached 1 billion users across 150+ countries?', opts:['Facebook','WhatsApp','TikTok','Instagram'], ans:2, exp:'TikTok reached 1 billion users faster than almost any platform in history.' },
  { q:"What is the 'digital divide'?", opts:['Fast vs slow internet','Inequality in internet access','Mobile vs desktop','Tech adoption lag'], ans:1, exp:'The digital divide refers to inequality between those with and without digital access.' },
  { q:'Global e-commerce revenue in 2024 reached approximately:', opts:['$1.2T','$3.8T','$6.3T','$9.1T'], ans:2, exp:'Global e-commerce revenue reached approximately $6.3 trillion in 2024.' },
  { q:'Which event accelerated remote work globally?', opts:['2008 crisis','Zoom launch','COVID-19 pandemic','Broadband invention'], ans:2, exp:'The COVID-19 pandemic normalized remote work worldwide.' },
  { q:'When was the World Wide Web opened to the public?', opts:['1983','1991','1995','2000'], ans:1, exp:'Tim Berners-Lee opened the WWW to the public in 1991.' },
  { q:'How quickly did ChatGPT reach 100 million users?', opts:['6 months','4 months','2 months','1 year'], ans:2, exp:'ChatGPT reached 100 million users in about 2 months.' }
];
let cur = 0, score = 0, answered = false;
const Q_LETTERS = ['A','B','C','D'];

function buildQuizStepDots(){
  const el = document.getElementById('q-step-dots');
  if(!el || el.childElementCount) return;
  el.innerHTML = questions.map((_, i) => `<span class="q-step-dot" data-step="${i}"></span>`).join('');
}

function updateQuizStepDots(){
  document.querySelectorAll('.q-step-dot').forEach((dot, i) => {
    dot.classList.toggle('is-current', i === cur);
    dot.classList.toggle('is-done', i < cur);
  });
}

function startQuiz(){
  cur = 0; score = 0; answered = false;
  buildQuizStepDots();
  const ring = document.getElementById('quiz-ring-fill');
  if(ring){
    const c = 2 * Math.PI * 52;
    ring.style.strokeDasharray = String(c);
    ring.style.strokeDashoffset = String(c);
  }
  document.getElementById('q-start').style.display = 'none';
  document.getElementById('q-end').style.display = 'none';
  document.getElementById('q-game').style.display = 'flex';
  const quizView = document.getElementById('view-quiz');
  if(quizView) quizView.scrollTop = 0;
  loadQ();
}
function hideQuizFeedback(){
  const layout = document.getElementById('quiz-game-layout');
  const fb = document.getElementById('q-feedback');
  if(layout) layout.classList.remove('has-feedback');
  if(fb){
    fb.hidden = true;
    fb.innerHTML = '';
    fb.className = 'q-feedback';
  }
}

function showQuizFeedback(isCorrect, explanation){
  const layout = document.getElementById('quiz-game-layout');
  const fb = document.getElementById('q-feedback');
  if(!fb || !layout) return;
  fb.className = 'q-feedback ' + (isCorrect ? 'good' : 'bad');
  fb.innerHTML = `
    <span class="q-feedback-label">Explanation</span>
    <div class="q-feedback-title">${isCorrect ? 'Correct' : 'Incorrect'}</div>
    <p class="q-feedback-body">${explanation}</p>
  `;
  fb.hidden = false;
  layout.classList.add('has-feedback');
}

function loadQ(){
  answered = false;
  const q = questions[cur];
  document.getElementById('q-prog').textContent = `Question ${cur+1} of ${questions.length}`;
  document.getElementById('q-num').textContent = String(cur + 1).padStart(2, '0');
  document.getElementById('q-score').textContent = `Score: ${score}`;
  document.getElementById('q-bar').style.width = `${((cur) / questions.length) * 100}%`;
  updateQuizStepDots();
  document.getElementById('q-text').textContent = q.q;
  hideQuizFeedback();
  document.getElementById('q-next').style.display = 'none';
  document.getElementById('q-opts').innerHTML = q.opts.map((o,i) => `
    <button class="q-opt" type="button" onclick="answer(${i})">
      <span class="q-opt-letter">${Q_LETTERS[i]}</span>
      <span class="q-opt-text">${o}</span>
    </button>
  `).join('');
  const card = document.querySelector('.q-card');
  if(card){
    card.style.animation = 'none';
    void card.offsetWidth;
    card.style.animation = '';
  }
}
function answer(i){
  if(answered) return;
  answered = true;
  const q = questions[cur];
  document.querySelectorAll('.q-opt').forEach(b => b.disabled = true);
  document.querySelectorAll('.q-opt')[q.ans].classList.add('correct');
  if(i !== q.ans) document.querySelectorAll('.q-opt')[i].classList.add('wrong');
  else score++;
  document.getElementById('q-score').textContent = `Score: ${score}`;
  showQuizFeedback(i === q.ans, q.exp);
  document.getElementById('q-next').style.display = 'block';
  document.getElementById('q-next').textContent = cur >= questions.length - 1 ? 'View Results' : 'Next Question';
  document.getElementById('q-bar').style.width = `${((cur + 1) / questions.length) * 100}%`;
}
function nextQ(){
  cur++;
  if(cur >= questions.length) endQuiz();
  else loadQ();
}
function endQuiz(){
  document.getElementById('q-game').style.display = 'none';
  document.getElementById('q-end').style.display = 'block';
  document.getElementById('ring-num').textContent = score;
  document.getElementById('ring-total').textContent = questions.length;
  const pct = Math.round(score / questions.length * 100);
  document.getElementById('ring-pct').textContent = pct + '%';
  const ring = document.getElementById('quiz-ring-fill');
  if(ring){
    const circumference = 2 * Math.PI * 52;
    ring.style.strokeDasharray = String(circumference);
    ring.style.strokeDashoffset = String(circumference * (1 - pct / 100));
  }
  let title, msg;
  if(pct === 100){ title = 'Excellent'; msg = 'You demonstrated thorough understanding of the material.'; }
  else if(pct >= 75){ title = 'Strong Performance'; msg = 'Solid grasp of digital globalization concepts.'; }
  else if(pct >= 50){ title = 'Satisfactory'; msg = 'Review the topic slides and try again.'; }
  else { title = 'Further Study Recommended'; msg = 'Explore each topic on the overview, then retake the assessment.'; }
  document.getElementById('end-title').textContent = title;
  document.getElementById('end-msg').textContent = msg;
}

initNavScroll();

function initSplashLoader(){
  const splash = document.getElementById('splash-loader');
  const fill = document.getElementById('splash-bar-fill');
  const bar = document.getElementById('splash-bar');
  const status = document.getElementById('splash-status');
  if(!splash || !fill) return;

  const minMs = 2000;
  const start = performance.now();
  let progress = 0;
  let done = false;

  const setProgress = (pct) => {
    progress = Math.min(100, Math.max(0, pct));
    fill.style.width = progress + '%';
    if(bar) bar.setAttribute('aria-valuenow', String(Math.round(progress)));
  };

  const tick = setInterval(() => {
    if(done) return;
    if(progress < 88) setProgress(progress + Math.random() * 6 + 3);
    if(progress >= 25 && progress < 55) status.textContent = 'LOADING MODULES...';
    else if(progress >= 55 && progress < 88) status.textContent = 'CONNECTING...';
  }, 140);

  const finish = () => {
    if(done) return;
    done = true;
    clearInterval(tick);
    setProgress(100);
    status.textContent = 'READY';
    setTimeout(() => {
      splash.classList.add('splash-done');
      splash.setAttribute('aria-busy', 'false');
      preloadAllTopicImages();
      setTimeout(() => splash.remove(), 600);
    }, 400);
  };

  const tryFinish = () => {
    const elapsed = performance.now() - start;
    setTimeout(finish, Math.max(0, minMs - elapsed));
  };

  if(document.readyState === 'complete') tryFinish();
  else window.addEventListener('load', tryFinish, { once: true });
}

initSplashLoader();
