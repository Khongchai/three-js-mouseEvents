type CustomMouseEvents = "mouseenter" | "mouseleave" | "outside" | "inside";

/**
 * Checks for 4 threejs pointer raycasting state:
 *              => inside, outside, mouseenter, and mouseleave,
 * and then returns the current state.
 *
 * getCurrentMouseEvent requires the current length of the array of raycasted objects.
 */
export class MouseEventsMonitor {
  state: CustomMouseEvents;

  constructor(initialState: CustomMouseEvents) {
    this.state = initialState;
  }

  getCurrentMouseEvent(hoveredObjsLength: number): CustomMouseEvents {
    if (hoveredObjsLength) {
      if (this.state === "outside") {
        return (this.state = "mouseenter");
      } else {
        return (this.state = "inside");
      }
    } else {
      if (this.state === "inside") {
        return (this.state = "mouseleave");
      } else {
        return (this.state = "outside");
      }
    }
  }
}
