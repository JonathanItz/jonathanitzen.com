console.log('👋')

document.addEventListener('alpine:init', () => {
    Alpine.data('skills', () => ({
        items: [
            { text: 'Laravel' },
            { text: 'MySQL' },
            { text: 'Salesforce Commerce Cloud' },
            { text: 'Livewire' },
            { text: 'AlpineJS / JavaScript / jQuery' },
            { text: 'HTML / CSS / SASS / TailwindCSS' },
            { text: 'PHP' },
            { text: 'NextJS / React' },
            { text: 'SEO' },
            { text: 'WordPress' },
            { text: 'NodeJS' },
            { text: 'VS Code' },
        ],
    }));

    // Directive: x-tooltip
    Alpine.directive('tooltip', (el, { expression }) => {
        tippy(el, { content: expression, theme: 'jonathan', })
    })
})