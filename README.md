itunes-parser
=============

Parse iTunes Music Library.xml into Array of objects

## Install

    npm install itunes-parser


## Usage

    var itunesParser = require('itunes-parser');
    var songs = itunesParser.parse(xml);
    
Or to include and map to different properties:
    
    var songs = itunesParser.parse(
            xml,
            {
                'Track ID': 'id',
                'Artist': 'artist',
                'Album': 'album',
                'Genre': 'genre',
                'Name': 'title',
                'Location': 'url'
            }
        );