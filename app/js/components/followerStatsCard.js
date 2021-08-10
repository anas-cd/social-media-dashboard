mainvue.component('follwer-stats', {
    template: 
    /* html */
    `
    <div class="follwers-card" :class="followers.class, theme" @click="refs">
        <div class="account">
            <img src="images/loading.gif" alt="icon">
            <p>{{ followers.name }}</p>
        </div>
        <div class="follwers-number">
            <p class="foll-num">{{ followers.num }}</p>
            <p>{{ followers.type }}</p>
        </div>
        <div class="follwers-percentage " :class="updowner">
            <img src="images/icon-up.svg" alt="icon-up">
            <p>{{ folnum }} Today</p>
        </div>
    </div>
    
    `
    ,
    computed: {
        updowner() {
            if (this.followers.status >= 0) {
                return "up"
            }
            return "down"
        },
        folnum() {
            if (this.followers.status >= 0) {
                return this.followers.status
            }
            return this.followers.status*-1
        }
    },
    props: {

        followers: {
            type: Object,
            required: true
        },
        theme: {
            type: String, 
            required: true
        }
    },
    methods: {
        refs() {
            window.open(this.followers.ref, "_blank")
        }
    }
})