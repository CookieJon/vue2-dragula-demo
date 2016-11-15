<template>
  <section id="drag-examples">
    <div class="examples">
      TODO: Please help ;)
    </div>
  </section>
</template>
<script>
export default {
  // TODO: add drag
  create () {
    let dragula = this.$dragula

    let service = dragula.createService({
      name: 'effects',
      drake: {
        copy: true
      }
    })

    // TODO: Use classlist: https://developer.mozilla.org/en/docs/Web/API/Element/classList
    service.on({
      accepts: (el, target) => {
        console.log('accepts: ', el, target)
        return true // target !== document.getElementById(left)
      },
      drag: (el, container) => {
        console.log('drag: ', el, container)
        el.classList.remove('ex-moved')
      },
      drop: (el, container) => {
        console.log('drop: ', el, container)
        el.classList.add('ex-moved')
      },
      over: (el, container) => {
        console.log('over: ', el, container)
        el.classList.add('ex-over')
      },
      out: (el, container) => {
        console.log('out: ', el, container)
        el.classList.remove('ex-over')
      }
    })
  }
}
</script>
<style>
.ex-moved {

}

.ex-over {

}
</style>
