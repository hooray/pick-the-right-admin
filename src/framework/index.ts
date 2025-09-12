import type { Framework } from '#/framework'

// 使用 import.meta.glob 动态导入同级目录下除 index.ts 外的所有 ts 文件
const modules = import.meta.glob('./*.ts', { eager: true })

// 过滤掉 index.ts 文件，并将模块拼装成数组
const moduleEntries = Object.keys(modules)
  .filter(key => key !== './index.ts')
  .map(key => ({
    fileName: key.replace('./', '').replace('.ts', ''),
    module: (modules[key] as { default: any }).default,
  }))

const fantasticModules = moduleEntries.filter(entry =>
  entry.fileName === 'fantastic-admin' || entry.fileName === 'fantastic-admin-pro',
)
const otherModules = moduleEntries.filter(entry =>
  entry.fileName !== 'fantastic-admin' && entry.fileName !== 'fantastic-admin-pro',
)

// 重新拼装数组
const frameworkModules = [...fantasticModules, ...otherModules].map(entry => entry.module) as Framework[]

// 导出拼装后的数组
export default frameworkModules
