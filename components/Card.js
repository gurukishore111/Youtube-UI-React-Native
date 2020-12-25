import React, { PureComponent } from 'react'
import styled from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons'; 
import { TouchableOpacity,Text } from 'react-native';

function Card({ items }) {
    function truncate(input) {
        if (input.length > 35) {
           return input.substring(0, 60) + '...';
        }
        return input;
     };
    return (
            <Main>
            <Thumbnail source={{ uri: items.image }} />
            <AvatorProfile source={{ uri: items.channelLogo }} />{
                items.trending ?
                    <Heading><Text style={{color:"blue"}}>#{items.trending}</Text> {truncate(items.title)}</Heading>
                        :
                    <Heading>{truncate(items.title)}</Heading>
            }
            <SubHeading>{items.channelName}  •  {items.views}  • {items.date}</SubHeading>
            <TouchableOpacity style={{position: "absolute",
                width: 26,
                height: 21,
                left: 321.06,
                top: 246.15
            }}>
            <MaterialIcons name="more-vert" size={24} color="black" />
                </TouchableOpacity>
            </Main>
        )

}


const Main = styled.View`
width:100%;
height:303px;
background:white;
overflow:hidden;
margin-top:12px
`
const Thumbnail = styled.Image`

position: absolute;
width: 100%;
height: 223px;
left: 0px;
`

const AvatorProfile = styled.Image`

position: absolute;
width: 33px;
height: 33px;
left: 10px;
top: 233px;
border-radius:17px;
`

const Heading = styled.Text`
width: 244px;
left: 63px;
top: 233px;
position: absolute;
font-style: normal;
font-weight: normal;
font-size: 14px;
`;

const SubHeading = styled.Text`
position: absolute;
width: 209px;
left: 63px;
top: 270px;
color:black
font-style: normal;
font-weight: normal;
font-size: 11px;
`
export default Card
