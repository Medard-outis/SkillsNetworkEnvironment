var xhr = new XMLHttpRequest();
var url = './health_article.json';

//GET request to the specified URL
xhr.open('GET', url, true);
/*
'GET': Specifies the HTTP method used for the request 
(in this case, a GET request).

URL: Represents the URL from where you will fetch the data.

True: Indicates if the request is asynchronous (true) or synchronous (false).
 In this case, it's set to true for asynchronous operation, allowing other 
 scripts to run while the request is processed.
 */

 // response type specification
 xhr.responseType ='json';



 xhr.onload = function(){
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');
 }

 /*
 var articles = xhr.response.articles; 
 to retrieve the articles array from the JSON response.

var articlesDiv = document.getElementById('articles'); 
to retrieve the HTML element with the ID 'articles' 
where the fetched content will be displayed.
 */