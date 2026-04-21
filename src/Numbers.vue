<script setup>
import { computed } from 'vue';
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

/* Large number */
const num = 123456789012;
const numFormatter = computed(
  () =>
    new Intl.NumberFormat(locale.value, {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 5,
      useGrouping: true,
    }),
);
const formattedNum = computed(() => numFormatter.value.format(num));

/* Percentage */
const percentNum = .452;
const percentNumFormatter = computed(() => new Intl.NumberFormat(locale.value, { style: "percent", minimumFractionDigits: 2, maximumFractionDigits: 2}));
const formattedPercent = computed(() => percentNumFormatter.value.format(percentNum));

/* Compact number */
const compactNum = 1234567890;
const compactNumFormatter = computed(() => new Intl.NumberFormat(locale.value, { notation: "compact" }));
const formattedCompact = computed(() => compactNumFormatter.value.format(compactNum));

/* Scientific notation */
const scientificNum = 1234567890;
const scientificNumFormatter = computed(() => new Intl.NumberFormat(locale.value, { notation: "scientific" }));
const formattedScientific = computed(() => scientificNumFormatter.value.format(scientificNum));

/* Negative number */
const negativeNum = -40;
const negativeNumFormatter = computed(() => new Intl.NumberFormat(locale.value, { notation: "standard" }));
const formattedNegative = computed(() => negativeNumFormatter.value.format(negativeNum));

/* Explicit sign */
const explicitNum = 25;
const explicitNumFormatter = computed(() => new Intl.NumberFormat(locale.value, { signDisplay: 'always' }));
const formattedExplicit = computed(() => explicitNumFormatter.value.format(explicitNum));

/* Currency amount */
const amount = 1234567.89;

/* There are several ways to get the correct currency for a locale:
   - the locale-currency package on npm enables the currency to be determined for a given locale
   - the Unicode CLDR has the information
   - you can build your own simple table
   */
const currencyFormatter = computed(
  () =>
    new Intl.NumberFormat(locale.value, { style: "currency", currency: "EUR" }),
);
const formattedAmount = computed(() => currencyFormatter.value.format(amount));
</script>

<template>
  <main>
    <h2>{{ t("numbers.title") }}</h2>
    <p>{{ t("numbers.number") }} {{ formattedNum }}</p>
    <p>{{ t("numbers.percentage") }} {{ formattedPercent }}</p>
    <p>{{ t("numbers.compact") }} {{ formattedCompact }}</p>
    <p>{{ t("numbers.scientific") }} {{ formattedScientific }}</p>
    <p>{{ t("numbers.negative") }} {{  formattedNegative }}</p>
    <p>{{ t("numbers.explicitSign") }} {{ formattedExplicit }}</p>
    <p>{{ t("numbers.currencyAmount") }} {{ formattedAmount }}</p>
  </main>
</template>