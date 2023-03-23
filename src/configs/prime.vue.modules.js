import InputText from 'primevue/inputtext';
import Button from "primevue/button";

import Fieldset from 'primevue/fieldset';
import Tooltip from 'primevue/tooltip';
import Dialog from 'primevue/dialog';
import ToastService from 'primevue/toastservice';
import Message from 'primevue/message';
import ProgressBar from 'primevue/progressbar';
import Textarea from 'primevue/textarea';
import Image from 'primevue/image';
import Card from 'primevue/card';
import Knob from 'primevue/knob';
import Panel from 'primevue/panel';
import Toolbar from 'primevue/toolbar';
import Sidebar from 'primevue/sidebar';
import Menu from 'primevue/menu';
import ('primevue/resources/themes/tailwind-light/theme.css')
import ('primevue/resources/primevue.min.css')
import ('primeicons/primeicons.css')
import ('primeflex/primeflex.css');
export default {
  modules: [
      InputText, Button, Fieldset, ProgressBar, Dialog,  Message, Textarea, Image, Card, Knob, Panel, Toolbar, Sidebar,
      Menu
  ],
  directives: [
        {name: "tooltip", subject: Tooltip}
    ],
  options: [
      {
          ripple: true
      }
  ],
  services: [
      {name: "toast", subject: ToastService}
  ]
}
