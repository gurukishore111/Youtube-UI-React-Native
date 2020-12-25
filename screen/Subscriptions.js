import React, { PureComponent, useState } from 'react'
import { Text, View,ScrollView,TouchableOpacity } from 'react-native';
import  styled  from 'styled-components';
import Card from '../components/Card';



function SubscriptionScreen() {
    const Videodata = [
        {
            id: 2,
            image: "https://res.cloudinary.com/gk1/image/upload/v1607676054/DoneWithIt_2_pfpfnj.png",
            title: "FULL STACK MOVIE STREAMING IOS & ANDROID APP in React Native + firebase",
            views: "2K views",
            channelName: "Dev Gk",
            date: "June 16, 2020",
            channelLogo:"https://yt3.ggpht.com/ytc/AAUvwnjDa2cVQTP9WIj3ioCiVhU_17ZmnCFfi0enJQhu=s48-c-k-c0xffffffff-no-rj-mo",
            description: "FULL STACK MOVIE STREAMING IOS & ANDROID  APP in React Native + firebase",
            video:"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
            
        },
        {
            id: 1,
            image: "https://www.designyourway.net/drb/wp-content/uploads/2017/04/Nature-Wallpaper-Desktop-Background-26-1600x900.jpg",
            title: "Nature Therapy: Relaxing Full Motion Forestry with Natural Sounds",
            views: "505K views",
            channelName: "Semi:Free Creative",
            date: "May 2, 2015",
            channelLogo:"https://yt3.ggpht.com/ytc/AAUvwni0T5pgm-C03IC0LuAKG7_jt2-dl0TZrLXsj5tT=s48-c-k-c0xffffffff-no-rj-mo",
            description: "Lil Bodhi is is a nature therapy video project to bring the serenity of the natural world into the home or healing environment to provide a more tranquil experience. We strive to use fewer camera cuts and movements to support a soothed and relaxed experience, all while engaging focus through vibrant colors and organic sounds direct from nature. What makes Lil Bodhi videos so unique is that they are developed to experience the serenity of nature and the environment from a child's point-of-view.",
            video:"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
        },
        
        {
            id: 3,
            image: "https://www.designyourway.net/drb/wp-content/uploads/2017/04/Nature-Wallpaper-Desktop-Background-26-1600x900.jpg",
            title: "Nature Therapy: Relaxing Full Motion Forestry with Natural Sounds",
            views: "505K views",
            channelName: "Semi:Free Creative",
            date: "May 2, 2015",
            channelLogo:"https://yt3.ggpht.com/ytc/AAUvwni0T5pgm-C03IC0LuAKG7_jt2-dl0TZrLXsj5tT=s48-c-k-c0xffffffff-no-rj-mo",
            description: "Lil Bodhi is is a nature therapy video project to bring the serenity of the natural world into the home or healing environment to provide a more tranquil experience. We strive to use fewer camera cuts and movements to support a soothed and relaxed experience, all while engaging focus through vibrant colors and organic sounds direct from nature. What makes Lil Bodhi videos so unique is that they are developed to experience the serenity of nature and the environment from a child's point-of-view.",
            video:"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
            
        },
        {
            id: 4,
            image: "https://res.cloudinary.com/gk1/image/upload/v1607675716/DoneWithIt_1_ikxzao.png",
            title: "Nature Therapy: Relaxing Full Motion Forestry with Natural Sounds",
            views: "505K views",
            channelName: "Semi:Free Creative",
            date: "May 2, 2015",
            channelLogo:"https://yt3.ggpht.com/ytc/AAUvwnjDa2cVQTP9WIj3ioCiVhU_17ZmnCFfi0enJQhu=s48-c-k-c0xffffffff-no-rj-mo",
            description: "Lil Bodhi is is a nature therapy video project to bring the serenity of the natural world into the home or healing environment to provide a more tranquil experience. We strive to use fewer camera cuts and movements to support a soothed and relaxed experience, all while engaging focus through vibrant colors and organic sounds direct from nature. What makes Lil Bodhi videos so unique is that they are developed to experience the serenity of nature and the environment from a child's point-of-view.",
            video: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
            
        },
        {
            id: 5,
            image: "https://www.designyourway.net/drb/wp-content/uploads/2017/04/Nature-Wallpaper-Desktop-Background-26-1600x900.jpg",
            title: "Nature Therapy: Relaxing Full Motion Forestry with Natural Sounds",
            views: "505K views",
            channelName: "Semi:Free Creative",
            date: "May 2, 2015",
            channelLogo:"https://yt3.ggpht.com/ytc/AAUvwni0T5pgm-C03IC0LuAKG7_jt2-dl0TZrLXsj5tT=s48-c-k-c0xffffffff-no-rj-mo",
            description: "Lil Bodhi is is a nature therapy video project to bring the serenity of the natural world into the home or healing environment to provide a more tranquil experience. We strive to use fewer camera cuts and movements to support a soothed and relaxed experience, all while engaging focus through vibrant colors and organic sounds direct from nature. What makes Lil Bodhi videos so unique is that they are developed to experience the serenity of nature and the environment from a child's point-of-view.",
            video: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
            
        },
        {
            id: 6,
            image: "https://www.designyourway.net/drb/wp-content/uploads/2017/04/Nature-Wallpaper-Desktop-Background-26-1600x900.jpg",
            title: "Nature Therapy: Relaxing Full Motion Forestry with Natural Sounds",
            views: "505K views",
            channelName: "Semi:Free Creative",
            date: "May 2, 2015",
            channelLogo:"https://yt3.ggpht.com/ytc/AAUvwni0T5pgm-C03IC0LuAKG7_jt2-dl0TZrLXsj5tT=s48-c-k-c0xffffffff-no-rj-mo",
            description: "Lil Bodhi is is a nature therapy video project to bring the serenity of the natural world into the home or healing environment to provide a more tranquil experience. We strive to use fewer camera cuts and movements to support a soothed and relaxed experience, all while engaging focus through vibrant colors and organic sounds direct from nature. What makes Lil Bodhi videos so unique is that they are developed to experience the serenity of nature and the environment from a child's point-of-view.",
            video: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
          
            
        },
    ]
    
    const [videodata, setvideoData] = useState(Videodata);
        return (
            <View style={{flex:1,backgroundColor:"white"}}>
                <View style={{flexDirection:"row"}}>
                    <Profile source={{ uri: "https://res.cloudinary.com/gk1/image/upload/v1607589248/nwdn_file_temp_1605835131139_rnmltz.jpg" }} />
                    <Profile1 source={{ uri: "https://yt3.ggpht.com/ytc/AAUvwnjDa2cVQTP9WIj3ioCiVhU_17ZmnCFfi0enJQhu=s48-c-k-c0xffffffff-no-rj-mo"}} />
                    <Profile2 source={{ uri: "https://yt3.ggpht.com/ytc/AAUvwni0T5pgm-C03IC0LuAKG7_jt2-dl0TZrLXsj5tT=s48-c-k-c0xffffffff-no-rj-mo" }} /> 
                    <Profile3 source={{ uri: "https://i.ytimg.com/vi/ftT_suCGH44/maxresdefault.jpg" }} /> 
                </View>
                <View style={{marginTop:120}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{marginBottom:90}}>
                    {
                            videodata.map((item,index) => (
                                <TouchableOpacity key={index} onPress={() => props.navigation.navigate("VideoScreen",{data:item,AllData:videodata})} >
                                    <Card items={item} />
                                </TouchableOpacity>
                       ))
                        }   
                        </View>
            </ScrollView>
            </View>
            </View>
        )
    
}

const Profile = styled.Image`

position:absolute;
top:54px;
width:60px;
left:12px;
height:60px;
background:#C4C4C4;
border-radius:30px;


`

const Profile1 = styled.Image`

position:absolute;
top:54px;
width:60px;
left:92px;
height:60px;
background:#C4C4C4;
border-radius:30px;


`

const Profile2 = styled.Image`

position:absolute;
top:54px;
width:60px;
left:172px;
height:60px;
background:#C4C4C4;
border-radius:30px;


`
const Profile3 = styled.Image`

position:absolute;
top:54px;
width:60px;
left:262px;
height:60px;
background:#C4C4C4;
border-radius:30px;


`


export default SubscriptionScreen
