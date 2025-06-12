<template>
  <LoaderBg />
  <NavSidebar />
  <HeaderBar />

  <div class="pc-container">
    <div class="pc-content">
      <BreadCrumb />

      <RouterView />
    </div>
  </div>

  <FooterBar />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import BreadCrumb from './components/layout/BreadCrumb.vue';
import FooterBar from './components/layout/FooterBar.vue';
import HeaderBar from './components/layout/HeaderBar.vue';
import LoaderBg from './components/layout/LoaderBg.vue';
import NavSidebar from './components/layout/NavSidebar.vue';
</script>

<style scoped></style>
