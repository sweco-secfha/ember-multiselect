#Ember CLI Multiselect[![Build Status](https://travis-ci.org/gevious/ember-multiselect.svg)](https://travis-ci.org/gevious/ember-multiselect)

## Description
This multiselect widget is a button that when clicked opens into a list. The 
list can be filtered by a text search. Select/unselect all buttons are also
available.

## Installation
    npm install ember-cli-multiselect --save-dev
    ember g ember-cli-multiselect

## Basic Usage

    {{multi-select content=myList name="Invitees" selected=pplComing
                   displayName="showme" isOpen=dropdownOpen
                   submit="selectionSaved" submitText="Save Selections"}}

## Demo
Check out the demo on [github pages](http://gevious.github.io/ember-multiselect/ "Ember-multiselect Demo").
Alternatively you can clone this repo and run the app

    sudo npm install -g ember-cli
    git clone git@github.com:gevious/ember-multiselect
    cd ember-multiselect
    npm install; bower install
    ember serve

## Options
When calling the the multiselect, the following options are available:

### General Options

#### isOpen
Type: `Boolean`

This variable can be set to open/close the multiselect window, but will also
contain the state of the window when reading it.

#### viewLimit
Type: `Number`
Default: `20`

This is the number of list items to display.


#### searchText
Type: `String`
Default: `""`

This is the variable holding the search query the user inputted. Generally it
won't be set programatically.

#### submitOnClose
Type: `Boolean`
Default: `false`

If true, the component will submit the selected list when the window is closed.
_Note:_ All selections are lost when the window closes.
