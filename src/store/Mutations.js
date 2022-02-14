export default {
  pushRandomDogs(state, payload) {
    state.DogsList.push(...payload);
    console.log(payload)
  },

  filterList(state, payload) {
    state.filteredDogsList = state.DogsList.filter((dog) =>
      dog.split("/")[4].includes(payload.toLowerCase())
    );
  },

};
