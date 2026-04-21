<script setup>
import { ref, computed } from "vue";
import Translations from "./Translations.vue";
import Interpolation from "./Interpolation.vue";
import Calendars from "./Calendars.vue";
import Collations from "./Collations.vue";
import Currencies from "./Currencies.vue";
import NumberingSystems from "./NumberingSystems.vue";
import Timezones from "./Timezones.vue";
import Units from "./Units.vue";
import Dates from "./Dates.vue";
import Lists from "./Lists.vue";
import Numbers from "./Numbers.vue";
import Plurals from "./Plurals.vue";
import Collators from "./Collators.vue";
import RelativeTime from "./RelativeTime.vue";
import Combinations from "./Combinations.vue";

import { useI18n } from "vue-i18n";
const { t, locale, availableLocales } = useI18n();

const activeTab = ref("Translations");
const tabs = {
  Translations,
  Interpolation,
  Calendars,
  Collations,
  Currencies,
  NumberingSystems,
  Timezones,
  Units,
  Dates,
  Lists,
  Numbers,
  Plurals,
  Collators,
  RelativeTime,
  Combinations,
};
const greenTabs = [
  { name: "Translations", label: "Simple Translations", key: "app.translations"},
  { name: "Interpolation", label: "Translations with Interpolation", key: "app.interpolation" },
];
const whiteTabs = [
  { name: "Calendars", label: "Calendars", key: "app.calendars" },
  { name: "Collations", label: "Collations", key: "app.collations" },
  { name: "Currencies", label: "Currencies", key: "app.currencies" },
  {
    name: "NumberingSystems",
    label: "Numbering Systems",
    key: "app.numberingSystems",
  },
  { name: "Timezones", label: "Timezones", key: "app.timezones" },
  { name: "Units", label: "Units", key: "app.units" },
];
const yellowTabs = [
  { name: "Dates", label: "Dates/Times/Timestamps", key: "app.dates" },
  { name: "Lists", label: "Lists", key: "app.lists" },
  { name: "Numbers", label: "Numbers and Currency", key: "app.numbers" },
  { name: "Plurals", label: "Plurals", key: "app.plurals" },
  { name: "Collators", label: "Collators", key: "app.collators" },
  { name: "RelativeTime", label: "Relative Time", key: "app.relativeTime" },
  { name: "Combinations", label: "Combinations", key: "app.combinations" },
];

const displayName = computed(
  () => new Intl.DisplayNames([locale.value], { type: "language" }),
);
</script>

<template>
  <header>
    <!-- IMPORTANT NOTE: In a normal production app, no locale chooser would be necessary: the app would typically
     interrogate navigator.language, which is a Javascript global.[The app might also look at navigator.languages
     which provides an array of the user's preferred locales, in order, so that a fallback locale could be chosen.]
     Alternatively, the app could obtain the current locale from the Intl API.
     Exceptions:
     a) The app serves a market where the browser locale may not reflect the user's preferences e.g. a French-speaking
        user who shares a computer with an English-speaker
     b) The app has a user account system where locale preference is stored as a profile setting
     c) The content itself is language-specific and the user might want to browse in a different language e.g. Wikipedia
     d) Enterprise apps where the "shop language" may differ from the user's OS locale
      -->
    <div class="header-content">
      <h1>{{ t("app.title") }}</h1>
      <select v-model="locale" class="localeList">
        <option
          v-for="oneLocale in availableLocales"
          :key="oneLocale"
          :value="oneLocale"
        >
          {{ oneLocale }} [{{ displayName.of(oneLocale) }}]
        </option>
      </select>
    </div>
  </header>

  <nav>
    <div>
      <button
        v-for="tab in greenTabs"
        :key="tab.name"
        @click="activeTab = tab.name"
        class="green"
        :class="{ active: activeTab === tab.name }"
      >
        {{ t(tab.key) }}
      </button>
    </div>
    <div>
      <button
        v-for="tab in whiteTabs"
        :key="tab.name"
        @click="activeTab = tab.name"
        class="white"
        :class="{ active: activeTab === tab.name }"
      >
        {{ t(tab.key) }}
      </button>
    </div>
    <div>
      <button
        v-for="tab in yellowTabs"
        :key="tab.name"
        @click="activeTab = tab.name"
        class="yellow"
        :class="{ active: activeTab === tab.name }"
      >
        {{ t(tab.key) }}
      </button>
    </div>

    <component :is="tabs[activeTab]" />
  </nav>

</template>

<style scoped>
header {
  padding: 1rem;
  background: #333;
  width: 100%;
}
.header-content {
  display: flex; /* none/flex */
  justify-content: space-between;
  align-items: center;
}
h1 {
  color: gold;
  margin: 0;
}
h2 {
  margin-top: 1rem;
}
button.active {
  border: 3px solid red;
}
.localeList {
  font-size: 1.2rem;
}
button {
  font-size: 1.2rem;
}
.green {
  background-color: greenyellow;
}
.white {
  background-color: white;
}
.yellow {
  background-color: yellow;
}
a {
  text-decoration: none;
  color: #fff;
  font-size: 1.5rem;
  padding: 0 1rem;
  margin: 0 1rem;
}
main {
  padding: 2rem;
}
</style>
