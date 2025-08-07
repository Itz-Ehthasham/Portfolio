// projects.js - Projects section functionality

// Projects data
const projectsData = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
        image: 'assets/images/profile1.jpg',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
        category: 'web',
        liveLink: 'https://example.com',
        githubLink: 'https://github.com',
        featured: true
    },
    {
        id: 2,
        title: 'Task Management App',
        description: 'A collaborative task management application with real-time updates using Socket.io. Includes drag-and-drop functionality and team collaboration features.',
        image: 'assets/images/profile2.jpeg',
        technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
        category: 'web',
        liveLink: 'https://example.com',
        githubLink: 'https://github.com',
        featured: true
    },
    {
        id: 3,
        title: 'Weather Dashboard',
        description: 'A responsive weather dashboard that displays current weather and forecasts. Built with vanilla JavaScript and integrates with OpenWeather API.',
        image: 'assets/images/profile3.jpeg',
        technologies: ['JavaScript', 'HTML5', 'CSS3', 'API Integration'],
        category: 'web',
        liveLink: 'https://example.com',
        githubLink: 'https://github.com',
        featured: false
    },
    {
        id: 4,
        title: 'Mobile Banking App',
        description: 'A secure mobile banking application with biometric authentication, transaction history, and budget tracking features.',
        image: 'assets/images/profile4.jpeg',
        technologies: ['React Native', 'Firebase', 'Node.js', 'Plaid API'],
        category: 'mobile',
        liveLink: 'https://example.com',
        githubLink: 'https://github.com',
        featured: true
    },
    {
        id: 5,
        title: 'Portfolio Website',
        description: 'A modern portfolio website design with smooth animations and responsive layout. Created using Figma and implemented with React.',
        image: 'assets/images/profile5.jpeg',
        technologies: ['Figma', 'React', 'Tailwind CSS', 'Framer Motion'],
        category: 'design',
        liveLink: 'https://example.com',
        githubLink: 'https://github.com',
        featured: false
    },
    {
        id: 6,
        title: 'Social Media Dashboard',
        description: 'Analytics dashboard for social media management with data visualization, scheduling features, and performance tracking.',
        image: 'assets/images/profile6.png',
        technologies: ['Next.js', 'D3.js', 'Python', 'Redis'],
        category: 'web',
        liveLink: 'https://example.com',
        githubLink: 'https://github.com',
        featured: true
    }
];

// Initialize projects when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Projects.js: DOM loaded, initializing...');
    // Add a small delay to ensure DOM is fully ready
    setTimeout(() => {
        console.log('Projects.js: Starting initialization...');
        renderProjects('all');
        initializeProjectFilters();
        initializeProjectModals();
        console.log('Projects.js: Initialization complete');
    }, 100);
});

// Render projects based on filter
function renderProjects(filter = 'all') {
    console.log('renderProjects called with filter:', filter);
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) {
        console.error('Projects grid not found');
        return;
    }
    console.log('Projects grid found:', projectsGrid);
    
    // Filter projects
    const filteredProjects = filter === 'all' 
        ? projectsData 
        : projectsData.filter(project => project.category === filter);
    
    console.log(`Showing ${filteredProjects.length} projects for filter: ${filter}`);
    
    // Clear grid with fade out effect
    projectsGrid.style.opacity = '0';
    
    setTimeout(() => {
        // Clear grid
        projectsGrid.innerHTML = '';
        
        if (filteredProjects.length === 0) {
            projectsGrid.innerHTML = `
                <div class="col-span-full text-center py-8">
                    <p class="text-slate-500 dark:text-slate-400">No projects found in this category.</p>
                </div>
            `;
        } else {
            // Create project cards
            filteredProjects.forEach((project, index) => {
                const projectCard = createProjectCard(project);
                projectCard.style.animationDelay = `${index * 0.1}s`;
                projectsGrid.appendChild(projectCard);
            });
        }
        
        // Fade in
        projectsGrid.style.opacity = '1';
        
        // Add animation class to new cards
        const cards = projectsGrid.querySelectorAll('.project-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('animate-fade-in-up');
            }, index * 50);
        });
    }, 300);
}

// Create project card element
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card group relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2';
    card.dataset.projectId = project.id;
    
    card.innerHTML = `
        <div class="relative overflow-hidden aspect-video">
            <img src="${project.image}" alt="${project.title}" 
                 class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <!-- Quick Actions -->
            <div class="absolute bottom-4 right-4 flex gap-3 transform translate-y-20 group-hover:translate-y-0 transition-transform duration-300">
                <a href="${project.liveLink}" target="_blank" 
                   class="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <svg class="w-5 h-5 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                </a>
                <a href="${project.githubLink}" target="_blank" 
                   class="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <svg class="w-5 h-5 text-slate-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                </a>
            </div>
        </div>
        
        <div class="p-6">
            <h3 class="text-xl font-bold mb-2 text-slate-800 dark:text-slate-100">${project.title}</h3>
            <p class="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">${project.description}</p>
            
            <!-- Technologies -->
            <div class="flex flex-wrap gap-2 mb-4">
                ${project.technologies.map(tech => 
                    `<span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-full">${tech}</span>`
                ).join('')}
            </div>
            
            <!-- Action Buttons -->
            <div class="flex gap-3">
                <a href="${project.liveLink}" target="_blank" 
                   class="flex-1 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white text-center rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                    Live Demo
                </a>
                <a href="${project.githubLink}" target="_blank" 
                   class="px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                    Code
                </a>
            </div>
        </div>
    `;
    
    return card;
}

// Initialize project filters
function initializeProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // Update active button
            filterButtons.forEach(btn => {
                btn.classList.remove('bg-indigo-500', 'text-white');
                btn.classList.add('bg-slate-200', 'dark:bg-slate-700', 'text-slate-700', 'dark:text-slate-300');
            });
            
            this.classList.remove('bg-slate-200', 'dark:bg-slate-700', 'text-slate-700', 'dark:text-slate-300');
            this.classList.add('bg-indigo-500', 'text-white');
            
            // Render filtered projects
            renderProjects(filter);
        });
    });
}

// Initialize project modals (placeholder for future functionality)
function initializeProjectModals() {
    // This function can be used for modal functionality in the future
    console.log('Project modals initialized');
}