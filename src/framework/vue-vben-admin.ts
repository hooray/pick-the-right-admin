import type { Framework } from '#/framework'
import { FrameworkLayout, FrameworkUI } from '@/enum'

const infos: Framework = {
  name: 'vue-vben-admin',
  repo: 'vbenjs/vue-vben-admin',
  logo: 'https://unpkg.com/@vbenjs/static-source@0.1.7/source/logo-v1.webp',
  docs: 'https://doc.vben.pro/',
  ui: [FrameworkUI.Ant_Design_Vue, FrameworkUI.可更换任意UI库],
  pure: true,
  themes: true,
  lightDark: true,
  rip: true,
  amblyopia: true,
  layout: [FrameworkLayout.单侧边栏, FrameworkLayout.双侧边栏, FrameworkLayout.双栏, FrameworkLayout.顶栏浮动, FrameworkLayout.侧边栏浮动],
  menu: {
    auth: true,
    keepAlive: true,
    icon: true,
    activeIcon: true,
    badge: true,
    iframe: true,
    link: true,
    defaultOpened: false,
    alwaysShow: false,
    newWindow: false,
  },
  tabbar: {
    icon: true,
    actions: true,
    sortable: true,
    permanent: true,
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
    enable: true,
    rtl: false,
  },
  auth: {
    function: true,
    directive: true,
    component: true,
  },
  others: {
    breadcrumb: true,
    reload: true,
    fullscreen: true,
    lockScreen: true,
    watermark: true,
    footer: true,
  },
}

export default infos
