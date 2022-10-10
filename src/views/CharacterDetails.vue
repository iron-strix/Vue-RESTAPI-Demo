<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import useCharacters from '@/composables/useCharacters'

const route = useRoute()
const { getCharacter, currentCharacter } = useCharacters()

onMounted(async () => {
  await getCharacter(route.params.id)
})

onUnmounted(() => {
  currentCharacter.value = null
})
</script>

<template>
  <main
    v-if="currentCharacter"
    class="flex min-h-screen flex-col items-center justify-center gap-6 bg-gradient-to-r from-fuchsia-900 to-red-700 text-white"
  >
    <img :src="currentCharacter.imageUrl" :alt="currentCharacter.name" />
    <h1 class="text-6xl font-thin text-white">
      Hi, I'm Character {{ currentCharacter.name }}
    </h1>
    <pre>{{ currentCharacter }}</pre>
  </main>
</template>
