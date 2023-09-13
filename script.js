//your JS code here. If required.
const container = document.getElementsByClassName("container");
console.log(container)
for(let i=1;i<=800;i++){
	const square = document.createElement("p");
	square.className = "square";
	container[0].appendChild(square);
}