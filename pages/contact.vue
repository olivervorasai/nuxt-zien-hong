<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6" xl="4">
        <v-form
          ref="form"
          v-model="valid"
          name="contact"
          method="POST"
          data-netlify="true"
          lazy-validation
        >
          <input type="hidden" name="form-name" value="contact" />
          <v-container>
            <v-row>
              <v-text-field
                v-model="name"
                :rules="nameRules"
                type="text"
                name="name"
                label="Name"
                required
                solo
                outlined
              ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                type="email"
                name="email"
                label="E-mail"
                required
                solo
                outlined
              ></v-text-field>
            </v-row>
            <v-row>
              <v-textarea
                v-model="message"
                :rules="messageRules"
                name="message"
                label="Message"
                required
                solo
                outlined
              ></v-textarea>
            </v-row>
            <v-row>
              <v-btn :disabled="!valid" type="submit" @click="validate">
                Submit
              </v-btn>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      name: '',
      nameRules: [(v) => !!v || 'Name is required'],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      message: '',
      messageRules: [(v) => !!v || 'Message is required'],
    }
  },
  methods: {
    validate() {
      this.$refs.form.validate()
    },
  },
}
</script>
