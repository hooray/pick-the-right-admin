import type { Framework } from '#/framework'
import { FrameworkLayout, FrameworkUI } from '@/enum'

const infos: Framework = {
  name: 'vue3-element-admin',
  repo: 'youlaitech/vue3-element-admin',
  logo: 'https://www.youlai.tech/assets/image/vue-logo.png',
  docs: 'https://www.youlai.tech/vue3-element-admin/',
  ui: FrameworkUI.Element_Plus,
  pure: true,
  themes: true,
  lightDark: true,
  rip: false,
  amblyopia: false,
  layout: [FrameworkLayout.单侧边栏, FrameworkLayout.双栏, FrameworkLayout.顶栏浮动, FrameworkLayout.侧边栏浮动],
  menu: {
    auth: true,
    keepAlive: true,
    icon: true,
    activeIcon: false,
    badge: false,
    iframe: false,
    link: false,
    defaultOpened: false,
    alwaysShow: false,
    newWindow: true,
  },
  tabbar: {
    icon: false,
    actions: true,
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
    footer: false,
  },
}

export default infos
