//IssueView
function IssueView(repoPath){
    this.repoToGetIssues = "https://api.github.com/repos/" + repoPath + "/issues";
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
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                var allIssues = JSON.parse(xmlhttp.responseText);

                for (var issue in allIssues) {
                    var li = document.createElement('li');
                    li.style.marginBottom = "10px";
                    ul.appendChild(li);
                    li.innerHTML = li.innerHTML + allIssues[issue].labels[0].name + ": " + allIssues[issue].number + " - " + allIssues[issue].title;
                }
            }
            else if (xmlhttp.status == 400) {
                alert('There was an error: 400');
            }
            else {
                alert('General failure');
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