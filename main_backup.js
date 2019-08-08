var ITININERARY = [
        {
            title: "",
            description: "<img src='img/logo.png'></img>",
            hotel: "",
            path: [
                { marker: true, lat: -12.046374, lng: -77.042793, zoom: 4 }
            ]
        },
        {
            title: "Day 1: Arrive Lima, Peru",
            description: "Upon arriving in Lima this evening, a member of our staff will transfer you to your hotel, just steps away from the airport.",
            hotel: "Lima Airport Ramada",
            path: [
                { lat: -12.046374, lng: -77.042793, zoom: 16 }
            ]
        },

        {
            title: "Day 2: plane to Cusco | Explore Sacred Valley",
            description: "This morning take a short flight to Cusco and begin your journey into the Sacred Valley of the Incas. Your first stop is the indigenous, centuries-old market in Pisac, where you can sample a variety of foods and purchase colorful indigenous handicrafts. Above the market lies the largest fortress-city complex of the Incas. Your guide will lead you on a walking tour through the ruins and the hillside terraces, part of the Incas' sophisticated agricultural system. You may opt to hike to the ruins from the Pisac market. After lunch check in at your cozy Andean lodge located near the community of Urubamba.",
            hotel: "Sol y Luna Lodge & Spa",
            meals: [ "breakfast", "lunch" ],
            path: [
                { marker: true, lat: -12.046374, lng: -77.042793, zoom: 9 },
                { marker: true, lat: -13.531950, lng: -71.967463, zoom: 9, transport: 'plane' },
                { marker: true, lat: -13.531950, lng: -71.967463, zoom: 15 }
            ]
        },

        {
            title: "Day 3: Train ride to Machu Picchu",
            description: "This morning transfer to the Ollantaytambo train station for a spectacular train ride through the Urubamba river gorge on your way to Machu Picchu. Upon arrival in Aguas Calientes, you will be greeted by staff from your luxurious eco-lodge. This afternoon choose from several activities at the lodge, including a nature walk in the orchid pavilion, natural sweat lodge-sauna, bird observation, or relax on your own. An additional visit to the Machu Picchu ruins can be scheduled for this afternoon if desired. This evening enjoy dinner at the lodge.",
            hotel: "Machu Picchu Pueblo Hotel",
            meals: [ "breakfast", "lunch", "dinner" ],
            path: [
                { marker: true, lat: -13.531950, lng: -71.967463, zoom: 15 },
                { marker: true, title: 'Day 3', lat: -13.159192, lng: -72.5231831, zoom: 15, transport: 'train' }
            ]
        },

        {
            title: "Day 4: Visit Machu Picchu | Return to Cusco",
            description: "This morning take a short bus ride to the sacred ruins of Machu Picchu for a private tour. Explore the Temple of the Sun, the Royal Tomb, ceremonial fountains and baths, and the Sacred Plazas. Opt for an exhilarating one-hour hike up the steep trail to the summit of Huayna Picchu (Young Peak) for a breath-taking bird's-eye view of Machu Picchu. (Tickets must be purchased in advance.) After your visit, transfer to Aguas Calientes for lunch and board the train for Ollantaytambo. Upon arrival in Ollantaytambo, you will be met by your driver and transferred the rest of the way to Cusco. This evening enjoy dinner on your own at one of Cusco's many fine restaurants.",
            hotel: "Picoaga Hotel Cusco",
            meals: [ "breakfast", "lunch" ],
            path: [
                { marker: true, lat: -13.1632204, lng: -72.5450677, zoom: 16, transport: 'bus' },
                { lat: -13.1632204, lng: -72.5450677, zoom: 16 },
                { lat: -13.1632204, lng: -72.5450677, zoom: 16 },
                { marker: true, lat: -13.159192, lng: -72.5231831, zoom: 15, transport: 'bus' },
                { marker: true, lat: -13.531950, lng: -71.967463, zoom: 15, transport: 'train' }
            ]
        },

        {
            title: "Day 5: City Tour of Cusco",
            description: "This morning continue your exploration of the illustrious history of the Inca civilization. Travel by foot and private vehicle during a city tour that takes you down Cusco's cobbled streets and narrow passageways with brightly painted balconies overhead. Visit the historic Plaza de Armas, the Coricancha, the Inca's Sun Temple, the Incan fortress of Sacsayhuaman, and the ceremonial pools of Tambo Machay. Enjoy lunch and dinner on your own. This evening stroll around the main plaza for views of the Cathedral lit up at night.",
            hotel: "Picoaga Hotel Cusco",
            meals: [ "breakfast" ],
            path: [
                { marker: true, lat: -13.531950, lng: -71.967463, zoom: 16 }
            ]
        },

        {
            title: "Day 6: plane to Quito, Ecuador",
            description: "plane to Lima and then Quito, Ecuador. At 9,350 feet above sea level, Quito is the second highest capital city in Latin America. Despite the fact that it's only 15 miles south of the equator, Quito's elevation gives it a wonderful spring-like climate year-round. Upon arrival, you will be met by our staff and transferred to the hotel. Lunch and dinner are on your own.",
            hotel: "Mercure Hotel Quito",
            meals: [ "breakfast", "lunch" ],
            path: [
                { marker: true, lat: -13.531950, lng: -71.967463, zoom: 16 },
                { marker: true, lat: -13.531950, lng: -71.967463, zoom: 10 },
                { marker: true, lat: -0.226002, lng: -78.512936, zoom: 10, transport: 'plane' }
            ]
        },

        {
            title: "Day 7: City Tour of Quito",
            description: "Explore colonial Quito's cobbled streets, whitewashed adobe walls, and ornate balconies during a private tour. After lunch, transfer to the Middle of the World monument, zero degrees latitude, where you can straddle the equator. This evening enjoy dinner on your own.",
            hotel: "Mercure Hotel Quito",
            meals: [ "breakfast", "lunch" ],
            path: [
                { marker: true, lat: -0.226002, lng: -78.512936, zoom: 10 },
                { marker: true, lat: -0.226002, lng: -78.512936, zoom: 16 }
            ]
        },

        {
            title: "Day 8: plane to Amazon | Canoe to Wildlife Lodge",
            description: "This morning a 30-minute flight takes you to Coca, a small town located in the upper Amazon Basin. From there embark on a 2-hour motorized canoe ride along the Napo River. Look for marine birds, including herons and kingfishers, along the way. Next board traditional, dugout canoes for a majestic and peaceful 1- to 2-hour ride surrounded by trees overhead. You will be paddled along a narrow creek that connects to the lagoon where your lodge is located. Keep your eyes out for monkeys, toucans, parrot, and macaws. After arriving at the lodge and enjoying dinner, opt to look for caimans around the lake as you take in the evening sounds of the jungle.",
            hotel: "Napo Wildlife Center",
            meals: [ "breakfast", "lunch", "dinner" ],
            path: [
                    { marker: true, lat: -0.226002, lng: -78.512936, zoom: 10 },
                    { lat: -0.460556, lng: -76.988056, zoom: 10, transport: 'plane'},
                    { marker: true, lat: -0.523, lng: -76.438, zoom: 12, transport: 'paddle' },
                    { marker: true, lat: -0.523, lng: -76.438, zoom: 12 }
            ]
        },

        {
            title: "Day 9: Amazon Rainforest Excursions",
            description: "A native Anangu guide and a bilingual naturalist guide lead you during today's excursions, including visits to two parrot clay licks. Back at the lodge you may see a group of giant otters investigating near the dock; a large, black caiman crossing the lake; a capybara looking for rest near the water's edge; or blue and yellow macaws soaring overhead.",
            hotel: "Napo Wildlife Center",
            meals: [ "breakfast", "lunch", "dinner" ],
            path: [
                { marker: true, lat: -0.523, lng: -76.438, zoom: 12 }
            ]
        },

        {
            title: "Day 10: Amazon Rainforest Excursions",
            description: "After an early breakfast, climb a 120-foot canopy observation tower and emerge on top of a huge Ceiba tree. Here you cross onto a wooden platform that is built into the tree to experience the view formerly reserved only for the birds. Flocks of colorful tanagers pass through the tree canopy, Spider Monkeys search for fruit in nearby trees, and toucans call in the early mornings and afternoons. This afternoon hike into the forest interior where you may see lizards, colorful manikins, or the unique and endemic Golden mantle tamarin monkeys. Afterward, explore the lake and creeks by dugout canoe with great possibilities of running into a Giant otter family.",
            hotel: "Napo Wildlife Center",
            meals: [ "breakfast", "lunch", "dinner" ],
            path: [
                { marker: true, lat: -0.523, lng: -76.438, zoom: 12 }
            ]
        },

        {
            title: "Day 11: plane Back to Quito",
            description: "This morning board the canoes for a paddle upstream back to Coca for your flight to Quito. There is time on your own this evening for shopping and dinner.",
            hotel: "Mercure Hotel Quito",
            meals: [ "breakfast", "lunch" ],
            path: [
                    { marker: true, lat: -0.523, lng: -76.438, zoom: 12 },
                    { lat: -0.460556, lng: -76.988056, zoom: 12, transport: 'paddle'},
                    { marker: true, lat: -0.226002, lng: -78.512936, zoom: 10, transport: 'plane' },
                    { marker: true, lat: -0.226002, lng: -78.512936, zoom: 16 }
            ]
        },

        {
            title: "Day 12: plane to Galapagos | Begin Cruise",
            description: "This morning you will be met by Andean Discovery staff and transferred to the airport in time for your morning flight to San Baltra Island, Galapagos. Have lunch on board the Galapagos Legend and a welcome briefing. This afternoon wet landing on the north side of Santa Cruz at Bachas Beach; behind the beach lie two small flamingo ponds with iguanas, coastal birds, Darwin finches, mockingbirds, and gulls, as well as interesting native and endemic vegetation, red and black mangroves, salt bushes, and much more. This beach is one of the main nesting sites of sea turtles* in the Galapagos. A female can lay eggs 3 or 4 times with an average of 70 eggs each, but then spend 3 or 5 years without breeding. At this paradisiacal site we will also find the remains of barges that sank long ago, once property of the United States Navy when they operated an airbase on Baltra Island during World War II. That is why the beach is called \"Bachas\" because the word \"barges\" in English was hard to pronounce for the local people. Back on board for an ECO Moment and briefing on the next day's activities.",
            hotel: "Galapagos Legend",
            meals: [ "breakfast", "lunch", "dinner" ],
            path: [
                { marker: true, lat: -0.226002, lng: -78.512936, zoom: 10 },
                { marker: true, lat: -0.459667, lng: -90.271394, zoom: 10, transport: 'plane' },
                { lat: -0.447860, lng: -90.332680, zoom: 10, transport: 'boat' },
                { marker: true, lat: -0.493349, lng: -90.344696, zoom: 10, transport: 'boat' }
            ]
        },

        {
            title: "Day 13: Plazas Island | Santa Fe Island",
            description: "Dry landing on the northern part of the Plazas Island. The walk begins with an impressive cactus forest surrounded by land and marine iguanas; as we reach its highest point, be on the lookout for tropicbirds, a Nazca and blue-footed boobies, swallow-tailed gulls. On South Plaza Island, there is a large colony of the smaller sized land iguanas. There is a population of approximately 300 individuals. They feed on all kinds of vegetation, but during the dry season they survive on the fruits and flowers of Opuntia cacti. Due to their proximity with marine iguanas, this is the only place on Earth where we you will find the Galapagos hybrid iguana. This afternoon on Santa Fe Island, wet landing on a white sand beach surrounded by a sea lion colony; continue walking through an endemic cactus forest and search for the endemic Santa Fe land iguana, the largest in the islands and distinctively paler. This island is home to a number of endemic species including Galapagos Hawk, Galapagos Snake, a variety of finches and one of the four species of Galapagos mockingbirds. Deep-water snorkeling. Back on board for an ECO Moment and briefing on the next day's activities.",
            hotel: "Galapagos Legend",
            meals: [ "breakfast", "lunch", "dinner" ],
            path: [
                { lat: -0.340574, lng: -90.326843, zoom: 10, transport: 'boat' },
                { lat: -0.347440, lng: -90.160618, zoom: 10, transport: 'boat' },
                { marker: true, lat: -0.584308, lng: -90.160618, zoom: 10, transport: 'boat' },
                { marker: true, lat: -0.805752, lng: -90.087376, zoom: 10, transport: 'boat' }
            ]
        },

        {
            title: "Day 14: San Cristobal Island",
            description: "Morning visit to Pitt Point on the north point of San Cristobal Island. It was this very same island that Charles Darwin first visited, back in September 1835. Wet landing followed by a high intensity hike on rocky terrain. The trail includes an olivine beach of 90 meters long and a path that climbs to the top of a volcanic tuff, through several magnificent viewpoints. This is probably the only site where the three booby species of the Galapagos can be seen together, as well as two species of frigatebirds and a sea lion colony; it is also excellent for dinghy rides and snorkeling, where a good range of sea birds can be observed. Back on board for lunch. This afternoon wet landing at Cerro Brujo, an eroding tuff cone that at several locations is composed of AA lava formations, and a beautiful white sand beach, great for snorkeling and sunbathing. We visit a lagoon where migratory bird species can be seen: Black-necked Stilts, Ruddy Turnstones, Whimbrels, other sandpiper species and White-cheeked Pintails. Cerro Brujo offers beautiful views of Kicker Rock, the southern part of San Cristobal and the adjacent coast. Back on board for lunch and farewell dinner.",
            hotel: "Galapagos Legend",
            meals: [ "breakfast", "lunch", "dinner" ],
            path: [
                { lat: -0.805752, lng: -90.087376, zoom: 10, transport: 'boat' },
                { lat: -0.606983, lng: -89.695129, zoom: 10, transport: 'boat' },
                { lat: -0.606983, lng: -89.118347, zoom: 10, transport: 'boat' },
                { marker: true, lat: -0.757005, lng: -89.243317, zoom: 10, transport: 'boat' },
                { marker: true, lat: -0.830125, lng: -89.350433, zoom: 10, transport: 'boat' }
            ]
        },

        {
            title: "Day 15: San Cristobal Island | Quito",
            description: "This morning dry landing in Puerto Baquerizo Moreno. This small, attractive port is nestled along a crescent-shaped bay and is the provincial capital of the Galapagos Islands. Visit the San Cristobal giant tortoise Breeding Center to learn about the National Park's conservation programs. Enjoy beautiful landscapes on the way to the Reserve. Passengers will also have the opportunity to visit the port village, have a drink or shop for arts and crafts and other souvenirs. Transfer to the airport in San Cristobal in time for your morning flight to Quito, with connection in Guayaquil. Upon arrival in Quito, you will be met by your Andean Discovery guide and transferred to your hotel. Afternoon for last minute shopping, internet cafe, and dinner. A light lunch/snack is served on the plane. Lunch and dinner not included.",
            hotel: "Mercure Hotel Quito",
            meals: [ "breakfast" ],
            path: [
                { marker: true, lat: -0.830125, lng: -89.350433, zoom: 10, transport: 'boat' },
                { lat: -0.920752, lng: -89.350433, zoom: 10, transport: 'boat' },
                { lat: -0.920752, lng: -89.431458, zoom: 10, transport: 'boat' },
                { marker: true, lat: -0.901056, lng: -89.611402, zoom: 10, transport: 'bus' },
                { marker: true, lat: -0.901056, lng: -89.611402, zoom: 6 },
                { marker: true, lat: -0.226002, lng: -78.512936, zoom: 6, transport: 'plane' }
            ]
        },

        {
            title: "Day 16: Quito | Depart",
            description: "This morning you will be transferred to the airport in time for your international flight to the U.S.",
            meals: [ "breakfast" ],
            hotel: "",
            path: [
                { marker: true, lat: -0.226002, lng: -78.512936, zoom: 6 },
                { marker: true, lat: -0.226002, lng: -78.512936, zoom: 16 }
            ]
        }
    ];

