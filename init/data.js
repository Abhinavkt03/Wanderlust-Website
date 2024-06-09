const sampleData = [
    {
        "title": "Luxury Beach House",
        "desc": "Stunning beachfront property with breathtaking views",
        "price": 5000,
        "location": "Malibu",
        "country": "United States",
        "image": {
            url: "https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=1408&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "Luxury Beach House"
        }
    },
    {
        "title": "Mountain Retreat",
        "desc": "Cozy cabin nestled in the mountains, perfect for nature lovers",
        "price": 800,
        "location": "Aspen",
        "country": "United States",
        "image": {
            url: "https://images.unsplash.com/photo-1582289545106-efecf907f21e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "Mountain Retreat"
        }
    },
    {
        "title": "City Loft",
        "desc": "Modern loft apartment in the heart of downtown",
        "price": 1200,
        "location": "New York City",
        "country": "United States",
        "image": {
            url: "https://plus.unsplash.com/premium_photo-1687710306880-95c72d9a19c5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "City Loft"
        }
    },
    {
        "title": "Rustic Farmhouse",
        "desc": "Charming farmhouse surrounded by rolling hills",
        "price": 1000,
        "location": "Tuscany",
        "country": "Italy",
        "image": {
            url: "https://plus.unsplash.com/premium_photo-1687402901276-d47ca83be12c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "Rustic Farmhouse"
        }
    },
    {
        "title": "Secluded Cabin",
        "desc": "Remote cabin retreat for those seeking solitude",
        "price": 600,
        "location": "Banff",
        "country": "Canada",
        "image": {
            url: "https://images.unsplash.com/photo-1531931561479-c044f20c36aa?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "Secluded Cabin"
        }
    },
    {
        "title": "Modern Condo",
        "desc": "Sleek and stylish condo with panoramic city views",
        "price": 1500,
        "location": "Tokyo",
        "country": "Japan",
        "image": {
            url: "https://images.unsplash.com/photo-1672391332568-adeeb441a44e?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "Modern Condo"
        }
    },
    {
        "title": "Charming Cottage",
        "desc": "Quaint cottage with a garden, perfect for a peaceful getaway",
        "price": 700,
        "location": "Cotswolds",
        "country": "United Kingdom",
        "image": {
            url: "https://images.unsplash.com/photo-1697609709300-d7409f2c2459?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "Charming Cottage"
        }
    },
    {
        "title": "Lakefront Retreat",
        "desc": "Tranquil retreat on the shores of a pristine lake",
        "price": 900,
        "location": "Queenstown",
        "country": "New Zealand",
        "image": {
            url: "https://images.unsplash.com/photo-1662770120478-14fe569cf520?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "Lakefront Retreat"
        }
    },
    {
        "title": "Ski Chalet",
        "desc": "Cozy chalet with ski-in/ski-out access to the slopes",
        "price": 2000,
        "location": "Chamonix",
        "country": "France",
        "image": {
            url: "https://images.unsplash.com/photo-1620752685007-98c850478a48?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "Ski Chalet"
        }
    },
    {
        "title": "Luxury Penthouse",
        "desc": "Elegant penthouse suite with stunning city skyline views",
        "price": 3500,
        "location": "Sydney",
        "country": "Australia",
        "image": {
            url: "https://images.unsplash.com/photo-1503464093195-36b34a0869bd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "Luxury Penthouse"
        }
    },
    {
        "title": "Historic Manor",
        "desc": "Stately manor steeped in history and surrounded by gardens",
        "price": 2500,
        "location": "Bath",
        "country": "United Kingdom",
        "image": {
            url: "https://images.unsplash.com/photo-1586446911746-3038e9751ac9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "Historic Manor"
        }
    },
    {
        "title": "Riverfront Cabin",
        "desc": "Charming cabin overlooking a peaceful river",
        "price": 750,
        "location": "Whistler",
        "country": "Canada",
        "image": {
            url: "https://images.unsplash.com/photo-1702902760736-7ccf2413acfd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "Riverfront Cabin"
        }
    },
    {
        "title": "Sunny Villa",
        "desc": "Bright and airy villa with a private pool",
        "price": 1800,
        "location": "Bali",
        "country": "Indonesia",
        "image": {
            url: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "Sunny Villa"
        }
    },
    {
        "title": "Coastal Retreat",
        "desc": "Relaxing retreat with panoramic ocean views",
        "price": 1600,
        "location": "Santorini",
        "country": "Greece",
        "image": {
            url: "https://images.unsplash.com/photo-1434434319959-1f886517e1fe?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "Coastal Retreat"
        }
    },
    {
        "title": "Forest Cabin",
        "desc": "Secluded cabin surrounded by towering pine trees",
        "price": 700,
        "location": "Lake Tahoe",
        "country": "United States",
        "image": {
            url: "https://images.unsplash.com/photo-1647996179012-66b87eba3d17?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "Forest Cabin"
        }
    },
    {
        "title": "Mountain Lodge",
        "desc": "Rustic lodge nestled in the mountains, perfect for skiers",
        "price": 1200,
        "location": "Vail",
        "country": "United States",
        "image": {
            url: "https://media.istockphoto.com/id/1202670565/photo/beautiful-house.jpg?s=1024x1024&w=is&k=20&c=Pqo7hBjf7Pl2GgGAFDUlkOGjRZByjqqJPySk7tIi29E=",
            filename: "Mountain Lodge"
        }
    },
    {
        "title": "Vineyard Estate",
        "desc": "Elegant estate surrounded by vineyards and rolling hills",
        "price": 3000,
        "location": "Napa Valley",
        "country": "United States",
        "image": {
            url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "Vineyard Estate"
        }
    },
    {
        "title": "Desert Oasis",
        "desc": "Luxurious oasis in the heart of the desert",
        "price": 2000,
        "location": "Dubai",
        "country": "United Arab Emirates",
        "image": {
            url: "https://images.unsplash.com/photo-1488345979593-09db0f85545f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "Desert Oasis"
        }
    },
    {
        "title": "Tropical Paradise",
        "desc": "Exotic villa surrounded by lush tropical gardens",
        "price": 2500,
        "location": "Phuket",
        "country": "Thailand",
        "image": {
            url: "https://images.unsplash.com/photo-1647996179012-66b87eba3d17?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            filename: "Tropical Paradise"
        }
    }
];

module.exports = { data: sampleData };
