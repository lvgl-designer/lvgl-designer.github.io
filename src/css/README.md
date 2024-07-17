# Use iconfont

## Add iconfont to project on <https://www.iconfont.cn/>

## Download project files from <https://www.iconfont.cn/>

## Unzip the iconfont files and place them under `src/css`

- iconfont.css
- iconfont.woff
- iconfont.woff2
- iconfont.ttf

## Change font path in `src/css/iconfont.css`

```css
@font-face {
  font-family: "iconfont"; /* Project id 4623694 */
  src: url('./iconfont.woff2?t=1721186577241') format('woff2'),
       url('./iconfont.woff?t=1721186577241') format('woff'),
       url('./iconfont.ttf?t=1721186577241') format('truetype');
}
```

## Add iconfont.css to `customCss` in `docusaurus.config.js`

```typescript
presets: [
    [
      {
        theme: {
          customCss: ['./src/css/custom.css', './src/css/iconfont.css'],
        },
      } satisfies Preset.Options,
    ],
  ],
```

## Use iconfont in your code

```typescript
<i className="iconfont icon-download"></i>
```

*`icon-download` is defined in `iconfont.css`*
