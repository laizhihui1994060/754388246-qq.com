import { Message } from 'element-ui'

export default {
  isPhone(phone) {
    return /^1\d{10}$/.test(phone)
  },
  isLandline(val) {
    const reg = /^([0-9]{3,4}-)?[0-9]{7,8}$/
    return reg.test(val)
  },
  isEMail(mail) {
    return /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(mail)
  },
  isTel(tel) {
    return /^0\d{2,3}-?\d{7,8}$/.test(tel) || /^\d{7,8}$/.test(tel)
  },
  isIDCard(idCard) {
    return /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
      idCard
    )
  },
  isUrl(url) {
    const reg = /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i
    return reg.test(url)
  },
  copyText(text) {
    const button = document.createElement('button')
    document.body.appendChild(button)

    const copyBtn = new ClipboardJS(button, {
      text: () => text
    })

    copyBtn.on('success', function(e) {
      Message.success('复制成功')
      e.clearSelection()
      document.body.removeChild(button)
    })
    copyBtn.on('error', function(e) {
      document.body.removeChild(button)
    })

    button.click()
  },
  debounce(fn, delay) {
    let timer = null
    return function(...args) {
      if (timer) clearTimeout(timer)
      timer = setTimeout(function() {
        fn.apply(this, args)
      }, delay)
    }
  },
  throttle(fn, delay) {
    let flag = true
    return function(...args) {
      if (!flag) return
      flag = false
      setTimeout(() => {
        fn.apply(this, args)
        flag = true
      }, delay)
    }
  }
}
