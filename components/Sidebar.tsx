import { FC, ReactNode } from 'react';
import Card from './Card';

export interface SidebarProps {
  children?: ReactNode;
}

const icons = [require('../images/icons/cs-boost-b.png')];

const downloads = [
  {
    icon: icons[0],
    linkTitle: 'CS1.6 warzone download',
    title: 'CS 1.6 warzone'
  },
  {
    icon: icons[0],
    linkTitle: 'CS 1.6 windows 10',
    title: 'CS 1.6 windows 10'
  },
  {
    icon: icons[0],
    linkTitle: 'CS 1.6 full version',
    title: 'CS 1.6 full version'
  },
  {
    icon: icons[0],
    linkTitle: 'CS:Source',
    title: 'CS:Source'
  },
  {
    icon: icons[0],
    linkTitle: 'CS 1.6 original',
    title: 'CS 1.6 original'
  },
  {
    icon: icons[0],
    linkTitle: 'CS online portable',
    title: 'CS online portable'
  },
  {
    icon: icons[0],
    linkTitle: 'CS 1.6 with bots',
    title: 'CS 1.6 with bots'
  },
  {
    icon: icons[0],
    linkTitle: ' CS 2019',
    title: ' CS 2019'
  },
  {
    icon: icons[0],
    linkTitle: 'CS 1.6 GT',
    title: 'CS 1.6 GT'
  },
  {
    icon: icons[0],
    linkTitle: 'CS 1.6 V42',
    title: 'CS 1.6 V42'
  },
  {
    icon: icons[0],
    linkTitle: 'CS 1.6 V48',
    title: 'CS 1.6 V48'
  },
  {
    icon: icons[0],
    linkTitle: 'CS 1.6 V44',
    title: 'CS 1.6 V44'
  },
  {
    icon: icons[0],
    linkTitle: 'CS 1.6 V43',
    title: 'CS 1.6 V43'
  },
  {
    icon: icons[0],
    linkTitle: 'CS 1.6 windows 8',
    title: 'CS 1.6 windows 8'
  },
  {
    icon: icons[0],
    linkTitle: 'CS 1.6 windows 8.1',
    title: 'CS 1.6 windows 8.1'
  },
  {
    icon: icons[0],
    linkTitle: 'CS 1.6 non steam',
    title: 'CS 1.6 non steam'
  },
  {
    icon: icons[0],
    linkTitle: 'CS 1.6 final',
    title: 'CS 1.6 final'
  },
  {
    icon: icons[0],
    linkTitle: 'CS 1.6 2016 pro',
    title: 'CS 1.6 2016 pro'
  }
];

const Sidebar: FC<SidebarProps> = ({ children }) => {
  return (
    <>
      {/* <h2 className='text-amber-300 py-2 text-sm font-medium uppercase'>
        Download COUNTER-STRIKE 1.6
      </h2> */}

      {/* <DownloadButtons className='w-full' /> */}

      {/* <h2 className='text-amber-300 py-2 text-sm font-medium uppercase mt-5'>links</h2> */}
      <Card>
        <ul className='list-none'>
          {downloads.map((item) => (
            <li key={item.title}>
              <a title={item.linkTitle} className='py-10' href='/cs-1.6-warzone/'>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        {children}
      </Card>
    </>
  );
};
export default Sidebar;
