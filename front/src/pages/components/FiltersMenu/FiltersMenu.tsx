import './FiltersMenu.scss';

import { Menu, MenuProps } from 'antd';
import { forwardRef, LegacyRef } from 'react';

import AdditionalClassName from '../../../types/IClassName';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem('Navigation One', 'sub1', null, [
    getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group')
  ]),

  getItem('Navigation Two', 'sub2', null, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')])
  ]),

  getItem('Navigation Three', 'sub4', null, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12')
  ]),

  getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group')
];

interface IFiltersMenu extends AdditionalClassName {
  hidden: boolean;
}

export const FiltersMenu = forwardRef(function FiltersMenu(
  { className, hidden = false }: IFiltersMenu,
  ref: LegacyRef<HTMLDivElement> | undefined
) {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  return (
    <div ref={ref} className={`filters ${hidden ? 'filters--hidden' : ''} ${className ?? ''}`}>
      <Menu
        className="filters__menu"
        onClick={onClick}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1', 'sub2', 'sub4']}
        mode="inline"
        items={items}
      />
    </div>
  );
});
