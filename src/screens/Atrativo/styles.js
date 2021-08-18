import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
`

export const ImageMetade = styled.ImageBackground`
    width: 100%;
    height: 70%;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`

export const Overlay = styled.View`
    width: 100%;
    height: 100%;
    padding: 60px 20px 0px 20px;
    justify-content: space-between;
    background-color: rgba(0,0,0,0.5);
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
`

export const ButtonArea = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    background-color: transparent;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
`

export const InfoArea = styled.View`
    width: 100%;
    border-radius: 20px;
    padding: 20px;
    justify-content: center;
    align-items: center;
`

export const InfoBottomArea = styled.View`
    width: 100%;
    padding: 20px 0px;
`

export const InfoAreaBottomText = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`

export const PhotosArea = styled.View`
    width: 100%;
    height: 100px;
    background-color: transparent;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`

export const ImageBox = styled.TouchableOpacity`
    flex: 1;
    margin: 5px;
`

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const IconArea = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    background-color: transparent;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
`

export const AreaInfo = styled.View`
    flex: 1;
    padding: 20px;
    background-color: #fff;
`