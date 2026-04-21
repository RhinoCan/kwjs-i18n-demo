<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

/* Date using Date object. */
const exampleDate = new Date(1969, 6, 20, 16, 17, 2, 123);

/* Date using Temporal object. */
const exampleTemporal = Number(Temporal.Now.instant().epochMilliseconds);

/* Examples of different formats applied to both Dates and Temporals. */
const examples = [
  {
    codeDate:
      "new Intl.DateTimeFormat(locale, { dateStyle: 'full' }).format(exampleDate)",
    codeTemporal:
      "new Intl.DateTimeFormat(locale, { dateStyle: 'full' }).format(exampleTemporal)",
    options: { dateStyle: "full" },
  },
  {
    codeDate:
      "new Intl.DateTimeFormat(locale, { dateStyle: 'long' }).format(exampleDate)",
    codeTemporal:
      "new Intl.DateTimeFormat(locale, { dateStyle: 'long' }).format(exampleTemporal)",
    options: { dateStyle: "long" },
  },
  {
    codeDate:
      "new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }).format(exampleDate)",
    codeTemporal:
      "new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }).format(exampleTemporal)",
    options: { dateStyle: "medium" },
  },
  {
    codeDate:
      "new Intl.DateTimeFormat(locale, { dateStyle: 'short' }).format(exampleDate)",
    codeTemporal:
      "new Intl.DateTimeFormat(locale, { dateStyle: 'short' }).format(exampleTemporal)",
    options: { dateStyle: "short" },
  },
  {
    codeDate:
      "new Intl.DateTimeFormat(locale, { timeStyle: 'full' }).format(exampleDate)",
    codeTemporal:
      "new Intl.DateTimeFormat(locale, { timeStyle: 'full' }).format(exampleTemporal)",
    options: { timeStyle: "full" },
  },
  {
    codeDate:
      "new Intl.DateTimeFormat(locale, { timeStyle: 'long' }).format(exampleDate)",
    codeTemporal:
      "new Intl.DateTimeFormat(locale, { timeStyle: 'long' }).format(exampleTemporal)",
    options: { timeStyle: "long" },
  },
  {
    codeDate:
      "new Intl.DateTimeFormat(locale, { timeStyle: 'medium' }).format(exampleDate)",
    codeTemporal:
      "new Intl.DateTimeFormat(locale, { timeStyle: 'medium' }).format(exampleTemporal)",
    options: { timeStyle: "medium" },
  },
  {
    codeDate:
      "new Intl.DateTimeFormat(locale, { timeStyle: 'short' }).format(exampleDate)",
    codeTemporal:
      "new Intl.DateTimeFormat(locale, { timeStyle: 'short' }).format(exampleTemporal)",
    options: { timeStyle: "short" },
  },
  {
    codeDate:
      "new Intl.DateTimeFormat(locale, { dateStyle: 'full', timeStyle: 'full' }).format(exampleDate)",
    codeTemporal:
      "new Intl.DateTimeFormat(locale, { dateStyle: 'full', timeStyle: 'full' }).format(exampleTemporal)",
    options: { dateStyle: "full", timeStyle: "full" },
  },
  {
    codeDate:
      "new Intl.DateTimeFormat(locale, { dateStyle: 'short', timeStyle: 'short' }).format(exampleDate)",
    codeTemporal:
      "new Intl.DateTimeFormat(locale, { dateStyle: 'short', timeStyle: 'short' }).format(exampleTemporal)",
    options: { dateStyle: "short", timeStyle: "short" },
  },
  {
    codeDate:
      "new Intl.DateTimeFormat(locale, { weekday: 'long', day: 'numeric', year: 'numeric', month: 'long', era: 'long' }).format(exampleDate)",
    codeTemporal:
      "new Intl.DateTimeFormat(locale, { weekday: 'long', day: 'numeric', year: 'numeric', month: 'long', era: 'long' }).format(exampleTemporal)",
    options: {
      weekday: "long",
      day: "numeric",
      year: "numeric",
      month: "long",
      era: "long",
    },
  },
  {
    codeDate:
      "new Intl.DateTimeFormat(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short'}).format(exampleDate)",
    codeTemporal:
      "new Intl.DateTimeFormat(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short'}).format(exampleTemporal)",
    options: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short",
    },
  },
  {
    codeDate:
      "new Intl.DateTimeFormat(locale, { numberingSystem: 'thai', calendar: 'buddhist', dateStyle: 'long', timeStyle: 'long' }).format(exampleDate)",
    codeTemporal:
      "new Intl.DateTimeFormat(locale, { numberingSystem: 'thai', calendar: 'buddhist', dateStyle: 'long', timeStyle: 'long' }).format(exampleTemporal)",
    options: {
      numberingSystem: "thai",
      calendar: "buddhist",
      dateStyle: "long",
      timeStyle: "long",
    },
  },
];

// /******************************************************************** */

// /* If you try to format a zonedDateTime with an Intl.DateFormat, you will inevitably throw an error.
//    The TC39 committee that designed the Temporal API could not agree on how to handle the fact that
//    the formatter and the zonedDateTime might have conflicting timestamps so they finally agreed to
//    throw an error. They proposed that formatting of zonedDateTime objects be accomplished in one of
//    two ways where the first is ideal for small quantities of zonedDateTime objects that need to be
//    formatted and the second is the preferred approach when dealing with large quantities of zonedDateTime
//    objects (like in a table):  */

// const todayTemporalZonedDateTimeFormatted1 = computed(() =>
//   Temporal.Now.zonedDateTimeISO().toLocaleString(locale.value, {
//     dateStyle: "long",
//     timeStyle: "long",
//   }),
// );

// const todayTemporalZonedDateTimeFormatted2 = computed(() => {
//   const zdt = Temporal.Now.zonedDateTimeISO(); // Equivalent of Date.now()
//   return new Intl.DateTimeFormat(locale.value, {
//     dateStyle: "long",
//     timeStyle: "long",
//     timeZone: zdt.timeZoneId,
//   }).format(zdt.toInstant().epochMilliseconds);
// });
</script>

<template>
  <main>
    <h2>{{ t("dates.title") }}</h2>

    <code class="gold"
      >const exampleDate = new Date(1969, 6, 20, 16, 17, 2, 123);</code
    >
    <code class="gold"
      >const exampleTemporal =
      Number(Temporal.Now.instant().epochMilliseconds);</code
    >

    <table
      v-for="(item, index) in examples"
      :key="index"
      border="1"
      style="margin-bottom: 12px; width: 100%"
    >
      <thead v-if="index === 0">
        <tr>
          <th>Date Code</th>
          <th>Temporal Code</th>
        </tr>
        <tr>
          <th>Date Result</th>
          <th>Temporal Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <code class="javascript">{{ item.codeDate }}</code>
          </td>
          <td>
            <code class="javascript">{{ item.codeTemporal }}</code>
          </td>
        </tr>
        <tr>
          <td>
            <code class="result">{{
              new Intl.DateTimeFormat(locale, item.options).format(exampleDate)
            }}</code>
          </td>
          <td>
            <code class="result">{{
              new Intl.DateTimeFormat(locale, item.options).format(
                exampleTemporal,
              )
            }}</code>
          </td>
        </tr>
      </tbody>
    </table>

  </main>
</template>

<style scoped>
h2 {
  margin-top: 1rem;
}
code {
  display: block;
  margin-top: 0.5rem;
}
.javascript {
  font-size: smaller;
}
.result {
  font-size: larger;
}
.gold {
  color: gold;
  font-size: larger;
}
th,
td {
  padding: 5px;
}
</style>
