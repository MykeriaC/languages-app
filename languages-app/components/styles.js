import styled from 'styled-components';
import {View, Text, Image} from 'react-native-elements';
import { Constants } from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

// colors for the application
// export const Colors= {
//     primary: "#ffffff",
//     secondary: "#ESE7EB",
//     tertiary: "#1F2937",
//     darkLight: "#9CA3AF",
//     brand: "#602809",
//     green: "#100"
// }

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 10}px;
`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-tems: center;
`;

export const PageLogo = styled.Image`
    width: 250px;
    height: 200px;
`

export const PageTitle = styled.Text`
    font-size: 30px;

`