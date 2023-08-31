const API_URL = `http://localhost:8080`

function fetchTasksData() {
    fetch(`${API_URL}/api/tasks`)
        .then((res) => {
            //console.log("res is ", Object.prototype.toString.call(res));
            return res.json();
        })
        .then((data) => {
            showTaskList(data)
        })
        .catch((error) => {
            console.log(`Error Fetching data : ${error}`)
            document.getElementById('posts').innerHTML = 'Error Loading Tasks Data'
        })
}


function fetchTask(taskid) {
    fetch(`${API_URL}/api/tasks/${taskid}`)
        .then((res) => {
            //console.log("res is ", Object.prototype.toString.call(res));
            return res.json();
        })
        .then((data) => {
            showTaskDetail(data)
        })
        .catch((error) => {
            console.log(`Error Fetching data : ${error}`)
            document.getElementById('posts').innerHTML = 'Error Loading Single Task Data'
        })
}

function parseTaskId() {
    try {
        var url_string = (window.location.href).toLowerCase();
        var url = new URL(url_string);
        var taskid = url.searchParams.get("taskid");
        // var geo = url.searchParams.get("geo");
        // var size = url.searchParams.get("size");
        // console.log(name+ " and "+geo+ " and "+size);
        return taskid
      } catch (err) {
        console.log("Issues with Parsing URL Parameter's - " + err);
        return "0"
      }
}
// takes a UNIX integer date, and produces a prettier human string
function dateOf(date) {
    const milliseconds = date * 1000 // 1575909015000
    const dateObject = new Date(milliseconds)
    const humanDateFormat = dateObject.toLocaleString() //2019-12-9 10:30:15
    return humanDateFormat
}

function showTaskList(data) {
    // the data parameter will be a JS array of JS objects
    // this uses a combination of "HTML building" DOM methods (the document createElements) and
    // simple string interpolation (see the 'a' tag on title)
    // both are valid ways of building the html.
    const ul = document.getElementById('posts');
    const list = document.createDocumentFragment();

    data.map(function(post) {
        console.log("Task:", post);
        let li = document.createElement('li');
        let title = document.createElement('h3');
        let body = document.createElement('p');
        let by = document.createElement('p');
        title.innerHTML = `<a href="/taskdetail.html?taskid=${post.id}">${post.name}</a>`;
        //let postedTime = dateOf(post.time)


        li.appendChild(title);
        li.appendChild(body);
        li.appendChild(by);
        list.appendChild(li);
    });

    ul.appendChild(list);
}

function showTaskDetail(post) {
    // the data parameter will be a JS array of JS objects
    // this uses a combination of "HTML building" DOM methods (the document createElements) and
    // simple string interpolation (see the 'a' tag on title)
    // both are valid ways of building the html.
    const ul = document.getElementById('post');
    const detail = document.createDocumentFragment();

    console.log("Task:", post);
    let li = document.createElement('div');
    let title = document.createElement('h2');
    let body = document.createElement('p');
    let by = document.createElement('p');
    title.innerHTML = `${post.name}`;
    body.innerHTML = `${post.category}`;
    //let postedTime = dateOf(post.time)
    by.innerHTML = `${post.type}`;

    li.appendChild(title);
    li.appendChild(body);
    li.appendChild(by);
    detail.appendChild(li);

    ul.appendChild(detail);
}

function handlePages() {
    let taskid = parseTaskId()
    console.log("taskId: ",taskid)

    if (taskid != null) {
        console.log("found a taskId")
        fetchTask(taskid)
    } else {
        console.log("load all tasks")
        fetchTasksData()
    }
}

handlePages()
