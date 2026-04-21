<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const currencies = Intl.supportedValuesOf("currency");

const currencyNames = computed(() => {
  const displayNames = new Intl.DisplayNames([locale.value], {type: 'currency'});
  return currencies.map(code => ({
    code, name: displayNames.of(code)
  }));
});
</script>

<template>
  <main>
    <h2>{{ t("currencies.all") }}</h2>
    <ul>
      <li v-for="currency in currencyNames" :key="currency.code">{{ currency.code }} - {{ currency.name }}</li>
    </ul>
  </main>
</template>
