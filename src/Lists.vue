<script setup>
import { computed } from 'vue';

import { useI18n } from "vue-i18n";
const { t, tm, locale } = useI18n();

const band = computed(() => tm("lists.beatlesMembers", [], { returnObjects: true }));
const memberListFormatter = computed(
  () =>
    new Intl.ListFormat(locale.value, { style: "long", type: "conjunction" }),
);
const memberList = computed(() => memberListFormatter.value.format(band.value));

const status = computed(() => tm("lists.statusItems", [], { returnObjects: true }) );
const statusListFormatter = computed(() => new Intl.ListFormat(locale.value, { style: "long", type: "disjunction" }));
const statusList = computed(() => statusListFormatter.value.format(status.value));
</script>

<template>
  <main>
    <h2>{{ t("lists.title") }}</h2>
    <p>{{ t("lists.beatles", { members: memberList }) }}</p>
    <q>{{ t("lists.status", { status: statusList }) }}</q>
  </main>
</template>
