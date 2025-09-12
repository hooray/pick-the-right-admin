import type { Framework } from '#/framework'
import { FrameworkLayout, FrameworkUI } from '@/enum'

const infos: Framework = {
  name: 'naive-ui-admin',
  repo: 'jekip/naive-ui-admin',
  logo: 'https://docs.naiveadmin.com/logo.png',
  docs: 'https://docs.naiveadmin.com/',
  ui: FrameworkUI.Naive_UI,
  pure: false,
  themes: true,
  lightDark: true,
  rip: false,
  amblyopia: false,
  layout: [FrameworkLayout.单侧边栏, FrameworkLayout.顶栏浮动, FrameworkLayout.侧边栏浮动],
  menu: {
    auth: true,
    keepAlive: true,
    icon: true,
    activeIcon: false,
    badge: false,
    iframe: true,
    link: true,
    defaultOpened: false,
    alwaysShow: false,
    newWindow: false,
  },
  tabbar: {
    icon: false,
    actions: true,
    sortable: true,
    permanent: true,
    maximize: false,
    merge: false,
    persistent: true,
    hotkeys: false,
  },
  search: {
    menu: false,
    tab: false,
    pinyin: false,
    hotkeys: false,
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
    lockScreen: true,
    watermark: false,
    footer: false,
  },
}

export default infos
