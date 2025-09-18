// Enhanced experience calculation with better formatting
function calculateExperience() {
    const startDate = new Date('2022-01-31');
    const today = new Date();
    const experienceInMs = today - startDate;

    // Calculate total experience in days
    const experienceInDays = Math.floor(experienceInMs / (1000 * 60 * 60 * 24));

    // Calculate years, months, and days
    const experienceInYears = Math.floor(experienceInDays / 365.25);
    const remainingDaysAfterYears = experienceInDays % 365.25;
    const experienceInMonths = Math.floor(remainingDaysAfterYears / 30.44);
    const remainingDaysAfterMonths = Math.floor(remainingDaysAfterYears % 30.44);

    return {
        years: experienceInYears,
        months: experienceInMonths,
        days: remainingDaysAfterMonths,
        totalDays: experienceInDays
    };
}

// Update experience display with animation
function updateExperienceDisplay() {
    const experienceElement = document.getElementById('experience');
    if (!experienceElement) return;

    const experience = calculateExperience();
    
    // Create a more engaging display
    const experienceText = `${experience.years} Years, ${experience.months} Months, ${experience.days} Days`;
    experienceElement.textContent = experienceText;
    
    // Add a subtle animation
    experienceElement.style.opacity = '0';
    experienceElement.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        experienceElement.style.transition = 'all 0.6s ease';
        experienceElement.style.opacity = '1';
        experienceElement.style.transform = 'translateY(0)';
    }, 100);
}

// Initialize experience calculation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    updateExperienceDisplay();
    
    // Update experience every day at midnight
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const timeUntilMidnight = tomorrow.getTime() - now.getTime();
    
    setTimeout(() => {
        updateExperienceDisplay();
        // Set up daily updates
        setInterval(updateExperienceDisplay, 24 * 60 * 60 * 1000);
    }, timeUntilMidnight);
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calculateExperience, updateExperienceDisplay };
}
