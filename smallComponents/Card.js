import { View, Text, Image } from 'react-native'
import React from 'react'

const Card= ({ title, subtitle, imageUri, children }) => {
    return (
      <View className='p-4 bg-white rounded-lg shadow-md'>
        {imageUri && (
          <Image className='w-full h-32 mb-4' source={{ uri: imageUri }} />
        )}
        {title && <Text className='text-lg font-semibold mb-2'>{title}</Text>}
        {subtitle && <Text className='text-gray-500 mb-4'>{subtitle}</Text>}
        <View>{children}</View>
      </View>
    );
  };

  export default Card;