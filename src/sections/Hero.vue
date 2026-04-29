<template>
  <section class="hero" id="hero" ref="heroRef">
    <div class="hero-bg">
      <video autoplay muted loop playsinline>
        <source src="@assets/hero/hero.mp4" type="video/mp4" />
      </video>
    </div>

    <div class="hero-overlay" />

    <div class="hero-content">
      <h1 class="hero-title">
        <span class="hero-title--top" ref="topRef">Maison</span>
        <div class="hero-center" ref="centerRef">
          <p class="hero-subtitle">Napa Valley</p>
          <div class="hero-est-wrap">
            <span class="hero-est">Est.</span>
            <span class="hero-year">1974</span>
          </div>
        </div>
        <span class="hero-title--bottom" ref="bottomRef">Valmont</span>
      </h1>
    </div>

    <a href="#collection" class="hero-cta" ref="ctaRef">
      Discover the 2019 Vintage
    </a>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const topRef = ref<HTMLElement | null>(null)
const bottomRef = ref<HTMLElement | null>(null)
const centerRef = ref<HTMLElement | null>(null)
const ctaRef = ref<HTMLElement | null>(null)

onMounted(() => {
  gsap.set([topRef.value, bottomRef.value, centerRef.value, ctaRef.value], {
    willChange: 'transform, opacity',
  })

  const tl = gsap.timeline({ delay: 0.3 })

  tl.fromTo(
    topRef.value,
    { opacity: 0, y: -40 },
    { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
  )
    .fromTo(
      bottomRef.value,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' },
      '-=1'
    )
    .fromTo(
      centerRef.value,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
      '-=0.8'
    )
    .fromTo(
      ctaRef.value,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.4'
    )
})
</script>

<style lang="scss" scoped>
@use '@styles/variables' as *;

.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  text-align: center;
  overflow: visible;
}

.hero-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: visible;

  &--top,
  &--bottom {
    font-family: $font-display;
    font-size: clamp(80px, 28vw, 400px);
    color: $red;
    text-transform: uppercase;
    letter-spacing: -0.02em;
    line-height: 50%;
    white-space: nowrap;

    @media (max-width: $tablet) {
      letter-spacing: -0.03em;
      line-height: 55%;
    }

    @media (max-width: $mobile) {
      letter-spacing: -0.02em;
      line-height: 60%;
    }

    @media (max-width: $small) {
      line-height: 65%;
    }
  }
}

.hero-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  margin: -1rem 0;
  position: relative;
  z-index: 3;
}

.hero-subtitle {
  font-family: $font-body;
  font-style: italic;
  font-size: clamp(32px, 5.8vw, 83px);
  color: $gold;
  letter-spacing: -0.025em;
  line-height: 1;
}

.hero-est-wrap {
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
}

.hero-est {
  font-family: $font-display;
  font-size: clamp(12px, 1.7vw, 24px);
  color: $gold;
  letter-spacing: 0.05em;
}

.hero-year {
  font-family: $font-body;
  font-size: clamp(18px, 2.8vw, 40px);
  color: $gold;
  letter-spacing: -0.07em;
  line-height: 1;
}

.hero-cta {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  font-family: $font-body;
  font-size: 0.875rem;
  color: $white;
  letter-spacing: 0.1em;
  border-bottom: 1px solid $white;
  padding-bottom: 2px;
  transition:
    color 0.3s ease,
    border-color 0.3s ease;
  white-space: nowrap;

  &:hover {
    color: $gold;
    border-color: $gold;
  }
}
</style>
