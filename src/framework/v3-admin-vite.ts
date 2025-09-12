import type { Framework } from '#/framework'
import { FrameworkLayout, FrameworkUI } from '@/enum'

const infos: Framework = {
  name: 'v3-admin-vite',
  repo: 'un-pany/v3-admin-vite',
  logo: 'https://un-pany.github.io/v3-admin-vite/favicon.ico',
  docs: 'https://juejin.cn/post/7445151895121543209',
  ui: FrameworkUI.Element_Plus,
  pure: false,
  themes: true,
  lightDark: true,
  rip: true,
  amblyopia: true,
  layout: [FrameworkLayout.单侧边栏, FrameworkLayout.顶栏浮动, FrameworkLayout.侧边栏浮动],
  menu: {
    auth: true,
    keepAlive: true,
    icon: true,
    activeIcon: false,
    badge: false,
    iframe: false,
    link: true,
    defaultOpened: false,
    alwaysShow: false,
    newWindow: true,
  },
  tabbar: {
    icon: false,
    actions: true,
    sortable: false,
    permanent: false,
    maximize: true,
    merge: false,
    persistent: true,
    hotkeys: false,
  },
  search: {
    menu: true,
    tab: false,
    pinyin: false,
    hotkeys: true,
  },
  i18n: {
    enable: false,
    rtl: false,
  },
  auth: {
    function: true,
    directive: true,
    component: false,
  },
  others: {
    breadcrumb: true,
    reload: true,
    fullscreen: true,
    lockScreen: false,
    watermark: true,
    footer: true,
  },
}

export default infos
