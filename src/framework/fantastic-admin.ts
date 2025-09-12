import type { Framework } from '#/framework'
import { FrameworkLayout, FrameworkUI } from '@/enum'

const infos: Framework = {
  name: 'Fantastic-admin',
  repo: 'fantastic-admin/basic',
  logo: 'https://fantastic-admin.hurui.me/logo.svg',
  docs: 'https://fantastic-admin.hurui.me',
  ui: [FrameworkUI.Element_Plus, FrameworkUI.可更换任意UI库],
  pure: true,
  themes: false,
  lightDark: true,
  rip: true,
  amblyopia: true,
  layout: [FrameworkLayout.单侧边栏, FrameworkLayout.双侧边栏, FrameworkLayout.双栏, FrameworkLayout.侧边栏浮动],
  menu: {
    auth: true,
    keepAlive: true,
    icon: true,
    activeIcon: false,
    badge: false,
    iframe: false,
    link: true,
    defaultOpened: true,
    alwaysShow: false,
    newWindow: true,
  },
  tabbar: {
    icon: true,
    actions: true,
    sortable: false,
    permanent: false,
    maximize: false,
    merge: false,
    persistent: false,
    hotkeys: true,
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
    component: true,
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
