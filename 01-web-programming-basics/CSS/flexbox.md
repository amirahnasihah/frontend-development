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
3. `flex-direction` property defines the direction items are placed in the container. (row, row-reverse, column, column-reverse)
4. 