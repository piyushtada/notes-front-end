it contain the a section of website which can be taken out
<article>
</article>

to define the nav bar
<header>
    <nav>
        <ul>
            <il><a href="#home">Home</a></li>
            <il><a href="#about">About</a></li>
            <il><a href="#contact">Contact</a></li>
        </ul>
    </nav>
</header>

<header>
The header of a content section or the web page. The web page header often contains the website branding or logo.

<nav>
The navigation links of a section or the web page.

<footer>
The footer of a content section or the web page. On a web page, it often contains secondary links, the copyright notice, privacy policy and cookie policy links.

<main>
Specifies the main content of a section or the web page.

<aside>
A secondary set of content that is not required to understand the main content.

<article>
An independent, self-contained block of content such as a blog post or product.

<section>
A standalone section of the document that is often used within the body and article elements.

<details>
A collapsed section of content that can be expanded if the user wishes to view it.

<summary>
Specifies the summary or caption of a <details> element.

<h1><h2><h3><h4><h5><h6>
Headings on the web page. <h1> indicates the most important heading whereas <h6> indicates the least important. 

Content tags
<blockquote>
Used to describe a quotation.

<dd>
Used to define a description for the preceding <dt> element.

<dl>
Used to define a description list.

<dt>
Used to describe terms inside <dl> elements.

<figcaption>
Defines a caption for a photo image.

<figure>
Applies markup to a photo image.

<hr>
Adds a horizontal line to the parent element.

<li>
Used to define an item within a list.

<menu>
A semantic alternative to <ul> tag.

<ol>
Defines an ordered list.

<p>
Defines a paragraph.

<pre>
Used to represent preformatted text. Typically rendered in the web browser using a monospace font.

<ul>
Unordered list

Inline tags
<a>
An anchor link to another HTML document.

<abbr>
Specifies that the containing text is an abbreviation or acronym.

<b>
Bolds the containing text. When used to indicate importance use <strong> instead.

<br>
A line break. Moves the subsequent text to a new line.

<cite>
Defines the title of creative work (for example a book, poem, song, movie, painting or sculpture). The text in the <cite> element is usually rendered in italics.

<code>
Indicates that the containing text is a block of computer code.

<data>
Indicates machine-readable data.

<em>
Emphasizes the containing text.

<i>
The containing text is displayed in italics. Used to indicate idiomatic text or technical terms.

<mark>
The containing text should be marked or highlighted.

<q>
The containing text is a short quotation.

<s>
Displays the containing text with a strikethrough or line through it.

<samp>
The containing text represents a sample.

<small>
Used to represent small text, such as copyright and legal text.

<span>
A generic element for grouping content for CSS styling.

<strong>
Displays the containing text in bold. Used to indicate importance.

<sub>
The containing text is subscript text, displayed with a lowered baseline.

<sup>
The containing text is superscript text, displayed with a raised baseline.

<time>
A semantic tag used to display both dates and times.

<u>
Displays the containing text with a solid underline.

<var>
The containing text is a variable in a mathematical expression.

Embedded content and media tags
<audio>
Used to embed audio in web pages.

<canvas>
Used to render 2D and 3D graphics on web pages.

<embed>
Used as a containing element for external content provided by an external application such as a media player or plug-in application. 

<iframe>
Used to embed a nested web page. 

<img>
Embeds an image on a web page.

<object>
Similar to <embed> but the content is provided by a web browser plug-in.

<picture>
An element that contains one <img> element and one or more <source> elements to offer alternative images for different displays/devices.

<video>
Embeds a video on a web page.

<source>
Specifies media resources for <picture>, <audio> and<video> elements.

<svg>
Used to define Scalable Vector Graphics within a web page.

Table tags
<table>
Defines a table element to display table data within a web page.

<thead>
Represents the header content of a table. Typically contains one <tr> element.

<tbody>
Represents the main content of a table. Contains one or more <tr>elements.

<tfoot>
Represents the footer content of a table. Typically contains one <tr> element.

<tr>
Represents a row in a table. Contains one or more <td> elements when used within <tbody> or <tfoot>. When used within <thead>, contains one or more <th> elements.

<td>
Represents a cell in a table. Contains the text content of the cell.

<th>
Defines a header cell of a table. Contains the text content of the header.

<caption>
Defines the caption of a table element.

<colgroup>
Defines a semantic group of one or more columns in a table for formatting.

<col>
Defines a semantic column in a table.

# meta data
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<head>
HTML <meta> tags 
Earlier in the course, you learned about meta tags and how you can leverage them to convey information to search engines to better categorize your pages. We recommend that you keep this cheat sheet handy when building your web applications. The structure of a meta tag is as follows.

