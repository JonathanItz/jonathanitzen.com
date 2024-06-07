console.log('👋')

document.addEventListener('alpine:init', () => {
    // Directive: x-tooltip
    Alpine.directive('tooltip', (el, { expression }) => {
        tippy(el, { content: expression, theme: 'jonathan', })
    })
})