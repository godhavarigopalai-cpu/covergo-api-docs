// Initialize Mermaid
mermaid.initialize({
    startOnLoad: true,
    theme: 'default',
    themeVariables: {
        primaryColor: '#3f51b5',
        primaryTextColor: '#fff',
        primaryBorderColor: '#1a237e',
        lineColor: '#F8B229',
        secondaryColor: '#006100',
        tertiaryColor: '#fff',
        background: 'transparent',
        mainBkg: '#ffffff',
        secondBkg: '#f8f9fa',
        border1: '#e9ecef',
        border2: '#dee2e6'
    },
    er: {
        useMaxWidth: true,
        diagramPadding: 20,
        layoutDirection: 'TB',
        nodeSpacing: 100,
        rankSpacing: 50
    },
    flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis'
    },
    securityLevel: 'loose'
});

// Dark mode support
document.addEventListener('DOMContentLoaded', function() {
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === 'data-md-color-scheme') {
                const scheme = document.documentElement.getAttribute('data-md-color-scheme');
                if (scheme === 'slate') {
                    // Dark mode
                    mermaid.initialize({
                        theme: 'dark',
                        themeVariables: {
                            primaryColor: '#5c6bc0',
                            primaryTextColor: '#fff',
                            primaryBorderColor: '#3949ab',
                            lineColor: '#ffb74d',
                            secondaryColor: '#4caf50',
                            tertiaryColor: '#fff',
                            background: 'transparent',
                            mainBkg: '#1e1e1e',
                            secondBkg: '#2d2d2d',
                            border1: '#404040',
                            border2: '#555555'
                        }
                    });
                } else {
                    // Light mode
                    mermaid.initialize({
                        theme: 'default',
                        themeVariables: {
                            primaryColor: '#3f51b5',
                            primaryTextColor: '#fff',
                            primaryBorderColor: '#1a237e',
                            lineColor: '#F8B229',
                            secondaryColor: '#006100',
                            tertiaryColor: '#fff',
                            background: 'transparent',
                            mainBkg: '#ffffff',
                            secondBkg: '#f8f9fa',
                            border1: '#e9ecef',
                            border2: '#dee2e6'
                        }
                    });
                }
                // Re-render all mermaid diagrams
                mermaid.init();
            }
        });
    });

    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-md-color-scheme']
    });
});
