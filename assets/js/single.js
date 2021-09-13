var issueContainerEl = document.querySelector("#issues_container")


var getRepoIssues = function (repo) {
    console.log(repo);
    var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";
    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                displayIssue(data);
            });

        } else {
            alert("There was problem with your request!");
        }

    });
    getRepoIssues("facebook/react");
}
// getRepoIssues("rrayachhetri/git-it-done");
var displayIssue = function (issues) {
    if(issues.length === 0){
        issueContainerEl.textContent = "This repo has no open issues!";
        return;
    }
    for (var i = 0; i < issues.length; i++) {
        //create a  link element to take users to the issue on github
        var issueEl = document.createElement("a");
        issueEl.classList = "list-item flex-row justify-space-between align-center";
        issueEl.setAttribute("href", issues[i].html_url);
        issueEl.setAttribute("target", "_blank");

        //create span to hold issue titile
        var titleEl = document.createElement("span");
        titleEl.textContent = issues[i].title;

        //append to container
        issueEl.appendChild(titleEl);

        //create a type element
        var typeEl = document.createElement("span");

        //check if issue is an actual issue or pull request
        if (issues[i].pull_request) {
            typeEl.textContent = "(Pull request)"
        } else {
            typeEl.textContent = "(issues)";
        }
        issueEl.appendChild(typeEl);
    }
    issueContainerEl.appendChild(issueEl);
}