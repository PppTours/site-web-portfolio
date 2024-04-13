import './PolybookLogo.scss';

import PolybookDarkLogo from 'src/assets/images/Polybook_dark.png';
import PolybookLightLogo from 'src/assets/images/Polybook_light.png';
import useTheme from 'src/hooks/useTheme';
import Theme from 'src/themes/Theme';
import AdditionalClassName from 'src/types/AdditionalClassName';

export type PolybookLogoProps = AdditionalClassName;

export default function PolybookLogo({ className }: PolybookLogoProps) {
  const currentTheme = useTheme();
  const isLightTheme = currentTheme === Theme.Light;

  return (
    <a className={`polybook-logo ${className ?? ''}`} href="/">
      <img
        className="polybook-logo__image"
        src={isLightTheme ? PolybookLightLogo : PolybookDarkLogo}
      />
    </a>
  );
}
