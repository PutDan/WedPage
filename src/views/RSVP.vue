<template>
    <div class='RSVP'>
        <h1>RSVP</h1>

        <b-container class="border border-warning" id="rsvp-container">
            <b-row>
                <b-col><b>{{ $t("rsvp.title") }}</b></b-col>
            </b-row>
            <b-row>
                <b-col></b-col>
            </b-row>
            <b-row>
                <b-col>
                    <codeComponent :access="access" :form="form"/>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-container id="rsvp-form" v-show="access">
                        <b-form>
                            <b-form-group id="emailInputGroup"
                                          label="Email address:"
                                          label-for="emailInputGroup"
                                          description="We'll never share your email with anyone else.">
                                <b-form-input id="emailInput"
                                              type="email"
                                              v-model="form.email"
                                              required
                                              placeholder="Enter email">
                                </b-form-input>
                            </b-form-group>
                            <b-form-group id="nameInputGroup"
                                          label="Your Name:"
                                          label-for="nameInputGroup">
                                <b-form-input id="nameInput"
                                              type="text"
                                              v-model="form.name"
                                              required
                                              placeholder="Enter name">
                                </b-form-input>
                            </b-form-group>
                            <b-form-checkbox v-model="form.attending" name="attending">{{ $t("rsvp.attending") }}</b-form-checkbox>
                        </b-form>
                        <br />
                        <b-container id="attending-subform" class="border border-warning" v-show="form.attending">
                            <b-form>
                                <b-form-group id="attendingGroup"
                                              label="Food options"
                                              label-for="attendingGroup" >
                                    <b-form-select id="foodMeSelect"
                                                   :options="foods"
                                                   required
                                                   v-model="form.food">
                                    </b-form-select>
                                    <br /><br />
                                    <b-form-checkbox v-model="form.partner" name="partner">{{ $t("rsvp.partner") }}</b-form-checkbox>
                                    <br /><br />
                                    <b-form-select id="foodPartnerSelect"
                                                   :options="foods"
                                                   required
                                                   v-model="form.partnerFood"
                                    v-show="form.partner">
                                    </b-form-select>
                                </b-form-group>
                            </b-form>
                        </b-container>
                        <br /> <br />
                        <b-form @submit="onSubmit" @reset="onReset">
                            <b-form-group id="button">
                                <b-button type="submit" variant="primary">Submit</b-button>
                                <b-button type="reset" variant="danger">Reset</b-button>
                            </b-form-group>
                        </b-form>
                    </b-container>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import { config } from '../config/config';
    import CodeComponent from './CodeComponent';

    export default {
        components: {CodeComponent},
        data() {
            return {
                form: {
                    email: '',
                    name: '',
                    food: null,
                    accessCode: '',
                    attending: false,
                    partner: false,
                    partnerFood: null,
                },
                foods: [
                    {text: 'Select One', value: null},
                    'Vegan', 'Vegetarian', 'Normal',
                ],
            };
        },
        computed: {
            access() {
                return this.form.accessCode === config.rsvp.password;
            },
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault();
                const attending = this.form.attending ? 'Yes,++I\'ll+be+there' : 'Sorry,+can\'t+make+it';
                const partnerAttending = this.form.partner ? 'Yes' : 'No';
                const draftResponse = [[[null, 303985374, [this.form.name], 0], [null, 405606947,
                    [this.form.accessCode], 0], [null, 877086558, [attending], 0],
                    [null, 1498135098, [partnerAttending], 0]], null, '1254275035300148928', null, null,
                    null, this.form.email, 1];
                const formData = {
                    'emailAddress': this.form.email,
                    'entry.179412295': this.form.food,
                    'emailReceipt': true,
                    'draftResponse': draftResponse,
                };
                if (this.form.partner) {
                    formData['entry.16473759'] = this.form.partnerFood;
                }

                alert(JSON.stringify(formData));

                this.$http.post(config.rsvp.formsURL, formData)
                    .then((response) => {
                        console.log(response);
                    });
            },
            onReset(evt) {
                evt.preventDefault();
                this.form.email = '';
                this.form.name = '';
                this.form.food = null;
                this.form.accessCode = '';
                this.form.attending = false;
                this.form.partner = false;
                this.form.partnerFood = null;

                this.show = false;
                this.$nextTick(() => {
                    this.show = true;
                });
            },
        },
    };
</script>

<style scoped lang="less">
    @import "../style/App.less";

    .RSVP {
        background-color: @deepgreen !important;
    }

    #rsvp-container {
        text-align: center;
        background-color: @woodbrown;

    }

    #rsvp-form {
        display: inline-block;
    }

    #attending-subform {
        background-color: @flowerred;
        text-align: left;
    }

</style>