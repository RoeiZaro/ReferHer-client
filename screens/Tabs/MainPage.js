import { View, Text } from 'react-native'
import React from 'react'
import Card from '../../smallComponents/Card'
import { StatusBar as Statusbarr } from "expo-status-bar";
import { SafeAreaView } from 'react-native-safe-area-context'

const MainPage = () => {
    return (
            <SafeAreaView>
           <Statusbarr style="purple" />
           <Text className="font-extrabold  text-6xl text-pink-500 bg-purple-300">
          ReferHer
        </Text>
            <View className='basis-full grid-cols-3 flex-row'>

                <View className='flex-1 p-4 bg-gray-100'>
                    <Card
                        title="Title"
                        subtitle="Subtitle"
                        imageUri="https://picsum.photos/id/237/200/300">
                        <Text>Hello, world!</Text>
                    </Card>
                </View>
            </View>
            </SafeAreaView>
    )
}

export default MainPage