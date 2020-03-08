<template>
<v-list two-line subheader>
  <v-subheader inset>Links</v-subheader>

  <v-list-item
    v-for="item in links"
    :key="item.id"
  >
    <v-list-item-content>
      <v-card
        class="mx-auto"
        outlined
      >
        <v-card-text>
          <h4>{{baseURL}}/{{item.id}}</h4>
          <div>{{item.url}}</div>
          <div>Clicks: {{item.clicks}}</div>
        </v-card-text>
      </v-card>
    </v-list-item-content>
  </v-list-item>
</v-list>
</template>

<script>
function removeSubdomain(domain) {
  return domain.replace('admin.', '');
}

let baseURL = '';
const domain = removeSubdomain(document.domain);
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:4000';
} else {
  baseURL = `${domain}`;
}


export default {
  props: ['links'],
  data: () => ({
    baseURL,
  }),
};
</script>
