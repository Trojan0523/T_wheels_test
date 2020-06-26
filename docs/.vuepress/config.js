module.exports = {
    base: '/T_wheels_test/',
    title: 'T_Wheels UI',
    description: '一个自建的UI框架',
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            {text: '文档', link: '/guide/'},
            {text: 'GitHub', link: 'https://github.com/Trojan0523'},

        ],
        sidebar: [
            {
                title: '入门',
                children: [
                    '/install/',
                    '/get-started/',
                ]
            },
            {
                title: '组件',
                children: [
                    '/components/button',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/toast',
                    '/components/collapse',
                    '/components/popover',
                    '/components/tabs',
                ]
            },

        ]
    }
}