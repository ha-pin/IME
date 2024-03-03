import { defineConfig } from "vitepress"

const sidebarDownload = () => [
    {
        text: "适用指南",
        collapsible: true,
        items: [{ text: "选择最合适你的哈拼输入法", link: "/download/index" }],
    },
    {
        text: "适用平台",
        collapsible: true,
        items: [
            { text: "MacOS", link: "/download/macos" },
            { text: "Linux", link: "/download/linux" },
            // { text: 'HarmonyOS', link: '/download/ohos' },
            { text: 'iOS', link: '/download/ios' },
        ],
    },
    {
        text: "隐私敏感型用户",
        collapsible: true,
        items: [{ text: "中州韵输入法", link: "/download/rime" }],
    },
]

const nav = () => [{ text: "开发团队", link: "/team" }]

export default defineConfig({
    base: "/IME/",
    lang: "zh-CN",
    title: "哈拼输入法 HapinIME",
    description: "遇见你的全新哈萨克语输入法",
    lastUpdated: true,
    themeConfig: {
        nav: nav(),
        sidebar: {
            "/download/": sidebarDownload(),
        },
        footer: {
            message: "本项目由哈拼开源项目提供底层技术支持",
            copyright: `Copyright © 2022-${new Date().getFullYear()} 哈拼输入法`,
        },
        socialLinks: [{ icon: "github", link: "https://github.com/ha-pin" }],
    },
})
