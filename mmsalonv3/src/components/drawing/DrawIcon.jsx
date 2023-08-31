
const DrawIcon = () => {

    const pathA ="M863.6898 436.46831c-7.12813 18.94262-90.98145 162.94563-77.05591 173.55749 42.50564-47.20244 167.55993-169.55899 212.36017-161.70534-37.12082 44.82043-89.84002 52.57957-218.42149 494.63064 2.52917-35.6684 1.39251-65.22709-11.96825-74.41228-3.27123-2.24889 184.65163-391.44127 192.44583-383.95307-93.67748 23.20847-168.87058 147.45589-188.4508 162.88549-12.11482-21.67544 72.12276-180.3005 72.83813-185.18655 2.61934-6.45661-152.75953 96.87504-233.42082 272.14016 0 0 16.99069-29.46857 7.03722-54.05344 292.13601-367.95757-43.92959-97.99759-43.92959-97.99759-15.99846 3.96849 114.43886-117.05981 165.30745-99.46709 0 0 14.4953 10.03521 17.84037 28.9906 0 0 79.36223-75.63169 105.41769-75.42902z";

    return (
        <>
            <svg 
                xmlns="http://www.w3.org/2000/svg"
                xmlns:svg="http://www.w3.org/2000/svg"
                id = "iconMain"
                height = "100%"
                width = "100%"
                viewBox = "0 0 100 100"
                preserveAspectRatio = "none">
                <path
                    id = "iconFirstPath"
                    fill = "black"
                    stroke = "black"
                    strokeWidth = "0.05px"
                    d = {pathA}
                ></path> 
                </svg>
            {/*
            <SvgConstructor 
                svgId = "iconFirst" 
                svgHeight = "100%"
                svgWidth = "100%"
                svgViewBox = "0 0 100 100"
                svgPreserveAspectRatio = "none"
                pathId = "iconFirstPath"
                pathFill = "none"
                pathStroke = "black"
                pathStrokeWidth = "0.05"
                pathD = {pathA}
            />
            */}
        </>
    )

}

export default DrawIcon;