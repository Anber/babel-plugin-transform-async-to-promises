function(foo,bar){let _exit;function _temp(baz){if(baz){_exit=1;return baz;}}return _await(_invoke(function(){if(foo){return _call(bar,_temp);}},function(_result){return _exit?_result:0;}));}