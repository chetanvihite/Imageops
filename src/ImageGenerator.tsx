
import { useState } from "react"
import { ScaleRotateMirror } from "./ScaleRotateMirror";
import { RenderColorInput, RenderText } from "./RenderComponents";
import { ImageRenderer } from "./ImageRenderer";
import { useRecalculateTransform } from "./useRecalculateTransform";

export const ImageGenerator = () => {
    const [imageSource, setImageSource] = useState<string>('https://www.mckenneys.com/wp-content/uploads/2021/06/Game-of-Thrones-winter-is-coming-Ned-Stark.jpg');
    const [showImage, setShowImage] = useState<boolean>(false);
    const [topSectionText, setTopSectionText] = useState<string>();
    const [bottomSectionText, setBottomSectionText] = useState<string>();
    const [selectedColor, setSelectedColor] = useState<string>('#000000');
    const [scale, setScale] = useState<string>();
    const [rotate, setRotate] = useState<string>();
    const [mirror, setMirror] = useState<boolean>(false);
    const [imageStyle, setImageStyle] = useState({transform: ''});
    const [calculateTransform] = useRecalculateTransform();

    const loadImage = () => {
        imageSource && setShowImage(true);
    }
    const handleScale = (e: React.ChangeEvent<HTMLInputElement>) => {
        const scaledValue = e.target.value;
        setScale(scaledValue);
        const transformStyle = calculateTransform({scale: scaledValue, rotate, mirror});
        setImageStyle(transformStyle);
    }
    const handleRotate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rotateValue = e.target.value; 
        setRotate(rotateValue);
        const transformStyle = calculateTransform({scale, rotate: rotateValue, mirror});
        setImageStyle(transformStyle);
    }
    const handleMirror = () => { 
        const mirrorValue = !mirror;
        setMirror(mirrorValue)
        const transformStyle = calculateTransform({scale, rotate, mirror: mirrorValue});
        setImageStyle(transformStyle);
    }
    const handleTopText = (e: React.ChangeEvent<HTMLInputElement>) => {setTopSectionText(e.target.value)}
    const handleBottomText = (e: React.ChangeEvent<HTMLInputElement>) => {setBottomSectionText(e.target.value)}
    const handleColor = (e: React.ChangeEvent<HTMLInputElement>) => {setSelectedColor(e.target.value)}
    const handleImageSrc = (e: React.ChangeEvent<HTMLInputElement>) => {setImageSource(e.target.value)}
    const imageTextStyle = {width: '80%', height: '1.2rem'}

    return (
        
    <div className="container">
            <div className="row">
                <div className="image-group">
                    <RenderText style={imageTextStyle} value={imageSource} onChangeHandler={handleImageSrc} />
                    <button onClick={loadImage}>Load Image</button>
                </div>
            </div>

            <div className="row">
                <div className="input-group">
                    <label>Top Text: </label>
                    <RenderText value={topSectionText} onChangeHandler={handleTopText} /> 
                </div>
                <div className="input-group">
                    <label>Bottom Text: </label>
                    <RenderText value={bottomSectionText} onChangeHandler={handleBottomText} /> 
                </div>
                <div className="input-group">
                    <label>Text Color: </label>
                    <RenderColorInput value={selectedColor} onChangeHandler={handleColor} />
                </div> 
            </div>

            <div className="row">
                <ScaleRotateMirror 
                    scale={scale}
                    rotate={rotate} 
                    mirror={mirror} 
                    
                    handleScale={handleScale} 
                    handleRotate={handleRotate} 
                    handleMirror={handleMirror}                    
                />
            </div>

        <div className="imageContainer">
        {
            showImage && imageSource && <>
                <ImageRenderer 
                    imageSource={imageSource} 
                    selectedColor={selectedColor} 
                    imageStyle={imageStyle} 
                    topText={topSectionText} 
                    bottomText={bottomSectionText} 
                />
            </>
        }
        </div>

    </div>)
}