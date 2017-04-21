var IssueView = require('./issueview.js');

var issueView = new IssueView("nasa/openmct");
var container = document.getElementById("results");
issueView.renderInto(container);

