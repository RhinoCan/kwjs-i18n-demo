<script setup>

import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const numberingSystems = Intl.supportedValuesOf("numberingSystem");

const numberingSystemNames = computed(() => {
  return numberingSystems.map((system) => ({
    system,
    //example: new Intl.NumberFormat(locale.value + '-u-nu-' + system).format(1234567890.12)
    example: new Intl.NumberFormat(locale.value, { numberingSystem: system }).format(1234567890.12)
  }));
});
</script>

<template>
  <main>
    <h2>{{ t("numberingSystems.all") }}</h2>
    <ul>
      <li
        v-for="item in numberingSystemNames" :key="item.system">
        {{ item.system }} - {{ item.example }}
      </li>
    </ul>
  </main>
</template>
