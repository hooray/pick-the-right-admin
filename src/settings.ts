import type { RecursiveRequired, Settings } from '#/global'
import { cloneDeep } from 'es-toolkit'
import settingsDefault from '@/settings.default'
import { merge } from '@/utils/object'

const globalSettings: Settings.all = {
  app: {
    colorScheme: '',
  },
  menu: {
    mode: 'single',
  },
  toolbar: {
    enable: false,
  },
  copyright: {
    enable: true,
    company: '本网站基于 Fantastic-admin 开发',
    website: 'https://fantastic-admin.hurui.me',
  },
}

export default merge(globalSettings, cloneDeep(settingsDefault)) as RecursiveRequired<Settings.all>
