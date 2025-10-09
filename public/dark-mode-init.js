// Force dark mode - completely override any system preferences
(function() {
  // Force add dark class immediately
  document.documentElement.classList.add('dark');
  document.documentElement.classList.remove('light');
  
  // Override any potential light mode styles
  document.documentElement.style.colorScheme = 'dark';
  
  // Lock in localStorage
  localStorage.setItem('theme', 'dark');
  
  // Override system color scheme detection
  const style = document.createElement('style');
  style.textContent = `
    * { color-scheme: dark !important; }
    html { color-scheme: dark !important; }
    body { color-scheme: dark !important; }
  `;
  document.head.appendChild(style);
})();
