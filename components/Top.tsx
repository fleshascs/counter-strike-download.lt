import Image from '../components/Image';
import { FC, ReactNode } from 'react';
import DownloadButtons from './DownloadButtons';

interface TopProps {
  title?: string | ReactNode;
}

const Top: FC<TopProps> = ({ title }) => {
  return (
    <div className='py-5 sm:py-16 relative flex flex-col lg:flex-row text-sm text-gray-400'>
      <div>
        <h1 className='font-bold text-7xl mb-2 text-white leading-[4rem] uppercase'>
          {title ? (
            title
          ) : (
            <>
              {/* <span style={{ color: '#a91c1c' }}>Counter-Strike 1.6</span> Download */}
              <span style={{ color: '#a91c1c' }}>Counter-Strike 1.6</span> Download
            </>
          )}
        </h1>
        The CS 1.6 game download is completely <span className='text-amber-300'>FREE</span> <br />
        Counter-Strike install contains latest <span className='text-amber-300'>2021</span> updates
        and is protected against malicious server commands
        <br /> <span className='text-amber-300'>CS</span> is comapatible with the latest PC Windows
        XP, Windows 7, Windows 8, Windows 10 versions.
        {/* Active servers - <span className='text-amber-300 inline-block min-w-[1rem]'>{servers}</span>{' '}
        <br />
        Filled with <span className='text-amber-300 inline-block min-w-[2rem]'>{players}</span>{' '}
        players out of
        <span className='text-amber-300 ml-1 inline-block min-w-[2rem]'> {maxPlayers}</span> total
        slots. Percentage player count -{' '}
        <span className='text-amber-300 inline-block min-w-[1rem]'>{percentage}%</span> */}
      </div>
      <Image
        className='ml-auto pt-5 sm:pt-0'
        containerStyle={{
          position: 'absolute',
          right: 0,
          width: '499px',
          zIndex: '-1',
          top: '-10px'
        }}
        width='800'
        height='1200'
        src={require('../images/t.png?resize&size=800')}
        webp={require('../images/t.png?resize&size=800&format=webp')}
        alt='CS 1.6 Download'
        title='Counter-Strike 1.6'
      />
      <DownloadButtons className='w-[10rem] mt-32' />
    </div>
  );
};
export default Top;
