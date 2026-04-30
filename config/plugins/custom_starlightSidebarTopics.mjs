import starlightSidebarTopics from 'starlight-sidebar-topics'

export const custom_starlightSidebarTopics =
    starlightSidebarTopics([
        {
            label: 'Guides',
            link: '/guides/example',
            icon: 'open-book',
            // items: ['guides/example'],
            items: [
                {
                label: 'Guides',
                autogenerate: { directory: 'guides' },
                },
            ],
        },
        {
            label: 'Reference',
            link: '/reference/example',
            icon: 'information',
            // id: 'reference',
            badge: { text: 'Official', variant: 'success' },
            // items: ['reference/example'],
            items: [
                {
                label: 'Reference',
                autogenerate: { directory: 'reference' },
                },
            ],
        },
        {
            label: 'GitHub',
            icon: 'github',
            link: 'https://github.com/suddenlysixam/starlight-test',
        },
    ],{
        // topics: {
        //     reference: ['/staging/', '/staging/**/*'],
        // },
        exclude: [
            '/meetings', '/meetings/**/*',
            '/tags', '/tags/**/*',
        ],
    });