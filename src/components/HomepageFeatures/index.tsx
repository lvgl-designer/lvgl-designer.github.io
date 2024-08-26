type FeatureItem = {
  title: string;
  description: JSX.Element;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
};

const FeatureList: FeatureItem[] = [
  {
    title: '丰富的内置组件，而且支持自定义组件',
    // Svg: require('@site/static/img/anyui-home.svg').default,
    description: (
      <>
        丰富的内置组件，您还可以将已设计好的组件保存为自定义组件，避免重复设计
      </>
    ),
  },
  {
    title: '强大的组件布局功能，助您快速完成设计',
    // Svg: require('@site/static/img/anyui-home.svg').default,
    description: (
      <>
        拖拽自动对齐、快速复制组件等便捷操作让工作更高效，使用体验与Sketch一致
      </>
    ),
  },
  {
    title: '图片字体，资源统一管理',
    // Svg: require('@site/static/img/anyui-home.svg').default,
    description: (
      <>导入您需要的图片字体资源，工具会统一管理，并自动将资源转为代码</>
    ),
  },
  {
    title: '从始至终，无微不至',
    // Svg: require('@site/static/img/anyui-home.svg').default,
    description: (
      <>您只要负责设计，剩下的我们都帮您完成：生成代码，一键编译、启动模拟器</>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className="flex flex-col justify-center items-center m-10">
      <div className="text--center padding-horiz--md space-y-2">
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
