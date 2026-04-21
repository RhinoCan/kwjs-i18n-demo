<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const collations = Intl.supportedValuesOf("collation");

</script>

<template>
  <main>
    <h2>{{ t("collations.all") }}</h2>
    <ul>
      <li v-for="oneCollation in collations" :key="oneCollation">
        {{ oneCollation }}
      </li>
    </ul>
  </main>
</template>
