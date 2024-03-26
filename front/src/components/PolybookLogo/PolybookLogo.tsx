import './PolybookLogo.scss';

import PolybookDarkLogo from 'src/assets/images/Polybook_dark.png';
import PolybookLightLogo from 'src/assets/images/Polybook_light.png';
import useTheme from 'src/hooks/useTheme';
import { ThemesEnum } from 'src/themes/ThemesEnum';
import AdditionalClassName from 'src/types/IClassName';

export type IPolybookLogo = AdditionalClassName;

/**
 * Polybook logo.
 */
export default function PolybookLogo({ className }: IPolybookLogo) {
  const currentTheme = useTheme();
  const isLightTheme = currentTheme === ThemesEnum.Light;

  return (
    <a className={`polybook-logo ${className ?? ''}`} href="/">
      <img
        className="polybook-logo__image"
        src={isLightTheme ? PolybookLightLogo : PolybookDarkLogo}
      />
    </a>
  );
}
