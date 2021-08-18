import styled from "styled-components/native";

export const Container = styled.ImageBackground`
    flex: 1;
`

export const OverlayArea = styled.SafeAreaView`
    flex: 1;
    background-color: rgba(0,0,0,0.85);
    padding-top: 60px;
    padding-left: 20px;
    padding-right: 20px;
`

export const FlatItem = styled.FlatList`
    margin-top: 30px;
`

export const FlatView = styled.TouchableOpacity`
    padding: 6px 22px;
    border-radius: 10px;
    margin-right: 10px;
`

export const PriceArea = styled.View`
    position: absolute;
    right: 10px;
    top: 10px;
    width: 78px;
    height: 44px;
    background-color: rgba(255,255,255,0.6);
    z-index: 3;
    border-radius: 40px;
    justify-content: center;
    align-items: center;
`

export const ButtonGo = styled.TouchableOpacity`
    width: 90%;
    height: 36px;
    background-color: white;
    margin-bottom: 10px;
    margin-top: 2px;
    opacity: 0.85;
    justify-content: center;
    align-items: center;
    border-radius: 18px;
`

export const GuiaInfo = styled.TouchableOpacity`
    width: 100%;
    background-color: transparent;
    margin-bottom: 14px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
`

export const ImageGuia = styled.Image`
    width: 140px;
    height: 140px;
    border-radius: 100px;
    margin-right: 16px;
    border-color: rgba(255,255,255,0.15);
    border-width: 2px;
`

export const ButtonGuia = styled.TouchableOpacity`
    background-color: rgba(255,255,255,0.2);
    padding: 4px 28px;
    margin-top: 5px;
    opacity: 0.85;
    justify-content: center;
    align-items: center;
    border-radius: 18px;
`

export const PousadaItem = styled.TouchableOpacity`
    width: 100%;
    margin-bottom: 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
`

export const PousadaImage = styled.Image`
    width: 140px;
    height: 140px;
    border-radius: 100px;
    margin-right: 16px;
    border-color: rgba(255,255,255,0.3);
    border-width: 3px;
`


export const TextGreen = styled.Text`
    color: #18d9c7;
    font-size: 16px;
    margin-top: 20px;
    margin-bottom: 20px;
`

export const TextBoldBig = styled.Text`
    color: #fff;
    font-size: 28px;
    margin: 0px;
`

export const FlatAreaImage = styled.TouchableOpacity`
    width: 300px;
    height: 412px;
`

export const FlatImage = styled.ImageBackground`
    flex: 1;
    height: 100%;
    margin-right: 20px;
`