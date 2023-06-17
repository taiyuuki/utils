import { basename } from 'path'
import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import fg from 'fast-glob'
import { str_capital_all } from '../src/modules/string'

interface IndexTree {
    [index: string]: {
        link: string
        items?: IndexTree
    }
}

function resolveTitle(title: string) {
    title = title === 'utils' ? title : title.replace('utils.', '')
    title = title.split('.').join(' ')
    title = str_capital_all(title.replace(/_/g, ' '))
    return title
}

function getTree(file: string, prefix: string, tree = {}) {
    const [ cur, ...rest ] = file.replace('.md', '').split('.')
    const curPath = prefix + cur
    if (!tree[curPath]) {
        tree[curPath] = {
            link: '/doc/' + curPath + '.md',
        }
    }
    if (rest.length > 0) {
        if (!tree[curPath].items) {
            tree[curPath].items = {}
        }
        getTree(rest.join('.'), curPath + '.', tree[curPath].items)
    }
}

function treeToItems(tree: IndexTree) {
    const items: DefaultTheme.SidebarItem[] = []
    Object.keys(tree).forEach((key) => {
        const item: DefaultTheme.SidebarItem = {
            text: resolveTitle(key),
            link: tree[key].link,
        }
        if (tree[key].items) {
            if (!item.items) {
                item.items = []
            }
            item.items.push(...treeToItems(tree[key].items!))
        }
        items.push(item)
    })
    return items
}

const tree
= fg.sync(['./doc/**/*.md'])
    .map((path) => basename(path))
    .reduce((tree, file) => {
        getTree(file, '', tree)
        return tree
    }, {})

const docs: DefaultTheme.SidebarItem[] = treeToItems(tree)

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Utils',
    description: 'Documentations of @taiyuuki/utils',
    themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/doc/index' },
            { text: 'API', link: '/doc/utils' },
        ],

        sidebar: [
            {
                text: 'API',
                items: docs,
            },
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/taiyuuki/utils' },
        ],
    },

    markdown: {
        theme: {
            light: 'light-plus',
            dark: 'github-dark',
        },
    },
})
