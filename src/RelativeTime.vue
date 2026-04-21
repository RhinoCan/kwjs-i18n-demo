<script setup>
import { ref, computed } from "vue";

import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

const alwaysFormatter = computed(
  () => new Intl.RelativeTimeFormat(locale.value, { numeric: "always" }),
);
const autoFormatter = computed(
  () => new Intl.RelativeTimeFormat(locale.value, { numeric: "auto" }),
);

const previousDayAlways = computed(() =>
  alwaysFormatter.value.format(-1, "day"),
);
const previousDayAuto = computed(() => autoFormatter.value.format(-1, "day"));
const nextDayAlways = computed(() => alwaysFormatter.value.format(1, "day"));
const nextDayAuto = computed(() => autoFormatter.value.format(1, "day"));

const alwaysLongFormatter = computed(
  () =>
    new Intl.RelativeTimeFormat(locale.value, {
      numeric: "always",
      style: "long",
    }),
);
const alwaysShortFormatter = computed(
  () =>
    new Intl.RelativeTimeFormat(locale.value, {
      numeric: "always",
      style: "short",
    }),
);

const previousAlwaysLong = computed(() =>
  alwaysLongFormatter.value.format(-3, "minutes"),
);
const futureAlwaysLong = computed(() =>
  alwaysLongFormatter.value.format(2, "minutes"),
);
const previousAlwaysShort = computed(() =>
  alwaysShortFormatter.value.format(-3, "minutes"),
);
const futureAlwaysShort = computed(() =>
  alwaysShortFormatter.value.format(2, "minutes"),
);

/* Valid values for the units: "year", "years", "quarter", "quarters" "month", "months",
 "week", "weeks", "day", "days", "hour", "hours", "minute", "minutes", "second", "seconds" */
</script>

<template>
  <main>
    <h2>{{ t("relativeTime.title") }}</h2>
    <h3>{{ t("relativeTime.previous") }}</h3>
    <p>{{ t("relativeTime.alwaysLongFormatter") }} {{ previousAlwaysLong }}</p>
    <p>
      {{ t("relativeTime.alwaysShortFormatter") }} {{ previousAlwaysShort }}
    </p>
    <p>{{ t("relativeTime.alwaysFormatter") }} {{ previousDayAlways }}</p>
    <p>{{ t("relativeTime.autoFormatter") }} {{ previousDayAuto }}</p>
    <h3>{{ t("relativeTime.future") }}</h3>
    <p>{{ t("relativeTime.alwaysLongFormatter") }} {{ futureAlwaysLong }}</p>
    <p>{{ t("relativeTime.alwaysShortFormatter") }} {{ futureAlwaysShort }}</p>
    <p>{{ t("relativeTime.alwaysFormatter") }} {{ nextDayAlways }}</p>
    <p>{{ t("relativeTime.autoFormatter") }} {{ nextDayAuto }}</p>
  </main>
</template>

<style scoped>
h2,
h3 {
  margin-top: 1rem;
}
</style>
