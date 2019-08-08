var ITINERARY = [
        {
            day: 1,
            title: "Day 1: Arrive Lima, Peru",
            description: "Upon arriving in Lima, a member of our staff will transfer you to your hotel.<br /><br />Please see our suggested dinning for some suggested restaurant locations.<br /><br />Enjoy your overnight stay at the JW Marriott Hotel Lima",
            hotel: { name: "JW Marriott Hotel Lima", lat: -12.1316342, lng: -77.0293656 },
            food: [
                { name: "La Rosa Nautica", lat: -12.1299874, lng: -77.036275 },
                { name: "Larcomar", lat: -12.1315052, lng: -77.0332029 },
                { name: "Tanta", lat: -12.1301649, lng: -77.0293728 }
            ],
            path: [
                { marker: 'marker', lat: -12.046374, lng: -77.042793, zoom: 4 },
                { lat: -12.046374, lng: -77.042793, zoom: 11.5 },
                { lat: -12.046374, lng: -77.042793, zoom: 11.5 }
            ]
        },

        {
            day: 2,
            title: "Day 2: plane to Cusco | Explore Sacred Valley",
            description: "This morning take a short flight to Cusco and begin your journey into the Sacred Valley of the Incas. Your first stop is the indigenous, centuries-old market in Pisac, where you can sample a variety of foods and purchase colorful indigenous handicrafts. Above the market lies the largest fortress-city complex of the Incas. Your guide will lead you on a walking tour through the ruins and the hillside terraces, part of the Incas' sophisticated agricultural system. You may opt to hike to the ruins from the Pisac market. After lunch check in at your cozy lodge located near the community of Urubamba.",
            hotel: { name: "Sol y Luna Lodge & Spa", lat: -13.29653, lng:-72.1316487 },
            meals: [ "breakfast", "lunch" ],
            food: [
                { name: "Hacienda Puka Punku Restaurante", lat: -13.2999373, lng:-72.1364417 },
                { name: "Inka`s House Restaurant", lat: -13.3023597, lng: -72.131249 }
            ],
            path: [
                { marker: 'marker', lat: -12.046374, lng: -77.042793, zoom: 9 },
                { marker: 'marker', lat: -13.531950, lng: -71.967463, zoom: 9, curve: [0, -0.5], line: 'plane', transport: 'plane' },
                { marker: 'marker', lat: -13.531950, lng: -71.967463, zoom: 15 }
            ]
        },

        {
            day: 3,
            title: "Day 3: Train ride to Machu Picchu",
            description: "This morning transfer to the Ollantaytambo train station for a spectacular train ride through the Urubamba river gorge on your way to Machu Picchu. Upon arrival in Aguas Calientes, you will be greeted by staff from your luxurious eco-lodge. This afternoon choose from several activities at the lodge, including a nature walk in the orchid pavilion, natural sweat lodge-sauna, bird observation, or relax on your own. An additional visit to the Machu Picchu ruins can be scheduled for this afternoon if desired. This evening enjoy dinner at the lodge.",
            hotel: { name: "Machu Picchu Pueblo Hotel", lat: -13.1410824, lng: -72.5428706 },
            meals: [ "breakfast", "lunch", "dinner" ],
            path: [
                { marker: 'marker', lat: -13.531950, lng: -71.967463, zoom: 15 },
                { marker: 'marker', lat: -13.159192, lng: -72.5231831, zoom: 15, line: 'train', transport: 'train-left' }
            ]
        },

        {
            day: 4,
            title: "Day 4: Visit Machu Picchu | Return to Cusco",
            description: "This morning take a short bus ride to the sacred ruins of Machu Picchu for a private tour. Explore the Temple of the Sun, the Royal Tomb, ceremonial fountains and baths, and the Sacred Plazas. Opt for an exhilarating one-hour hike up the steep trail to the summit of Huayna Picchu (Young Peak) for a breath-taking bird's-eye view of Machu Picchu. (Tickets must be purchased in advance.) After your visit, transfer to Aguas Calientes for lunch and board the train for Ollantaytambo. Upon arrival in Ollantaytambo, you will be met by your driver and transferred the rest of the way to Cusco. This evening enjoy dinner on your own at one of Cusco's many fine restaurants.",
            hotel: { name: "Picoaga Hotel Cusco", lat: -13.516208, lng: -71.9830466 },
            meals: [ "breakfast", "lunch" ],
            food: [
                { name: "Restaurant Divina Comedia", lat: -13.5164062, lng:-71.9815445 },
                { name: "Restaurant la Retama", lat: -13.5186699, lng:-71.9789482 },
                { name: "Inka Grill", lat: -13.516208, lng: -71.9830466}
            ],
            path: [
                { marker: 'marker', lat: -13.1632204, lng: -72.5450677, zoom: 16 },
                { lat: -13.1632204, lng: -72.5450677, zoom: 16 },
                { lat: -13.1632204, lng: -72.5450677, zoom: 16 },
                { marker: 'marker', lat: -13.159192, lng: -72.5231831, zoom: 15, line: 'bus', transport: 'bus-left' },
                { lat: -13.531950, lng: -71.967463, zoom: 15 }
            ]
        },

        {
            day: 5,
            title: "Day 5: City Tour of Cusco",
            description: "This morning continue your exploration of the illustrious history of the Inca civilization. Travel by foot and private vehicle during a city tour that takes you down Cusco's cobbled streets and narrow passageways with brightly painted balconies overhead. Visit the historic Plaza de Armas, the Coricancha, the Inca's Sun Temple, the Incan fortress of Sacsayhuaman, and the ceremonial pools of Tambo Machay. Enjoy lunch and dinner on your own. This evening stroll around the main plaza for views of the Cathedral lit up at night.",
            hotel: { name: "Picoaga Hotel Cusco", lat: -13.516208, lng: -71.9830466 },
            meals: [ "breakfast" ],
            food: [
                { name: "Restaurant Divina Comedia", lat: -13.5164062, lng:-71.9815445 },
                { name: "Restaurant la Retama", lat: -13.5186699, lng:-71.9789482 },
                { name: "Inka Grill", lat: -13.516208, lng: -71.9830466}
            ],
            path: [
                { marker: 'marker', lat: -13.531950, lng: -71.967463, zoom: 16 }
            ]
        },

        {
            day: 6,
            title: "Day 6: plane to Quito, Ecuador",
            description: "plane to Lima and then Quito, Ecuador. At 9,350 feet above sea level, Quito is the second highest capital city in Latin America. Despite the fact that it's only 15 miles south of the equator, Quito's elevation gives it a wonderful spring-like climate year-round. Upon arrival, you will be met by our staff and transferred to the hotel. Lunch and dinner are on your own.",
            hotel: { name: "Mercure Hotel Quito", lat: -0.204818, lng: -78.4972937 },
            meals: [ "breakfast", "lunch" ],
            food: [
                { name: "Restaurant La Pepa", lat: -0.2054832, lng:-78.4939034 },
                { name: "Manantial", lat: -0.2045938, lng: -78.4961904},
                { name: "Theatrum", lat: -0.2258108, lng:-78.5212992}
            ],
            path: [
                { marker: 'marker', lat: -13.531950, lng: -71.967463, zoom: 16 },
                { marker: 'marker', lat: -13.531950, lng: -71.967463, zoom: 10 },
                { marker: 'marker', lat: -0.226002, lng: -78.512936, zoom: 10, curve: [1, 0], line: 'plane', transport: 'plane-up' }
            ]
        },

        {
            day: 7,
            title: "Day 7: City Tour of Quito",
            description: "Explore colonial Quito's cobbled streets, whitewashed adobe walls, and ornate balconies during a private tour. After lunch, transfer to the Middle of the World monument, zero degrees latitude, where you can straddle the equator. This evening enjoy dinner on your own.",
            hotel: { name: "Mercure Hotel Quito", lat: -0.204818, lng: -78.4972937 },
            meals: [ "breakfast", "lunch" ],
            food: [
                { name: "Restaurant La Pepa", lat: -0.2054832, lng:-78.4939034 },
                { name: "Manantial", lat: -0.2045938, lng: -78.4961904},
                { name: "Theatrum", lat: -0.2258108, lng:-78.5212992}
            ],
            path: [
                { marker: 'marker', lat: -0.226002, lng: -78.512936, zoom: 10 },
                { marker: 'marker', lat: -0.226002, lng: -78.512936, zoom: 16 }
            ]
        },

        {
            day: 8,
            title: "Day 8: plane to Amazon | Canoe to Wildlife Lodge",
            description: "This morning a 30-minute flight takes you to Coca, a small town located in the upper Amazon Basin. From there embark on a 2-hour motorized canoe ride along the Napo River. Look for marine birds, including herons and kingfishers, along the way. Next board traditional, dugout canoes for a majestic and peaceful 1- to 2-hour ride surrounded by trees overhead. You will be paddled along a narrow creek that connects to the lagoon where your lodge is located. Keep your eyes out for monkeys, toucans, parrot, and macaws. After arriving at the lodge and enjoying dinner, opt to look for caimans around the lake as you take in the evening sounds of the jungle.",
            hotel: { name: "Napo Wildlife Center" },
            meals: [ "breakfast", "lunch", "dinner" ],
            path: [
                    { marker: 'marker', lat: -0.226002, lng: -78.512936, zoom: 10 },
                    { lat: -0.460556, lng: -76.988056, zoom: 10, curve: [0, 0.1], line: 'plane', transport: 'plane'},
                    { marker: 'marker', lat: -0.523, lng: -76.438, zoom: 12, line: 'paddle', transport: 'paddle' },
                    { marker: 'marker', lat: -0.523, lng: -76.438, zoom: 12 }
            ]
        },

        {
            day: 9,
            title: "Day 9: Amazon Rainforest Excursions",
            description: "A native Anangu guide and a bilingual naturalist guide lead you during today's excursions, including visits to two parrot clay licks. Back at the lodge you may see a group of giant otters investigating near the dock; a large, black caiman crossing the lake; a capybara looking for rest near the water's edge; or blue and yellow macaws soaring overhead.",
            hotel: { name: "Napo Wildlife Center" },
            meals: [ "breakfast", "lunch", "dinner" ],
            path: [
                { marker: 'marker', lat: -0.523, lng: -76.438, zoom: 12 }
            ]
        },

        {
            day: 10,
            title: "Day 10: Amazon Rainforest Excursions",
            description: "After an early breakfast, climb a 120-foot canopy observation tower and emerge on top of a huge Ceiba tree. Here you cross onto a wooden platform that is built into the tree to experience the view formerly reserved only for the birds. Flocks of colorful tanagers pass through the tree canopy, Spider Monkeys search for fruit in nearby trees, and toucans call in the early mornings and afternoons. This afternoon hike into the forest interior where you may see lizards, colorful manikins, or the unique and endemic Golden mantle tamarin monkeys. Afterward, explore the lake and creeks by dugout canoe with great possibilities of running into a Giant otter family.",
            hotel: { name: "Napo Wildlife Center" },
            meals: [ "breakfast", "lunch", "dinner" ],
            path: [
                { marker: 'marker', lat: -0.523, lng: -76.438, zoom: 12 }
            ]
        },

        {
            day: 11,
            title: "Day 11: plane Back to Quito",
            description: "This morning board the canoes for a paddle upstream back to Coca for your flight to Quito. There is time on your own this evening for shopping and dinner.",
            hotel: { name: "Mercure Hotel Quito", lat: -0.204818, lng: -78.4972937 },
            meals: [ "breakfast", "lunch" ],
            food: [
                { name: "Restaurant La Pepa", lat: -0.2054832, lng:-78.4939034 },
                { name: "Manantial", lat: -0.2045938, lng: -78.4961904},
                { name: "Theatrum", lat: -0.2258108, lng:-78.5212992}
            ],
            path: [
                    { marker: 'marker', lat: -0.523, lng: -76.438, zoom: 12 },
                    { lat: -0.460556, lng: -76.988056, zoom: 12 },
                    { marker: 'marker', lat: -0.226002, lng: -78.512936, zoom: 10, curve: [0, 0.1] },
                    { marker: 'marker', lat: -0.226002, lng: -78.512936, zoom: 16 }
            ]
        },

        {
            day: 12,
            title: "Day 12: plane to Galapagos | Begin Cruise",
            description: "This morning you will be met by a staff member and transferred to the airport in time for your morning flight to San Baltra Island, Galapagos. Have lunch on board the Galapagos Legend and a welcome briefing. This afternoon wet landing on the north side of Santa Cruz at Bachas Beach; behind the beach lie two small flamingo ponds with iguanas, coastal birds, Darwin finches, mockingbirds, and gulls, as well as interesting native and endemic vegetation, red and black mangroves, salt bushes, and much more. This beach is one of the main nesting sites of sea turtles* in the Galapagos. A female can lay eggs 3 or 4 times with an average of 70 eggs each, but then spend 3 or 5 years without breeding. At this paradisiacal site we will also find the remains of barges that sank long ago, once property of the United States Navy when they operated an airbase on Baltra Island during World War II. That is why the beach is called \"Bachas\" because the word \"barges\" in English was hard to pronounce for the local people. Back on board for an ECO Moment and briefing on the next day's activities.",
            hotel: { name: "Galapagos Legend" },
            meals: [ "breakfast", "lunch", "dinner" ],
            path: [
                { marker: 'marker', lat: -0.226002, lng: -78.512936, zoom: 10 },
                { marker: 'marker', lat: -0.459667, lng: -90.271394, zoom: 10, curve: [0, 0.5], line: 'plane', transport: 'plane-left' },
                { marker: 'marker', lat: -0.493349, lng: -90.344696, zoom: 10 , curve: [0, 0.05], line: 'boat', transport: 'boat'}
            ]
        },

        {
            day: 13,
            title: "Day 13: Plazas Island | Santa Fe Island",
            description: "Dry landing on the northern part of the Plazas Island. The walk begins with an impressive cactus forest surrounded by land and marine iguanas; as we reach its highest point, be on the lookout for tropicbirds, a Nazca and blue-footed boobies, swallow-tailed gulls. On South Plaza Island, there is a large colony of the smaller sized land iguanas. There is a population of approximately 300 individuals. They feed on all kinds of vegetation, but during the dry season they survive on the fruits and flowers of Opuntia cacti. Due to their proximity with marine iguanas, this is the only place on Earth where we you will find the Galapagos hybrid iguana. This afternoon on Santa Fe Island, wet landing on a white sand beach surrounded by a sea lion colony; continue walking through an endemic cactus forest and search for the endemic Santa Fe land iguana, the largest in the islands and distinctively paler. This island is home to a number of endemic species including Galapagos Hawk, Galapagos Snake, a variety of finches and one of the four species of Galapagos mockingbirds. Deep-water snorkeling. Back on board for an ECO Moment and briefing on the next day's activities.",
            hotel: { name: "Galapagos Legend" },
            meals: [ "breakfast", "lunch", "dinner" ],
            path: [
                { lat: -0.493349, lng: -90.344696, zoom: 10 },
                { marker: 'marker', lat: -0.584308, lng: -90.160618, zoom: 10, curve: [0, 0.25], line: 'boat', transport: 'boat' },
                { marker: 'marker', lat: -0.805752, lng: -90.087376, zoom: 10, curve: [0, -0.05], line: 'boat', transport: 'boat' }
            ]
        },

        {
            day: 14,
            title: "Day 14: San Cristobal Island",
            description: "Morning visit to Pitt Point on the north point of San Cristobal Island. It was this very same island that Charles Darwin first visited, back in September 1835. Wet landing followed by a high intensity hike on rocky terrain. The trail includes an olivine beach of 90 meters long and a path that climbs to the top of a volcanic tuff, through several magnificent viewpoints. This is probably the only site where the three booby species of the Galapagos can be seen together, as well as two species of frigatebirds and a sea lion colony; it is also excellent for dinghy rides and snorkeling, where a good range of sea birds can be observed. Back on board for lunch. This afternoon wet landing at Cerro Brujo, an eroding tuff cone that at several locations is composed of AA lava formations, and a beautiful white sand beach, great for snorkeling and sunbathing. We visit a lagoon where migratory bird species can be seen: Black-necked Stilts, Ruddy Turnstones, Whimbrels, other sandpiper species and White-cheeked Pintails. Cerro Brujo offers beautiful views of Kicker Rock, the southern part of San Cristobal and the adjacent coast. Back on board for lunch and farewell dinner.",
            hotel: { name: "Galapagos Legend" },
            meals: [ "breakfast", "lunch", "dinner" ],
            path: [
                { lat: -0.805752, lng: -90.087376, zoom: 10 },
                { lat: -0.606983, lng: -89.118347, zoom: 10, curve: [0, 0.1], line: 'boat', transport: 'boat' },
                { marker: 'marker', lat: -0.757005, lng: -89.243317, zoom: 10, curve: [0.3, 0], line: 'boat', transport: 'boat' },
                { marker: 'marker', lat: -0.830125, lng: -89.350433, zoom: 10, curve: [0, -0.05], line: 'boat', transport: 'boat' }
            ]
        },

        {
            day: 15,
            title: "Day 15: San Cristobal Island | Quito",
            description: "This morning dry landing in Puerto Baquerizo Moreno. This small, attractive port is nestled along a crescent-shaped bay and is the provincial capital of the Galapagos Islands. Visit the San Cristobal giant tortoise Breeding Center to learn about the National Park's conservation programs. Enjoy beautiful landscapes on the way to the Reserve. Passengers will also have the opportunity to visit the port village, have a drink or shop for arts and crafts and other souvenirs. Transfer to the airport in San Cristobal in time for your morning flight to Quito, with connection in Guayaquil. Upon arrival in Quito, you will be met by your guide and transferred to your hotel. Afternoon for last minute shopping, internet cafe, and dinner. A light lunch/snack is served on the plane. Lunch and dinner not included.",
            hotel: { name: "Mercure Hotel Quito", lat: -0.204818, lng: -78.4972937 },
            meals: [ "breakfast" ],
            food: [
                { name: "Restaurant La Pepa", lat: -0.2054832, lng:-78.4939034 },
                { name: "Manantial", lat: -0.2045938, lng: -78.4961904},
                { name: "Theatrum", lat: -0.2258108, lng:-78.5212992}
            ],
            path: [
                { marker: 'marker', lat: -0.830125, lng: -89.350433, zoom: 10 },
                { lat: -0.920752, lng: -89.350433, zoom: 10, curve: [0.05, 0], line: 'boat', transport: 'boat' },
                { lat: -0.920752, lng: -89.431458, zoom: 10, curve: [0, -0.05], line: 'boat', transport: 'boat' },
                { marker: 'marker', lat: -0.901056, lng: -89.611402, zoom: 10, line: 'bus', transport: 'bus' },
                { marker: 'marker', lat: -0.901056, lng: -89.611402, zoom: 6 },
                { marker: 'marker', lat: -0.226002, lng: -78.512936, zoom: 6, curve: [0, -0.5], line: 'plane', transport: 'plane' }
            ]
        },

        {
            day: 16,
            title: "Day 16: Quito | Depart",
            description: "This morning you will be transferred to the airport in time for your international flight to the U.S.",
            meals: [ "breakfast" ],
            food: [
                { name: "Restaurant La Pepa", lat: -0.2054832, lng:-78.4939034 },
                { name: "Manantial", lat: -0.2045938, lng: -78.4961904},
                { name: "Theatrum", lat: -0.2258108, lng:-78.5212992}
            ],
            hotel: null,
            path: [
                { marker: 'marker', lat: -0.226002, lng: -78.512936, zoom: 6 },
                { marker: 'marker', lat: -0.226002, lng: -78.512936, zoom: 16 }
            ]
        }
    ];

