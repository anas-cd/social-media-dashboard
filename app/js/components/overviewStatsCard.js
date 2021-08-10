mainvue.component('overview-card', {
    template: 
    /* html */
    `
    <div class="overview-card" :class="theme">
        <p class="catagory">{{ stats.type }}</p>
        <img :src="stats.logo" alt="icon">
        <p class="overview-num">{{ stats.num }}</p>
        <div class="overview-percentage" :class="updowner">
            <img src="images/icon-up.svg" alt="icon-up">
            <p><span>{{ percentages }}</span>%</p>
        </div>
    </div>
    
    `,
    computed: {
        updowner() {
            if (this.stats.status >= 0) {
                return "up"
            }
            return "down"
        },
        percentages() {
            if (this.stats.status >= 0) {
                return this.stats.status
            }
            return this.stats.status*-1
        }
    },
    props: {
        stats: {
            type: Object, 
            required: true
        },
        theme: {
            type: String, 
            required: true
        }
    }
        
})