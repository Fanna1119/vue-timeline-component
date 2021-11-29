<template>
  <div>
    <VueTimelineVue :data="data" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import VueTimelineVue from './components/VueTimeline.vue';

const data = ref([{
  name: "event 1",
  start: new Date(2020, 1, 1),
  end: new Date(2020, 1, 4),
}, {
  name: "event 2",
  start: new Date(2020, 1, 2),
  end: new Date(2020, 1, 5),
}, {
  name: "event 3",
  start: new Date(2020, 1, 3),
  end: new Date(2020, 1, 10),
}])
</script>

<style>
</style>
