<template>
  <footer class="footer">
    <div class="footer-grid">
      <p class="footer-address">
        Maison Valmont, 1428 Silverado Trail, St. Helena, CA.
      </p>

      <nav class="footer-nav">
        <a href="#">Instagram</a>
        <span class="footer-divider">/</span>
        <a href="#">Email</a>
        <span class="footer-divider">/</span>
        <a href="#">Legal</a>
      </nav>

      <p class="footer-right">© 2026 Maison Valmont. Drink Responsibly.</p>
    </div>

    <div class="footer-credit">
      <p>
        Designed & Built by
        <a
          href="https://www.ryodgie.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ryodgie Barnatia
        </a>
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '@styles/variables' as *;

.footer {
  background-color: $black;
  padding: 2rem $spacing-md;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  gap: 1rem;
}

.footer-address {
  font-size: 0.75rem;
  color: $gray;
}

.footer-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  a {
    font-size: 0.75rem;
    color: $white;
    transition: color 0.3s ease;

    &:hover {
      color: $gold;
    }
  }
}

.footer-divider {
  color: $gray;
  font-size: 0.75rem;
}

.footer-right {
  font-size: 0.75rem;
  color: $gray;
  text-align: right;
}

.footer-credit {
  margin-top: 1.5rem;
  text-align: center;

  p {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.3);
  }

  a {
    color: $gold;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.7;
    }
  }
}

/* Mobile */
@media (max-width: $mobile) {
  .footer-grid {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1.5rem;
  }

  .footer-right {
    text-align: center;
  }
}
</style>
