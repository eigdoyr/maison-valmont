<template>
  <nav class="navbar">
    <a href="#hero" class="navbar-logo">Maison Valmont</a>
    <button
      class="navbar-hamburger"
      :class="{ 'navbar-hamburger--open': isOpen }"
      @click="toggleMenu"
      aria-label="Toggle menu"
    >
      <span />
      <span />
    </button>

    <div class="navbar-menu" :class="{ 'navbar-menu--open': isOpen }">
      <ul class="navbar-links">
        <li><a href="#origins" @click="closeMenu">Origins</a></li>
        <li><a href="#philosophy" @click="closeMenu">Philosophy</a></li>
        <li><a href="#collection" @click="closeMenu">Collection</a></li>
        <li><a href="#cellar" @click="closeMenu">Cellar Circle</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
const closeMenu = () => {
  isOpen.value = false
}
</script>

<style lang="scss" scoped>
@use '@styles/variables' as *;

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.navbar-logo {
  font-family: $font-body;
  font-size: 0.75rem;
  letter-spacing: 0.4em;
  color: $white;
  text-transform: uppercase;
}

.navbar-hamburger {
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  z-index: 101;

  span {
    display: block;
    width: 28px;
    height: 1px;
    background-color: $white;
    transition: all 0.3s ease;
  }

  &--open {
    span:nth-child(1) {
      transform: translateY(3.5px) rotate(45deg);
    }

    span:nth-child(2) {
      transform: translateY(-3.5px) rotate(-45deg);
    }
  }
}

.navbar-menu {
  display: none;
  position: fixed;
  inset: 0;
  background-color: $black;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;

  &--open {
    display: flex;
  }
}

.navbar-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;

  a {
    font-family: $font-body;
    font-size: 3rem;
    letter-spacing: 0.2em;
    color: $white;
    text-transform: uppercase;
    transition: color 0.3s ease;

    &:hover {
      color: $gold;
    }

    @media (max-width: $mobile) {
      font-size: 2rem;
      letter-spacing: 0.1em;
    }

    @media (max-width: $small) {
      font-size: 1.5rem;
    }
  }
}
</style>
