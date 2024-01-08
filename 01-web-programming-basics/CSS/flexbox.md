# Intro

Flexbox is a powerful layout model in CSS that provides a more efficient way to design and organize elements within a container. It's particularly useful for building responsive and flexible layouts. Here's a comprehensive breakdown of key concepts and properties in Flexbox:

## Flex Container and Flex Items

- **Flex Container (`display: flex;`):** To create a flex container, set `display: flex;` on the parent element. This establishes a flex context for its direct children, turning them into flex items.
  
- **Flex Items:** Child elements of a flex container become flex items. These items can be arranged and managed using various Flexbox properties.

## Flex Container Properties

1. **`flex-direction`:** Determines the direction of the main axis along which flex items are laid out (row, row-reverse, column, column-reverse).
   
2. **`justify-content`:** Aligns flex items along the main axis (start, end, center, space-between, space-around, space-evenly).

3. **`align-items`:** Aligns flex items along the cross axis (start, end, center, stretch, baseline).

4. **`flex-wrap`:** Controls whether flex items are forced into a single line or can wrap onto multiple lines (nowrap, wrap, wrap-reverse).

5. **`align-content`:** Aligns flex lines within the flex container when there's extra space in the cross-axis (similar to align-items but for multiple lines).

## Flex Item Properties

1. **`flex`:** Combines `flex-grow`, `flex-shrink`, and `flex-basis` to determine how a flex item grows, shrinks, and its initial size.

2. **`flex-grow`:** Defines the ability for a flex item to grow relative to other items in the container.

3. **`flex-shrink`:** Defines the ability for a flex item to shrink relative to other items in the container.

4. **`flex-basis`:** Specifies the initial size of a flex item before the remaining space is distributed.

5. **`order`:** Changes the order in which flex items appear within the container.

6. **`align-self`:** Overrides the alignment set by the container for individual flex items.

## How Flexbox Works

- **Main Axis and Cross Axis:** Flex items are laid out along the main axis (determined by `flex-direction`) and can be aligned along the cross axis.
  
- **Flexible Sizing:** Flex items can expand or shrink based on available space and the flex properties set on them.
  
- **Alignment:** Flexbox provides various alignment options, allowing control over both the main axis and cross axis alignment for flex items.

## Advantages of Flexbox

- Simplifies complex layouts.
- Provides a more efficient way to manage alignment and spacing.
- Offers flexibility for responsive designs without relying heavily on floats or positioning.

Flexbox is incredibly versatile and empowers developers to create a wide range of layouts and designs with ease, making it a valuable tool for building modern web interfaces.

# Flexbox Froggy

> https://flexboxfroggy.com

1. `justify-content` property aligns items horizontally. (start, end, center, space-between, space-around, space-evenly)
2. `align-items` property aligns items vertically. (start, end, center, stretch, baseline)
3. `flex-direction` property defines the direction items are placed in the container. (row, row-reverse, column, column-reverse) **Notice that when you set the direction to a reversed row or column, start and end are also reversed** and **Notice that when the flex direction is a _column_, justify-content changes to the vertical and align-items to the horizontal**. row-reverse = align-items and justify-content tak ubah.
4. Sometimes reversing the row or column order of a container is not enough. In these cases, we can apply the `order` property to individual items. By default, items have a value of 0, but we can use this property to also set it to a positive or negative integer value (-2, -1, 0, 1, 2). negative didepan, positive dibelakang.
5. Another property you can apply to individual items is `align-self`. This property accepts the same values as `align-items` and its value for the specific item.

## order

The `order` property in Flexbox allows you to change the visual order of flex items within their container, regardless of their actual position in the HTML structure. By default, flex items appear in the order they are written in the HTML.

### Usage:

- **Value:** It takes a number (integer) as its value.
- **Default:** 0
- **Negative Values:** Items with negative order values appear before items with a value of 0.
- **Higher Values:** Items with higher values appear after items with lower values.

### Example:

Let's consider an example where you have three divs inside a flex container:

```html
<div class="flex-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

```css
.item {
  width: 100px;
  height: 100px;
  background-color: lightblue;
  margin: 5px;
}

.flex-container {
  display: flex;
}
```

By default, these items would appear in the order 1, 2, 3.

Now, let's apply the `order` property to change the order of the items:

```css
.item:nth-child(1) {
  order: 3;
}

.item:nth-child(2) {
  order: 1;
}

.item:nth-child(3) {
  order: 2;
}
```

With this setup, despite the original order in the HTML, the items will visually rearrange themselves as follows:

- Item 2 will appear first (order: 1)
- Item 3 will appear second (order: 2)
- Item 1 will appear last (order: 3)

This property is helpful for reordering elements within a flex container without needing to alter the HTML structure, making it easier to create responsive layouts or change the visual hierarchy of elements based on different screen sizes or design needs.