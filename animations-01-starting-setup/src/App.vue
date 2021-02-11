<template>
  <!-- to use the transition on routing keep in mind -->
  <!-- Your route components must NOT have multiple root elements! -->
  <!-- <router-view v-slot="slotProps">
    <transition name="navigate" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view> -->

  <div class="container">
    <div
      class="block"
      :class="{ animate: animatedBlock, animatedBlockBg: animatedBlock }"
    ></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <list-data></list-data>
  </div>
  <div class="container">
    <!-- name is a prefix to replace v-* for the custom name -->
    <!-- we can also rename completely the default vue classes 
    for animation like the snippet below  -->
    <!-- <transition enter-to-class="" enter-active-class=""> -->
    <!-- css prop in transition cancels the usage of css for the specific element below transition -->
    <!-- this css prop should only be used for perfomance purposes if no css is used for transitions for the given element -->
    <transition
      name="para"
      :css="false"
      @before-enter="beforeShowingPara"
      @enter="transitionEnter"
      @after-enter="transitionAfterEnter"
      @leave="transitionLeave"
      @after-leave="transitionAfterLeave"
      @before-leave="beforeLeavingPara"
      @enter-cancelled="transitionEnterEventCancelled"
      @leave-cancelled="transitionLeaveEventCancelled"
    >
      <p v-if="paragraphIsVisible">invisible paragraph</p>
    </transition>

    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>
  <div class="container">
    <transition name="fade-button" mode="out-in">
      <button @click="showUsers" v-if="!usersAreVisible">Show users</button>
      <button @click="hideUsers" v-else>Hide Users</button>
    </transition>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>

  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
import ListData from './components/ListData.vue';
export default {
  components: {
    ListData
  },
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      paragraphIsVisible: false,
      usersAreVisible: false,
      enterInterval: null,
      leaveInterval: null
    };
  },
  methods: {
    beforeShowingPara(el) {
      console.log('will execute before transition starts');
      console.log(el);
      el.style.opacity = 0;
    },
    transitionEnter(el, done) {
      console.log(
        "I'm in the enter event. Executes immediately before v-enter-active"
      );
      console.log(el);
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },
    transitionAfterEnter(el) {
      console.log(
        "I'm in the enter event. Executes at the same level as v-enter-active"
      );
      console.log(el);
    },
    transitionLeave(el, done) {
      console.log(
        "I'm in the enter event. Executes immediately before v-leave-active"
      );
      console.log(el);
      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
    },
    transitionAfterLeave(el) {
      console.log(
        "I'm in the enter event. Executes at the same level as v-leave-active"
      );
      console.log(el);
    },
    beforeLeavingPara(el) {
      console.log('will execute before transition starts');
      console.log(el);
      el.style.opacity = 1;
    },
    transitionEnterEventCancelled() {
      clearInterval(this.enterInterval);
    },
    transitionLeaveEventCancelled() {
      clearInterval(this.leaveInterval);
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.animatedBlock = !this.animatedBlock;
    },
    toggleParagraph() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  transition: all 500ms ease-out;
}

div.animatedBlockBg {
  background-color: #750192;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  /* transform: rotate3d(0, 1, 0, 180deg); */
  animation: card-rotation 0.5s ease-out forwards;
}

.fade-button-enter-from,
.fade-button-leave-from {
  opacity: 0;
  /* transform: translateY(-30px); */
}
.fade-button-enter-active {
  transition: all 0.5s ease-out;
}
.fade-button-leave-active {
  transition: all 0.5s ease-in;
}
.fade-button-enter-to,
.fade-button-leave-to {
  opacity: 1;
  /* transform: translateY(0); */
}

.navigate-enter-active,
.navigate-leave-active {
  animation: fade-nav 0.5s ease-out;
}

@keyframes fade-nav {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes card-rotation {
  0% {
    transform: rotate3d(0, 0, 0, 0) scale(1);
  }

  50% {
    transform: rotate3d(0, 1, 0, 180deg) scale(1.1);
  }

  100% {
    transform: rotate3d(0, 1, 0, 360deg) scale(1);
  }
}
</style>
