import Em from 'ember';

export default Em.Controller.extend({
  myList: function() {
    return [
      Em.Object.create({'name': 'me', 'showme': "Pick Me"}),
      Em.Object.create({'name': 'you', 'showme': "Pick you"})
    ];
  }.property(),
  myPromiseList: function() {
    var data = [
      Em.Object.create({'name': 'red'}),
      Em.Object.create({'name': 'green'}),
      Em.Object.create({'name': 'blue'})
    ];
    return new Em.RSVP.Promise(function(resolve) {
      Em.run.later(function() {
        resolve(data);
      }, 2000);
    });
  }.property(),
  pplComing: [],
  coloursSelected: [],
  dropdownOpen: false,
  actions: {
    selectionSaved: function(selectedRecords) {
      this.set('pplComing', selectedRecords);
      this.set('dropdownOpen', false);
    }
  }
});
