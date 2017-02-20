import Ember from 'ember';

export default Ember.Component.extend({
  // Since we want the image to be smaller at first, 
  // we will set the property to start as false
  isWide: false, 
  actions: {
    toggleImageSize() {
      // toggle the isWide property
      this.toggleProperty('isWide');
    }
  }
});
