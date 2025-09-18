// Enhanced theme switcher with smooth transitions and better UX
document.addEventListener('DOMContentLoaded', function() {
    const themes = document.getElementsByClassName("theme");
    const body = document.querySelector("body");
    
    // Add click event listeners to theme buttons
    Array.from(themes).forEach((theme) => {
        theme.addEventListener("click", (e) => {
            const selectedTheme = e.target.dataset.theme;
            switchTheme(selectedTheme);
        });
    });

    // Enhanced theme switching function
    function switchTheme(theme) {
        // Add transition class for smooth theme change
        body.style.transition = 'all 0.3s ease';
        
        // Set the theme
        body.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
        
        // Update active theme button
        updateActiveTheme(theme);
        
        // Remove transition after animation completes
        setTimeout(() => {
            body.style.transition = '';
        }, 300);
    }

    // Update active theme button styling
    function updateActiveTheme(activeTheme) {
        Array.from(themes).forEach((theme) => {
            if (theme.dataset.theme === activeTheme) {
                theme.classList.add('active');
            } else {
                theme.classList.remove('active');
            }
        });
    }

    // Load saved theme on page load
    function loadSavedTheme() {
        const savedTheme = localStorage.getItem("theme");
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const theme = savedTheme || systemTheme;
        
        switchTheme(theme);
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (e) => {
        // Only auto-switch if no theme is saved
        if (!localStorage.getItem("theme")) {
            const systemTheme = e.matches ? 'dark' : 'light';
            switchTheme(systemTheme);
        }
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.altKey && e.key === 't') {
            // Alt + T to toggle theme
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            switchTheme(newTheme);
        }
    });

    // Add theme transition effects
    function addThemeTransitionEffects() {
        const style = document.createElement('style');
        style.textContent = `
            * {
                transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
            }
            
            .theme {
                transition: all 0.3s ease;
            }
            
            .theme.active {
                transform: scale(1.1);
                box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.25);
            }
        `;
        document.head.appendChild(style);
    }

    // Initialize theme system
    loadSavedTheme();
    addThemeTransitionEffects();
    
    // Add theme change animation
    function animateThemeChange() {
        body.style.opacity = '0.8';
        setTimeout(() => {
            body.style.opacity = '1';
        }, 150);
    }

    // Override switchTheme to include animation
    const originalSwitchTheme = switchTheme;
    switchTheme = function(theme) {
        animateThemeChange();
        originalSwitchTheme(theme);
    };
});

// Export theme functions for external use
window.themeSwitcher = {
    switchTheme: function(theme) {
        document.querySelector("body").setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    },
    
    getCurrentTheme: function() {
        return document.querySelector("body").getAttribute("data-theme");
    },
    
    toggleTheme: function() {
        const currentTheme = this.getCurrentTheme();
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.switchTheme(newTheme);
    }
};
