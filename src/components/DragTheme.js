import React, { useState } from "react";
import Draggable from "react-draggable";
import "./drag-theme.css";

export default function DragTheme() {
  const initialState = {
    activeDrags: 0,
    deltaPosition: {
      x: 440,
      y: 440
    },
    controlledPosition: {
      x: -400,
      y: 200
    }
  };
  const [state, setState] = useState(initialState);
  const [show, setShow] = useState(true);

  const handleDrag = (e, ui) => {
    const { x, y } = state.deltaPosition;
    setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY
      }
    });
  };

  const onStart = () => {
    setState({ activeDrags: ++state.activeDrags });
  };

  const onStop = () => {
    setState({ activeDrags: --state.activeDrags });
  };

  // For controlled component
  const adjustXPos = e => {
    e.preventDefault();
    e.stopPropagation();
    const { x, y } = state.controlledPosition;
    setState({ controlledPosition: { x: x - 10, y } });
  };

  const adjustYPos = e => {
    e.preventDefault();
    e.stopPropagation();
    const { controlledPosition } = state;
    const { x, y } = controlledPosition;
    setState({ controlledPosition: { x, y: y - 10 } });
  };

  const onControlledDrag = (e, position) => {
    const { x, y } = position;
    setState({ controlledPosition: { x, y } });
  };

  const onControlledDragStop = (e, position) => {
    onControlledDrag(e, position);
    onStop();
  };

  const handleClick = () => {
    setShow(false);
  };

  const display = show ? "default" : "none";
  console.log(display);

  const dragHandlers = { onStart, onStop, defaultPosition: { x: 500, y: 20 } };
  const { deltaPosition, controlledPosition } = state;
  return (
    <>
      <Draggable bounds="parent" handle="strong" {...dragHandlers}>
        <div className="box" style={{ display: `${display}` }}>
          <strong className="cursor">
            <div className="top-bar">
              <h5>day-night.exe</h5>
              <div>
                <button>-</button>
                <button onClick={handleClick}>x</button>
              </div>
            </div>
          </strong>
          <div className="box-body" />
        </div>
      </Draggable>
    </>
  );
}
