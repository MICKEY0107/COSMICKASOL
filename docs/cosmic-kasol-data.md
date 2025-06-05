# CosmicKasol Sample Data Structure

## Events Data
```json
{
  "events": [
    {
      "id": 1,
      "title": "Cosmic Trance Festival",
      "date": "25-28 Dec 2025",
      "location": "Chhalal Village",
      "price": 2000,
      "description": "A 4-day psychedelic trance festival featuring international and local DJs in the mystical valley of Kasol",
      "image": "/images/cosmic_event_card.png",
      "genre": "Psychedelic Trance",
      "artists": ["Ace Ventura", "Captain Hook", "Liquid Soul", "Vini Vici"],
      "capacity": 1500,
      "status": "Open",
      "countdown": "2025-12-25T20:00:00"
    },
    {
      "id": 2,
      "title": "Himalayan Bass Festival", 
      "date": "15-17 Feb 2026",
      "location": "Pirates of Parvati",
      "price": 1500,
      "description": "Bass heavy electronic music festival with stunning mountain views",
      "image": "/images/bass_festival.jpg",
      "genre": "Bass/Dubstep",
      "artists": ["Excision", "Zomboy", "Space Laces", "SVDDEN DEATH"],
      "capacity": 800,
      "status": "Early Bird",
      "countdown": "2026-02-15T19:00:00"
    }
  ]
}
```

## Hotel/Rooms Data
```json
{
  "rooms": [
    {
      "id": 1,
      "name": "Cosmic Deluxe Room",
      "type": "Deluxe",
      "capacity": 2,
      "price": 3500,
      "description": "Spacious room with mountain views, cosmic decor, and modern amenities",
      "image": "/images/cosmic_hotel_room.png",
      "amenities": ["WiFi", "Balcony", "Mountain View", "Mini Bar", "AC", "Cosmic Lighting"],
      "size": "400 sq ft",
      "available": true
    },
    {
      "id": 2,
      "name": "Galaxy Suite",
      "type": "Suite", 
      "capacity": 4,
      "price": 6500,
      "description": "Luxury suite with panoramic valley views and holographic amenities",
      "image": "/images/galaxy_suite.jpg",
      "amenities": ["WiFi", "Living Room", "Valley View", "Kitchenette", "Jacuzzi", "Holographic TV"],
      "size": "800 sq ft",
      "available": true
    }
  ]
}
```

## Adventure Packages
```json
{
  "packages": [
    {
      "id": 1,
      "name": "Cosmic Paragliding",
      "price": 2500,
      "duration": "2 hours",
      "description": "Soar through the cosmic skies with tandem paragliding over Parvati Valley",
      "image": "/images/paragliding.jpg",
      "difficulty": "Beginner",
      "includes": ["Equipment", "Instructor", "Photos", "Certificate"]
    },
    {
      "id": 2,
      "name": "Kheerganga Trek",
      "price": 1800,
      "duration": "2 days", 
      "description": "Trek to the mystical hot springs of Kheerganga with cosmic guides",
      "image": "/images/kheerganga_trek.jpg",
      "difficulty": "Moderate",
      "includes": ["Guide", "Camping", "Meals", "First Aid"]
    }
  ]
}
```

## Gallery Structure
```json
{
  "categories": [
    {
      "name": "Events",
      "images": [
        {
          "url": "/images/gallery/event1.jpg",
          "caption": "Cosmic Trance Festival 2024 - Main Stage",
          "tags": ["festival", "music", "lights"]
        }
      ]
    },
    {
      "name": "Nature",
      "images": [
        {
          "url": "/images/cosmic_hero_bg.png",
          "caption": "Mystical Kasol valley at cosmic sunset",
          "tags": ["nature", "valley", "sunset"]
        }
      ]
    }
  ]
}
```

## Blog Posts
```json
{
  "posts": [
    {
      "id": 1,
      "title": "Top 5 Hidden Trails in Parvati Valley",
      "excerpt": "Discover the mystical paths less traveled in the cosmic valley of Kasol",
      "author": "Cosmic Explorer",
      "date": "2025-05-15",
      "image": "/images/blog/hidden_trails.jpg",
      "category": "Travel",
      "readTime": "5 min read"
    },
    {
      "id": 2,
      "title": "The Ultimate Guide to Psychedelic Festivals",
      "excerpt": "Everything you need to know about experiencing trance festivals in the Himalayas", 
      "author": "Festival Guru",
      "date": "2025-05-10",
      "image": "/images/blog/festival_guide.jpg",
      "category": "Festivals",
      "readTime": "8 min read"
    }
  ]
}
```