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
						required="required"
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
						required="required"
						name="company"
						v-model.trim="participant.company"
						:class="{}"
						type="text"
						placeholder="Website"
						@click="clearValidate"
						@input="clearValidate"
					)
				label.form__input-label(data-error="Incorrect email, try again")
					.form__input-description Email
					input.form__input(
						required="required"
						name="email"
						v-model.trim="participant.email"
						:class="{}"
						type="email"
						placeholder="example@gmail.com"
						@click="clearValidate"
						@input="clearValidate"
					)
				label.form__input-label(data-error="Incorrect phone, try again")
					.form__input-description Phone

					.flag(:class="{'flag--empty': (phone.countryNum.length > 0)}")
						input.flag__input(
							ref="countryInput"
							placeholder="+1"
							type="tel"
							v-model="phone.countryNum"
							@input="searchCountry"
						)
						.flag__out-img(:style="{ 'background-image': 'url(/countries/images/' + phone.selected.icon + '.svg)' }")

					input.form__input(
						ref="phoneInput"
						placeholder="phone"
						required="required"
						type="tel"
						v-model.trim="participant.phone"
						name="phone"
						@click="clearValidate"
						@input="clearValidate(); inputHandlerPhone();"
						@keydown.delete="deleteHandlerPhone($event.target.value)"
					)
				label.form__input-label(data-error="Incorrect info, try again")
					.form__input-description Info
					input.form__input(
						required="required"
						v-model.trim="participant.info"
						:class="{}"
						name="info"
						placeholder="Tell a little bit more"
						@click="clearValidate"
						@input="clearValidate"
					)

				label.form__input-checkbox
					input.form__input(
						name="checkbox"
						required="required"
						type="checkbox"
					)
					.form__input-checkbox-item
					.form__input-privacy-policy I&nbsp;confirm that I&rsquo;ve read and agree to&nbsp;the Privacy Policy and consent to&nbsp;my&nbsp;personal data being processed. I&nbsp;understand and agree that Mindbox may send me&nbsp;emails from time to&nbsp;time.

			.form__submit-label
				input.form__submit(
					type="submit"
					value="Talk to founder"
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
import {logPlugin} from "@babel/preset-env/lib/debug";

export default {
	name: "start",
	data() {
		return {
			regEmail: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,7})$/,
			regSite: /^(\s{1,3})?((https?|ftp|smtp):\/\/)?(www.)?[a-zA-Zа-яА-Яё0-9_\-\.]+(\.[a-zA-Zа-яА-Яё]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?(\s{1,3})?$/,
			regPhone: /^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$/im,
			inputs: [],
			participant: {
			},
			status: {
				// isSent: false,
				// isSending: false,
				success: false,
			},

			phone: {
				countryNum: '',
				countries: countries,
				successSearch: false,
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
			this.phone.successSearch = false;
			this.$refs.countryInput.style.width = this.widthInputHandler(this.$refs.countryInput.value.length);
			this.phone.countryNum = this.phone.countryNum.replace(/\+/g, '');
			let codeCountry = '';

			for (let i = 1; i <= this.phone.countryNum.length; i++) {
				let enumerationValue = this.phone.countryNum.substring(0, i);
				let point = false;

				for (let item of this.phone.countries.list) {
					if (enumerationValue.match(item.ph) && enumerationValue.match(item.ph).index === 0) {
						codeCountry = item.ph;
						this.phone.selected.icon = item.co.toUpperCase();
						this.phone.successSearch = true;
						point = true;
						break;
					}
				}

				if (point) break;
			}

			if (!this.phone.successSearch) {
				this.phone.selected.icon = this.phone.countries.plug;
			} else {
				this.participant.phone = this.phone.countryNum.replace(codeCountry, '');
				this.phone.countryNum = codeCountry;
				this.$refs.countryInput.style.width = this.widthInputHandler(codeCountry.length);
				this.phoneNextStep();
			}
		},

		widthInputHandler(lengthString) {
			console.log('vw')

			if (lengthString > 1) {
				if (window.innerWidth > 1280) return ((lengthString + 1) * 8) + 'px';
				if (window.innerWidth > 768) return ((lengthString + 1) * 0.625) + 'vw';
				if (window.innerWidth <= 768) return ((lengthString + 1) * 8) + 'px';
			} else {
				return '';
			}
		},

		phoneNextStep() {
			this.$refs.phoneInput.focus();
		},

		deleteHandlerPhone(length) {
			if (!length) this.$refs.countryInput.focus();
		},

		inputHandlerPhone() {
			this.participant.phone = this.participant.phone.replace(/[+, ]/g, '');

			if (!this.phone.successSearch) {

				for (let i = 1; i <= this.participant.phone.length; i++) {
					let enumerationValue = this.participant.phone.substr(0, i);
					let point = false;

					for (let item of this.phone.countries.list) {
						if (enumerationValue.match(item.ph) && enumerationValue.match(item.ph).index === 0) {
							this.phone.countryNum = item.ph;
							this.phone.selected.icon = item.co.toUpperCase();
							this.phone.successSearch = true;
							point = true;
							break;
						}
					}

					if (point) {
						this.participant.phone = this.participant.phone.replace(`${this.phone.countryNum}`, '');
						this.$refs.countryInput.style.width = this.widthInputHandler(this.phone.countryNum.length);
						break;
					}
				}

			} else {
				//
			}
		}
	},
}
</script>

<style scoped lang="scss">
// styles in scss files //
</style>
