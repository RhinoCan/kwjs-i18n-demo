<script setup>

import { computed } from 'vue';
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const timeZones = Intl.supportedValuesOf("timeZone");

const timeZoneNames = computed(() => {
  return timeZones.map((timeZone) => ({
    timeZone,
    longName: new Intl.DateTimeFormat(locale.value, {
      timeZone,
      timeZoneName: 'long',
    }).formatToParts(new Date())
      .find(part => part.type === 'timeZoneName')
      .value,
    shortName: new Intl.DateTimeFormat(locale.value, {
      timeZone,
      timeZoneName: 'short',
    }).formatToParts(new Date())
      .find(part => part.type === 'timeZoneName')
      .value,
  }));
});
</script>

<template>
  <main>

    <h2>{{ t('timezones.all') }}</h2>
    <ul>
      <li v-for="item in timeZoneNames" :key="item.timeZone">
        {{ item.timeZone }} - {{ item.longName }} - {{ item.shortName }}
      </li>
    </ul>

  </main>
</template>
