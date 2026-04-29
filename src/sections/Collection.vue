<template>
  <section class="collection" id="collection">
    <div class="collection-left">
      <p class="collection-label text-label">Le Grand Vin</p>

      <div class="collection-center">
        <div class="collection-year-wrap">
          <span class="collection-year">2019</span>
          <h2 class="collection-heading text-heading">
            Cabernet <br />
            Sauvignon
          </h2>
        </div>

        <ul class="collection-notes">
          <li>Nose: Blackcurrant, Graphite, Crushed Violet</li>
          <li>Palate: Silky tannins, dark cherry, hint of tobacco</li>
          <li>Aging: 24 months in French Oak</li>
        </ul>
      </div>

      <a href="#cellar" class="collection-cta">Acquire Allocation</a>
    </div>

    <div class="collection-right">
      <img
        :src="bottle"
        alt="Maison Valmont Le Grand Vin 2019"
        loading="lazy"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import bottle from '@assets/collection/bottle.png'
</script>

<style lang="scss" scoped>
@use '@styles/variables' as *;

.collection {
  background-color: $white;
  color: $black;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
}

.collection-left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: $spacing-xl $spacing-md;
}

.collection-label {
  color: $gray;
}

.collection-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
}

.collection-year-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: clamp(120px, 18vw, 280px);
}

.collection-year {
  font-family: $font-display;
  font-size: clamp(300px, 18vw, 280px);
  color: rgba(140, 0, 8, 0.06);
  line-height: 1;
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: -0.05em;
  user-select: none;
}

.collection-heading {
  font-family: $font-body;
  font-style: italic;
  font-size: clamp(2rem, 4vw, 3.5rem);
  color: $gray;
  line-height: 0.83;
  letter-spacing: -0.01em;
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 0;
}

.collection-notes {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;

  li {
    font-family: $font-body;
    font-size: $text-body;
    color: $black;
    line-height: 1.5;
  }
}

.collection-cta {
  font-family: $font-body;
  font-size: 0.875rem;
  color: $black;
  border-bottom: 1px solid $black;
  padding-bottom: 2px;
  align-self: flex-start;
  transition:
    color 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    color: $red;
    border-color: $red;
  }
}

.collection-right {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}

/* Tablet */
@media (max-width: $tablet) {
  .collection {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .collection-left {
    padding: $spacing-lg $spacing-md;
    gap: 3rem;
    min-height: auto;
  }

  .collection-right {
    min-height: 60vw;
  }

  .collection-year {
    font-size: clamp(100px, 20vw, 200px);
  }
}

/* Mobile */
@media (max-width: $mobile) {
  .collection-center {
    padding: 4rem;
  }

  .collection-left {
    padding: $spacing-md $spacing-sm;
    gap: 2rem;
  }

  .collection-right {
    min-height: 80vw;
  }

  .collection-year {
    font-size: clamp(200px, 25vw, 160px);
  }
}
</style>
