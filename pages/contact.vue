<template>
  <v-container>
    <v-row justify="center">
      <h1>Contact Us</h1>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6" xl="4">
        <h2>By Phone</h2>
        <p><a href="tel:+15032884743">+1 (503) 288-4743</a></p>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6" xl="4">
        <h2>Send us a message</h2>
        <v-form
          ref="form"
          v-model="valid"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          lazy-validation
        >
          <input type="hidden" name="form-name" value="contact" />
          <p class="hidden d-none">
            <label
              >Don’t fill this out if you're human: <input name="bot-field"
            /></label>
          </p>
          <v-container>
            <v-row>
              <v-text-field
                v-model="name"
                :rules="nameRules"
                type="text"
                name="name"
                label="Name"
                aria-label="Name field"
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
                aria-label="E-mail field"
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
                aria-label="Message text area field"
                required
                solo
                outlined
              ></v-textarea>
            </v-row>
            <v-row>
              <v-btn
                :disabled="!valid"
                type="submit"
                color="red"
                class="white--text"
                aria-label="Submit Form"
                @click="validate"
              >
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
  mounted() {
    this.$refs.form.validate()
  },
  methods: {
    validate() {
      this.$refs.form.validate()
    },
  },
  head() {
    return {
      title: 'Contact Us',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Zien Hong restaurant contact us page. This page contains contact information for the restaurant.',
        },
      ],
    }
  },
}
</script>
