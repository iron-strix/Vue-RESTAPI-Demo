import { ref } from 'vue'
import useApi from '@/composables/useAPI'

const characters = ref([])
const api = useApi()

const useCharacters = () => {
  const fetchCharacters = async () => {
    const { data } = await api.instance.get('/characters')
    characters.value.push(...data.data)
  }
  return { characters, fetchCharacters }
}

export default useCharacters
