<template>
  <section id="drag-examples">
    <div class="examples">
      <div class="parent">
        <label>Move stuff between these two containers. Note how the stuff gets inserted near the mouse pointer? Great stuff.</label>
        <div class="wrapper">
          <div class="container" v-dragula="colOne" service="effects">
            <div v-for="text in colOne">
              <span class="handle">+</span>
              <span>{{text}}</text>
            </div>
          </div>
          <div class="container" v-dragula="colTwo" service="effects">
            <div v-for="text in colTwo">
              <span class="handle">+</span>
              <span>{{text}}</text>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'dragEffects',
  data () {
    return {
      colOne: [
        'You can move these elements between these two containers',
        'Moving them anywhere else isn"t quite possible',
        'There"s also the possibility of moving elements around in the same container, changing their position'
      ],
      colTwo: [
        'This is the default use case. You only need to specify the containers you want to use',
        'More interactive use cases lie ahead',
        'Another message'
      ]
    }
  },
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
  border: 2px solid yellow;
}

.ex-over {
border: 2px solid green;
}
</style>
