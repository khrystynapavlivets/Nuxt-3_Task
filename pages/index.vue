<template>
<div>
    <TheNavigation />
    <TheHeader />
    <TheSection />
    <TheAside />
    <TheFooter />
    <ApiData/>
</div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation.vue'
import TheHeader from '@/components/TheHeader.vue'
import TheSection from '@/components/TheSection.vue'
import TheAside from '@/components/TheAside.vue'
import TheFooter from '@/components/TheFooter.vue'
import  ApiData from '@/components/ApiData.vue'

export default {
    components: {
        TheNavigation,
        TheHeader,
        TheSection,
        TheAside,
        TheFooter,
        ApiData,
    },
}
</script>

