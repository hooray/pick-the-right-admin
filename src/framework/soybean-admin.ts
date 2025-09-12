import type { Framework } from '#/framework'
import { FrameworkLayout, FrameworkUI } from '@/enum'

const infos: Framework = {
  name: 'soybean-admin',
  repo: 'soybeanjs/soybean-admin',
  logo: 'https://docs.soybeanjs.cn/logo.svg',
  docs: 'https://docs.soybeanjs.cn/zh/',
  ui: [FrameworkUI.Naive_UI, FrameworkUI.Ant_Design_Vue],
  pure: false,
  themes: true,
  lightDark: true,
  rip: false,
  amblyopia: false,
  layout: [FrameworkLayout.单侧边栏, FrameworkLayout.双侧边栏, FrameworkLayout.双栏, FrameworkLayout.顶栏浮动, FrameworkLayout.侧边栏浮动],
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
    icon: true,
    actions: true,
    sortable: false,
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
    directive: false,
    component: false,
  },
  others: {
    breadcrumb: true,
    reload: true,
    fullscreen: true,
    lockScreen: false,
    watermark: false,
    footer: true,
  },
}

export default infos
