<template>
  <main>
    <Navbar />
    <Hero />
    <Origins />
    <Philosophy />
    <Collection />
    <CellarCircle />
    <Footer />
  </main>
</template>

<script setup lang="ts">
import Navbar from '@components/Navbar.vue'
import Hero from '@sections/Hero.vue'
import Origins from '@sections/Origins.vue'
import Philosophy from '@sections/Philosophy.vue'
import Collection from '@sections/Collection.vue'
import CellarCircle from '@sections/CellarCircle.vue'
import Footer from '@/components/Footer.vue'
</script>

<style lang="scss">
@use '@styles/main.scss';
</style>
