import Em from 'ember';

export default Em.Helper.helper(function(params) {
	var obj = params[0];
	var field = params[1];
  return obj.get(field);
});
