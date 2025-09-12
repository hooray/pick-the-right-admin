import type { Framework } from '#/framework'
import { FrameworkLayout, FrameworkUI } from '@/enum'

const infos: Framework = {
  name: 'vue-pure-admin',
  repo: 'pure-admin/vue-pure-admin',
  logo: 'https://pure-admin.github.io/vue-pure-admin/logo.svg',
  docs: 'https://pure-admin.cn/',
  ui: FrameworkUI.Element_Plus,
  pure: true,
  themes: true,
  lightDark: true,
  rip: true,
  amblyopia: true,
  layout: [FrameworkLayout.单侧边栏, FrameworkLayout.双栏, FrameworkLayout.顶栏浮动, FrameworkLayout.侧边栏浮动],
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
    newWindow: true,
  },
  tabbar: {
    icon: false,
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
    pinyin: true,
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
    lockScreen: false,
    watermark: true,
    footer: true,
  },
}

export default infos
