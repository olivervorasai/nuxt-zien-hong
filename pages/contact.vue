<template>
  <v-container>
    <v-row>
      <form name="netlify-test-form" method="POST" data-netlify="true">
        <p>
          <label>Your Name: <input type="text" name="test-name" /></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="test-email" /></label>
        </p>
        <p>
          <label
            >Your Role:
            <select name="test-role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select></label
          >
        </p>
        <p>
          <label>Message: <textarea name="test-message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6" xl="4">
        <v-form name="contact" method="POST" data-netlify="true">
          <v-container>
            <v-row>
              <v-text-field
                type="text"
                name="name"
                label="Name"
                required
                solo-inverted
              ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field
                type="email"
                name="email"
                label="E-mail"
                required
                solo-inverted
              ></v-text-field>
            </v-row>
            <v-row>
              <v-textarea
                name="message"
                label="Message"
                required
                solo-inverted
              ></v-textarea>
            </v-row>
            <v-row>
              <v-btn type="submit"> submit </v-btn>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
