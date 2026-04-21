<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

const calendars = Intl.supportedValuesOf("calendar");

const calendarNames = computed(() => {
  const localNames = new Intl.DisplayNames([locale.value], { type: "calendar"});
  return calendars.map((calendar) => ({
    calendar,
    local: localNames.of(calendar),
  }));
});

const relevantCalendars = computed(() => {
  const displayNames = new Intl.DisplayNames([locale.value], {
    type: "calendar",
  });
  return new Intl.Locale(locale.value)
    .getCalendars()
    .map((calendar) => displayNames.of(calendar));
});
</script>

<template>
  <main>
    <h2>{{ t("calendars.all") }}</h2>
    <ul>
      <li v-for="oneCalendar in calendarNames" :key="oneCalendar.calendar">
        {{ oneCalendar.calendar }} - {{ oneCalendar.local }}
      </li>
    </ul>
    <h2>{{ t("calendars.relevant") }}</h2>
    <ul>
      <li
        v-for="oneRelevantCalendar in relevantCalendars"
        :key="oneRelevantCalendar"
      >
        {{ oneRelevantCalendar }}
    </li>
    </ul>
  </main>
</template>

<style scoped>
h2 {
  margin-top: 1em;
}
</style>
