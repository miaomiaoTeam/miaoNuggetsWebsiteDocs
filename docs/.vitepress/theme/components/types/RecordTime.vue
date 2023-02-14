<template>
	<Type label="DB.RecordTime" :type="type" />
</template>

<script lang="ts" setup>
	import Type from './Type.vue'

	const type = {
		key: 'string',
		value: 'Date',
	}
</script>
