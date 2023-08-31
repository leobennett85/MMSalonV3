const SvgConstructor = (
  svgId, 
  svgHeight,
  svgWidth,
  svgViewBox,
  svgPreserveAspectRatio,
  pathId,
  pathFill,
  pathStroke,
  pathStrokeWidth,
  pathD
) => {

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      xmlns:svg="http://www.w3.org/2000/svg"
      style={{ position: 'fixed', left: 0 }}
      id = {svgId}
      height = {svgHeight}
      width = {svgWidth}
      viewBox = {svgViewBox}
      preserveAspectRatio = {svgPreserveAspectRatio}>
      <path
        id = {pathId}
        fill = {pathFill}
        stroke = {pathStroke}
        strokeWidth = {pathStrokeWidth}
        d = {pathD}
      ></path> 
    </svg>
  );
}

export default SvgConstructor;