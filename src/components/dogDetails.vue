<template>
  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="flex items-end justify-center min-h-screen px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div
        class="fixed flex justify-center items-center inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      >
        
        <div
          class="flex align-bottom bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div
            class="flex-col justify-center bg-white w-full px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
          >

            <div class="flex justify-end">
              <button
                type="button"
                @click="closeModal"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg p-1.5 ml-auto inline-flex items-center"
              >
                <svg class="w-5 h-5" fill="currentColor">
                  <path
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 
                      1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 
                      01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  ></path>
                </svg>
              </button>
            </div>

            <div class="flex justify-center">
              <img :src="dog" :alt="dogBreed" class="rounded-lg" />
            </div>
            <div>
              <h1 class="text-2xl mt-4">Breed: {{dogBreed}}</h1>
              <h3 class="text-xl mt-2">Price: ${{pricing}}</h3>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["dog"],

  emits: ["close"],

  computed: {
    dogBreed() {
      return this.dog.split("/")[4];
    },

    pricing() {
      return Math.round((1 + Math.random()) * 2500)
    }
  },

  methods: {
    closeModal() {
      this.$emit("close")
    }
  }
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css2?family=BioRhyme:wght@100;200;300;400;500;600;800&display=swap);

h1 {
  font-family: "BioRhyme", serif;
  font-weight: 600;
}

h3 {
  font-family: "BioRhyme", serif;
  font-weight: 400;
}

img {
  border-radius: 12px;
  object-fit: cover;
  height: 230px;
  width: 250px;
  cursor: pointer;
}

img:hover {
  filter: blur(20%);
}
</style>
