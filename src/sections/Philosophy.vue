<template>
  <section class="philosophy" id="philosophy">
    <div class="philosophy-bg">
      <img :src="vineyard" alt="Maison Valmont vineyard" loading="lazy" />
    </div>

    <div class="philosophy-overlay" />

    <div class="philosophy-content">
      <h2 class="philosophy-heading">The Art of Non-Intervention.</h2>
      <p class="philosophy-body">
        We believe the winemaker's role is to observe, not impose. Our vines are
        dry-farmed, forcing roots deep into the bedrock to find water. The
        result is a grape of intense concentration and character — undiluted,
        unmasked, and unapologetically bold.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import vineyard from '@assets/philosophy/vineyard.png'
import { useFadeUp, useFadeIn } from '@utils/useAnimations'

useFadeIn('.philosophy-bg', 0)
useFadeUp('.philosophy-heading', 0.3)
useFadeUp('.philosophy-body', 0.5)
</script>

<style lang="scss" scoped>
@use '@styles/variables' as *;

.philosophy {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.philosophy-bg {
  position: absolute;
  inset: 0;
  z-index: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}

.philosophy-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0) 100%
  );
}

.philosophy-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 600px;
  padding: 0 2rem 6rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.philosophy-heading {
  font-family: $font-serif;
  font-style: italic;
  font-size: clamp(1.5rem, 3.5vw, 3rem);
  color: $white;
  line-height: 1.2;
}

.philosophy-body {
  font-family: $font-serif;
  font-size: $text-body;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  text-align: center;
}

@media (max-width: $mobile) {
  .philosophy {
    height: 100svh;
  }

  .philosophy-content {
    padding: 0 1.25rem 4rem;
  }

  .philosophy-heading {
    font-size: clamp(1.25rem, 6vw, 2rem);
  }
}
</style>
