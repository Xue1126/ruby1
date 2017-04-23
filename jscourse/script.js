(function () {
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	for (var i = 0; i < names.length; i++) {
		var firstLetter = function (name) {
			return name.charAt(0).toLowerCase();  // shorter #1
		};
		if (firstLetter(names[i]) === "j") {  // shorter #2
			byeSpeaker.speak(names[i]);
		} else {
			helloSpeaker.speak(names[i]);
		}
	}
})();
