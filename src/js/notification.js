import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { notice, success, error } from '@pnotify/core';

export default {
showNotice() {
  notice({
    title:
      'Nothing, try again!',
    delay: 1000,
  });
},

showSuccess() {
  success({
    title: 'Success!',
    delay: 1000,
  });
},

showError(err) {
  error({
    title: `${err}`,
    delay: 1000,
  });
}
}
