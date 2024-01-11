# Grid

> https://cssgridgarden.com/


1. `grid-column-start`: Water only the areas that have carrots by using the `grid-column-start` property. For example, `grid-column-start`: 3; will water the area starting at the 3rd vertical grid line, which is another way of saying the 3rd vertical border from the left in the grid.

```css
#garden {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
  
}
```