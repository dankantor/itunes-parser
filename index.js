module.exports.parse = function(xml, map) {
    if(_.isString(xml) === true){
        var parser = new DOMParser();
        xml = parser.parseFromString(xml,"text/xml");
    }
    var songs = [];
    var root = xml.getElementsByTagName('plist')[0];
    var dicts = root.getElementsByTagName('dict');
    var tracksDict = dicts[1];
    var trackDicts = tracksDict.getElementsByTagName('dict');
    _.each(
        trackDicts, 
        function(dict){
            var keys = dict.getElementsByTagName('key');
            var song = {};
            _.each(
                keys,
                function(key){
                    var innerHTML = key.innerHTML;
                    var nextSiblingInnerHTML = key.nextSibling.innerHTML;
                    if(map){
                        if(map[innerHTML]){
                            song[map[innerHTML]] = nextSiblingInnerHTML;
                        }
                    }
                    else{
                        song[innerHTML] = nextSiblingInnerHTML;
                    }
                }
            );
            songs.push(song);
        }
    );
    return songs;
}