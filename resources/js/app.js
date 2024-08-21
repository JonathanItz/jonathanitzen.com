console.log("👋");

window.slideUp = function ($el) {
    anime({
        targets: $el,
        translateY: [100, 0],
        opacity: '1',
        duration: 1800,
        delay: 100,
    });
};

document.addEventListener("alpine:init", () => {
    Alpine.data("skills", () => ({
        items: [
            { text: "PHP" },
            { text: "NextJS / React" },
            { text: "Salesforce Commerce Cloud" },

            { text: "WordPress" },
            { text: "AlpineJS / JavaScript / jQuery" },
            { text: "HTML / CSS / SASS / TailwindCSS" },

            { text: "MySQL" },
            { text: "Livewire" },
            { text: "SEO" },

            { text: "Laravel" },
            { text: "NodeJS" },
            { text: "VS Code" },
        ],
        itemsMobile: [
            { text: "PHP" },
            { text: "WordPress" },
            { text: "MySQL" },
            { text: "Laravel" },
            { text: "NextJS / React" },
            { text: "AlpineJS / JavaScript / jQuery" },
            { text: "Livewire" },
            { text: "NodeJS" },
            { text: "Salesforce Commerce Cloud" },
            { text: "HTML / CSS / SASS / TailwindCSS" },
            { text: "SEO" },
            { text: "VS Code" },
        ],
    }));

    // Magic: $tooltip
    Alpine.magic("tooltip", (el) => (message) => {
        let instance = tippy(el, { content: message, trigger: "manual" });

        instance.show();

        setTimeout(() => {
            instance.hide();

            setTimeout(() => instance.destroy(), 150);
        }, 2000);
    });

    // Directive: x-tooltip
    Alpine.directive("tooltip", (el, { expression }) => {
        tippy(el, { content: expression, theme: "jonathan" });
    });
});
