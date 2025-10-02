import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import tw from 'twrnc';
import ExampleCrossComponent from './ExampleCrossComponent';

/**
 * ExampleUsage - Demonstrates how to use the ExampleCrossComponent
 * 
 * This shows various configurations and usage patterns for the cross-platform component.
 * You can use this as a reference or as a Storybook-style component preview.
 */
const ExampleUsage = () => {
  return (
    <ScrollView style={tw`flex-1 bg-gray-50 p-4`}>
      <View style={tw`mb-6`}>
        <Text style={tw`text-2xl font-bold text-gray-800 mb-4`}>
          Cross-Platform Component Examples
        </Text>
        
        {/* Variants */}
        <View style={tw`mb-8`}>
          <Text style={tw`text-lg font-semibold text-gray-700 mb-3`}>
            Variants
          </Text>
          <View style={tw`flex-row flex-wrap gap-2`}>
            <ExampleCrossComponent 
              title="Primary" 
              variant="primary" 
              onPress={() => console.log('Primary pressed')}
            />
            <ExampleCrossComponent 
              title="Secondary" 
              variant="secondary" 
              onPress={() => console.log('Secondary pressed')}
            />
            <ExampleCrossComponent 
              title="Success" 
              variant="success" 
              onPress={() => console.log('Success pressed')}
            />
            <ExampleCrossComponent 
              title="Warning" 
              variant="warning" 
              onPress={() => console.log('Warning pressed')}
            />
            <ExampleCrossComponent 
              title="Error" 
              variant="error" 
              onPress={() => console.log('Error pressed')}
            />
          </View>
        </View>

        {/* Sizes */}
        <View style={tw`mb-8`}>
          <Text style={tw`text-lg font-semibold text-gray-700 mb-3`}>
            Sizes
          </Text>
          <View style={tw`flex-row flex-wrap gap-2 items-center`}>
            <ExampleCrossComponent 
              title="Small" 
              size="sm" 
              onPress={() => console.log('Small pressed')}
            />
            <ExampleCrossComponent 
              title="Medium" 
              size="md" 
              onPress={() => console.log('Medium pressed')}
            />
            <ExampleCrossComponent 
              title="Large" 
              size="lg" 
              onPress={() => console.log('Large pressed')}
            />
          </View>
        </View>

        {/* States */}
        <View style={tw`mb-8`}>
          <Text style={tw`text-lg font-semibold text-gray-700 mb-3`}>
            States
          </Text>
          <View style={tw`flex-row flex-wrap gap-2`}>
            <ExampleCrossComponent 
              title="Normal" 
              onPress={() => console.log('Normal pressed')}
            />
            <ExampleCrossComponent 
              title="Disabled" 
              disabled 
              onPress={() => console.log('This should not fire')}
            />
            <ExampleCrossComponent 
              title="Loading" 
              loading 
              onPress={() => console.log('This should not fire')}
            />
          </View>
        </View>

        {/* Custom Content */}
        <View style={tw`mb-8`}>
          <Text style={tw`text-lg font-semibold text-gray-700 mb-3`}>
            Custom Content
          </Text>
          <View style={tw`flex-row flex-wrap gap-2`}>
            <ExampleCrossComponent onPress={() => console.log('Custom content pressed')}>
              <View style={tw`flex-row items-center`}>
                <Text style={tw`text-white font-medium mr-2`}>★</Text>
                <Text style={tw`text-white font-medium`}>Favorite</Text>
              </View>
            </ExampleCrossComponent>
            
            <ExampleCrossComponent 
              variant="success" 
              onPress={() => console.log('Icon button pressed')}
            >
              <Text style={tw`text-white text-lg`}>✓</Text>
            </ExampleCrossComponent>
          </View>
        </View>

        {/* Custom Styling */}
        <View style={tw`mb-8`}>
          <Text style={tw`text-lg font-semibold text-gray-700 mb-3`}>
            Custom Styling
          </Text>
          <View style={tw`flex-row flex-wrap gap-2`}>
            <ExampleCrossComponent 
              title="Custom Style" 
              style={tw`shadow-lg border-2 border-purple-300`}
              onPress={() => console.log('Custom styled pressed')}
            />
            <ExampleCrossComponent 
              title="Full Width" 
              style={tw`w-full`}
              onPress={() => console.log('Full width pressed')}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ExampleUsage;