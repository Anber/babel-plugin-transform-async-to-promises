function(foo){try{let _exit=false,_labeledInterrupt=false;return Promise.resolve(_invoke(function(){return Promise.resolve(foo()).then(function(_foo){if(_foo){_labeledInterrupt=true;return;}_exit=true;return false;});},function(_result){return _exit?_result:true;}));}catch(e){return Promise.reject(e);}}