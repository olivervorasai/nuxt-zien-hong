<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6" xl="4">
        <v-form name="contact" method="POST" data-netlify="true">
          <v-container>
            <v-row>
              <v-text-field
                label="Full Name"
                required
                solo-inverted
              ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field
                label="E-mail"
                required
                solo-inverted
              ></v-text-field>
            </v-row>
            <v-row>
              <v-textarea label="Message" required solo-inverted></v-textarea>
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
