import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';

import MacIcon from '@site/static/img/anyui-mac.png';
import WebIcon from '@site/static/img/anyui-web.png';
import Wechat from '@site/static/img/wechat.png';
import { DownloadLink } from '../components/DownloadLink';
import '../index.css';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

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
        <DownloadLink />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Anyui是一个基于LVGL嵌入式开源图形库的GUI人机界面设计工具，集设计、代码生成、编译运行、设备模拟于一体，旨在帮助开发者快速设计、开发、调试嵌入式设备的图形界面，并支持多种平台。"
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
          <DownloadLink />
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
