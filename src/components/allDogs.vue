<template>
  <div class="list_container mt-14 w-full justify-center items-center" ref="myDog">
    <div class="flex p-4 justify-center items-center">
      <img class="hover:cursor-pointer" v-if="dog" @click="getIndex()" :src="dog" />
      <div
        v-if="!dog"
        class="flex list flex-col items-center justify-center w-full"
      >
        <div class="lazy-container"></div>
        <div class="lazy-container-info mt-4"></div>
      </div>
    </div>
    <dog-details
      @close="closeModal"
      :dog="dog"
      v-if="showDetails"
    ></dog-details>
  </div>
</template>

<script>
import dogDetails from "./dogDetails.vue";
export default {
  props: ["dog"],

  components: { dogDetails },

  data() {
    return {
      showDetails: false,
      // imageSrc: this.dog
    };
  },

  methods: {
    getIndex() {
      this.showDetails = true;
    },

    closeModal() {
      this.showDetails = false;
    },
  },
};
</script>

<style scoped>
@media (min-width: 0px) {
  .list_container {
    flex: 1 1 auto;
  }

  img {
    border-radius: 12px;
    object-fit: cover;
    height: 230px;
    width: 250px;
  }
  .lazy-container {
    border-radius: 12px;
    height: 230px;
    width: 250px;
    background: linear-gradient(90deg, #929292 20%, #ffffff);
    background-size: 300%;
    animation: loader 1s linear 2s infinite alternate;
  }
  .lazy-container-info {
    border-radius: 12px;
    height: 20px;
    width: 250px;
    background: linear-gradient(90deg, #929292 20%, #ffffff);
    background-size: 300%;
    animation: loader 1s linear 2s infinite alternate;
  }
  @keyframes loader {
    0% {
      background-position: 300% 0%;
    }
    100% {
      background-position: 350% 0%;
    }
  }
}

@media (min-width: 460px) {
  .list_container {
    flex: 1 1 50%;
  }

  img {
    border-radius: 12px;
    object-fit: cover;
    height: 230px;
    width: 250px;
  }
}

/* 'sm': '640px', */
@media (min-width: 640px) {
}

/* 'md': '768px' */
@media (min-width: 768px) {
  .list_container {
    flex: 1 1 33.3%;
  }

  img {
    border-radius: 12px;
    object-fit: cover;
    height: 300px;
    width: 300px;
  }
}

/* 'lg': '1024px' */
@media (min-width: 1024px) {
  .list_container {
    flex: 1 1 25%;
  }

  img {
    border-radius: 12px;
    object-fit: cover;
    height: 300px;
    width: 300px;
  }
}

/* 'xl': '1280px' */
@media (min-width: 1280px) {
}

/* '2xl': '1536px' */
@media (min-width: 1536px) {
}
</style>
