# 选择合适的后台管理系统

> [!NOTE]
> 本仓库灵感来源于[此网站](http://vue.easydo.work/)，但该网站统计信息并不准确，且无法进行横向对比，而且有部分系统已长期不更新。因此为了更好的帮助开发者选择合适的后台管理系统，我创建了这个仓库。
>
> 但考虑到网上后台管理系统种类繁多，本仓库也无法对所有后台管理系统进行详细的横向对比，因此能入选到本仓库并进行对比的系统，会有几条硬性规则：
>
> - 技术栈为 Vue 3 + Vite 5 ，纯前端，无后端依赖
> - Github stars 数高于 1000
> - 有提供开发文档或教程
> - 持续更新维护，最近一次提交距今不超过 1 个月
>
> 除此之外，以下的对比项，仅检查系统是否支持，不对使用方式、使用范围等进行评判，因为不同系统有不同的设计理念。举例来说，水印功能有的系统是支持全局设置，而有的系统则是页面级别的设置，我会一律视为支持该功能。

## 入选系统

> [!TIP]
> 使用 Github 高级搜索 `stars:>1000 language:Vue language:Typescript pushed:>2024-06-01 admin` 进行初步筛选，再进行人肉筛选。

|                              后台管理系统                              |                                        星标                                         |                                 最近提交时间                                 |
| :--------------------------------------------------------------------: | :---------------------------------------------------------------------------------: | :--------------------------------------------------------------------------: |
|     [vue-pure-admin](https://github.com/pure-admin/vue-pure-admin)     |   ![](https://img.shields.io/github/stars/pure-admin/vue-pure-admin?style=social)   |   ![](https://img.shields.io/github/last-commit/pure-admin/vue-pure-admin)   |
|      [Geeker-Admin](https://github.com/HalseySpicy/Geeker-Admin)       |   ![](https://img.shields.io/github/stars/HalseySpicy/Geeker-Admin?style=social)    |   ![](https://img.shields.io/github/last-commit/HalseySpicy/Geeker-Admin)    |
|       [v3-admin-vite](https://github.com/un-pany/v3-admin-vite)        |     ![](https://img.shields.io/github/stars/un-pany/v3-admin-vite?style=social)     |     ![](https://img.shields.io/github/last-commit/un-pany/v3-admin-vite)     |
|      [soybean-admin](https://github.com/soybeanjs/soybean-admin)       |    ![](https://img.shields.io/github/stars/soybeanjs/soybean-admin?style=social)    |    ![](https://img.shields.io/github/last-commit/soybeanjs/soybean-admin)    |
|       [naive-ui-admin](https://github.com/jekip/naive-ui-admin)        |     ![](https://img.shields.io/github/stars/jekip/naive-ui-admin?style=social)      |     ![](https://img.shields.io/github/last-commit/jekip/naive-ui-admin)      |
|       [vue-vben-admin](https://github.com/vbenjs/vue-vben-admin)       |     ![](https://img.shields.io/github/stars/vbenjs/vue-vben-admin?style=social)     |     ![](https://img.shields.io/github/last-commit/vbenjs/vue-vben-admin)     |
| [vue3-element-admin](https://github.com/youlaitech/vue3-element-admin) | ![](https://img.shields.io/github/stars/youlaitech/vue3-element-admin?style=social) | ![](https://img.shields.io/github/last-commit/youlaitech/vue3-element-admin) |
|   [Fantastic-admin 基础版](https://github.com/fantastic-admin/basic)   |     ![](https://img.shields.io/github/stars/fantastic-admin/basic?style=social)     |     ![](https://img.shields.io/github/last-commit/fantastic-admin/basic)     |
|  [Fantastic-admin 专业版](https://fantastic-admin.github.io/buy.html)  |                                                                                     |                                                                              |

> 利益相关：Fantastic-admin 作者

## UI 库

> [!TIP]
> UI 库在很大程度上决定了开发者的技术选型，因此在选择后台管理系统时，应该首先了解该系统是否支持你期望的 UI 库。

|      后台管理系统      |                                    UI 库                                    |
| :--------------------: | :-------------------------------------------------------------------------: |
|     vue-pure-admin     |                  [Element Plus](https://element-plus.org/)                  |
|      Geeker-Admin      |                  [Element Plus](https://element-plus.org/)                  |
|     v3-admin-vite      |                  [Element Plus](https://element-plus.org/)                  |
|     soybean-admin      | [Naive UI](https://www.naiveui.com/) / [Ant Design Vue](https://antdv.com/) |
|     naive-ui-admin     |                    [Naive UI](https://www.naiveui.com/)                     |
|     vue-vben-admin     |                    [Ant Design Vue](https://antdv.com/)                     |
|   vue3-element-admin   |                  [Element Plus](https://element-plus.org/)                  |
| Fantastic-admin 基础版 |       [Element Plus](https://element-plus.org/) / 支持更换任意 UI 库        |
| Fantastic-admin 专业版 |       [Element Plus](https://element-plus.org/) / 支持更换任意 UI 库        |

## 纯净版

> [!TIP]
> 纯净版即没有任何用于演示的代码和插件依赖，方便让开发者快速进入开发阶段。如果未提供纯净版，则需要开发者手动删除无关文件后，才能开始进行开发工作。

|      后台管理系统      | 是否提供纯净版 |
| :--------------------: | :------------: |
|     vue-pure-admin     |       ✅       |
|      Geeker-Admin      |       ✅       |
|     v3-admin-vite      |                |
|     soybean-admin      |                |
|     naive-ui-admin     |                |
|     vue-vben-admin     |       ✅       |
|   vue3-element-admin   |       ✅       |
| Fantastic-admin 基础版 |       ✅       |
| Fantastic-admin 专业版 |       ✅       |

## 布局

> [!TIP]
> 布局在这里指代导航菜单的展现形式，它直接决定了后台管理系统的整体外观和操作习惯，因此在选择后台管理系统时，应该了解该系统是否满足业务所需要的布局。

由于各家对于布局的名称叫法不一，大致整理了以下几种：

<details>
<summary>1. 单侧边栏布局</summary>

![layout1.png](https://s2.loli.net/2024/06/29/EZLVTapXY1D4R9x.png)
</details>

<details>
<summary>2. 双侧边栏布局</summary>

![layout2.png](https://s2.loli.net/2024/06/29/tmFM3WrOZKpjCsV.png)
</details>

<details>
<summary>3. 双栏布局</summary>

![layout3.png](https://s2.loli.net/2024/06/29/7lTwjY9W4tOCxnL.png)
</details>

<details>
<summary>4. 顶栏浮动布局</summary>

![layout4.png](https://s2.loli.net/2024/06/29/FI3zKuchETVYXDR.png)
</details>

<details>
<summary>5. 侧边栏浮动布局</summary>

![layout5.png](https://s2.loli.net/2024/06/29/FDQ3xKh1wbIl6sd.png)
</details>

<details>
<summary>6. 顶栏浮动面板布局</summary>

![layout6.png](https://s2.loli.net/2024/06/29/RUKWn8cSFYix74P.png)
</details>

<details>
<summary>7. 侧边栏浮动面板布局</summary>

![layout7.png](https://s2.loli.net/2024/06/29/4Q6j3y7PCB9XYrW.png)
</details>

|      后台管理系统      | 布局1 | 布局2 | 布局3 | 布局4 | 布局5 | 布局6 | 布局7 |
| :--------------------: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|     vue-pure-admin     |  ✅   |       |  ✅   |  ✅   |  ✅   |       |       |
|      Geeker-Admin      |  ✅   |  ✅   |       |  ✅   |  ✅   |       |       |
|     v3-admin-vite      |  ✅   |       |       |  ✅   |  ✅   |       |       |
|     soybean-admin      |  ✅   |  ✅   |  ✅   |  ✅   |  ✅   |       |       |
|     naive-ui-admin     |  ✅   |       |       |  ✅   |  ✅   |       |       |
|     vue-vben-admin     |  ✅   |  ✅   |       |  ✅   |  ✅   |       |       |
|   vue3-element-admin   |  ✅   |       |  ✅   |  ✅   |  ✅   |       |       |
| Fantastic-admin 基础版 |  ✅   |  ✅   |  ✅   |       |  ✅   |       |       |
| Fantastic-admin 专业版 |  ✅   |  ✅   |  ✅   |  ✅   |  ✅   |  ✅   |  ✅   |

## 主题

|      后台管理系统      | 主题设置 | 明暗模式切换 | 灰色模式 | 色弱模式 |
| :--------------------: | :------: | :----------: | :------: | :------: |
|     vue-pure-admin     |    ✅    |      ✅      |    ✅    |    ✅    |
|      Geeker-Admin      |          |      ✅      |    ✅    |    ✅    |
|     v3-admin-vite      |    ✅    |      ✅      |    ✅    |    ✅    |
|     soybean-admin      |    ✅    |      ✅      |    ✅    |          |
|     naive-ui-admin     |    ✅    |      ✅      |          |          |
|     vue-vben-admin     |    ✅    |      ✅      |    ✅    |    ✅    |
|   vue3-element-admin   |    ✅    |      ✅      |          |          |
| Fantastic-admin 基础版 |          |      ✅      |    ✅    |    ✅    |
| Fantastic-admin 专业版 |    ✅    |      ✅      |    ✅    |    ✅    |

## 导航栏

> [!TIP]
> 功能说明
>
> - 鉴权：因为是导航栏鉴权，所以只要满足页面级鉴权即可
> - 缓存：使用 keep-alive 缓存页面
> - 图标：导航项目图标
> - 激活图标：当导航选中激活时的图标
> - 徽章：导航项目右侧的角标
> - 外链：支持在新窗口打开外部链接
> - 内嵌：使用 iframe 打开目标页面
> - 默认展开：默认展开折叠的导航栏
> - 始终展开：始终展开折叠的导航栏
> - 新窗口打开：支持按住Command/Ctrl键点击导航栏项目在新窗口打开
> - 收藏夹：方便快速访问已收藏的导航菜单

|      后台管理系统      | 鉴权 | 缓存 | 图标 | 激活图标 | 徽章 | 外链 | 内嵌 | 默认展开 | 始终展开 | 新窗口打开 | 收藏夹 |
| :--------------------: | :--: | :--: | :--: | :------: | :--: | :--: | :--: | :------: | :------: | :--------: | :----: |
|     vue-pure-admin     |  ✅  |  ✅  |  ✅  |          |  ✅  |  ✅  |  ✅  |          |          |     ✅     |   ✅   |
|      Geeker-Admin      |  ✅  |  ✅  |  ✅  |          |      |  ✅  |      |          |          |            |        |
|     v3-admin-vite      |  ✅  |  ✅  |  ✅  |          |      |  ✅  |      |          |          |     ✅     |        |
|     soybean-admin      |  ✅  |  ✅  |  ✅  |          |      |  ✅  |  ✅  |          |          |            |        |
|     naive-ui-admin     |  ✅  |  ✅  |  ✅  |          |      |  ✅  |  ✅  |          |          |            |        |
|     vue-vben-admin     |  ✅  |  ✅  |  ✅  |          |      |  ✅  |  ✅  |          |          |            |        |
|   vue3-element-admin   |  ✅  |  ✅  |  ✅  |          |      |      |      |          |          |     ✅     |        |
| Fantastic-admin 基础版 |  ✅  |  ✅  |  ✅  |          |      |  ✅  |      |    ✅    |          |     ✅     |        |
| Fantastic-admin 专业版 |  ✅  |  ✅  |  ✅  |    ✅    |  ✅  |  ✅  |  ✅  |    ✅    |    ✅    |     ✅     |   ✅   |

## 标签栏

> [!TIP]
> 功能说明
>
> - 显示图标：在标签页上显示图标
> - 快捷操作：支持批量关闭标签页，或者其他更多操作内容
> - 拖拽排序：支持标签页拖拽排序
> - 常驻：标签页常驻在标签栏上，无法关闭
> - 最大化：将业务页面全屏或最大化展示
> - 合并：标签页支持按需合并
> - 快捷键：支持通过快捷键切换标签页

|      后台管理系统      | 显示图标 | 快捷操作 | 拖拽排序 | 常驻 | 最大化 | 合并 | 快捷键 | 持久化 |
| :--------------------: | :------: | :------: | :------: | :--: | :----: | :--: | :----: | :----: |
|     vue-pure-admin     |          |    ✅    |          |  ✅  |   ✅   |      |        |   ✅   |
|      Geeker-Admin      |    ✅    |    ✅    |          |  ✅  |   ✅   |      |        |   ✅   |
|     v3-admin-vite      |          |    ✅    |          |      |   ✅   |      |        |   ✅   |
|     soybean-admin      |    ✅    |    ✅    |          |  ✅  |   ✅   |      |        |   ✅   |
|     naive-ui-admin     |          |    ✅    |    ✅    |  ✅  |        |      |        |   ✅   |
|     vue-vben-admin     |          |    ✅    |    ✅    |  ✅  |   ✅   |      |        |   ✅   |
|   vue3-element-admin   |          |    ✅    |          |      |        |      |        |        |
| Fantastic-admin 基础版 |    ✅    |    ✅    |    ✅    |      |        |      |   ✅   |        |
| Fantastic-admin 专业版 |    ✅    |    ✅    |    ✅    |  ✅  |   ✅   |  ✅  |   ✅   |   ✅   |

## 搜索

|      后台管理系统      | 导航搜索 | 页签搜索 | 支持拼音搜索 | 快捷键 |
| :--------------------: | :------: | :------: | :----------: | :----: |
|     vue-pure-admin     |    ✅    |          |      ✅      |   ✅   |
|      Geeker-Admin      |    ✅    |          |              |   ✅   |
|     v3-admin-vite      |    ✅    |          |              |   ✅   |
|     soybean-admin      |    ✅    |          |              |   ✅   |
|     naive-ui-admin     |          |          |              |        |
|     vue-vben-admin     |    ✅    |          |              |   ✅   |
|   vue3-element-admin   |          |          |              |        |
| Fantastic-admin 基础版 |    ✅    |          |              |   ✅   |
| Fantastic-admin 专业版 |    ✅    |    ✅    |      ✅      |   ✅   |

## 国际化

|      后台管理系统      | 国际化 | RTL模式 |
| :--------------------: | :----: | :-----: |
|     vue-pure-admin     |   ✅   |         |
|      Geeker-Admin      |   ✅   |         |
|     v3-admin-vite      |        |         |
|     soybean-admin      |   ✅   |         |
|     naive-ui-admin     |        |         |
|     vue-vben-admin     |   ✅   |         |
|   vue3-element-admin   |   ✅   |         |
| Fantastic-admin 基础版 |        |         |
| Fantastic-admin 专业版 |   ✅   |   ✅    |

## 权限

> [!TIP]
> 颗粒度更细的权限控制。

|      后台管理系统      | 鉴权函数 | 鉴权指令 | 鉴权组件 |
| :--------------------: | :------: | :------: | :------: |
|     vue-pure-admin     |    ✅    |    ✅    |    ✅    |
|      Geeker-Admin      |    ✅    |    ✅    |          |
|     v3-admin-vite      |    ✅    |    ✅    |          |
|     soybean-admin      |    ✅    |          |          |
|     naive-ui-admin     |    ✅    |    ✅    |          |
|     vue-vben-admin     |    ✅    |    ✅    |          |
|   vue3-element-admin   |    ✅    |    ✅    |          |
| Fantastic-admin 基础版 |    ✅    |    ✅    |    ✅    |
| Fantastic-admin 专业版 |    ✅    |    ✅    |    ✅    |

## 杂项

|      后台管理系统      | 面包屑导航 | 页面重载 | 全屏 | 锁屏 | 水印 | 页脚 |
| :--------------------: | :--------: | :------: | :--: | :--: | :--: | :--: |
|     vue-pure-admin     |     ✅     |    ✅    |  ✅  |      |  ✅  |  ✅  |
|      Geeker-Admin      |     ✅     |          |  ✅  |      |  ✅  |  ✅  |
|     v3-admin-vite      |     ✅     |    ✅    |  ✅  |      |  ✅  |  ✅  |
|     soybean-admin      |     ✅     |    ✅    |  ✅  |      |      |  ✅  |
|     naive-ui-admin     |     ✅     |    ✅    |  ✅  |  ✅  |      |      |
|     vue-vben-admin     |     ✅     |    ✅    |  ✅  |  ✅  |  ✅  |  ✅  |
|   vue3-element-admin   |     ✅     |    ✅    |  ✅  |      |  ✅  |      |
| Fantastic-admin 基础版 |     ✅     |    ✅    |  ✅  |      |      |  ✅  |
| Fantastic-admin 专业版 |     ✅     |    ✅    |  ✅  |      |  ✅  |  ✅  |
