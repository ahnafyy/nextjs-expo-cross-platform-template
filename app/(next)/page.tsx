import Drawer from '@/vendors/daisyui/Drawer/Drawer';
import Menu from '@/vendors/daisyui/Menu/Menu';
import { Text, View } from 'react-native';
import tw from 'twrnc';

export default function App() {
  return (
    <><View style={tw`flex-1 items-center justify-center bg-white`}>
      <Text style={tw`text-xl font-bold text-blue-500`}>Hello Tailwind!</Text>
    </View>
    <Drawer open={true} side={<Menu className="p-4 w-80 h-full bg-base-200 text-base-content">
          <Menu.Item>
          <Text style={tw`text-xl font-bold text-blue-500`}>Hello Tailwind!</Text>
          </Menu.Item>
          <Menu.Item>
          <Text style={tw`text-xl font-bold text-blue-500`}>Hello Tailwind!</Text>
          </Menu.Item>
        </Menu>}>
    </Drawer>
    </>
  );
}