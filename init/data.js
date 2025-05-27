const sampleListings = [
    {
        title: "Cozy Beachfront Cottage",
        description:
          "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
        image: {
          filename: "listingimage",
          url: "https://th.bing.com/th/id/R.6d4ea53ed22786a281be0cd61d23ea00?rik=w2wznDRnw7jCDA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-YPnSfOxIJhY%2fUVTNJSdNSbI%2fAAAAAAAAAZk%2fQunZhhUYdTs%2fs1600%2f01-Sri-panwa-residence-villa-phuket-luxury-pool-villa-phuket-thailand.jpg&ehk=ihAhoGp%2bxVU%2fpMBTiy%2f2v%2bMK9deVi8790yBQ6bl0Je4%3d&risl=&pid=ImgRaw&r=0",
        },
        price: 1500,
        location: "Malibu",
        country: "United States",
        category: ["Trending","Bed N Breakfast","Rooms","Pools"],
      },
      {
        title: "Modern Loft in Downtown",
        description:
          "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
        image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 1200,
        location: "New York City",
        country: "United States",
        category: ["Mountains","Iconic Cities","Camping"],
      },
      {
        title: "Mountain Retreat",
        description:
          "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
        image: {
          filename: "listingimage",
          url: "https://th.bing.com/th/id/R.ce7a0edb38aba7529ba75e6bd223f880?rik=aGm6o2Tg7N5cDA&riu=http%3a%2f%2fhostedvillas.com%2fwp-content%2fuploads%2f2018%2f08%2fLDV033.jpg&ehk=QsvS5qB85hFg1xB%2b%2bDnZv9W8Y6aGcctCrwAH1WNbZ20%3d&risl=&pid=ImgRaw&r=0",
        },
        price: 1000,
        location: "Aspen",
        country: "United States",
        category: ["Trending","Bed N Breakfast","Mountains","Rooms","Pools"],
      },
      {
        title: "Historic Villa in Tuscany",
        description:
          "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
        image: {
          filename: "listingimage",
          url: "https://th.bing.com/th/id/R.3e708a8bc3c2867a27827e2152346549?rik=nlAjOzj5LxO0CQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-0woc0Y_1PQo%2fT-8qj4E49iI%2fAAAAAAAACsc%2fOhb8bUOcf-s%2fs1600%2fVacation%2bvilla%2bLombok%2bIndonesia%2b2.jpg&ehk=ObyCbgtgKQAjGIBgHZfQf1lV%2fCzWlQC%2bO4rqoY5ICvQ%3d&risl=&pid=ImgRaw&r=0",
        },
        price: 2500,
        location: "Florence",
        country: "Italy",
        category: ["Bed N Breakfast","Iconic Cities","Rooms","Pools"],
      },
      {
        title: "Secluded Treehouse Getaway",
        description:
          "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
        image: {
          filename: "listingimage",
          url : "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 800,
        location: "Portland",
        country: "United States",
        category: ["Mountains","Camping","Pools"],
      },
      {
        title: "Beachfront Paradise",
        description:
          "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
        image: {
          filename: "listingimage",
          url: "https://www.architectureartdesigns.com/wp-content/uploads/2014/06/437.jpg",
        },
        price: 2000,
        location: "Cancun",
        country: "Mexico",
        category: ["Trending","Bed N Breakfast","Rooms","Game Room","Pools"],
      },
      {
        title: "Rustic Cabin by the Lake",
        description:
          "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
        image: {
          filename: "listingimage",
          url: "https://i.pinimg.com/originals/02/9b/38/029b38770cb8d374ac7036808d095bf5.jpg",
        },
        price: 900,
        location: "Lake Tahoe",
        country: "United States",
        category: ["Bed N Breakfast","Mountains","Rooms","Pools"],
      },
      {
        title: "Luxury Penthouse with City Views",
        description:
          "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
        image: {
          filename: "listingimage",
          url: "https://i.pinimg.com/originals/0b/d1/bd/0bd1bd5b8babe53ffec557cd4551d2a3.jpg",
        },
        price: 3500,
        location: "Los Angeles",
        country: "United States",
        category: ["Trending","Bed N Breakfast","Rooms","Game Room","Iconic Cities","Pools"],
      },
      {
        title: "Ski-In/Ski-Out Chalet",
        description:
          "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
        image: {
          filename: "listingimage",
          url: "https://bellagiovillas.com/wp-content/uploads/2017/06/villa-del-balbianello-bellagio-villas.jpg",
        },
        price: 3000,
        location: "Verbier",
        country: "Switzerland",
        category: ["Bed N Breakfast","Mountains","Rooms","Castles"],
      },
      {
        title: "Safari Lodge in the Serengeti",
        description:
          "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
        image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 4000,
        location: "Serengeti National Park",
        country: "Tanzania",
        category: ["Trending","Mountains","Camping"],
      },
      {
        title: "Historic Canal House",
        description:
          "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
        image: {
          filename: "listingimage",
          url: "https://media.juiceonline.com/wp-content/uploads/2018/03/29130842/retreat_casabrina1-1024x553.jpg",
        },
        price: 1800,
        location: "Amsterdam",
        country: "Netherlands",
        category: ["Bed N Breakfast"],
      },
      {
        title: "Private Island Retreat",
        description:
          "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
        image: {
          filename: "listingimage",
          url: "https://www.elitehavens.com/magazine/wp-content/uploads/2021/05/Header.jpg",
        },
        price: 10000,
        location: "Fiji",
        country: "Fiji",
        category: ["Bed N Breakfast","Rooms","Castles","Pools"],
      },
      {
        title: "Charming Cottage in the Cotswolds",
        description:
          "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
        image: {
          filename: "listingimage",
          url: "https://i.pinimg.com/736x/c7/1d/bb/c71dbbaecf290472a75c433ef2bc71fd.jpg",
        },
        price: 1200,
        location: "Cotswolds",
        country: "United Kingdom",
        category: ["Bed N Breakfast","Rooms","Game Room","Pools"],
      },
      {
        title: "Historic Brownstone in Boston",
        description:
          "Step back in time in this elegant historic brownstone located in the heart of Boston.",
        image: {
          filename: "listingimage",
          url: "https://th.bing.com/th/id/OIP.T4qkqJa7mVCp-kl1HgGzZwHaDj?rs=1&pid=ImgDetMain",
        },
        price: 2200,
        location: "Boston",
        country: "United States",
        category: ["Bed N Breakfast","Rooms","Game Room","Iconic Cities"],
      },
      {
        title: "Beachfront Bungalow in Bali",
        description:
          "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
        image: {
          filename: "listingimage",
          url: "https://th.bing.com/th/id/R.f18e3b57b09c32d584b97d62752db923?rik=T4Q7jgNfP%2fR8Lw&riu=http%3a%2f%2fwww.freshpalace.com%2fwp-content%2fuploads%2f2012%2f11%2fWaterfront-House-Australia.jpg&ehk=QAn6HjpV3B3qbyKt7GxHHZLQnkgU1GZO%2flLJnou9HEs%3d&risl=&pid=ImgRaw&r=0",
        },
        price: 1800,
        location: "Bali",
        country: "Indonesia",
        category: ["Trending","Bed N Breakfast","Rooms","Game Room","Pools"],
      },
      {
        title: "Mountain View Cabin in Banff",
        description:
          "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
        image: {
          filename: "listingimage",
          url: "https://th.bing.com/th/id/R.aeff3cff9c7d19d388e3a07dfc558ef4?rik=fngkzpv8JKREWw&riu=http%3a%2f%2fwww.selexium-luxury-rentals.com%2fapp%2fuploads%2f2021%2f11%2flocation-villa-luxe.jpg&ehk=7hniEfWe54xJo%2f9sxY0kLsVVIujl%2faUrT8anIO%2bUbuM%3d&risl=&pid=ImgRaw&r=0",
        },
        price: 1500,
        location: "Banff",
        country: "Canada",
        category: ["Bed N Breakfast","Rooms","Arctic","Pools"],
      },
      {
        title: "Art Deco Apartment in Miami",
        description:
          "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
        image: {
          filename: "listingimage",
          url:"https://th.bing.com/th/id/R.fdf0a73158b7d83b402dafa92d5842f8?rik=cN0CBAya8ILqow&riu=http%3a%2f%2fcdn.home-designing.com%2fwp-content%2fuploads%2f2021%2f04%2fluxury-villa-with-pool.jpg&ehk=ow%2bNA0ECzibBZxvW%2fVkaYDuh7YkM3RX%2f3SdsNdr82WE%3d&risl=&pid=ImgRaw&r=0",
        },
        price: 1600,
        location: "Miami",
        country: "United States",
        category: ["Bed N Breakfast","Rooms","Game Room","Iconic Cities","Castles","Pools"],
      },
      {
        title: "Tropical Villa in Phuket",
        description:
          "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
        image: {
          filename: "listingimage",
          url: "https://i.pinimg.com/originals/79/a9/ed/79a9edd4c809f0de3ea5848f6fbd4386.jpg",
        },
        price: 3000,
        location: "Phuket",
        country: "Thailand",
        category: ["Bed N Breakfast","Rooms","Game Room"],
      },
      {
        title: "Historic Castle in Scotland",
        description:
          "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
        image: {
          filename: "listingimage",
          url: "https://www.nobroker.in/blog/wp-content/uploads/2022/09/luxury-villas-in-chennai.jpg",
        },
        price: 4000,
        location: "Scottish Highlands",
        country: "United Kingdom",
        category: ["Bed N Breakfast","Rooms","Iconic Cities","Castles","Pools"],
      },
      {
        title: "Desert Oasis in Dubai",
        description:
          "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
        image: {
          filename: "listingimage",
          url: "https://cache.desktopnexus.com/thumbseg/1558/1558218-bigthumbnail.jpg",
        },
        price: 5000,
        location: "Dubai",
        country: "United Arab Emirates",
        category: ["Trending","Bed N Breakfast","Rooms","Iconic Cities","Camping"],
      },
      {
        title: "Rustic Log Cabin in Montana",
        description:
          "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
        image: {
          filename: "listingimage",
          url: "https://c8.alamy.com/comp/2F4K5RH/detail-of-entrance-of-modern-villa-beautiful-place-in-switzerland-in-the-canton-of-ticino-2F4K5RH.jpg",
        },
        price: 1100,
        location: "Montana",
        country: "United States",
        category: ["Bed N Breakfast","Mountains","Rooms"],
      },
      {
        title: "Beachfront Villa in Greece",
        description:
          "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
        image: {
          filename: "listingimage",
          url: "https://th.bing.com/th/id/R.a09f304eaa19323a0e04511e6f17dce7?rik=pNNzmerSE7HZ1w&riu=http%3a%2f%2flabeaujardine.com%2fwp-content%2fuploads%2f2016%2f06%2fmonet-garden-giverny-cr-alamy.jpg&ehk=A7kST4pcyATqMdd6qo2xVzdBT1ghLVajen4VNRifRA8%3d&risl=&pid=ImgRaw&r=0",
        },
        price: 2500,
        location: "Mykonos",
        country: "Greece",
        category: ["Bed N Breakfast","Rooms","Game Room","Camping"],
      },
      {
        title: "Eco-Friendly Treehouse Retreat",
        description:
          "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
        image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 750,
        location: "Costa Rica",
        country: "Costa Rica",
        category: ["Mountains","Camping"],
      },
      {
        title: "Historic Cottage in Charleston",
        description:
          "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
        image: {
          filename: "listingimage",
          url:"https://assets.cntraveller.in/photos/610d0fe4791a56d67d201fff/master/w_1600%2Cc_limit/lead.jpg",
        },
        price: 1600,
        location: "Charleston",
        country: "United States",
        category: ["Bed N Breakfast","Rooms","Pools"],
      },
      {
        title: "Modern Apartment in Tokyo",
        description:
          "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
        image: {
          filename: "listingimage",
          url: "https://www.rajavillaproperty.com/wp-content/uploads/2022/08/Villa-Merpati-47-WM.jpg",
        },
        price: 2000,
        location: "Tokyo",
        country: "Japan",
        category: ["Trending","Bed N Breakfast","Rooms","Game Room","Iconic Cities","Pools"],
      },
      {
        title: "Lakefront Cabin in New Hampshire",
        description:
          "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
        image: {
          filename: "listingimage",
          url: "https://th.bing.com/th/id/R.70910701ebfdbab754700f2f9ed6cd21?rik=zX7X0oIKT9Z5WQ&riu=http%3a%2f%2fdata.1freewallpapers.com%2fdownload%2fluxurious-beach-villa-3840x2400.jpg&ehk=pRelvwpjEHAh5aV0L9icKU6n8AUT3NXRYlflo7d2Q8A%3d&risl=1&pid=ImgRaw&r=0",
        },
        price: 1200,
        location: "New Hampshire",
        country: "United States",
        category: ["Bed N Breakfast","Rooms"],
      },
      {
        title: "Luxury Villa in the Maldives",
        description:
          "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
        image: {
          filename: "listingimage",
          url: "https://assets.cntraveller.in/photos/613a3b9481cc5a532dc70ff1/master/w_1600%2Cc_limit/outdoors.jpg",
        },
        price: 6000,
        location: "Maldives",
        country: "Maldives",
        category: ["Trending","Bed N Breakfast","Rooms","Iconic Cities"],
      },
      {
        title: "Ski Chalet in Aspen",
        description:
          "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
        image: {
          filename: "listingimage",
          url:"https://media.cntraveller.in/wp-content/uploads/2020/02/Aromiaa-villas-866x649.jpg",
        },
        price: 4000,
        location: "Aspen",
        country: "United States",
        category: ["Bed N Breakfast","Rooms","Game Room","Pools"],
      },
      {
        title: "Secluded Beach House in Costa Rica",
        description:
          "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
        image: {
          filename: "listingimage",
          url: "https://thumbs.dreamstime.com/b/beautiful-villa-2705994.jpg",
        },
        price: 1800,
        location: "Costa Rica",
        country: "Costa Rica",
        category: ["Bed N Breakfast","Rooms","Pools"],
      },
  // ... (other listings)
];

module.exports = { data: sampleListings };