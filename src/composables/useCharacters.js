import { ref } from 'vue'
import useApi from '@/composables/useAPI'

const characters = ref([])
const currentCharacter = ref(null)
const firstLoad = ref(true)
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

  const getCharacter = async (id) => {
    const { data } = await api.instance.get(`/characters/${id}`)
    currentCharacter.value = data
  }

  return {
    characters,
    fetchCharacters,
    getCharacter,
    currentCharacter,
    firstLoad,
  }
}

export default useCharacters
