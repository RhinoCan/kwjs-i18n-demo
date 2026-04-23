<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <main>
    <h2>{{ t("translations.title") }}</h2>
    <p>{{ t("translations.goodMorning") }}</p>
    <p>{{ t("translations.howAreYou") }}</p>
  </main>
</template>
