import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';

import MacIcon from '@site/static/img/anyui-mac.png';
import WebIcon from '@site/static/img/anyui-web.png';
import Wechat from '@site/static/img/wechat.png';
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
        <div className={clsx(styles.buttons, 'space-x-5')}>
          <Link
            className="button button--secondary button--lg space-x-2 flex items-center"
            to="https://pan.baidu.com/s/1IBW-Flz_OahJNJlg1OKq0g"
          >
            <span>Mac</span>
            <i className="iconfont icon-download text-[20px]" />
          </Link>
          <Link
            className="button button--secondary button--lg space-x-2 flex items-center"
            to="https://pan.baidu.com/s/1IBW-Flz_OahJNJlg1OKq0g"
          >
            <span>Windows</span>
            <i className="iconfont icon-download text-[20px]" />
          </Link>
          <a
            className="button button--secondary button--lg"
            onClick={() => window.open('/playground')}
          >
            Web
          </a>
          <a className="button button--secondary button--lg disabled">Linux</a>
        </div>
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
          <p>根据您的操作系统选择对应版本，或者直接在线尝试吧</p>
        </div>
        <div className="flex justify-center items-center m-10">
          <img className="w-1/3 h-2/3" src={MacIcon} />
          <img className="w-1/3 h-2/3" src={WebIcon} />
        </div>
      </div>
      <main>
        <HomepageFeatures />
      </main>
      <div className="flex flex-col justify-center items-center m-10">
        <span>欢迎联系我，添加请备注</span>
        <img src={Wechat} width={200} height={200} />
      </div>
    </Layout>
  );
}
