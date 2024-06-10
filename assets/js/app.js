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
        itemsMobile: [
            { text: 'Laravel' },
            { text: 'Livewire' },
            { text: 'PHP' },
            { text: 'WordPress' },
            { text: 'MySQL' },
            { text: 'AlpineJS / JavaScript / jQuery' },
            { text: 'NextJS / React' },
            { text: 'NodeJS' },
            { text: 'Salesforce Commerce Cloud' },
            { text: 'HTML / CSS / SASS / TailwindCSS' },
            { text: 'SEO' },
            { text: 'VS Code' },
        ],
    }));

    // Magic: $tooltip
    Alpine.magic('tooltip', el => message => {
        let instance = tippy(el, { content: message, trigger: 'manual' })

        instance.show()

        setTimeout(() => {
            instance.hide()

            setTimeout(() => instance.destroy(), 150)
        }, 2000)
    })

    // Directive: x-tooltip
    Alpine.directive('tooltip', (el, { expression }) => {
        tippy(el, { content: expression, theme: 'jonathan', })
    })
})