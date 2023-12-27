<template >
  <RouterView />
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  titleTemplate: (title?: string) =>
    !title ? 'CypherForms | accessible forms on the IC with End-to-End Encryption' : `${title} | CypherForms`,
  meta: [
    {
      name: 'description',
      content:
        'Build Fast, accessible forms on the IC with End-to-End Encryption where it counts. Because protecting your data should be effortless.'
    }
  ]
})
</script>
