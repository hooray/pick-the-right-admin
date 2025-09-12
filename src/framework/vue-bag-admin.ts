import type { Framework } from '#/framework'
import { FrameworkLayout, FrameworkUI } from '@/enum'

const infos: Framework = {
  name: 'vue-bag-admin',
  repo: 'hangjob/vue-bag-admin',
  logo: 'https://vite.itnavs.com/doc/logo-min.png',
  docs: 'https://vite.itnavs.com/doc/',
  ui: FrameworkUI.Naive_UI,
  pure: false,
  themes: true,
  lightDark: true,
  rip: false,
  amblyopia: false,
  layout: [FrameworkLayout.单侧边栏, FrameworkLayout.双侧边栏, FrameworkLayout.侧边栏浮动],
  menu: {
    auth: true,
    keepAlive: true,
    icon: true,
    activeIcon: false,
    badge: true,
    iframe: true,
    link: false,
    defaultOpened: false,
    alwaysShow: false,
    newWindow: false,
  },
  tabbar: {
    icon: false,
    actions: false,
    sortable: false,
    permanent: false,
    maximize: false,
    merge: false,
    persistent: false,
    hotkeys: false,
  },
  search: {
    menu: false,
    tab: false,
    pinyin: false,
    hotkeys: false,
  },
  i18n: {
    enable: true,
    rtl: false,
  },
  auth: {
    function: false,
    directive: false,
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
