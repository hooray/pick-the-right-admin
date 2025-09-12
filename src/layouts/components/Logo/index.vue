<script setup lang="ts">
defineOptions({
  name: 'Logo',
})

withDefaults(
  defineProps<{
    showTitle?: boolean
  }>(),
  {
    showTitle: true,
  },
)

const settingsStore = useSettingsStore()

const title = ref(import.meta.env.VITE_APP_TITLE)

const to = computed(() => settingsStore.settings.home.enable ? settingsStore.settings.home.fullPath : '')
</script>

<template>
  <RouterLink :to class="h-[var(--g-sidebar-logo-height)] w-inherit flex-center gap-2 px-3 text-inherit no-underline" :class="{ 'cursor-default': !settingsStore.settings.home.enable }" :title="title">
    <span v-if="showTitle" class="block truncate font-bold">{{ title }}</span>
  </RouterLink>
</template>
