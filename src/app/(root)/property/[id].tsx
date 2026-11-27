import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function PropertyDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-lg font-semibold">Property {id}</Text>
    </View>
  );
}
