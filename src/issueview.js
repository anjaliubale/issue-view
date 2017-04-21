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
                    li.innerHTML +=  lbl + " " + allIssues[issue].number + " - " + allIssues[issue].title;
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