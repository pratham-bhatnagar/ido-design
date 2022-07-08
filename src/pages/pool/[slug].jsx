import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { cardData } from '../../shared/mockData';
import { v4 } from 'uuid';

const PoolDetails = () => {
  const { id } = useParams();
  const [nav, setNav] = useState('project');
  const [pageData, setPageData] = React.useState();
  React.useEffect(() => {
    //here Api call will be done to GET /pool/:id
    cardData.map((item) => {
      if (item.id === id) {
        return setPageData(item);
      }
    });
  }, [id]);

  const scheduleData = [
    {
      round: 'Allocation',
      open: '2022-02-20',
      openTime: '08:00 UTC',
      closes: '2022-02-22',
      closesTime: '24:00 UTC',
    },
    {
      round: 'Validator Round',
      open: '2022-02-28',
      openTime: '08:00 UTC',
      closes: '2022-03-05',
      closesTime: '24:00 UTC',
    },
    {
      round: 'Staking Round',
      open: '2022-08-03',
      openTime: '08:00 UTC',
      closes: '2022-10-03',
      closesTime: '24:00 UTC',
    },
    {
      round: 'Sale Ends',
      open: '2022-10-15',
      openTime: '08:00 UTC',
      closes: '2022-11-20',
      closesTime: '24:00 UTC',
    },
  ];

  return (
    <>
      <div className="flex flex-col lg:flex-row w-[80vw] m-auto relative">
        <div className="flex flex-col items-center lg:flex-row gap-4 w-full">
          <span className="bg-white rounded-full w-[100px] h-[100px]" />
          <div className=" flex flex-col items-center gap-4 lg:ml-[20px]">
            <h1 className="flex gap-4 text-2xl font-semibold">
              {pageData?.ProjectName}
              <img className=" items-center" src="./images/bsc-logo.png" />
            </h1>
            <p className="text-sm opacity-60">{pageData?.description}</p>
            <p className="text-xs opacity-60"> $MSHARD = 0.25 BUSD </p>
          </div>
        </div>
        <div className="w-full m-auto gap-4  flex flex-col mt-[20px] ">
          <div className="w-full flex justify-center lg:justify-end ">
            <button
              type="button"
              className="bg-gradient-to-r   from-orange to-red rounded-3xl h-[40px] w-[50%]"
            >
              Approve
            </button>
          </div>

          <div className="flex flex-row opacity-50 gap-4 justify-center lg:justify-end ">
            <p className="items-center ">_________</p>
            <p className="items-baseline mt-[5px]"> SALE ENDS IN </p>
            <p className="items-center ">_________</p>
          </div>
          <span className="flex flex-row justify-center lg:justify-end opacity-50 gap-10">
            <span className="flex items-baseline gap-1">
              <p className="text-lg">08</p>
              <p className="text-xs flex ">D</p>
            </span>{' '}
            <span className="flex items-baseline gap-1">
              <p className="text-lg">16</p>
              <p className="text-xs flex ">H</p>
            </span>{' '}
            <span className="flex items-baseline gap-1">
              <p className="text-lg">49</p>
              <p className="text-xs flex ">M</p>
            </span>{' '}
            <span className="flex items-baseline gap-1">
              <p className="text-lg">05</p>
              <p className="text-xs flex ">S</p>
            </span>
          </span>
        </div>
      </div>
      <div className="flex w-[80vw] mt-[5vh] m-auto text-xs gap-4 flex-col">
        <div className="flex   flex-col lg:flex-row items-center gap-4 lg:gap-0 lg:justify-between">
          <p>Total Raise 38,999.70 BUSD {`(43%)`}</p>
          <p>Max Allocation: 500 BUSD</p>
          <p>Target Fund: 100,000 BUSD</p>
        </div>
        <div className="w-full bg-[#22243E] rounded-full h-2.5 ">
          <div
            className={`bg-gradient-to-r from-[#70CEFF] via-[#BB64F8] to-[#FC13F2] h-2.5 rounded-full w-[80%]`}
          />
        </div>
        <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row items-center lg:justify-between">
          <p>Participants: 4017/5000</p>
          <span className="flex w-full flex-row gap-2 justify-center lg:justify-end">
            <img src="./images/svgs/discord.svg" />
            <img src="./images/svgs/twitter.svg" />
            <img src="./images/svgs/telegram.svg" />
            <img src="./images/svgs/facebook.svg" />
            <img src="./images/svgs/Layer_2.svg" />
          </span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 w-[80vw] m-auto mt-[5vh]">
        <div className="bg-[#16182C] w-full h-fit p-[36px]">
          <h1 className="text-2xl font-semibold">POOL INFORMATION</h1>
          <div className="grid grid-cols-2 opacity-60 gap-3 pt-[37px] items-center">
            <p>Token Distribution</p> <p className="text-right">Date UTC</p>{' '}
            <p>Min. Allocation</p> <p className="text-right">0.01 BUSD</p>{' '}
            <p>Max. Allocation</p> <p className="text-right">500 BUSD</p>{' '}
            <p>Token Price</p> <p className="text-right">0.25 BUSD</p>{' '}
            <p>Access Type</p> <p className="text-right">Public</p>
          </div>
        </div>
        <div className="bg-[#16182C] w-full h-fit p-[36px] items-center">
          <h1 className="text-2xl font-semibold">TOKEN INFO</h1>
          <div className="grid grid-cols-2 opacity-60 gap-3 pt-[37px]">
            <p>Token Name</p> <p className="text-right">Magic Shard</p>{' '}
            <p>Token Symbol</p> <p className="text-right">$MSHARD</p>{' '}
            <p>Decimals</p> <p className="text-right">18</p> <p>Address</p>{' '}
            <p className="text-right">0.25 BUSD</p> <p>Total Supply</p>{' '}
            <p className="text-right">1,000,000,000 $MSHARD</p>
          </div>
        </div>
      </div>
      <nav className=" border-y-[1px] border-slate-800 mt-[20px]  text-sm overflow-auto ">
        <div className="flex flex-row gap-10 w-[80vw] m-auto py-[10px]">
          <p
            onClick={() => {
              setNav('project');
            }}
            className={`${
              nav === 'project'
                ? `underline decoration-[#FC6D51]  underline-offset-[12px]`
                : `cursor-pointer`
            }`}
          >
            PROJECT SUMMARY
          </p>
          <p
            onClick={() => {
              setNav('schudule');
            }}
            className={`${
              nav === 'schudule'
                ? `underline decoration-[#FC6D51]  underline-offset-[12px]`
                : `cursor-pointer`
            }`}
          >
            SCHEDULE
          </p>
          <p
            onClick={() => {
              setNav('comparison');
            }}
            className={`${
              nav === 'comparison'
                ? `underline decoration-[#FC6D51]  underline-offset-[12px]`
                : `cursor-pointer`
            }`}
          >
            COMPARISON
          </p>
          <p
            onClick={() => {
              setNav('token');
            }}
            className={`${
              nav === 'token'
                ? `underline decoration-[#FC6D51]  underline-offset-[12px]`
                : `cursor-pointer`
            }`}
          >
            {' '}
            TOKENOMICS
          </p>
          <p
            onClick={() => {
              setNav('roadmap');
            }}
            className={`${
              nav === 'roadmap'
                ? `underline decoration-[#FC6D51]  underline-offset-[12px]`
                : `cursor-pointer`
            }`}
          >
            ROADMAP
          </p>
        </div>
      </nav>
      <div className="w-[80vw] m-auto mt-[30px]">
        <p className="text-xl font-semibold">PROJECT SUMMARY</p>
        <p className="text-sm mt-[10px] opacity-60">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          porttitor non ligula suscipit condimentum. Curabitur convallis ut
          magna id pulvinar. Mauris luctus turpis neque, eget vulputate ante
          commodo non. Ut at dictum risus. Nulla felis sapien, iaculis non
          tincidunt et, feugiat et erat. Mauris tincidunt felis eu turpis
          eleifend, a porta magna viverra. Vestibulum efficitur lorem eu libero
          aliquet consequat.<br></br>
          <br></br> Vivamus sed elit risus. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Quisque sit amet
          leo vitae ipsum ultricies volutpat. Cras egestas nisi ac tincidunt
          consectetur. Nulla id fermentum ante. Suspendisse metus enim,
          efficitur a lorem mattis, dignissim sagittis magna. Morbi venenatis
          sollicitudin est, sit amet congue ipsum maximus vitae.
        </p>
        <div className="w-full h-[40vh] bg-[#16182C] mt-[40px]"></div>
      </div>
      <div className="w-[80vw] m-auto mt-[30px]">
        <p className="text-xl font-semibold">SCHEDULE</p>
        <div className="">
          <div className="grid grid-cols-6 bg-[#16182C] mt-[20px] py-[10px] px-[20px]">
            <p className="col-span-2">ROUND</p>
            <p className="col-span-2">OPENS</p>
            <p className="col-span-2">CLOSES</p>
          </div>
          {scheduleData.map((items) => {
            return (
              <div
                className="grid grid-cols-6 gap-4  text-sm my-[15px] opacity-60 px-[20px]"
                key={v4()}
              >
                <p className="col-span-2">{items.round}</p>
                <p>{items.open}</p>
                <p>{items.openTime}</p>
                <p>{items.closes}</p>
                <p>{items.closesTime}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[80vw] m-auto mt-[50px]">
        <p className="text-xl font-semibold">COMPARISON</p>
        <p className="text-sm mt-[10px] opacity-60">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          porttitor non ligula suscipit condimentum. Curabitur convallis ut
          magna id pulvinar. Mauris luctus turpis neque, eget vulputate ante
          commodo non. Ut at dictum risus. Nulla felis sapien, iaculis non
          tincidunt et, feugiat et erat. Mauris tincidunt felis eu turpis
          eleifend, a porta magna viverra. Vestibulum efficitur lorem eu libero
          aliquet consequat.<br></br>
          <br></br> Vivamus sed elit risus. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Quisque sit amet
          leo vitae ipsum ultricies volutpat. Cras egestas nisi ac tincidunt
          consectetur. Nulla id fermentum ante. Suspendisse metus enim,
          efficitur a lorem mattis, dignissim sagittis magna. Morbi venenatis
          sollicitudin est, sit amet congue ipsum maximus vitae.
        </p>
      </div>
      <div className="w-[80vw] m-auto mt-[50px]">
        <p className="text-xl font-semibold">TOKENOMICS</p>
        <p className="text-sm mt-[10px] opacity-60">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          porttitor non ligula suscipit condimentum. Curabitur convallis ut
          magna id pulvinar. Mauris luctus turpis neque, eget vulputate ante
          commodo non. Ut at dictum risus. Nulla felis sapien, iaculis non
          tincidunt et, feugiat et erat. Mauris tincidunt felis eu turpis
          eleifend, a porta magna viverra. Vestibulum efficitur lorem eu libero
          aliquet consequat.<br></br>
          <br></br> Vivamus sed elit risus. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Quisque sit amet
          leo vitae ipsum ultricies volutpat. Cras egestas nisi ac tincidunt
          consectetur. Nulla id fermentum ante. Suspendisse metus enim,
          efficitur a lorem mattis, dignissim sagittis magna. Morbi venenatis
          sollicitudin est, sit amet congue ipsum maximus vitae.
        </p>
        <div className="w-full h-[20vh] bg-[#16182C] mt-[40px]"></div>
      </div>
      <div className="w-[80vw] m-auto mt-[50px]">
        <p className="text-xl font-semibold">ROADMAP</p>
        <p className="text-sm mt-[10px] opacity-60">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          porttitor non ligula suscipit condimentum. Curabitur convallis ut
          magna id pulvinar. Mauris luctus turpis neque, eget vulputate ante
          commodo non. Ut at dictum risus. Nulla felis sapien, iaculis non
          tincidunt et, feugiat et erat. Mauris tincidunt felis eu turpis
          eleifend, a porta magna viverra. Vestibulum efficitur lorem eu libero
          aliquet consequat.<br></br>
          <br></br> Vivamus sed elit risus. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Quisque sit amet
          leo vitae ipsum ultricies volutpat. Cras egestas nisi ac tincidunt
          consectetur. Nulla id fermentum ante. Suspendisse metus enim,
          efficitur a lorem mattis, dignissim sagittis magna. Morbi venenatis
          sollicitudin est, sit amet congue ipsum maximus vitae.
        </p>
        <div className="w-full h-[20vh] bg-[#16182C] mt-[40px]"></div>
      </div>
    </>
  );
};
export default PoolDetails;
