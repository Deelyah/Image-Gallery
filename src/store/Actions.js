import axios from "axios";
export default {
  async fetchRandomDogs(context) {  
    try {
    const response = await axios.get("https://dog.ceo/api/breeds/image/random/50")
    const result = response.data.message
    context.commit("pushRandomDogs", result)
    } catch (error) {
      console.log(error)
    }
  },

  async fetchRandomDogsAgain(context) {  
    try {
    const response = await axios.get("https://dog.ceo/api/breeds/image/random/50")
    const result = response.data.message
    context.commit("pushRandomDogs", result)
    
    } catch (error) {
      console.log(error)
    }
  },

  commenceFilteringOfList(context, payload) {
    context.commit("filterList", payload)
  }
}