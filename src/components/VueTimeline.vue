<template>
    <div ref="timelineref"></div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import { select } from "d3"
import timeline from '../graph/timeline'

const timelineref = ref(null);

const props = defineProps({
    data: {
        type: Array
    }
})

onMounted(() => {
    select(timelineref.value)
        .datum(props.data)
        .call(timeline({
            widthResizable: true,
            viewHeight: 300,
            margin: {
                top: 0,
                bottom: 30,
                left: 15,
                right: 15
            },
            //onEventClick: click
        }))
})
</script>