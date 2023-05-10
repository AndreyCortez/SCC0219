var task_button = document.getElementById("taskButton");

task_button.addEventListener("click", task);

var p1 = document.getElementById("p1");

function changeText()
{
    p1.innerHTML = "clicked"
}

function task()
{
    p1.innerHTML = "New Paragraph 1";

    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Item 4"));
    ul.appendChild(li);

    document.getElementById("image").src="https://via.placeholder.com/200";

    document.getElementById("p2").style.backgroundColor = "yellow";

    p1.addEventListener("click", changeText);
}
