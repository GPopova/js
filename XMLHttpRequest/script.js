var form = document.forms.post,
    wrapper = document.getElementById('wrapper'),
    postContainer = document.getElementById('post'),
    userContainer = document.getElementById('author'),
    commentsContainer = document.getElementById('comments'),
    baseUrl = 'https://jsonplaceholder.typicode.com';

form.onsubmit = function (e) {
    e.preventDefault();
    sendRequestForPost(this.elements.postId.value);
};

function sendRequestForPost(id) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', baseUrl + '/posts/' + id);
    xhr.send();

    xhr.onreadystatechange = function () {
        if(xhr.readyState != 4)
            return;

        if(xhr.status == 200) {
            var post = parsePostResponse(xhr.responseText);
            postContainer.innerHTML = post.html;
            sendRequestForUser(post.userId);
            sendRequestForComments(id);
            wrapper.hidden = false;
        }
        else {
            wrapper.hidden = true;
            alert(xhr.status + " " + xhr.statusText);
        }
    };
}

function sendRequestForUser(id) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', baseUrl + '/users/' + id);
    xhr.send();

    xhr.onreadystatechange = function () {
        if(xhr.readyState != 4)
            return;

        if(xhr.status == 200) {
            userContainer.innerHTML = parseUserResponse(xhr.responseText);
        }
        else {
            wrapper.hidden = true;
            alert(xhr.status + " " + xhr.statusText);
        }
    };
}

function sendRequestForComments(postId) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', baseUrl + '/comments?postId=' + postId);
    xhr.send();

    xhr.onreadystatechange = function () {
        if(xhr.readyState != 4)
            return;

        if(xhr.status == 200) {
            commentsContainer.innerHTML =
                parseCommentsResponse(xhr.responseText);
        }
        else {
            wrapper.hidden = true;
            alert(xhr.status + " " + xhr.statusText);
        }
    };
}

function parsePostResponse(response) {
    var post = JSON.parse(response);
    return {
        userId : post.userId,
        html: "<h2>" + post.title + "</h2><p>" + post.body + "</p>"
    };
}

function parseUserResponse(response) {
    var user = JSON.parse(response);
    return user.name + ", " + user.email;
}

function parseCommentsResponse(response) {
    var comments = JSON.parse(response);
    var result = "";
    for (var i = 0; i < comments.length; i++) {
        result += "<p><address>" + comments[i].email
            + "</address><span> : " + comments[i].body
            + "</span></p>";
    }
    return result;
}
