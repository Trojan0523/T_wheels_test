module.exports = {
    base: '/T_wheels_test/',
    title: 'T_Wheels UI',
    description: '一个自建的UI框架',
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            {text: '文档', link: '/guide/'},
            {text: 'GitHub', link: 'https://www.google.com'},

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
                    '/components/tabs',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/toast',
                    '/components/collapse',

                ]
            },

        ]
    }
}