//console.log("hi")

var inside = document.getElementsByClassName('inside');

var info = [{
	name: "Jason T",
	color: "#ffd6f3",
	color_name: "Pink",
	song: "Drunk Face (by: Machine Gun Kelly)"
}, {
	name: "Carissa K",
	color: "#ffb7c5",
	color_name: "Cherry Blossom Pink",
	song: "Tainted Love (by: Soft Cell)"
}, {
	name: "Cade Q",
	color: "#a9acb1",
	color_name: "Gray",
	song: "Butterfly (by: UMI)"
}, {
	name: "Cole S",
	color: "#000080",
	color_name: "Navy Blue",
	song: "Billionare (by: Travie McCoy ft. Bruno Mars)"
}, {
	name: "Micah S",
	color: "#a8c4ff",
	color_name: "Blue",
	song: "The Middle (by: Jimmy East World)"
}, {
	name: "Wynn I",
	color: "#14205D",
	color_name: "Blue",
	song: "Fly Me To The Moon (by: Frank Sinatra)"
}, {
	name: "Ella W",
	color: "#58595e",
	color_name: "Gray",
	song: "Canceled (by: Bryson Tiller)"
}, {
	name: "Alex P",
	color: "#ffd1dc",
	color_name: "Pink",
	song: "If Forever Falls Apart (by: Ashe and FINNEAS)"
}, {
	name: "Shea S",
	color: "#f6ca97",
	color_name: "Light Sunset Orange/Pastel Pink",
	song: "What's Next (by: Drake)"
}, {
	name: "Megan U",
	color: "#000000",
	color_name: "Black",
	song: "Keep In Touch (by: Sirup ft. Sumin)"
}, {
	name: "Josh U",
	color: "#972fd4",
	color_name: "Purple",
	song: "Ao no Waltz (by: Eve)"
}, {
	name: "Micah C",
	color: "#b57edc",
	color_name: "Legend (by: Drake)",
	song: "Purple"
}, {
	name: "Bella T",
	color: "#0e4800",
	color_name: "Any color but orange.",
	song: "Take Me to Church (by: Hozier)"
}, {
	name: "Iris S",
	color: "#CCCCFF",
	color_name: "Periwinkle",
	song: "Break from the Line (by: Joey Contreras ft. Natalie Weiss & Taylor Louderman)"
}, {
	name: "Davina L",
	color: "#b2ac88",
	color_name: "Sage Green",
	song: "Old Fashioned (by: Bruno Major)"
}, {
	name: "Jett T",
	color: "#FF9D59",
	color_name: "Orange",
	song: "Inochi no Tabekata (by: Eve)"
}, {
	name: "Kasin IS",
	color: "#4a67be",
	color_name: "Blue",
	song: "Remember Summer Days (by: Anri)"
}, {
	name: "Justin K",
	color: "#f81894",
	color_name: "Hot Pink",
	song: "Rapstar (by: Polo G)"
}, {
	name: "Michael M",
	color: "#E6003E",
	color_name: "Red",
	song: "Last Stardust (by: Aimer)"
}, {
	name: "Kemi T",
	color: "#e8bffb",
	color_name: "Any Pastel Color",
	song: "Lemonade (by: Jeremy Passion)"
}, {
	name: "Olivia M",
	color: "#A3BBE8",
	color_name: "Blue/White",
	song: "champagne problems (by: Taylor Swift)"
}, {
	name: "Mikey O",
	color: "#4c4dff",
	color_name: "Blue",
	song: "I WANNA SEE SOME A** (by: Jack Harlow ft. jetsonmade)"
}, {
	name: "Keryn Y",
	color: "#8a9dff",
	color_name: "Blue",
	song: "Village (by: Baekhyun)"
}, {
	name: "Taylor I",
	color: "#badeff",
	color_name: "Light Blue",
	song: "No Control (by: One Direction)"
}];

for(var i = 0; i < inside.length; i++){
	console.log(inside[i].firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML)
	//console.log(inside[i].parentElement.parentElement)
	//console.log(inside[i].firstChild.nextSibling.innerHTML)
	//console.log(color[i].name == inside[i].firstChild.nextSibling.innerHTML)
	if (info[i].name == inside[i].firstChild.nextSibling.innerHTML) {
		inside[i].style.backgroundColor = info[i].color
		inside[i].firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML = info[i].color_name;
		inside[i].firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML = info[i].song;
		if (info[i].color == "#000080" || info[i].color == "#000000" || info[i].color == "#0e4800" || info[i].color == "#14205D" || info[i].color == "#58595e"){
			inside[i].parentElement.parentElement.className += " white-text";
			// console.log(inside[i].parentElement.parentElement.className)
		}
	} else {
		inside[i].style.backgroundColor = '#dbe3d1'
	}
}