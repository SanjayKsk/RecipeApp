
import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { NavigationContainer , DefaultTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screens/Splash';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import { getRecipesList } from "./src/http";
import RecipeDetails from './src/screens/RecipeDetails';

const Stack = createNativeStackNavigator();

export const RecipesContext = React.createContext();
export const HealthyRecipesContext = React.createContext();
const theme ={
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff'
  }
}
export default function App() {
  const [recipes, setRecipes] = useState([]);
  const[healthyRecipes, setHealthyRecipes] = useState([]);

  useEffect(() => {
    (async () => {
      const rec = await handleRecipesFetch(null, '15');
      setRecipes(rec);
      const healthyRec = await handleRecipesFetch('healthy', '5')
      setHealthyRecipes(healthyRec);
    })()
  }, []);
  
  const handleRecipesFetch = async (tags, size) =>{
    try{
      const recipes = await getRecipesList(tags, size)
      return recipes?.data?.results;
    } catch (e){
      console.log('error:>> ' , e)
    }
    
  }
  return (
    <HealthyRecipesContext.Provider value={{healthyRecipes, setHealthyRecipes}}>
      <RecipesContext.Provider value={{recipes, setRecipes}}>
        <NavigationContainer  theme={theme} >
  
          <Stack.Navigator screenOptions={{ headerTitleAlign: 'center', headerShadowVisible: false}}>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}/>
            <Stack.Screen name="Home" component={Home} options={{ headerLeft: null, gestureEnabled: false, headerBackVisible: false}}/>
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="RecipeDetails" component={RecipeDetails} options = {{title: ''}} />
          </Stack.Navigator>
        </NavigationContainer>
      </RecipesContext.Provider>
    </HealthyRecipesContext.Provider>
  );
}

const styles = StyleSheet.create({
  
});
