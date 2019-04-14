<template>
    <b-container id="rsvp-container">
        <parallax-image />
        <b-container id="rsvp-content">
            <b-row>
                <b-col>
                    <h1 id="headline">RSVP</h1>
                </b-col>
            </b-row>
            <b-row>
                <b-col id="rsvp-title"><b>{{ $t("rsvp.title") }}</b></b-col>
            </b-row>
            <b-row>
                <b-col></b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-container id="rsvp-form">
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
                        <b-container id="attending-subform" class="border" v-show="form.attending">
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
    </b-container>
</template>

<script>
    import { config } from '../config/config';
    import ParallaxImage from '../components/ParallaxImage';

    export default {
        data() {
            return {
                form: {
                    email: '',
                    name: '',
                    food: null,
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
        components: {
            ParallaxImage,
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault();
                const attending = this.form.attending ? 'Yes,++I\'ll+be+there' : 'Sorry,+can\'t+make+it';
                const partnerAttending = this.form.partner ? 'Yes' : 'No';
                // const draftResponse = [[[null, 303985374, [this.form.name], 0], [null, 877086558,
                //     [attending], 0]], null, '1254275035300148928', [null, 877086558, [attending], 0],
                //     [null, 1498135098, [partnerAttending], 0]], null, ', null, null,
                //     null, this.form.email, 1];
                const formData = {
                    'emailAddress': this.form.email,
                    'draftResponse': [],
                    'fvv': 1,
                    'pageHistory': 0,
                    'fbzx': '1254275035300148928',
                    'emailReceipt': true,
                };

                const headers = {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'};

                alert(JSON.stringify(formData));
                alert(config.rsvp.formsURL);
                try {
                    this.$http.post(config.rsvp.formsURL, formData, headers)
                        .then((response) => {
                            console.log(response);
                        }).catch((error) => {
                            console.log(error);
                    });
                } catch (e) {
                    console.log(e);
                }
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

    .Masthead {
        height: 0 !important;
        min-height: 0 !important;
    }

    #rsvp-container {
        background-color: @background-color-components;
        max-width: 750px;
    }

    #rsvp-content {
        text-align: center;
        letter-spacing: 2px;
    }

    #rsvp-title {
        margin-bottom: 25px;
    }

    #headline {
        margin-bottom: 50px;
    }

    #attending-subform {
        background-color: @alternative-background-color-components;
        text-align: left;
    }

</style>