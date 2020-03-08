<template>
<v-form v-model="valid">
  <v-container>
    <v-row>
      <v-col
        cols="12"
        md="4"
      >
        <v-text-field
          v-model="url"
          label="URL para reduzir"
          required
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="4"
      >
        <v-text-field
          v-model="urlKey"
          label="/<URL_KEY>"
          required
        ></v-text-field>
      </v-col>
      <v-col
        cols="12"
        md="4"
      >
        <v-btn
        color="success"
        class="mr-4"
        @click="createURL"
      >
        Criar
      </v-btn>
      </v-col>
    </v-row>
  </v-container>
</v-form>
</template>

<script>
import axios from 'axios';

function removeSubdomain(domain) {
  return domain.replace('admin.', '');
}

export default {

  data: () => ({
    valid: true,
    url: '',
    urlKey: '',
  }),

  methods: {
    async createURL() {
      try {
        let newURL = this.url;
        if (!this.url.includes('http')) {
          newURL = `https://${this.url}`;
        }
        const domain = removeSubdomain(document.domain);
        const reqURL = `http://${domain}/api/newURL`;
        console.log(reqURL);
        const response = await axios.post(reqURL, {
          url: newURL,
          urlKey: this.urlKey,
        });
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
