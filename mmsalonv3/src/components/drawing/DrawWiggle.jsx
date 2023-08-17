import SvgConstructor from "./SvgConstructor";

const DrawWiggle = () => {
    // Initial values of Wiggle Path
    const mxInit = 0;
    const myInit = 4;
    const cx1Init = 30;
    const cy1Init = -30;
    const cx2Init = 70;
    const cy2Init = 60;
    const endPointX = 100;
    const endPointY = 100;

    // Define Initial Path
    const initPath = "M" + mxInit + "," + myInit + " C" + cx1Init + "," + cy1Init + " " + cx2Init + "," + cy2Init + " " +  endPointX + "," + endPointY;

    const pathD1 = "M 0 5 C 30 60 70 -30 100 100"; // 0

    const pathD2 = "M 0 6 C 35 -25 75 55 100 100"; // 1 
    const pathD3 = "M 0 6 C 35 50 75 -25 100 100"; // 2 

    const pathD4 = "M 0 7 C 40 -20 80 50 100 100"; // 3 
    const pathD5 = "M 0 7 C 40 50 80 -20 100 100"; // 4

    const pathD6 = "M 0 8 C 45 -15 85 45 100 100"; // 5
    const pathD7 = "M 0 8 C 45 45 85 -15 100 100"; // 6

    // Inverse 
    const pathD8 = "M 0 -5 C -30 10 -30 100 100";

    const pathD9 = "M 0 -6 C -35 25 0 -15 100 100";
    const pathD10 = "M 0 -6 C -35 15 5 -15 100 100";

    const pathD11 = "M 0 -7 C -40 5 10 -15 100 100";
    const pathD12 = "M 0 -7 C -40 10 15 -15 100 100";

    const pathD13 = "M 0 -8 C -45 5 20 -15 100 100";
    const pathD14 = "M 0 -8 C -45 5 20 -15 100 100";
    


    return (
        <>
            
            {/* SVG 1 */}
            <SvgConstructor 
                initialSvgId = "initialWiggle" 
                initialSvgHeight = "100%"
                initialSvgWidth = "100%"
                initialSvgViewBox = "0 0 100 100"
                initialSvgPreserveAspectRatio = "none"
                initialPathId = "initialPathWiggle"
                initialPathFill = "none"
                initialPathStroke = "black"
                initialPathStrokeWidth = "0.05"
                initialPathD = {initPath}
                addedPath = {pathD1}
            />

            {/* SVG 2 */}
            <SvgConstructor 
                initialSvgId = "initialWiggle" 
                initialSvgHeight = "100%"
                initialSvgWidth = "100%"
                initialSvgViewBox = "0 0 100 100"
                initialSvgPreserveAspectRatio = "none"
                initialPathId = "initialPathWiggle"
                initialPathFill = "none"
                initialPathStroke = "black"
                initialPathStrokeWidth = "0.05"
                initialPathD = {pathD2}
                addedPath = {pathD3}
            />

            {/* SVG 3 */}
            <SvgConstructor 
                initialSvgId = "initialWiggle" 
                initialSvgHeight = "100%"
                initialSvgWidth = "100%"
                initialSvgViewBox = "0 0 100 100"
                initialSvgPreserveAspectRatio = "none"
                initialPathId = "initialPathWiggle"
                initialPathFill = "none"
                initialPathStroke = "black"
                initialPathStrokeWidth = "0.05"
                initialPathD = {pathD4}
                addedPath = {pathD5}
            />
            {/* SVG 4 */}
            <SvgConstructor 
                initialSvgId = "initialWiggle" 
                initialSvgHeight = "100%"
                initialSvgWidth = "100%"
                initialSvgViewBox = "0 0 75 75"
                initialSvgPreserveAspectRatio = "none"
                initialPathId = "initialPathWiggle"
                initialPathFill = "none"
                initialPathStroke = "black"
                initialPathStrokeWidth = "0.05"
                initialPathD = {initPath}
                addedPath = {pathD4}
            />
            {/* SVG 5 */}
            <SvgConstructor 
                initialSvgId = "initialWiggle" 
                initialSvgHeight = "100%"
                initialSvgWidth = "100%"
                initialSvgViewBox = "0 0 75 75"
                initialSvgPreserveAspectRatio = "none"
                initialPathId = "initialPathWiggle"
                initialPathFill = "none"
                initialPathStroke = "black"
                initialPathStrokeWidth = "0.05"
                initialPathD = {initPath}
                addedPath = {pathD5}
            />
            {/* SVG 6 */}
            <SvgConstructor 
                initialSvgId = "initialWiggle" 
                initialSvgHeight = "100%"
                initialSvgWidth = "100%"
                initialSvgViewBox = "0 0 75 75"
                initialSvgPreserveAspectRatio = "none"
                initialPathId = "initialPathWiggle"
                initialPathFill = "none"
                initialPathStroke = "black"
                initialPathStrokeWidth = "0.05"
                initialPathD = {initPath}
                addedPath = {pathD6}
            />
            {/* SVG 7 */}
            <SvgConstructor 
                initialSvgId = "initialWiggle" 
                initialSvgHeight = "100%"
                initialSvgWidth = "100%"
                initialSvgViewBox = "0 0 75 75"
                initialSvgPreserveAspectRatio = "none"
                initialPathId = "initialPathWiggle"
                initialPathFill = "none"
                initialPathStroke = "black"
                initialPathStrokeWidth = "0.05"
                initialPathD = {initPath}
                addedPath = {pathD7}
            />
            {/* SVG 8 */}
            <SvgConstructor 
                initialSvgId = "initialWiggle" 
                initialSvgHeight = "100%"
                initialSvgWidth = "100%"
                initialSvgViewBox = "0 0 75 75"
                initialSvgPreserveAspectRatio = "none"
                initialPathId = "initialPathWiggle"
                initialPathFill = "none"
                initialPathStroke = "black"
                initialPathStrokeWidth = "0.05"
                initialPathD = {initPath}
                addedPath = {pathD8}
            />
            {/* SVG 9 */}
            <SvgConstructor 
                initialSvgId = "initialWiggle" 
                initialSvgHeight = "100%"
                initialSvgWidth = "100%"
                initialSvgViewBox = "0 0 75 75"
                initialSvgPreserveAspectRatio = "none"
                initialPathId = "initialPathWiggle"
                initialPathFill = "none"
                initialPathStroke = "black"
                initialPathStrokeWidth = "0.05"
                initialPathD = {initPath}
                addedPath = {pathD9}
            />
            {/* SVG 10 */}
            <SvgConstructor 
                initialSvgId = "initialWiggle" 
                initialSvgHeight = "100%"
                initialSvgWidth = "100%"
                initialSvgViewBox = "0 0 75 75"
                initialSvgPreserveAspectRatio = "none"
                initialPathId = "initialPathWiggle"
                initialPathFill = "none"
                initialPathStroke = "black"
                initialPathStrokeWidth = "0.05"
                initialPathD = {initPath}
                addedPath = {pathD10}
            />
            {/* SVG 11 */}
            <SvgConstructor 
                initialSvgId = "initialWiggle" 
                initialSvgHeight = "100%"
                initialSvgWidth = "100%"
                initialSvgViewBox = "0 0 75 75"
                initialSvgPreserveAspectRatio = "none"
                initialPathId = "initialPathWiggle"
                initialPathFill = "none"
                initialPathStroke = "black"
                initialPathStrokeWidth = "0.05"
                initialPathD = {initPath}
                addedPath = {pathD11}
            />
            {/* SVG 12 */}
            <SvgConstructor 
                initialSvgId = "initialWiggle" 
                initialSvgHeight = "100%"
                initialSvgWidth = "100%"
                initialSvgViewBox = "0 0 75 75"
                initialSvgPreserveAspectRatio = "none"
                initialPathId = "initialPathWiggle"
                initialPathFill = "none"
                initialPathStroke = "black"
                initialPathStrokeWidth = "0.05"
                initialPathD = {initPath}
                addedPath = {pathD12}
            />
            {/* SVG 13 */}
            <SvgConstructor 
                initialSvgId = "initialWiggle" 
                initialSvgHeight = "100%"
                initialSvgWidth = "100%"
                initialSvgViewBox = "0 0 75 75"
                initialSvgPreserveAspectRatio = "none"
                initialPathId = "initialPathWiggle"
                initialPathFill = "none"
                initialPathStroke = "black"
                initialPathStrokeWidth = "0.05"
                initialPathD = {initPath}
                addedPath = {pathD13}
            />
            {/* SVG 14 */}
            <SvgConstructor 
                initialSvgId = "initialWiggle" 
                initialSvgHeight = "100%"
                initialSvgWidth = "100%"
                initialSvgViewBox = "0 0 75 75"
                initialSvgPreserveAspectRatio = "none"
                initialPathId = "initialPathWiggle"
                initialPathFill = "none"
                initialPathStroke = "black"
                initialPathStrokeWidth = "0.05"
                initialPathD = {initPath}
                addedPath = {pathD14}
            />
        </>
    )
}

export default DrawWiggle;