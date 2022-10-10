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
    class="min-h-screen gap-6 bg-gradient-to-r from-fuchsia-900 to-red-700 text-white"
  >
    <div
      v-if="currentCharacter"
      class="flex flex-col items-center justify-center pt-4"
    >
      <img :src="currentCharacter.imageUrl" :alt="currentCharacter.name" />
      <h1 class="text-6xl font-thin text-white">
        Hi, I'm Character {{ currentCharacter.name }}
      </h1>
      <pre>{{ currentCharacter }}</pre>
    </div>
  </main>
</template>
