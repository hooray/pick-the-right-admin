<script setup lang="ts">
import { ua } from '@/utils/ua'
import Provider from './ui/provider/index.vue'

const settingsStore = useSettingsStore()

document.body.setAttribute('data-os', ua.getOS().name || '')

// 设置网页 title
watch([
  () => settingsStore.settings.app.enableDynamicTitle,
  () => settingsStore.title,
], () => {
  if (settingsStore.settings.app.enableDynamicTitle && settingsStore.title) {
    const title = typeof settingsStore.title === 'function' ? settingsStore.title() : settingsStore.title
    document.title = `${title} - ${import.meta.env.VITE_APP_TITLE}`
  }
  else {
    document.title = import.meta.env.VITE_APP_TITLE
  }
}, {
  immediate: true,
  deep: true,
})

onMounted(() => {
  settingsStore.setMode(document.documentElement.clientWidth)
  window.addEventListener('resize', () => {
    settingsStore.setMode(document.documentElement.clientWidth)
  })
})
</script>

<template>
  <Provider>
    <RouterView v-slot="{ Component }">
      <component :is="Component" />
    </RouterView>
    <FaBackToTop />
    <FaToast />
    <FaNotification />
    <FaSystemInfo />
  </Provider>
</template>
