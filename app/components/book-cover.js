import Component from '@ember/component';

export default Component.extend({
  actions: {
    async open() {
      await this.get('book').reload();
      this.set('isShowingModal', true);
      this.get('blurBackground')(true);
    },

    close() {
      this.set('isShowingModal', false);
      this.get('blurBackground')(false);
    }
  }
});
