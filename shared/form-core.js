  /* ── Country phone codes ── */
  const COUNTRIES = [
    ['🇦🇫','Afghanistan','+93'],['🇦🇱','Albania','+355'],['🇩🇿','Algeria','+213'],
    ['🇦🇩','Andorra','+376'],['🇦🇴','Angola','+244'],['🇦🇬','Antigua & Barbuda','+1-268'],
    ['🇦🇷','Argentina','+54'],['🇦🇲','Armenia','+374'],['🇦🇺','Australia','+61'],
    ['🇦🇹','Austria','+43'],['🇦🇿','Azerbaijan','+994'],['🇧🇸','Bahamas','+1-242'],
    ['🇧🇭','Bahrain','+973'],['🇧🇩','Bangladesh','+880'],['🇧🇧','Barbados','+1-246'],
    ['🇧🇾','Belarus','+375'],['🇧🇪','Belgium','+32'],['🇧🇿','Belize','+501'],
    ['🇧🇯','Benin','+229'],['🇧🇹','Bhutan','+975'],['🇧🇴','Bolivia','+591'],
    ['🇧🇦','Bosnia & Herzegovina','+387'],['🇧🇼','Botswana','+267'],['🇧🇷','Brazil','+55'],
    ['🇧🇳','Brunei','+673'],['🇧🇬','Bulgaria','+359'],['🇧🇫','Burkina Faso','+226'],
    ['🇧🇮','Burundi','+257'],['🇰🇭','Cambodia','+855'],['🇨🇲','Cameroon','+237'],
    ['🇨🇦','Canada','+1'],['🇨🇻','Cape Verde','+238'],['🇨🇫','Central African Rep.','+236'],
    ['🇹🇩','Chad','+235'],['🇨🇱','Chile','+56'],['🇨🇳','China','+86'],
    ['🇨🇴','Colombia','+57'],['🇰🇲','Comoros','+269'],['🇨🇩','Congo (DRC)','+243'],
    ['🇨🇬','Congo (Rep.)','+242'],['🇨🇷','Costa Rica','+506'],['🇭🇷','Croatia','+385'],
    ['🇨🇺','Cuba','+53'],['🇨🇾','Cyprus','+357'],['🇨🇿','Czech Republic','+420'],
    ['🇩🇰','Denmark','+45'],['🇩🇯','Djibouti','+253'],['🇩🇲','Dominica','+1-767'],
    ['🇩🇴','Dominican Republic','+1-809'],['🇪🇨','Ecuador','+593'],['🇪🇬','Egypt','+20'],
    ['🇸🇻','El Salvador','+503'],['🇬🇶','Equatorial Guinea','+240'],['🇪🇷','Eritrea','+291'],
    ['🇪🇪','Estonia','+372'],['🇸🇿','Eswatini','+268'],['🇪🇹','Ethiopia','+251'],
    ['🇫🇯','Fiji','+679'],['🇫🇮','Finland','+358'],['🇫🇷','France','+33'],
    ['🇬🇦','Gabon','+241'],['🇬🇲','Gambia','+220'],['🇬🇪','Georgia','+995'],
    ['🇩🇪','Germany','+49'],['🇬🇭','Ghana','+233'],['🇬🇷','Greece','+30'],
    ['🇬🇩','Grenada','+1-473'],['🇬🇹','Guatemala','+502'],['🇬🇳','Guinea','+224'],
    ['🇬🇼','Guinea-Bissau','+245'],['🇬🇾','Guyana','+592'],['🇭🇹','Haiti','+509'],
    ['🇭🇳','Honduras','+504'],['🇭🇺','Hungary','+36'],['🇮🇸','Iceland','+354'],
    ['🇮🇳','India','+91'],['🇮🇩','Indonesia','+62'],['🇮🇷','Iran','+98'],
    ['🇮🇶','Iraq','+964'],['🇮🇪','Ireland','+353'],['🇮🇱','Israel','+972'],
    ['🇮🇹','Italy','+39'],['🇯🇲','Jamaica','+1-876'],['🇯🇵','Japan','+81'],
    ['🇯🇴','Jordan','+962'],['🇰🇿','Kazakhstan','+7'],['🇰🇪','Kenya','+254'],
    ['🇰🇮','Kiribati','+686'],['🇽🇰','Kosovo','+383'],['🇰🇼','Kuwait','+965'],
    ['🇰🇬','Kyrgyzstan','+996'],['🇱🇦','Laos','+856'],['🇱🇻','Latvia','+371'],
    ['🇱🇧','Lebanon','+961'],['🇱🇸','Lesotho','+266'],['🇱🇷','Liberia','+231'],
    ['🇱🇾','Libya','+218'],['🇱🇮','Liechtenstein','+423'],['🇱🇹','Lithuania','+370'],
    ['🇱🇺','Luxembourg','+352'],['🇲🇬','Madagascar','+261'],['🇲🇼','Malawi','+265'],
    ['🇲🇾','Malaysia','+60'],['🇲🇻','Maldives','+960'],['🇲🇱','Mali','+223'],
    ['🇲🇹','Malta','+356'],['🇲🇭','Marshall Islands','+692'],['🇲🇷','Mauritania','+222'],
    ['🇲🇺','Mauritius','+230'],['🇲🇽','Mexico','+52'],['🇫🇲','Micronesia','+691'],
    ['🇲🇩','Moldova','+373'],['🇲🇨','Monaco','+377'],['🇲🇳','Mongolia','+976'],
    ['🇲🇪','Montenegro','+382'],['🇲🇦','Morocco','+212'],['🇲🇿','Mozambique','+258'],
    ['🇲🇲','Myanmar','+95'],['🇳🇦','Namibia','+264'],['🇳🇷','Nauru','+674'],
    ['🇳🇵','Nepal','+977'],['🇳🇱','Netherlands','+31'],['🇳🇿','New Zealand','+64'],
    ['🇳🇮','Nicaragua','+505'],['🇳🇪','Niger','+227'],['🇳🇬','Nigeria','+234'],
    ['🇲🇰','North Macedonia','+389'],['🇳🇴','Norway','+47'],['🇴🇲','Oman','+968'],
    ['🇵🇰','Pakistan','+92'],['🇵🇼','Palau','+680'],['🇵🇸','Palestine','+970'],
    ['🇵🇦','Panama','+507'],['🇵🇬','Papua New Guinea','+675'],['🇵🇾','Paraguay','+595'],
    ['🇵🇪','Peru','+51'],['🇵🇭','Philippines','+63'],['🇵🇱','Poland','+48'],
    ['🇵🇹','Portugal','+351'],['🇵🇷','Puerto Rico','+1-787'],['🇶🇦','Qatar','+974'],
    ['🇷🇴','Romania','+40'],['🇷🇺','Russia','+7'],['🇷🇼','Rwanda','+250'],
    ['🇰🇳','Saint Kitts & Nevis','+1-869'],['🇱🇨','Saint Lucia','+1-758'],
    ['🇻🇨','Saint Vincent','+1-784'],['🇼🇸','Samoa','+685'],['🇸🇲','San Marino','+378'],
    ['🇸🇹','São Tomé & Príncipe','+239'],['🇸🇦','Saudi Arabia','+966'],['🇸🇳','Senegal','+221'],
    ['🇷🇸','Serbia','+381'],['🇸🇨','Seychelles','+248'],['🇸🇱','Sierra Leone','+232'],
    ['🇸🇬','Singapore','+65'],['🇸🇰','Slovakia','+421'],['🇸🇮','Slovenia','+386'],
    ['🇸🇧','Solomon Islands','+677'],['🇸🇴','Somalia','+252'],['🇿🇦','South Africa','+27'],
    ['🇸🇸','South Sudan','+211'],['🇪🇸','Spain','+34'],['🇱🇰','Sri Lanka','+94'],
    ['🇸🇩','Sudan','+249'],['🇸🇷','Suriname','+597'],['🇸🇪','Sweden','+46'],
    ['🇨🇭','Switzerland','+41'],['🇸🇾','Syria','+963'],['🇹🇼','Taiwan','+886'],
    ['🇹🇯','Tajikistan','+992'],['🇹🇿','Tanzania','+255'],['🇹🇭','Thailand','+66'],
    ['🇹🇱','Timor-Leste','+670'],['🇹🇬','Togo','+228'],['🇹🇴','Tonga','+676'],
    ['🇹🇹','Trinidad & Tobago','+1-868'],['🇹🇳','Tunisia','+216'],['🇹🇷','Turkey','+90'],
    ['🇹🇲','Turkmenistan','+993'],['🇹🇻','Tuvalu','+688'],['🇺🇬','Uganda','+256'],
    ['🇺🇦','Ukraine','+380'],['🇦🇪','United Arab Emirates','+971'],
    ['🇬🇧','United Kingdom','+44'],['🇺🇸','United States','+1'],
    ['🇺🇾','Uruguay','+598'],['🇺🇿','Uzbekistan','+998'],['🇻🇺','Vanuatu','+678'],
    ['🇻🇦','Vatican City','+39'],['🇻🇪','Venezuela','+58'],['🇻🇳','Vietnam','+84'],
    ['🇾🇪','Yemen','+967'],['🇿🇲','Zambia','+260'],['🇿🇼','Zimbabwe','+263'],
  ];

  function populateCountrySelect(id) {
    const sel = document.getElementById(id);
    if (!sel) return;
    COUNTRIES.forEach(([flag, name, code]) => {
      const opt = document.createElement('option');
      opt.value = code;
      opt.textContent = `${flag} ${code}`;
      opt.title = name;
      if (name === 'United States') opt.selected = true;
      sel.appendChild(opt);
    });
  }
  populateCountrySelect('pCountry');
  populateCountrySelect('rCountry');

  /* ── Phone number formatter ── */
  function formatPhone(e) {
    let val = e.target.value.replace(/\D/g, '').slice(0, 10);
    if (val.length >= 7)
      val = '(' + val.slice(0,3) + ') ' + val.slice(3,6) + '-' + val.slice(6);
    else if (val.length >= 4)
      val = '(' + val.slice(0,3) + ') ' + val.slice(3);
    else if (val.length > 0)
      val = '(' + val;
    e.target.value = val;
  }
  document.getElementById('pPhone').addEventListener('input', formatPhone);
  document.getElementById('rPhone').addEventListener('input', formatPhone);

  /* ── Hamburger menu ── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when a mobile menu link is clicked
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
    });
  });

  let activeFlow = null; // 'purchase' | 'refi'
  let selectedPropertyType = null;

  /* ── State FIPS → HomeASAP st= codes ── */
  const STATE_IDS = {
    'Alabama':1,'Alaska':2,'Arizona':4,'Arkansas':5,'California':6,
    'Colorado':8,'Connecticut':9,'Delaware':10,'Florida':12,'Georgia':13,
    'Hawaii':15,'Idaho':16,'Illinois':17,'Indiana':18,'Iowa':19,'Kansas':20,
    'Kentucky':21,'Louisiana':22,'Maine':23,'Maryland':24,'Massachusetts':25,
    'Michigan':26,'Minnesota':27,'Mississippi':28,'Missouri':29,'Montana':30,
    'Nebraska':31,'Nevada':32,'New Hampshire':33,'New Jersey':34,'New Mexico':35,
    'New York':36,'North Carolina':37,'North Dakota':38,'Ohio':39,'Oklahoma':40,
    'Oregon':41,'Pennsylvania':42,'Rhode Island':44,'South Carolina':45,
    'South Dakota':46,'Tennessee':47,'Texas':48,'Utah':49,'Vermont':50,
    'Virginia':51,'Washington':53,'West Virginia':54,'Wisconsin':55,'Wyoming':56
  };

  /* ── State name → 2-letter abbreviation (for Places API) ── */
  window.STATE_ABBR = window.STATE_ABBR || {};
  const STATE_ABBR = window.STATE_ABBR = {
    'Alabama':'AL','Alaska':'AK','Arizona':'AZ','Arkansas':'AR','California':'CA',
    'Colorado':'CO','Connecticut':'CT','Delaware':'DE','Florida':'FL','Georgia':'GA',
    'Hawaii':'HI','Idaho':'ID','Illinois':'IL','Indiana':'IN','Iowa':'IA','Kansas':'KS',
    'Kentucky':'KY','Louisiana':'LA','Maine':'ME','Maryland':'MD','Massachusetts':'MA',
    'Michigan':'MI','Minnesota':'MN','Mississippi':'MS','Missouri':'MO','Montana':'MT',
    'Nebraska':'NE','Nevada':'NV','New Hampshire':'NH','New Jersey':'NJ','New Mexico':'NM',
    'New York':'NY','North Carolina':'NC','North Dakota':'ND','Ohio':'OH','Oklahoma':'OK',
    'Oregon':'OR','Pennsylvania':'PA','Rhode Island':'RI','South Carolina':'SC',
    'South Dakota':'SD','Tennessee':'TN','Texas':'TX','Utah':'UT','Vermont':'VT',
    'Virginia':'VA','Washington':'WA','West Virginia':'WV','Wisconsin':'WI','Wyoming':'WY'
  };

  /* ── Property type → homeTypesArray codes ── */
  const PROP_TYPES = {
    'Single Family':[1],'Condo':[2],'Town Home':[3],
    'Multi-Family':[1,2,3],'New Construction':[1],'Mobile / Manufactured':[1]
  };

  /* ── Build HomeASAP redirect URL from form data ── */
  function buildRedirectUrl() {
    const base = 'https://homeasap.com/search/map/28.80415790,-81.72563200,6200,14';
    const p = new URLSearchParams();
    p.set('ct', '1000');
    p.set('saleType', '1');

    // Property type
    const types = PROP_TYPES[selectedPropertyType];
    if (types) types.forEach(t => p.append('homeTypesArray', t));

    // Payment range
    const payMinEl = document.getElementById('payMin');
    const payMaxEl = document.getElementById('payMax');
    if (payMaxEl && payMaxEl.value) p.set('maxMortgagePayment', payMaxEl.value);
    if (payMinEl && payMinEl.value) p.set('minMortgagePayment', payMinEl.value);

    // Down payment
    const downEl = document.getElementById('downSlider');
    if (downEl && downEl.value) p.set('downPayment', downEl.value);

    // State
    const stateEl = document.getElementById('pStateSelect');
    if (stateEl && stateEl.value && STATE_IDS[stateEl.value])
      p.set('st', STATE_IDS[stateEl.value]);

    // Fixed partner params
    p.set('rp_buyer', '97d12317-9c0d-443a-80e7-94b8e887b418');
    p.set('theme', 'more');
    p.set('rp_welcome', '1');
    p.set('sortType', 'daysOnMarket_asc');

    return `${base}?${p.toString()}`;
  }

  /* ── Scroll hero into view ── */
  function scrollToTop() {
    const form = document.getElementById('eligibility');
    if (form && form.classList.contains('engaged')) {
      /* Form is active — use scrollIntoView so the browser handles
         the offset cleanly. scroll-margin-top in CSS accounts for the nav. */
      requestAnimationFrame(function () {
        form.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ── Validation ── */
  function clearErrors(stepEl) {
    stepEl.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
    stepEl.querySelectorAll('.field-error-msg').forEach(el => el.remove());
  }

  function markError(el, msg) {
    el.classList.add('input-error');
    const group = el.closest('.form-group');
    if (group && !group.querySelector('.field-error-msg')) {
      const e = document.createElement('p');
      e.className = 'field-error-msg';
      e.textContent = '⚠ ' + msg;
      group.appendChild(e);
    }
  }

  function validateAndGo(callback) {
    const step = document.querySelector('.form-step.active');
    if (!step) { callback(); return; }
    clearErrors(step);
    let valid = true;

    // Text inputs
    step.querySelectorAll('input[type="text"]').forEach(el => {
      if (!el.value.trim()) { markError(el, 'This field is required.'); valid = false; }
    });

    // Email
    step.querySelectorAll('input[type="email"]').forEach(el => {
      if (!el.value.trim()) {
        markError(el, 'This field is required.'); valid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim())) {
        markError(el, 'Please enter a valid email address.'); valid = false;
      }
    });

    // Select (skip phone-country dropdown)
    step.querySelectorAll('select:not(.phone-country)').forEach(el => {
      if (!el.value) { markError(el, 'Please make a selection.'); valid = false; }
    });

    // Phone number
    step.querySelectorAll('.phone-input').forEach(el => {
      if (el.value.replace(/\D/g, '').length < 10) {
        const wrap = el.closest('.phone-input-wrap') || el;
        markError(wrap, 'Please enter a valid 10-digit phone number.'); valid = false;
      }
    });

    if (valid) callback();
  }

  /* ── Show a named branch step (no progress bar update) ── */
  function showStep(id) {
    document.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(id);
    if (target) target.classList.add('active');
    scrollToTop();
  }

  /* ── Step 1: choose flow ── */
  function startFlow(flow) {
    activeFlow = flow;
    document.getElementById('heroContent').classList.add('collapsed');
    document.getElementById('eligibility').classList.add('engaged');
    if (flow === 'purchase') goFlow('p', 2);
    else                     goFlow('r', 2);
  }

  /* ── Navigate within a flow ── */
  function goFlow(prefix, n) {
    document.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
    const id = prefix === 'step' ? 'step' + n : prefix + n;
    const target = document.getElementById(id);
    if (target) target.classList.add('active');
    scrollToTop();

    // Progress bar
    const total = (activeFlow === 'refi') ? 9 : 14;
    // map step numbers: p2–p12 = steps 2–12, r2–r7 = steps 2–7
    const stepNum = n;
    const pct = Math.min(((stepNum - 1) / total) * 100, 100);
    document.getElementById('progFill').style.width = pct + '%';

    // Re-init sliders
    if (prefix === 'p') {
      if (n === 5) refreshSlider('priceSlider', 50000, 2000000);
      if (n === 6) updateDual();
      if (n === 7) refreshSlider('downSlider', 0, 500000);
      if (n === 10 && window.updateCityFilter) window.updateCityFilter();
    }
  }

  /* ── Back to step 1 ── */
  function goToStep(n) {
    document.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
    document.getElementById('step' + n).classList.add('active');
    document.getElementById('progFill').style.width = '0%';
    activeFlow = null;
    document.getElementById('heroContent').classList.remove('collapsed');
    document.getElementById('eligibility').classList.remove('engaged');
    // Restore header
    const hdr = document.querySelector('.leadforms-form-header');
    hdr.querySelector('h3').textContent = 'Check Your Eligibility';
    hdr.querySelector('p').textContent = 'Free quote in under 60 seconds — no SSN required';
    hdr.style.background = '';
    // Restore progress bar
    document.querySelector('.form-prog').style.display = '';
    scrollToTop();
  }

  /* ── Thank you + redirect ── */
  function showThankYou() {
    document.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
    document.getElementById('thankYou').classList.add('active');
    incrementCounter();
    scrollToTop();

    // Update header
    const hdr = document.querySelector('.leadforms-form-header');
    hdr.querySelector('h3').textContent = 'You made a great first step!';
    hdr.querySelector('p').textContent = 'We will contact you shortly to discuss your home loan options.';
    hdr.style.background = '#065f46';

    // Hide progress bar
    document.querySelector('.form-prog').style.display = 'none';

    // Build redirect URL and wire up the manual link
    const url = buildRedirectUrl();
    document.getElementById('tyRedirectLink').href = url;

    // Animate the redirect progress bar over 5 seconds then redirect
    const fill = document.getElementById('tyBarFill');
    let pct = 0;
    const timer = setInterval(() => {
      pct += 1;
      fill.style.width = pct + '%';
      if (pct >= 100) {
        clearInterval(timer);
        window.location.href = url;
      }
    }, 50); // 50ms × 100 steps = 5 seconds
  }

  /* ── Submission counter ── */
  const BASE_COUNT = 23381;
  function getCount() {
    return parseInt(localStorage.getItem('eligibilityCount') || BASE_COUNT, 10);
  }
  function incrementCounter() {
    const next = getCount() + 1;
    localStorage.setItem('eligibilityCount', next);
    renderCounter(next);
  }
  function renderCounter(n) {
    const el = document.getElementById('submissionCounter');
    if (el) el.textContent = n.toLocaleString();
  }
  function animateCounter(target) {
    const el = document.getElementById('submissionCounter');
    if (!el) return;
    const duration = 2000;
    const start = performance.now();
    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      el.textContent = current.toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  // Init on load — count up from 0
  animateCounter(getCount());

  /* ── Single-thumb slider ── */
  function formatDollar(v) {
    return '$' + parseInt(v).toLocaleString();
  }

  function refreshSlider(id, min, max) {
    const el = document.getElementById(id);
    if (!el) return;
    const pct = ((el.value - min) / (max - min)) * 100;
    el.style.background =
      'linear-gradient(to right, var(--blue) 0%, var(--blue) ' + pct + '%, var(--border) ' + pct + '%, var(--border) 100%)';
  }

  function updateSlider(id, displayId, min, max, formatter) {
    const el = document.getElementById(id);
    document.getElementById(displayId).textContent = formatter(el.value);
    refreshSlider(id, min, max);
  }

  /* ── Dual-thumb slider (Step 6) ── */
  function updateDual() {
    const minEl = document.getElementById('payMin');
    const maxEl = document.getElementById('payMax');
    let lo = parseInt(minEl.value);
    let hi = parseInt(maxEl.value);
    const gap = 100;

    if (lo >= hi - gap) {
      if (document.activeElement === minEl) { lo = hi - gap; minEl.value = lo; }
      else                                  { hi = lo + gap; maxEl.value = hi; }
    }

    document.getElementById('payDisplay').textContent =
      '$' + lo.toLocaleString() + ' to $' + hi.toLocaleString();

    const rangeMin = 500, rangeMax = 15000, span = rangeMax - rangeMin;
    const loPct  = ((lo - rangeMin) / span) * 100;
    const hiPct  = ((hi - rangeMin) / span) * 100;
    const fill = document.getElementById('dualFill');
    fill.style.left  = loPct + '%';
    fill.style.width = (hiPct - loPct) + '%';
  }

  /* ── FAQ accordion ── */
  function toggleFaq(el) {
    const item = el.parentElement;
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  }

  /* ── Smooth scroll anchors ── */
  document.querySelectorAll('a[href="#eligibility"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      document.getElementById('eligibility').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ── Init on load ── */
  document.addEventListener('DOMContentLoaded', () => {
    refreshSlider('priceSlider', 50000, 2000000);
    refreshSlider('downSlider', 0, 500000);
    updateDual();
  });

  let cityAutocomplete = null;

  /* Approximate bounding boxes [SW_lat, SW_lng, NE_lat, NE_lng] for each state */
  const STATE_BOUNDS = {
    'Alabama':[30.14,-88.47,35.01,-84.89],'Alaska':[51.21,-179.15,71.54,179.78],
    'Arizona':[31.33,-114.82,37.00,-109.04],'Arkansas':[33.00,-94.62,36.50,-89.64],
    'California':[32.53,-124.41,42.01,-114.13],'Colorado':[36.99,-109.05,41.00,-102.04],
    'Connecticut':[40.95,-73.73,42.05,-71.79],'Delaware':[38.45,-75.79,39.84,-75.05],
    'Florida':[24.40,-87.63,31.00,-80.03],'Georgia':[30.36,-85.61,35.00,-80.84],
    'Hawaii':[18.86,-160.25,22.24,-154.81],'Idaho':[41.99,-117.24,49.00,-111.04],
    'Illinois':[36.97,-91.51,42.51,-87.02],'Indiana':[37.77,-88.10,41.76,-84.78],
    'Iowa':[40.37,-96.64,43.50,-90.14],'Kansas':[36.99,-102.05,40.00,-94.59],
    'Kentucky':[36.50,-89.57,39.15,-81.96],'Louisiana':[28.93,-94.04,33.02,-88.82],
    'Maine':[42.97,-71.08,47.46,-66.95],'Maryland':[37.91,-79.49,39.72,-74.98],
    'Massachusetts':[41.24,-73.51,42.89,-69.93],'Michigan':[41.70,-90.42,48.31,-82.41],
    'Minnesota':[43.50,-97.24,49.38,-89.49],'Mississippi':[30.17,-91.65,35.00,-88.10],
    'Missouri':[35.99,-95.77,40.61,-89.10],'Montana':[44.36,-116.05,49.00,-104.04],
    'Nebraska':[39.99,-104.05,43.00,-95.31],'Nevada':[35.00,-120.01,42.00,-114.04],
    'New Hampshire':[42.70,-72.56,45.31,-70.61],'New Jersey':[38.79,-75.56,41.36,-73.89],
    'New Mexico':[31.33,-109.05,37.00,-103.00],'New York':[40.49,-79.76,45.02,-71.86],
    'North Carolina':[33.84,-84.32,36.59,-75.46],'North Dakota':[45.93,-104.05,49.00,-96.55],
    'Ohio':[38.40,-84.82,41.98,-80.52],'Oklahoma':[33.62,-103.00,37.00,-94.43],
    'Oregon':[41.99,-124.57,46.24,-116.46],'Pennsylvania':[39.72,-80.52,42.27,-74.69],
    'Rhode Island':[41.15,-71.86,42.02,-71.12],'South Carolina':[32.04,-83.35,35.22,-78.54],
    'South Dakota':[42.48,-104.06,45.94,-96.44],'Tennessee':[34.98,-90.31,36.68,-81.65],
    'Texas':[25.84,-106.65,36.50,-93.51],'Utah':[36.99,-114.05,42.00,-109.04],
    'Vermont':[42.73,-73.44,45.02,-71.50],'Virginia':[36.54,-83.68,39.47,-75.24],
    'Washington':[45.54,-124.77,49.00,-116.92],'West Virginia':[37.20,-82.64,40.64,-77.72],
    'Wisconsin':[42.49,-92.89,47.31,-86.25],'Wyoming':[40.99,-111.06,45.01,-104.05]
  };

  function initCityAutocomplete() {
    if (!window.google || !window.google.maps || !window.google.maps.places) return;
    const input = document.getElementById('pCityInput');
    if (!input || cityAutocomplete) return;

    cityAutocomplete = new google.maps.places.Autocomplete(input, {
      types: ['(cities)'],
      componentRestrictions: { country: 'us' },
      fields: ['address_components', 'name']
    });

    input.addEventListener('focus', updateCityFilter);

    cityAutocomplete.addListener('place_changed', () => {
      const place = cityAutocomplete.getPlace();
      if (place && place.address_components) {
        const city = place.address_components.find(c => c.types.includes('locality'));
        if (city) input.value = city.long_name;
      }
      input.classList.remove('input-error');
      const grp = input.closest('.form-group');
      if (grp) grp.querySelectorAll('.field-error-msg').forEach(e => e.remove());
    });
  }

  function updateCityFilter() {
    if (!cityAutocomplete) return;
    const stateEl = document.getElementById('pStateSelect');
    const stateName = stateEl ? stateEl.value : '';
    const bb = STATE_BOUNDS[stateName];
    if (bb) {
      const bounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(bb[0], bb[1]),
        new google.maps.LatLng(bb[2], bb[3])
      );
      cityAutocomplete.setBounds(bounds);
      cityAutocomplete.setOptions({ strictBounds: true });
    } else {
      cityAutocomplete.setOptions({ strictBounds: false });
    }
  }

  window.updateCityFilter = updateCityFilter;

  /* ── Address autocomplete (full street address, US only) ── */
  function initAddressAutocomplete(inputId) {
    if (!window.google || !window.google.maps || !window.google.maps.places) return;
    const input = document.getElementById(inputId);
    if (!input || input._acInit) return;
    input._acInit = true;

    const ac = new google.maps.places.Autocomplete(input, {
      types: ['address'],
      componentRestrictions: { country: 'us' },
      fields: ['formatted_address', 'address_components']
    });

    ac.addListener('place_changed', () => {
      const place = ac.getPlace();
      if (place && place.formatted_address) input.value = place.formatted_address;
      input.classList.remove('input-error');
      const grp = input.closest('.form-group');
      if (grp) grp.querySelectorAll('.field-error-msg').forEach(e => e.remove());
    });
  }

  function initGooglePlaces() {
    initCityAutocomplete();
    initAddressAutocomplete('pOwnerAddr');
    initAddressAutocomplete('rAddress');
  }

  window.initGooglePlaces = initGooglePlaces;

  /* ── Load Google Places only when a real API key is present ── */
  (function() {
    const GMAPS_KEY = 'AIzaSyCKBt2PrZujRXVs6qa0SF6W15htKGcikd0';
    if (!GMAPS_KEY || GMAPS_KEY === 'YOUR_API_KEY_HERE') return; // skip until key is set
    const s = document.createElement('script');
    s.src = 'https://maps.googleapis.com/maps/api/js?key=' + GMAPS_KEY + '&libraries=places&callback=initGooglePlaces';
    s.async = true; s.defer = true;
    document.head.appendChild(s);
  })();
