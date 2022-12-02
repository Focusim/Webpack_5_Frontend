<template lang="pug">
section.vue
	.container
		p {{ message }}
</template>

<script>
export default {
	name: 'vue-pug',
	data() {
		return {
			message: 'Vue PUG components',
		};
	},
	mounted() {
		console.log('vue-pug init')
	},
};
</script>

<style lang="scss">
@import '@/styles/mixins.scss';
@import '@/styles/vars.scss';

section.vue {
	text-align: center;
	font-size: 40px;
	color: cadetblue;
}
</style>
