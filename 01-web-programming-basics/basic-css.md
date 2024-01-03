# Fundamental concepts in CSS

1. **Selectors:** These are patterns used to select HTML elements that you want to style. Selectors can be element names, classes, IDs, attributes, etc.

2. **Properties:** These are the aspects of an element that you can change, such as color, font size, width, height, etc.

3. **Values:** These are the settings you apply to the properties. For instance, if the property is "color," the value could be "red," "#000000," or "rgb(255, 0, 0)."

4. **Cascade and Specificity:** CSS follows a cascading order where styles can be inherited, overridden, or merged based on rules like specificity (how specific a selector is) and inheritance (styles passed down from parent elements).

5. **Box Model:** It defines the space an element occupies. Each element in a document is considered as a rectangular box comprising content, padding, border, and margin.

6. **Units:** CSS uses various units for measurements like pixels (px), percentages (%), em, rem, vh (viewport height), vw (viewport width), etc., to define sizes and positions.

7. **Layouts:** Techniques like Flexbox and Grid help in creating responsive and flexible layouts, positioning elements within the document.

8. **Media Queries:** These allow for responsive design by specifying different styles for different devices or screen sizes.

9. **Transitions and Animations:** CSS enables the addition of motion and interactivity to elements through transitions and animations.

10. **Vendor Prefixes:** In the past, different browsers required different prefixes for experimental or cutting-edge CSS features. This practice has become less common with more standardized support for CSS features.

# Box Model

The box model is a fundamental concept in web development that describes how elements on a webpage are structured in terms of their dimensions and spacing. It consists of the following components:

1. **Content:** The actual content of the box, such as text, images, or other media.

2. **Padding:** The space between the content and the border. It adds internal space within the element.

3. **Border:** A line that surrounds the padding. It defines the boundary of the element.

4. **Margin:** The space between the border and the adjacent elements. It provides external space around the element.

Here's a brief overview:

```
+-----------------------------+
|          Margin             |
| +-------------------------+ |
| |        Border           | |
| | +---------------------+ | |
| | |       Padding       | | |
| | | +-----------------+ | | |
| | | |    Content      | | | |
| | | +-----------------+ | | |
| | +---------------------+ | |
| +-------------------------+ |
+-----------------------------+
```

In CSS, you can control these aspects using properties like `width`, `height`, `padding`, `border`, and `margin`. For example:

```css
.box {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 2px solid #000;
  margin: 10px;
}
```

This CSS rule would create a box with a total width of 240px (200px content + 2 * 20px padding + 2 * 2px border + 2 * 10px margin). Adjusting these properties allows for precise control over the layout and spacing of elements on a webpage.

> css, context, reducer, next, redux, mysql

# Flexbox

Using Flexbox with an image can help in controlling its placement and alignment within a container. Here's an example of how you might use Flexbox to arrange an image within a container:

HTML:
```html
<div class="container">
  <img src="image.jpg" alt="Description of the image">
</div>
```

CSS:
```css
.container {
  display: flex;
  justify-content: center; /* Centers content along the main axis (horizontally) */
  align-items: center; /* Centers content along the cross axis (vertically) */
  height: 300px; /* Set the height of the container */
  border: 1px solid #ccc; /* Adding a border for visualization */
}

img {
  max-width: 100%; /* Ensures the image doesn't exceed the container's width */
  max-height: 100%; /* Ensures the image doesn't exceed the container's height */
  /* You can also add additional styles to the image as needed */
}
```

In this example:

- The container is set as a flex container using `display: flex`.
- `justify-content: center` horizontally centers the image within the container.
- `align-items: center` vertically centers the image within the container.
- The image has `max-width: 100%` and `max-height: 100%` to ensure it doesn't exceed the dimensions of the container while maintaining its aspect ratio.

You can adjust the container's size, add margins or padding, or apply other styles as needed to achieve the desired layout and appearance.

# Grid Box

To create a basic grid layout, you can use the CSS Grid Layout module. Here's a simple example:

HTML:

```html
<div class="grid-container">
  <div class="grid-item">Item 1</div>
  <div class="grid-item">Item 2</div>
  <div class="grid-item">Item 3</div>
  <div class="grid-item">Item 4</div>
  <!-- Add more grid items as needed -->
</div>
```

CSS:

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Adjust the number of columns as needed */
  gap: 10px; /* Adjust the gap between grid items */
}

.grid-item {
  background-color: #eee; /* Set a background color or other styles */
  padding: 20px; /* Set padding as needed */
  text-align: center; /* Center content within each grid item */
}
```

In this example, we have a grid container with three columns, and each grid item contains some placeholder text. Adjust the `grid-template-columns` property to change the number of columns or their widths.

## grid-template-columns

The `grid-template-columns` property in CSS Grid is used to define the number and size of columns in a grid container. Let me break down the specific part you asked about:

```css
grid-template-columns: repeat(3, 1fr);
```

- `repeat(3, 1fr)`: This part is using the `repeat` function to generate a repeating pattern for the columns. It takes two arguments: the number of repetitions (`3` in this case) and the size of each repetition (`1fr`).

- `1fr`: The unit `fr` stands for "fractional unit." In this context, it means that the column should take up an equal share of the available space. So, when you have three columns with `1fr` each, they will share the available space equally, creating a flexible and responsive grid.

Here's a breakdown:

- `repeat(3, 1fr)`: Repeat the pattern three times.
- `1fr`: Each repetition takes up an equal fraction of the available space.

This is a common approach to creating a grid with three equal-width columns, and it's particularly useful for responsive designs where you want the columns to adjust based on the available space. You can modify the number of repetitions or adjust the size to suit your layout needs.


tech to learn 2024:
- nextjs, typescript, tailwind, mysql, framer motion => portfolio

- css, context, usereducer, Flexbox, grid, redux toolkit

3 hari lagi.
