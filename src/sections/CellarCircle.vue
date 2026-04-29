<template>
  <section class="cellar section-padding" id="cellar">
    <div class="cellar-content">
      <div class="cellar-emblem">
        <svg viewBox="0 0 200 200" class="cellar-ring">
          <defs>
            <path
              id="circle-path"
              d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
          </defs>
          <text class="cellar-ring-text">
            <textPath href="#circle-path" startOffset="0%">
              THE CELLAR CIRCLE · MAISON VALMONT ·
            </textPath>
          </text>
        </svg>
      </div>

      <h2 class="cellar-heading text-heading">The Cellar Circle</h2>

      <p class="cellar-body">
        Access to Maison Valmont is limited. Members of The Cellar Circle
        receive priority allocation of new vintages, invitations to private
        harvest dinners, and access to our library of back-vintages.
      </p>

      <div class="cellar-form">
        <span class="cellar-bracket">[</span>
        <input
          v-model="email"
          type="email"
          placeholder="Enter your email address"
          class="cellar-input"
          :class="{
            'cellar-input--error': showError,
            'cellar-input--success': showSuccess,
          }"
          @blur="validateEmail"
          @input="resetState"
          @keyup.enter="handleSubmit"
        />
        <span class="cellar-bracket">]</span>
      </div>

      <p v-if="showError" class="cellar-message cellar-message--error">
        Please enter a valid email address.
      </p>
      <p v-if="showSuccess" class="cellar-message cellar-message--success">
        You're on the list. We'll be in touch.
      </p>

      <button class="cellar-cta" @click="handleSubmit">
        Request Invitation
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { useFadeUp, useFadeIn } from '@utils/useAnimations'

const email = ref('')
const showError = ref(false)
const showSuccess = ref(false)

const isValidEmail = (value: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

const validateEmail = () => {
  if (email.value && !isValidEmail(email.value)) {
    showError.value = true
    showSuccess.value = false
  }
}

const resetState = () => {
  showError.value = false
  showSuccess.value = false
}

const handleSubmit = () => {
  if (!email.value) {
    showError.value = true
    return
  }
  if (!isValidEmail(email.value)) {
    showError.value = true
    return
  }
  showError.value = false
  showSuccess.value = true
  email.value = ''
}

onMounted(() => {
  gsap.to('.cellar-ring', {
    rotation: 360,
    duration: 50,
    ease: 'none',
    repeat: -1,
    transformOrigin: '50% 50%',
  })
})

useFadeIn('.cellar-emblem')
useFadeUp('.cellar-heading', 0.2)
useFadeUp('.cellar-body', 0.4)
useFadeUp('.cellar-form', 0.6)
useFadeUp('.cellar-cta', 0.8)
</script>

<style lang="scss" scoped>
@use '@styles/variables' as *;

.cellar {
  background-color: $black;
  color: $white;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cellar-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 560px;
  gap: 1.5rem;
}

.cellar-emblem {
  width: 160px;
  height: 160px;
}

.cellar-ring {
  width: 100%;
  height: 100%;
}

.cellar-ring-text {
  font-family: $font-serif;
  font-size: 18px;
  fill: $gold;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.cellar-heading {
  font-family: $font-serif;
  font-style: italic;
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  color: $white;
}

.cellar-body {
  font-family: $font-serif;
  font-size: $text-body;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
  max-width: 400px;
}

.cellar-form {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.cellar-bracket {
  font-family: $font-serif;
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.4);
}

.cellar-input {
  background: none;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  color: $white;
  font-family: $font-serif;
  font-size: $text-body;
  text-align: center;
  padding: 0.5rem 1rem;
  width: 280px;
  outline: none;
  transition: border-color 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }

  &:focus {
    border-color: $gold;
  }

  &--error {
    border-color: $red;
    color: $red;

    &::placeholder {
      color: rgba(140, 0, 8, 0.4);
    }
  }

  &--success {
    border-color: $gold;
  }
}

.cellar-message {
  font-family: $font-serif;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  margin-top: -0.5rem;

  &--error {
    color: $red;
  }

  &--success {
    color: $gold;
  }
}

.cellar-cta {
  background: none;
  border: none;
  font-family: $font-serif;
  font-size: 0.875rem;
  color: $white;
  border-bottom: 1px solid $white;
  padding-bottom: 2px;
  cursor: pointer;
  transition:
    color 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    color: $gold;
    border-color: $gold;
  }
}

@media (max-width: $mobile) {
  .cellar-input {
    width: 200px;
  }
}
</style>
