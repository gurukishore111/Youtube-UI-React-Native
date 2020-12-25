import React,{ useState,useEffect} from 'react'
import { ScrollView, TouchableOpacity, View ,Text } from 'react-native';
import Card from '../components/Card';
import { Video } from "expo-av";
import styled from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

function VideoScreen({ navigation, route }) {
    const [videoData, setVideoData] = useState();
    const { data } = route.params;
    const { AllData } = route.params;

    useEffect(() => {
        const DataRender = (data) => {
            const newData = AllData.filter(dataN => dataN.id !== data.id)
            setVideoData(newData)
        }  
        DataRender(data.id);
      },[data])
     

        return (
            <Container >
            
            <VideoContainer>
            <Video source={{
              uri:data.video
            }} shouldPlay resizeMode="cover" useNativeControls={true}  style={{ width:"100%",height:"100%" }}/>
                </VideoContainer>
                
            <VideoTitle>
                        {data.title}
                
                    </VideoTitle>
                    <TouchableOpacity style={{ left: 310, marginTop: -38 }} >
                     <MaterialIcons name="expand-more" size={24} color="black" />
                    </TouchableOpacity>
                    <View style={{ display: "flex", flexDirection: "row", padding: 30 }}>
                        <View>
                            <AntDesign name="like2" size={24} color="black" />
                            <Text>18 k</Text>
                        </View>
                        <View style={{marginLeft:32}}>
                        <AntDesign name="dislike2" size={24} color="black"  />
                        <Text>206</Text>
                        </View>
                        <View style={{ marginLeft: 32 }} >
                            <MaterialCommunityIcons name="share-outline" size={24} color="black" />
                            <Text>Share</Text>
                        </View>
                        <View style={{ marginLeft: 22 }} >
                        <MaterialCommunityIcons name="download" size={24} color="black" style={{marginLeft:22}} />
                        <Text>Downloads</Text> 
                        </View>
                        <View  style={{ marginLeft: 22 }}>
                            <AntDesign name="plussquareo" size={24} color="black" />
                            <Text>Save</Text>
                        </View>
                </View>
                <Line />
                <ChannelContainer>
                    <Profile source={{ uri: data.channelLogo }} />
                    <Text style={{ marginTop: 392, marginLeft: 62 }}>{data.channelName}</Text>
                    <TouchableOpacity> 
                        <Text style={{color:"red",fontWeight:"800",left:242,top:-20}}>SUBSCRIBE</Text>
                    </TouchableOpacity>
                </ChannelContainer>
                <Line2 />
                <ScrollView showsHorizontalScrollIndicator={false} style={{top:32}}>
               < MedContainer  >
               
                {
                AllData.map((data,index)=>(
                <TouchableOpacity key={index} onPress={() => navigation.navigate("VideoScreen",{data:data})} >
                <Card items={data} />
                </TouchableOpacity>
                ))
                }
                    </MedContainer>
                    </ScrollView>

            <StatusBar style="light" />
           
          </Container>
    )
    
}
 
const Container = styled.View`
flex:1;
background:white;
margin-bottom:12px;
`;


const VideoContainer = styled.View`
width:100%;
height:251px;
background:black;

`;

const VideoTitle = styled.Text`
margin-top:10px;
margin-bottom:10px;
margin-left:14px;
color:black;
font-size:16px;
font-weight:600
width:290px
`;

const Profile = styled.Image`

position: absolute;
width: 33px;
height: 33px;
left: 9px;
border-radius:15px;
top: 385px;
background-color:white


`
const Line = styled.View`
position: absolute;
width: 360px;
height: 0px;
left: 0px;
top: 383px;

border: 0.5px solid rgba(0, 0, 0, 0.2);`

const Line2 = styled.View`
position: absolute;
width: 360px;
height: 0px;
left: 0px;
top: 439px;

border: 0.5px solid rgba(0, 0, 0, 0.2);`

const ChannelContainer = styled.View`

position: absolute;
width: 360px;
height: 60px;
left: 12px;
top: 10px;

`;

const MedContainer =styled.View`
margin-top:13px;
margin-bottom:12px;
background-color:white;
`;

const Heading = styled.Text`
margin-top:20px;
margin-left:10px;
color:#18171C;
font-size:14px;
font-weight:600;
text-transform:uppercase


`;


export default VideoScreen;





