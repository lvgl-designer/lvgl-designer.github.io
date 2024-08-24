import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';

import MacIcon from '@site/static/img/anyui-mac.png';
import WebIcon from '@site/static/img/anyui-web.png';
import Wechat from '@site/static/img/wechat.png';
import { useState } from 'react';
import { DownloadDialog } from '../components/DownloadDialog';
import '../index.css';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [open, setOpen] = useState(false);
  const [link, setLink] = useState('');
  const [os, setOs] = useState('');

  return (
    <header
      className={clsx(
        'hero hero--primary bg-blue-5xxxxx00 bg-gray-600',
        styles.heroBanner,
      )}
    >
      <div className="container">
        <Heading as="h1" className="hero__title font-mono">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle p-5">{siteConfig.tagline}</p>
        <div
          className={clsx(styles.buttons, 'flex flex-wrap items-center gap-5')}
        >
          <a
            className="button button--secondary button--lg space-x-2 flex items-center"
            onClick={() => {
              setOs('Mac');
              setLink(
                'https://pan.baidu.com/s/1ezHpfubikzRacm0QgeMU6A?pwd=5f1b',
              );
              setOpen(true);
            }}
          >
            <span>Mac</span>
            <i className="iconfont icon-download text-[20px]" />
          </a>
          <a
            className="button button--secondary button--lg space-x-2 flex items-center"
            onClick={() => {
              setOs('Windows');
              setLink(
                'https://pan.baidu.com/s/1E3EmYqSEMExLvDPp6GN7LQ?pwd=idbj',
              );
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
          <a className="button button--secondary button--lg space-x-2 flex items-center disabled">
            <span>Linux</span>
          </a>
        </div>
        <DownloadDialog
          open={open}
          onClose={() => {}}
          content={
            <div className="m-2 space-y-2">
              <div>{os}版本下载由百度网盘提供支持</div>
              <Link className="button button--primary" to={link}>
                前往下载
              </Link>
            </div>
          }
        />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <div className="flex justify-center m-10">
        {/* <SvgIcon className="w-2/3 h-2/3" role="img" /> */}
        <img className="w-2/3 h-2/3" src={MacIcon} />
      </div>
      <div className="">
        <div className="text--center padding-horiz--md">
          <span className="text-2xl text--bold">
            跨平台，支持Mac、Windows和Web
          </span>
          <p>根据您的操作系统选择对应版本，或者试试免安装的Web版本吧</p>
        </div>
        <div className="flex justify-center items-center m-10">
          <img className="w-1/3 h-2/3" src={MacIcon} />
          <img className="w-1/3 h-2/3" src={WebIcon} />
        </div>
      </div>
      <main>
        <HomepageFeatures />
      </main>
      <div className="flex flex-col justify-center items-center m-10 space-y-2">
        <span>有问题欢迎联系我，添加请备注</span>
        <img src={Wechat} width={200} height={200} />
      </div>
    </Layout>
  );
}
