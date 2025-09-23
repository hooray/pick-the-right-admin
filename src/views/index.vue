<route lang="yaml">
meta:
  title: 主页
  icon: ant-design:home-twotone
</route>

<script setup lang="ts">
import { createReusableTemplate } from '@vueuse/core'
import { FrameworkLayout } from '@/enum'
import frameworkModules from '@/framework'
import ColorScheme from '@/layouts/components/Topbar/Toolbar/ColorScheme/index.vue'
import { useFaImagePreview } from '@/ui/components/FaImagePreview'

const BooleanStatus = createReusableTemplate<{
  status: boolean
}>()

const isIntro = ref(false)

function handleOpen(link: string) {
  window.open(link, '_blank')
}

const { open: handleImagePreview } = useFaImagePreview()

const layouts = Object.keys(FrameworkLayout).filter(key => !Number.isNaN(Number(FrameworkLayout[key as keyof typeof FrameworkLayout])))
</script>

<template>
  <div class="absolute h-full w-full flex flex-col">
    <BooleanStatus.define v-slot="{ status }">
      <div class="flex-center">
        <FaIcon :name="status ? 'i-twemoji:check-mark-button' : 'i-twemoji:letter-x'" class="size-5" />
      </div>
    </BooleanStatus.define>
    <FaPageHeader title="选择合适的后台管理框架" class="mb-0" default-class="flex-center gap-2">
      <template #description>
        使用 Github 高级搜索 <strong>stars:>1000 language:Vue language:Typescript pushed:>2025-07-01 admin</strong> 进行初步筛选，再进行人肉筛选。
      </template>
      <FaButton variant="default" size="icon" class="size-9" @click="isIntro = true">
        <FaIcon name="i-mdi:lightbulb-on" class="size-4" />
      </FaButton>
      <FaModal v-model="isIntro" :header="false" :footer="false" content-class="p-10 space-y-4 text-base">
        <p>
          本网站灵感来源于<a href="http://vue.easydo.work/" target="_blank" class="text-blue-500 no-underline hover:underline">此网站</a>，但该网站统计信息并不准确，且无法进行横向对比，而且有部分框架已长期不更新。因此为了更好的帮助开发者选择合适的后台管理框架，我创建了这个网站。
        </p>
        <p>
          但考虑到网上后台管理框架种类繁多，本网站也无法对所有后台管理框架进行详细的横向对比，因此能入选到本网站的框架会有几条硬性要求：
        </p>
        <ul class="text-sm space-y-3">
          <li class="flex items-center gap-3 border border rounded-lg p-3 shadow-sm">
            <div class="h-6 w-6 flex flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm text-blue-600 font-semibold">
              1
            </div>
            <span>技术栈为 Vite + Vue 3，纯前端，无后端依赖</span>
          </li>
          <li class="flex items-center gap-3 border border rounded-lg p-3 shadow-sm">
            <div class="h-6 w-6 flex flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-sm text-green-600 font-semibold">
              2
            </div>
            <span>Github stars 数高于 1000</span>
          </li>
          <li class="flex items-center gap-3 border border rounded-lg p-3 shadow-sm">
            <div class="h-6 w-6 flex flex-shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm text-purple-600 font-semibold">
              3
            </div>
            <span>有提供开发文档或教程</span>
          </li>
          <li class="flex items-center gap-3 border border rounded-lg p-3 shadow-sm">
            <div class="h-6 w-6 flex flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm text-orange-600 font-semibold">
              4
            </div>
            <span>持续更新维护，最近一次提交距今不超过 3 个月</span>
          </li>
        </ul>
        <p>
          除此之外，所有对比项仅检查是否支持，不对使用方式、使用范围等进行评判，因为不同框架有不同的设计理念。
        </p>
        <p>
          举例来说，水印功能有的框架是支持全局设置，而有的框架则是页面级别的设置，我会一律视为支持该功能。
        </p>
      </FaModal>
      <FaButton variant="secondary" size="icon" class="size-9" @click="handleOpen('https://github.com/hooray/pick-the-right-admin')">
        <FaIcon name="i-simple-icons:github" class="size-4" />
      </FaButton>
      <ColorScheme />
    </FaPageHeader>
    <FaPageMain class="flex-1 overflow-auto" title-class="flex flex-col gap-2" main-class="flex flex-col overflow-auto">
      <el-table :data="frameworkModules" size="large" border height="100%">
        <el-table-column label="后台框架" width="450" fixed="left">
          <template #default="{ row }">
            <div class="flex items-center gap-2">
              <div v-if="row.logo" :style="{ backgroundImage: `url(${row.logo})` }" class="m-3 size-12 bg-contain bg-center bg-no-repeat" />
              <div class="flex flex-1 flex-col gap-2">
                <div class="flex items-center gap-2">
                  <div class="text-base font-medium">
                    {{ row.name }}
                  </div>
                  <FaButton v-if="row.repo" variant="outline" size="sm" class="h-6 gap-1 px-1" @click="handleOpen(`https://github.com/${row.repo}`)">
                    <FaIcon name="i-mdi:github" class="size-4" />
                    仓库
                  </FaButton>
                  <FaButton variant="outline" size="sm" class="h-6 gap-1 px-1" @click="handleOpen(row.docs)">
                    <FaIcon name="i-twemoji:open-book" class="size-4" />
                    文档
                  </FaButton>
                </div>
                <div class="flex items-center gap-2">
                  <img v-if="row.repo" :src="`https://img.shields.io/github/stars/${row.repo}`" alt="stars" class="cursor-pointer" @click="handleImagePreview(`https://starchart.cc/${row.repo}.svg`)">
                  <img v-if="row.repo" :src="`https://img.shields.io/github/last-commit/${row.repo}`" alt="last-commit">
                </div>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column width="100" align="center">
          <template #header>
            <div class="flex-center gap-1">
              UI 库
              <FaTooltip>
                <template #content>
                  <p>UI 库在很大程度上决定了开发者的技术选型，因此在选择后台管理框架时，应该首先了解该框架是否支持你期望的 UI 库</p>
                </template>
                <FaIcon name="i-ri:question-line" class="cursor-help text-base text-orange" />
              </FaTooltip>
            </div>
          </template>
          <template #default="{ row }">
            <div class="flex-center gap-3">
              <template v-if="typeof row.ui === 'string'">
                <FaIcon v-if="row.ui !== ''" :name="row.ui" class="size-5" />
                <FaTooltip v-else text="可更换任意 UI 库">
                  <FaIcon name="i-twemoji:check-mark-button" class="size-5" />
                </FaTooltip>
              </template>
              <template v-else>
                <template v-for="ui in row.ui" :key="ui">
                  <FaIcon v-if="ui !== ''" :name="ui" class="size-5" />
                  <FaTooltip v-else text="可更换任意 UI 库">
                    <FaIcon name="i-twemoji:check-mark-button" class="size-5" />
                  </FaTooltip>
                </template>
              </template>
            </div>
          </template>
        </el-table-column>
        <el-table-column width="100" align="center">
          <template #header>
            <div class="flex-center gap-1">
              纯净版
              <FaTooltip>
                <template #content>
                  <p>纯净版即没有任何用于演示的代码和插件，方便让开发者快速进入开发阶段</p>
                </template>
                <FaIcon name="i-ri:question-line" class="cursor-help text-base text-orange" />
              </FaTooltip>
            </div>
          </template>
          <template #default="{ row }">
            <BooleanStatus.reuse :status="row.pure" />
          </template>
        </el-table-column>
        <el-table-column label="主题" align="center">
          <el-table-column width="100" align="center">
            <template #header>
              <div class="flex-center gap-1">
                多主题
                <FaTooltip>
                  <template #content>
                    <p>支持运行时切换主题风格</p>
                  </template>
                  <FaIcon name="i-ri:question-line" class="cursor-help text-base text-orange" />
                </FaTooltip>
              </div>
            </template>
            <template #default="{ row }">
              <BooleanStatus.reuse :status="row.themes" />
            </template>
          </el-table-column>
          <el-table-column label="明暗模式" width="100" align="center">
            <template #default="{ row }">
              <BooleanStatus.reuse :status="row.lightDark" />
            </template>
          </el-table-column>
          <el-table-column label="哀悼模式" width="100" align="center">
            <template #default="{ row }">
              <BooleanStatus.reuse :status="row.rip" />
            </template>
          </el-table-column>
          <el-table-column label="色弱模式" width="100" align="center">
            <template #default="{ row }">
              <BooleanStatus.reuse :status="row.amblyopia" />
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column align="center">
          <template #header>
            <div class="flex-center gap-1">
              布局
              <FaTooltip>
                <template #content>
                  <p>由于各家对于布局的名称叫法不一，大致整理了以下几种</p>
                </template>
                <FaIcon name="i-ri:question-line" class="cursor-help text-base text-orange" />
              </FaTooltip>
            </div>
          </template>
          <template v-for="(name, index) in layouts" :key="name">
            <el-table-column :label="name" width="100" align="center">
              <template #header>
                <div class="flex-center gap-1">
                  布局{{ index + 1 }}
                  <FaTooltip>
                    <template #content>
                      <div class="flex-col-center gap-2 px-1 pb-1 pt-3">
                        <img v-if="FrameworkLayout[name as keyof typeof FrameworkLayout] === FrameworkLayout.单侧边栏" src="@/assets/images/layout_1.png" class="w-150 rounded">
                        <img v-if="FrameworkLayout[name as keyof typeof FrameworkLayout] === FrameworkLayout.双侧边栏" src="@/assets/images/layout_2.png" class="w-150 rounded">
                        <img v-if="FrameworkLayout[name as keyof typeof FrameworkLayout] === FrameworkLayout.双栏" src="@/assets/images/layout_3.png" class="w-150 rounded">
                        <img v-if="FrameworkLayout[name as keyof typeof FrameworkLayout] === FrameworkLayout.顶栏浮动" src="@/assets/images/layout_4.png" class="w-150 rounded">
                        <img v-if="FrameworkLayout[name as keyof typeof FrameworkLayout] === FrameworkLayout.侧边栏浮动" src="@/assets/images/layout_5.png" class="w-150 rounded">
                        <img v-if="FrameworkLayout[name as keyof typeof FrameworkLayout] === FrameworkLayout.顶栏浮动面板" src="@/assets/images/layout_6.png" class="w-150 rounded">
                        <img v-if="FrameworkLayout[name as keyof typeof FrameworkLayout] === FrameworkLayout.侧边栏浮动面板" src="@/assets/images/layout_7.png" class="w-150 rounded">
                        <div class="text-xl font-medium">
                          {{ name }}
                        </div>
                      </div>
                    </template>
                    <FaIcon name="i-ri:question-line" class="cursor-help text-base text-orange" />
                  </FaTooltip>
                </div>
              </template>
              <template #default="{ row }">
                <BooleanStatus.reuse :status="row.layout.includes(FrameworkLayout[name as keyof typeof FrameworkLayout])" />
              </template>
            </el-table-column>
          </template>
        </el-table-column>
        <el-table-column label="导航菜单" align="center">
          <el-table-column width="100" align="center">
            <template #header>
              <div class="flex-center gap-1">
                鉴权
                <FaTooltip>
                  <template #content>
                    <p>无权限的导航菜单将禁止访问</p>
                  </template>
                  <FaIcon name="i-ri:question-line" class="cursor-help text-base text-orange" />
                </FaTooltip>
              </div>
            </template>
            <template #default="{ row }">
              <BooleanStatus.reuse :status="row.menu.auth" />
            </template>
          </el-table-column>
          <el-table-column width="100" align="center">
            <template #header>
              <div class="flex-center gap-1">
                缓存
                <FaTooltip>
                  <template #content>
                    <p>使用 keep-alive 缓存页面</p>
                  </template>
                  <FaIcon name="i-ri:question-line" class="cursor-help text-base text-orange" />
                </FaTooltip>
              </div>
            </template>
            <template #default="{ row }">
              <BooleanStatus.reuse :status="row.menu.keepAlive" />
            </template>
          </el-table-column>
          <el-table-column label="图标" width="100" align="center">
            <template #default="{ row }">
              <BooleanStatus.reuse :status="row.menu.icon" />
            </template>
          </el-table-column>
          <el-table-column width="120" align="center">
            <template #header>
              <div class="flex-center gap-1">
                激活图标
                <FaTooltip>
                  <template #content>
                    <p>导航菜单选中激活时的图标</p>
                  </template>
                  <FaIcon name="i-ri:question-line" class="cursor-help text-base text-orange" />
                </FaTooltip>
              </div>
            </template>
            <template #default="{ row }">
              <BooleanStatus.reuse :status="row.menu.activeIcon" />
            </template>
          </el-table-column>
          <el-table-column label="徽章" width="100" align="center">
            <template #default="{ row }">
              <BooleanStatus.reuse :status="row.menu.badge" />
            </template>
          </el-table-column>
          <el-table-column width="100" align="center">
            <template #header>
              <div class="flex-center gap-1">
                内嵌
                <FaTooltip>
                  <template #content>
                    <p>使用 iframe 打开目标页面</p>
                  </template>
                  <FaIcon name="i-ri:question-line" class="cursor-help text-base text-orange" />
                </FaTooltip>
              </div>
            </template>
            <template #default="{ row }">
              <BooleanStatus.reuse :status="row.menu.iframe" />
            </template>
          </el-table-column>
          <el-table-column width="100" align="center">
            <template #header>
              <div class="flex-center gap-1">
                外链
                <FaTooltip>
                  <template #content>
                    <p>在新窗口打开外部链接</p>
                  </template>
                  <FaIcon name="i-ri:question-line" class="cursor-help text-base text-orange" />
                </FaTooltip>
              </div>
            </template>
            <template #default="{ row }">
              <BooleanStatus.reuse :status="row.menu.link" />
            </template>
          </el-table-column>
          <el-table-column width="120" align="center">
            <template #header>
              <div class="flex-center gap-1">
                默认展开
                <FaTooltip>
                  <template #content>
                    <p>默认展开下级导航菜单</p>
                  </template>
                  <FaIcon name="i-ri:question-line" class="cursor-help text-base text-orange" />
                </FaTooltip>
              </div>
            </template>
            <template #default="{ row }">
              <BooleanStatus.reuse :status="row.menu.defaultOpened" />
            </template>
          </el-table-column>
          <el-table-column width="120" align="center">
            <template #header>
              <div class="flex-center gap-1">
                始终展开
                <FaTooltip>
                  <template #content>
                    <p>始终展开下级导航菜单</p>
                  </template>
                  <FaIcon name="i-ri:question-line" class="cursor-help text-base text-orange" />
                </FaTooltip>
              </div>
            </template>
            <template #default="{ row }">
              <BooleanStatus.reuse :status="row.menu.alwaysShow" />
            </template>
          </el-table-column>
          <el-table-column width="140" align="center">
            <template #header>
              <div class="flex-center gap-1">
                新窗口打开
                <FaTooltip>
                  <template #content>
                    <p>支持按住 Command/Ctrl 键点击导航栏项目在新窗口打开</p>
                  </template>
                  <FaIcon name="i-ri:question-line" class="cursor-help text-base text-orange" />
                </FaTooltip>
              </div>
            </template>
            <template #default="{ row }">
              <BooleanStatus.reuse :status="row.menu.newWindow" />
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column label="标签栏" align="center">
          <el-table-column label="图标" width="100" align="center">
            <template #default="{ row }">
              <BooleanStatus.reuse :status="row.tabbar.icon" />
            </template>
          </el-table-column>
          <el-table-column width="120" align="center">
            <template #header>
              <div class="flex-center gap-1">
                快捷操作
                <FaTooltip>
                  <template #content>
                    <p>支持批量关闭标签页，或者其他更多操作内容</p>
                  </template>
                  <FaIcon name="i-ri:question-line" class="cursor-help text-base text-orange" />
                </FaTooltip>
              </div>
            </template>
            <template #default="{ row }">
              <BooleanStatus.reuse :status="row.tabbar.actions" />
            </template>
          </el-table-column>
          <el-table-column label="拖拽排序" width="100" align="center">
            <template #default="{ row }">
              <BooleanStatus.reuse :status="row.tabbar.sortable" />
            </template>
          </el-table-column>
          <el-table-column width="100" align="center">
            <template #header>
              <div class="flex-center gap-1">
                常驻
                <FaTooltip>
                  <template #content>
                    <p>常驻标签页无法关闭</p>
                  </template>
                  <FaIcon name="i-ri:question-line" class="cursor-help text-base text-orange" />
                </FaTooltip>
              </div>
            </template>
            <template #default="{ row }">
              <BooleanStatus.reuse :status="row.tabbar.permanent" />
            </template>
          </el-table-column>
          <el-table-column width="100" align="center">
            <template #header>
              <div class="flex-center gap-1">
                最大化
                <FaTooltip>
                  <template #content>
                    <p>将业务页面全屏或最大化展示</p>
                  </template>
                  <FaIcon name="i-ri:question-line" class="cursor-help text-base text-orange" />
                </FaTooltip>
              </div>
            </template>
            <template #default="{ row }">
              <BooleanStatus.reuse :status="row.tabbar.maximize" />
            </template>
          </el-table-column>
          <el-table-column width="100" align="center">
            <template #header>
              <div class="flex-center gap-1">
                合并
                <FaTooltip>
                  <template #content>
                    <p>支持将标签页按需合并</p>
                  </template>
                  <FaIcon name="i-ri:question-line" class="cursor-help text-base text-orange" />
                </FaTooltip>
              </div>
            </template>
            <template #default="{ row }">
              <BooleanStatus.reuse :status="row.tabbar.merge" />
            </template>
          </el-table-column>
          <el-table-column width="100" align="center">
            <template #header>
              <div class="flex-center gap-1">
                持久化
                <FaTooltip>
                  <template #content>
                    <p>网页刷新后保持标签页</p>
                  </template>
                  <FaIcon name="i-ri:question-line" class="cursor-help text-base text-orange" />
                </FaTooltip>
              </div>
            </template>
            <template #default="{ row }">
              <BooleanStatus.reuse :status="row.tabbar.persistent" />
            </template>
          </el-table-column>
          <el-table-column width="100" align="center">
            <template #header>
              <div class="flex-center gap-1">
                快捷键
                <FaTooltip>
                  <template #content>
                    <p>支持通过快捷键操作标签页</p>
                  </template>
                  <FaIcon name="i-ri:question-line" class="cursor-help text-base text-orange" />
                </FaTooltip>
              </div>
            </template>
            <template #default="{ row }">
              <BooleanStatus.reuse :status="row.tabbar.hotkeys" />
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column label="搜索" align="center">
          <el-table-column label="导航搜索" width="100" align="center">
            <template #default="{ row }">
              <BooleanStatus.reuse :status="row.search.menu" />
            </template>
          </el-table-column>
          <el-table-column label="页签搜索" width="100" align="center">
            <template #default="{ row }">
              <BooleanStatus.reuse :status="row.search.tab" />
            </template>
          </el-table-column>
          <el-table-column label="拼音搜索" width="100" align="center">
            <template #default="{ row }">
              <BooleanStatus.reuse :status="row.search.pinyin" />
            </template>
          </el-table-column>
          <el-table-column label="快捷键" width="100" align="center">
            <template #default="{ row }">
              <BooleanStatus.reuse :status="row.search.hotkeys" />
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column label="国际化" align="center">
          <el-table-column label="是否支持" width="100" align="center">
            <template #default="{ row }">
              <BooleanStatus.reuse :status="row.i18n.enable" />
            </template>
          </el-table-column>
          <el-table-column label="RTL模式" width="100" align="center">
            <template #default="{ row }">
              <BooleanStatus.reuse :status="row.i18n.rtl" />
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column align="center">
          <template #header>
            <div class="flex-center gap-1">
              鉴权
              <FaTooltip>
                <template #content>
                  <p>颗粒度更细的权限控制</p>
                </template>
                <FaIcon name="i-ri:question-line" class="cursor-help text-base text-orange" />
              </FaTooltip>
            </div>
          </template>
          <el-table-column label="鉴权函数" width="100" align="center">
            <template #default="{ row }">
              <BooleanStatus.reuse :status="row.auth.function" />
            </template>
          </el-table-column>
          <el-table-column label="鉴权指令" width="100" align="center">
            <template #default="{ row }">
              <BooleanStatus.reuse :status="row.auth.directive" />
            </template>
          </el-table-column>
          <el-table-column label="鉴权组件" width="100" align="center">
            <template #default="{ row }">
              <BooleanStatus.reuse :status="row.auth.component" />
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column label="其他" align="center">
          <el-table-column label="面包屑导航" width="120" align="center">
            <template #default="{ row }">
              <BooleanStatus.reuse :status="row.others.breadcrumb" />
            </template>
          </el-table-column>
          <el-table-column label="页面重载" width="100" align="center">
            <template #default="{ row }">
              <BooleanStatus.reuse :status="row.others.reload" />
            </template>
          </el-table-column>
          <el-table-column label="全屏" width="100" align="center">
            <template #default="{ row }">
              <BooleanStatus.reuse :status="row.others.fullscreen" />
            </template>
          </el-table-column>
          <el-table-column label="锁屏" width="100" align="center">
            <template #default="{ row }">
              <BooleanStatus.reuse :status="row.others.lockScreen" />
            </template>
          </el-table-column>
          <el-table-column label="水印" width="100" align="center">
            <template #default="{ row }">
              <BooleanStatus.reuse :status="row.others.watermark" />
            </template>
          </el-table-column>
          <el-table-column label="页脚" width="100" align="center">
            <template #default="{ row }">
              <BooleanStatus.reuse :status="row.others.footer" />
            </template>
          </el-table-column>
        </el-table-column>
      </el-table>
    </FaPageMain>
  </div>
</template>
