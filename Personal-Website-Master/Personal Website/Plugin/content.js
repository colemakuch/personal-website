alert("You're ready to view anonymized LinkedIn profiles! Activating the extension with randomize all names and profile pictures.")
var firstHref = $("a[href^='http']").eq(0).attr("href");

console.log(firstHref);
