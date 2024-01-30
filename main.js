// Здійснити htpp-запис на сервіс jsonplaceholder, щоб отримати масив зі 100постів. 
// Вивести на екран їх у вигляді стилічованого списку новин

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => {
    const list = document.querySelector(".posts-list"); // Fix class name here
    json.forEach((item, index) => {
      //creating element
      const post = document.createElement("li");
      const postIndex = document.createElement("span");
      const postTitle = document.createElement("h4");
      const postText = document.createElement("p");
      const postReadMoreLink = document.createElement("a");
      //adding classes
      post.classList.add("post-list-item"); // Fix class name here
      postIndex.classList.add("post-index"); // Fix class name here
      postTitle.classList.add("post-title"); // Fix class name here
      postText.classList.add("post-text"); // Fix class name here
      postReadMoreLink.classList.add("post-link"); // Fix class name here
      //updating content
      postIndex.innerHTML = index + 1;
      postTitle.innerHTML = item.title;
      postText.innerHTML = item.body;
      postReadMoreLink.innerHTML = "Read more";
      //inserting item into the list
      post.append(postIndex, postTitle, postText, postReadMoreLink);
      list.appendChild(post);
    });
  });
