import starlightUiTweaks from 'starlight-ui-tweaks'
import { withBase } from '../basePath.mjs';

export const custom_starlightUiTweaks =
    starlightUiTweaks({
        navbarLinks: [
            { label: "Documentation", href: withBase("/guides/example") },
            { label: "Meetings", href: withBase("/meetings") },
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