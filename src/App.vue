<template>
  <main>
    <Navbar />
    <Hero />
  </main>
</template>

<script setup lang="ts">
import Navbar from '@components/Navbar.vue'
import Hero from '@sections/Hero.vue'
</script>

<style lang="scss">
@use '@styles/main.scss';
</style>
