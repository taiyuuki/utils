
/**
 * 函数“bubble_message”在鼠标点击事件的位置创建一个带有动画的动态气泡消息元素。
 * @public
 * @param e - `bubble_message` 函数中的参数 `e` 是 MouseEvent
 * 类型。它表示触发该函数的鼠标事件，例如单击时间。
 * @param mes - `bubble_message` 函数中的 `mes` 参数表示您想要在气泡消息中显示的消息。此消息将显示在用户点击的位置（由 `MouseEvent`
 * `e` 确定）的样式气泡元素中。
 * @param options - `bubble_message` 函数中的 `options` 参数是一个对象，其中包含可选的 `duration`、`color` 、`size` 和 `direction` 属性。
 * @example
 * ```ts
 * document.addEventListener('click', e => {
 *     bubble_message(e, 'Hello World!', { duration: '800ms', color: 'red', size: '20px', distance: '100px' })
 * })
 * ```
 */
const bubble_message = function() {
    let style: HTMLStyleElement | null

    return function(e: MouseEvent, mes: string, options?: {
        duration?: string,
        color?: string, 
        size?: string,
        distance?: number
    }) {
        const css = `
        .bubble-message {
            position: absolute;
            z-index: 1000;
            color: ${options?.color || 'black'};
            font-size: ${options?.size || '12px'};
            white-space: nowrap;
            animation: bubble-ani ${options?.duration || '1s'};
            user-select: none;
        }
        
        @keyframes bubble-ani {
            0% {
                opacity: 0;
            }
        
            5% {
                opacity: 1;
            }
        
            100% {
                transform: translateY(-${options?.distance || '50px'});
                opacity: 0;
            }
        }
        `
        if (!style) {
            style = document.createElement('style')
            style.innerHTML = css
            document.head.appendChild(style)
        }
    
        const pageX = e.pageX,
            pageY = e.pageY
        const showEl = document.createElement('span')
        showEl.className = 'bubble-message'
        document.body.appendChild(showEl)
        showEl.textContent = mes
        showEl.addEventListener('animationend', function() {
            document.body.removeChild(showEl)
        })
        showEl.style.left = `${pageX - showEl.clientWidth / 2}px`
        showEl.style.top = `${pageY - showEl.clientHeight - 5}px`
    }
}()

export { bubble_message }
