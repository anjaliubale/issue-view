var IssueView = require('./issueview.js');

function IssueView(repoToGetIssues){
    var issueView = new IssueView(repoToGetIssues);
}

module.exports = {
    renderInto: function (container) {
        issueView.renderInto(container);
    }
};

module.exports = exports = IssueView;



