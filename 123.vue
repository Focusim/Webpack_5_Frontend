<template lang="pug">
	.registration
		h3.registration__title Talk to founder
		p.registration__description We&rsquo;ll be&nbsp;happy to&nbsp;host a&nbsp;brief product &amp;&nbsp;company demo, discuss your needs and provide a&nbsp;tailor-made offer for your business
		form.form(
			ref="form"
			@submit.prevent="ajax()"
			method="post"
		)
			.form__inner
				.form__wrapper
					label.form__input-label(data-error="Incorrect name, try again")
						.form__input-description Name
						input.form__input(
							required
							name="name"
							v-model.trim="participant.name"
							:class="{}"
							type="text"
							placeholder="John Doe"
							@click="clearValidate"
							@input="clearValidate"
						)
					label.form__input-label(data-error="Incorrect company, try again")
						.form__input-description Company
						input.form__input(
							required
							name="company"
							v-model.trim="participant.company"
							type="text"
							placeholder="Website"
							@click="clearValidate"
							@input="clearValidate"
						)
					label.form__input-label(data-error="Incorrect email, try again")
						.form__input-description Email
						input.form__input(
							required
							name="email"
							v-model.trim="participant.email"
							type="email"
							placeholder="example@gmail.com"
							@click="clearValidate"
							@input="clearValidate"
						)
					label.form__input-label(data-error="Incorrect phone, try again")
						.form__input-description Phone

						.flag(:class="{'flag--empty': (phone.countryNum.length > 0)}")
							input.flag__input(
								placeholder="+1"
								type="text"
								v-model="phone.countryNum"
								@input="searchCountry"
								onkeydown="this.style.width = ((this.value.length + 1) * 8) + 'px';"
							)
							.flag__out-img(:style="{ 'background-image': 'url(/countries/images/' + phone.selected.icon + '.svg)' }")

						input.form__input(
							required
							name="phone"
							v-model.trim="participant.phone"
							placeholder="phone"
							@click="clearValidate"
							@input="clearValidate"
						)
					label.form__input-label(data-error="Incorrect info, try again")
						.form__input-description Info
						input.form__input(
							required
							v-model.trim="participant.info"
							name="info"
							placeholder="Tell a little bit more"
							@click="clearValidate"
							@input="clearValidate"
						)

					label.form__input-checkbox
						input.form__input(
							name="checkbox"
							required
							type="checkbox"
						)
						.form__input-checkbox-item
						.form__input-privacy-policy I&nbsp;confirm that I&rsquo;ve read and agree to&nbsp;the Privacy Policy and consent to&nbsp;my&nbsp;personal data being processed. I&nbsp;understand and agree that Mindbox may send me&nbsp;emails from time to&nbsp;time.

				.form__submit-label
					input.form__submit(
						type="submit"
						value="Talk to founder"
						:class="isSending ? 'form__submit--sending' : ''"
						@click="submitHandler")
					img.form__submit-arrow(src="~@/img/index/start/arrow.svg")
				p.form__description We'll reach out to you within 24 hours

		.success(v-if="status.success" :key="status.success")
			.success__inner
				.success__title Thank you for <br>the application
				.success__text We'll reach out to you within 24 hours
				.success__btn(
					@click="status.success = false"
				) Close
				img.success__btn-close(src="~@/img/index/start/close.svg")
</template>

<script>
import countries from "@/static/countries/list";

export default {
	name: "start",
	components: {
	},
	data() {
		return {
			regEmail: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,7})$/,
			regSite: /^(\s{1,3})?((https?|ftp|smtp):\/\/)?(www.)?[a-zA-Zа-яА-Яё0-9_\-\.]+(\.[a-zA-Zа-яА-Яё]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?(\s{1,3})?$/,
			regPhone: /^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$/im,

			inputs: [],
			participant: {

			},
			errorValidate: '',

			status: {
				// isSent: false,
				// isSending: false,
				success: false,
			},

			phone: {
				element: '',
				countryNum: '',
				countries: countries,
				selected: {
					na: '',
					co: '',
					ph: '',
					icon: countries.plug,
				},
			}
		}
	},
	mounted() {
		this.setInputs();
	},
	methods: {
		setInputs() {
			const form = this.$refs.form
			form.querySelectorAll('input[required]').forEach(el => {
				this.inputs.push(el);
			});
		},

		checkValidate() {
			let errors = [];

			this.inputs.forEach(el => {

				if (el.getAttribute('name') === 'email') {
					if (!this.regEmail.test(el.value))   {
						el.parentElement.classList.add('error')
						errors.push('Error: ' + el.getAttribute('name'))
					} else {
						el.parentElement.classList.remove('error')
					}
					return false;
				}

				if (el.getAttribute('name') === 'company') {
					if (!this.regSite.test(el.value)) {
						el.parentElement.classList.add('error')
						errors.push('Error: ' + el.getAttribute('name'))
					} else {
						el.parentElement.classList.remove('error')
					}
					return false;
				}

				if ( el.value.length < 1 || (el.getAttribute('name') === 'checkbox') && !el.checked) {
					el.parentElement.classList.add('error');
					errors.push('Error: ' + el.getAttribute('name'))
					return false;
				}
			});

			if (errors.length === 0) return true;
		},

		clearValidate() {
			event.target.parentElement.classList.remove('error');
		},

		submitHandler() {
			this.status.success = this.checkValidate();
		},

		ajax() {

		},



		searchCountry() {
			let successSearch = false;
			this.phone.countryNum = this.phone.countryNum.replace(/\+/g, '');
			for (let item of this.phone.countries.list) {
				if (this.phone.countryNum.match(item.ph)) {
					//console.log('Сountry found: ' + opt.co)
					this.phone.selected.icon = item.co.toUpperCase();
					successSearch = true;
					break;
				}
			}
			if (!successSearch) this.phone.selected.icon = this.phone.countries.plug;
		},
	},
}
</script>

<style scoped lang="scss">

</style>
