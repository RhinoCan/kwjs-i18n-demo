<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

/* Temporal Duration */
// Create a Temporal indicating when the first manned moon landing took place.
const firstMoonLanding = Temporal.ZonedDateTime.from({
  year: 1969,
  month: 7,
  day: 20,
  hour: 16,
  minute: 17,
  second: 2,
  timeZone: "America/Toronto",
});
//console.log("firstMoonLanding:", firstMoonLanding.toString());

// Create a Temporal indicating the present moment.
const now = Temporal.Now.zonedDateTimeISO("America/Toronto");
//console.log("now:", now.toString());

// Determine the difference between those dates.
const elapsed = computed(() => now.since(firstMoonLanding, {
  largestUnit: "years",
  smallestUnit: "hours",
}));

// Create a formatter to make the dates more human-readable.
const moonFormatter = computed(() => new Intl.DateTimeFormat(locale.value, {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  timeZoneName: "short",
  timeZone: "America/Toronto",
}));

// Friendlier moon landing date.
const firstMoonLandingFriendly = moonFormatter.value.format(
  firstMoonLanding.toInstant().epochMilliseconds,
);
//console.log("firstMoonLandingFriendly:", firstMoonLandingFriendly);

// Friendlier present moment.
const nowFriendly = moonFormatter.value.format(now.toInstant().epochMilliseconds);
//console.log("nowFriendly:", nowFriendly);

// Prepare the duration string which expresses the duration in ordinary language.
// const fullDuration = computed(() => {
//   const parts = [];
//   if (elapsed.years) parts.push(t("dates.timeUnits.year", elapsed.years));
//   if (elapsed.months) parts.push(t("dates.timeUnits.month", elapsed.months));
//   if (elapsed.days) parts.push(t("dates.timeUnits.day", elapsed.days));
//   if (elapsed.hours) parts.push(t("dates.timeUnits.hour", elapsed.hours));
//   return new Intl.ListFormat(locale.value, {
//     style: "long",
//     type: "conjunction",
//   }).format(parts);
// });
const fullDuration = computed(() => {
  const units = [
    ["year", elapsed.value.years],
    ["month", elapsed.value.months],
    ["day", elapsed.value.days],
    ["hour", elapsed.value.hours],
  ];

  const parts = units
    .filter(([, value]) => value)
    .map(([unit, value]) => t(`combos.timeUnits.${unit}`, value));

  return new Intl.ListFormat(locale.value, {
    style: "long",
    type: "conjunction",
  }).format(parts);
});

</script>

<template>
  <main>

    <h2>{{ t("combos.duration") }}</h2>

    <p>{{ t("combos.durationQuestion") }}</p>
    <p>
      {{
        t("combos.durationAnswerShort", {
          firstMoonLanding: firstMoonLanding,
          now: now,
          duration: elapsed,
        })
      }}
    </p>

    <p>
      {{
        t("combos.durationAnswer", {
          firstMoonLanding: firstMoonLanding,
          now: now,
          years: elapsed.years,
          months: elapsed.months,
          days: elapsed.days,
          hours: elapsed.hours,
        })
      }}
    </p>
    <p>
      {{
        t("combos.durationAnswer", {
          firstMoonLanding: firstMoonLandingFriendly,
          now: nowFriendly,
          years: elapsed.years,
          months: elapsed.months,
          days: elapsed.days,
          hours: elapsed.hours,
        })
      }}
    </p>
    <p>
      {{
        t("combos.durationAnswer2", {
          firstMoonLanding: firstMoonLandingFriendly,
          now: nowFriendly,
          fullDuration: fullDuration,
        })
      }}
    </p>
  </main>
</template>

<style scoped>
h2 {
  margin-top: 1rem;
}
p {
  margin-bottom: 1rem;
}
</style>
