/* global moment */
import Em from "ember";
import startApp from '../helpers/start-app';
import { test, moduleForComponent } from 'ember-qunit';

var App, component;

moduleForComponent('multi-select', 'ember-cli-multiselectcomponent', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Em.run(App, 'destroy');
    // clear up component (this should be done by ember-qunit soon!)
    if (component) {
      Em.run(component, 'destroy');
      component = null;
    }
  }
});

test('it loads data directly', function() {
  expect(2);
  var data = [{name: 'hi'}, {name: 'there'}];
  component = this.subject({
    content: data
  });
  equal(component.get('_content'), data);
  equal(component.get('filteredRecords'), data);
});

test('it loads data directly but limits first view', function() {
  expect(3);
  var data = [{name: 'hi'}, {name: 'there'}], component = null;
  component = this.subject({
    content: data,
    viewLimit: 1
  });
  equal(component.get('_content'), data);
  equal(component.get('filteredRecords').get('length'), 1, "Limited records");
  equal(component.get('filteredRecords')[0].name, 'hi', "has first record");
});

// need some help on this
//test('it loads data as a promise', function() {
//  expect(1);
//  var data = [{name: 'hi'}, {name: 'there'}],
//      p = new Em.RSVP.Promise(function(resolve) {
//        Em.run.later(function() {
//          resolve(data);
//        }, 1000);
//      });
//  component = this.subject({
//    content: p
//  });
//  Em.run(function() {
//    p.then(function(r) {
//      debugger;
//    });
//  });
//});
