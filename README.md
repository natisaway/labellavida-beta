# La Bella Vida Website – Full Instructional Guide

## Overview
This website is a static front-end project built using:
- HTML for structure
- CSS for styling and layout
- JavaScript for interactivity
---
## Project Structure

project-folder/
├── index.html
├── style.css
├── mobile.css
├── script.js
├── images/

## HTML Structure
### Header
Contains logo, navigation links, language switch, and menu button.

Classes:
.header
.header-inner
.logo
.top-links
.menu-btn
---

### Sidebar
Hidden navigation menu.

IDs / Classes:
#sidebar
.overlay
.sidebar-nav

### Hero Section

Structure:
.hero
  .container
    .hero-grid
      .hero-text
      .hero-image-wrap

Important:
.hero-text and .hero-image-wrap must be siblings (not nested)
---

### Hero Details
Short description under hero.

Classes:
.hero-details
.hero-description
---

### Service Sections

Reusable classes:
.section
.container
.section-title
.split
.reverse
.card-grid
.card
.info-box
.checklist
---

### Volunteers Section

Classes:
#volunteers
.contact-open-btn
---

### Contact Section

Classes:
.contact-section
.contact-card-row
.contact-info-card
.contact-block
---

### Contact Modal

IDs / Classes:
#contactModal
.contact-modal
.contact-modal-box
.contact-form
#contactSuccess
---

### Volunteer Modal

IDs:
#volunteerModal
#volunteerForm
#volunteerSuccess
---

### Social Media

Classes:
#social-media
.social-grid
.social-card
---

### Footer
.footer
---

## CSS Structure

### Theme Variables

Defined in :root:
--primary
--accent
--text-dark
--container
--shadow
---

### Base Styles

Includes:
- Reset styles
- Font setup
- Container width

.container centers content
---

### Sections

.section {
  padding: 100px 0;
}

---

### Hero Layout

.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(300px, 360px);
}
---

### Buttons

.btn.primary
.btn.secondary
.hero-cta
.hero-cta-outline
---

### Layout Helpers

.card-grid
.split
.reverse
.two-col-text
.info-box
---

### Sidebar

.sidebar
.sidebar.open
.overlay
.overlay.show
---

### Modals

.contact-modal
.contact-modal.active
.contact-modal-box
---

### Social

.social-grid
.social-card
---

### Back to Top

#backToTop
#backToTop.show
---

## JavaScript

### Sidebar
toggleSidebar()
---

### Contact Modal
openContactModal()
closeContactModal()
---

### Volunteer Modal
openVolunteerModal()
closeVolunteerModal()
---

### Forms
- Uses Formspree
- Shows success message after submit
---

### Back to Top
- Appears on scroll
- Scrolls to top
---

### DOMContentLoaded
Handles:
- Event listeners
- Sidebar link closing
- Escape key modal close
---

