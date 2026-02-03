// navbar.js - Corrected Code (Fixed CSS Conflict)

const navbarHTML = `
<style>
    /* 1. Font Awesome Icons Load */
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

    /* --- 2. NAVBAR CSS (Ab hum 'header' tag nahi, class use karenge) --- */
    
    .main-navbar-header {
        background-color: #0056b3; /* Dark Blue */
        height: 60px;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        z-index: 99999; /* Sabse upar */
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        font-family: 'Segoe UI', Arial, sans-serif;
        box-sizing: border-box; /* Padding ko width me include kare */
    }

    .header-left {
        display: flex;
        align-items: center;
        gap: 15px;
    }

    .logo {
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
        text-transform: uppercase;
        text-decoration: none;
    }

    /* SEARCH BUTTON */
    .search-btn {
        background: rgba(255, 255, 255, 0.2);
        border: none;
        color: white;
        padding: 8px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.1rem;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .search-btn:hover { background: rgba(255, 255, 255, 0.4); }

    /* MENU LINKS */
    .navbar ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .navbar ul li { position: relative; }

    .navbar ul li a {
        color: white;
        text-decoration: none;
        padding: 10px 15px;
        font-weight: 500;
        display: block;
        font-size: 16px;
    }

    .navbar ul li a:hover {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 4px;
    }

    /* DROPDOWN */
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: white;
        min-width: 200px;
        box-shadow: 0px 8px 16px rgba(0,0,0,0.2);
        top: 100%;
        left: 0;
        border-radius: 4px;
    }
    
    .dropdown:hover .dropdown-content { display: block; }

    .dropdown-content a {
        color: #333 !important;
        padding: 12px 16px;
        border-bottom: 1px solid #eee;
    }
    
    .dropdown-content a:hover { background-color: #f1f1f1 !important; color: black !important; }

    /* MOBILE TOGGLE */
    .menu-toggle {
        display: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
    }

    /* MARQUEE */
    .marquee-container {
        background: #ffeb3b;
        color: #000;
        padding: 8px 0;
        font-weight: bold;
        border-bottom: 1px solid #ccc;
        margin-top: 60px; 
        font-family: sans-serif;
    }

    /* --- MOBILE RESPONSIVE --- */
    @media (max-width: 768px) {
        .menu-toggle { display: block; }

        .navbar {
            position: absolute;
            top: 60px;
            left: 0;
            width: 100%;
            background-color: #0056b3;
            flex-direction: column;
            display: none;
            border-top: 1px solid rgba(255,255,255,0.1);
        }

        .navbar.active { display: flex; }
        .navbar ul { flex-direction: column; width: 100%; }
        .navbar ul li { text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); }
        .navbar ul li a { padding: 15px; width: 100%; }
        
        .dropdown:hover .dropdown-content { display: none; }
        .dropdown.active .dropdown-content { display: block; position: static; width: 100%; }
    }
</style>

<header class="main-navbar-header">
    <div class="header-left">
        <div class="search-container">
            <button class="search-btn" onclick="triggerSearch()">
                <i class="fas fa-search"></i>
            </button>
        </div>
        <a href="index.html" class="logo">NCRone.in</a>
    </div>

    <div class="menu-toggle" onclick="toggleMenu()">
        <i class="fas fa-bars"></i>
    </div>

    <nav class="navbar" id="navbar">
        <ul>
            <li><a href="/index.html" onclick="closeMenu()">Home</a></li>
            <li><a href="/Noida_Jobs.html" onclick="closeMenu()">Noida Jobs</a></li>
            <li><a href="/NcrJobs.html" onclick="closeMenu()">Haryana Jobs</a></li>
            
            <li class="dropdown" onclick="toggleDropdown(this)">
                <a href="javascript:void(0)">Other Jobs <i class="fas fa-caret-down"></i></a>
                <div class="dropdown-content">
                    <a href="driver-jobs.html">Driver Jobs</a>
                    <a href="security-guard.html">Security Guard</a>
                    <a href="helper-jobs.html">Helper / Labour</a>
                    <a href="cook-jobs.html">Cook / Maid</a>
                    <a href="delivery-boy.html">Delivery Boy</a>
                </div>
            </li>

            <li><a href="/about.html" onclick="closeMenu()">About</a></li>
            <li><a href="/Contact.html" onclick="closeMenu()">Contact</a></li>
        </ul>
    </nav>
</header>

<div class="marquee-container">
    <marquee scrollamount="6">
        लेटेस्ट जॉब अपडेट्स के लिए वेबसाइट को बुकमार्क करें | सभी नौकरियाँ फ्री हैं | New Vacancy Alert 2026!
    </marquee>
</div>
`;

// Inject HTML
document.getElementById("navbar-placeholder").innerHTML = navbarHTML;

// Functions
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

function closeMenu() {
    const navbar = document.getElementById('navbar');
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
    }
}

function toggleDropdown(element) {
    if (window.innerWidth <= 768) {
        element.classList.toggle('active');
    }
}

function triggerSearch() {
    let searchTerm = prompt("Search for a job (e.g., 'Noida Jobs', 'Haryana Jobs'):");
    if (searchTerm) {
        let cleanTerm = searchTerm.toLowerCase().replace(/\s/g, '');
        if (cleanTerm.includes('noida')) window.location.href = "Noida_Jobs.html"; 
        else if (cleanTerm.includes('ncr') || cleanTerm.includes('haryana')) window.location.href = "NcrJobs.html";
        else alert("Searching for: " + searchTerm); 
    }
}