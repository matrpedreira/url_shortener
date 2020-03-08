<template>
  <div>
    <new_url />
    <v-container class="grey lighten-5">
      <v-row>
        <v-col
          cols="4"
        >
          <urls_view :links="links"/>
        </v-col>
        <v-col
          cols="8"
        >
          <div>In Development</div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';
import NewURL from './NewURL/NewURL.vue';
import URLs from './URLs/URLs.vue';

function removeSubdomain(domain) {
  return domain.replace('admin.', '');
}

let baseURL = '';
const domain = removeSubdomain(document.domain);
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:4000';
} else {
  baseURL = `https://${domain}`;
}

export default {
  components: {
    new_url: NewURL,
    urls_view: URLs,
  },
  data: () => ({
    links: [],
  }),
  methods: {
    async fetchURLs() {
      try {
        const reqURL = `${baseURL}/api/fetchURLs`;
        const response = await axios.get(reqURL);
        this.links = response.data;
        console.log(this.links);
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.fetchURLs();
  },
};
</script>
