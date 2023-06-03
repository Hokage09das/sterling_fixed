import React from 'react';
import {AvenueDesc} from '../avenue-desc/AvenueDesc';
import {
  AvenueIcon1,
  AvenueIcon2,
  AvenueIcon3,
  AvenueIcon4,
  AvenueIcon5,
  AvenueIcon6,
  AvenueIcon7,
  AvenueIcon8,
  AvenueIcon9,
  AvenueIcon10
} from '../../assets/icons';

import avenue_map_image from '../../assets/images/avenue_map_image.png';
import classes from './style.module.scss';

const details1 = [
  {
    id: 1,
    text: 'Бульвар Эркиндик',
    icon: <AvenueIcon1 />
  },
  {
    id: 2,
    text: ' Большой выбор гос. и частных детских садов',
    icon: <AvenueIcon2 />
  },
  {
    id: 3,
    text: 'АУВК школа-гимназия №6 и средняя школа-лицей №28',
    icon: <AvenueIcon3 />
  },
  {
    id: 4,
    text: ' Медицинские центры, клиники, стоматологии',
    icon: <AvenueIcon4 />
  },
  {
    id: 5,
    text: 'Культурно-исторические достопримечательности',
    icon: <AvenueIcon5 />
  },
];

const details2 = [
  {
    id: 6,
    text: '15+ кофеен и ресторанов',
    icon: <AvenueIcon6 />
  },
  {
    id: 7,
    text: '5+ банков',
    icon: <AvenueIcon7 />
  },
  {
    id: 8,
    text: '9+ магазинов и супермаркетов',
    icon: <AvenueIcon8 />
  },
  {
    id: 9,
    text: '5+ салонов красоты',
    icon: <AvenueIcon9 />
  },
  {
    id: 10,
    text: '9+ бутиков и магазинов одежды',
    icon: <AvenueIcon10 />
  }
];

export const AvenueDescTwo = () => {
  return (
    <AvenueDesc style={{ height: 'auto'}}>
      <div className={classes.left}>
        <p>
          Жилой дом “Эркиндик авеню” расположен на пересечении улиц Раззакова и Чуйкова
        </p>
        <h2>
          в Золотом квадрате
        </h2>
        <p>
          <span>100м</span> от Бульвара Эркиндик (парк имени Дзержинского)
          в тихом уютном уголке <br/>
          Это дом премиум-класса, <span>новейший формат современного жилья</span>
        </p>
      
        <div>
          <p className={classes.list_title}>
            В шаговой доступности:
          </p>
          <div className={classes.details}>
            <ul>
              {
                details1.map((item) => (
                  <li key={item.id}>
                    {item.icon}
                    {item.text}
                  </li>
                ))
              }
            </ul>
            <ul>
              {
                details2.map((item) => (
                  <li key={item.id}>
                    {item.icon}
                    {item.text}
                  </li>
                ))
              }
            </ul>
          </div>
          
        </div>
      </div>
      <div className={classes.right}>
        <img
          src={avenue_map_image}
          alt='building on the map'
        />
      </div>
    </AvenueDesc>
  );
};
