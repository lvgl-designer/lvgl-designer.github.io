type FeatureItem = {
  title: string;
  description: JSX.Element;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
};

const FeatureList: FeatureItem[] = [
  {
    title: '组件丰富，使用简单',
    // Svg: require('@site/static/img/anyui-home.svg').default,
    description: <>所见即所得</>,
  },
  {
    title: '拖拽设计，无需代码',
    // Svg: require('@site/static/img/anyui-home.svg').default,
    description: <>拖拽组件，搭出您的创意</>,
  },
  {
    title: '图片字体，统一管理',
    // Svg: require('@site/static/img/anyui-home.svg').default,
    description: <>导入您需要的图片字体资源，在应用中使用即可</>,
  },
  {
    title: '从始至终，无微不至',
    // Svg: require('@site/static/img/anyui-home.svg').default,
    description: (
      <>
        您只要负责设计，剩下的我们都帮您完成。生成代码，编译链接，启动应用，无需担心
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className="flex flex-col justify-center items-center m-10">
      <div className="text--center padding-horiz--md">
        <span className="text-2xl text--bold">{title}</span>
        <p>{description}</p>
      </div>
      <div className="flex flex-col justify-center">
        {Svg && <Svg className="w-full h-full" role="img" />}
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <div className="grid grid-cols-2">
      {FeatureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </div>
  );
}
