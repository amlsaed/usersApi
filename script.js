function loadXMLDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var users = JSON.parse(this.responseText)
        console.log(users);
        for(user of users){
            document.getElementById("usersList").innerHTML += `<li id='list_${user.id}'>
                                                                    <a href='#' id='user_${user.id}' onclick='load_userXMLDoc(${user.id})'>
                                                                        <span>${user.name}</span>
                                                                        <span>${user.email}</span>
                                                                    </a>
                                                                </li>`
        }
        
        
      }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhttp.send();
  }
  function load_userXMLDoc(id) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var posts = JSON.parse(this.responseText)
        console.log(posts);
        document.getElementById("userPosts").innerHTML=""
        for(post of posts){
            document.getElementById("userPosts").innerHTML += `<li id='post_${post.id}'>
            <h2>${post.title}</h2>
            <p href='#' >
                <span>${post.body}</span>
            </p>
        </li>`

        }
            
        
        
      }
    };
    xhttp.open("GET", `https://jsonplaceholder.typicode.com/posts?userId=${id}`, true);
    xhttp.send();
  }
  loadXMLDoc();
  load_userXMLDoc(1)