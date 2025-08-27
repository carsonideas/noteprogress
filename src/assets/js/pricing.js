document.addEventListener('DOMContentLoaded', () => {
    const billingToggle = document.getElementById('billing-toggle');
    const toggleCircle = document.getElementById('toggle-circle');
    const priceDisplays = document.querySelectorAll('.price-display');
    const billingPeriods = document.querySelectorAll('.billing-period');
    const monthlyLabel = document.getElementById('monthly-label');
    const yearlyLabel = document.getElementById('yearly-label');

    let isYearly = false;

    function updatePrices() {
        const target = isYearly ? 'yearly' : 'monthly';
        priceDisplays.forEach(price => {
            price.textContent = `$${price.dataset[target]}`;
            price.classList.add('price-animation');
            setTimeout(() => price.classList.remove('price-animation'), 500);
        });

        billingPeriods.forEach(period => {
            period.textContent = isYearly ? 'Billed annually' : 'Billed monthly';
        });

        if (isYearly) {
            billingToggle.classList.add('active');
            toggleCircle.style.transform = 'translateX(1.75rem)';
            yearlyLabel.classList.add('font-bold');
            monthlyLabel.classList.remove('font-bold');
        } else {
            billingToggle.classList.remove('active');
            toggleCircle.style.transform = 'translateX(0)';
            monthlyLabel.classList.add('font-bold');
            yearlyLabel.classList.remove('font-bold');
        }
    }

    billingToggle.addEventListener('click', () => {
        isYearly = !isYearly;
        updatePrices();
    });

    // Set initial state
    updatePrices();
});
    // Add theme toggle functionality
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        const currentTheme = localStorage.getItem('theme') || 'dark';
        const sunIcon = themeToggleBtn.querySelector('.lucide-sun');
        const moonIcon = themeToggleBtn.querySelector('.lucide-moon');
        const toggleText = themeToggleBtn.querySelector('span span');

        function applyTheme(theme) {
            document.documentElement.classList.remove('dark', 'light');
            if (theme === 'light') {
                document.documentElement.classList.add('light');
                if (moonIcon) moonIcon.classList.remove('hidden');
                if (sunIcon) sunIcon.classList.add('hidden');
                if (toggleText) toggleText.textContent = 'Dark Mode';
            } else {
                document.documentElement.classList.add('dark');
                if (sunIcon) sunIcon.classList.remove('hidden');
                if (moonIcon) moonIcon.classList.add('hidden');
                if (toggleText) toggleText.textContent = 'Light Mode';
            }
        }

        applyTheme(currentTheme);

        themeToggleBtn.addEventListener('click', () => {
            let currentTheme = localStorage.getItem('theme') || 'dark';
            let nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', nextTheme);
            applyTheme(nextTheme);
        });
    }
});


