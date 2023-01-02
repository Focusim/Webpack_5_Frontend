<template lang="pug">
.flag(:class="{'flag--empty': (searchValue.length > 0)}")
	input.flag__input(
		placeholder="+1"
		type="text"
		v-model="searchValue"
		@input="searchCountry"
		onkeydown="this.style.width = ((this.value.length + 1) * 8) + 'px';"
	)
	.flag__out-img(:style="{ 'background-image': 'url(/flags/' + selected.ic + '.svg)' }")
</template>

<script>
import flags from "../../static/flags";

export default {
	name: "inputPhone",

	data() {
		return {
			// regPhone: /^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$/im,
			input: false,
			inputValue: '',
			searchValue: '',
			propsData: {
				'flags': flags,
			},
			selected: {
				na: '',
				co: '',
				ph: '',
				ic: flags.image,
			},
		};
	},

	mounted() {
	},

	methods: {

		searchCountry() {
			let successSearch = false;
			this.searchValue = this.searchValue.replace(/\+/g, '');
			for (let opt of this.propsData.flags.opts) {
				if (this.searchValue.match(opt.ph)) {
					//console.log('Сountry found: ' + opt.co)
					this.selected.ic = opt.co.toUpperCase();
					successSearch = true;
					break;
				}
			}
			if (!successSearch) this.selected.ic = flags.image;
		},
	}
}
</script>

<style scoped lang="scss">
</style>
