function Songbook(song, band) {
  this.song = song;
  this.band = band;
  // this.members = [];

}

Songbook.prototype.nowPlay = function() {
  return this.band + " " + this.song;
}


$(document).ready(function()  {
  $("form#new-song").submit(function(event) {
      event.preventDefault();

  var inputSong = $("input#new-song-name").val();
  var inputBand = $("input#new-band-name").val();

  var newNowPlay = new Songbook(inputSong, inputBand);
    $("ul#show-song").append("<li>" + newNowPlay.nowPlay() + "</li>");
    $("#show-song").show();
    $("#show-song h2").text(newNowPlay.nowPlay());
    $(".song-name").text(newNowPlay.song);
    $(".band-name").text(newNowPlay.band);

  });
});
