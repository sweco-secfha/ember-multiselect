# Ember-multiselect Changelog

### 1.0.3
 * [BUGFIX] Multiple multiselects don't share the same content

### 1.0.2
 * Upgraded ember to 1.8
 * Upgraded ember-data to 1.0.0-beta.11
 * Content passed into the component is never updated
 * Dropdown now retains selection when closed by default (`clearOnClosed` added)
 * [BUGFIX] view limit applies on load (#11)
 * [FEATURE] Select all selects all records for no text filter (#12)
 * [FEATURE] text filter opens with highlighed '*' to show initial list
 * [FEATURE] Model for dropdown can now be a promise (#6)
   * Loading indicator disables dropdown box when promise is resolving (#2)

### 1.0.1
 * Changed ember-cli version to 0.1.2
 * updated styling so dropdown lies on top of parent container

###  1.0.0

 * Changed the repo to an ember-addon working with ember-cli 0.0.44
 * Added submit/cancel button into multiselect widow


### 0.2.3
 * Addon working on ember-cli 0.0.38
 * can search list
 * can select all, deselect all
