var IssueView =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

//IssueView
function IssueView(repoPath){
    this.repoToGetIssues = "https://api.github.com/repos/" + repoPath + "/issues?state=open";
}

//Initial rendering of issue list
IssueView.prototype.renderInto = function (container) {

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    var ul = document.createElement('ul');
    ul.style.listStyle = "none";
    container.appendChild(ul);

    var xmlhttp = new XMLHttpRequest();
    var lbl;
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                var allIssues = JSON.parse(xmlhttp.responseText);

                for (var issue in allIssues) {
                    var li = document.createElement('li');
                    li.style.marginBottom = "10px";
                    ul.appendChild(li);
                    lbl = allIssues[issue].labels.length > 0 ? allIssues[issue].labels[0].name : '';
                    li.innerHTML +=  lbl + "  " + allIssues[issue].number + " - " + allIssues[issue].title;
                }
            }
            else if (xmlhttp.status == 400) {
                alert('There was an error: Please check the repository path, Example of valid path: jquery/jquery');
            }
            else {
                alert('There was an error: Please check the repository path, Example of valid path: jquery/jquery');
            }
        }
    };

    xmlhttp.open("GET", this.repoToGetIssues, true);
    xmlhttp.send();
};

//Destroy Instance
IssueView.prototype.destroy= function (){
    var self = this;
    self = undefined;
};
module.exports = exports = IssueView;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var IssueView = __webpack_require__(0);

function IssueView(repoToGetIssues){
    var issueView = new IssueView(repoToGetIssues);
}

module.exports = {
    renderInto: function (container) {
        issueView.renderInto(container);
    }
};

module.exports = exports = IssueView;



/***/ })
/******/ ]);