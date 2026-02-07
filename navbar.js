// navbar.js - Original Design with Inline Search Box Integration

const navbarHTML = `
<style>
    /* 1. Font Awesome Icons Load */
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

    /* --- AAPKA PURANA NAVBAR CSS (NO CHANGES) --- */
    .main-navbar-header {
        background-color: #0056b3;
        height: 60px;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        z-index: 99999;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        font-family: 'Segoe UI', Arial, sans-serif;
        box-sizing: border-box;
    }

    .header-left { display: flex; align-items: center; gap: 15px; flex: 1; }
    .logo { color: white; font-size: 1.5rem; font-weight: bold; text-transform: uppercase; text-decoration: none; white-space: nowrap; }
    
    /* --- INLINE SEARCH BOX (Adding inside header-left) --- */
    .search-container-inline {
        position: relative;
        display: flex;
        align-items: center;
        max-width: 250px;
        width: 100%;
        margin-left: 10px;
    }

    .search-container-inline input {
        width: 100%;
        padding: 7px 35px 7px 15px;
        border-radius: 20px;
        border: none;
        outline: none;
        font-size: 14px;
        background: rgba(255, 255, 255, 0.95);
    }

    .search-container-inline i {
        position: absolute;
        right: 12px;
        color: #0056b3;
        cursor: pointer;
    }

    .navbar ul { display: flex; list-style: none; margin: 0; padding: 0; }
    .navbar ul li a { color: white; text-decoration: none; padding: 10px 15px; font-weight: 500; display: block; font-size: 16px; }
    .navbar ul li a:hover { background: rgba(255, 255, 255, 0.2); border-radius: 4px; }

    /* DROPDOWN */
    .dropdown-content { display: none; position: absolute; background-color: white; min-width: 200px; box-shadow: 0px 8px 16px rgba(0,0,0,0.2); top: 100%; right: 2; border-radius: 4px; }
    .dropdown:hover .dropdown-content { display: block; }
    .dropdown-content a { color: #333 !important; padding: 12px 16px; border-bottom: 1px solid #eee; }
    .dropdown-content a:hover { background-color: #f1f1f1 !important; color: black !important; }

    /* MOBILE TOGGLE */
    .menu-toggle { display: none; color: white; font-size: 1.5rem; cursor: pointer; }
    .marquee-container { background: #ffeb3b; color: #000; padding: 8px 0; font-weight: bold; border-bottom: 1px solid #ccc; margin-top: 60px; font-family: sans-serif; }

    /* --- NAYE FLOATING BUTTONS KA CSS --- */
    .global-float-box {
        position: fixed;
        bottom: 20px;
        right: 20px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        z-index: 100000;
    }
    .g-float-btn {
        width: 55px;
        height: 55px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white !important;
        font-size: 28px;
        text-decoration: none;
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        transition: transform 0.3s ease;
    }
    .g-float-btn:hover { transform: scale(1.1); }
    .g-whatsapp { background-color: #25d366; }
    .g-telegram { background-color: #0088cc; }

    @media (max-width: 768px) {
        .menu-toggle { display: block; }
        .search-container-inline { max-width: 140px; }
        .navbar { position: absolute; top: 60px; left: 0; width: 100%; background-color: #0056b3; flex-direction: column; display: none; border-top: 1px solid rgba(255,255,255,0.1); }
        .navbar.active { display: flex; }
        .navbar ul { flex-direction: column; width: 100%; }
        .navbar ul li a { padding: 15px; width: 100%; }
        .dropdown.active .dropdown-content { display: block; position: static; width: 100%; }
    }
</style>

<header class="main-navbar-header">
    <div class="header-left">
        <a href="index.html" class="logo">NCRone.in</a>
        <div class="search-container-inline">
            <input type="text" id="navSearchInput" placeholder="Search jobs..." onkeypress="handleNavSearch(event)">
            <i class="fas fa-search" onclick="executeSmartSearch()"></i>
        </div>
    </div>
    <div class="menu-toggle" onclick="toggleMenu()"><i class="fas fa-bars"></i></div>
    <nav class="navbar" id="navbar">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="all-jobs.html?cat=noida">Noida Jobs</a></li>
            <li><a href="all-jobs.html?cat=ncr">Haryana Jobs</a></li>
            <li class="dropdown" onclick="toggleDropdown(this)">
                <a href="javascript:void(0)">Other Jobs <i class="fas fa-caret-down"></i></a>
                <div class="dropdown-content">
                    <a href="all-jobs.html?cat=driver">Driver Jobs</a>
                    <a href="all-jobs.html?cat=security">Security Guard</a>
                    <a href="all-jobs.html?cat=helper">Helper / Labour</a>
                    <a href="all-jobs.html?cat=cook">Cook / Maid</a>
                    <a href="all-jobs.html?cat=delivery">Delivery Boy</a>
                </div>
            </li>
            <li><a href="about.html">About</a></li>
            <li><a href="Contact.html">Contact</a></li>
        </ul>
    </nav>
</header>

<div class="marquee-container">
    <marquee scrollamount="6">लेटेस्ट जॉब अपडेट्स के लिए वेबसाइट को बुकमार्क करें | सभी नौकरियाँ फ्री हैं | New Vacancy Alert 2026!</marquee>
</div>

<div class="global-float-box">
    <a href="https://t.me/Jobncrlive" target="_blank" class="g-float-btn g-telegram"><i class="fab fa-telegram-plane"></i></a>
    <a href="https://whatsapp.com/channel/0029VbBfWfm05MUZXJv6pY0B" target="_blank" class="g-float-btn g-whatsapp"><i class="fab fa-whatsapp"></i></a>
</div>
`;

