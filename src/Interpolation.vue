<script setup></script>

<template>
  <main>
    <h2>Translations with interpolations</h2>
    <p>
      Your browser's preferred language is [language] and your first fallback is
      [fallback].
    </p>
    <!-- timezone = Intl.DateTimeFormat().resolvedOptions().timeZone -->
    <!-- language = navigator.language -->
    <!-- fallback = navigator.languages[1]-->
    <!-- French: La langue préférée de votre navigateur est {language} et votre premier recours est {fallback}. -->
    <!-- German: Die bevorzugte Sprache Ihres Browsers ist {language} und Ihr erster Fallback ist {fallback}. -->
    <p>Your screen is [width] x [height] pixels.</p>
    <!-- width = screen.width -->
    <!-- height = screen.height -->
    <!-- French: Votre écran est de {width} × {height} pixels. -->
    <!-- German: Ihr Bildschirm ist {width} × {height} Pixel groß. -->
  </main>
</template>
