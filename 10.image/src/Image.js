import nat from "./image/nature.jpg"  // We have to import image from src folder

export function Image() {
    return <>
        <img src={process.env.PUBLIC_URL + "/car.jpg"} alt="" />  {/* When our image is in public folder */}
        
        <img src={nat} alt="" />   {/* When our image in app foder */}
    </>
}