var ZOOM_LEVELS = [
    {"id":"icons-marker", "zoom":1},
    {"id":"icons-hotel", "zoom":7},
    {"id":"icons-attraction", "zoom":7},
    {"id":"icons-food", "zoom":7},
    {"id":"icons-plane", "zoom":1},
    {"id":"icons-train", "zoom":7},
    {"id":"icons-boat", "zoom":7},
    {"id":"icons-paddle", "zoom":10},
    {"id":"icons-bus", "zoom":10},
    {"id":"icons-car", "zoom":10},
    {"id":"icons-bike", "zoom":12},
    {"id":"icons-walk", "zoom":12}
];

var PAGE_ZOOM_LEVELS = [];

function viewModel() {

    var self = this;
    this.itinerary = ko.observableArray(ITINERARY);
    this.play = ko.observable(false);
    this.info = ko.observable("");
    this.playInterval;

    this.title = ko.observable("");
    this.hotel = ko.observable(null);
    this.food = ko.observableArray([]);
    this.included = ko.observable("");

    $('.itinerary .stops').on( 'scroll', function(){
        $('.itinerary .stop').each(function(i){
            var t = $(this).offset().top;
            var h = $(this).height()+50;

            if(t-120>(-1*h)){
                var path = JSON.parse($(this).attr('data-path'));
                var step = Math.floor((Math.abs(t-120)/h) * path.length);
                self.goToLocation(path[step]);

                if($(this).attr('data-title') !== self.title()){
                    $(".highlight").removeClass("highlight");
                    $(".info").removeClass("show");

                    $(this).addClass("highlight");

                    var title = $(this).attr('data-title');
                    var hotel = $(this).attr('data-hotel');
                    var food = $(this).attr('data-food');
                    var meals = $(this).children('.included').text();

                    setTimeout(function(){
                        self.title(title);
                        self.hotel(hotel ? JSON.parse(hotel) : null);
                        self.food(food ? JSON.parse(food) : []);
                        self.included(meals);

                        $('.info').addClass('show');
                    },1000);
                }

                return false;
            }
        });
    });

    this.stopPlay = function(){
        clearInterval(this.playInterval);
        this.play(false);
    };

    this.togglePlay = function(){
        if(this.play()){
            clearInterval(this.playInterval);
        }else{
            this.playInterval = setInterval(function(){
                var top = $('.itinerary .stops').scrollTop();
                $('.itinerary .stops').scrollTop(top+1);
            },20);
        }

        this.play(!this.play());
    };

    this.goToLocation = function(obj){
        if(self.currentLat===obj.lat && self.currentLng===obj.lng && self.currentZoom===obj.zoom){
            return;
        }
        if(obj.lat) { self.currentLat = obj.lat; }
        if(obj.lng) { self.currentLng = obj.lng; }
        if(obj.zoom) { self.currentZoom = obj.zoom; }

        self.map.flyTo({ center: [ self.currentLng, self.currentLat ], zoom: obj.zoom });
    };

    this.getIncluded = function(meals){
        if(!meals.length){
            return "";
        }

        var end = "";
        if(meals.length === 1){
            end = " is included"
        }else{
            end = " are included"
        }

        var mealstr = "";
        for(var x = 0; x<meals.length;x++){
            if(x===0){
                mealstr = meals[x];
            }else if(x===meals.length-1){
                mealstr = mealstr + " and " + meals[x];
            }else{
                mealstr = mealstr + ", " + meals[x];
            }
        }

        return mealstr + end;
    };

    this.bezier = function(t, p0, p1, p2){
          var cX = 3 * (p1.lng - p0.lng),
              bX = cX * -1,
              aX = p2.lng - p0.lng - cX - bX;
                
          var cY = 3 * (p1.lat - p0.lat),
              bY = cY * -1,
              aY = p2.lat - p0.lat - cY - bY;
                
          var x = (aX * Math.pow(t, 3)) + (bX * Math.pow(t, 2)) + (cX * t) + p0.lng;
          var y = (aY * Math.pow(t, 3)) + (bY * Math.pow(t, 2)) + (cY * t) + p0.lat;
                
          return {lng: x, lat: y};
    };

    this.hide_icons = function(zoom_level){
        for(var z in PAGE_ZOOM_LEVELS){
            if(PAGE_ZOOM_LEVELS[z].zoom <= zoom_level){
                this.map.setLayoutProperty(PAGE_ZOOM_LEVELS[z].id, 'visibility', 'visible');
            }else{
                this.map.setLayoutProperty(PAGE_ZOOM_LEVELS[z].id, 'visibility', 'none');
            }
        }
    };

    this.add_marker = function(type, marker, label, coords){
        if(!this.icons[type]){
            this.icons[type] = [];
            for(var z in ZOOM_LEVELS){
                if(ZOOM_LEVELS[z].id === "icons-" + type){
                    PAGE_ZOOM_LEVELS.push(ZOOM_LEVELS[z]);
                }
            }
        }

        this.icons[type].push({
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": coords
            },
            "properties": {
              "title": label ? label : "",
              "marker-symbol": marker
            }
        });
    };

    this.initialize = function() {
        mapboxgl.accessToken = 'pk.eyJ1IjoiZGFwb3dlbGwiLCJhIjoiNzUwMjg1NDhlMTljZGI3ZTM2Yjk2NjBjNWRhMjY3NDYifQ.TOYtzpe1Wu6adyNIurWtPg';

        this.map = new mapboxgl.Map({
          container: 'map-canvas', // container id
          style: 'satellite.json', //stylesheet location
          center: [ITINERARY[0].path[0].lng, ITINERARY[0].path[0].lat], // starting position
          zoom: ITINERARY[0].path[0].zoom // starting zoom
        });

        this.title(ITINERARY[0].title);

        this.hotel(ITINERARY[0].hotel ? ITINERARY[0].hotel : "");
        this.food(ITINERARY[0].food ? ITINERARY[0].food : []);
        this.included(this.getIncluded(ITINERARY[0].meals ? ITINERARY[0].meals : []));

        this.map.on('zoom', function(e) {
            var z = e.target.getZoom();
            this.hide_icons(z);
        }.bind(this));

        $(document).ready(function(){
            $('.info').addClass('show');
            $(".itinerary .stops .stop:first-child").addClass("highlight");
        });

        this.map.addClass('labels');

        this.map.on('style.load', function() {
            this.lines = [];
            this.icons = [];

            for(var i = 0; i < ITINERARY.length; i++){
                for(var j = 0; j < ITINERARY[i].path.length; j++){
                    var found = false;
                    for(var x in this.features){
                        if(this.features[x].geometry.coordinates === [ITINERARY[i].path[j].lng, ITINERARY[i].path[j].lat]){
                            found = true;
                            break;
                        }
                    }

                    if(!found){
                        if(ITINERARY[i].path[j].marker){
                            this.add_marker(ITINERARY[i].path[j].marker, ITINERARY[i].path[j].marker, "", [ITINERARY[i].path[j].lng, ITINERARY[i].path[j].lat]);
                        }

                        if(ITINERARY[i].path[j].transport){
                            var midlng = (ITINERARY[i].path[j-1].lng + ITINERARY[i].path[j].lng)/2;
                            var midlat = (ITINERARY[i].path[j-1].lat + ITINERARY[i].path[j].lat)/2;

                            var coords = [];
                            if(ITINERARY[i].path[j].curve){
                                coords = [ midlng + ITINERARY[i].path[j].curve[0], midlat + ITINERARY[i].path[j].curve[1]];
                            }else{
                                coords = [ midlng, midlat ];
                            }

                            var type = ITINERARY[i].path[j].transport;
                            if(type.indexOf('-')!==-1){
                                type = type.substr(0,type.indexOf('-'));
                            }

                            this.add_marker(type, ITINERARY[i].path[j].transport, "", coords);
                        }


                        var samecoords = false;
                        var accuracy = 0.05;
                        var p0;
                        if(ITINERARY[i].path[j].line){
                            if(j!==0){
                                p0 = { lng: ITINERARY[i].path[j-1].lng, lat: ITINERARY[i].path[j-1].lat };
                            }else{
                                p0 = { lng: ITINERARY[i-1].path[ITINERARY[i-1].path.length].lng, lat: ITINERARY[i-1].path[ITINERARY[i-1].path.length].lat };
                            }
                            var midlng = (ITINERARY[i].path[j-1].lng + ITINERARY[i].path[j].lng)/2;
                            var midlat = (ITINERARY[i].path[j-1].lat + ITINERARY[i].path[j].lat)/2;
                            var p2 = { lng: ITINERARY[i].path[j].lng, lat: ITINERARY[i].path[j].lat };

                            if(ITINERARY[i].path[j].curve){
                                var p1 = { lng: midlng + ITINERARY[i].path[j].curve[0], lat: midlat + ITINERARY[i].path[j].curve[1] };

                                var linecoords = [];
                                linecoords.push([p0.lng, p0.lat]);

                                for (var bz=0; bz<1; bz+=accuracy){
                                     var p = this.bezier(bz, p0, p1, p2);
                                     linecoords.push([p.lng, p.lat]);
                                }

                                linecoords.push([p2.lng, p2.lat]);
                            }else{
                                var linecoords = [];
                                linecoords.push([p0.lng, p0.lat]);
                                linecoords.push([p2.lng, p2.lat]);

                                if(p0.lng === p2.lng && p0.lat === p2.lat){
                                    samecoords = true;
                                }
                            }

                            if(!samecoords){
                                this.lines.push({
                                    "type": "Feature",
                                    "geometry": {
                                        "type": "LineString",
                                        "coordinates": linecoords
                                    },
                                    "properties": {
                                        "type": ITINERARY[i].path[j].line
                                    }
                                });  
                            }
                        } 
                    }
                }

                if(ITINERARY[i].food){
                    for(var f in ITINERARY[i].food){
                        this.add_marker("food", "food", ITINERARY[i].food[f].name, [ITINERARY[i].food[f].lng, ITINERARY[i].food[f].lat]);
                    }
                }

                if(ITINERARY[i].hotel && ITINERARY[i].hotel.lat && ITINERARY[i].hotel.lng){
                    this.add_marker("hotel", "hotel", ITINERARY[i].hotel.name, [ITINERARY[i].hotel.lng, ITINERARY[i].hotel.lat]);
                }
            }

            for(var l = 0; l < this.lines.length; l++){
                var data = this.lines[l];
                this.map.addSource("line" + l, {
                "type": "geojson",
                "data": data
                });

                var type = this.lines[l].properties.type;
                if(type.indexOf('-')!==-1){
                type = type.substr(0,type.indexOf('-'));
                }

                var layer = {
                    "id": "line" + l,
                    "type": "line",
                    "source": "line" + l,
                    "layout": {
                          "line-join": "round",
                          "line-cap": "round",
                    },
                    "paint": {
                        "line-width": 4,
                        "line-pattern": type + "-line-24"
                    }
                };
                this.map.addLayer(layer);
            }

            for(var i in this.icons){
                this.map.addSource("icons-" + i, {
                    "type": "geojson",
                    "data": {
                      "type": "FeatureCollection",
                      "features": this.icons[i]
                    }
                });

                var layer = {
                    "id": "icons-" + i,
                    "type": "symbol",
                    "source": "icons-" + i,
                    "layout": {
                      "icon-image": "{marker-symbol}-24",
                      "icon-allow-overlap": true,
                      "icon-offset": [0, -8],
                      "text-field": "{title}",
                      "text-size": 14,
                      "text-offset": [0, 0.6],
                      "text-anchor": "top"
                    },
                    "paint": {
                      "text-color": "#FFFFFF",
                      "text-halo-color": "#000000",
                      "text-halo-width": 2
                    }
                };

                this.map.addLayer(layer);
            }

            this.hide_icons(ITINERARY[0].path[0].zoom);

        }.bind(this));
    };

    this.initialize();
}

ko.applyBindings(new viewModel());