<template>
    <b-container id="access-form">
        <b-modal centered v-model="showWrongCodeModal" id="codeModal">
            {{ $t("rsvp.wrongCode") }}
        </b-modal>
        <b-form @submit="onSubmitCode" v-show="!access">
            <b-form-group>
                <b-form-input id="accessCode"
                              type="password"
                              v-model="form.accessCode"
                              required
                              :description=" $t('rsvp.codeDescription')"
                              placeholder="Access Code">
                </b-form-input>
            </b-form-group>
            <b-form-group id="button-access">
                <b-button type="submit" variant="primary">Submit</b-button>
            </b-form-group>
        </b-form>
    </b-container>
</template>
<script>
    import { config } from '../config/config';

    export default {
        name: 'codeComponent',
        data() {
            return {
                showWrongCodeModal: false,
            };
        },
        props: {
            access: {},
            form: {},
        },
        methods: {
            onSubmitCode(evt) {
                evt.preventDefault();
                if (this.form.accessCode !== config.rsvp.password) {
                    this.showWrongCodeModal = true;
                }
            },
        },
    };
</script>
<style scoped lang="less">
    @import "../style/App.less";

    #codeModal {
        text-decoration-color: black !important;
    }

</style>