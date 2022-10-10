<script setup>
const props = defineProps({
  character: {
    type: Object,
    default: () => ({
      _id: -1,
      name: 'Unknown',
      imageUrl: 'https://via.placeholder.com/150',
    }),
  },
})
</script>

<template>
  <RouterLink
    :to="`/character/${props.character._id}`"
    class="rounded-lg bg-white shadow-lg"
  >
    <img
      class="w-full rounded-t-lg object-cover"
      :src="props.character.imageUrl"
    />
    <div class="p-4">
      <h2 class="text-2xl font-semibold text-gray-800">
        {{ props.character.name }}
      </h2>
    </div>
  </RouterLink>
</template>