Name 
The name of the property can be anything you like, although browsers usually expect a value they understand and can take an action upon. An example would be <meta name="author" content="name"> to state the author of the page. 

Content 

The content field specifies the property's value. For example, you can use <meta name="language" content="english">, to specify the language of the webpage to search engines. 

Charset 

The charset is a special field that lets you specify the character encoding used for the page so that the browser can display it properly. The most frequently used is utf-8, and you would add it to your HTML header as follows: <meta charset="UTF-8">  

HTTP-equiv 

This field stands for HTTP equivalent, and it’s used to simulate HTTP response headers. This is rare to see, and it’s recommended to use HTTP headers over HTML http-equiv meta tags. For example, the next tag would instruct the browser to refresh the page every 30 minutes: <meta http-equiv="refresh" content="30"> 


Basic meta tags (meta tags For SEO) 
<meta name="description"/> provides a brief description of the web page 

<meta name=”title”/> specifies the title of the web page 

<meta name="author" content="name"> specifies the author of the web page  

<meta name="language" content="english"> specifies the language of the web page 



<meta name="robots" content="index,follow" /> tells search engines how to crawl or index a certain page 

<meta name="google"/> tells Google not to show the sitelinks search box for your page when showing search results 

<meta name="googlebot" content=”notranslate” /> tells Google you don’t want to provide an automatic translation for your page if the user uses a different language  

<meta name="revised" content="Sunday, July 18th, 2010, 5:15 pm" /> specifies the last modified date and time on which you have made certain changes 

<meta name="rating" content="safe for kids"> specifies the expected audience for your page 

<meta name="copyright" content="Copyright 2022"> specifies a Copyright 


<meta http-equiv="..."/> tags
 <meta http-equiv="content-type" content="text/html"> specifies the format of the document returned by the server 

<meta http-equiv="default-style"/>  specifies the format of the styling document 

<meta http-equiv="refresh"/> specifies the duration of the page before it’s considered stale 

<meta http-equiv=”Content-language”/> specifies the language of the page 

<meta http-equiv="Cache-Control" content="no-cache"> instructs the browser how to cache your page 

Responsive design/mobile meta tags 
<meta name="format-detection" content="telephone=yes"/> indicates that telephone numbers should appear as hypertext links that can be clicked to make a phone call 

<meta name="HandheldFriendly" content="true"/> specifies that the page can be properly visualized on mobile devices 

<meta name="viewport" content="width=device-width, initial-scale=1.0"/> specifies the area of the window in which web content can be seen

#  Open Graph Protocol
it is used to define how the share link preview is created


https://www.coursera.org/learn/html-and-css-in-depth/supplement/ddPad/additional-resources

if you need to seperate radio buttons in different category you need to use
<fieldset>
</fieldset>

Cheat sheet: Interactive form elements
When filling in HTML forms, we expect users to abide by certain rules, like using numbers when asked to, or properly formatting a URL or an email when needed. However, humans are prone to errors and in some cases, they may overlook some of the data they input. That’s why it’s important to ensure the shape of the data we expect in each field is correct. HTML form validation is a set of attributes we can add to form inputs to perform automatic validation on the user’s behalf. 
The most important attributes you’ll find yourself using for validation are the following.

Required
Denotes a mandatory input that the user can’t leave empty. It can be used with any input type, like password, radio, text and so on. 

<input type="text" id="firstName" name="firstName" required> 

Maxlength 
Specifies the maximum length of a text input, in other words, the maximum number of characters that can be entered for a specific field. If provided, it will prevent the user from entering more characters than the limit. 

<input type="text" id="description" name="description" maxlength="50"> 

Minlength 
Specifies the minimum length of a text input. If set, the input will not accept fewer characters than those specified. 

<input type="password" id="password" name="password" minlength="8"> 

Min and max attributes 
Determine the minimum and maximum values allowed for an input field. They are usually applied to numerical text inputs, range inputs or dates. 

<input type="number" id="quantity" name="quantity" min="1" max="10"> 

<input type="range" id="volume" name="volume" min="1" max="100"> 

Multiple 
Indicates that the user can enter more than one value in a single input field. This attribute can only be used for email and file input types. 

<input type="file" id="gallery" name="gallery" multiple> 

Pattern 
Defines a particular pattern that an input field value has to fulfill to be considered valid. This attribute expects a regular expression to specify the pattern. It works with text, date, search, URL, tel, email and password input types. For example, you can restrict phone numbers to be only from the UK. 
<input type="tel" id="phone" name="phone" pattern=”^(?:0|\+?44)(?:\d\s?){9,10}$” > 

# Links
(html5-form-validation)[https://www.the-art-of-web.com/html/html5-form-validation/]
(html5-canvas)[https://www.tutorialrepublic.com/html-tutorial/html5-canvas.php]