<script setup>

import { computed } from 'vue';
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const units = Intl.supportedValuesOf("unit");

const unitExamples = computed(() => {
  return units.map((unit) => {
    const fractionDigits = Math.floor(Math.random() * 4);
    return {
      unit,
      example: new Intl.NumberFormat(locale.value, {
        style: 'unit',
        unit: unit,
        minimumFractionDigits: fractionDigits,
        maximumFractionDigits: fractionDigits,
      }).format(Math.random() * 1000)
    };
  });
});
</script>

<template>
  <main>
    <h2>{{ t("units.all") }}</h2>
    <ul>
      <li v-for="item in unitExamples" :key="item.unit">{{ item.unit }} - {{ item.example }}</li>
    </ul>
  </main>
</template>
