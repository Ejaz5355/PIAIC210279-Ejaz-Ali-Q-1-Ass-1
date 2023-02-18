function album(artist, title, num) {
    var aobj = {};
    aobj['name'] = artist,
        aobj["album"] = title,
        aobj['number of track'] = num;
    console.log(aobj);
}
album("Artist Name", "title", 2);
album("Artist Name2", "title");
album("Artist Name3", "title");
