import { ref } from 'vue'
import useApi from '@/composables/useAPI'

const characters = ref([])
const api = useApi()
const page = ref(1)

const useCharacters = () => {
  const fetchCharacters = async () => {
    const { data } = await api.instance.get('/characters', {
      params: {
        page: page.value,
      },
    })
    characters.value.push(...data.data)
    page.value++
  }
  return { characters, fetchCharacters }
}

export default useCharacters
