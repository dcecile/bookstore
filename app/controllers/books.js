import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  queryParams: ['limit'],
  limit: 5,

  total: computed('model.meta', function() {
    return this.model.meta.total;
  }),

  showAll: computed('total', 'model', function() {
    return this.total > this.model.length;
  })
});
