import starlightUiTweaks from 'starlight-ui-tweaks'

export const custom_starlightUiTweaks =
    starlightUiTweaks({
        navbarLinks: [
            { label: "Documentation", href: "/guides/example" },
        ],
        footer: {
            showSocialIcons: false,
            copyright: "My Company. All rights reserved.",
            firstColumn: {
            title: "Product",
            links: [
                { label: "Features", href: "/features" },
                { label: "Pricing", href: "/pricing" },
                { label: "Changelog", href: "/changelog" },
            ],
            },
            secondColumn: {
            title: "Resources",
            links: [
                { label: "Documentation", href: "/docs" },
                { label: "Guides", href: "/guides" },
                { label: "API Reference", href: "/api" },
            ],
            },
            thirdColumn: {
            title: "Support",
            links: [
                { label: "Help Center", href: "/help" },
                { label: "Community", href: "/community" },
                { label: "Contact", href: "/contact" },
            ],
            },
            fourthColumn: {
            title: "Company",
            links: [
                { label: "About", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Careers", href: "/careers" },
            ],
            },
        },
    });