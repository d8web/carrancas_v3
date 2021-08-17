import styled from "styled-components/native";

export const Container = styled.ImageBackground`
    flex: 1;
`

export const OverlayArea = styled.SafeAreaView`
    flex: 1;
    background-color: rgba(0,0,0,0.85);
    align-items: center;
    padding-top: 60px;
    padding-left: 20px;
    padding-right: 20px;
`

export const HeaderArea = styled.View`
    width: 100%;
    margin-bottom: 10px;
`

export const ButtonArea = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    background-color: rgba(255,255,255,0.6);
    justify-content: center;
    align-items: center;
    border-radius: 25px;
`