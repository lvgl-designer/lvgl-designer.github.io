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
          className="button button--secondary button--lg space-x-2 flex items-center"
          onClick={() => {
            setOs('Mac');
            setLink('https://pan.baidu.com/s/1ezHpfubikzRacm0QgeMU6A?pwd=5f1b');
            setOpen(true);
          }}
        >
          <span>Mac (x86)</span>
          <i className="iconfont icon-download text-[20px]" />
        </a>
        <a
          className="button button--secondary button--lg space-x-2 flex items-center"
          onClick={() => {
            setOs('Windows');
            setLink('https://pan.baidu.com/s/1E3EmYqSEMExLvDPp6GN7LQ?pwd=idbj');
            setOpen(true);
          }}
        >
          <span>Windows</span>
          <i className="iconfont icon-download text-[20px]" />
        </a>
        <a
          className="button button--secondary button--lg space-x-2 flex items-center"
          onClick={() => window.open('/playground')}
        >
          <span>Web</span>
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
