import DarkThemeIcon from 'src/assets/icons/moon.svg?react';
import LightThemeIcon from 'src/assets/icons/sun.svg?react';
import { SvgIconButton } from 'src/components/IconButton/IconButton';
import useDispatch from 'src/hooks/useDispatch';
import useTheme from 'src/hooks/useTheme';
import { ReducerActionsEnum } from 'src/reducers/ReducerActionsEnum';
import Theme from 'src/themes/Theme';
import AdditionalClassName from 'src/types/AdditionalClassName';

type ThemeToggleButtonProps = AdditionalClassName;

export default function ThemeToggleButton({ className }: ThemeToggleButtonProps) {
  const dispatch = useDispatch();
  const currentTheme = useTheme();
  const isLightTheme = currentTheme === Theme.Light;

  function toggleTheme(): void {
    dispatch?.({
      type: ReducerActionsEnum.SetTheme,
      content: isLightTheme ? Theme.Dark : Theme.Light
    });
  }

  return (
    <SvgIconButton
      className={`theme-button ${className ?? ''}`}
      onClick={toggleTheme}
      svg={isLightTheme ? LightThemeIcon : DarkThemeIcon}
    />
  );
}
