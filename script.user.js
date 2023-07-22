// ==UserScript==
// @name        GM-AmazonSanitizeUrl
// @namespace   https://github.com/pbvirus
// @description Removes unnecessary information from the URL
// @author      Prince Biswaranjan
// @homepage    https://github.com/prince-biswaranjan/GM-AmazonSanitizeUrl
// @version     1.1.0
// @grant       none
// @include     https://www.amazon.in/*/dp/*
// @run-at      document-end
// ==/UserScript==

"use strict";

(function(){
  	//Get URL
  	let url = location.href;

  	//Split URL by '?'
  	let urlParts = url.split('/');

    if(urlParts.length !== 6){
        //build url
        url = `https://${urlParts[2]}/${urlParts[3]}/dp/${urlParts[5]}`;

        //Navigate to direcet URL
        window.location = url;
    }
})();
