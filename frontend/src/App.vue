<template>
    <header>
      <HeaderNavbar v-if="onSigning" />
    </header>
  
    <main>
      <router-view v-slot="{ Component }">
        <transition :name="transitionName" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  
    <footer>
      <FooterNavbar v-if="onSigning" />
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
        onSigning: true,
        previousRouteName: null,
      }
    },
    computed: {
      route() {
        return this.$route.path;
      },
      transitionName() {
        const from = this.previousRouteName;
        const to = this.$route.name;
        return 'fade';
      }
    },
    watch: {
      route(newPath) {
        this.onSigning = !['/login', '/register', '/recover'].includes(newPath);
      }
    },
    created() {
      this.onSigning = !['/login', '/register', '/recover'].includes(this.$route.path);
  
      // Imposta il nome della route precedente
      this.$router.beforeEach((to, from, next) => {
        this.previousRouteName = from.name; // Salva il nome della route precedente
        next();
      });
    }
  };
  </script>
  
  <style scoped>
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
  </style>
  