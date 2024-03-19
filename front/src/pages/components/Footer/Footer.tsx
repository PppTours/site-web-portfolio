import './Footer.scss';

import AdditionalClassName from '../../../types/IClassName';

type IFooter = AdditionalClassName;

export default function Footer({ className }: IFooter) {
  return <div className={`footer ${className ?? ''}`}></div>;
}
