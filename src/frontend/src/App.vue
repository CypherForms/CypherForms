<template >
  <RouterView />
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  titleTemplate: (title?: string) =>
    !title ? 'CypherForms | accessible forms on the IC with End-to-End Encryption' : `${title} | CypherForm s`,
  meta: [
    {
      name: 'description',
      content:
        'Build Fast, accessible forms on the IC with End-to-End Encryption where it counts. Because protecting your data should be effortless and easy.'
    }
  ]
})
</script>
