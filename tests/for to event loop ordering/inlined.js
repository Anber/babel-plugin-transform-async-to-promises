function(delay,callback){try{var array=[0,1,2,3,4];const _temp2=_forTo(array,function(i){const _temp=function(){if(delay){return Promise.resolve(array[i]).then(function(){});}}();if(_temp&&_temp.then)return _temp.then(function(){});});return Promise.resolve(_temp2&&_temp2.then?_temp2.then(function(){return callback();}):callback());}catch(e){return Promise.reject(e);}}