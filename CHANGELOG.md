# CHNAGELOG
##1.4.1(2018-06-15)

- 动态响应width和height的变化

##1.4.0(2018-06-15)

- codemirror.css的导入方式不是影响异步加载时样式错乱的原因，仍由库本身引入
- 响应codemirror的option实时变换，例如动态切换theme和mode

## 1.3.0(2018-06-13)

- 将codemirror.css提出，在外部导入

## 1.2.0(2018-06-02)

- 取消了属性class和style，添加了width和height属性，用来修改尺寸
- 修改向外暴露的codemirror相关属性，editor作为codemirror实例，codemirror为对象本身
