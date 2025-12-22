var  OriginTitle  =  document.title;

var  titleTime;

document.addEventListener('visibilitychange', function () {

 if (document.hidden) {

 document.title  =  'Eschaton';

 clearTimeout(titleTime);

    }

 else {

 document.title  =  'Eschaton';

 titleTime  =  setTimeout(function () {

 document.title  =  OriginTitle;

}, 2000);

    }

});