function viewModel() {

    var self = this;
    this.itinerary = ko.observableArray(ITININERARY);
    this.play = ko.observable(false);
    this.info = ko.observable("");
    this.playInterval;

    $('.itinerary').on( 'scroll', function(){
        $(this).removeClass("highlight");
        $('.itinerary .stop').removeClass("highlight");
        $('.itinerary .stop').each(function(i){
            var t = $(this).offset().top;
            var h = $(this).height()+50;

            if(t-100>(-1*h)){
                var path = JSON.parse($(this).attr('data-path'));
                var step = Math.floor((Math.abs(t-100)/h) * path.length);
                if(step!==0){
                    self.goToLocation(path[step-1], path[step]);
                }else{
                    if(i>0){
                        var lastpath = JSON.parse($(this).prev('.stop').attr('data-path'));
                        self.goToLocation(lastpath[lastpath.length-1], path[step]);
                    }
                }

                $(this).addClass("highlight");

                return false;
            }
        });
    });

    this.togglePlay = function(){
        if(this.play()){
            clearInterval(this.playInterval);
        }else{
            this.playInterval = setInterval(function(){
                var top = $('.itinerary').scrollTop();
                $('.itinerary').scrollTop(top+1);
            },20);
        }

        this.play(!this.play());
    }

    this.goToLocation = function(last, obj){
        if(self.currentLat===obj.lat && self.currentLng===obj.lng && self.currentZoom===obj.zoom){
            return;
        }
        if(obj.lat) { self.currentLat = obj.lat; }
        if(obj.lng) { self.currentLng = obj.lng; }
        if(obj.zoom) { self.currentZoom = obj.zoom; }

        self.lastObj = last;
        self.currentObj = obj;

        self.map.flyTo({ center: [ self.currentLat, self.currentLng ], zoom: obj.zoom });
    };

    this.initialize = function() {
        mapboxgl.accessToken = 'pk.eyJ1IjoiZGFwb3dlbGwiLCJhIjoiNzUwMjg1NDhlMTljZGI3ZTM2Yjk2NjBjNWRhMjY3NDYifQ.TOYtzpe1Wu6adyNIurWtPg';

        this.map = new mapboxgl.Map({
          container: 'map-canvas', // container id
          style: 'satellite.json', //stylesheet location
          center: [ITININERARY[0].path[0].lat, ITININERARY[0].path[0].lng], // starting position
          zoom: ITININERARY[0].path[0].zoom // starting zoom
        });

        this.lastObj = ITININERARY[0].path[0];
        this.currentObj = ITININERARY[0].path[0];

        this.map.addClass('labels');

        this.map.on('style.load', function() {
            this.features = [];
            this.transport = [];
            this.lines = [];

            for(var i in ITININERARY){
                for(var j in ITININERARY[i].path){
                    var found = false;
                    for(var x in this.features){
                        if(this.features[x].geometry.coordinates === [ITININERARY[i].path[j].lat, ITININERARY[i].path[j].lng]){
                            found = true;
                            break;
                        }
                    }

                    if(!found){
                        if(ITININERARY[i].path[j].marker){
                            this.features.push({
                                "type": "Feature",
                                "geometry": {
                                  "type": "Point",
                                  "coordinates": [ITININERARY[i].path[j].lng, ITININERARY[i].path[j].lat]
                                },
                                "properties": {
                                  "title": ITININERARY[i].path[j].title ? ITININERARY[i].path[j].title : '',
                                  "marker-symbol": "marker"
                                }
                            });
                        }
                    }

                    this.lines.push([ITININERARY[i].path[j].lng, ITININERARY[i].path[j].lat]);
                }
            }

          this.map.addSource("markers", {
            "type": "geojson",
            "data": {
              "type": "FeatureCollection",
              "features": this.features
            }
          });

          this.map.addSource("transport", {
            "type": "geojson",
            "data": {
              "type": "FeatureCollection",
              "features": [{
                    "type": "Feature",
                    "geometry": {
                      "type": "Point",
                      "coordinates": [ITININERARY[0].path[0].lng, ITININERARY[0].path[0].lat]
                    },
                    "properties": {
                      "marker-symbol": ""
                    }
                }]
            }
          });

          this.map.addSource("lines", {
            "type": "geojson",
            "data": {
              "type": "Feature",
              "properties": {},
              "geometry": {
                "type": "LineString",
                "coordinates": this.lines
              }
            }
          });

          this.lineLayer = {
                "id": "lines",
                "type": "line",
                "source": "lines",
                "layout": {
                  "line-join": "round",
                  "line-cap": "round",
                },
                "paint": {
                  "line-color": "rgba(251, 175, 40, 0.8)",
                  "line-width": 3,
                  "line-blur": 2
                }
            };

          this.map.addLayer(this.lineLayer);

          this.markerLayer = {
            "id": "markers",
            "type": "symbol",
            "source": "markers",
            "layout": {
              "icon-image": "{marker-symbol}-24",
              "icon-allow-overlap": true,
              "icon-offset": [0, -8]
            }
          };

          this.map.addLayer(this.markerLayer);

          this.transportLayer = {
            "id": "transport",
            "type": "symbol",
            "source": "transport",
            "layout": {
              "icon-image": "{marker-symbol}-24",
              "icon-rotate": 0,
              "icon-allow-overlap": true,
              "icon-offset": [0, -8]
            }
          };

          this.map.addLayer(this.transportLayer);

          this.animateStart = this.lastObj;
          this.animateCurrent = $.extend({}, this.lastObj);
          this.animateStepLat = 0.0;
          this.animateStepLng = 0.0;
          this.animateEnd = this.currentObj;

          this.animateTransport = setInterval(function(){
                var data = this.map.getSource("transport")._data;
                if(this.lastObj !== this.animateStart){
                    this.animateStart = this.lastObj;
                    this.animateCurrent = $.extend({}, this.lastObj);
                    this.animateEnd = this.currentObj;

                    this.animateStepLat = (this.animateEnd.lat - this.animateStart.lat)/20;
                    this.animateStepLng = (this.animateEnd.lng - this.animateStart.lng)/20;

                    data.features[0].geometry.coordinates[0] = this.animateStart.lng;
                    data.features[0].geometry.coordinates[1] = this.animateStart.lat;
                    data.features[0].properties["marker-symbol"] = this.animateEnd.transport ? this.animateEnd.transport : '';
                }else{
                    if(this.animateStepLat || this.animateStepLng){
                        this.animateCurrent.lng = this.animateCurrent.lng + this.animateStepLng;
                        this.animateCurrent.lat = this.animateCurrent.lat + this.animateStepLat;

                        data.features[0].geometry.coordinates[0] = this.animateCurrent.lng;
                        data.features[0].geometry.coordinates[1] = this.animateCurrent.lat;


                        if(this.animateStepLat < 0 ? this.animateCurrent.lat <= this.animateEnd.lat : this.animateCurrent.lat >= this.animateEnd.lat){
                            this.animateCurrent.lat = this.animateStart.lat;
                        }
                        if(this.animateStepLng < 0 ? this.animateCurrent.lng <= this.animateEnd.lng : this.animateCurrent.lng >= this.animateEnd.lng){
                            this.animateCurrent.lng = this.animateStart.lng;
                        }
                    }
                }


                this.map.getSource("transport").setData(data);
          }.bind(this),200);

        }.bind(this));
    };

    this.angleFromCoordinate = function(lat1, long1, lat2, long2) {
        var dLon = (long2 - long1);

        var y = Math.sin(dLon) * Math.cos(lat2);
        var x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1)
                * Math.cos(lat2) * Math.cos(dLon);

        var brng = Math.atan2(y, x);

        brng = brng * (180/Math.PI);
        brng = (brng + 360) % 360;
        brng = 360 - brng;

        return brng;
    }

    this.initialize();
}

ko.applyBindings(new viewModel());