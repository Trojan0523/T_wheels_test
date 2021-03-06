// v-directives 自定义指令使用
let onClickDocument = ('click', (e) => {
  let {target} = e;
  callbacks.forEach((item) => {
    if (target === item || item.el.contains(target)) {
      return;
    } else {
      item.callback();
    }
  });
});
document.addEventListener('click', onClickDocument);
let callbacks = [];
export default {
  bind: function (el, binding) {
    callbacks.push({el, callback: binding.value});

  }
};

let removeListener = () => {
  document.removeEventListener('click', onClickDocument);
};

export {removeListener};
