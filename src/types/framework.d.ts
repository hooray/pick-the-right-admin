import type { FrameworkLayout, FrameworkUI } from '@/enum'

export interface Framework {
  /** 名称，github 仓库名 */
  name: string
  /** github 仓库地址，格式为 `owner/repo` */
  repo?: string
  /** LOGO 地址 */
  logo?: string
  /** 文档地址 */
  docs: string
  /** UI 框架 */
  ui: FrameworkUI | FrameworkUI[]
  /** 是否提供纯净版 */
  pure: boolean
  /** 是否支持多主题 */
  themes: boolean
  /** 是否支持明暗模式切换 */
  lightDark: boolean
  /** 是否支持哀悼模式 */
  rip: boolean
  /** 是否支持色弱模式 */
  amblyopia: boolean
  /** 布局 */
  layout: FrameworkLayout[]
  /** 导航菜单 */
  menu: {
    /** 是否支持鉴权，无权限时不显示该导航菜单 */
    auth: boolean
    /** 是否支持页面缓存 */
    keepAlive: boolean
    /** 是否支持图标显示 */
    icon: boolean
    /** 是否支持激活图标显示 */
    activeIcon: boolean
    /** 是否支持徽章显示 */
    badge: boolean
    /** 是否支持内嵌显示 */
    iframe: boolean
    /** 是否支持外链显示 */
    link: boolean
    /** 是否支持默认展开 */
    defaultOpened: boolean
    /** 是否支持始终展开 */
    alwaysShow: boolean
    /** 是否支持新窗口打开 */
    newWindow: boolean
  }
  /** 标签栏 */
  tabbar: {
    /** 是否支持图标显示 */
    icon: boolean
    /** 是否支持快捷操作 */
    actions: boolean
    /** 是否支持拖拽排序 */
    sortable: boolean
    /** 是否支持常驻 */
    permanent: boolean
    /** 是否支持最大化 */
    maximize: boolean
    /** 是否支持合并 */
    merge: boolean
    /** 是否支持持久化，即网页刷新后保持标签页 */
    persistent: boolean
    /** 是否支持快捷键 */
    hotkeys: boolean
  }
  /** 搜索 */
  search: {
    /** 是否支持导航搜索 */
    menu: boolean
    /** 是否支持页签搜索 */
    tab: boolean
    /** 是否支持拼音搜索 */
    pinyin: boolean
    /** 是否支持快捷键 */
    hotkeys: boolean
  }
  /** 国际化 */
  i18n: {
    /** 是否支持国际化 */
    enable: boolean
    /** 是否支持RTL模式 */
    rtl: boolean
  }
  /** 权限 */
  auth: {
    /** 是否提供鉴权函数 */
    function: boolean
    /** 是否提供鉴权指令 */
    directive: boolean
    /** 是否提供鉴权组件 */
    component: boolean
  }
  /** 其他 */
  others: {
    /** 是否支持面包屑导航 */
    breadcrumb: boolean
    /** 是否支持页面重载 */
    reload: boolean
    /** 是否支持全屏 */
    fullscreen: boolean
    /** 是否支持锁屏 */
    lockScreen: boolean
    /** 是否支持页面水印 */
    watermark: boolean
    /** 是否支持页面页脚 */
    footer: boolean
  }
}
