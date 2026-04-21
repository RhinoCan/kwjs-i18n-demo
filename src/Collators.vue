<script setup>
import { computed } from "vue";

import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

const names = [
  "Müller",
  "Mueller",
  "Möller",
  "Moeller",
  "Bäcker",
  "Baecker",
  "Schröder",
  "Schroeder",
  "Käfer",
  "Kaefer",
  "Wörner",
  "Woerner",
  "Lüdemann",
  "Ludemann",
  "Böhm",
  "Boehm",
  "Übel",
  "Ubel",
  "Ärger",
  "Aerger",
  "Weiß",
  "Weiss",
  "Groß",
  "Gross",
];

const standardCollator = computed(() => new Intl.Collator("de", { collation: "standard" }));
const phonebkCollator = computed(() => new Intl.Collator("de", { collation: "phonebk" }));

const namesCollationStandard = computed(() => [...names].sort(standardCollator.value.compare));
const namesCollationPhonebk = computed(() => [...names].sort(phonebkCollator.value.compare));

/* Humour 
Dog: Barkenpantensniffer

Dog Catcher: Barkenpantensniffersnatcher

Dog Catcher's Truck: Barkenpantensniffersnatcherwagen

Garage for Truck: Barkenpantensniffensnatcherwagenhaus

Truck Repairman: Barkenpantensniffensnatcherwagenmechanikerwerker

Doctor: Chestergethumpenpulsentooker

Nurse: Chestergethumpenpulsentookerhelper

Hypodermic Needle: Chestergethumpenpulsentookerhelperhurtensticker

Backside: Chestergethumpenpulsentookerhelperhurtenstickerstabbenplatz

Piano: Plinkenplankenplunkenbox

Pianist: Plinkenplankenplunkenboxgepounder

Piano Stool: Plinkenplankenplunkenboxgepounderspinnenseat

Piano Recital: Plinkenplankenplunkenboxgepounderoffengeshowenspelle

Fathers at the Recital: Plinkenplankenplunkenboxgepounderoffengeshowenspellensnoozengruppe

Mothers at the Recital: Plinkenplankenplunkenboxgepounderoffengeshowenspellensnoozengruppenuppenwakers

Automobile: Honkenbrakenscreecher

Gasoline: Honkenbrakenscreecherzoomerjuicen

Driver: Honkenbrakenscreecherguidenschtunker

Auto Mechanic: Honkenbrakenscreecherknockengepingersputtergefixer

Repair Bill: Bankenrollergebustenuptottenliste */

</script>

<template>
  <main>
    <h2>{{ t("collators.title") }}</h2>
    <h3>{{ t("collators.standard") }}</h3>
      <ul>
        <li v-for="oneName in namesCollationStandard" :key="oneName">{{ oneName }}</li>
      </ul>
    <h3>{{ t("collators.phonebk") }}</h3>
    <ul>
      <li v-for="oneName in namesCollationPhonebk" :key="oneName">{{ oneName }}</li>
    </ul>
  </main>
</template>

<style scoped>
h2, h3 {
  margin-top: 1rem;
}
</style>
