WANDERS IN FRAMES — WEBSITE FILES
==================================

HOW TO USE
----------
1. Upload this ENTIRE folder (all files + subfolders) to your host
   (Netlify, Cloudflare Pages, GitHub Pages, etc). Keep the folder
   structure exactly as-is — don't move files out of css/, js/,
   articles/, or images/, or the site will break.
2. Set index.html as your homepage (most hosts do this automatically).

FOLDER STRUCTURE
----------------
/                       Root pages (Home, About, galleries, etc.)
/css/styles.css          All site styling — one shared file
/js/                      All site scripts (shuffle, lightbox, reveal, etc.)
/articles/                Individual blog article pages
/images/                  All photos, organized by page/section

PAGES (at the root)
--------------------
index.html              Home (full-page gallery)
about.html               About
featured-works.html      Featured Works (press clippings)
landscapes.html           My Works > Landscapes & Landmarks
people.html               My Works > People & Lifestyle
wildlife-macro.html       My Works > Wildlife & Macro
blogs.html                Blogs
connect.html              Connect

articles/article-01.html  Individual blog post (linked from blogs.html)
articles/article-02.html  Individual blog post
articles/article-03.html  Individual blog post

"My Workshops" in the nav is an external link straight to
https://sites.google.com/view/ecoventuresvietnam — there's no
workshops page on this site. To point it somewhere else later,
search for "ecoventuresvietnam" across the .html files and replace
the URL in each.

IMAGES FOLDER LAYOUT
---------------------
images/hero/              Homepage full-screen slideshow photos
images/landscapes/        Landscapes & Landmarks gallery
images/people/            People & Lifestyle gallery
images/wildlife/          Wildlife & Macro gallery
images/press/             Featured Works thumbnails
images/about/             About page portrait, award photo, certificate
images/connect/           Connect page banner
images/blog/cards/        The 3 thumbnail images on the Blogs page grid
images/blog/slider/       The 3 auto-rotating hero images on Blogs page
images/blog/article-01/   Photos used inside articles/article-01.html
images/blog/article-02/   Photos used inside articles/article-02.html
images/blog/article-03/   Photos used inside articles/article-03.html
images/logo.png           Site logo mark (next to "DUC NGUYEN" in the nav)

Note: the Homepage gallery (index.html) pulls its photos directly
from images/landscapes/ and images/people/ via js/home-gallery.js —
it doesn't have its own image folder, and Wildlife & Macro is
intentionally excluded from it.

REPLACING PLACEHOLDER PHOTOS
-----------------------------
Every photo is currently a labeled gray placeholder. To swap one in:
  1. Rename your real photo to match the EXACT filename it's replacing
     (e.g. your best landscape shot → landscapes/landscape-01.jpg)
  2. Drag it into the matching folder, overwriting the placeholder.
That's it — no code editing needed for photo swaps, EXCEPT the
homepage: if you add or remove a photo from landscapes/ or people/,
js/home-gallery.js's photo list needs updating to match (ask for
help regenerating it if you make changes there).

ADDING A NEW ARTICLE
----------------------
1. Duplicate articles/article-01.html (or 02/03), rename it (e.g.
   articles/article-04.html), and edit its title/date/text/images.
2. Create a matching images/blog/article-04/ folder for its photos.
3. In blogs.html, duplicate a .blog-card block and point it at
   articles/article-04.html.

EDITING TEXT
------------
Open any .html file in a text editor (VS Code, Notepad, TextEdit) and
search for the text you want to change, then edit it directly.
Anything wrapped in [Placeholder — ...] is meant to be replaced by you.

SHARED STYLING
--------------
All pages link to css/styles.css. Changing a color, font, or spacing
value there updates every page at once.
