# three-js-mouseEvents
Mouse events class for monitoring hoverEvents in threejs.

1 **inside**
2. **outside**
3. **mouseenter**
4. **mouseleave**


Import and instantiate the object, last two parameters are optional. Should you decide to pass the mouse coordinates, don't forget to normalize them. 
```js
import {HoverEventsMonitor} from "xxx";

const mouse = new THREE.Vector2();
window.addEventListener("mousemove", (e) => {
  mouse.x = (e.clientX / sizes.width) * 2 - 1;
  mouse.y = -(e.clientY / sizes.height) * 2 + 1;
});

const hoverEventsMonitor = new HoverEventsMonitor(
  "outside",
  [object1, object2, ...objectInfinity],
  camera,
  true,
  mouse
);
```

And in the animation loop:
```js
 hoverEventsMonitor.checkHoverEvents(mouse);
```

The class can return the current hovered state, hoveredObjects, and all original objects passed upon instantiation. All can be get at once, or individually.
```js
   const hoverData = hoverEventsMonitor.getAllHoverData();
   const hoveredObjects = hoverEventsMonitor.getHoveredObjects();
   const getAllObjects = hoverEventsMonitor.getAllObjects();
```


*ps. Does not check for mouse click.*

