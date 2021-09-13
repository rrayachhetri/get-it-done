var getRepoIssues = function (repo) {
    console.log(repo);
    var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";
    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                displayRepos(data);
            });

        } else {
            alert("There was problem with your request!");
        }

    });

}
// getRepoIssues("rrayachhetri/git-it-done");
 var displayIssue = function(issues){
     for (var i = 0; i < issues.length; i++){
         //create a  link element to take users to the issue on github
         var issueEl = document.createElement("a");
         issueEl.classList = "list-item flex-row justify-space-between align-center";
         issueEl.setAttribute("href", issues[i].html_url);
         issueEl.setAttribute("target", "_blank");
     }
 }