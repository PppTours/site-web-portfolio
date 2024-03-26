import DarkThemeIcon from 'src/assets/icons/moon.svg?react';
import LightThemeIcon from 'src/assets/icons/sun.svg?react';
import { SvgIconButton } from 'src/components/IconButton/IconButton';
import useDispatch from 'src/hooks/useDispatch';
import useTheme from 'src/hooks/useTheme';
import { ReducerActionsEnum } from 'src/reducers/ReducerActionsEnum';
import { ThemesEnum } from 'src/themes/ThemesEnum';
import AdditionalClassName from 'src/types/IClassName';

type IThemeButton = AdditionalClassName;

/**
 * Button to toggle the theme of the app.
 */
export default function ThemeButton({ className }: IThemeButton) {
  const dispatch = useDispatch();
  const currentTheme = useTheme();

  const isLightTheme = currentTheme === ThemesEnum.Light;

  /**
   * Toggle theme of the app.
   */
  function handleClick(): void {
    dispatch?.({
      type: ReducerActionsEnum.SetTheme,
      content: isLightTheme ? ThemesEnum.Dark : ThemesEnum.Light
    });
  }

  return (
    <SvgIconButton
      className={`theme-button ${className ?? ''}`}
      onClick={handleClick}
      SvgComponent={isLightTheme ? LightThemeIcon : DarkThemeIcon}
    />
  );
}
