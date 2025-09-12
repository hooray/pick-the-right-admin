import type { Framework } from '#/framework'
import { FrameworkLayout, FrameworkUI } from '@/enum'

const infos: Framework = {
  name: 'art-design-pro',
  repo: 'Daymychen/art-design-pro',
  logo: 'https://www.lingchen.kim/art-design-pro/docs/logo.webp',
  docs: 'https://www.lingchen.kim/art-design-pro/docs/',
  ui: FrameworkUI.Ant_Design_Vue,
  pure: true,
  themes: true,
  lightDark: true,
  rip: false,
  amblyopia: true,
  layout: [FrameworkLayout.单侧边栏, FrameworkLayout.双侧边栏, FrameworkLayout.双栏, FrameworkLayout.顶栏浮动],
  menu: {
    auth: true,
    keepAlive: true,
    icon: true,
    activeIcon: false,
    badge: true,
    iframe: true,
    link: true,
    defaultOpened: false,
    alwaysShow: false,
    newWindow: false,
  },
  tabbar: {
    icon: false,
    actions: true,
    sortable: false,
    permanent: true,
    maximize: false,
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
    component: false,
  },
  others: {
    breadcrumb: true,
    reload: true,
    fullscreen: true,
    lockScreen: true,
    watermark: true,
    footer: false,
  },
}

export default infos
