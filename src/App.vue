<template>
  <div class="w-full">
    <nav-bar @search="showMe"></nav-bar>

    <div v-if="hasLoaded" class="tester p-6 w-full flex flex-wrap">
      <all-dogs
        ref="allDogs"
        v-for="(dog, index) in arr"
        :key="index"
        :dog="dog"
        class="w-full flex list_container"
      ></all-dogs>
    </div>
    <!-- <loader v-else></loader> -->
  </div>
</template>

<script>
import navBar from "./components/nav.vue";
import allDogs from "./components/allDogs.vue";
// import loader from "./components/loader.vue";
export default {
  name: "App",
  components: {
    navBar,
    allDogs,
    // loader,
  },

  data() {
    return {
      randomDogs: [],
      hasLoaded: "",
      arr: [],
      currentWidth: window.innerWidth,
      numberPerRow: this.perRow(this.currentWidth),
      numberOfLoaded: 0,
      elemDistance: 0,
      elemHeight: 0,
      testImage: 0,
    };
  },

  methods: {
    showMe(input) {
      // alert(input)
      if (input.trim().length > 0) {
        this.$store.dispatch("commenceFilteringOfList", input);
        this.randomDogs = this.$store.getters.returnFilteredDogsList;
      } else {
        this.randomDogs = this.$store.getters.returnRandomDogs;
      }
    },

    createEmptyArray(param) {
      for (var i = 0; i < 100; i++) {
        this.arr.push(param);
      }
    },

    // checkPosition() {
    //   var that = this;
    //   window.addEventListener("scroll", function() {
    //   that.arr.splice(0, 2, that.randomDogs[0], that.randomDogs[1])
    //   console.log("I ran")
    //   })
    // },

    // lazyLoad() {
    //   var w = window.innerWidth
    //   if(w >= 0 && w < 459) {}
    //   if(w >= 460 && w < 767) {}
    //   if(w >= 768 && w < 1023) {}
    //   if(w >= 1024) {}
    // },

    // loadFourImages() {

    // },

    perRow(currentWidth) {
      if (currentWidth >= 0 && currentWidth < 459) {
        return 1;
      }
      if (currentWidth >= 460 && currentWidth < 767) {
        return 2;
      }
      if (currentWidth >= 768 && currentWidth < 1023) {
        return 3;
      }
      if (currentWidth >= 1024) {
        return 3;
      }
    },

    getCurrentWidth() {
      const that = this;
      window.addEventListener("resize", function () {
        that.currentWidth = window.innerWidth;
        that.numberPerRow = that.perRow(that.currentWidth);
      });
    },

    spliceIn(thatt, y, winHeight) {
      console.log(this.numberPerRow);
      const that = thatt;
      if (y + winHeight > that.elemDistance + that.elemHeight) {
        // if (that.elemDistance > 100) alert(that.elemDistance);

        that.arr.splice(
          that.numberOfLoaded,
          that.numberPerRow,
          ...that.randomDogs.slice(
            that.numberOfLoaded,
            that.numberOfLoaded + that.numberPerRow + 1
          )
        );
        that.numberOfLoaded += that.numberPerRow;
      }
      console.log(`ref height is: ${y + winHeight}`, `And height of this image is ${this.testImage}`)
    },

    lazyScroll() {
      const that = this;
      window.addEventListener("scroll", function () {
        const y = window.scrollY;
        that.currentWidth = window.innerHeight;
        that.spliceIn(that, y, that.currentWidth);
      });
    },
  },

  async created() {
    this.hasLoaded = false;
    this.hasLoaded = this.$store.getters.loadState;
    await this.$store.dispatch("fetchRandomDogs");
    this.hasLoaded = true;

    // this.$store.dispatch("fetchRandomDogsAgain");
    this.randomDogs = this.$store.getters.returnRandomDogs;
    this.createEmptyArray("");
  },
  mounted() {
    this.currentWidth = window.innerWidth;
    this.numberPerRow = this.perRow(this.currentWidth);

    this.getCurrentWidth();
    this.lazyScroll();
  },

  beforeUpdate() {
    this.$nextTick(() => {
      this.elemDistance =
        this.$refs.allDogs[this.numberOfLoaded].$refs.myDog.offsetTop;
      this.elemHeight =
        this.$refs.allDogs[this.numberOfLoaded].$refs.myDog.offsetHeight;
        this.testImage = this.$refs.allDogs[20].$refs.myDog.offsetTop;
      console.log(this.elemDistance);
      console.log(this.numberPerRow);
    });
  },
};
</script>

<style>
@media (min-width: 0px) {
  .list_container {
    flex: 1 1 auto;
  }
}

/* 'xs': '460px', */
@media (min-width: 460px) {
  .list_container {
    flex: 1 1 50%;
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
}

/* 'lg': '1024px' */
@media (min-width: 1024px) {
  .list_container {
    flex: 1 1 25%;
  }
}

/* 'xl': '1280px' */
@media (min-width: 1280px) {
}

/* '2xl': '1536px' */
@media (min-width: 1536px) {
}
</style>
