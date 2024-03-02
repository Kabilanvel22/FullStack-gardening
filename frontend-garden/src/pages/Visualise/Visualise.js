import React, { useState, useRef, useEffect } from 'react';
import "../../assets/css/Visualise.css"

const CanvasComponent = () => {
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentTool, setCurrentTool] = useState('pen');
  const [currentColor, setCurrentColor] = useState('#000000');
  const [currentSize, setCurrentSize] = useState(2);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.lineWidth = currentSize;
    context.lineJoin = 'round';
    context.lineCap = 'round';
    setCtx(context);
  }, [currentSize]);

  const startDrawing = (e) => {
    const { clientX, clientY } = e;
    setStartX(clientX - canvasRef.current.offsetLeft);
    setStartY(clientY - canvasRef.current.offsetTop);
    ctx.beginPath();
    ctx.moveTo(startX, startY);
  }

  const draw = (e) => {
    if (!isDrawing) return;

    const { clientX, clientY } = e;
    ctx.lineTo(clientX - canvasRef.current.offsetLeft, clientY - canvasRef.current.offsetTop);
    ctx.strokeStyle = currentColor;
    ctx.stroke();
  }

  const handleMouseDown = (e) => {
    setIsDrawing(true);
    startDrawing(e);
  }

  const handleMouseUp = () => {
    setIsDrawing(false);
  }

  const handleMouseMove = (e) => {
    draw(e);
  }

  const selectTool = (tool) => {
    setCurrentTool(tool);
  }

  const selectColor = (color) => {
    setCurrentColor(color);
  }

  const selectSize = (size) => {
    setCurrentSize(size);
  }

  const handleCanvasClick = (e) => {
    if (currentTool === 'rectangle') {
      // Draw Rectangle
      const { clientX, clientY } = e;
      const endX = clientX - canvasRef.current.offsetLeft;
      const endY = clientY - canvasRef.current.offsetTop;
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      ctx.strokeStyle = currentColor;
      ctx.strokeRect(startX, startY, endX - startX, endY - startY);
    } else if (currentTool === 'circle') {
      // Draw Circle
      const { clientX, clientY } = e;
      const endX = clientX - canvasRef.current.offsetLeft;
      const endY = clientY - canvasRef.current.offsetTop;
      const radius = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      ctx.strokeStyle = currentColor;
      ctx.beginPath();
      ctx.arc(startX, startY, radius, 0, 2 * Math.PI);
      ctx.stroke();
    } else if (currentTool === 'line') {
      // Draw Line
      const { clientX, clientY } = e;
      const endX = clientX - canvasRef.current.offsetLeft;
      const endY = clientY - canvasRef.current.offsetTop;
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      ctx.strokeStyle = currentColor;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
    } else if (currentTool === 'triangle') {
      // Draw Triangle
      const { clientX, clientY } = e;
      const endX = clientX - canvasRef.current.offsetLeft;
      const endY = clientY - canvasRef.current.offsetTop;
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      ctx.strokeStyle = currentColor;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.lineTo(startX - (endX - startX), endY);
      ctx.closePath();
      ctx.stroke();
    } else if (currentTool === 'ellipse') {
      // Draw Ellipse
      const { clientX, clientY } = e;
      const endX = clientX - canvasRef.current.offsetLeft;
      const endY = clientY - canvasRef.current.offsetTop;
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      ctx.strokeStyle = currentColor;
      ctx.beginPath();
      ctx.moveTo((startX + endX) / 2, startY);
      ctx.ellipse((startX + endX) / 2, (startY + endY) / 2, Math.abs(endX - startX) / 2, Math.abs(endY - startY) / 2, 0, 0, 2 * Math.PI);
      ctx.stroke();
    }
  }

  return (
    <>
      <div className="visualise-container">
        <div>
          <button onClick={() => selectTool('pen')}>Pen</button>
          <button onClick={() => selectTool('pencil')}>Pencil</button>
          <button onClick={() => selectTool('eraser')}>Eraser</button>
          <button onClick={() => selectTool('rectangle')}>Rectangle</button>
          <button onClick={() => selectTool('circle')}>Circle</button>
          <button onClick={() => selectTool('line')}>Line</button>
          <button onClick={() => selectTool('triangle')}>Triangle</button>
          <button onClick={() => selectTool('ellipse')}>Ellipse</button>
          <input type="color" onChange={(e) => selectColor(e.target.value)} value={currentColor} />
          <button onClick={() => selectSize(2)}>Small</button>
          <button onClick={() => selectSize(5)}>Medium</button>
          <button onClick={() => selectSize(10)}>Large</button>
        </div>
        <canvas
          ref={canvasRef}
          width={800}
          height={600}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onClick={handleCanvasClick}
          style={{ border: '1px solid black' }}
        />
      </div>
    </>
  );
}

export default CanvasComponent;
