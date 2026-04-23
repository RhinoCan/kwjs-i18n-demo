<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const browserLanguage = navigator.language;
const browserFallback = navigator.languages[1];
const screenWidth = screen.width;
const screenHeight = screen.height;
</script>

<template>
  <main>
    <h2>{{ t("interpolation.title") }}</h2>
    <p>
      {{
        t("interpolation.preferredLanguage", {
          language: browserLanguage,
          fallback: browserFallback,
        })
      }}
    </p>
    <p>{{ t("interpolation.screenSize", { width: screenWidth, height: screenHeight }) }}</p>
  </main>
</template>
