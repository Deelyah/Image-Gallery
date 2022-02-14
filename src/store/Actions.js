import axios from "axios";
export default {
  async fetchRandomDogs(context) {
    try {
      let totalResult = [];
      const response1 = await axios.get(
        "https://dog.ceo/api/breeds/image/random/50"
      );
      const response2 = await axios.get(
        "https://dog.ceo/api/breeds/image/random/50"
      );
      const result1 = response1.data.message;
      const result2 = response2.data.message;
      totalResult = [...result1, ...result2];
      context.commit("pushRandomDogs", totalResult);
      
    } catch (error) {
      console.log(error);
    }
  },

  commenceFilteringOfList(context, payload) {
    context.commit("filterList", payload);
  },
};
