import Link from '@docusaurus/Link';
import { FC, useState } from 'react';

export const DownloadLink: FC = () => {
  const [open, setOpen] = useState(false);
  const [link, setLink] = useState('');
  const [os, setOs] = useState('');

  return (
    <div className="my-4">
      <div className="flex flex-wrap justify-center items-center gap-5">
        <a
          className="button button--secondary button--lg rounded-full w-48 space-x-2 flex justify-center items-center"
          onClick={() => {
            setOs('Mac');
            setLink('https://pan.baidu.com/s/1bHc335Ozf-A43MSxRWAFiA?pwd=qpeh');
            setOpen(true);
          }}
        >
          <i className="iconfont icon-mac text-[20px]" />
          <span>Mac (x86)</span>
        </a>
        <a
          className="button button--secondary button--lg rounded-full w-48 space-x-2 flex justify-center items-center"
          onClick={() => {
            setOs('Windows');
            setLink('https://pan.baidu.com/s/1NxYMBPokDuAUScqLohf3Lg?pwd=ej9e');
            setOpen(true);
          }}
        >
          <i className="iconfont icon-windows-fill text-[20px]" />
          <span>Windows</span>
        </a>
        <a
          className="button button--secondary button--lg rounded-full w-48 space-x-2 flex justify-center items-center"
          onClick={() => window.open('/playground')}
        >
          <i className="iconfont icon-web text-[20px]" />
          <span>Playground</span>
        </a>
        {/* <a className="button button--secondary button--lg space-x-2 flex items-center disabled">
          <span>Linux</span>
        </a> */}
      </div>

      {open && (
        <div className="m-2 space-y-2">
          <div>{os}版本下载由百度网盘提供支持</div>
          <Link className="button button--primary" to={link}>
            前往下载
          </Link>
        </div>
      )}
    </div>
  );
};
