<template>
  <div>
    <nav class="fixed px-2 bg-white shadow-sm top-0 w-full xs:px-8 xs:py-3">
      <div class="flex items-center">
        <div class="mr-auto">
          <h2 class="zero:text-lg xs:text-2xl">Cordelia</h2>
        </div>
        <div class="ml-auto px-2 py-4 rounded-lg xs:bg-gray-50 xs:shadow-sm xs:py-0.5 sm:px-4 sm:py-1">
          <input @input="emitInput" type="search" v-model="inputData" placeholder="search" class="search rounded-lg zero:w-24 zero:px-3 bg-gray-50 xs:w-full xs:px-4 py-2" name="search" id="search_btn">
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  emits: ["search"],

  data() {
    return {
      inputData: "",
    }
  },

  methods: {
    emitInput() {
      this.$emit("search", this.inputData)
    }
  }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css2?family=Courgette&display=swap);


@media (min-width: 0px) {
 
  h2{
  font-family: 'Courgette', handwriting;
  font-weight: 600;
  }

  .search:focus {
    outline: transparent;
  }
}

/* 'xs': '460px', */
@media (min-width: 460px) {

}

/* 'xs': '640px', */
@media (min-width: 640px) {
  h2 {
  font-size: 30px;
  }
}

/* 'md': '768px' */
@media (min-width: 768px) {
}

/* 'lg': '1024px' */
@media (min-width: 1024px) {
}

/* 'xl': '1280px' */
@media (min-width: 1280px) {
}

/* '2xl': '1536px' */
@media (min-width: 1536px) {
}
</style>