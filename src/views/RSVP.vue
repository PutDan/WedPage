<template>
    <div class='RSVP'>
        <h1>RSVP</h1>
        <b-container>
            <b-row>
                <b-col>Hi, <b>{{ name }}</b>. We would be delighted to have you at our wedding,
                    on the <b>6<sup>th</sup> of July, 2019</b></b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-container id="rsvp-form">
                        <b-form-checkbox v-model="rsvp">I am coming</b-form-checkbox>
                        <b-form @submit="onSubmit" @reset="onReset">
                            <b-form-group id="exampleInputGroup1"
                                          label="Email address:"
                                          label-for="exampleInput1"
                                          description="We'll never share your email with anyone else." v-show="rsvp">
                                <b-form-input id="exampleInput1"
                                              type="email"
                                              v-model="form.email"
                                              required
                                              placeholder="Enter email">
                                </b-form-input>
                            </b-form-group>
                            <b-form-group id="exampleInputGroup2"
                                          label="Your Name:"
                                          label-for="exampleInput2" v-show="rsvp">
                                <b-form-input id="exampleInput2"
                                              type="text"
                                              v-model="form.name"
                                              required
                                              placeholder="Enter name">
                                </b-form-input>
                            </b-form-group>
                            <b-form-group id="exampleInputGroup3"
                                          label="Food:"
                                          label-for="exampleInput3" v-show="rsvp">
                                <b-form-select id="exampleInput3"
                                               :options="foods"
                                               required
                                               v-model="form.food">
                                </b-form-select>
                            </b-form-group>
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
    export default {
        data() {
            return {
                form: {
                    email: '',
                    name: '',
                    food: null,
                    checked: [],
                },
                foods: [
                    {text: 'Select One', value: null},
                    'Vegan', 'Vegetarian', 'Normal',
                ],
                rsvp: true,
                name: 'Kay Fidelia',
            };
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault();
                alert(JSON.stringify(this.form));
            },
            onReset(evt) {
                evt.preventDefault();
                /* Reset our form values */
                this.form.email = '';
                this.form.name = '';
                this.form.food = null;
                this.form.checked = [];
                /* Trick to reset/clear native browser form validation state */
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
    }

    #rsvp-form {
        display: inline-block;
    }

</style>