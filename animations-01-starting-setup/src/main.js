import { createApp } from 'vue';

import router from './router';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';

const app = createApp(App);

app.component('base-modal', BaseModal);
app.use(router);

// this helps enabling creating the app when the first navigation is complete
router.isReady().then(() => app.mount('#app'));
