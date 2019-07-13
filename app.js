function countDown() {
  // The variable now holds the current date
  var now = new Date().getTime();
  var eventDate = new Date("Sept 11, 2019 00:00:00").getTime();

  var diffDate = eventDate - now;

  s = Math.floor(diffDate / 1000) % 60;
  m = Math.floor(diffDate / 60000) % 60;
  h = Math.floor(diffDate / (60000 * 60)) % 24;
  d = Math.floor(diffDate / (60000 * 60 * 24));

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  //This is for adding the values to the HTML
  //This calculates for the next saturday at 00:00 hours
  document.getElementById("days").innerText = d;
  document.getElementById("hours").innerText = h;
  document.getElementById("minutes").innerText = m;
  document.getElementById("seconds").innerText = s;
  //This function calls the set timeout function every second
  setTimeout(countDown, 1000);
}

countDown();
