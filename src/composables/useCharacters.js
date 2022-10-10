import { ref } from 'vue'
import useApi from '@/composables/useAPI'

const characters = ref([])
const api = useApi()

const useCharacters = () => {
  const fetchCharacters = async () => {
    const response = await api.instance.get('/characters')
    console.log(response)
  }
  return { characters, fetchCharacters }
}

export default useCharacters
