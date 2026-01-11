# Black Swan Bistro - HTML Basics Project

This is the HTML-only version of the Black Swan Bistro restaurant website. This **multi-page website** demonstrates the fundamental HTML concepts covered in the HTML Basics tutorial series.

## Website Structure

The website consists of multiple interconnected pages with consistent navigation:

```
black-swan-bistro/
├── index.html          # Home page with hero, about preview, featured menu
├── menu.html           # Complete menu (appetizers, mains, desserts, beverages)
├── about.html          # Restaurant story, chef bio, philosophy, team
└── README.md           # This file

Images are located in: /public/images/tutorials/html-basics/
    ├── black-swan-logo.svg
    ├── black-swan-storefront.jpg
    ├── black-swan-interior.jpg
    ├── black-swan-pasta.jpg
    ├── black-swan-lasagna.jpg
    └── black-swan-steak.jpg
```

### Page Navigation

All pages include consistent header and footer navigation:

- **Header Nav**: Home | Menu | About | Contact & Reservations
- **Footer Nav**: Same links plus social media
- **Contact form**: Located on home page (#contact anchor)

## HTML Concepts Demonstrated

### Document Structure

- Proper DOCTYPE and HTML structure
- Semantic HTML5 elements (`header`, `main`, `section`, `article`, `footer`, `nav`)
- Meta tags for SEO and responsive design

### Text Formatting

- Headings hierarchy (`h1` through `h3`)
- Paragraphs and text emphasis (`strong`, `em`)
- Lists (ordered and unordered)

### Links and Navigation

- **Multi-page navigation** - Consistent header/footer menus across all pages
- Internal page links (menu.html, about.html)
- Anchor links to sections (#contact, #about)
- External links (social media)
- Email and phone links
- Proper use of `target="_blank"` and `rel="noopener"`

### Images

- Basic `img` tags with `src`, `alt`, and `width` attributes
- `figure` and `figcaption` for semantic image presentation
- Proper alt text for accessibility

### Tables

- Structured table with `thead`, `tbody`, `th`, and `td`
- Used for the hours of operation schedule

### Forms

- Complete reservation form with various input types:
  - Text, email, tel, date, time
  - Select dropdowns
  - Textarea
  - Checkbox
  - Submit and reset buttons
- Fieldsets for logical grouping
- Labels properly associated with inputs
- Required field validation
- Placeholder text

### Semantic HTML

- `address` element for contact information
- `small` for fine print
- Proper use of structural elements

## Project Structure

```
black-swan-bistro/
├── index.html          # Main landing page
├── menu.html           # Full menu page
├── about.html          # About us page
├── images/             # Image assets (to be added)
│   ├── logo.png
│   ├── restaurant-exterior.jpg
│   ├── chef.jpg
│   ├── signature-dish.jpg
│   ├── interior.jpg
│   ├── bar.jpg
│   └── dessert-display.jpg
└── README.md           # This file
```

## Page-by-Page Content

### index.html (Home Page)

- Hero section with welcome message
- About preview with link to full about page
- Featured menu items
- Hours of operation table
- Complete reservation form
- Contact information
- Gallery preview to start

2. Navigate between pages using the header/footer menus
3. All pages are functional but unstyled (plain HTML)
4. All navigation links work correctly
5. Images require the actual image files in the `images/` folder

## Multi-Page Website Features

This project demonstrates real-world website structure:

- ✅ **Consistent navigation** across all pages
- ✅ **Logical information architecture** (home, menu, about, contact)
- ✅ **Internal linking** between related pages
- ✅ **Scalable structure** ready for CSS styling
- ✅ **Professional organization** mimicking real restaurant websites
- Complete appetizer section
- Main courses with descriptions and prices
- Desserts menu
- Beverages section (wine, beer, cocktails, non-alcoholic)
- Dietary information and icons
- Call-to-action for reservations

### about.html (About Page)

- Restaurant story and history
- Chef Maria Rodriguez biography and awards
- Our philosophy (farm to table, sustainability, community)
- Team members
- Location and directions
- Customer testimonials
- Join our team section

## How This Project Evolves

This HTML-only version is the foundation. As you progress through the tutorial series, you'll enhance this project:

- **CSS Basics**: Add styling, colors, layouts, and responsive design
- **JavaScript Basics**: Add interactivity like image sliders and form validation
- **DOM Manipulation**: Create dynamic menu updates and interactive features
- **Advanced Topics**: Add animations, AJAX for reservations, and more

## Usage

1. Open `index.html` in your web browser
2. The page is functional but unstyled (plain HTML)
3. All links, forms, and navigation work correctly
4. Images require the actual image files in the `images/` folder

## Learning Objectives Met

By studying this project, you'll see practical examples of:

- ✅ Proper HTML5 document structure
- ✅ Semantic HTML elements
- ✅ Accessibility best practices
- ✅ Form creation and validation
- ✅ Navigation and internal links
- ✅ Content organization
- ✅ SEO-friendly markup

## Next Steps

After completing the HTML Basics series, move on to CSS Basics where you'll transform this plain HTML into a beautifully styled website!