document.getElementById("navbar-placeholder").innerHTML = navbarHTML;

// Functions
function toggleMenu() { document.getElementById('navbar').classList.toggle('active'); }
function closeMenu() { document.getElementById('navbar').classList.remove('active'); }
function toggleDropdown(e) { if (window.innerWidth <= 768) e.classList.toggle('active'); }

// --- SMART SEARCH LOGIC (No Prompts, Inline Only) ---
// --- SMART SEARCH LOGIC (Updated for 3 JSON Files) ---
// --- ADVANCED SMART SEARCH LOGIC ---
async function executeSmartSearch() {
    const input = document.getElementById('navSearchInput');
    let s = input.value.toLowerCase().trim();
    
    if (!s) return; // Agar khali hai toh kuch mat karo

    try {
        const files = ['jobs-noida.json', 'jobs-ncr.json', 'jobs-campus.json'];
        
        // 1. Saari files se data load karna
        const responses = await Promise.all(files.map(f => fetch(f)));
        const dataArrays = await Promise.all(responses.map(r => r.json()));
        const allJobs = [].concat(...dataArrays);

        // 2. Keyword Check: Agar user ne sirf Category ka naam likha hai
        const categories = {
            'noida': 'all-jobs.html?cat=noida',
            'ncr': 'all-jobs.html?cat=ncr',
            'haryana': 'all-jobs.html?cat=ncr',
            'gurgaon': 'all-jobs.html?cat=ncr',
            'manesar': 'all-jobs.html?cat=ncr',
            'campus': 'all-jobs.html?cat=campus',
            'college': 'all-jobs.html?cat=campus'
        };

        if (categories[s]) {
            window.location.href = categories[s];
            return;
        }

        // 3. Deep Search: Title, Description aur Link mein keyword dhundhna
        const foundJob = allJobs.find(job => 
            job.title.toLowerCase().includes(s) || 
            job.desc.toLowerCase().includes(s) ||
            (job.category && job.category.toLowerCase() === s)
        );

        if (foundJob) {
            window.location.href = foundJob.link;
        } else {
            // 4. Agar specific job nahi mili, toh 'All Jobs' page par filter result dikhana
            // Hum URL mein query pass kar rahe hain taaki all-jobs page search result dikha sake
            window.location.href = `all-jobs.html?search=${encodeURIComponent(s)}`;
        }

    } catch (e) {
        console.error("Search failed:", e);
        window.location.href = "all-jobs.html";
    }
}

function handleNavSearch(event) {
    if (event.key === 'Enter') {
        executeSmartSearch();
    }
}