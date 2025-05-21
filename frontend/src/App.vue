<template>
    <header>
      <HeaderNavbar v-if="onHome" />
    </header>
  
    <main>
      <router-view v-slot="{ Component }">
        <transition :name="transitionName" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  
    <footer>
      <FooterNavbar v-if="onHome" />
    </footer>
  </template>
  
  <script>
  import {
    RouterLink,
    RouterView,
  } from 'vue-router'
  import FooterNavbar from './components/FooterNavbar.vue';
  import HeaderNavbar from './components/HeaderNavbar.vue';
  
  export default {
    components: {
      RouterLink,
      RouterView,
      FooterNavbar,
      HeaderNavbar
    },
    data() {
      return {
        onHome: true,
        onProfile: true,
        previousRouteName: null, // Definisci previousRouteName qui
      }
    },
    computed: {
      route() {
        return this.$route.path;
      },
      transitionName() {
        const from = this.previousRouteName;
        const to = this.$route.name;
  
/*         if (from && to && from === 'feed' && to === 'settings') {
          return 'slide-right';
        }
        if (from && to && from === 'settings' && to === 'feed') {
          return 'slide-left';
        }
  
        if (from && to && from === 'feed' && to === 'create') {
          return 'slide-left';
        }
        if (from && to && from === 'create' && to === 'feed') {
          return 'slide-right';
        } */


        return 'fade'; // default fade transition
      }
    },
    watch: {
      route(newPath) {
        this.onHome = !['/', '/register', '/recover'].includes(newPath);
      }
    },
    created() {
      this.onHome = !['/', '/register', '/recover'].includes(this.$route.path);
  
      // Imposta il nome della route precedente
      this.$router.beforeEach((to, from, next) => {
        this.previousRouteName = from.name; // Salva il nome della route precedente
        next();
      });
    }
  };
  </script>
  
  <style scoped>
  /* Fade */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.25s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  
  .fade-enter-to,
  .fade-leave-from {
    opacity: 1;
  }
  
  /* Slide left */
  .slide-left-enter-active,
  .slide-left-leave-active {
    transition: transform 0.3s ease;
  }
  
  .slide-left-enter-from {
    transform: translateX(100%);
  }
  
  .slide-left-leave-to {
    transform: translateX(-100%);
  }
  
  .slide-left-enter-to,
  .slide-left-leave-from {
    transform: translateX(0);
  }
  
  /* Slide right */
  .slide-right-enter-active,
  .slide-right-leave-active {
    transition: transform 0.3s ease;
  }
  
  .slide-right-enter-from {
    transform: translateX(-100%);
  }
  
  .slide-right-leave-to {
    transform: translateX(100%);
  }
  
  .slide-right-enter-to,
  .slide-right-leave-from {
    transform: translateX(0);
  }
  </style>
  