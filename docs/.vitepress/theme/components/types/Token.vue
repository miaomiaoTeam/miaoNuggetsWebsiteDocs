<template>
  <Type label="Client.Token" :type="type" />
</template>

<script lang="ts" setup>
import Type from './Type.vue';

const type = {
  value: 'string',
  expried: 'string'
}
</script>