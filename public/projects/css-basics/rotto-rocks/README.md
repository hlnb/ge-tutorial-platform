# Rotto Rocks - HTML Basics Project

This is the HTML-only version of the Rotto Rocks tourism website for Rottnest Island, Western Australia. This **multi-page website** demonstrates advanced HTML concepts and complex content structuring - a more sophisticated project than Black Swan Bistro.

## Website Structure

The website consists of multiple interconnected pages with consistent navigation:

```
rotto-rocks/
├── index.html              # Home page with island overview
├── activities.html         # Comprehensive activities guide
├── accommodation.html      # Complete lodging information
├── transport.html          # Ferry schedules and getting there
└── README.md               # This file

Images are located in: /public/images/tutorials/html-basics/
    └── quokka.jpg          # Used for logo and quokka photos
```

### Page Navigation

All pages include consistent header and footer navigation:

- **Header Nav**: Home | Activities | Accommodation | Getting There | Contact
- **Footer Nav**: Same links plus social media and government resources
- **Contact form**: Located on home page (#contact anchor)

## HTML Concepts Demonstrated

### Advanced Document Structure

- Comprehensive semantic HTML5 structure
- Multiple nested sections and articles
- Complex navigation with ARIA labels
- Proper heading hierarchy across many sections

### Rich Content Organization

- Multiple article elements within sections
- Complex nested lists (ordered and unordered)
- Definition-style content presentation
- Long-form content management

### Advanced Table Usage

- Multi-column tables with headers
- Ferry schedule table
- Seasonal information table
- Proper use of `thead` and `tbody`

### Extensive Link Types

- **Multi-page navigation** - Consistent header/footer across 4 pages
- Internal page links (activities.html, accommodation.html, transport.html)
- Anchor links within pages (#attractions, #contact, etc.)
- External resources with proper attributes
- Email and phone links
- Social media links
- Government and official resource links

### Image Gallery

- Multiple figures with captions
- Various image sizes and contexts
- Descriptive alt text for accessibility
- Wildlife, landscape, and activity photos

### Multiple Form Types

- Newsletter subscription form
- Feedback form with ratings
- Checkboxes for multiple selections
- Date inputs for visit information
- Text areas for detailed feedback

### Lists and Data Presentation

- Unordered lists for features and tips
- Ordered lists for ranked recommendations
- Nested lists for complex information
- Check-mark style lists for guidelines

### Accessibility Features

- ARIA labels for navigation regions
- Proper alt text on all images
- Semantic HTML throughout
- Clear form labels and associations
- Descriptive link text

## Project Structure

```# Home page with overview
├── activities.html         # Activities guide (500+ lines)
├── accommodation.html      # Lodging options (400+ lines)
├── transport.html          # Ferry & transport info (600+ lines)
├── images/                 # Image assets (to be added)
│   ├── rotto-logo.png
│   ├── hero-beach.jpg
│   ├── the-basin.jpg
│   ├── lighthouse.jpg
│   ├── pink-lake.jpg
│   ├── quokka-closeup.jpg
│   ├── quokka-family.jpg
│   ├── aerial-view.jpg
│   ├── sunset-beach.jpg
│   ├── cycling.jpg
│   ├── snorkeling.jpg
│   ├── hotel.jpg
│   └── camping.jpg
└── README.md               # This file
```

## Page-by-Page Content

### index.html (Home Page - ~750 lines)

The comprehensive landing page featuring:

- Hero section with call-to-action
- About Rottnest Island overview
- Top attractions highlights
- Activities preview (links to activities.html)
- Wildlife section (quokkas, whales, birds)
- Planning your visit preview (links to transport & accommodation pages)
- Image gallery
- Contact forms (feedback & newsletter)
- Conservation message
- Social media and government links

### activities.html (Activities Guide - ~500 lines)

Detailed guide to everything you can do on the island:

- **Cycling**: Popular routes, bike hire information
- **Swimming & Snorkeling**: Top beaches and bays
- **Diving**: Popular dive sites and marine life
- **Surfing**: Best surf spots by season
- **Fishing**: Regulations and recommended spots
- **Wildlife Watching**: Quokkas, whales, sea birds
- **Tours**: Available guided tour options
- **Seasonal Activities**: What to do when
- **Planning Your Day**: Sample itineraries
- **What to Bring**: Essential gear and tips

### accommodation.html (Lodging Guide - ~400 lines)

Complete guide to where to stay:

- **Hotel Rottnest**: Premier accommodation details
- **Cottages & Villas**: Various cottage options
- **Camping**: Tentland camping grounds
- **Glamping**: Luxury glamping experience
- **Booking Information**: How to secure accommodation
- **Day Trippers**: Option to visit without staying overnight
- **What's Included**: Amenities and facilities
- **Important Rules**: Pet policies and regulations
- **Seasonal Considerations**: Peak times and availability

### transport.html (Getting There Guide - ~600 lines)

Most comprehensive page showing advanced HTML:

- **Ferry Services Overview**: All operators and routes
- **From Fremantle**: Rottnest Express schedules & fares
- **From Perth**: Sealink schedules & fares
- **From Hillarys**: Rottnest Fast Ferries schedules & fares
- **Comparison Table**: Side-by-side ferry comparison
- **Booking Information**: Online booking tips
- **On the Day**: What to expect, check-in procedures
- **Private Boats**: Marina information for boat owners
- **Getting Around the Island**: Bikes, buses, walking
- **Weather & Cancellations**: Service interruptions
- **Package Deals**: Combined ferry + accommodation
- **Accessibility**: Services for travelers with disabilitiesg
  │ ├── aerial-view.jpg
  │ ├── sunset-beach.jpg
  │ ├── cyclists.jpg
  │ ├── snorkeling.jpg
  │ ├── lighthouse-sunset.jpg
  │ └── historic-settlement.jpg
  └── README.md # This file

```

## Usage

1. Open `index.html` in your web browser to start
2. Navigate between pages using the header/footer menus
3. Explore detailed content on each specialized page
4. All pages are functional but unstyled (plain HTML)
5. All navigation links and forms work correctly
6. Images require the actual image files in the `images/` folder

## Multi-Page Website Features

This advanced project demonstrates professional tourism website structure:
- ✅ **Four specialized pages** with distinct purposes
- ✅ **Consistent navigation** across all pages
- ✅ **Progressive disclosure** (previews on home → details on dedicated pages)
- ✅ **Complex content organization** with nested sections
- ✅ **Advanced HTML elements** (tables, multiple form types, definition lists)
- ✅ **Real-world information architecture** mimicking actual tourism sites
- ✅ **Scalable structure** ready for CSS styling and JavaScript interactivity

## Complexity Comparison

## Complexity Comparison

This project is more complex than Black Swan Bistro:

### Website Structure
- **Bistro**: 3 pages (index, menu, about)
- **Rotto Rocks**: 4 pages (index, activities, accommodation, transport)

### Content Volume
- **Bistro**: ~800 total lines across all pages
- **Rotto Rocks**: ~2000+ total lines across all pages
- More detailed articles and nested subsections
- Extensive information architecture

### Advanced Features
- **Complex tables** (ferry schedules with multiple operators)
- **Longer content sections** requiring information management
- **Multiple content types** (guides, schedules, regulations, itineraries)
- **Nested structures** (articles within sections within sections)

### Information Types

- Historical information
- Wildlife education
- Activity guides
- Travel planning details
- Conservation messaging
- Multiple data tables

### Real-World Data

- Actual ferry schedules
- Seasonal information
- Emergency contacts
- Official government links
- Conservation guidelines

### Forms Variety

- Multiple forms for different purposes
- Checkbox groups
- Rating selects
- Date inputs
- Newsletter subscriptions

## Learning Objectives Met

By studying this project, you'll see practical examples of:

- ✅ Complex information architecture
- ✅ Multi-section content organization
- ✅ Comprehensive navigation systems
- ✅ Multiple form implementations
- ✅ Rich media integration
- ✅ Accessibility best practices
- ✅ SEO-friendly structure
- ✅ Real-world tourism website patterns

## HTML Features Showcase

### Semantic Elements Used

- `header`, `main`, `section`, `article`, `aside`, `footer`
- `nav` with ARIA labels
- `figure` and `figcaption`
- `address` for contact information
- `table` with proper structure
- `form` with `fieldset` and `legend`

### Accessibility Features

- Descriptive alt text for all images
- Proper heading hierarchy
- ARIA labels for navigation
- Form labels associated with inputs
- Semantic HTML throughout

### Content Types

- Educational content
- Practical information
- Gallery presentations
- Forms for user interaction
- Tables for structured data
- Lists for organized information

## How This Project Evolves

As you progress through the tutorial series, you'll enhance this project:

### CSS Basics (Next)

- Full responsive layout
- Image galleries with grid/flexbox
- Styled navigation menus
- Beautiful form styling
- Color scheme and typography
- Mobile-first design

### JavaScript Basics

- Image sliders for gallery
- Interactive maps
- Form validation
- Search functionality
- Filter activities by type
- Smooth scrolling navigation

### Advanced Topics

- Image lazy loading
- Interactive wildlife guide
- Booking integration
- Weather API integration
- Virtual tours
- User reviews system

## Usage Tips

1. **Open in Browser**: Load `index.html` directly
2. **Unstyled**: The page is functional but basic (HTML only)
3. **All Features Work**: Links, forms, and navigation are functional
4. **Image Placeholders**: Images require actual files in `images/` folder

## Key Differences from Black Swan Bistro

| Feature        | Black Swan Bistro  | Rotto Rocks            |
| -------------- | ------------------ | ---------------------- |
| Complexity     | Beginner-friendly  | More advanced          |
| Content Length | Moderate           | Extensive              |
| Sections       | 5 main sections    | 9 main sections        |
| Tables         | 1 simple table     | 2 complex tables       |
| Forms          | 1 reservation form | 3 different forms      |
| Images         | 7 images           | 13+ images             |
| Lists          | Basic lists        | Nested & complex lists |
| Purpose        | Local business     | Tourist destination    |

## Best Practices Demonstrated

- **SEO**: Proper meta tags, semantic structure
- **Accessibility**: ARIA labels, alt text, semantic HTML
- **User Experience**: Clear navigation, organized content
- **Content Strategy**: Logical flow, appropriate depth
- **Standards Compliance**: Valid HTML5 structure
- **Mobile Consideration**: Viewport meta tag, responsive thinking

## Next Steps

After completing the HTML Basics series, move to CSS Basics where you'll transform this comprehensive structure into a visually stunning, professionally styled tourism website with:

- Hero image with overlays
- Card-based layouts for attractions
- Image gallery grids
- Styled forms and buttons
- Responsive navigation
- Beautiful typography
- Color schemes matching island aesthetics

This project provides excellent practice for real-world web development scenarios!
```
