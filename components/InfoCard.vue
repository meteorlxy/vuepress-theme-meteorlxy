<template>
  <div class="info-card main-div">
    <div
      class="info-card-header"
      :style="headerStyle">
      <img
        class="info-avator"
        :src="avator"
        :alt="nickname"/>
    </div>

    <div class="info-card-body">
      <section class="info-nickname">{{ nickname }}</section>

      <section
        v-if="description"
        class="info-desc"
        v-html="description">
      </section>
      
      <section class="info-contact">
        <section
          v-if="location"
          class="info-location">
          <FontAwesomeIcon
            class="info-icon"
            :icon="faMapMarkerAlt"
            fixed-width/>

          <span>{{ location }}</span>
        </section>
        
        <section
          v-if="email"
          class="info-email">
          <a :href="`mailto:${email}`">
            <FontAwesomeIcon
              class="info-icon"
              :icon="faEnvelope"
              fixed-width/>

            <span>{{ email }}</span>
          </a>
        </section>
      </section>
    </div>

    <div class="info-card-footer">
      <section class="info-sns clearfix">
        <a
          v-for="(item, name) of sns"
          :key="name"
          :href="item.link"
          class="sns-link"
          target="_blank">
          <SnsIcon
            :name="name"
            :account="item.account"
            size="lg"/>
        </a>
      </section>
    </div>
  </div>
</template>

<script>
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'
import faMapMarkerAlt from '@fortawesome/fontawesome-free-solid/faMapMarkerAlt'
import SnsIcon from '@theme/components/widgets/SnsIcon'
import GeoPattern from 'geopattern'
export default {
  name: 'InfoCard',
  components: {
    SnsIcon
  },
  data () {
    return {
      faEnvelope,
      faMapMarkerAlt
    }
  },
  computed: {
    info () {
      return this.$site.themeConfig.personalInfo || {}
    },
    nickname () {
      return this.info.nickname || 'Unknown'
    },
    description () {
      return this.info.description || null
    },
    location () {
      return this.info.location || null
    },
    email () {
      return this.info.email || null
    },
    avator () {
      return this.info.avator || '/assets/img/avator_unknown.jpg'
    },
    sns () {
      return this.info.sns || {}
    },
    headerStyle () {
      return {
        'background-image': GeoPattern.generate(this.nickname, {
          color: '#eee'
        }).toDataUrl()
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@theme/styles/variables.styl'

$headerBgHeight = 150px
$avatorHeight = 120px

.info-card
  padding 0
  a
    color $grayTextColor
    font-weight normal
  .info-card-header
    height $headerBgHeight
    margin-bottom $avatorHeight * 0.5
    .info-avator
      display block
      width $avatorHeight
      height $avatorHeight
      margin 0 auto
      border 3px solid #fff
      border-radius 50%
      box-shadow: 0 0 2px alpha(black, 0.2)
      transform translateY($headerBgHeight - $avatorHeight * 0.5)
  .info-card-body
    cursor default
    padding 1rem
    border-bottom 1px solid $borderColor
    text-align center
    .info-nickname
      display block
      font-size 1.5rem
      font-weight bold
      text-align center
    .info-desc
      margin 1rem 0
    .info-contact
      color $grayTextColor
      word-break break-all
      .info-location
      .info-email
        margin 0.5rem 0
      .info-icon
        margin-right 0.3rem
  .info-card-footer
    text-align center
    padding 1rem

</style>

