import './IconButton.scss';

import { Button } from 'antd';

import DarkThemeIcon from '../../assets/icons/moon.svg?react';
import LightThemeIcon from '../../assets/icons/sun.svg?react';
import { useDispatch } from '../../contexts/DispatchContext';
import { useTheme } from '../../contexts/ThemeContext';
import { ReducerActionsEnum } from '../../reducers/ReducerActionsEnum';
import { ThemesEnum } from '../../themes/ThemesEnum';
import { SvgIcon } from '../SvgIcon/SvgIcon';

interface IThemeButton {
  /**
   * Additional class name.
   */
  className?: string;
}

/**
 * Get button to toggle the theme of the app.
 */
export default function ThemeButton({ className }: IThemeButton) {
  const dispatch = useDispatch();
  const currentTheme = useTheme();

  const isLightTheme = currentTheme === ThemesEnum.Light;

  /**
   * Toggle theme of the app.
   */
  function handleClick() {
    dispatch?.({
      type: ReducerActionsEnum.SetTheme,
      content: isLightTheme ? ThemesEnum.Dark : ThemesEnum.Light
    });
  }

  return (
    <Button
      className={`icon-button theme-button ${className ?? ''}`}
      type="text"
      shape="circle"
      onClick={handleClick}
      icon={<SvgIcon SvgComponent={isLightTheme ? LightThemeIcon : DarkThemeIcon} />}
    />
  );
}
