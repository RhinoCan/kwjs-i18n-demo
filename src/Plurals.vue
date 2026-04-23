<script setup>
import { ref, computed } from "vue";

import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

/* Plurals */
const count = ref(1);
const emailMessage = computed(() =>
  t("plurals.emails", { count: count.value }, count.value),
);

/* Plural rules */
const rules = new Intl.PluralRules(locale.value).resolvedOptions().pluralCategories;
const rulesRussian = new Intl.PluralRules('ru').resolvedOptions().pluralCategories; //[one, few, many, other]
const rulesArabic = new Intl.PluralRules('ar').resolvedOptions().pluralCategories; //[zero, one, two, few, many, more]

</script>

<template>
  <main>
    <h2>{{ t("plurals.title") }}</h2>

    <input type="number" v-model="count" min="0" />
    <p>{{ emailMessage }}</p>

    <h2>{{ t("plurals.rules") }}</h2>
    <ul>
      <li v-for="oneRule in rules" :key="oneRule">
        {{ oneRule }}
      </li>
    </ul>

    <h2>{{ t("plurals.rulesRussian") }}</h2>
    <ul>
      <li v-for="oneRule in rulesRussian" :key="oneRule">
        {{ oneRule }}
      </li>
    </ul>

    <h2>{{ t("plurals.rulesArabic") }}</h2>
    <ul>
      <li v-for="oneRule in rulesArabic" :key="oneRule">
        {{ oneRule }}
      </li>
    </ul>
  </main>
</template>

<style scoped>
h2 {
  margin-top: 1rem;
}
</style>