<template>
  <section class="origins section-padding" id="origins">
    <div class="origins-header">
      <p class="origins-label text-label">01 — Our Origins</p>
      <h2 class="origins-heading text-heading">
        French Roots. <br />
        California Soil.
      </h2>
    </div>

    <div class="origins-body">
      <div class="origins-text">
        <p class="origins-intro">
          <em>True luxury cannot be rushed.</em> Born from the limestone hills
          of Bordeaux and transplanted to the volcanic earth of St. Helena,
          <em>Maison Valmont</em> represents a dialogue between two worlds. We
          do not manufacture wine; we curate time, capturing the sunlight and
          fog of a single year in a bottle that will last for decades.
        </p>
      </div>

      <div class="origins-image">
        <img :src="portrait" alt="Maison Valmont founder" loading="lazy" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import portrait from '@assets/origins/portrait.png'
</script>

<style lang="scss" scoped>
@use '@styles/variables' as *;

.origins {
  background-color: $white;
  color: $black;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0;
}

.origins-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.origins-label {
  color: $gray;
}

.origins-heading {
  font-family: $font-body;
  font-style: italic;
  font-size: clamp(2rem, 4vw, 3.5rem);
  color: $black;
  line-height: 1.1;
  max-width: 600px;
}

.origins-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: end;
}

.origins-text {
  max-width: 340px;
}

.origins-intro {
  font-family: $font-body;
  font-size: $text-body;
  line-height: 1.6;
  color: $black;
}

.origins-image {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  img {
    width: 260px;
    height: auto;
    max-height: 400px;
    object-fit: cover;
    object-position: top;
    filter: grayscale(100%);

    @media (max-width: $tablet) {
      width: 100%;
      max-height: 100%;
    }
  }
}

/* Tablet */
@media (max-width: $tablet) {
  .origins-body {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .origins-image img {
    width: 280px;
    height: auto;
    object-fit: cover;
    object-position: top center;
  }
}
/* Mobile */
@media (max-width: $mobile) {
  .origins-heading {
    font-size: clamp(1.5rem, 6vw, 2.5rem);
  }

  .origins-body {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .origins-intro {
    padding: $spacing-md 0;
  }

  .origins-image {
    justify-content: flex-start;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
