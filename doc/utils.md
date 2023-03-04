<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@taiyuuki/utils](./utils.md)

## utils package

## Classes

|  Class | Description |
|  --- | --- |
|  [EventsControler](./utils.eventscontroler.md) | **_(BETA)_** 用于管理多个DOM事件，适用于组件销毁时，注销组件内绑定的所有事件。 |

## Functions

|  Function | Description |
|  --- | --- |
|  [arrMove(arr, from, to)](./utils.arrmove.md) | 移动数组中的某一项至指定位置 |
|  [arrRandom(arr)](./utils.arrrandom.md) | 获取数组中随机一项 |
|  [arrRemove(arr, value)](./utils.arrremove.md) | 移除数组中的一项 |
|  [arrToObj(arr, v)](./utils.arrtoobj.md) | 将数组转换为对象 |
|  [arrUnique(arr)](./utils.arrunique.md) | 数组去重 |
|  [blobToDateURI(blob)](./utils.blobtodateuri.md) | Blob转base64 |
|  [canvasToBlob(cvs)](./utils.canvastoblob.md) | 异步的方式转换canvas为blob |
|  [canvasToImage(cvs)](./utils.canvastoimage.md) | canvas转image |
|  [colorGetContrast(color)](./utils.colorgetcontrast.md) | 获取对比色 |
|  [compose(fns)](./utils.compose.md) | 函数组合，前一个函数的返回值作为下一个函数的参数 |
|  [dataURIToBlob(dataURI, mimeType)](./utils.datauritoblob.md) | base64转blob |
|  [dateNow(format)](./utils.datenow.md) | 获取现在的时间 |
|  [debounce(func, timeFrame)](./utils.debounce.md) | 函数防抖 |
|  [deepEqual(a, b)](./utils.deepequal.md) | 对比两值 |
|  [domGetCSS(el, prop)](./utils.domgetcss.md) | 获取dom元素的CSS属性 |
|  [domGetEl(selector)](./utils.domgetel.md) | 获取dom元素 |
|  [domGetSize(el)](./utils.domgetsize.md) | 获取dom元素或window的大小 |
|  [domSetCSS(el, css)](./utils.domsetcss.md) | 给dom元素设置CSS属性 |
|  [domSetCssVar(varName, value, el)](./utils.domsetcssvar.md) | 给DOM元素添加CSS变量 |
|  [downloadBlob(blob, imageName)](./utils.downloadblob.md) | 下载blob文件 |
|  [downloadByURL(URL, fileName)](./utils.downloadbyurl.md) | 通过URL下载文件 |
|  [downloadCanvas(cvs, imageName)](./utils.downloadcanvas.md) | 下载canvas图片 |
|  [downloadImage(img, imageName)](./utils.downloadimage.md) | 图片下载 |
|  [hexToRgb(hex)](./utils.hextorgb.md) | hex转rgb |
|  [imageGetType(filename)](./utils.imagegettype.md) | 获取图片类型 |
|  [imageResize(img, size, type)](./utils.imageresize.md) | 改变图片尺寸 |
|  [imageToBlob(img)](./utils.imagetoblob.md) | image元素转blob |
|  [imageToCanvas(img, size)](./utils.imagetocanvas.md) | image元素转canvas |
|  [imageToDataURI(img, type)](./utils.imagetodatauri.md) | image元素转base64 |
|  [isBase64(str)](./utils.isbase64.md) | 判断字符串是否是base64格式的 |
|  [isBlob(blob)](./utils.isblob.md) | 判断是否是Blob对象 |
|  [isDate(d)](./utils.isdate.md) | 判断是否是Date对象 |
|  [isElement(el)](./utils.iselement.md) | 判断元素是否是DOM元素 |
|  [isEmptyArray(v, nullable)](./utils.isemptyarray.md) | 判断是否是空数组 |
|  [isEmptyObj(v, nullable)](./utils.isemptyobj.md) | 判断是否是空对象 |
|  [isEmptyString(s, trim)](./utils.isemptystring.md) | 判断是否是空字符串或空值 |
|  [isFile(file)](./utils.isfile.md) | 判断是否是File对象 |
|  [isFn(fn)](./utils.isfn.md) | 判断是否是方法 |
|  [isHexColor(color)](./utils.ishexcolor.md) | 判断是否是合法的hex颜色值 |
|  [isHTMLElement(hel)](./utils.ishtmlelement.md) | 判断元素是否是html元素 |
|  [isNotEmptyString(s, trim)](./utils.isnotemptystring.md) | 判断是否是空字符串，同时不能是空值 |
|  [isNotVoid(t)](./utils.isnotvoid.md) | 判断是否是空值，空值包括null、undefined、NaN |
|  [isNull(n)](./utils.isnull.md) | 判断是否是null |
|  [isNumber(n)](./utils.isnumber.md) | 判断是否是数字，不包括NaN、INFINITY |
|  [isObject(o)](./utils.isobject.md) | 判断是否是对象，不包括数组和null |
|  [isRegexp(r)](./utils.isregexp.md) | 判断是否是正则表达式 |
|  [isRgbColor(color)](./utils.isrgbcolor.md) | 判断是否是合法的RGB值 |
|  [isUndefined(u)](./utils.isundefined.md) | 判断是否是undefined |
|  [isVoid(t)](./utils.isvoid.md) | 判断是否是空值，空值包括null、undefined、NaN |
|  [isWindow(win)](./utils.iswindow.md) | 判断元素是否是wnidow |
|  [isWindowOrElement(el)](./utils.iswindoworelement.md) | 判断元素是否是window或DOM元素 |
|  [keyIn(key, obj)](./utils.keyin.md) | 判断某个对象是否有某个属性 |
|  [mathBetween(v, min, max)](./utils.mathbetween.md) | 给定一个数字，返回一个保持位于两数之间的数 |
|  [mathRandomInt(from, to)](./utils.mathrandomint.md) | 随机整数 |
|  [mathToFixed(n, digit)](./utils.mathtofixed.md) | 四舍五入 |
|  [mathToHex(n)](./utils.mathtohex.md) | 10进制转16进制 |
|  [objectEntries(obj)](./utils.objectentries.md) | Object.entries的返回值，提供类型推断 |
|  [objectKeys(o)](./utils.objectkeys.md) | Object.keys的返回值，提供类型推断 |
|  [objectPick(obj, keys)](./utils.objectpick.md) | 提取对象中部分属性 |
|  [rgbToHex(rgb)](./utils.rgbtohex.md) | rgb转hex |
|  [storageGet(key, empty)](./utils.storageget.md) | 从localStorage读取 |
|  [storageRemove(key)](./utils.storageremove.md) | 从localStorage移除 |
|  [storageSet(key, value)](./utils.storageset.md) | 保存至localStorage |
|  [strCapital(str)](./utils.strcapital.md) | 首字母大写 |
|  [strComplement(n, len, char)](./utils.strcomplement.md) | 根据需要的长度，在字符串前补足指定字符（比如0） |
|  [strEnsurePrefix(s, prefix)](./utils.strensureprefix.md) | 确保字符串有特定前缀，没有则添加 |
|  [strEnsureSuffix(s, suffix)](./utils.strensuresuffix.md) | 确保字符串有特定后缀，没有则添加 |
|  [strNoPrefix(s, prefix)](./utils.strnoprefix.md) | 确保字符串没有特定前缀，有则删除 |
|  [strNoSuffix(s, suffix)](./utils.strnosuffix.md) | 确保字符串没有特定后缀，有则删除 |
|  [strRandom(count, radix)](./utils.strrandom.md) | 获取指定长度随机字符 |
|  [strUuid()](./utils.struuid.md) | 生成UUID |
|  [throttle(func, timeFrame, immediately)](./utils.throttle.md) | 函数节流 |
|  [throwTypeError(type, name)](./utils.throwtypeerror.md) | 抛出类型错误 |
|  [urlToBlob(url)](./utils.urltoblob.md) | 请求url数据并转换为blob |
|  [urlToDateURI(url, type)](./utils.urltodateuri.md) | 通过图片url转换base64 |
