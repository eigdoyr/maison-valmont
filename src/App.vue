<template>
  <main>
    <Navbar />
    <Hero />
    <Origins />
    <Philosophy />
  </main>
</template>

<script setup lang="ts">
import Navbar from '@components/Navbar.vue'
import Hero from '@sections/Hero.vue'
import Origins from '@sections/Origins.vue'
import Philosophy from '@sections/Philosophy.vue'
</script>

<style lang="scss">
@use '@styles/main.scss';
</style>
