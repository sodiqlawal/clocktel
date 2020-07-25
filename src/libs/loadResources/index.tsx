import { Image } from 'react-native';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';

type FontType = { [name: string]: Font.FontSource };

export default async function LoadAppReasources() {
  const cacheImages = (images: number[]) => {
    return images.map((image) => {
      return typeof image === 'string'
        ? Image.prefetch(image)
        : Asset.fromModule(image).downloadAsync();
    });
  };

  const cacheFonts = (fonts: FontType[]) => {
    return fonts.map((font) => Font.loadAsync(font));
  };

  const imageAssets = cacheImages([
    // require('../../../assets/images/splash.png'),
  ]);

  const fontAssets = cacheFonts([
    {
      aileronRegular: require('../../../assets/fonts/aileronRegular.otf')
    },
    {
      aileronSemiBold: require('../../../assets/fonts/aileronSemiBold.otf')
    },
    {
      aileronBold: require('../../../assets/fonts/aileronBold.otf')
    },
  ]);

  return Promise.all([...imageAssets, ...fontAssets]);
}
