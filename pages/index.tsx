import Servers from '../components/Servers';
import Sidebar from '../components/Sidebar';
import GeneralLoading from '../components/GeneralLoading';
import { useFetchServers } from '../components/utils';
import Top from '../components/Top';
import Card from '../components/Card';
import HomePage from '../components/HomePage';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <>
      <Top />
      <NavBar />
      <div className='flex flex-col lg:flex-row lg:space-x-4 pb-24'>
        <div className='basis-1/3 pt-10 lg:pt-0'>
          <Sidebar />
        </div>
        <div className='basis-2/3'>
          {/* <h2 className='text-gray-300 py-2 text-sm font-medium uppercase'>VIP SERVERS</h2> */}
          <Card>
            <div className='p-2 pb-[50rem] font-medium'>
              <HomePage />
            </div>
          </Card>
          {/* <GeneralLoading error={error} isLoading={isLoading}>
            <Servers servers={servers} />
          </GeneralLoading> */}
        </div>
      </div>
    </>
  );
}
