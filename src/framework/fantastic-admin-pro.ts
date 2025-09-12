import type { Framework } from '#/framework'
import { FrameworkLayout, FrameworkUI } from '@/enum'

const infos: Framework = {
  name: 'Fantastic-admin 专业版',
  logo: 'https://fantastic-admin.hurui.me/logo.svg',
  docs: 'https://fantastic-admin.hurui.me',
  ui: [FrameworkUI.Element_Plus, FrameworkUI.可更换任意UI库],
  pure: true,
  themes: true,
  lightDark: true,
  rip: true,
  amblyopia: true,
  layout: [FrameworkLayout.单侧边栏, FrameworkLayout.双侧边栏, FrameworkLayout.双栏, FrameworkLayout.顶栏浮动, FrameworkLayout.侧边栏浮动, FrameworkLayout.顶栏浮动面板, FrameworkLayout.侧边栏浮动面板],
  menu: {
    auth: true,
    keepAlive: true,
    icon: true,
    activeIcon: true,
    badge: true,
    iframe: true,
    link: true,
    defaultOpened: true,
    alwaysShow: true,
    newWindow: true,
  },
  tabbar: {
    icon: true,
    actions: true,
    sortable: true,
    permanent: true,
    maximize: true,
    merge: true,
    persistent: true,
    hotkeys: true,
  },
  search: {
    menu: true,
    tab: true,
    pinyin: true,
    hotkeys: true,
  },
  i18n: {
    enable: true,
    rtl: true,
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
